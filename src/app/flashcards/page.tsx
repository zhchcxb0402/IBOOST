"use client";

import Link from "next/link";
import { ChevronRight, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { decks, getSubject } from "@/content";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";

export default function FlashcardsPage() {
  const hydrated = useHydrated();
  const srs = useProgress((s) => s.srs);

  return (
    <div className="pt-4 space-y-6">
      <header>
        <h1 className="text-xl font-extrabold tracking-tight">Flashcards</h1>
        <p className="text-sm font-bold text-muted-foreground">
          Spaced repetition review
        </p>
      </header>

      <section className="space-y-3">
        {decks.map((deck) => {
          const subject = getSubject(deck.subjectSlug);
          const due = hydrated
            ? deck.cards.filter((c) => !srs[c.id] || srs[c.id].due <= Date.now())
                .length
            : deck.cards.length;
          return (
            <Link key={deck.id} href={`/flashcards/${deck.id}`}>
              <Card className="border-2 transition-transform hover:-translate-y-0.5">
                <CardContent className="flex items-center gap-3 p-4">
                  <div
                    className="flex size-12 items-center justify-center rounded-2xl text-2xl"
                    style={{ backgroundColor: `${subject?.color ?? "#58CC02"}22` }}
                  >
                    {subject?.emoji ?? <Layers className="size-6" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-extrabold">{deck.title}</p>
                    <p className="text-xs font-bold text-muted-foreground">
                      {deck.cards.length} cards
                    </p>
                  </div>
                  {due > 0 && (
                    <Badge className="border-0 bg-[#FF9600]/15 font-extrabold text-[#FF9600]">
                      {due} due
                    </Badge>
                  )}
                  <ChevronRight className="size-5 text-muted-foreground" />
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </section>
    </div>
  );
}
