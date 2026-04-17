#!/usr/bin/env node
// Per-page CSS var-level swap. Each per-page stylesheet declares a local
// display-gold plus an accessible sibling:
//
//   --mh-gold:       #b8973a   (display)
//   --mh-gold-dim:   #7A6528   (accessible)   ← or --mh-gold-deep
//
// Most components then reference `var(--mh-gold)` in both fills AND text,
// which fails WCAG on light backgrounds. This script swaps
//   var(--X-gold)  ->  var(--X-gold-{dim|deep})
// only inside text/UI property lines, leaving fills alone.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function listCssFiles() {
  const out = execSync(
    `git -C "${ROOT}" ls-files "app/**/*.css" "components/**/*.css"`,
    { encoding: "utf8" },
  );
  return out
    .trim()
    .split("\n")
    .filter(Boolean)
    .map((p) => path.join(ROOT, p));
}

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

let totals = { filesChanged: 0, swaps: 0 };

for (const file of listCssFiles()) {
  const src = fs.readFileSync(file, "utf8");

  // Find declared --X-gold and its accessible sibling.
  const goldDecl = src.match(/^\s*--([a-z0-9-]+)-gold\s*:\s*#[0-9a-f]{3,8};/im);
  if (!goldDecl) continue;
  const prefix = goldDecl[1]; // e.g. "ab", "mh", "nv", "ul"

  const deepRe = new RegExp(`--${prefix}-gold-(deep|dim)\\s*:\\s*#`, "i");
  const deepMatch = src.match(deepRe);
  if (!deepMatch) {
    console.warn(
      `${path.relative(ROOT, file)}: no accessible sibling --${prefix}-gold-deep|dim, skipping`,
    );
    continue;
  }
  const suffix = deepMatch[1].toLowerCase(); // "deep" or "dim"

  const usageRe = new RegExp(`var\\(--${prefix}-gold\\)`, "g");
  const replacement = `var(--${prefix}-gold-${suffix})`;

  let fileSwaps = 0;
  const next = src
    .split("\n")
    .map((line) => {
      if (!usageRe.test(line)) return line;
      usageRe.lastIndex = 0;
      const kind = classify(line);
      if (kind === "text") {
        const before = line;
        const after = before.replace(usageRe, replacement);
        const hits = (before.match(usageRe) || []).length;
        usageRe.lastIndex = 0;
        fileSwaps += hits;
        return after;
      }
      return line;
    })
    .join("\n");

  if (fileSwaps > 0) {
    fs.writeFileSync(file, next);
    totals.filesChanged += 1;
    totals.swaps += fileSwaps;
    console.log(
      `${path.relative(ROOT, file)}: --${prefix}-gold → --${prefix}-gold-${suffix} ×${fileSwaps}`,
    );
  }
}

console.log("\nTotals:", totals);
