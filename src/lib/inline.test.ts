import { test } from "node:test";
import assert from "node:assert/strict";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { renderInline } from "./inline";

const html = (s: string) =>
  renderToStaticMarkup(createElement("span", null, renderInline(s)));

test("no markers → plain text", () => {
  assert.equal(html("plain text"), "<span>plain text</span>");
});

test("one bold segment", () => {
  assert.equal(
    html("a **bold** word"),
    "<span>a <strong>bold</strong> word</span>"
  );
});

test("two bold segments", () => {
  assert.equal(
    html("**a** and **b**"),
    "<span><strong>a</strong> and <strong>b</strong></span>"
  );
});

test("unmatched ** left as literal text", () => {
  assert.equal(html("oops **dangling"), "<span>oops **dangling</span>");
});
