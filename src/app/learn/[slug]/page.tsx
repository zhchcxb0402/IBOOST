"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { Check, Lock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { getSubject } from "@/content";
import { StatsPills } from "@/components/stats-pills";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

const OFFSETS = ["translate-x-0", "translate-x-12", "translate-x-16", "translate-x-12"];

export default function LearnPage() {
  const { slug } = useParams<{ slug: string }>();
  const subject = getSubject(slug);
  const hydrated = useHydrated();
  const completedLessons = useProgress((s) => s.completedLessons);
  if (!subject) notFound();

  const flat = subject.units.flatMap((u) => u.lessons);
  const firstIncomplete = flat.findIndex(
    (l) => !completedLessons[`${slug}/${l.id}`]
  );
  let idx = 0;

  return (
    <div className="pt-4 pb-8">
      <header className="flex items-center justify-between">
        <Link href="/" className="text-sm font-extrabold text-muted-foreground">
          ← SUBJECTS
        </Link>
        <StatsPills />
      </header>

      {subject.units.map((unit) => (
        <section key={unit.id} className="mt-6">
          <div
            className="rounded-2xl p-4 text-white"
            style={{ backgroundColor: subject.color }}
          >
            <p className="text-xs font-extrabold uppercase opacity-80">
              {unit.title.split(" ")[0] === "Unit" ? "" : "Unit"}
            </p>
            <h2 className="text-lg font-extrabold">{unit.title}</h2>
          </div>

          <div className="mt-4 flex flex-col items-center gap-6 py-4">
            {unit.lessons.map((lesson) => {
              const key = `${slug}/${lesson.id}`;
              const completed = hydrated && !!completedLessons[key];
              const isCurrent =
                hydrated && firstIncomplete >= 0 && idx === firstIncomplete;
              const locked =
                hydrated && firstIncomplete >= 0 && idx > firstIncomplete;
              const offset = OFFSETS[idx % OFFSETS.length];
              idx++;

              const node = (
                <motion.div
                  whileTap={locked ? undefined : { scale: 0.95 }}
                  className={cn(
                    "flex size-16 items-center justify-center rounded-full border-b-4 transition-colors",
                    offset,
                    completed && "text-white",
                    isCurrent &&
                      "ring-4 ring-offset-2 animate-pulse text-white",
                    locked &&
                      "bg-muted border-muted-foreground/20 text-muted-foreground",
                    !completed &&
                      !isCurrent &&
                      !locked &&
                      "bg-muted border-muted-foreground/20 text-muted-foreground"
                  )}
                  style={
                    completed || isCurrent
                      ? {
                          backgroundColor: subject.color,
                          borderColor: `${subject.color}cc`,
                          ...(isCurrent
                            ? ({ ["--tw-ring-color" as string]: `${subject.color}66` } as React.CSSProperties)
                            : {}),
                        }
                      : undefined
                  }
                >
                  {completed ? (
                    <Check className="size-7" strokeWidth={3} />
                  ) : locked ? (
                    <Lock className="size-6" />
                  ) : (
                    <Star className="size-7" />
                  )}
                </motion.div>
              );

              return (
                <div key={lesson.id} className="flex flex-col items-center gap-1">
                  {locked ? (
                    node
                  ) : (
                    <Link href={`/lesson/${slug}/${lesson.id}`}>{node}</Link>
                  )}
                  <span className="text-xs font-bold text-muted-foreground">
                    {lesson.title}
                  </span>
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
