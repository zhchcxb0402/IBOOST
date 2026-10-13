import { test } from "node:test";
import assert from "node:assert/strict";
import { buildReviewSet } from "./review";
import type { Question } from "../content/types";

const q = (id: string, type: Question["type"]): Question =>
  type === "mcq"
    ? { id, type, prompt: "p", choices: ["a", "b"], answerIndex: 0, explanation: "e" }
    : type === "tf"
      ? { id, type, prompt: "p", answer: true, explanation: "e" }
      : { id, type, prompt: "p", answer: "a", keywords: ["a"], explanation: "e" };

test("no adjacent same-lesson pairs with 3 lessons", () => {
  const lessons = [
    { key: "a", questions: [q("a1", "mcq"), q("a2", "tf"), q("a3", "short")] },
    { key: "b", questions: [q("b1", "tf"), q("b2", "mcq"), q("b3", "mcq")] },
    { key: "c", questions: [q("c1", "short"), q("c2", "tf"), q("c3", "short")] },
  ];
  const set = buildReviewSet(lessons, 9, "s1");
  assert.equal(set.length, 9);
  for (let i = 1; i < set.length; i++) {
    assert.notEqual(set[i].key, set[i - 1].key);
  }
});

test("single lesson falls back gracefully", () => {
  const set = buildReviewSet(
    [{ key: "only", questions: [q("o1", "mcq"), q("o2", "short")] }],
    10,
    "s2"
  );
  assert.equal(set.length, 2);
  assert.equal(set[0].key, "only");
});

test("count is respected and set is deterministic", () => {
  const lessons = [
    { key: "a", questions: [q("a1", "mcq"), q("a2", "mcq"), q("a3", "mcq")] },
    { key: "b", questions: [q("b1", "mcq"), q("b2", "mcq"), q("b3", "mcq")] },
  ];
  const s1 = buildReviewSet(lessons, 4, "seed");
  const s2 = buildReviewSet(lessons, 4, "seed");
  assert.equal(s1.length, 4);
  assert.deepEqual(s1, s2);
});

test("mcq and short are preferred over tf", () => {
  const lessons = [
    { key: "a", questions: [q("a1", "tf"), q("a2", "mcq"), q("a3", "short")] },
    { key: "b", questions: [q("b1", "tf"), q("b2", "mcq")] },
  ];
  const set = buildReviewSet(lessons, 3, "s3");
  assert.ok(set.every((x) => x.question.type !== "tf"));
});
