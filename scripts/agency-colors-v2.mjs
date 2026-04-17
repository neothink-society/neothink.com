#!/usr/bin/env node
// Second pass of color-only cleanup on migrated Elementor body HTML.
// Handles additional fg/bg pairs that failed axe AA after the v1 pass:
//
//   color:#64748b   → #475569  (slate-500 → slate-600, on #faf8f5 / #ffffff)
//   color:#059669   → #047857  (emerald-600 → emerald-700)
//   color:#d97706   → #b45309  (amber-600 → amber-700)
//   color:#a57a03   → #7A6528  (should have been caught by v1, catch stragglers)
//   color:#96792b   → #7A6528  (stragglers from v1)
//   color:#c75050   → #b03e3e  (coral red on near-black)
//   color:#70706f   → #a8a8a7  (need lighter on #121212)
//   color:#7e7e7d   → #a0a09f  (need lighter on #161616)
//   color:#666665   → #a0a09f  (need lighter on #151515)
//   color:#6e6d6c   → #a0a09f  (need lighter on #0e0e0e)
//   color:#9ca3af   → #6b7280  (gray-400 → gray-500, on white)

import fs from "node:fs";
import path from "node:path";

function listBodyHtmlFiles() {
  const out = [];
  const walk = (dir) => {
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (/(body-html|data)\.ts$/.test(ent.name)) out.push(p);
    }
  };
  walk("lib");
  return out;
}

// Direct (fg → darker-or-lighter) color-only swaps.
const SWAPS = [
  [/color\s*:\s*#64748b\b/gi, "color:#475569"],
  [/color\s*:\s*#059669\b/gi, "color:#047857"],
  [/color\s*:\s*#d97706\b/gi, "color:#b45309"],
  [/color\s*:\s*#a57a03\b/gi, "color:#7A6528"],
  [/color\s*:\s*#96792b\b/gi, "color:#7A6528"],
  [/color\s*:\s*#c75050\b/gi, "color:#b03e3e"],
  [/color\s*:\s*#9ca3af\b/gi, "color:#6b7280"],
  // Light text on near-black — need to LIGHTEN not darken.
  [/color\s*:\s*#70706f\b/gi, "color:#a8a8a7"],
  [/color\s*:\s*#7e7e7d\b/gi, "color:#a0a09f"],
  [/color\s*:\s*#666665\b/gi, "color:#a0a09f"],
  [/color\s*:\s*#6e6d6c\b/gi, "color:#a0a09f"],
];

let files = 0;
let swaps = 0;
for (const file of listBodyHtmlFiles()) {
  const src = fs.readFileSync(file, "utf8");
  let out = src;
  let fileSwaps = 0;
  for (const [re, to] of SWAPS) {
    out = out.replace(re, () => {
      fileSwaps++;
      return to;
    });
  }
  if (out !== src) {
    fs.writeFileSync(file, out);
    files++;
    swaps += fileSwaps;
    console.log(`  ${file}  +${fileSwaps}`);
  }
}
console.log(`\n${files} files, ${swaps} replacements.`);
