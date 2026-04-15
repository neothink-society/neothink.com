#!/usr/bin/env node
/**
 * Regenerate Elementor body fragments for Neothink Philosophy long-form posts.
 * Requires migration/source/<slug>.html from wp-fetch-page.mjs.
 *
 *   pnpm migration:philosophy-body
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const PATH_MAP = {
  "/": "/",
  "/about": "/about",
  "/programs": "/programs",
  "/neothink-coaching-programs": "/programs",
  "/freedom-from-rights": "/freedom-from-rights",
  "/prime-law": "/prime-law",
  "/immortalis": "/immortalis",
  "/neovia": "/neovia",
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
  "/mark-hamiltons-story": "/mark-hamiltons-story",
  "/immortalis-the-great-experiment-of-our-time": "/immortalis-the-great-experiment-of-our-time",
  "/the-city-that-cures-disease-neovia": "/the-city-that-cures-disease-neovia",
};

function norm(p) {
  if (!p || p === "/") return "/";
  let x = p.replace(/\/+$/, "") || "/";
  if (!x.startsWith("/")) x = `/${x}`;
  return x;
}

function lookupPath(n) {
  return PATH_MAP[n] || PATH_MAP[`${n}/`] || PATH_MAP[n.replace(/\/$/, "")];
}

function extractBetween(html, startId, endId) {
  const i0 = html.indexOf(`data-id="${startId}"`);
  if (i0 < 0) throw new Error(`missing start ${startId}`);
  const i = html.lastIndexOf("<div", i0);
  const j0 = html.indexOf(`data-id="${endId}"`);
  if (j0 < 0) throw new Error(`missing end ${endId}`);
  const j = html.lastIndexOf("<div", j0);
  return html.slice(i, j).trim();
}

function rewrite(html) {
  let h = html.replace(
    /href=(["'])https?:\/\/neothink\.com(\/[^"'#?]*)(#[^"']*)?\1/gi,
    (full, q, pathPart, hash) => {
      const n = norm(pathPart || "/");
      const dest = lookupPath(n);
      if (dest) return `href=${q}${dest}${hash || ""}${q}`;
      return full;
    }
  );
  h = h.replace(/href=(["'])\/([^"'#?]+)(#[^"']*)?\1/gi, (full, q, raw, hash) => {
    const n = norm(`/${raw}`);
    const dest = lookupPath(n);
    if (dest) return `href=${q}${dest}${hash || ""}${q}`;
    const tail = raw.replace(/^\//, "");
    return `href=${q}https://neothink.com/${tail}${hash || ""}${q}`;
  });
  return h;
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const jobs = [
  {
    slug: "mark-hamiltons-story",
    constName: "MARK_HAMILTONS_STORY_BODY_HTML",
    outFile: "lib/mark-hamiltons-story-body-html.ts",
    startId: "05a72f2",
    endId: "9f5a680",
  },
  {
    slug: "the-city-that-cures-disease-neovia",
    constName: "NEOVIA_SPEECH_BODY_HTML",
    outFile: "lib/the-city-that-cures-disease-neovia-body-html.ts",
    startId: "fd01c35",
    endId: "386f134",
  },
  {
    slug: "immortalis-the-great-experiment-of-our-time",
    constName: "IMMORTALIS_GREAT_EXPERIMENT_BODY_HTML",
    outFile: "lib/immortalis-the-great-experiment-body-html.ts",
    startId: "8db9def",
    endId: "f9b116e",
  },
];

for (const job of jobs) {
  const src = readFileSync(path.join(ROOT, `migration/source/${job.slug}.html`), "utf8");
  const body = rewrite(extractBetween(src, job.startId, job.endId));
  writeFileSync(
    path.join(ROOT, job.outFile),
    `/**\n * Elementor body fragment for ${job.slug}. Regenerate: pnpm migration:philosophy-body\n */\nexport const ${job.constName} = \`${esc(body)}\`;\n`
  );
  console.log(job.outFile, body.length);
}
