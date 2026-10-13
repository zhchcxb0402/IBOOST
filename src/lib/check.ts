export function normalize(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function localCheck(args: {
  answer: string;
  acceptable?: string[];
  userAnswer: string;
}): { correct: true; feedback: string } | null {
  const norm = normalize(args.userAnswer);
  if (!norm) return null;
  const candidates = [args.answer, ...(args.acceptable ?? [])].map(normalize);
  if (candidates.includes(norm)) {
    return { correct: true, feedback: "Matches the model answer." };
  }
  const uNum = Number(norm);
  const aNum = Number(normalize(args.answer));
  if (
    Number.isFinite(uNum) &&
    Number.isFinite(aNum) &&
    aNum !== 0 &&
    Math.abs(uNum - aNum) / Math.abs(aNum) <= 0.01
  ) {
    return { correct: true, feedback: "Numerically equivalent." };
  }
  return null;
}

export function keywordCheck(args: {
  keywords: string[];
  userAnswer: string;
}): { correct: boolean; feedback: string } {
  const hits = args.keywords.filter((k) =>
    normalize(args.userAnswer).includes(normalize(k))
  );
  const required = Math.min(2, Math.ceil(args.keywords.length * 0.6));
  if (args.keywords.length > 0 && hits.length >= required) {
    return {
      correct: true,
      feedback: `Covers the key ideas (${hits.length}/${args.keywords.length} keywords).`,
    };
  }
  return {
    correct: false,
    feedback: `Missing key ideas (${hits.length}/${args.keywords.length} keywords matched).`,
  };
}
