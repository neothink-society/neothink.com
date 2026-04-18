#!/usr/bin/env node
// Strip duplicate FAQ and Related Posts tail blocks from migrated body
// HTML files. The page components already render their own canonical
// FAQ (with JSON-LD) and related-posts sections, so these in-body
// copies double-render and harm UX + AEO.
//
// Touched files:
//   - lib/mark-hamiltons-story-body-html.ts
//       * strip entire FAQ e-parent section
//       * strip RELATED POSTS subtree (keep References block intact)
//   - lib/the-city-that-cures-disease-neovia-body-html.ts
//       * strip entire FAQ e-parent section (last section in body)
//
// Idempotent: re-running on already-stripped files is a no-op.

import fs from "node:fs";
import path from "node:path";

const edits = [];

function strip(file, matcher, label) {
  const p = path.join("lib", file);
  let s = fs.readFileSync(p, "utf8");
  const before = s.length;
  const out = matcher(s);
  if (out === s) {
    console.log(`  · ${file} — ${label}: no change (already stripped?)`);
    return;
  }
  fs.writeFileSync(p, out);
  console.log(`  ✓ ${file} — ${label}: ${before} → ${out.length} (−${before - out.length})`);
  edits.push({ file, label, removed: before - out.length });
}

// ---- mark-hamiltons-story: strip FAQ section + RELATED POSTS block ----
strip(
  "mark-hamiltons-story-body-html.ts",
  (s) => {
    // FAQ section starts with this e-parent container opening and ends
    // right before the next e-parent (References + Related card wrapper).
    const faqOpen =
      '<div class="elementor-element elementor-element-7eedb35 e-flex e-con-boxed e-con e-parent"';
    const nextOpen =
      '<div class="elementor-element elementor-element-4ba7a4b e-flex e-con-boxed e-con e-parent"';
    const i = s.indexOf(faqOpen);
    const j = s.indexOf(nextOpen);
    if (i === -1 || j === -1 || j <= i) return s;
    return s.slice(0, i) + s.slice(j);
  },
  "FAQ e-parent"
);

strip(
  "mark-hamiltons-story-body-html.ts",
  (s) => {
    // Related Posts subtree lives inside the References callout card as:
    //   </ul><div style="...;color:#7A6528;...">RELATED POSTS</div>
    //   <ul style="list-style:none;...">...</ul>
    // We match the RELATED POSTS kicker div, then consume through the
    // next `</ul>` only (the References `</ul>` is already closed).
    const kickerStart = s.indexOf(
      '<div style="font-family:Inter,sans-serif;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;color:#7A6528;margin-bottom:16px;margin-top:24px;">RELATED POSTS</div>'
    );
    if (kickerStart === -1) return s;
    const ulEnd = s.indexOf("</ul>", kickerStart);
    if (ulEnd === -1) return s;
    const cut = ulEnd + "</ul>".length;
    return s.slice(0, kickerStart) + s.slice(cut);
  },
  "RELATED POSTS subtree"
);

// ---- the-city-that-cures-disease-neovia: strip trailing FAQ section ----
strip(
  "the-city-that-cures-disease-neovia-body-html.ts",
  (s) => {
    const faqOpen =
      '<div class="elementor-element elementor-element-0e9d979 e-flex e-con-boxed e-con e-parent"';
    const i = s.indexOf(faqOpen);
    if (i === -1) return s;
    // Body HTML ends with `\`;` closing the template literal. Find the
    // backtick that terminates the exported string and cut the FAQ up
    // to (but not including) the trailing close-divs that sit before
    // the backtick. The file's final 80 chars look like:
    //   ...</div></div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>`;
    // After stripping, we still need to close nothing extra — section
    // 0 closed its own inner divs, and section 1 is fully dropped.
    const closingTail = s.lastIndexOf("`;");
    if (closingTail === -1) return s;
    return s.slice(0, i).replace(/\s+$/, "") + "\n`;\n";
  },
  "FAQ e-parent (trailing)"
);

console.log("");
console.log("Total removed bytes:", edits.reduce((n, e) => n + e.removed, 0));
