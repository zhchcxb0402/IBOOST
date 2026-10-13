"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { BookMarked, BookOpen, Check, ExternalLink, Lock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { getStudy, getSubject, unitsForLevel } from "@/content";
import { StatsPills } from "@/components/stats-pills";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

const OFFSETS = [
  "translate-x-0",
  "translate-x-12",
  "translate-x-16",
  "translate-x-12",
];

export default function LearnPage() {
  const { slug } = useParams<{ slug: string }>();
  const subject = getSubject(slug);
  const hydrated = useHydrated();
  const completedLessons = useProgress((s) => s.completedLessons);
  const lessonReview = useProgress((s) => s.lessonReview);
  const selectedLevel = useProgress((s) => s.selectedSubjects[slug]) ?? "HL";
  if (!subject) notFound();

  const units = unitsForLevel(subject, selectedLevel);
  const flat = units.flatMap((u) => u.lessons);
  const firstIncomplete = flat.findIndex(
    (l) => !completedLessons[`${slug}/${l.id}`]
  );
  const [now] = useState(() => Date.now());
  const dueCount = hydrated
    ? flat.filter(
        (l) =>
          completedLessons[`${slug}/${l.id}`] &&
          lessonReview[`${slug}/${l.id}`]?.due <= now
      ).length
    : 0;
  let idx = 0;

  return (
    <div className="pt-4 pb-8">
      <header className="flex items-center justify-between">
        <Link
          href="/home"
          className="text-sm font-extrabold text-muted-foreground"
        >
          ← HOME
        </Link>
        <div className="flex items-center gap-2">
          {dueCount > 0 && (
            <Link
              href={`/review/${slug}`}
              className="rounded-full border-2 border-amber-300 bg-amber-50 px-3 py-1 text-xs font-extrabold text-amber-700 hover:bg-amber-100"
            >
              Review · {dueCount}
            </Link>
          )}
          <StatsPills />
        </div>
      </header>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{subject.emoji}</span>
          <h1 className="text-xl font-extrabold">{subject.short}</h1>
          <Badge className="border-0 bg-brand-soft font-extrabold text-brand-dark">
            {selectedLevel}
          </Badge>
        </div>
        <a
          href={subject.syllabusUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-xl border-2 border-input bg-background px-3 py-1.5 text-sm font-extrabold hover:bg-muted transition-colors"
        >
          <BookMarked className="mr-1 size-4" /> IB syllabus
          <ExternalLink className="ml-1 size-3.5 text-muted-foreground" />
        </a>
      </div>

      {units.map((unit) => (
        <section key={unit.id} className="mt-6">
          <div
            className="rounded-2xl p-4 text-white flex items-center justify-between"
            style={{ backgroundColor: subject.color }}
          >
            <div>
              {unit.code && (
                <p className="text-xs font-extrabold uppercase opacity-80">
                  {unit.code}
                </p>
              )}
              <h2 className="text-lg font-extrabold">{unit.title}</h2>
            </div>
            {unit.level === "HL" && (
              <Badge className="border-0 bg-white/25 font-extrabold text-white">
                HL ONLY
              </Badge>
            )}
          </div>

          <div className="mt-4 flex flex-col items-center gap-6 py-4">
            {unit.lessons.map((lesson) => {
              const key = `${slug}/${lesson.id}`;
              const completed = hydrated && !!completedLessons[key];
              const isCurrent =
                hydrated && firstIncomplete >= 0 && idx === firstIncomplete;
              const locked =
                hydrated && firstIncomplete >= 0 && idx > firstIncomplete;
              const hasStudy = !!getStudy(slug, lesson.id);
              const offset = OFFSETS[idx % OFFSETS.length];
              idx++;

              const node = (
                <motion.div
                  whileTap={locked ? undefined : { scale: 0.95 }}
                  className={cn(
                    "relative flex size-16 items-center justify-center rounded-full border-b-4 transition-colors",
                    offset,
                    completed && "text-white",
                    isCurrent && "ring-4 ring-offset-2 animate-pulse text-white",
                    !completed &&
                      "bg-muted border-muted-foreground/20 text-muted-foreground"
                  )}
                  style={
                    completed || isCurrent
                      ? {
                          backgroundColor: subject.color,
                          borderColor: `${subject.color}cc`,
                          ...(isCurrent
                            ? ({
                                ["--tw-ring-color" as string]: `${subject.color}66`,
                              } as React.CSSProperties)
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
                  {lesson.level === "HL" && (
                    <span className="absolute -top-1 -right-1 rounded-full bg-violet-600 px-1.5 py-0.5 text-[9px] font-extrabold text-white">
                      HL
                    </span>
                  )}
                </motion.div>
              );

              return (
                <div
                  key={lesson.id}
                  className="flex flex-col items-center gap-1"
                >
                  {locked ? (
                    node
                  ) : (
                    <Link
                      href={
                        hasStudy
                          ? `/study/${slug}/${lesson.id}`
                          : `/lesson/${slug}/${lesson.id}`
                      }
                    >
                      {node}
                    </Link>
                  )}
                  <span className="text-xs font-bold text-muted-foreground">
                    {lesson.title}
                  </span>
                  {hasStudy && (
                    <span className="flex items-center gap-0.5 text-[10px] font-extrabold text-brand">
                      <BookOpen className="size-3" /> Notes + practice
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
