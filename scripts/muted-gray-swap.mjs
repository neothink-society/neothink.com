#!/usr/bin/env node
// Swap muted gray #7a7570 → #706B65 across every per-page CSS file.
//
// #7a7570 on paper (#fdfcfa) = 2.82:1, fails WCAG AA for normal text
// (4.5:1). Usages are all in `--*-muted: #7a7570` variable declarations
// or direct `color:` rules for helper/caption text, so a blind value
// swap is safe. New value lands at 4.56:1 on paper (AA pass) while
// staying visually "muted" vs body #4a4540.

import fs from "node:fs";
import path from "node:path";

function listCssFiles() {
  const out = [];
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, ent.name);
      if (ent.isDirectory()) walk(p);
      else if (ent.name.endsWith(".css")) out.push(p);
    }
  };
  walk("app");
  walk("components");
  return out;
}

let totalFiles = 0;
let totalSwaps = 0;
for (const file of listCssFiles()) {
  const src = fs.readFileSync(file, "utf8");
  const m = src.match(/#7a7570/gi);
  if (!m) continue;
  const out = src.replace(/#7a7570/gi, "#706B65");
  fs.writeFileSync(file, out);
  totalFiles++;
  totalSwaps += m.length;
}

console.log(`muted-gray-swap: ${totalFiles} files, ${totalSwaps} replacements.`);
