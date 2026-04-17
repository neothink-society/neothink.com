#!/usr/bin/env node
// Same context-aware gold swap as gold-ink-swap.mjs but applied to every
// per-page CSS file under app/** and components/**. Replaces #B8973A with
// #7A6528 only for text/UI properties (color, border, outline,
// text-decoration-color, stroke, caret-color, fill). Background fills are
// left alone — gold is acceptable as a fill color with white/dark ink
// painted on top.

import fs from "node:fs";
import path from "node:path";

const HEX_RE = /#b8973a/gi;
const HEX_ACCESSIBLE = "#7A6528";

const TEXT_UI_PROPS = [
  /\bcolor\s*:/i,
  /\bborder(?:-(?:top|right|bottom|left|color|inline(?:-start|-end)?|block(?:-start|-end)?))?\s*:/i,
  /\boutline(?:-color)?\s*:/i,
  /\btext-decoration(?:-color)?\s*:/i,
  /\bstroke\s*:/i,
  /\bcaret-color\s*:/i,
  /\bfill\s*:/i,
];
const FILL_PROPS = [/\bbackground(?:-color|-image)?\s*:/i];

function classify(line) {
  if (FILL_PROPS.some((re) => re.test(line))) return "fill";
  if (TEXT_UI_PROPS.some((re) => re.test(line))) return "text";
  return "unknown";
}

function listCssFiles() {
  const out = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (ent.name.endsWith(".css") && ent.name !== "globals.css") {
        out.push(p);
      }
    }
  };
  walk("app");
  walk("components");
  return out;
}

let totalSwapped = 0;
let totalKept = 0;
let totalUnknown = 0;
let filesChanged = 0;

for (const file of listCssFiles()) {
  const src = fs.readFileSync(file, "utf8");
  if (!HEX_RE.test(src)) {
    HEX_RE.lastIndex = 0;
    continue;
  }
  HEX_RE.lastIndex = 0;

  let swapped = 0;
  let kept = 0;
  let unknown = 0;

  const out = src
    .split("\n")
    .map((line, idx) => {
      HEX_RE.lastIndex = 0;
      if (!HEX_RE.test(line)) return line;
      HEX_RE.lastIndex = 0;
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
      unknown += (line.match(HEX_RE) || []).length;
      HEX_RE.lastIndex = 0;
      console.warn(`[${file}:${idx + 1}] unknown context: ${line.trim()}`);
      return line;
    })
    .join("\n");

  if (swapped > 0) {
    fs.writeFileSync(file, out);
    filesChanged++;
  }
  totalSwapped += swapped;
  totalKept += kept;
  totalUnknown += unknown;
  if (swapped || kept || unknown) {
    console.log(`  ${file}  swapped=${swapped} kept=${kept} unknown=${unknown}`);
  }
}

console.log(
  `\n${filesChanged} files changed: swapped=${totalSwapped}, kept (fills)=${totalKept}, unknown=${totalUnknown}`
);
