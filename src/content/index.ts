import type { Deck, Lesson, Subject } from "./types";
import { mathAA } from "./subjects/math-aa";
import { physics } from "./subjects/physics";
import { chemistry } from "./subjects/chemistry";
import { economics } from "./subjects/economics";
import { decks } from "./decks";

export const subjects: Subject[] = [mathAA, physics, chemistry, economics];
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

export function lessonCount(subject: Subject): number {
  return subject.units.reduce((n, u) => n + u.lessons.length, 0);
}
