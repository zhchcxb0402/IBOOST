import type { Question } from "@/content/types";
import { seededOrder } from "./shuffle";

const TYPE_RANK: Record<Question["type"], number> = { mcq: 0, short: 1, tf: 2 };

/**
 * Builds an interleaved review set: questions are drawn round-robin across
 * lessons so no two consecutive questions come from the same lesson (when
 * more than one lesson is in the set). Within each lesson, mcq/short are
 * preferred over tf (retrieval beats recognition). Deterministic per `seed`.
 */
export function buildReviewSet(
  lessons: { key: string; questions: Question[] }[],
  count = 10,
  seed = "review"
): { key: string; question: Question }[] {
  const queues = lessons
    .filter((l) => l.questions.length > 0)
    .map((l) => {
      const order = seededOrder(seed + "/" + l.key, l.questions.length);
      const questions = order.map((i) => l.questions[i]);
      questions.sort(
        (a, b) => TYPE_RANK[a.type] - TYPE_RANK[b.type]
      );
      return { key: l.key, questions };
    });
  const out: { key: string; question: Question }[] = [];
  while (out.length < count) {
    const nonEmpty = queues.filter((q) => q.questions.length > 0);
    if (nonEmpty.length === 0) break;
    for (const q of nonEmpty) {
      if (out.length >= count) break;
      const question = q.questions.shift()!;
      out.push({ key: q.key, question });
    }
  }
  return out;
}
