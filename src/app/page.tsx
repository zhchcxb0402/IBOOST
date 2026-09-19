"use client";

import Link from "next/link";
import { ChevronRight, Layers } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatsPills } from "@/components/stats-pills";
import { lessonCount, subjects } from "@/content";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";

export default function HomePage() {
  const hydrated = useHydrated();
  const completedLessons = useProgress((s) => s.completedLessons);

  return (
    <div className="pt-4 space-y-6">
      <header className="flex items-center justify-between">
        <span className="text-2xl font-extrabold tracking-tight md:hidden">
          IBOOST
        </span>
        <span className="hidden md:block text-xl font-extrabold tracking-tight">
          Learn
        </span>
        <StatsPills />
      </header>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {subjects.map((s) => {
          const total = lessonCount(s);
          const done = hydrated
            ? s.units.flatMap((u) => u.lessons).filter(
                (l) => completedLessons[`${s.slug}/${l.id}`]
              ).length
            : 0;
          return (
            <Link key={s.slug} href={`/learn/${s.slug}`}>
              <Card className="border-2 transition-transform hover:-translate-y-0.5">
                <CardContent className="flex flex-col gap-3 p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex size-12 items-center justify-center rounded-2xl text-2xl"
                      style={{ backgroundColor: `${s.color}22` }}
                    >
                      {s.emoji}
                    </div>
                    <div className="flex-1">
                      <p className="font-extrabold">{s.name}</p>
                      <p className="text-xs font-bold text-muted-foreground">
                        {done}/{total} lessons done
                      </p>
                    </div>
                    <ChevronRight className="size-5 text-muted-foreground" />
                  </div>
                  <Progress
                    value={(done / total) * 100}
                    className="h-2.5"
                    style={{ ["--primary" as string]: s.color }}
                  />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </section>

      <Link href="/flashcards">
        <Card className="border-2 border-[#58CC02]/40 bg-[#58CC02]/5 transition-transform hover:-translate-y-0.5">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#58CC02]/15">
              <Layers className="size-6 text-[#58CC02]" />
            </div>
            <div className="flex-1">
              <p className="font-extrabold">Flashcards</p>
              <p className="text-xs font-bold text-muted-foreground">
                Review key terms with spaced repetition
              </p>
            </div>
            <ChevronRight className="size-5 text-muted-foreground" />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
