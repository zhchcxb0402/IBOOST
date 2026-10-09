import { test } from "node:test";
import assert from "node:assert/strict";
import { mergeProgress, type ProgressSlice } from "./sync";

const base: ProgressSlice = {
  xp: 0,
  hearts: 5,
  streak: 0,
  lastActiveDate: null,
  completedLessons: {},
  srs: {},
  onboarded: false,
  selectedSubjects: {},
};

test("completedLessons union", () => {
  const local = { ...base, completedLessons: { "math-aa/a": true as const } };
  const remote = { completedLessons: { "math-aa/b": true as const } };
  const m = mergeProgress(local, remote);
  assert.deepEqual(Object.keys(m.completedLessons).sort(), [
    "math-aa/a",
    "math-aa/b",
  ]);
});

test("xp takes max", () => {
  const m = mergeProgress({ ...base, xp: 120 }, { xp: 300 });
  assert.equal(m.xp, 300);
});

test("srs later due wins per card", () => {
  const local = {
    ...base,
    srs: { c1: { due: 100, interval: 1 }, c2: { due: 500, interval: 2 } },
  };
  const remote = {
    srs: { c1: { due: 900, interval: 4 }, c3: { due: 50, interval: 1 } },
  };
  const m = mergeProgress(local, remote);
  assert.deepEqual(m.srs.c1, { due: 900, interval: 4 });
  assert.deepEqual(m.srs.c2, { due: 500, interval: 2 });
  assert.deepEqual(m.srs.c3, { due: 50, interval: 1 });
});

test("selectedSubjects local wins over remote", () => {
  const local = {
    ...base,
    selectedSubjects: { "math-aa": "SL" as const, physics: "HL" as const },
  };
  const remote = {
    selectedSubjects: { "math-aa": "HL" as const, chemistry: "SL" as const },
  };
  const m = mergeProgress(local, remote);
  assert.deepEqual(m.selectedSubjects, {
    "math-aa": "SL",
    physics: "HL",
    chemistry: "SL",
  });
});
