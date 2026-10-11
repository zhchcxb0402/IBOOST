import { test } from "node:test";
import assert from "node:assert/strict";
import { seededOrder } from "./shuffle";
import { subjects } from "../content";

test("deterministic for same seed", () => {
  assert.deepEqual(seededOrder("abc", 4), seededOrder("abc", 4));
});

test("returns a permutation of [0..n-1]", () => {
  for (const seed of ["x", "q-1", "maa-l1-q1", "zzz"]) {
    for (const n of [2, 3, 4, 5]) {
      assert.deepEqual([...seededOrder(seed, n)].sort(), [
        ...Array(n).keys(),
      ]);
    }
  }
});

test("MCQ correct answer lands in position 0 <50% of the time", () => {
  let total = 0;
  let pos0 = 0;
  for (const s of subjects) {
    for (const u of s.units) {
      for (const l of u.lessons) {
        for (const q of l.questions) {
          if (q.type !== "mcq") continue;
          total++;
          const pos = seededOrder(q.id, q.choices.length).indexOf(
            q.answerIndex
          );
          if (pos === 0) pos0++;
        }
      }
    }
  }
  console.log(
    `mcq position-0 share: ${pos0}/${total} = ${((pos0 / total) * 100).toFixed(1)}%`
  );
  assert.ok(total > 0);
  assert.ok(pos0 / total < 0.5);
});
