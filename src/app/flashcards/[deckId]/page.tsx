"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDeck, getSubject } from "@/content";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

type Card = { id: string; front: string; back: string };

export default function DeckPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const deck = getDeck(deckId);
  const subject = deck ? getSubject(deck.subjectSlug) : undefined;
  const reviewCard = useProgress((s) => s.reviewCard);
  const srs = useProgress((s) => s.srs);

  // Flashcards mode
  const [queue, setQueue] = useState<Card[] | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [learning, setLearning] = useState(0);
  const [round, setRound] = useState(0);

  // Learn mode
  const [lQueue, setLQueue] = useState<Card[] | null>(null);
  const [lSel, setLSel] = useState<number | null>(null);
  const [lChecked, setLChecked] = useState(false);
  const [lCorrect, setLCorrect] = useState(0);
  const [lWrong, setLWrong] = useState(0);
  const [lTotal, setLTotal] = useState(0);

  if (!deck) notFound();

  const reviewed = Object.keys(srs).filter((id) =>
    deck.cards.some((c) => c.id === id)
  ).length;

  const dueQueue = () =>
    deck.cards.filter((c) => {
      const e = useProgress.getState().srs[c.id];
      return !e || e.due <= Date.now();
    });

  const startFlip = () => {
    setQueue(dueQueue());
    setKnown(0);
    setLearning(0);
    setFlipped(false);
    setRound((r) => r + 1);
  };

  const startLearn = () => {
    const q = dueQueue();
    setLQueue(q);
    setLTotal(q.length);
    setLCorrect(0);
    setLWrong(0);
    setLSel(null);
    setLChecked(false);
  };

  const card = queue?.[0];

  const answer = (gotIt: boolean) => {
    if (!card) return;
    reviewCard(card.id, gotIt);
    if (gotIt) setKnown((n) => n + 1);
    else setLearning((n) => n + 1);
    setFlipped(false);
    setQueue((q) => q?.slice(1) ?? []);
  };

  // Learn mode: deterministic 4 choices — correct back + 3 other backs
  const lCard = lQueue?.[0];
  const lOptions: string[] = lCard
    ? (() => {
        const others = deck.cards
          .filter((c) => c.id !== lCard.id)
          .map((c) => c.back);
        const start = lCard.id.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % Math.max(1, others.length);
        const picks: string[] = [];
        for (let k = 0; k < others.length && picks.length < 3; k++) {
          picks.push(others[(start + k) % others.length]);
        }
        const opts = [lCard.back, ...picks];
        // deterministic shuffle by card id hash
        const h = lCard.id.split("").reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7);
        for (let i = opts.length - 1; i > 0; i--) {
          const j = (h + i * 2654435761) % (i + 1);
          [opts[i], opts[j]] = [opts[j], opts[i]];
        }
        return opts;
      })()
    : [];

  const learnCheck = () => {
    if (lSel === null || !lCard) return;
    const ok = lOptions[lSel] === lCard.back;
    reviewCard(lCard.id, ok);
    if (ok) setLCorrect((n) => n + 1);
    else setLWrong((n) => n + 1);
    setLChecked(true);
  };

  const learnNext = () => {
    setLQueue((q) => q?.slice(1) ?? []);
    setLSel(null);
    setLChecked(false);
  };

  const startScreen = (onStart: () => void) => (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center py-12">
      <div className="text-6xl">{subject?.emoji ?? "🃏"}</div>
      <h1 className="text-xl font-extrabold">{deck.title}</h1>
      <p className="font-bold text-muted-foreground">
        {deck.cards.length} cards · {reviewed} reviewed before
      </p>
      <Button
        onClick={onStart}
        className="rounded-2xl border-b-4 border-brand-dark bg-brand px-8 py-6 font-extrabold hover:bg-brand-dark active:border-b-0"
      >
        START SESSION
      </Button>
    </div>
  );

  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col pt-4">
      <header className="flex items-center justify-between">
        <Link
          href="/flashcards"
          className="text-sm font-extrabold text-muted-foreground"
        >
          <X className="inline size-4" /> DECKS
        </Link>
        <span className="text-sm font-extrabold text-muted-foreground">
          {deck.title}
        </span>
      </header>

      <Tabs defaultValue="flashcards" className="mt-4 flex flex-1 flex-col">
        <TabsList className="w-full">
          <TabsTrigger value="flashcards" className="flex-1 font-extrabold">
            Flashcards
          </TabsTrigger>
          <TabsTrigger value="learn" className="flex-1 font-extrabold">
            Learn
          </TabsTrigger>
        </TabsList>

        <TabsContent value="flashcards" className="flex flex-1 flex-col">
          {queue === null ? (
            startScreen(startFlip)
          ) : !card ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="text-6xl"
              >
                🧠
              </motion.div>
              <h1 className="text-xl font-extrabold">Session complete!</h1>
              <p className="font-bold text-muted-foreground">
                {known} got it · {learning} still learning
              </p>
              <Button
                onClick={startFlip}
                className="rounded-2xl border-b-4 border-brand-dark bg-brand px-8 py-6 font-extrabold hover:bg-brand-dark active:border-b-0"
              >
                <RotateCcw className="mr-2 size-4" /> STUDY AGAIN
              </Button>
            </div>
          ) : (
            <div key={`${card.id}-${round}`} className="flex flex-1 flex-col">
              <p className="mt-2 text-center text-sm font-extrabold text-muted-foreground">
                {queue.length} left
              </p>
              <div
                className="mt-4 flex flex-1 cursor-pointer items-center justify-center [perspective:1000px]"
                onClick={() => setFlipped((f) => !f)}
              >
                <motion.div
                  className="relative h-64 w-full max-w-sm [transform-style:preserve-3d]"
                  animate={{ rotateY: flipped ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-b-8 bg-card p-6 text-center [backface-visibility:hidden]">
                    <p className="text-xs font-extrabold uppercase text-muted-foreground">
                      {subject?.name}
                    </p>
                    <p className="mt-3 text-xl font-extrabold">{card.front}</p>
                    <p className="mt-4 text-xs font-bold text-muted-foreground">
                      Tap to flip
                    </p>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl border-2 border-b-8 bg-card p-6 text-center [backface-visibility:hidden] [transform:rotateY(180deg)]">
                    <p className="text-xs font-extrabold uppercase text-muted-foreground">
                      Answer
                    </p>
                    <p className="mt-3 text-lg font-extrabold">{card.back}</p>
                  </div>
                </motion.div>
              </div>
              <div className="mx-auto mt-6 grid w-full max-w-sm grid-cols-2 gap-3 pb-4">
                <Button
                  onClick={() => answer(false)}
                  className="rounded-2xl border-b-4 border-rose-600 bg-rose-500 py-6 font-extrabold hover:bg-rose-600 active:border-b-0"
                >
                  STILL LEARNING
                </Button>
                <Button
                  onClick={() => answer(true)}
                  className="rounded-2xl border-b-4 border-brand-dark bg-brand py-6 font-extrabold hover:bg-brand-dark active:border-b-0"
                >
                  GOT IT
                </Button>
              </div>
            </div>
          )}
        </TabsContent>

        <TabsContent value="learn" className="flex flex-1 flex-col">
          {lQueue === null ? (
            startScreen(startLearn)
          ) : !lCard ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center py-12">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="text-6xl"
              >
                🎯
              </motion.div>
              <h1 className="text-xl font-extrabold">Round complete!</h1>
              <p className="font-bold text-muted-foreground">
                {lCorrect} correct · {lWrong} missed
              </p>
              <Button
                onClick={startLearn}
                className="rounded-2xl border-b-4 border-brand-dark bg-brand px-8 py-6 font-extrabold hover:bg-brand-dark active:border-b-0"
              >
                <RotateCcw className="mr-2 size-4" /> STUDY AGAIN
              </Button>
            </div>
          ) : (
            <div className="flex flex-1 flex-col pt-4">
              <Progress
                value={((lTotal - lQueue.length) / Math.max(1, lTotal)) * 100}
                className="h-3"
              />
              <p className="mt-6 text-xs font-extrabold uppercase text-muted-foreground">
                {subject?.name}
              </p>
              <h2 className="mt-2 text-xl font-extrabold">{lCard.front}</h2>
              <div className="mt-6 grid grid-cols-1 gap-3">
                {lOptions.map((opt, i) => {
                  const isRight = opt === lCard.back;
                  return (
                    <button
                      key={i}
                      disabled={lChecked}
                      onClick={() => setLSel(i)}
                      className={cn(
                        "rounded-2xl border-2 border-b-4 px-4 py-4 text-left font-bold transition-colors",
                        !lChecked &&
                          lSel === i &&
                          "border-brand bg-brand/10 text-brand",
                        !lChecked && lSel !== i && "border-muted bg-card",
                        lChecked && isRight &&
                          "border-emerald-500 bg-emerald-50 text-emerald-700",
                        lChecked && lSel === i && !isRight &&
                          "border-rose-500 bg-rose-50 text-rose-700",
                        lChecked && lSel !== i && !isRight && "opacity-60"
                      )}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 pb-4">
                {!lChecked ? (
                  <Button
                    disabled={lSel === null}
                    onClick={learnCheck}
                    className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand py-6 font-extrabold hover:bg-brand-dark active:border-b-0 disabled:opacity-40"
                  >
                    CHECK
                  </Button>
                ) : (
                  <Button
                    onClick={learnNext}
                    className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand py-6 font-extrabold hover:bg-brand-dark active:border-b-0"
                  >
                    CONTINUE
                  </Button>
                )}
              </div>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
