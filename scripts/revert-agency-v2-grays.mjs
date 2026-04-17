#!/usr/bin/env node
// Partially revert agency-colors-v2.mjs: swap #6b7280 back to #9ca3af
// because the blanket darken was wrong for cases where #9ca3af was on
// dark backgrounds (already passing AA at ~5.3:1 on #1a1a1a). The only
// original failures were 4 nodes on /are-we-the-illuminati-truth where
// #9ca3af sat on #ffffff; we'll handle those individually.

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

let files = 0;
let n = 0;
for (const file of listBodyHtmlFiles()) {
  const src = fs.readFileSync(file, "utf8");
  if (!/color\s*:\s*#6b7280\b/i.test(src)) continue;
  const out = src.replace(/color\s*:\s*#6b7280\b/gi, (m) => {
    n++;
    return "color:#9ca3af";
  });
  fs.writeFileSync(file, out);
  files++;
}
console.log(`reverted ${n} #6b7280 → #9ca3af in ${files} files`);
