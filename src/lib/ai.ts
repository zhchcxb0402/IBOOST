export type ChatMessage = { role: "system" | "user"; content: string };

export type AiConfig = {
  key: string;
  baseUrl: string;
  model: string;
} | null;

export function resolveConfig(
  env: NodeJS.ProcessEnv = process.env
): AiConfig {
  const key = env.AI_API_KEY ?? env.OPENAI_API_KEY;
  if (!key) return null;
  let baseUrl =
    env.AI_BASE_URL ?? "https://generativelanguage.googleapis.com/v1beta/openai";
  let model = env.AI_MODEL ?? "gemini-3.5-flash-lite";
  // Backwards compat: an OpenAI key with no explicit config means api.openai.com.
  if (!env.AI_API_KEY && env.OPENAI_API_KEY && !env.AI_BASE_URL) {
    baseUrl = "https://api.openai.com/v1";
    model = env.AI_MODEL ?? "gpt-4o-mini";
  }
  return { key, baseUrl: baseUrl.replace(/\/+$/, ""), model };
}

export function aiConfigured(): boolean {
  return resolveConfig() !== null;
}

function stripFences(s: string): string {
  return s
    .replace(/^```(?:json|JSON)?\s*\n?/, "")
    .replace(/\n?```\s*$/, "")
    .trim();
}

export async function chat(
  messages: ChatMessage[],
  opts?: {
    temperature?: number;
    json?: boolean;
    timeoutMs?: number;
    maxTokens?: number;
  }
): Promise<string | null> {
  const cfg = resolveConfig();
  if (!cfg) return null;
  try {
    const res = await fetch(`${cfg.baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${cfg.key}`,
      },
      body: JSON.stringify({
        model: cfg.model,
        temperature: opts?.temperature ?? 0.3,
        messages,
        ...(opts?.json ? { response_format: { type: "json_object" } } : {}),
        ...(opts?.maxTokens ? { max_tokens: opts.maxTokens } : {}),
      }),
      signal: AbortSignal.timeout(opts?.timeoutMs ?? 15_000),
    });
    if (!res.ok) {
      const body = (await res.text()).slice(0, 300);
      console.error(`[ai] ${cfg.model} @ ${cfg.baseUrl} -> ${res.status}: ${body}`);
      return null;
    }
    const data = await res.json();
    const content = String(data?.choices?.[0]?.message?.content ?? "");
    const cleaned = stripFences(content);
    return cleaned || null;
  } catch (err) {
    console.error(`[ai] request failed: ${err instanceof Error ? err.message : String(err)}`);
    return null;
  }
}
