#!/usr/bin/env node
// D6: color-only cleanup of in-house Elementor body HTML fragments.
//
// Per AGENTS.md these posts are published >= 2025-12-01 and editorial
// alignment with the brand guidelines is allowed. We make the MINIMUM
// mechanical swaps to clear remaining WCAG 2.2 AA color-contrast
// violations without touching copy, structure, imagery, markup, or
// layout:
//
//   color:#96792B / #A57A03   -> color:#7A6528  (gold text on light bg)
//   color:#dc2626             -> color:#b91c1c  (red text on pink bg)
//   color:#ef4444             -> color:#f87171  (red on #252525 dark bg)
//   color:#16a34a             -> color:#15803d  (green on pale green)
//   background:#d4a853 + color:white (three badges only) -> background:#7A6528
//
// Decorative uses of #d4a853 (borders, icon strokes, checkmarks rendered
// inside dark cards) are left alone -- they already pass contrast against
// their #1a1a1a / #252525 surroundings (~11:1).

import fs from "node:fs";
import path from "node:path";

const LIB = "lib";

function listBodyHtmlFiles() {
  const out = [];
  const walk = (dir) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (/(body-html|data)\.ts$/.test(ent.name)) out.push(p);
    }
  };
  walk(LIB);
  return out;
}

const TEXT_SWAPS = [
  // Gold text on light backgrounds (fg < 4.5:1 fails small-text AA).
  [/color:\s*#96792[bB]\b/g, "color:#7A6528"],
  [/color:\s*#A57A03\b/gi, "color:#7A6528"],
  // Red-warning text on pink bg (#dc2626 on #fef2f2 = 4.48 borderline).
  [/color:\s*#dc2626\b/gi, "color:#b91c1c"],
  // Bright red on near-black (#ef4444 on #252525 = 4.22 fail).
  [/color:\s*#ef4444\b/gi, "color:#f87171"],
  // Green-success on pale green (#16a34a on #f0fdf4 = 4.02 fail).
  [/color:\s*#16a34a\b/gi, "color:#15803d"],
];

// Narrow: the Past/Present/Future timeline chips use `background:#d4a853`
// paired with white text. Darken the chip background so white passes AA.
// We ONLY touch this pattern; decorative #d4a853 borders, icons, and
// backgrounds that don't paint white text stay as-is.
const BADGE_SWAP = [
  /(background\s*:\s*)#d4a853(\s*;\s*padding[^"']*color\s*:\s*white)/gi,
  /(color\s*:\s*white\s*;\s*background\s*:\s*)#d4a853/gi,
];

let files = 0;
let replacements = 0;
for (const file of listBodyHtmlFiles()) {
  const src = fs.readFileSync(file, "utf8");
  let out = src;

  for (const [re, to] of TEXT_SWAPS) {
    out = out.replace(re, (m) => {
      replacements++;
      return to;
    });
  }

  // Badge pattern: need a two-pass safe replace. The white+d4a853 chips
  // appear in a predictable Elementor-emitted style string:
  //   style="...color:white;background:#d4a853;..."
  out = out.replace(
    /(style="[^"]*?color\s*:\s*white\s*;\s*background\s*:\s*)#d4a853/gi,
    (_m, pre) => {
      replacements++;
      return pre + "#7A6528";
    }
  );
  // And the reversed order just in case:
  out = out.replace(
    /(style="[^"]*?background\s*:\s*)#d4a853(\s*;[^"]*?color\s*:\s*white)/gi,
    (_m, pre, post) => {
      replacements++;
      return pre + "#7A6528" + post;
    }
  );

  if (out !== src) {
    fs.writeFileSync(file, out);
    files++;
    console.log(`  ${file}`);
  }
}

console.log(`\nCleaned ${files} files, ${replacements} color swaps.`);
