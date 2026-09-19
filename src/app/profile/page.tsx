"use client";

import { useRouter } from "next/navigation";
import { Flame, GraduationCap, Layers, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getSubject } from "@/content";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";

export default function ProfilePage() {
  const router = useRouter();
  const hydrated = useHydrated();
  const { xp, streak, completedLessons, srs, reset, selectedSubjects } =
    useProgress();

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
