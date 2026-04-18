#!/usr/bin/env node
/**
 * Add `articleOgImage` to `pageMetadata` when `blogPostingJsonLd` already sets
 * `image: SomeConst.src` — keeps Open Graph / Twitter cards aligned with JSON-LD
 * and the on-page hero (SEO + AEO share consistency).
 *
 * Idempotent: skips files that already declare `articleOgImage`.
 */
import fs from "node:fs";
import path from "node:path";

const appDir = path.join(process.cwd(), "app");

function extractPageMetadataObjectRange(src) {
  const callIdx = src.indexOf("pageMetadata(");
  if (callIdx === -1) return null;
  const objStart = src.indexOf("{", callIdx + "pageMetadata(".length);
  if (objStart === -1) return null;
  let depth = 0;
  for (let i = objStart; i < src.length; i++) {
    const c = src[i];
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return { start: objStart, end: i + 1 };
    }
  }
  return null;
}

function patchFile(filePath) {
  let s = fs.readFileSync(filePath, "utf8");
  if (s.includes("articleOgImage:")) return "skip-has";
  if (!s.includes("blogPostingJsonLd")) return "skip-noblog";

  const idx = s.indexOf("blogPostingJsonLd({");
  if (idx === -1) return "skip-nocall";
  const chunk = s.slice(idx, Math.min(s.length, idx + 2500));
  const im = chunk.match(/\bimage:\s*([A-Za-z0-9_]+)\.src\s*,/);
  if (!im) return "skip-noimg";

  const imgVar = im[1];
  const range = extractPageMetadataObjectRange(s);
  if (!range) return "skip-nometadata";

  const block = s.slice(range.start, range.end);
  if (block.includes("articleOgImage:")) return "skip-block";

  const replaced = block.replace(
    /(\n\s+pathname:\s*[^\n]+\n)(\s+)(ogType:)/,
    `$1$2articleOgImage: ${imgVar},\n$2$3`
  );
  if (replaced === block) return "skip-nopath-og";

  const newS = s.slice(0, range.start) + replaced + s.slice(range.end);
  fs.writeFileSync(filePath, newS);
  return "ok";
}

const entries = fs.readdirSync(appDir, { withFileTypes: true });
const stats = {};
for (const d of entries) {
  if (!d.isDirectory()) continue;
  const f = path.join(appDir, d.name, "page.tsx");
  if (!fs.existsSync(f)) continue;
  const r = patchFile(f);
  stats[r] = (stats[r] || 0) + 1;
}
console.log(stats);
