#!/usr/bin/env node
// Shift the accessible text gold from #8A7030 → #7A6528 so it meets
// WCAG AA on stone (#F4F1EC) as well as paper (#FDFCFA). The old value
// passed paper (4.61:1) but failed stone (4.19:1 < 4.5:1). The new
// value passes both (5.98:1 paper, 5.43:1 stone). Also avoids us
// needing a separate --gold-ink-deep token.

import fs from "node:fs";

const TARGET = "app/globals.css";
const src = fs.readFileSync(TARGET, "utf8");

const out = src
  .replace(/#8A7030/g, "#7A6528")
  .replace(/#8a7030/g, "#7A6528");

fs.writeFileSync(TARGET, out);
console.log("globals.css: replaced all #8A7030/#8a7030 with #7A6528");
