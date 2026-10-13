import { test } from "node:test";
import assert from "node:assert/strict";
import { keywordCheck, localCheck, normalize } from "./check";

test("normalize is case/punctuation insensitive", () => {
  assert.equal(normalize("  The Answer, is 50m! "), "the answer is 50m");
});

test("localCheck exact match", () => {
  assert.deepEqual(localCheck({ answer: "50 m", userAnswer: "50 m" }), {
    correct: true,
    feedback: "Matches the model answer.",
  });
});

test("localCheck acceptable match", () => {
  const r = localCheck({
    answer: "50 m",
    acceptable: ["50", "50 metres"],
    userAnswer: "50 metres",
  });
  assert.equal(r?.correct, true);
});

test("localCheck punctuation/case insensitivity", () => {
  assert.equal(
    localCheck({ answer: "Supply shifts left.", userAnswer: "supply shifts left" })
      ?.correct,
    true
  );
});

test("localCheck numeric within 1%", () => {
  assert.equal(
    localCheck({ answer: "500", userAnswer: "495" })?.correct,
    true
  );
  assert.equal(localCheck({ answer: "500", userAnswer: "490" }), null);
});

test("localCheck wrong answer → null", () => {
  assert.equal(localCheck({ answer: "50", userAnswer: "banana" }), null);
  assert.equal(localCheck({ answer: "50", userAnswer: "" }), null);
});

test("keywordCheck threshold", () => {
  const keywords = ["demand", "increase", "price"];
  assert.equal(
    keywordCheck({ keywords, userAnswer: "demand increases, raising price" })
      .correct,
    true
  );
  assert.equal(keywordCheck({ keywords, userAnswer: "demand only" }).correct, false);
  assert.equal(keywordCheck({ keywords: [], userAnswer: "anything" }).correct, false);
});
