"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Logo } from "@/components/logo";
import { subjects } from "@/content";
import type { Level } from "@/content/types";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

const PARTNERS = ["RevisionDojo", "Nail IB", "Clastify", "InThinking"];

export default function OnboardingPage() {
  const router = useRouter();
  const { setSubjectLevel, finishOnboarding, selectedSubjects } = useProgress();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState<Record<string, Level>>(selectedSubjects);

  const toggle = (slug: string) =>
    setPicked((p) => {
      const n = { ...p };
      if (n[slug]) delete n[slug];
      else n[slug] = "HL";
      return n;
    });

  const start = () => {
    for (const [slug, level] of Object.entries(picked))
      setSubjectLevel(slug, level);
    finishOnboarding();
    router.push("/");
  };

  const built = subjects.filter((s) => !s.comingSoon);
  const soon = subjects.filter((s) => s.comingSoon);
  const pickedList = built.filter((s) => picked[s.slug]);

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-md flex-col px-6 py-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.25 }}
          className="flex flex-1 flex-col"
        >
          {step === 0 && (
            <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
              <Logo size={56} />
              <h1 className="text-3xl font-extrabold leading-tight">
                Master the IB, one bite at a time
              </h1>
              <p className="font-bold text-muted-foreground">
                All curriculum content is structured from the official IB DP
                subject guides. Practice styles are inspired by{" "}
                {PARTNERS.slice(0, -1).join(", ")} and{" "}
                {PARTNERS[PARTNERS.length - 1]} — built into one Duolingo ×
                Quizlet experience.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {PARTNERS.map((p) => (
                  <Badge
                    key={p}
                    variant="secondary"
                    className="rounded-full font-bold"
                  >
                    {p}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="flex flex-1 flex-col gap-4 pt-6">
              <h1 className="text-2xl font-extrabold">
                Choose your subjects
              </h1>
              <p className="font-bold text-muted-foreground">
                Pick the IB subjects you&apos;re studying.
              </p>
              <div className="space-y-2">
                {[...built, ...soon].map((s) => {
                  const on = !!picked[s.slug];
                  return (
                    <button
                      key={s.slug}
                      disabled={s.comingSoon}
                      onClick={() => toggle(s.slug)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-2xl border-2 border-b-4 p-3 text-left transition-colors",
                        on
                          ? "border-brand bg-brand/5"
                          : "border-muted bg-card",
                        s.comingSoon && "opacity-50"
                      )}
                    >
                      <span className="text-2xl">{s.emoji}</span>
                      <span className="flex-1">
                        <span className="block font-extrabold">{s.name}</span>
                        <span className="block text-xs font-bold text-muted-foreground">
                          {s.group}
                        </span>
                      </span>
                      {s.comingSoon ? (
                        <Badge className="border-0 bg-amber-100 font-extrabold text-amber-600">
                          COMING SOON
                        </Badge>
                      ) : (
                        on && (
                          <Check className="size-5 text-brand" strokeWidth={3} />
                        )
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="flex flex-1 flex-col gap-4 pt-6">
              <h1 className="text-2xl font-extrabold">Choose your levels</h1>
              <p className="font-bold text-muted-foreground">
                HL or SL for each subject (HL includes all SL content).
              </p>
              <div className="space-y-2">
                {pickedList.map((s) => (
                  <div
                    key={s.slug}
                    className="flex items-center gap-3 rounded-2xl border-2 border-muted bg-card p-3"
                  >
                    <span className="text-2xl">{s.emoji}</span>
                    <span className="flex-1 font-extrabold">{s.short}</span>
                    <div className="flex rounded-xl border-2 border-muted p-0.5">
                      {(["HL", "SL"] as Level[]).map((lv) => (
                        <button
                          key={lv}
                          onClick={() =>
                            setPicked((p) => ({ ...p, [s.slug]: lv }))
                          }
                          className={cn(
                            "rounded-lg px-4 py-1.5 text-sm font-extrabold transition-colors",
                            picked[s.slug] === lv
                              ? "bg-brand text-white"
                              : "text-muted-foreground"
                          )}
                        >
                          {lv}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                {pickedList.length === 0 && (
                  <p className="text-center font-bold text-muted-foreground">
                    No subjects selected — go back and pick at least one.
                  </p>
                )}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      <div className="pt-6">
        {step === 0 && (
          <Button
            onClick={() => setStep(1)}
            className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand py-6 text-base font-extrabold hover:bg-brand-dark active:border-b-0"
          >
            GET STARTED
          </Button>
        )}
        {step === 1 && (
          <Button
            disabled={pickedList.length === 0}
            onClick={() => setStep(2)}
            className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand py-6 text-base font-extrabold hover:bg-brand-dark active:border-b-0 disabled:opacity-40"
          >
            CONTINUE
          </Button>
        )}
        {step === 2 && (
          <Button
            disabled={pickedList.length === 0}
            onClick={start}
            className="w-full rounded-2xl border-b-4 border-brand-dark bg-brand py-6 text-base font-extrabold hover:bg-brand-dark active:border-b-0 disabled:opacity-40"
          >
            START LEARNING
          </Button>
        )}
      </div>
    </div>
  );
}
