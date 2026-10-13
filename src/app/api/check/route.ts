import { NextResponse } from "next/server";
import { chat } from "@/lib/ai";
import { keywordCheck, localCheck } from "@/lib/check";

export const runtime = "nodejs";

type Body = {
  prompt?: string;
  answer?: string;
  keywords?: string[];
  acceptable?: string[];
  userAnswer?: string;
};

async function aiCheck(
  b: Required<Body>
): Promise<{ correct: boolean; feedback: string } | null> {
  const content = await chat(
    [
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
    { temperature: 0, json: true, timeoutMs: 6_000, maxTokens: 80 }
  );
  if (!content) return null;
  try {
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
  const fast = localCheck(b);
  if (fast) return NextResponse.json({ ...fast, source: "rules" });
  const keyword = keywordCheck(b);
  const ai = await aiCheck(b);
  if (ai) return NextResponse.json({ ...ai, source: "ai" });
  return NextResponse.json({ ...keyword, source: "rules" });
}
