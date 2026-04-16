#!/usr/bin/env node
/**
 * Build a triage table for the 19 Neothink Awakening gap posts (posts still live on WP
 * that do not yet have a native Next.js route or a 301 redirect). Prints a markdown
 * table and a JSON summary so we can decide migrate-vs-redirect per slug.
 *
 *   node scripts/triage-awakening-gaps.mjs
 */
import { readFileSync } from "node:fs";
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

function extract(src, slug) {
  const html = readFileSync(path.join(ROOT, "migration/source", `${slug}.html`), "utf8");
  const title = (html.match(/<title>([\s\S]*?)<\/title>/)?.[1] || "").trim();
  const modified = html.match(/modified:\s*([^\s>]+)/)?.[1] || "";

  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] || "").replace(/<[^>]+>/g, "").trim();

  // Featured image (first OG-ish upload or first content <img>)
  const firstImg = html.match(/https:\/\/neothink\.com\/wp-content\/uploads\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/i)?.[0] || "";

  const ytId = (html.match(/youtube(?:-nocookie)?\.com\/embed\/([A-Za-z0-9_-]{6,})/i)?.[1])
    || (html.match(/youtu\.be\/([A-Za-z0-9_-]{6,})/i)?.[1])
    || "";

  const minReadMatch = html.match(/(\d+)\s*min\s*read/i);
  const minRead = minReadMatch ? Number(minReadMatch[1]) : null;

  // Crude word count of visible text
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, "")
    .replace(/<style[\s\S]*?<\/style>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const words = text ? text.split(" ").length : 0;

  // Quick Answer kicker / H2
  const quickTitle = (html.match(/QUICK ANSWER[\s\S]{0,400}?<h2[^>]*>([\s\S]*?)<\/h2>/i)?.[1] || "").replace(/<[^>]+>/g, "").trim();

  return {
    slug,
    wpId: html.match(/data-elementor-id="(\d+)"/)?.[1] || "",
    title,
    h1,
    modified,
    image: firstImg,
    youtubeId: ytId,
    minRead,
    words,
    quickTitle,
  };
}

const rows = SLUGS.map((s) => extract(null, s));

console.log("| # | Slug | H1 | Words | min | YT | WP id | Modified |");
console.log("|---|------|----|-------|-----|----|-------|----------|");
rows.forEach((r, i) => {
  console.log(
    `| ${i + 1} | \`${r.slug}\` | ${r.h1 || "(no h1)"} | ${r.words} | ${r.minRead ?? "?"} | ${r.youtubeId ? "y" : "n"} | ${r.wpId} | ${r.modified} |`
  );
});

console.log("");
console.log("Quick answer titles:");
rows.forEach((r) => {
  if (r.quickTitle) console.log(`- ${r.slug}: ${r.quickTitle}`);
});
