"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { RotateCcw, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getDeck, getSubject } from "@/content";
import { useProgress } from "@/store/progress";

export default function DeckPage() {
  const { deckId } = useParams<{ deckId: string }>();
  const deck = getDeck(deckId);
  const subject = deck ? getSubject(deck.subjectSlug) : undefined;
  const srs = useProgress((s) => s.srs);
  const reviewCard = useProgress((s) => s.reviewCard);

  const [queue, setQueue] = useState<{ id: string; front: string; back: string }[] | null>(null);
  const [flipped, setFlipped] = useState(false);
  const [known, setKnown] = useState(0);
  const [learning, setLearning] = useState(0);
  const [round, setRound] = useState(0);

  if (!deck) notFound();

  const dueQueue = () =>
    deck.cards.filter((c) => {
      const e = useProgress.getState().srs[c.id];
      return !e || e.due <= Date.now();
    });

  const start = () => {
    setQueue(dueQueue());
    setKnown(0);
    setLearning(0);
    setFlipped(false);
    setRound((r) => r + 1);
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

  const reviewed = Object.keys(srs).filter((id) =>
    deck.cards.some((c) => c.id === id)
  ).length;

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
          {deck.title} · {queue?.length ?? deck.cards.length} left
        </span>
      </header>

      {queue === null ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
          <div className="text-6xl">{subject?.emoji ?? "🃏"}</div>
          <h1 className="text-xl font-extrabold">{deck.title}</h1>
          <p className="font-bold text-muted-foreground">
            {deck.cards.length} cards · {reviewed} reviewed before
          </p>
          <Button
            onClick={start}
            className="rounded-2xl border-b-4 border-[#46a302] bg-[#58CC02] px-8 py-6 font-extrabold hover:bg-[#4fb802] active:border-b-0"
          >
            START SESSION
          </Button>
        </div>
      ) : !card ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
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
            onClick={start}
            className="rounded-2xl border-b-4 border-[#46a302] bg-[#58CC02] px-8 py-6 font-extrabold hover:bg-[#4fb802] active:border-b-0"
          >
            <RotateCcw className="mr-2 size-4" /> STUDY AGAIN
          </Button>
        </div>
      ) : (
        <div key={`${card.id}-${round}`} className="flex flex-1 flex-col">
          <div
            className="mt-8 flex flex-1 cursor-pointer items-center justify-center [perspective:1000px]"
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
              className="rounded-2xl border-b-4 border-[#46a302] bg-[#58CC02] py-6 font-extrabold hover:bg-[#4fb802] active:border-b-0"
            >
              GOT IT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
