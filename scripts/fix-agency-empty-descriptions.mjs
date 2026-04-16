#!/usr/bin/env node
/**
 * Repair script: for every `lib/agency-posts/<slug>.ts` module where
 * `<CONST>_DESCRIPTION = ""` (empty meta description), derive a 150–160-char
 * description from the first INTRO_PARAS entry and write it back.
 *
 * Why it's needed: the original migration (scripts/migrate-agency-posts.mjs)
 * preferred Yoast meta from the live WordPress page, fell back to an intro
 * paragraph. For ~21 agency posts the live fetch was cached during Cloudflare
 * rate-limiting, leaving Yoast empty, and the fallback path wrote an empty
 * string. Rather than recrawl (risks more rate limits) we synthesize from
 * the already-migrated intro copy, which is source-faithful.
 *
 * Usage:
 *   node scripts/fix-agency-empty-descriptions.mjs           # dry run
 *   node scripts/fix-agency-empty-descriptions.mjs --write   # apply
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIR = path.join(ROOT, "lib", "agency-posts");
const WRITE = process.argv.includes("--write");

const MAX = 158;
const MIN = 140;

function deriveDescription(firstIntro) {
  const seed = firstIntro.trim();
  if (!seed) return "";
  if (seed.length <= MAX) return seed;
  const slice = seed.slice(0, MAX);
  const lastPeriod = slice.lastIndexOf(". ");
  if (lastPeriod >= MIN) return slice.slice(0, lastPeriod + 1);
  const lastSpace = slice.lastIndexOf(" ");
  const cut = lastSpace > 0 ? slice.slice(0, lastSpace) : slice;
  return `${cut.trimEnd()}\u2026`;
}

const files = readdirSync(DIR).filter((f) => f.endsWith(".ts"));
let fixed = 0;
let skipped = 0;
for (const f of files) {
  const fp = path.join(DIR, f);
  const src = readFileSync(fp, "utf8");
  // Find `<NAME>_DESCRIPTION = ""`.
  const descRe = /export const ([A-Z0-9_]+)_DESCRIPTION = "([^"]*)";/;
  const dm = src.match(descRe);
  if (!dm) {
    skipped += 1;
    continue;
  }
  const [, prefix, existing] = dm;
  if (existing.trim().length > 0) {
    skipped += 1;
    continue;
  }
  // Grab strings from INTRO_PARAS array (first few).
  const introArrayRe = new RegExp(
    `export const ${prefix}_INTRO_PARAS[^=]*=\\s*\\[([\\s\\S]*?)\\];`
  );
  const arrM = src.match(introArrayRe);
  if (!arrM) {
    console.warn(`skip ${f}: no INTRO_PARAS found`);
    skipped += 1;
    continue;
  }
  const strings = [...arrM[1].matchAll(/"((?:\\.|[^"\\])*)"/g)].map((x) =>
    x[1]
      .replace(/\\u2019/g, "\u2019")
      .replace(/\\u2014/g, "\u2014")
      .replace(/\\u2013/g, "\u2013")
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, "\\")
  );
  // Heuristic: skip an intro paragraph that starts mid-sentence (lowercase
  // first word or obvious sentence fragment from WP content mangling).
  // Mid-sentence fragment = lowercase first letter OR begins with an obvious
  // conjunction/fragment hint. ("The"/"A" can legitimately start a sentence so
  // we don't flag them.)
  const looksMidSentence = (s) => {
    const t = s.trim();
    if (/^[a-z]/.test(t)) return true;
    return /^(and|or|but|nor|so|yet)\s/i.test(t);
  };
  const seedIntro = strings.find((s) => s && !looksMidSentence(s)) || strings[0] || "";
  const newDesc = deriveDescription(seedIntro);
  if (!newDesc) {
    console.warn(`skip ${f}: derived description empty`);
    skipped += 1;
    continue;
  }
  const escaped = newDesc.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const updated = src.replace(
    descRe,
    `export const ${prefix}_DESCRIPTION = "${escaped}";`
  );
  if (updated === src) {
    console.warn(`skip ${f}: replacement produced no change`);
    skipped += 1;
    continue;
  }
  if (WRITE) {
    writeFileSync(fp, updated);
    console.log(`fix  ${f} (${newDesc.length}c): ${newDesc}`);
  } else {
    console.log(`DRY  ${f} (${newDesc.length}c): ${newDesc}`);
  }
  fixed += 1;
}
console.log(`\nFixed: ${fixed}  |  Skipped: ${skipped}  |  ${WRITE ? "wrote changes" : "dry run — pass --write to apply"}`);
