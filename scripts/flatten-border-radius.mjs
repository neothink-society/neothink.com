#!/usr/bin/env node
/*
 * Flatten non-circle `border-radius` values to `0` across per-page CSS.
 *
 * Background: pages migrated from the old WordPress agency build use
 * rounded cards (4/6/10/12/16px). The new Sera-based design system is
 * intentionally square-cornered. Circles (border-radius: 50%) are kept
 * because they are decorative bullets / avatars, not corner styles.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SEARCH_DIRS = [
  path.join(ROOT, "app"),
  path.join(ROOT, "components"),
  path.join(ROOT, "lib"),
];
const SKIP = new Set(["node_modules", ".next", ".git", "dist", "out"]);
const FILE_RE = /\.(css|ts|tsx)$/;

const files = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else if (entry.isFile() && FILE_RE.test(p)) files.push(p);
  }
}
for (const d of SEARCH_DIRS) walk(d);

// Match "border-radius: <value>;" preserving the declaration position.
// We do NOT touch values that are "50%" (circles) or "0"/"0rem"/"0px".
const DECL_RE = /border-radius:\s*([^;]+);/g;
const CIRCLE_OR_ZERO = /^\s*(50%|0(?:rem|px|em|%)?)\s*$/;

let filesChanged = 0;
let declsRewritten = 0;
const touched = [];

for (const file of files) {
  const src = fs.readFileSync(file, "utf8");
  let changed = false;
  const next = src.replace(DECL_RE, (match, value) => {
    if (CIRCLE_OR_ZERO.test(value)) return match;
    // Shorthand like "0 1px 1px 0" — flatten the entire shorthand to 0.
    changed = true;
    declsRewritten++;
    return "border-radius: 0;";
  });
  if (changed) {
    fs.writeFileSync(file, next);
    filesChanged++;
    touched.push(path.relative(ROOT, file));
  }
}

console.log(
  JSON.stringify(
    { filesChanged, declsRewritten, touched },
    null,
    2,
  ),
);
