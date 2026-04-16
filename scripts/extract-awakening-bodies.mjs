#!/usr/bin/env node
/**
 * Generic Neothink Awakening body extractor. For each listed slug, parses the
 * WordPress HTML snapshot at `migration/source/<slug>.html`, finds the top-level
 * `e-con e-parent` containers that hold the "QUICK ANSWER" kicker and the
 * "Frequently Asked Questions" heading, and emits a `lib/<slug>-body-html.ts`
 * module containing the raw Elementor body fragment that sits between them
 * (plus any trailing related/CTA containers before the FAQ).
 *
 * Internal `https://neothink.com/...` hrefs are rewritten to app paths when a
 * Next.js route exists (see `PATH_MAP`).
 *
 *   node scripts/extract-awakening-bodies.mjs
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const SLUGS = [
  "universal-wealth-secrets-the-solution-exposed",
  "the-secret-to-a-wealthy-healthy-peaceful-country",
  "separating-heroes-from-dreamers",
  "how-to-be-a-leader-the-one-thing-holding-you-back",
  "philosopher-make-your-life-exciting-again-do-this",
  "a-society-without-politics-poverty-or-war",
  "the-future-of-humanity-building-a-new-country-without-rulers",
  "this-is-how-close-we-are-to-biological-immortality",
  "youre-being-manipulated-they-use-guilt-to-control-you",
  "escape-the-matrix-now",
  "finding-achieving-your-life-purpose",
  "think-like-elon-musk-mind-hacks",
  "new-country-with-no-taxes",
  "why-neothink-makes-you-irresistible",
  "sell-anything-marketing-secret",
  "trumps-victory-beginning-new-era",
  "aliens-real-never-visit-earth",
  "are-we-the-illuminati-truth",
  "how-to-raise-a-genius",
];

// Reuse the same path map as the philosophy / FKTUW extractor so internal links
// land on migrated Next.js routes where available and hit Next 301s otherwise.
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
  "/unified-field": "/unified-field",
  "/neovia": "/neovia",
  "/neothink": "/neothink",
  "/the-way": "/the-way",
  "/unleashed": "/unleashed",
  "/published-work": "/published-work",
  "/manuscripts": "/manuscripts",
  "/mark-hamilton": "/mark-hamilton",
  "/mark-hamiltons-story": "/mark-hamiltons-story",
  "/neothink-movement-financial-independence": "/neothink-movement-financial-independence",
  "/freedom-key-to-unlocking-true-wealth": "/freedom-key-to-unlocking-true-wealth",
  "/reprogram-mind-to-be-rich": "/reprogram-mind-to-be-rich",
  "/mark-hamiltons-neothink-surprising-logic": "/mark-hamiltons-neothink-surprising-logic",
  "/truth-about-neothink-society": "/truth-about-neothink-society",
  "/value-creator": "/value-creator",
  "/self-leader-secret": "/self-leader-secret",
  "/friday-night-essence": "/friday-night-essence",
  "/illusion-pollution": "/illusion-pollution",
  "/live-longer": "/live-longer",
  "/cure-to-aging": "/cure-to-aging",
  "/the-two-obstacles-to-curing-aging": "/the-two-obstacles-to-curing-aging",
  "/how-every-individual-can-be-wealthy": "/how-every-individual-can-be-wealthy",
  "/a-new-country-the-great-experiment-called-immortalis": "/a-new-country-the-great-experiment-called-immortalis",
  "/immortalis-the-great-experiment-of-our-time": "/immortalis-the-great-experiment-of-our-time",
  "/the-greatest-mental-breakthrough": "/the-greatest-mental-breakthrough",
  "/the-missing-key-to-universal-prosperity": "/the-missing-key-to-universal-prosperity",
  "/the-cult-you-never-knew-existed": "/the-cult-you-never-knew-existed",
  "/what-all-philosophies-get-wrong": "/what-all-philosophies-get-wrong",
  "/breaking-the-chains-on-consciousness": "/breaking-the-chains-on-consciousness",
  "/the-job-revolution": "/the-job-revolution",
  "/creating-the-demand-to-live-forever": "/creating-the-demand-to-live-forever",
  "/decoding-super-puzzle": "/decoding-super-puzzle",
  "/how-jobs-will-change": "/how-jobs-will-change",
  "/category/neothink-awakening": "/category/neothink-awakening",
  "/category/neothink-concepts": "/category/neothink-concepts",
  "/category/neothink-mentality": "/category/neothink-mentality",
  "/category/neothink-philosophy": "/category/neothink-philosophy",
  "/integrated-thinking-see-what-specialists-miss": "/integrated-thinking",
  "/beautiful-vs-ugly-in-our-world": "/the-beautiful-vs-the-ugly-in-our-world-3",
  "/the-beautiful-vs-the-ugly-in-our-world-3": "/the-beautiful-vs-the-ugly-in-our-world-3",
  "/never-be-manipulated-again": "/illusion-pollution",
  "/read-this-to-never-be-manipulated-again": "/illusion-pollution",
  "/future-of-humanity-everything-free": "/the-job-revolution",
  "/freeing-hidden-geniuses-elon-musk": "/immortalis",
  "/mark-hamilton-luck-350-million": "/mark-hamiltons-story",
  "/secret-society-reveals-civilizations-hope": "/the-cult-you-never-knew-existed",
};

function norm(p) {
  if (!p || p === "/") return "/";
  let x = p.replace(/\/+$/, "") || "/";
  if (!x.startsWith("/")) x = `/${x}`;
  return x;
}

function rewriteLinks(html) {
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

/**
 * Find all top-level `<div class="... e-con e-parent ...">` containers and return
 * their `{start, end}` substring ranges plus text content, by tracking div depth.
 */
function findTopLevelContainers(html) {
  const containers = [];
  const openRe = /<div\b[^>]*\bclass="([^"]*)"[^>]*>/g;
  const closeTag = "</div>";
  let m;
  const starts = [];
  while ((m = openRe.exec(html)) !== null) {
    starts.push({ idx: m.index, end: m.index + m[0].length, classes: m[1] });
  }

  // Walk the string and track depth. When we enter an e-parent at depth 0, mark
  // it as a top-level container; we find its matching close by counting opens.
  let pos = 0;
  const openTagRe = /<div\b[^>]*>/g;
  const closeTagRe = /<\/div>/g;

  while (pos < html.length) {
    // Locate the next top-level `e-con e-parent` open tag at or after `pos`.
    const parent = starts.find(
      (s) => s.idx >= pos && /\be-parent\b/.test(s.classes) && /\be-con\b/.test(s.classes)
    );
    if (!parent) break;
    // Balance divs starting from parent.idx.
    let depth = 0;
    openTagRe.lastIndex = parent.idx;
    closeTagRe.lastIndex = parent.idx;
    let endIdx = -1;
    // Simple lockstep: scan by walking through subsequent < occurrences.
    let i = parent.idx;
    while (i < html.length) {
      const nextOpen = html.indexOf("<div", i);
      const nextClose = html.indexOf(closeTag, i);
      if (nextClose === -1) break;
      if (nextOpen !== -1 && nextOpen < nextClose) {
        depth += 1;
        i = nextOpen + 4;
      } else {
        depth -= 1;
        i = nextClose + closeTag.length;
        if (depth === 0) {
          endIdx = i;
          break;
        }
      }
    }
    if (endIdx === -1) break;
    const slice = html.slice(parent.idx, endIdx);
    containers.push({ start: parent.idx, end: endIdx, html: slice });
    pos = endIdx;
  }

  return containers;
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function constName(slug) {
  return slug.replace(/[^a-z0-9]+/gi, "_").toUpperCase() + "_BODY_HTML";
}

function extractBodyFragment(slug) {
  const html = readFileSync(path.join(ROOT, "migration/source", `${slug}.html`), "utf8");
  const containers = findTopLevelContainers(html);
  if (containers.length === 0) throw new Error(`${slug}: no top-level e-parent containers found`);

  const quickIdx = containers.findIndex((c) => c.html.includes("QUICK ANSWER"));
  const faqIdx = containers.findIndex((c) => /Frequently\s+[Aa]sked/.test(c.html));
  if (quickIdx < 0) throw new Error(`${slug}: no QUICK ANSWER container`);
  if (faqIdx < 0 || faqIdx <= quickIdx)
    throw new Error(`${slug}: no FAQ container after QUICK ANSWER (quick=${quickIdx}, faq=${faqIdx})`);

  const bodyParts = containers.slice(quickIdx + 1, faqIdx).map((c) => c.html);
  return bodyParts.join("\n");
}

let total = 0;
for (const slug of SLUGS) {
  try {
    const body = rewriteLinks(extractBodyFragment(slug));
    const name = constName(slug);
    const outPath = path.join(ROOT, "lib", `${slug}-body-html.ts`);
    const header = `/**\n * Elementor body fragment for Neothink Awakening post \`${slug}\`.\n * Regenerate: node scripts/extract-awakening-bodies.mjs\n */\n`;
    writeFileSync(outPath, `${header}export const ${name} = \`${esc(body)}\`;\n`);
    total += 1;
    console.log(`ok  ${slug.padEnd(58)}${body.length.toString().padStart(7)} chars`);
  } catch (err) {
    console.error(`ERR ${slug}: ${err.message}`);
  }
}
console.log(`Wrote ${total}/${SLUGS.length} body modules.`);
