import type { Deck, Lesson, Level, Subject, Unit } from "./types";
import { mathAA } from "./subjects/math-aa";
import { englishLangLit } from "./subjects/english-langlit";
import { businessManagement } from "./subjects/business-management";
import { physics } from "./subjects/physics";
import { chemistry } from "./subjects/chemistry";
import { economics } from "./subjects/economics";
import { biology } from "./subjects/biology";
import { computerScience } from "./subjects/computer-science";
import { englishB } from "./subjects/english-b";
import { history } from "./subjects/history";
import { psychology } from "./subjects/psychology";
import { ess } from "./subjects/ess";
import { geography } from "./subjects/geography";
import { decks } from "./decks";

export const subjects: Subject[] = [
  mathAA,
  englishLangLit,
  businessManagement,
  physics,
  chemistry,
  biology,
  computerScience,
  englishB,
  economics,
  history,
  psychology,
  ess,
  geography,
];
export { decks };

export function getSubject(slug: string): Subject | undefined {
  return subjects.find((s) => s.slug === slug);
}

export function getLesson(
  slug: string,
  lessonId: string
): { subject: Subject; lesson: Lesson } | undefined {
  const subject = getSubject(slug);
  if (!subject) return undefined;
  for (const unit of subject.units) {
    const lesson = unit.lessons.find((l) => l.id === lessonId);
    if (lesson) return { subject, lesson };
  }
  return undefined;
}

export function getDeck(id: string): Deck | undefined {
  return decks.find((d) => d.id === id);
}

/** Units/lessons visible at a level: SL hides anything marked "HL". */
export function unitsForLevel(subject: Subject, level: Level): Unit[] {
  return subject.units
    .filter((u) => level === "HL" || u.level !== "HL")
    .map((u) => ({
      ...u,
      lessons: u.lessons.filter((l) => level === "HL" || l.level !== "HL"),
    }));
}

export function lessonCount(subject: Subject, level: Level = "HL"): number {
  return unitsForLevel(subject, level).reduce(
    (n, u) => n + u.lessons.length,
    0
  );
}
