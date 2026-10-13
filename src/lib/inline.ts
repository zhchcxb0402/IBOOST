import type { ReactNode } from "react";
import { createElement } from "react";

// Converts **bold** segments in a plain string into <strong> elements.
// Unmatched markers are left as literal text.
export function renderInline(s: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let i = 0;
  let key = 0;
  while (i < s.length) {
    const open = s.indexOf("**", i);
    if (open === -1) {
      parts.push(s.slice(i));
      break;
    }
    const close = s.indexOf("**", open + 2);
    if (close === -1 || close === open + 2) {
      parts.push(s.slice(i));
      break;
    }
    if (open > i) parts.push(s.slice(i, open));
    parts.push(
      createElement("strong", { key: key++ }, s.slice(open + 2, close))
    );
    i = close + 2;
  }
  return parts;
}
