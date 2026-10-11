"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/auth";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";

export function LandingCta() {
  const hydrated = useHydrated();
  const onboarded = useProgress((s) => s.onboarded);
  const { user } = useAuth();

  const target = hydrated && onboarded ? "/home" : "/onboarding";
  const label =
    hydrated && onboarded ? "Continue learning" : "Get started — it's free";

  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row">
      <Button
        render={<Link href={target} />}
        size="lg"
        className="px-8 text-base font-extrabold"
      >
        {label}
      </Button>
      {!user && (
        <Button
          render={<Link href="/login" />}
          variant="ghost"
          className="font-bold"
        >
          Sign in
        </Button>
      )}
    </div>
  );
}
