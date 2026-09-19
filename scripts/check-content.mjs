// Validates content integrity: mcq answerIndex in range, unique ids.
// Run: pnpm check:content
import { execSync } from "node:child_process";
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const dir = mkdtempSync(join(tmpdir(), "iboost-check-"));
const out = join(dir, "check.mjs");
writeFileSync(
  out,
  `import { subjects, decks, getLesson } from "/Users/chenxingbao/Downloads/IBOOST/src/content/index.ts";
let errors = [];
const globalIds = new Set();
for (const s of subjects) {
  if (globalIds.has(s.slug)) errors.push("dup subject " + s.slug);
  globalIds.add(s.slug);
  const unitIds = new Set();
  for (const u of s.units) {
    if (unitIds.has(u.id)) errors.push("dup unit " + u.id);
    unitIds.add(u.id);
    const lessonIds = new Set();
    for (const l of u.lessons) {
      if (lessonIds.has(l.id)) errors.push("dup lesson " + l.id);
      lessonIds.add(l.id);
      if (!getLesson(s.slug, l.id)) errors.push("getLesson failed " + l.id);
      const qIds = new Set();
      for (const q of l.questions) {
        if (qIds.has(q.id)) errors.push("dup question " + q.id);
        qIds.add(q.id);
        if (q.type === "mcq" && (q.answerIndex < 0 || q.answerIndex >= q.choices.length))
          errors.push("answerIndex OOB " + q.id);
        if (q.type === "fill" && !q.answer) errors.push("empty answer " + q.id);
      }
    }
  }
}
const deckIds = new Set();
for (const d of decks) {
  if (deckIds.has(d.id)) errors.push("dup deck " + d.id);
  deckIds.add(d.id);
  const cardIds = new Set();
  for (const c of d.cards) {
    if (cardIds.has(c.id)) errors.push("dup card " + c.id);
    cardIds.add(c.id);
  }
}
const qCount = subjects.flatMap(s => s.units.flatMap(u => u.lessons.flatMap(l => l.questions))).length;
const cCount = decks.reduce((n, d) => n + d.cards.length, 0);
console.log(subjects.map(s => s.slug + ": " + s.units.reduce((n,u)=>n+u.lessons.length,0) + " lessons").join(", "));
console.log("questions: " + qCount + ", cards: " + cCount);
if (errors.length) { console.error("ERRORS:\\n" + errors.join("\\n")); process.exit(1); }
console.log("content OK");
`
);
execSync(`pnpm exec tsx ${out}`, { stdio: "inherit" });
