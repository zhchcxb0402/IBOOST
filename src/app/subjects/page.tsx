"use client";

import { Check, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { subjects } from "@/content";
import type { Level } from "@/content/types";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";
import { cn } from "@/lib/utils";

export default function SubjectsPage() {
  const hydrated = useHydrated();
  const { selectedSubjects, setSubjectLevel } = useProgress();

  const built = subjects.filter((s) => !s.comingSoon);
  const soon = subjects.filter((s) => s.comingSoon);

  const row = (s: (typeof subjects)[number]) => {
    const level = hydrated ? selectedSubjects[s.slug] : undefined;
    return (
      <div
        key={s.slug}
        className={cn(
          "flex items-center gap-3 rounded-2xl border-2 p-3",
          level ? "border-brand bg-brand/5" : "border-muted bg-card",
          s.comingSoon && "opacity-50"
        )}
      >
        <span className="text-2xl">{s.emoji}</span>
        <div className="flex-1">
          <p className="font-extrabold">{s.short}</p>
          <p className="text-xs font-bold text-muted-foreground">{s.group}</p>
        </div>
        {s.comingSoon ? (
          <Badge className="border-0 bg-amber-100 font-extrabold text-amber-600">
            COMING SOON
          </Badge>
        ) : level ? (
          <div className="flex items-center gap-2">
            <div className="flex rounded-xl border-2 border-muted p-0.5">
              {(["HL", "SL"] as Level[]).map((lv) => (
                <button
                  key={lv}
                  onClick={() => setSubjectLevel(s.slug, lv)}
                  className={cn(
                    "rounded-lg px-3 py-1 text-xs font-extrabold transition-colors",
                    level === lv ? "bg-brand text-white" : "text-muted-foreground"
                  )}
                >
                  {lv}
                </button>
              ))}
            </div>
            <button
              onClick={() => setSubjectLevel(s.slug, null)}
              aria-label={`Remove ${s.short}`}
              className="text-muted-foreground hover:text-rose-500"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setSubjectLevel(s.slug, "HL")}
            className="flex items-center gap-1 rounded-xl border-2 border-b-4 border-muted px-3 py-1.5 text-xs font-extrabold text-muted-foreground hover:border-brand hover:text-brand"
          >
            <Check className="size-4" /> ADD
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="pt-4 space-y-6">
      <header>
        <h1 className="text-xl font-extrabold tracking-tight">Subjects</h1>
        <p className="text-sm font-bold text-muted-foreground">
          Manage your subjects and levels
        </p>
      </header>
      <section className="space-y-2">{built.map(row)}</section>
      <section className="space-y-2">{soon.map(row)}</section>
    </div>
  );
}
