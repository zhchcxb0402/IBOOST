// Validates content integrity: mcq answerIndex in range, tf boolean answer,
// short non-empty answer + non-empty keywords, valid levels, unique ids.
// Run: pnpm check:content
import { execSync } from "node:child_process";
import { writeFileSync, mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const dir = mkdtempSync(join(tmpdir(), "iboost-check-"));
const out = join(dir, "check.mts");
writeFileSync(
  out,
  `import { subjects, decks, getLesson, unitsForLevel } from "/Users/chenxingbao/Downloads/IBOOST/src/content/index.ts";
let errors = [];
const LEVELS = new Set(["SL", "HL"]);
const NAMES = new Set(["InThinking", "RevisionDojo", "Clastify", "Nail IB", "IB Official"]);
const globalSlugs = new Set();
for (const s of subjects) {
  if (globalSlugs.has(s.slug)) errors.push("dup subject " + s.slug);
  globalSlugs.add(s.slug);
  for (const l of s.levels) if (!LEVELS.has(l)) errors.push("bad subject level " + s.slug + " " + l);
  for (const r of s.resources) if (!NAMES.has(r.name)) errors.push("bad resource name " + s.slug + " " + r.name);
  if (!s.description) errors.push("no description " + s.slug);
  const unitIds = new Set();
  for (const u of s.units) {
    if (unitIds.has(u.id)) errors.push("dup unit " + u.id);
    unitIds.add(u.id);
    if (u.level && !LEVELS.has(u.level)) errors.push("bad unit level " + u.id);
    const lessonIds = new Set();
    for (const l of u.lessons) {
      if (lessonIds.has(l.id)) errors.push("dup lesson " + l.id);
      lessonIds.add(l.id);
      if (l.level && !LEVELS.has(l.level)) errors.push("bad lesson level " + l.id);
      if (!getLesson(s.slug, l.id)) errors.push("getLesson failed " + l.id);
      const qIds = new Set();
      for (const q of l.questions) {
        if (qIds.has(q.id)) errors.push("dup question " + q.id);
        qIds.add(q.id);
        if (q.type === "mcq" && (q.answerIndex < 0 || q.answerIndex >= q.choices.length))
          errors.push("answerIndex OOB " + q.id);
        if (q.type === "tf" && typeof q.answer !== "boolean")
          errors.push("tf answer not boolean " + q.id);
        if (q.type === "short") {
          if (!q.answer) errors.push("empty answer " + q.id);
          if (!q.keywords || q.keywords.length === 0 || q.keywords.some(k => !k))
            errors.push("bad keywords " + q.id);
        }
      }
    }
  }
}
const deckIds = new Set();
for (const d of decks) {
  if (deckIds.has(d.id)) errors.push("dup deck " + d.id);
  deckIds.add(d.id);
  if (!subjects.some(s => s.slug === d.subjectSlug)) errors.push("deck for missing subject " + d.id);
  const cardIds = new Set();
  for (const c of d.cards) {
    if (cardIds.has(c.id)) errors.push("dup card " + c.id);
    cardIds.add(c.id);
  }
}
for (const s of subjects) {
  const units = s.units.length;
  const lessons = s.units.reduce((n,u)=>n+u.lessons.length,0);
  const hlOnly = s.units.flatMap(u=>u.lessons).filter(l=>l.level==="HL").length
    + 0;
  const qs = s.units.flatMap(u=>u.lessons.flatMap(l=>l.questions));
  const by = t => qs.filter(q=>q.type===t).length;
  const deck = decks.find(d=>d.subjectSlug===s.slug);
  console.log(s.slug + (s.comingSoon ? " (comingSoon)" : "") + ": " + units + " units, " + lessons + " lessons (" + hlOnly + " HL-only), " + qs.length + " questions [mcq " + by("mcq") + ", tf " + by("tf") + ", short " + by("short") + "]" + (deck ? ", deck " + deck.cards.length + " cards" : ""));
  // sanity: SL filtering hides all HL-only lessons
  if (unitsForLevel(s, "SL").flatMap(u=>u.lessons).some(l=>l.level==="HL"))
    errors.push("SL leak " + s.slug);
}
if (errors.length) { console.error("ERRORS:\\n" + errors.join("\\n")); process.exit(1); }
console.log("content OK");
`
);
execSync(`pnpm exec tsx ${out}`, { stdio: "inherit" });
