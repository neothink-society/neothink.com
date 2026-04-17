#!/usr/bin/env node
// Switch .X-callout-kicker and .X-callout-dark strong from --X-gold-deep
// (which is #7A6528 — fails 4.5:1 on #1a1917) to --X-gold
// (which is #b8973a — ~6:1 on #1a1917). Only touches dark-callout context
// so we don't regress the light-surface uses of --X-gold-deep.

import fs from "node:fs";

const files = [
  "app/soar-beyond-peers/soar-beyond-peers-page.css",
  "app/keep-the-balance/keep-the-balance-page.css",
  "app/cure-to-aging/cure-to-aging-page.css",
  "app/money-love-affair/money-love-affair-page.css",
  "app/beyond-tunnel-vision/beyond-tunnel-vision-page.css",
  "app/power-of-calm/power-of-calm-page.css",
  "app/impact-profits/impact-profits-page.css",
  "app/soaring-productivity/soaring-productivity-page.css",
  "app/unlock-your-genius/unlock-your-genius-page.css",
  "app/areas-of-profit/areas-of-profit-page.css",
  "app/higher-level-thinking/higher-level-thinking-page.css",
  "app/the-prime-law-mentality/the-prime-law-mentality-page.css",
];

for (const f of files) {
  const src = fs.readFileSync(f, "utf8");
  const prefix = f.match(/\/(\w+)-page\.css$/);
  // Match prefix based on the CSS class in the file (first `.X-page`).
  const m = src.match(/^\.([a-z0-9]+)-page /m);
  if (!m) { console.warn("no prefix for", f); continue; }
  const X = m[1];
  // Replace kicker and strong color with --X-gold.
  let out = src;
  const kickerRe = new RegExp(
    `(\\.${X}-page \\.${X}-callout-dark \\.${X}-callout-kicker \\{[^}]*?color:\\s*)var\\(--${X}-gold-deep\\)`,
    "s"
  );
  out = out.replace(kickerRe, `$1var(--${X}-gold)`);
  const strongRe = new RegExp(
    `(\\.${X}-page \\.${X}-callout-dark strong \\{[^}]*?color:\\s*)var\\(--${X}-gold-deep\\)`,
    "s"
  );
  out = out.replace(strongRe, `$1var(--${X}-gold)`);
  if (out !== src) {
    fs.writeFileSync(f, out);
    console.log(`  ${f} -> gold on dark fixed`);
  } else {
    console.log(`  ${f} -> no change`);
  }
}
