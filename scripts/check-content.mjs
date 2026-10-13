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
import { studyBySubject } from "/Users/chenxingbao/Downloads/IBOOST/src/content/study/index.ts";
let errors = [];
const LEVELS = new Set(["SL", "HL"]);
const globalSlugs = new Set();
for (const s of subjects) {
  if (globalSlugs.has(s.slug)) errors.push("dup subject " + s.slug);
  globalSlugs.add(s.slug);
  for (const l of s.levels) if (!LEVELS.has(l)) errors.push("bad subject level " + s.slug + " " + l);
  if (!s.syllabusUrl) errors.push("no syllabusUrl " + s.slug);
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
  if (!s.comingSoon)
    for (const u of s.units)
      if (u.lessons.length < 5)
        console.log("  WARNING " + s.slug + " " + u.id + " has only " + u.lessons.length + " lessons");
  // sanity: SL filtering hides all HL-only lessons
  if (unitsForLevel(s, "SL").flatMap(u=>u.lessons).some(l=>l.level==="HL"))
    errors.push("SL leak " + s.slug);
}
// study notes integrity
const STUDY_REQUIRED = new Set(["physics", "chemistry", "economics"]);
const validSlugs = new Set(subjects.map(s => s.slug));
for (const [slug, notes] of Object.entries(studyBySubject)) {
  if (!validSlugs.has(slug)) errors.push("study notes for unknown subject " + slug);
  const subj = subjects.find(s => s.slug === slug);
  if (!subj) continue;
  const lessonIds = new Set(subj.units.flatMap(u => u.lessons.map(l => l.id)));
  for (const [lessonId, blocks] of Object.entries(notes)) {
    if (!lessonIds.has(lessonId)) errors.push("study notes for unknown lesson " + slug + "/" + lessonId);
    if (!Array.isArray(blocks) || blocks.length === 0) errors.push("empty study blocks " + slug + "/" + lessonId);
    else for (const [i, b] of blocks.entries()) {
      const id = slug + "/" + lessonId + " block " + i;
      if (b.type === "text" || b.type === "tip") { if (!b.body) errors.push("empty body " + id); }
      else if (b.type === "definition") { if (!b.term || !b.body) errors.push("empty def " + id); }
      else if (b.type === "formula") { if (!b.label || !b.body) errors.push("empty formula " + id); }
      else if (b.type === "example") { if (!b.title || !Array.isArray(b.steps) || b.steps.length === 0 || b.steps.some(x => !x)) errors.push("bad example " + id); else if (b.blank != null && (b.blank <= 0 || b.blank >= b.steps.length - 1)) errors.push("blank out of range " + id); }
      else if (b.type === "warmup" || b.type === "check") { if (!b.prompt || !b.answer) errors.push("empty " + b.type + " " + id); }
      else if (b.type === "list") { if (!Array.isArray(b.items) || b.items.length === 0 || b.items.some(x => !x)) errors.push("bad list " + id); }
      else errors.push("unknown block type " + id);
    }
  }
}
for (const s of subjects) {
  const lessonIds = s.units.flatMap(u => u.lessons.map(l => l.id));
  const have = lessonIds.filter(id => studyBySubject[s.slug]?.[id]?.length).length;
  const shorts = s.units.flatMap(u => u.lessons).flatMap(l => l.questions).filter(q => q.type === "short");
  const hinted = shorts.filter(q => q.hint).length;
  console.log(s.slug + ": study notes " + have + "/" + lessonIds.length + " lessons; hints " + hinted + "/" + shorts.length);
  if (STUDY_REQUIRED.has(s.slug) && hinted !== shorts.length)
    errors.push("missing short-question hints " + s.slug + " (" + hinted + "/" + shorts.length + ")");
  if (STUDY_REQUIRED.has(s.slug) && have !== lessonIds.length)
    errors.push("incomplete study notes " + s.slug + " (" + have + "/" + lessonIds.length + ")");
}
if (errors.length) { console.error("ERRORS:\\n" + errors.join("\\n")); process.exit(1); }
console.log("content OK");
`
);
execSync(`pnpm exec tsx ${out}`, { stdio: "inherit" });
