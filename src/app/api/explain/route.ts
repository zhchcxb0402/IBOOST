import { NextResponse } from "next/server";
import { aiConfigured, chat } from "@/lib/ai";

export const runtime = "nodejs";

type Body = {
  subject?: unknown;
  prompt?: unknown;
  correctAnswer?: unknown;
  userAnswer?: unknown;
  explanation?: unknown;
};

function str(v: unknown, max: number): string | null {
  if (typeof v !== "string") return null;
  return v.slice(0, max);
}

export async function POST(req: Request) {
  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  const subject = str(body.subject, 600);
  const prompt = str(body.prompt, 600);
  const correctAnswer = str(body.correctAnswer, 600);
  const userAnswer = str(body.userAnswer, 400);
  const explanation = str(body.explanation, 600);
  if (!subject || !prompt || !correctAnswer || !userAnswer || !explanation) {
    return NextResponse.json({ error: "bad request" }, { status: 400 });
  }

  if (!aiConfigured()) {
    return NextResponse.json(
      { error: "AI explanations are not configured yet." },
      { status: 503 }
    );
  }

  const content = await chat(
    [
      {
        role: "system",
        content:
          "You are a friendly IB tutor. A student answered a question incorrectly. In at most 80 words and plain language, explain why their answer is wrong and why the correct answer is right, referring to the specific misconception if you can spot one. Do not restate the question. No markdown.",
      },
      {
        role: "user",
        content: `Subject: ${subject}\nQuestion: ${prompt}\nStudent's answer: ${userAnswer}\nCorrect answer: ${correctAnswer}\nTeacher note: ${explanation}`,
      },
    ],
    { temperature: 0.3 }
  );
  if (!content) {
    return NextResponse.json(
      { error: "Could not get an explanation right now." },
      { status: 502 }
    );
  }
  return NextResponse.json({ explanation: content.slice(0, 600) });
}
