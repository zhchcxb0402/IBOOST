import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Body = {
  prompt?: string;
  answer?: string;
  keywords?: string[];
  acceptable?: string[];
  userAnswer?: string;
};

function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

function rulesCheck(b: Required<Body>): { correct: boolean; feedback: string } {
  const norm = normalize(b.userAnswer);
  const candidates = [b.answer, ...(b.acceptable ?? [])].map(normalize);
  if (candidates.includes(norm)) {
    return { correct: true, feedback: "Matches the model answer." };
  }
  const uNum = Number(norm);
  const aNum = Number(normalize(b.answer));
  if (
    Number.isFinite(uNum) &&
    Number.isFinite(aNum) &&
    aNum !== 0 &&
    Math.abs(uNum - aNum) / Math.abs(aNum) <= 0.01
  ) {
    return { correct: true, feedback: "Numerically equivalent." };
  }
  const hits = b.keywords.filter((k) =>
    normalize(b.userAnswer).includes(normalize(k))
  );
  if (b.keywords.length > 0 && hits.length / b.keywords.length >= 0.6) {
    return {
      correct: true,
      feedback: `Covers the key ideas (${hits.length}/${b.keywords.length} keywords).`,
    };
  }
  return {
    correct: false,
    feedback: `Missing key ideas (${hits.length}/${b.keywords.length} keywords matched).`,
  };
}

async function aiCheck(
  b: Required<Body>
): Promise<{ correct: boolean; feedback: string } | null> {
  const key = process.env.OPENAI_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0,
        messages: [
          {
            role: "system",
            content:
              "You are an IB examiner. Decide if the student's answer is correct for the question given the model answer and key ideas. Accept paraphrases and equivalent notation; do not require exact wording. Reply ONLY with JSON {\"correct\": boolean, \"feedback\": string (max 25 words)}.",
          },
          {
            role: "user",
            content: `Question: ${b.prompt}\nModel answer: ${b.answer}\nKey ideas: ${b.keywords.join(", ")}\nStudent answer: ${b.userAnswer}`,
          },
        ],
      }),
    });
    if (!res.ok) return null;
    const data = await res.json();
    const content = data?.choices?.[0]?.message?.content ?? "";
    const parsed = JSON.parse(content);
    if (typeof parsed.correct !== "boolean") return null;
    return {
      correct: parsed.correct,
      feedback: String(parsed.feedback ?? "").slice(0, 200),
    };
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }
  const b: Required<Body> = {
    prompt: body.prompt ?? "",
    answer: body.answer ?? "",
    keywords: Array.isArray(body.keywords) ? body.keywords : [],
    acceptable: Array.isArray(body.acceptable) ? body.acceptable : [],
    userAnswer: body.userAnswer ?? "",
  };
  if (!b.userAnswer.trim()) {
    return NextResponse.json(
      { correct: false, feedback: "No answer provided.", source: "rules" },
      { status: 200 }
    );
  }
  const ai = await aiCheck(b);
  if (ai) return NextResponse.json({ ...ai, source: "ai" });
  return NextResponse.json({ ...rulesCheck(b), source: "rules" });
}
