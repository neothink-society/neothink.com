#!/usr/bin/env node
// Repo-wide sweep: apply the same context-aware gold-ink swap to every
// per-page CSS file. Strategy:
//   1. Replace #B8973A -> #7A6528 only in text/UI/border/outline/etc.
//      contexts (leave fills alone).
//   2. Replace any lingering #8A7030 -> #7A6528 unconditionally; that
//      value is never correct now that --gold-ink consolidated to the
//      darker, AA-on-stone-and-paper shade.
//
// Scope: app/**/*.css and components/**/*.css. Globals.css has already
// been migrated; re-running here is a no-op.

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

const HEX_DISPLAY = /#b8973a/gi;
const HEX_MID = /#8a7030/gi;
const ACCESSIBLE = "#7A6528";

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

let totals = { displaySwapped: 0, displayKept: 0, midSwapped: 0, filesChanged: 0 };

for (const file of listCssFiles()) {
  const src = fs.readFileSync(file, "utf8");
  const lines = src.split("\n");
  let fileDisplaySwapped = 0;
  let fileDisplayKept = 0;
  let fileMidSwapped = 0;

  const next = lines.map((line, idx) => {
    let l = line;

    const midHits = (l.match(HEX_MID) || []).length;
    if (midHits) {
      l = l.replace(HEX_MID, ACCESSIBLE);
      fileMidSwapped += midHits;
    }

    const dispHits = (l.match(HEX_DISPLAY) || []).length;
    if (dispHits) {
      const kind = classify(l);
      if (kind === "text") {
        l = l.replace(HEX_DISPLAY, ACCESSIBLE);
        fileDisplaySwapped += dispHits;
      } else if (kind === "fill") {
        fileDisplayKept += dispHits;
      } else {
        fileDisplayKept += dispHits;
        console.warn(
          `${path.relative(ROOT, file)}:${idx + 1} unknown context, kept: ${l.trim()}`,
        );
      }
    }

    return l;
  });

  const changed =
    fileDisplaySwapped > 0 || fileMidSwapped > 0;
  if (changed) {
    fs.writeFileSync(file, next.join("\n"));
    totals.filesChanged += 1;
    console.log(
      `${path.relative(ROOT, file)}: display→ink ${fileDisplaySwapped}, kept fills ${fileDisplayKept}, mid→ink ${fileMidSwapped}`,
    );
  }
  totals.displaySwapped += fileDisplaySwapped;
  totals.displayKept += fileDisplayKept;
  totals.midSwapped += fileMidSwapped;
}

console.log("\nTotals:", totals);
