#!/usr/bin/env node
/**
 * Regenerate `lib/freedom-key-to-unlocking-true-wealth-body-html.ts` and
 * `lib/reprogram-mind-to-be-rich-body-html.ts` from `migration/source/*.html`
 * (fetch with `node scripts/wp-fetch-page.mjs --post --slug <slug> --out ...`).
 *
 *   node scripts/extract-neothink-awakening-body.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function extractBetween(html, startId, endId) {
  const i0 = html.indexOf(`data-id="${startId}"`);
  if (i0 < 0) throw new Error(`missing start ${startId}`);
  const i = html.lastIndexOf("<div", i0);
  const j0 = html.indexOf(`data-id="${endId}"`);
  if (j0 < 0) throw new Error(`missing end ${endId}`);
  const j = html.lastIndexOf("<div", j0);
  return html.slice(i, j).trim();
}

const PATH_MAP = {
  "/": "/",
  "/about": "/about",
  "/programs": "/programs",
  "/neothink-coaching-programs": "/programs",
  "/freedom-from-rights": "/freedom-from-rights",
  "/prime-law": "/prime-law",
  "/immortalis": "/immortalis",
  "/twelve-visions-party": "/twelve-visions-party",
  "/the-movement": "/the-movement",
  "/neothink-university": "/neothink-university",
  "/integrated-thinking": "/integrated-thinking",
  "/free-courses": "/free-courses",
  "/contact": "/contact",
  "/faq": "/faq",
  "/neothink-mastermind-group-success-stories": "/neothink-mastermind-group-success-stories",
  "/neothink-movement-financial-independence": "/neothink-movement-financial-independence",
  "/freedom-key-to-unlocking-true-wealth": "/freedom-key-to-unlocking-true-wealth",
  "/reprogram-mind-to-be-rich": "/reprogram-mind-to-be-rich",
  "/mark-hamiltons-neothink-surprising-logic": "/mark-hamiltons-neothink-surprising-logic",
  "/truth-about-neothink-society": "/truth-about-neothink-society",
  "/value-creator": "/value-creator",
  "/category/neothink-awakening": "/category/neothink-awakening",
  "/category/neothink-concepts": "/category/neothink-concepts",
  "/category/neothink-mentality": "/category/neothink-mentality",
};

function norm(p) {
  if (!p || p === "/") return "/";
  let x = p.replace(/\/+$/, "") || "/";
  if (!x.startsWith("/")) x = `/${x}`;
  return x;
}

function rewrite(html) {
  return html.replace(
    /href=(["'])https?:\/\/neothink\.com(\/[^"'#?]*)(#[^"']*)?\1/gi,
    (full, q, pathPart, hash) => {
      const n = norm(pathPart || "/");
      const dest = PATH_MAP[n];
      if (dest) return `href=${q}${dest}${hash || ""}${q}`;
      return full;
    }
  );
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const freedomSrc = readFileSync(path.join(ROOT, "migration/source/freedom-key-to-unlocking-true-wealth.html"), "utf8");
const reprogramSrc = readFileSync(path.join(ROOT, "migration/source/reprogram-mind-to-be-rich.html"), "utf8");

const freedomBody = rewrite(extractBetween(freedomSrc, "190041f", "a8897b4"));
const reprogramBody = rewrite(extractBetween(reprogramSrc, "acd856a", "ebfb550"));

writeFileSync(
  path.join(ROOT, "lib/freedom-key-to-unlocking-true-wealth-body-html.ts"),
  `/**\n * Elementor body fragment for post 5327 (after hero / quick answer / video). Rewritten neothink.com hrefs to app paths where migrated.\n * Regenerate: node scripts/extract-neothink-awakening-body.mjs\n */\nexport const FREEDOM_KEY_BODY_HTML = \`${esc(freedomBody)}\`;\n`
);
writeFileSync(
  path.join(ROOT, "lib/reprogram-mind-to-be-rich-body-html.ts"),
  `/**\n * Elementor body fragment for post 5216 (after hero / quick answer / video). Rewritten neothink.com hrefs to app paths where migrated.\n * Regenerate: node scripts/extract-neothink-awakening-body.mjs\n */\nexport const REPROGRAM_MIND_BODY_HTML = \`${esc(reprogramBody)}\`;\n`
);

console.log("Wrote lib/freedom-key-to-unlocking-true-wealth-body-html.ts", freedomBody.length, "chars");
console.log("Wrote lib/reprogram-mind-to-be-rich-body-html.ts", reprogramBody.length, "chars");
