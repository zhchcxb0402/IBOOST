"use client";

import Link from "next/link";
import { ChevronRight, Layers, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { StatsPills } from "@/components/stats-pills";
import { lessonCount, subjects, unitsForLevel } from "@/content";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";

export default function HomePage() {
  const hydrated = useHydrated();
  const completedLessons = useProgress((s) => s.completedLessons);
  const selectedSubjects = useProgress((s) => s.selectedSubjects);

  const selected = subjects.filter((s) =>
    hydrated ? selectedSubjects[s.slug] : false
  );

  return (
    <div className="pt-4 space-y-6">
      <header className="flex items-center justify-between">
        <span className="text-xl font-extrabold tracking-tight">Learn</span>
        <StatsPills />
      </header>

      <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {selected.map((s) => {
          const level = selectedSubjects[s.slug] ?? "HL";
          const total = lessonCount(s, level);
          const done = hydrated
            ? unitsForLevel(s, level)
                .flatMap((u) => u.lessons)
                .filter((l) => completedLessons[`${s.slug}/${l.id}`]).length
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
                      <p className="font-extrabold">
                        {s.name}{" "}
                        <Badge className="ml-1 border-0 bg-brand-soft font-extrabold text-brand-dark align-middle">
                          {level}
                        </Badge>
                      </p>
                      <p className="text-xs font-bold text-muted-foreground">
                        {done}/{total} lessons done
                      </p>
                    </div>
                    <ChevronRight className="size-5 text-muted-foreground" />
                  </div>
                  <Progress value={(done / total) * 100} className="h-2.5" />
                </CardContent>
              </Card>
            </Link>
          );
        })}

        <Link href="/subjects">
          <Card className="border-2 border-dashed transition-transform hover:-translate-y-0.5">
            <CardContent className="flex items-center gap-3 p-4">
              <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
                <Plus className="size-6 text-muted-foreground" />
              </div>
              <p className="flex-1 font-extrabold text-muted-foreground">
                Add subject
              </p>
              <ChevronRight className="size-5 text-muted-foreground" />
            </CardContent>
          </Card>
        </Link>
      </section>

      <Link href="/flashcards">
        <Card className="border-2 border-brand/40 bg-brand/5 transition-transform hover:-translate-y-0.5">
          <CardContent className="flex items-center gap-3 p-4">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-brand/15">
              <Layers className="size-6 text-brand" />
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
