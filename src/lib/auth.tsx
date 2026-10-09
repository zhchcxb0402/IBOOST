"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Session, User } from "@supabase/supabase-js";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { useProgress } from "@/store/progress";

export type Profile = {
  display_name: string | null;
  avatar_url: string | null;
};

type AuthCtx = {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  signInWithEmail: (email: string) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
  deleteAccount: () => Promise<{ error: string | null }>;
};

const Ctx = createContext<AuthCtx>({
  user: null,
  profile: null,
  loading: true,
  signInWithGoogle: async () => {},
  signInWithEmail: async () => ({ error: "Auth not configured" }),
  signOut: async () => {},
  deleteAccount: async () => ({ error: "Auth not configured" }),
});

export function useAuth() {
  return useContext(Ctx);
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const supabase = useMemo(
    () => (isSupabaseConfigured() ? createClient() : null),
    []
  );
  const [session, setSession] = useState<Session | null>(null);
  const [profileState, setProfileState] = useState<{
    userId: string;
    profile: Profile | null;
  } | null>(null);
  const [loading, setLoading] = useState(() => isSupabaseConfigured());

  useEffect(() => {
    if (!supabase) return;
    let cancelled = false;
    supabase.auth.getSession().then(({ data }: { data: { session: Session | null } }) => {
      if (cancelled) return;
      setSession(data.session);
      setLoading(false);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event: string, s: Session | null) => {
      setSession(s);
    });
    return () => {
      cancelled = true;
      subscription.unsubscribe();
    };
  }, [supabase]);

  const user = session?.user ?? null;
  const userId = user?.id ?? null;
  const profile =
    userId && profileState?.userId === userId ? profileState.profile : null;

  useEffect(() => {
    if (!supabase || !userId) return;
    let cancelled = false;
    supabase
      .from("profiles")
      .select("display_name, avatar_url")
      .eq("id", userId)
      .maybeSingle()
      .then(
        ({ data, error }: { data: Profile | null; error: unknown }) => {
        if (cancelled) return;
        if (error) {
          console.warn("profiles fetch failed (table may not exist yet)");
          return;
        }
        setProfileState({ userId, profile: data ?? null });
      });
    return () => {
      cancelled = true;
    };
  }, [supabase, userId]);

  const value: AuthCtx = {
    user,
    profile,
    loading,
    signInWithGoogle: async () => {
      if (!supabase) return;
      await supabase.auth.signInWithOAuth({
        provider: "google",
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      });
    },
    signInWithEmail: async (email) => {
      if (!supabase) return { error: "Auth not configured" };
      const { error } = await supabase.auth.signInWithOtp({
        email,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      return { error: error?.message ?? null };
    },
    signOut: async () => {
      if (!supabase) return;
      await supabase.auth.signOut();
    },
    deleteAccount: async () => {
      if (!supabase) return { error: "Auth not configured" };
      const { error } = await supabase.rpc("delete_own_account");
      if (error) return { error: error.message };
      await supabase.auth.signOut();
      useProgress.getState().reset();
      return { error: null };
    },
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
