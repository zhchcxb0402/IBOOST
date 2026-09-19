"use client";

import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { BookMarked, Check, ExternalLink, Lock, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getSubject, unitsForLevel } from "@/content";
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
  const selectedLevel = useProgress((s) => s.selectedSubjects[slug]) ?? "HL";
  if (!subject) notFound();

  const units = unitsForLevel(subject, selectedLevel);
  const flat = units.flatMap((u) => u.lessons);
  const firstIncomplete = flat.findIndex(
    (l) => !completedLessons[`${slug}/${l.id}`]
  );
  let idx = 0;

  return (
    <div className="pt-4 pb-8">
      <header className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-extrabold text-muted-foreground"
        >
          ← HOME
        </Link>
        <StatsPills />
      </header>

      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{subject.emoji}</span>
          <h1 className="text-xl font-extrabold">{subject.short}</h1>
          <Badge className="border-0 bg-brand-soft font-extrabold text-brand-dark">
            {selectedLevel}
          </Badge>
        </div>
        <Dialog>
          <DialogTrigger className="inline-flex items-center rounded-xl border-2 border-input bg-background px-3 py-1.5 text-sm font-extrabold hover:bg-muted transition-colors">
            <BookMarked className="mr-1 size-4" /> Resources
          </DialogTrigger>
          <DialogContent className="max-w-sm rounded-2xl">
            <DialogHeader>
              <DialogTitle className="font-extrabold">
                {subject.name} resources
              </DialogTitle>
              <DialogDescription className="font-bold">
                Trusted external sites for this subject.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-2">
              {subject.resources.map((r) => (
                <a
                  key={r.name}
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl border-2 border-muted p-3 hover:border-brand transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-extrabold">{r.name}</p>
                    <p className="text-xs font-bold text-muted-foreground">
                      {r.note}
                    </p>
                  </div>
                  <ExternalLink className="size-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          </DialogContent>
        </Dialog>
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
