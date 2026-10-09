"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Flame, GraduationCap, Layers, UserRound, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getSubject } from "@/content";
import { useAuth } from "@/lib/auth";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";

export default function ProfilePage() {
  const router = useRouter();
  const hydrated = useHydrated();
  const { xp, streak, completedLessons, srs, reset, selectedSubjects } =
    useProgress();
  const { user, profile, signOut, deleteAccount } = useAuth();

  const lessonsDone = hydrated ? Object.keys(completedLessons).length : 0;
  const mastered = hydrated
    ? Object.values(srs).filter((e) => e.interval >= 4).length
    : 0;
  const mySubjects = hydrated ? Object.entries(selectedSubjects) : [];

  const stats = [
    { icon: Zap, label: "Total XP", value: hydrated ? xp : "–", color: "text-sky-500" },
    { icon: Flame, label: "Day streak", value: hydrated ? streak : "–", color: "text-orange-500" },
    { icon: GraduationCap, label: "Lessons completed", value: lessonsDone, color: "text-emerald-500" },
    { icon: Layers, label: "Cards mastered", value: mastered, color: "text-violet-500" },
  ];

  return (
    <div className="pt-4 space-y-6">
      <header>
        <h1 className="text-xl font-extrabold tracking-tight">Profile</h1>
        <p className="text-sm font-bold text-muted-foreground">
          Your progress at a glance
        </p>
      </header>

      <section>
        {user ? (
          <Card className="border-2">
            <CardContent className="flex items-center gap-4 p-4">
              {(profile?.avatar_url ??
                (user.user_metadata?.avatar_url as string | undefined)) ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={
                    (profile?.avatar_url as string | undefined) ??
                    (user.user_metadata?.avatar_url as string)
                  }
                  alt=""
                  className="size-14 rounded-full object-cover"
                />
              ) : (
                <div className="flex size-14 items-center justify-center rounded-full bg-brand-soft">
                  <UserRound className="size-7 text-brand" />
                </div>
              )}
              <div className="flex-1 min-w-0">
                <p className="truncate font-extrabold">
                  {profile?.display_name ??
                    (user.user_metadata?.full_name as string | undefined) ??
                    user.email}
                </p>
                <p className="truncate text-xs font-bold text-muted-foreground">
                  {user.email}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <Button
                  variant="outline"
                  className="rounded-xl border-2 font-extrabold text-xs"
                  onClick={signOut}
                >
                  SIGN OUT
                </Button>
                <Dialog>
                  <DialogTrigger className="inline-flex items-center justify-center rounded-xl text-xs font-extrabold text-rose-500 hover:text-rose-600">
                    DELETE ACCOUNT
                  </DialogTrigger>
                  <DialogContent className="max-w-sm rounded-2xl">
                    <DialogHeader>
                      <DialogTitle>Delete account?</DialogTitle>
                      <DialogDescription>
                        This permanently deletes your account and all synced
                        progress. This cannot be undone.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button
                        className="w-full rounded-xl font-extrabold bg-rose-500 hover:bg-rose-600"
                        onClick={deleteAccount}
                      >
                        Delete permanently
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-2 border-dashed">
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft">
                <UserRound className="size-6 text-brand" />
              </div>
              <div className="flex-1">
                <p className="font-extrabold text-sm">
                  Sign in to sync progress across devices
                </p>
              </div>
              <Link href="/login">
                <Button className="rounded-xl font-extrabold bg-brand border-b-4 border-brand-dark hover:bg-brand/90">
                  SIGN IN
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </section>

      <section className="grid grid-cols-2 gap-3">
        {stats.map(({ icon: Icon, label, value, color }) => (
          <Card key={label} className="border-2">
            <CardContent className="flex flex-col items-center gap-1 p-4">
              <Icon className={`size-6 ${color}`} />
              <p className="text-2xl font-extrabold">{value}</p>
              <p className="text-xs font-bold text-muted-foreground">{label}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section>
        <h2 className="mb-2 text-sm font-extrabold uppercase text-muted-foreground">
          My subjects
        </h2>
        <div className="space-y-2">
          {mySubjects.length === 0 && (
            <p className="text-sm font-bold text-muted-foreground">
              No subjects selected yet.
            </p>
          )}
          {mySubjects.map(([slug, level]) => {
            const s = getSubject(slug);
            if (!s) return null;
            return (
              <div
                key={slug}
                className="flex items-center gap-3 rounded-2xl border-2 border-muted bg-card p-3"
              >
                <span className="text-2xl">{s.emoji}</span>
                <p className="flex-1 font-extrabold">{s.name}</p>
                <Badge className="border-0 bg-brand-soft font-extrabold text-brand-dark">
                  {level}
                </Badge>
              </div>
            );
          })}
        </div>
      </section>

      <div className="space-y-3">
        <Button
          variant="outline"
          className="w-full rounded-2xl border-2 border-b-4 py-6 font-extrabold"
          onClick={() => {
            useProgress.setState({ onboarded: false });
            router.push("/onboarding");
          }}
        >
          REDO ONBOARDING
        </Button>
        <Button
          variant="outline"
          className="w-full rounded-2xl border-2 border-b-4 py-6 font-extrabold text-rose-500 hover:text-rose-600"
          onClick={reset}
        >
          RESET PROGRESS (DEMO)
        </Button>
      </div>
    </div>
  );
}
