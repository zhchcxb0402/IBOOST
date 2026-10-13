"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSubject, unitsForLevel } from "@/content";
import { Quiz } from "@/components/quiz";
import { buildReviewSet } from "@/lib/review";
import { useProgress } from "@/store/progress";
import { useHydrated } from "@/lib/use-hydrated";

export default function ReviewPage() {
  const { slug } = useParams<{ slug: string }>();
  const subject = getSubject(slug);
  const hydrated = useHydrated();
  const { selectedSubjects, completedLessons, lessonReview, recordReview, addXp } =
    useProgress();
  const [now] = useState(() => Date.now());
  const [result, setResult] = useState<{
    correct: number;
    total: number;
    xp: number;
  } | null>(null);

  const level = selectedSubjects[slug] ?? "SL";

  const { items, keys } = useMemo(() => {
    if (!subject || !hydrated) return { items: [], keys: [] };
    const all = unitsForLevel(subject, level).flatMap((u) =>
      u.lessons.map((l) => ({
        key: `${slug}/${l.id}`,
        title: l.title,
        questions: l.questions,
      }))
    );
    // now captured once on mount
    let pool = all.filter(
      (l) => completedLessons[l.key] && lessonReview[l.key]?.due <= now
    );
    if (pool.length === 0) {
      const completed = new Set(Object.keys(completedLessons));
      pool = all.filter((l) => completed.has(l.key)).slice(-5);
    }
    const picked = buildReviewSet(
      pool.map((p) => ({ key: p.key, questions: p.questions })),
      10,
      `review/${slug}/${now}`
    );
    const titleByKey = new Map(pool.map((p) => [p.key, p.title]));
    return {
      keys: [...new Set(picked.map((p) => p.key))],
      items: picked.map((p) => ({
        key: p.key,
        question: p.question,
        caption: titleByKey.get(p.key),
      })),
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug, subject, hydrated]);

  if (!subject) notFound();
  if (!hydrated) return null;

  if (result) {
    const xp = result.correct * 5;
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="text-7xl"
        >
          🔁
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4"
        >
          <h1 className="text-2xl font-extrabold">
            Review complete — {result.correct}/{result.total}
          </h1>
          <div className="flex gap-3 justify-center">
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 px-4 py-3 text-center">
              <Zap className="mx-auto size-5 fill-amber-400 text-amber-400" />
              <p className="mt-1 text-lg font-extrabold text-amber-600">
                +{xp}
              </p>
              <p className="text-[10px] font-bold text-amber-500">XP</p>
            </div>
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-4 py-3 text-center">
              <Check className="mx-auto size-5 text-emerald-500" />
              <p className="mt-1 text-lg font-extrabold text-emerald-600">
                {Math.round((result.correct / result.total) * 100)}%
              </p>
              <p className="text-[10px] font-bold text-emerald-500">ACCURACY</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-sm"
        >
          <Button
            className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand py-6 text-base font-extrabold hover:bg-brand-dark active:border-b-0"
            render={<Link href={`/learn/${slug}`} />}
          >
            BACK TO {subject.name.toUpperCase()}
          </Button>
        </motion.div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
        <p className="text-4xl">{subject.emoji}</p>
        <h1 className="text-xl font-extrabold">Nothing to review yet</h1>
        <p className="text-sm font-bold text-muted-foreground">
          Complete a lesson and it will come back for spaced review.
        </p>
        <Button
          className="rounded-xl font-extrabold"
          render={<Link href={`/learn/${slug}`} />}
        >
          Go to lessons
        </Button>
      </div>
    );
  }

  return (
    <Quiz
      subject={subject}
      items={items}
      exitHref={`/learn/${slug}`}
      headerExtra={
        <span className="text-xs font-extrabold text-muted-foreground">
          REVIEW
        </span>
      }
      onDone={(r) => {
        recordReview(keys, r.correct / r.total >= 0.8);
        addXp(r.correct * 5);
        setResult(r);
      }}
    />
  );
}
