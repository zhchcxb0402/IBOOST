import type { Metadata } from "next";
import Link from "next/link";
import { Flame, Layers, ListChecks, Sparkles } from "lucide-react";
import { Logo, LogoMark } from "@/components/logo";
import { LandingCta } from "@/components/landing-cta";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { decks, lessonCount, subjects } from "@/content";

export const metadata: Metadata = {
  title: "IBOOST — IB revision, gamified",
  description:
    "Duolingo-style lessons and Quizlet-style flashcards for IB Diploma subjects, HL and SL. Free.",
};

export default function LandingPage() {
  const built = subjects.filter((s) => !s.comingSoon);
  const questionCount = built.reduce(
    (n, s) =>
      n +
      s.units.reduce(
        (m, u) => m + u.lessons.reduce((k, l) => k + l.questions.length, 0),
        0,
      ),
    0,
  );
  const cardCount = decks
    .filter((d) => built.some((s) => s.slug === d.subjectSlug))
    .reduce((n, d) => n + d.cards.length, 0);
  const groups = [...new Set(built.map((s) => s.group))];

  const stats = [
    { value: built.length, label: "subjects" },
    { value: questionCount.toLocaleString(), label: "questions" },
    { value: cardCount.toLocaleString(), label: "flashcards" },
  ];

  const steps = [
    {
      icon: ListChecks,
      title: "Pick your subjects & HL/SL",
      body: `Choose from ${built.length} IB Diploma subjects and set your level — lessons adapt to your syllabus.`,
    },
    {
      icon: Flame,
      title: "Read, then practise",
      body: "Short study notes first, then bite-size practice with hearts, XP and streaks to keep you coming back.",
    },
    {
      icon: Layers,
      title: "Flashcards with spaced repetition",
      body: "Quizlet-style decks per subject, scheduled so you review right before you forget.",
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 md:py-16">
      {/* Hero */}
      <header className="flex flex-col items-center gap-6 text-center">
        <Logo size={40} />
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          Revise the IB like it&apos;s a game
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Duolingo-style lessons and Quizlet-style flashcards for{" "}
          {built.length} IB subjects, HL and SL. Free.
        </p>
        <LandingCta />
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-brand-soft px-5 py-3 text-center"
            >
              <div className="text-2xl font-extrabold text-brand">
                {s.value}
              </div>
              <div className="text-xs font-bold uppercase tracking-wide text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </header>

      {/* How it works */}
      <section className="mt-20">
        <h2 className="text-center text-2xl font-extrabold">How it works</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {steps.map((s) => (
            <Card key={s.title}>
              <CardContent className="flex flex-col items-center gap-3 p-6 text-center">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-brand-soft">
                  <s.icon className="size-6 text-brand" />
                </div>
                <h3 className="font-extrabold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Subjects */}
      <section className="mt-20">
        <h2 className="text-center text-2xl font-extrabold">
          All {built.length} subjects
        </h2>
        {groups.map((g) => (
          <div key={g} className="mt-10">
            <h3 className="mb-4 text-sm font-extrabold uppercase tracking-wide text-muted-foreground">
              {g}
            </h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {built
                .filter((s) => s.group === g)
                .map((s) => (
                  <Link key={s.slug} href={`/learn/${s.slug}`}>
                    <Card className="h-full transition-colors hover:border-brand/50">
                      <CardContent className="flex items-center gap-4 p-5">
                        <span
                          className="flex size-12 shrink-0 items-center justify-center rounded-2xl text-2xl"
                          style={{ backgroundColor: `${s.color}1A` }}
                        >
                          {s.emoji}
                        </span>
                        <div className="min-w-0">
                          <div className="truncate font-extrabold">
                            {s.name}
                          </div>
                          <div className="mt-1 flex items-center gap-2">
                            <Badge
                              variant="secondary"
                              className="text-[0.65rem]"
                            >
                              {lessonCount(s)} lessons
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              SL + HL
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        ))}
      </section>

      {/* AI strip */}
      <section className="mt-20 rounded-3xl bg-brand-soft p-8 md:p-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand">
            <Sparkles className="size-6 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-extrabold">Answers checked by AI</h2>
            <p className="mt-1 text-muted-foreground">
              Open-ended answers accept paraphrases, not just exact wording —
              and when you get one wrong, IBOOST explains your mistake.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t pt-8 pb-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <LogoMark size={32} />
          <p className="max-w-lg text-xs text-muted-foreground">
            IBOOST is an independent study tool and is not affiliated with or
            endorsed by the International Baccalaureate Organization.
          </p>
          <nav className="flex items-center gap-6 text-sm font-bold">
            <Link href="/login" className="text-brand hover:underline">
              Sign in
            </Link>
            <a
              href="https://github.com/zhchcxb0402/IBOOST"
              target="_blank"
              rel="noreferrer"
              className="text-muted-foreground hover:text-foreground"
            >
              GitHub
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
