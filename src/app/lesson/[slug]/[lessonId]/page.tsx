"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Flame,
  Heart,
  Loader2,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { getLesson } from "@/content";
import type { Question } from "@/content/types";
import { MAX_HEARTS, useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

type Phase = "answering" | "correct" | "wrong" | "done";

function norm(s: string) {
  return s.trim().toLowerCase();
}

function mcqCorrect(q: Question, sel: number | null, text: string): boolean {
  if (q.type === "mcq") return sel === q.answerIndex;
  if (q.type === "tf") return (text === "true") === q.answer;
  return false;
}

export default function LessonPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const router = useRouter();
  const found = getLesson(slug, lessonId);

  const { hearts, streak, loseHeart, refillHearts, completeLesson } =
    useProgress();

  const [qIndex, setQIndex] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [tfSel, setTfSel] = useState<boolean | null>(null);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("answering");
  const [correctCount, setCorrectCount] = useState(0);
  const [heartDialog, setHeartDialog] = useState(false);
  const [checking, setChecking] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [source, setSource] = useState<"ai" | "rules" | null>(null);

  const lesson = found?.lesson;
  const subject = found?.subject;
  const q = lesson?.questions[qIndex];

  if (!lesson || !subject || !q) notFound();

  const progress = (qIndex / lesson.questions.length) * 100;
  const tfText = tfSel === null ? "" : String(tfSel);

  const applyResult = (ok: boolean, fb = "", src: "ai" | "rules" | null = null) => {
    setFeedback(fb);
    setSource(src);
    if (ok) {
      setCorrectCount((c) => c + 1);
      setPhase("correct");
    } else {
      loseHeart();
      if (hearts - 1 <= 0) setHeartDialog(true);
      setPhase("wrong");
    }
  };

  const check = async () => {
    if (q.type === "short") {
      setChecking(true);
      try {
        const res = await fetch("/api/check", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            prompt: q.prompt,
            answer: q.answer,
            keywords: q.keywords,
            acceptable: q.acceptable ?? [],
            userAnswer: text,
          }),
        });
        const data = await res.json();
        applyResult(!!data.correct, data.feedback ?? "", data.source ?? null);
      } catch {
        applyResult(false, "Could not check your answer.");
      } finally {
        setChecking(false);
      }
      return;
    }
    applyResult(mcqCorrect(q, sel, tfText));
  };

  const next = () => {
    if (qIndex + 1 >= lesson.questions.length) {
      const xp = correctCount * 10 + 20;
      completeLesson(`${slug}/${lessonId}`, xp);
      setPhase("done");
    } else {
      setQIndex((i) => i + 1);
      setSel(null);
      setTfSel(null);
      setText("");
      setFeedback("");
      setSource(null);
      setPhase("answering");
    }
  };

  const canCheck =
    q.type === "mcq"
      ? sel !== null
      : q.type === "tf"
        ? tfSel !== null
        : text.trim().length > 0;
  const xpEarned = correctCount * 10 + 20;
  const accuracy = Math.round((correctCount / lesson.questions.length) * 100);
  const correctAnswerText =
    q.type === "mcq"
      ? q.choices[q.answerIndex]
      : q.type === "tf"
        ? String(q.answer).toUpperCase()
        : q.answer;

  if (phase === "done") {
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
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <div className="mx-auto flex w-full max-w-md items-center gap-3 px-4 pt-4">
        <Link href={`/learn/${slug}`} aria-label="Exit lesson">
          <X className="size-6 text-muted-foreground" />
        </Link>
        <Progress value={progress} className="h-4 flex-1" />
        <span className="flex items-center gap-1 text-sm font-extrabold text-rose-500">
          <Heart className="size-4 fill-rose-400 text-rose-400" />
          {hearts}
        </span>
      </div>

      {/* Question */}
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.2 }}
          >
            <h1 className="text-xl font-extrabold leading-snug">{q.prompt}</h1>

            {q.type === "mcq" && (
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {q.choices.map((choice, i) => (
                  <button
                    key={i}
                    onClick={() => phase === "answering" && setSel(i)}
                    className={cn(
                      "rounded-2xl border-2 border-b-4 px-4 py-4 text-left font-bold transition-colors",
                      sel === i
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-muted bg-card hover:bg-muted/50"
                    )}
                  >
                    {choice}
                  </button>
                ))}
              </div>
            )}

            {q.type === "tf" && (
              <div className="mt-6 grid grid-cols-2 gap-3">
                {[true, false].map((v) => (
                  <button
                    key={String(v)}
                    onClick={() => phase === "answering" && setTfSel(v)}
                    className={cn(
                      "rounded-2xl border-2 border-b-4 px-4 py-6 text-center text-lg font-extrabold transition-colors",
                      tfSel === v
                        ? "border-brand bg-brand/10 text-brand"
                        : "border-muted bg-card hover:bg-muted/50"
                    )}
                  >
                    {v ? "TRUE" : "FALSE"}
                  </button>
                ))}
              </div>
            )}

            {q.type === "short" && (
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={phase !== "answering" || checking}
                placeholder="Type your answer…"
                rows={3}
                className="mt-6 w-full rounded-2xl border-2 border-b-4 border-muted bg-card px-4 py-4 font-bold outline-none focus:border-brand resize-none"
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div
        className={cn(
          "border-t-2 px-4 py-4",
          phase === "correct" && "border-emerald-200 bg-emerald-50",
          phase === "wrong" && "border-rose-200 bg-rose-50"
        )}
      >
        <div className="mx-auto flex w-full max-w-md flex-col gap-3">
          {phase === "correct" && (
            <div>
              <p className="font-extrabold text-emerald-600">
                Nice! 🎉{" "}
                {source === "ai" && (
                  <Badge className="ml-1 border-0 bg-brand-soft font-extrabold text-brand-dark align-middle">
                    <Sparkles className="mr-1 size-3" /> Checked by AI
                  </Badge>
                )}
              </p>
              {feedback && (
                <p className="text-sm font-bold text-emerald-600">{feedback}</p>
              )}
            </div>
          )}
          {phase === "wrong" && (
            <div>
              <p className="font-extrabold text-rose-600">
                Correct answer: {correctAnswerText}{" "}
                {source === "ai" && (
                  <Badge className="ml-1 border-0 bg-brand-soft font-extrabold text-brand-dark align-middle">
                    <Sparkles className="mr-1 size-3" /> Checked by AI
                  </Badge>
                )}
              </p>
              {feedback && (
                <p className="text-sm font-bold text-rose-500">{feedback}</p>
              )}
              <p className="text-sm font-bold text-rose-500">{q.explanation}</p>
            </div>
          )}
          {phase === "answering" ? (
            <Button
              disabled={!canCheck || checking}
              onClick={check}
              className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand py-6 text-base font-extrabold hover:bg-brand-dark active:border-b-0 disabled:opacity-40"
            >
              {checking ? (
                <>
                  <Loader2 className="mr-2 size-4 animate-spin" /> CHECKING…
                </>
              ) : (
                "CHECK"
              )}
            </Button>
          ) : (
            <Button
              onClick={next}
              className={cn(
                "w-full rounded-2xl border-b-4 py-6 text-base font-extrabold active:border-b-0",
                phase === "correct"
                  ? "border-brand-dark bg-brand hover:bg-brand-dark"
                  : "border-rose-600 bg-rose-500 hover:bg-rose-600"
              )}
            >
              CONTINUE
            </Button>
          )}
        </div>
      </div>

      <Dialog open={heartDialog} onOpenChange={setHeartDialog}>
        <DialogContent className="max-w-xs rounded-2xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 font-extrabold">
              <Heart className="size-5 fill-rose-400 text-rose-400" />
              Out of hearts
            </DialogTitle>
            <DialogDescription className="font-bold">
              You need hearts to keep going. Refill now, or come back tomorrow
              when they reset.
            </DialogDescription>
          </DialogHeader>
          <Button
            className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand font-extrabold hover:bg-brand-dark active:border-b-0"
            onClick={() => {
              refillHearts();
              setHeartDialog(false);
            }}
          >
            REFILL (DEMO) → {MAX_HEARTS} ❤️
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
