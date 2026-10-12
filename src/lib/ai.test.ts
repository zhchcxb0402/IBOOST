import { test, beforeEach, afterEach } from "node:test";
import assert from "node:assert/strict";
import { aiConfigured, chat, resolveConfig } from "./ai";

const VARS = ["AI_API_KEY", "AI_BASE_URL", "AI_MODEL", "OPENAI_API_KEY"] as const;
const saved: Record<string, string | undefined> = {};
const origFetch = globalThis.fetch;

beforeEach(() => {
  for (const v of VARS) {
    saved[v] = process.env[v];
    delete process.env[v];
  }
});

afterEach(() => {
  for (const v of VARS) {
    if (saved[v] === undefined) delete process.env[v];
    else process.env[v] = saved[v];
  }
  globalThis.fetch = origFetch;
});

function mockFetch(payload: unknown, status = 200) {
  const calls: { url: string; body: Record<string, unknown> }[] = [];
  globalThis.fetch = (async (url: unknown, init: RequestInit) => {
    calls.push({ url: String(url), body: JSON.parse(String(init.body)) });
    return new Response(JSON.stringify(payload), { status });
  }) as typeof fetch;
  return calls;
}

test("no key: not configured, chat returns null without fetch", async () => {
  let called = false;
  globalThis.fetch = (async () => {
    called = true;
    return new Response("{}");
  }) as typeof fetch;
  assert.equal(aiConfigured(), false);
  assert.equal(resolveConfig(), null);
  assert.equal(await chat([{ role: "user", content: "hi" }]), null);
  assert.equal(called, false);
});

test("AI_API_KEY only: defaults to Gemini base + gemini-2.0-flash", async () => {
  process.env.AI_API_KEY = "test-key";
  const calls = mockFetch({
    choices: [{ message: { content: "  hello  " } }],
  });
  assert.equal(aiConfigured(), true);
  const out = await chat([{ role: "user", content: "hi" }]);
  assert.equal(out, "hello");
  assert.ok(
    calls[0].url.startsWith(
      "https://generativelanguage.googleapis.com/v1beta/openai"
    )
  );
  assert.equal(calls[0].body.model, "gemini-2.0-flash");
});

test("OPENAI_API_KEY only: falls back to api.openai.com + gpt-4o-mini", async () => {
  process.env.OPENAI_API_KEY = "sk-test";
  const calls = mockFetch({
    choices: [{ message: { content: "hi" } }],
  });
  await chat([{ role: "user", content: "hi" }]);
  assert.ok(calls[0].url.startsWith("https://api.openai.com/v1"));
  assert.equal(calls[0].body.model, "gpt-4o-mini");
});

test("explicit AI_BASE_URL/AI_MODEL override the OpenAI fallback", async () => {
  process.env.OPENAI_API_KEY = "sk-test";
  process.env.AI_BASE_URL = "https://api.deepseek.com/";
  process.env.AI_MODEL = "deepseek-chat";
  const cfg = resolveConfig();
  assert.equal(cfg?.baseUrl, "https://api.deepseek.com");
  assert.equal(cfg?.model, "deepseek-chat");
});

test("fenced ```json response is unwrapped", async () => {
  process.env.AI_API_KEY = "test-key";
  mockFetch({
    choices: [
      { message: { content: "```json\n{\"correct\":true}\n```" } },
    ],
  });
  const out = await chat([{ role: "user", content: "hi" }], { json: true });
  assert.equal(out, '{"correct":true}');
  assert.deepEqual(JSON.parse(out!), { correct: true });
});

test("non-OK upstream returns null", async () => {
  process.env.AI_API_KEY = "test-key";
  mockFetch({ error: "nope" }, 500);
  assert.equal(await chat([{ role: "user", content: "hi" }]), null);
});
