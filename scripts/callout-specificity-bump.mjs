#!/usr/bin/env node
// Bump specificity of .X-callout-kicker and .X-callout-dark strong rules
// so they beat `.X-page .X-prose p { color: var(--X-body) }`. We rewrite
// each kicker rule to include `.X-prose` in the selector chain; where the
// kicker isn't inside `.X-prose`, the compound selector still matches via
// the additional alternate selector.

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
  const m = src.match(/^\.([a-z0-9]+)-page /m);
  if (!m) continue;
  const X = m[1];

  let out = src;

  // Kicker: add alternate prose-prefixed selector.
  const kickerOld = `.${X}-page .${X}-callout-dark .${X}-callout-kicker {`;
  const kickerNew = `.${X}-page .${X}-callout-dark .${X}-callout-kicker,\n.${X}-page .${X}-prose .${X}-callout-dark .${X}-callout-kicker {`;
  if (out.includes(kickerOld) && !out.includes(kickerNew)) {
    out = out.replace(kickerOld, kickerNew);
  }

  // Callout-dark strong.
  const strongOld = `.${X}-page .${X}-callout-dark strong {`;
  const strongNew = `.${X}-page .${X}-callout-dark strong,\n.${X}-page .${X}-prose .${X}-callout-dark strong {`;
  if (out.includes(strongOld) && !out.includes(strongNew)) {
    out = out.replace(strongOld, strongNew);
  }

  // Callout-dark body text (prose p rule steals it; keep rgba body readable).
  // .X-callout-dark p lives inside .X-prose p, which overrides color.
  const pOld = `.${X}-page .${X}-callout-dark p {`;
  const pNew = `.${X}-page .${X}-callout-dark p,\n.${X}-page .${X}-prose .${X}-callout-dark p {`;
  if (out.includes(pOld) && !out.includes(pNew)) {
    out = out.replace(pOld, pNew);
  }

  // Callout-dark h3 is unlikely to be swallowed by `.X-prose p`, but
  // leave it alone if present.

  if (out !== src) {
    fs.writeFileSync(f, out);
    console.log(`  ${f} -> specificity bumped`);
  }
}
