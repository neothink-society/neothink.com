#!/usr/bin/env node
// Audit each lib/*-body-html.ts for tail sections the page component
// already renders separately (FAQ, Related Posts). Also track
// References so we know not to strip those.

import fs from "node:fs";
import path from "node:path";

const dir = "lib";
const files = fs
  .readdirSync(dir)
  .filter((f) => f.endsWith("-body-html.ts"));

const results = [];
for (const f of files) {
  const src = fs.readFileSync(path.join(dir, f), "utf8");
  const lower = src.toLowerCase();
  const has = {
    faq:
      lower.includes("frequently asked questions") ||
      lower.includes("common questions"),
    related:
      lower.includes("related posts") ||
      lower.includes("related reading") ||
      lower.includes('class="elementor-widget-post-info"') === false &&
      /related articles/i.test(src),
    references:
      /\breferences\b/i.test(src) ||
      lower.includes("further reading") ||
      lower.includes("primary source"),
  };
  results.push({ f, ...has });
}

const counts = { faq: 0, related: 0, references: 0, all_three: 0 };
for (const r of results) {
  if (r.faq) counts.faq++;
  if (r.related) counts.related++;
  if (r.references) counts.references++;
  if (r.faq && r.related) counts.all_three++;
}

console.log(`Total migrated body-html files: ${results.length}`);
console.log("With 'Frequently Asked Questions' or 'Common Questions':", counts.faq);
console.log("With 'Related Posts/Reading/Articles':               ", counts.related);
console.log("With 'References/Further Reading/Primary Source':   ", counts.references);
console.log("With both FAQ + Related:                             ", counts.all_three);
console.log("");
console.log("Files with FAQ (first 25):");
for (const r of results.filter((r) => r.faq).slice(0, 25)) {
  console.log("  -", r.f);
}
console.log("");
console.log("Files with Related Posts (first 25):");
for (const r of results.filter((r) => r.related).slice(0, 25)) {
  console.log("  -", r.f);
}
