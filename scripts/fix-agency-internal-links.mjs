#!/usr/bin/env node
/**
 * Rewrite absolute https://neothink.com/<path>/ internal links inside every
 * lib/agency-posts/<slug>.ts module to canonical relative paths, collapsing
 * any 301 hop we know about via lib/migration/wp-redirects.ts.
 *
 * Goals:
 *   - No cross-domain 301 after cutover.
 *   - No unnecessary in-app 301 from legacy slug → canonical slug.
 *   - Source-faithful: the human-readable copy does not change, only the
 *     href attribute values.
 *
 * Usage:
 *   node scripts/fix-agency-internal-links.mjs            # dry run summary
 *   node scripts/fix-agency-internal-links.mjs --write    # apply
 */
import { readFileSync, readdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIRS = [
  path.join(ROOT, "lib", "agency-posts"),
  path.join(ROOT, "lib"),
];
const WRITE = process.argv.includes("--write");

// Parse wp-redirects.ts into a Map<sourcePath, destinationPath> once.
function loadRedirects() {
  const src = readFileSync(path.join(ROOT, "lib", "migration", "wp-redirects.ts"), "utf8");
  const map = new Map();
  // explicit slugPair(<source>, <dest>) — source stored as base without trailing slash
  for (const m of src.matchAll(/slugPair\(\s*"([^"]+)"\s*,\s*"([^"]+)"/g)) {
    map.set(m[1].replace(/\/$/, "") || "/", m[2]);
  }
  // explicit Redirect objects: { source: "...", destination: "...", permanent }
  for (const m of src.matchAll(
    /\{\s*source:\s*"([^"]+)"\s*,\s*destination:\s*"([^"]+)"/g
  )) {
    const s = m[1].replace(/\/$/, "") || "/";
    if (!map.has(s)) map.set(s, m[2]);
  }
  return map;
}

const REDIRECTS = loadRedirects();

function collapse(urlPath) {
  let p = urlPath;
  // Collapse multi-hop redirects (max 4 levels to avoid infinite loops).
  for (let i = 0; i < 4; i += 1) {
    const key = p.replace(/\/$/, "") || "/";
    if (!REDIRECTS.has(key)) break;
    const next = REDIRECTS.get(key);
    if (next === p) break;
    p = next;
  }
  return p;
}

function collectTsFiles(dir) {
  const out = [];
  for (const name of readdirSync(dir)) {
    const full = path.join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) continue; // stay at top level — agency-posts/ handled separately
    if (name.endsWith(".ts")) out.push(full);
  }
  return out;
}

const seen = new Set();
const files = [];
for (const d of DIRS) {
  for (const fp of collectTsFiles(d)) {
    if (seen.has(fp)) continue;
    seen.add(fp);
    files.push(fp);
  }
}
let totalChanges = 0;
let filesTouched = 0;
const perFile = [];

for (const fp of files) {
  const src = readFileSync(fp, "utf8");
  const rel = path.relative(ROOT, fp);
  let fileChanges = 0;
  const updated = src.replace(
    /href=(["'])https?:\/\/(?:www\.)?neothink\.com(\/[^"'#?]*)(#[^"']*)?\1/gi,
    (_all, q, rawPath, hash) => {
      const stripped = rawPath.replace(/\/$/, "") || "/";
      const collapsed = collapse(stripped);
      fileChanges += 1;
      return `href=${q}${collapsed}${hash || ""}${q}`;
    }
  );
  if (fileChanges > 0) {
    filesTouched += 1;
    totalChanges += fileChanges;
    perFile.push([rel, fileChanges]);
    if (WRITE) writeFileSync(fp, updated);
  }
}

perFile.sort((a, b) => b[1] - a[1]);
for (const [f, n] of perFile) console.log(`  ${n}× ${f}`);
console.log(`\nFiles touched: ${filesTouched} | Links rewritten: ${totalChanges} | ${WRITE ? "wrote" : "dry run — pass --write to apply"}`);
