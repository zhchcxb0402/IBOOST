"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Level } from "@/content/types";

export const MAX_HEARTS = 5;

export type SrsEntry = { due: number; interval: number };

export type LessonReviewEntry = { due: number; stage: number };

export const REVIEW_DAYS = [1, 3, 7, 14, 30];

type ProgressState = {
  xp: number;
  hearts: number;
  streak: number;
  lastActiveDate: string | null;
  completedLessons: Record<string, true>;
  srs: Record<string, SrsEntry>;
  lessonReview: Record<string, LessonReviewEntry>;
  onboarded: boolean;
  selectedSubjects: Record<string, Level>;
  completeLesson: (key: string, xpEarned: number) => void;
  loseHeart: () => void;
  addXp: (n: number) => void;
  refillHearts: () => void;
  reviewCard: (cardId: string, known: boolean) => void;
  recordReview: (keys: string[], passed: boolean) => void;
  syncDaily: () => void;
  setSubjectLevel: (slug: string, level: Level | null) => void;
  finishOnboarding: () => void;
  reset: () => void;
};

function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function yesterdayStr() {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const DAY_MS = 24 * 60 * 60 * 1000;

export const useProgress = create<ProgressState>()(
  persist(
    (set) => ({
      xp: 0,
      hearts: MAX_HEARTS,
      streak: 0,
      lastActiveDate: null,
      completedLessons: {},
      srs: {},
      lessonReview: {},
      onboarded: false,
      selectedSubjects: {},
      completeLesson: (key, xpEarned) =>
        set((s) => {
          const today = todayStr();
          let streak = s.streak;
          if (s.lastActiveDate === today) {
            // streak unchanged
          } else if (s.lastActiveDate === yesterdayStr()) {
            streak = s.streak + 1;
          } else {
            streak = 1;
          }
          const lessonReview = s.lessonReview[key]
            ? s.lessonReview
            : {
                ...s.lessonReview,
                [key]: { due: Date.now() + DAY_MS, stage: 0 },
              };
          return {
            xp: s.xp + xpEarned,
            streak,
            lastActiveDate: today,
            completedLessons: { ...s.completedLessons, [key]: true },
            lessonReview,
          };
        }),
      recordReview: (keys, passed) =>
        set((s) => {
          const lessonReview = { ...s.lessonReview };
          for (const key of keys) {
            const prev = lessonReview[key] ?? { due: 0, stage: 0 };
            const stage = passed
              ? Math.min(prev.stage + 1, REVIEW_DAYS.length - 1)
              : 0;
            lessonReview[key] = {
              stage,
              due: Date.now() + REVIEW_DAYS[stage] * DAY_MS,
            };
          }
          return { lessonReview };
        }),
      loseHeart: () => set((s) => ({ hearts: Math.max(0, s.hearts - 1) })),
      addXp: (n) => set((s) => ({ xp: s.xp + n })),
      refillHearts: () => set({ hearts: MAX_HEARTS }),
      reviewCard: (cardId, known) =>
        set((s) => {
          const prev = s.srs[cardId] ?? { due: 0, interval: 0 };
          const next: SrsEntry = known
            ? {
                interval: Math.max(1, prev.interval * 2),
                due: Date.now() + Math.max(1, prev.interval * 2) * DAY_MS,
              }
            : { interval: 0, due: Date.now() + 10 * 60 * 1000 };
          return { srs: { ...s.srs, [cardId]: next } };
        }),
      syncDaily: () =>
        set((s) =>
          s.lastActiveDate !== todayStr() && s.hearts < MAX_HEARTS
            ? { hearts: MAX_HEARTS }
            : s
        ),
      setSubjectLevel: (slug, level) =>
        set((s) => {
          const next = { ...s.selectedSubjects };
          if (level === null) delete next[slug];
          else next[slug] = level;
          return { selectedSubjects: next };
        }),
      finishOnboarding: () => set({ onboarded: true }),
      reset: () =>
        set({
          xp: 0,
          hearts: MAX_HEARTS,
          streak: 0,
          lastActiveDate: null,
          completedLessons: {},
          srs: {},
          lessonReview: {},
          onboarded: false,
          selectedSubjects: {},
        }),
    }),
    {
      name: "iboost-progress",
      version: 2,
      migrate: (state: unknown) => {
        const s = (state ?? {}) as Partial<ProgressState>;
        return {
          ...s,
          onboarded: s.onboarded ?? false,
          selectedSubjects: s.selectedSubjects ?? {},
          lessonReview: s.lessonReview ?? {},
        } as ProgressState;
      },
    }
  )
);
