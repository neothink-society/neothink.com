#!/usr/bin/env node
// Context-aware swap: replace #b8973a with #8a7030 ONLY when it acts as
// text color, border/outline (UI indicator), or SVG stroke. Preserves
// `background`, `background-color`, and `background-image` fills where
// brand gold is acceptable because ink/white text sits on top.
//
// Scope: app/globals.css (source of truth for NTI palette). Narrow by
// design — we do not transform migrated WordPress HTML here.

import fs from "node:fs";
import path from "node:path";

const TARGET = path.resolve("app/globals.css");
const SRC = fs.readFileSync(TARGET, "utf8");

const HEX_RE = /#b8973a/gi;
const HEX_ACCESSIBLE = "#8A7030";

// Properties whose color must meet WCAG text (4.5:1) or UI (3:1) contrast.
// Using keyword roots so shorthand variants (border-top, border-color) hit.
const TEXT_UI_PROPS = [
  /\bcolor\s*:/i,
  /\bborder(?:-(?:top|right|bottom|left|color|inline(?:-start|-end)?|block(?:-start|-end)?))?\s*:/i,
  /\boutline(?:-color)?\s*:/i,
  /\btext-decoration(?:-color)?\s*:/i,
  /\bstroke\s*:/i,
  /\bcaret-color\s*:/i,
  /\bfill\s*:/i, // SVG fills used as icons — treat as text
];

const FILL_PROPS = [
  /\bbackground(?:-color|-image)?\s*:/i,
];

function classify(line) {
  if (FILL_PROPS.some((re) => re.test(line))) return "fill";
  if (TEXT_UI_PROPS.some((re) => re.test(line))) return "text";
  return "unknown";
}

let swapped = 0;
let kept = 0;
let unknown = 0;

const out = SRC.split("\n")
  .map((line, idx) => {
    if (!HEX_RE.test(line)) return line;
    HEX_RE.lastIndex = 0; // reset because global flag
    const kind = classify(line);
    if (kind === "text") {
      swapped += (line.match(HEX_RE) || []).length;
      HEX_RE.lastIndex = 0;
      return line.replace(HEX_RE, HEX_ACCESSIBLE);
    }
    if (kind === "fill") {
      kept += (line.match(HEX_RE) || []).length;
      HEX_RE.lastIndex = 0;
      return line;
    }
    // Unknown: leave as-is so we can inspect manually.
    unknown += (line.match(HEX_RE) || []).length;
    HEX_RE.lastIndex = 0;
    console.warn(`[line ${idx + 1}] unknown context, kept: ${line.trim()}`);
    return line;
  })
  .join("\n");

fs.writeFileSync(TARGET, out);
console.log(
  `globals.css: swapped=${swapped}, kept (fills)=${kept}, unknown=${unknown}`,
);
