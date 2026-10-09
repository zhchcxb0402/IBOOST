"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, Mail } from "lucide-react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.49 12.27c0-.79-.07-1.54-.19-2.27H12v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96H1.29v3.09C3.26 21.3 7.31 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.27 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.98-3.09z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.98 3.09C6.22 6.86 8.87 4.75 12 4.75z"
      />
    </svg>
  );
}

function LoginInner() {
  const router = useRouter();
  const params = useSearchParams();
  const { user, loading, signInWithGoogle, signInWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(
    params.get("error")
  );

  useEffect(() => {
    if (!loading && user) router.replace("/");
  }, [loading, user, router]);

  const sendMagicLink = async () => {
    if (!email.trim()) return;
    setBusy(true);
    setError(null);
    const { error: err } = await signInWithEmail(email.trim());
    setBusy(false);
    if (err) setError(err);
    else setSent(true);
  };

  const google = async () => {
    setBusy(true);
    setError(null);
    try {
      await signInWithGoogle();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not start sign-in");
      setBusy(false);
    }
    // on success the browser redirects to the OAuth provider
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10">
      <div className="w-full max-w-sm">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm font-bold text-muted-foreground hover:text-foreground mb-10"
        >
          <ChevronLeft className="size-4" /> Continue as guest
        </Link>

        <div className="mb-8">
          <Logo />
        </div>

        <h1 className="text-2xl font-extrabold tracking-tight">
          Save your progress everywhere
        </h1>
        <p className="mt-2 text-sm text-muted-foreground font-medium">
          Sign in to sync your XP, streaks, and decks across devices. Playing as
          a guest still works.
        </p>

        {error && (
          <div className="mt-5 rounded-xl border-2 border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-600">
            {decodeURIComponent(error)}
          </div>
        )}

        {sent ? (
          <div className="mt-8 rounded-2xl border-2 border-brand-soft bg-brand-soft/40 p-6 text-center">
            <Mail className="mx-auto size-8 text-brand" />
            <h2 className="mt-3 text-lg font-extrabold">Check your inbox</h2>
            <p className="mt-1 text-sm text-muted-foreground font-medium">
              We sent a magic link to <b>{email}</b>. Open it on this device to
              sign in.
            </p>
            <Button
              variant="ghost"
              className="mt-4 font-bold"
              onClick={() => setSent(false)}
            >
              Use a different email
            </Button>
          </div>
        ) : (
          <>
            <Button
              className="mt-8 w-full h-12 rounded-2xl border-b-4 font-extrabold text-base gap-3 bg-white text-zinc-700 border-zinc-200 hover:bg-zinc-50 border-b-zinc-300"
              variant="outline"
              onClick={google}
              disabled={busy || loading}
            >
              <GoogleIcon /> Continue with Google
            </Button>

            <div className="my-6 flex items-center gap-3 text-xs font-extrabold text-muted-foreground">
              <div className="h-px flex-1 bg-border" />
              OR
              <div className="h-px flex-1 bg-border" />
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendMagicLink();
              }}
              className="space-y-3"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full h-12 rounded-2xl border-2 border-border bg-transparent px-4 font-bold outline-none focus:border-brand transition-colors"
              />
              <Button
                type="submit"
                className="w-full h-12 rounded-2xl font-extrabold text-base bg-brand border-b-4 border-brand-dark hover:bg-brand/90"
                disabled={busy || loading}
              >
                Send magic link
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginInner />
    </Suspense>
  );
}
