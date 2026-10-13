"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check, Flame, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLesson, getStudy } from "@/content";
import { Quiz } from "@/components/quiz";
import { useProgress } from "@/store/progress";
import { useAuth } from "@/lib/auth";

export default function LessonPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const router = useRouter();
  const found = getLesson(slug, lessonId);

  const { streak, completeLesson } = useProgress();
  const { user } = useAuth();
  const [result, setResult] = useState<{
    correct: number;
    total: number;
    xp: number;
  } | null>(null);

  if (!found) notFound();
  const { subject, lesson } = found;
  const lessonKey = `${slug}/${lessonId}`;

  if (result) {
    const xpEarned = result.xp + 20;
    const accuracy = Math.round((result.correct / result.total) * 100);
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 12 }}
          className="text-7xl"
        >
          🎉
        </motion.div>
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute size-3 rounded-full"
            style={{
              backgroundColor: ["#2563EB", "#1CB0F6", "#FF9600", "#CE82FF"][
                i % 4
              ],
              left: "50%",
              top: "40%",
            }}
            initial={{ x: 0, y: 0, opacity: 1 }}
            animate={{
              x: Math.sin(i * 2.4) * 160,
              y: Math.cos(i * 1.7) * 240 - 60,
              opacity: 0,
              rotate: i * 137,
            }}
            transition={{ duration: 1.4, delay: 0.1 }}
          />
        ))}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center space-y-4"
        >
          <h1 className="text-2xl font-extrabold">Lesson complete!</h1>
          <div className="flex gap-3 justify-center">
            <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 px-4 py-3 text-center">
              <Zap className="mx-auto size-5 fill-amber-400 text-amber-400" />
              <p className="mt-1 text-lg font-extrabold text-amber-600">
                +{xpEarned}
              </p>
              <p className="text-[10px] font-bold text-amber-500">XP</p>
            </div>
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50 px-4 py-3 text-center">
              <Check className="mx-auto size-5 text-emerald-500" />
              <p className="mt-1 text-lg font-extrabold text-emerald-600">
                {accuracy}%
              </p>
              <p className="text-[10px] font-bold text-emerald-500">ACCURACY</p>
            </div>
            <div className="rounded-2xl border-2 border-orange-200 bg-orange-50 px-4 py-3 text-center">
              <Flame className="mx-auto size-5 fill-orange-400 text-orange-400" />
              <p className="mt-1 text-lg font-extrabold text-orange-600">
                {streak}
              </p>
              <p className="text-[10px] font-bold text-orange-500">STREAK</p>
            </div>
          </div>
        </motion.div>
        {!user && (
          <Link
            href="/login"
            className="text-sm font-extrabold text-brand hover:underline"
          >
            Sign in to save your streak
          </Link>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="w-full max-w-sm"
        >
          <Button
            className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand py-6 text-base font-extrabold hover:bg-brand-dark active:border-b-0"
            onClick={() => router.push(`/learn/${slug}`)}
          >
            CONTINUE
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <Quiz
      subject={subject}
      items={lesson.questions.map((question) => ({
        key: lessonKey,
        question,
      }))}
      exitHref={`/learn/${slug}`}
      headerExtra={
        getStudy(slug, lessonId) ? (
          <Link
            href={`/study/${slug}/${lessonId}`}
            className="text-xs font-extrabold text-brand"
          >
            Review notes
          </Link>
        ) : undefined
      }
      onDone={(r) => {
        completeLesson(lessonKey, r.xp + 20);
        setResult(r);
      }}
    />
  );
}
