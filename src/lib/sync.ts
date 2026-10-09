"use client";

import { useEffect, useRef } from "react";
import type { User } from "@supabase/supabase-js";
import { createClient, isSupabaseConfigured } from "@/lib/supabase/client";
import { useProgress, type SrsEntry } from "@/store/progress";
import type { Level } from "@/content/types";

export type ProgressSlice = {
  xp: number;
  hearts: number;
  streak: number;
  lastActiveDate: string | null;
  completedLessons: Record<string, true>;
  srs: Record<string, SrsEntry>;
  onboarded: boolean;
  selectedSubjects: Record<string, Level>;
};

export function getSlice(): ProgressSlice {
  const s = useProgress.getState();
  return {
    xp: s.xp,
    hearts: s.hearts,
    streak: s.streak,
    lastActiveDate: s.lastActiveDate,
    completedLessons: s.completedLessons,
    srs: s.srs,
    onboarded: s.onboarded,
    selectedSubjects: s.selectedSubjects,
  };
}

export function mergeProgress(
  local: ProgressSlice,
  remote: Partial<ProgressSlice>
): ProgressSlice {
  const srs: Record<string, SrsEntry> = { ...(remote.srs ?? {}) };
  for (const [id, entry] of Object.entries(local.srs ?? {})) {
    const r = srs[id];
    if (!r || entry.due > r.due) srs[id] = entry;
  }
  return {
    xp: Math.max(local.xp ?? 0, remote.xp ?? 0),
    hearts: local.hearts,
    streak: Math.max(local.streak ?? 0, remote.streak ?? 0),
    lastActiveDate:
      (local.lastActiveDate ?? "") > (remote.lastActiveDate ?? "")
        ? local.lastActiveDate
        : (remote.lastActiveDate ?? local.lastActiveDate),
    completedLessons: {
      ...(remote.completedLessons ?? {}),
      ...(local.completedLessons ?? {}),
    },
    srs,
    onboarded: Boolean(local.onboarded || remote.onboarded),
    selectedSubjects: {
      ...(remote.selectedSubjects ?? {}),
      ...(local.selectedSubjects ?? {}),
    },
  };
}

function deepEqual(a: ProgressSlice, b: ProgressSlice) {
  return JSON.stringify(a) === JSON.stringify(b);
}

let warned = false;

export async function pullAndMerge(user: User) {
  if (!isSupabaseConfigured()) return;
  const supabase = createClient();
  try {
    const { data, error } = await supabase
      .from("progress")
      .select("data")
      .eq("user_id", user.id)
      .maybeSingle();
    if (error) throw error;
    const remote = (data?.data ?? {}) as Partial<ProgressSlice>;
    const merged = mergeProgress(getSlice(), remote);
    useProgress.setState(merged);
    await supabase.from("progress").upsert({
      user_id: user.id,
      data: merged,
      updated_at: new Date().toISOString(),
    });
  } catch {
    if (!warned) {
      console.warn("progress sync unavailable (table may not exist yet)");
      warned = true;
    }
  }
}

async function push(user: User, slice: ProgressSlice) {
  const supabase = createClient();
  try {
    const { error } = await supabase.from("progress").upsert({
      user_id: user.id,
      data: slice,
      updated_at: new Date().toISOString(),
    });
    if (error) throw error;
  } catch {
    if (!warned) {
      console.warn("progress sync unavailable (table may not exist yet)");
      warned = true;
    }
  }
}

/** Call once logged-in: initial merge + debounced push on store changes. */
export function useProgressSync(user: User | null) {
  const lastSynced = useRef<ProgressSlice | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!user || !isSupabaseConfigured()) return;
    let active = true;

    pullAndMerge(user).then(() => {
      if (active) lastSynced.current = getSlice();
    });

    const unsub = useProgress.subscribe(() => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => {
        const slice = getSlice();
        if (lastSynced.current && deepEqual(slice, lastSynced.current)) return;
        lastSynced.current = slice;
        push(user, slice);
      }, 1500);
    });

    return () => {
      active = false;
      unsub();
      if (timer.current) clearTimeout(timer.current);
    };
  }, [user]);
}
