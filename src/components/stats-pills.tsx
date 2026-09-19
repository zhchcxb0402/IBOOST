"use client";

import { Flame, Heart, Zap } from "lucide-react";
import { useHydrated } from "@/lib/use-hydrated";
import { useProgress } from "@/store/progress";

export function StatsPills() {
  const hydrated = useHydrated();
  const { xp, hearts, streak } = useProgress();
  const v = (n: number) => (hydrated ? n : "–");

  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1 rounded-full border-2 border-orange-200 bg-orange-50 px-3 py-1 text-sm font-extrabold text-orange-500">
        <Flame className="size-4 fill-orange-400 text-orange-400" />
        {v(streak)}
      </span>
      <span className="flex items-center gap-1 rounded-full border-2 border-sky-200 bg-sky-50 px-3 py-1 text-sm font-extrabold text-sky-500">
        <Zap className="size-4 fill-sky-400 text-sky-400" />
        {v(xp)}
      </span>
      <span className="flex items-center gap-1 rounded-full border-2 border-rose-200 bg-rose-50 px-3 py-1 text-sm font-extrabold text-rose-500">
        <Heart className="size-4 fill-rose-400 text-rose-400" />
        {v(hearts)}
      </span>
    </div>
  );
}
