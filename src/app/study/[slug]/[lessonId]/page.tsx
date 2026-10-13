"use client";

import { useState } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion } from "framer-motion";
import { HelpCircle, Lightbulb, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getLesson, getStudy } from "@/content";
import type { StudyBlock } from "@/content/types";
import { StatsPills } from "@/components/stats-pills";
import { renderInline } from "@/lib/inline";

function Reveal({
  label,
  answer,
  placeholder,
}: {
  label: string;
  answer: string;
  placeholder?: boolean;
}) {
  const [input, setInput] = useState("");
  const [shown, setShown] = useState(false);
  return (
    <div className="mt-2 space-y-2">
      {placeholder && (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Your guess…"
          className="w-full rounded-xl border-2 border-muted bg-background px-3 py-2 text-sm font-bold outline-none focus:border-brand"
        />
      )}
      {shown ? (
        <p className="rounded-xl bg-muted px-3 py-2 text-sm font-bold">
          {renderInline(answer)}
        </p>
      ) : (
        <Button
          variant="outline"
          size="sm"
          className="rounded-xl font-extrabold"
          onClick={() => setShown(true)}
        >
          {label}
        </Button>
      )}
    </div>
  );
}

function Block({ block }: { block: StudyBlock }) {
  const [stepShown, setStepShown] = useState(false);
  switch (block.type) {
    case "warmup":
      return (
        <div className="rounded-xl border-2 border-sky-300 bg-sky-50 p-4">
          <p className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide text-sky-600">
            <Zap className="size-3" /> Warm-up — have a go before you read
          </p>
          <p className="mt-1 text-sm font-extrabold">
            {renderInline(block.prompt)}
          </p>
          <Reveal label="Reveal" answer={block.answer} placeholder />
        </div>
      );
    case "check":
      return (
        <div className="rounded-xl border-2 border-violet-300 bg-violet-50 p-4">
          <p className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wide text-violet-600">
            <HelpCircle className="size-3" /> Check yourself
          </p>
          <p className="mt-1 text-sm font-extrabold">
            {renderInline(block.prompt)}
          </p>
          <Reveal label="Show answer" answer={block.answer} />
        </div>
      );
    case "text":
      return (
        <p className="text-sm font-bold leading-relaxed text-foreground">
          {renderInline(block.body)}
        </p>
      );
    case "definition":
      return (
        <div className="rounded-xl border-2 border-muted p-3">
          <p className="text-sm font-extrabold">{block.term}</p>
          <p className="mt-1 text-sm font-bold leading-relaxed text-muted-foreground">
            {renderInline(block.body)}
          </p>
        </div>
      );
    case "formula":
      return (
        <div className="rounded-xl bg-muted px-4 py-3">
          <p className="text-[10px] font-extrabold uppercase tracking-wide text-muted-foreground">
            {block.label}
          </p>
          <p className="mt-1 font-mono text-sm font-bold">
            {renderInline(block.body)}
          </p>
        </div>
      );
    case "example":
      return (
        <div className="rounded-xl border-2 border-brand-soft bg-brand-soft/50 p-4">
          <p className="text-xs font-extrabold uppercase text-brand-dark">
            Worked example: {block.title}
          </p>
          <ol className="mt-2 list-decimal space-y-1 pl-5">
            {block.steps.map((s, i) =>
              block.blank === i && !stepShown ? (
                <li key={i} className="list-none">
                  <button
                    onClick={() => setStepShown(true)}
                    className="w-full rounded-lg border-2 border-dashed border-brand px-3 py-2 text-left text-sm font-extrabold text-brand"
                  >
                    Your turn: what&apos;s the next step? — Reveal step
                  </button>
                </li>
              ) : (
                <li key={i} className="text-sm font-bold">
                  {renderInline(s)}
                </li>
              )
            )}
          </ol>
        </div>
      );
    case "tip":
      return (
        <div className="flex gap-2 rounded-xl border-2 border-amber-300 bg-amber-50 p-3">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" />
          <div>
            <p className="text-[10px] font-extrabold uppercase tracking-wide text-amber-600">
              Exam tip
            </p>
            <p className="text-sm font-bold leading-relaxed">
              {renderInline(block.body)}
            </p>
          </div>
        </div>
      );
    case "list":
      return (
        <div>
          {block.title && (
            <p className="mb-1 text-sm font-extrabold">{block.title}</p>
          )}
          <ul className="list-disc space-y-1 pl-5">
            {block.items.map((s, i) => (
              <li key={i} className="text-sm font-bold text-foreground">
                {renderInline(s)}
              </li>
            ))}
          </ul>
        </div>
      );
  }
}

export default function StudyPage() {
  const { slug, lessonId } = useParams<{ slug: string; lessonId: string }>();
  const found = getLesson(slug, lessonId);
  const notes = getStudy(slug, lessonId);
  if (!found || !notes) notFound();
  const { subject, lesson } = found;
  const unit = subject.units.find((u) =>
    u.lessons.some((l) => l.id === lesson.id)
  );

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pt-4 pb-28">
      <header className="flex items-center justify-between">
        <Link
          href={`/learn/${slug}`}
          className="text-sm font-extrabold text-muted-foreground"
        >
          ← BACK
        </Link>
        <div className="flex items-center gap-3">
          <Link
            href={`/lesson/${slug}/${lessonId}`}
            className="text-xs font-extrabold text-brand"
          >
            Know this already? Skip to practice →
          </Link>
          <StatsPills />
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4"
      >
        <div className="flex items-center gap-2">
          <span className="text-2xl">{subject.emoji}</span>
          <div>
            <h1 className="text-lg font-extrabold leading-tight">
              {lesson.title}
            </h1>
            {unit && (
              <p className="text-xs font-bold text-muted-foreground">
                {unit.code ? `${unit.code} · ` : ""}
                {unit.title}
              </p>
            )}
          </div>
        </div>

        <div className="mt-5 space-y-3">
          {notes.map((b, i) => (
            <Block key={i} block={b} />
          ))}
        </div>
      </motion.div>

      <div className="fixed bottom-0 left-0 right-0 border-t-2 border-muted bg-background p-4">
        <div className="mx-auto max-w-md">
          <Button
            className="w-full rounded-xl font-extrabold"
            render={<Link href={`/lesson/${slug}/${lessonId}`} />}
          >
            Start practice →
          </Button>
        </div>
      </div>
    </div>
  );
}
