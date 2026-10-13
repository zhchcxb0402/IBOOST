"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  Check,
  Heart,
  Loader2,
  Sparkles,
  X,
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
import type { Question, Subject } from "@/content/types";
import { MAX_HEARTS, useProgress } from "@/store/progress";
import { localCheck } from "@/lib/check";
import { seededOrder } from "@/lib/shuffle";
import { cn } from "@/lib/utils";

export type QuizItem = {
  key: string;
  question: Question;
  caption?: string;
};

type Phase = "answering" | "correct" | "wrong";

function mcqCorrect(
  q: Question,
  sel: number | null,
  text: string,
  order: number[]
): boolean {
  if (q.type === "mcq") return sel !== null && order[sel] === q.answerIndex;
  if (q.type === "tf") return (text === "true") === q.answer;
  return false;
}

export function Quiz({
  subject,
  items,
  exitHref,
  headerExtra,
  onDone,
}: {
  subject: Subject;
  items: QuizItem[];
  exitHref: string;
  headerExtra?: ReactNode;
  onDone: (result: { correct: number; total: number; xp: number }) => void;
}) {
  const { hearts, loseHeart, refillHearts } = useProgress();

  const [qIndex, setQIndex] = useState(0);
  const [sel, setSel] = useState<number | null>(null);
  const [tfSel, setTfSel] = useState<boolean | null>(null);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<Phase>("answering");
  const [correctCount, setCorrectCount] = useState(0);
  const [xpFromAnswers, setXpFromAnswers] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [heartDialog, setHeartDialog] = useState(false);
  const [checking, setChecking] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [source, setSource] = useState<"ai" | "rules" | null>(null);
  const [explaining, setExplaining] = useState(false);
  const [explained, setExplained] = useState<string | null>(null);
  const [explainErr, setExplainErr] = useState("");

  const item = items[qIndex];
  const q = item.question;
  const order = useMemo(
    () => (q && q.type === "mcq" ? seededOrder(q.id, q.choices.length) : []),
    [q]
  );

  const progress = (qIndex / items.length) * 100;
  const tfText = tfSel === null ? "" : String(tfSel);

  const applyResult = (ok: boolean, fb = "", src: "ai" | "rules" | null = null) => {
    setFeedback(fb);
    setSource(src);
    if (ok) {
      setCorrectCount((c) => c + 1);
      setXpFromAnswers((x) => x + (hintUsed ? 5 : 10));
      setPhase("correct");
    } else {
      loseHeart();
      if (hearts - 1 <= 0) setHeartDialog(true);
      setPhase("wrong");
    }
  };

  const check = async () => {
    if (q.type === "short") {
      const fast = localCheck({
        answer: q.answer,
        acceptable: q.acceptable ?? [],
        userAnswer: text,
      });
      if (fast) {
        applyResult(true, fast.feedback, "rules");
        return;
      }
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
    applyResult(mcqCorrect(q, sel, tfText, order));
  };

  const next = () => {
    if (qIndex + 1 >= items.length) {
      onDone({
        correct: correctCount,
        total: items.length,
        xp: xpFromAnswers,
      });
    } else {
      setQIndex((i) => i + 1);
      setSel(null);
      setTfSel(null);
      setText("");
      setHintUsed(false);
      setFeedback("");
      setSource(null);
      setExplained(null);
      setExplainErr("");
      setPhase("answering");
    }
  };

  const canCheck =
    q.type === "mcq"
      ? sel !== null
      : q.type === "tf"
        ? tfSel !== null
        : text.trim().length > 0;
  const correctAnswerText =
    q.type === "mcq"
      ? q.choices[q.answerIndex]
      : q.type === "tf"
        ? String(q.answer).toUpperCase()
        : q.answer;
  const userAnswerText =
    q.type === "mcq"
      ? sel !== null
        ? q.choices[order[sel]]
        : ""
      : q.type === "tf"
        ? tfSel === null
          ? ""
          : tfSel
            ? "True"
            : "False"
        : text;

  const explain = async () => {
    setExplaining(true);
    setExplainErr("");
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: subject.name,
          prompt: q.prompt,
          correctAnswer: correctAnswerText,
          userAnswer: userAnswerText,
          explanation: q.explanation,
        }),
      });
      const data = await res.json();
      if (res.ok && typeof data.explanation === "string") {
        setExplained(data.explanation);
      } else {
        setExplainErr(data.error ?? "Could not get an explanation right now.");
      }
    } catch {
      setExplainErr("Could not get an explanation right now.");
    } finally {
      setExplaining(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Top bar */}
      <div className="mx-auto flex w-full max-w-md items-center gap-3 px-4 pt-4">
        <Link href={exitHref} aria-label="Exit">
          <X className="size-6 text-muted-foreground" />
        </Link>
        <Progress value={progress} className="h-4 flex-1" />
        {headerExtra}
        <span className="flex items-center gap-1 text-sm font-extrabold text-rose-500">
          <Heart className="size-4 fill-rose-400 text-rose-400" />
          {hearts}
        </span>
      </div>

      {/* Question */}
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 pt-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${item.key}-${q.id}`}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.2 }}
          >
            {item.caption && (
              <p className="mb-1 text-xs font-bold text-muted-foreground">
                {item.caption}
              </p>
            )}
            <h1 className="text-xl font-extrabold leading-snug">{q.prompt}</h1>

            {q.type === "mcq" && (
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {order.map((orig, i) => {
                  const choice = q.choices[orig];
                  return (
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
                  );
                })}
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
              <div>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  disabled={phase !== "answering" || checking}
                  placeholder="Type your answer…"
                  rows={3}
                  className="mt-6 w-full rounded-2xl border-2 border-b-4 border-muted bg-card px-4 py-4 font-bold outline-none focus:border-brand resize-none"
                />
                {q.hint && phase === "answering" && (
                  <button
                    onClick={() => setHintUsed(true)}
                    className="mt-2 text-xs font-extrabold text-muted-foreground hover:text-brand"
                  >
                    {hintUsed ? q.hint : "Hint"}
                  </button>
                )}
              </div>
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
                {hintUsed && q.type === "short" && (
                  <span className="text-xs font-bold text-emerald-700">
                    (hint used — +5 XP)
                  </span>
                )}
                {source === "ai" && (
                  <Badge className="ml-1 border-0 bg-brand-soft font-extrabold text-brand-dark align-middle">
                    <Sparkles className="mr-1 size-3" /> Checked by AI
                  </Badge>
                )}
              </p>
              {feedback && (
                <p className="text-sm font-bold text-emerald-600">{feedback}</p>
              )}
              <p className="text-sm font-bold text-emerald-700">
                {q.explanation}
              </p>
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
              {explained ? (
                <p className="mt-2 rounded-xl bg-brand-soft p-3 text-sm font-bold text-foreground">
                  <Sparkles className="mr-1 inline size-3.5 text-brand" />
                  {explained}
                </p>
              ) : explainErr ? (
                <p className="mt-2 text-sm font-bold text-muted-foreground">
                  {explainErr}
                </p>
              ) : (
                <Button
                  variant="outline"
                  size="sm"
                  disabled={explaining}
                  onClick={explain}
                  className="mt-2 font-extrabold"
                >
                  {explaining ? (
                    <>
                      <Loader2 className="mr-1 size-4 animate-spin" /> Thinking…
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-1 size-4" /> Explain my mistake
                    </>
                  )}
                </Button>
              )}
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
