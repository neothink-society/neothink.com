#!/usr/bin/env node
/**
 * For each Neothink Awakening gap post, parse the WP HTML snapshot in
 * `migration/source/<slug>.html` plus the WP REST featured_media payload, and
 * emit:
 *   - `lib/<slug>-data.ts`  (headline, intro, image, quick answer, dates, meta)
 *   - `lib/<slug>-faq.ts`   (parsed Elementor FAQ Q/A)
 *
 * Body modules are produced by `extract-awakening-bodies.mjs` (run that first).
 *
 *   node scripts/generate-awakening-data.mjs                # dry-run list
 *   node scripts/generate-awakening-data.mjs --write        # write files
 *   node scripts/generate-awakening-data.mjs --write --only how-to-raise-a-genius
 *
 * Generated files are plain TypeScript constants. Edit them by hand after
 * generation to tune FAQ wording, intro paras, quick-answer phrasing, or
 * related links — rerunning without `--force` will not overwrite existing
 * hand-tuned modules.
 *
 * @see https://neothink.com/wp-json/wp/v2/posts?categories=80
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
const WRITE = args.includes("--write");
const FORCE = args.includes("--force");
const ONLY_IDX = args.indexOf("--only");
const ONLY = ONLY_IDX >= 0 ? args[ONLY_IDX + 1] : null;

const SLUG_TO_WP_ID = {
  "universal-wealth-secrets-the-solution-exposed": 6208,
  "the-secret-to-a-wealthy-healthy-peaceful-country": 6201,
  "separating-heroes-from-dreamers": 6194,
  "how-to-be-a-leader-the-one-thing-holding-you-back": 5487,
  "philosopher-make-your-life-exciting-again-do-this": 5474,
  "a-society-without-politics-poverty-or-war": 5462,
  "the-future-of-humanity-building-a-new-country-without-rulers": 5450,
  "this-is-how-close-we-are-to-biological-immortality": 5435,
  "youre-being-manipulated-they-use-guilt-to-control-you": 5417,
  "escape-the-matrix-now": 5405,
  "finding-achieving-your-life-purpose": 5392,
  "think-like-elon-musk-mind-hacks": 5377,
  "new-country-with-no-taxes": 5361,
  "why-neothink-makes-you-irresistible": 5346,
  "sell-anything-marketing-secret": 5313,
  "trumps-victory-beginning-new-era": 5277,
  "aliens-real-never-visit-earth": 5261,
  "are-we-the-illuminati-truth": 5246,
  "how-to-raise-a-genius": 5027,
};

function decodeHtml(s) {
  return s
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "\u2026")
    .replace(/&mdash;/g, "\u2014")
    .replace(/&ndash;/g, "\u2013")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)));
}

function stripTags(html) {
  return decodeHtml(
    html
      .replace(/<script[\s\S]*?<\/script>/g, "")
      .replace(/<style[\s\S]*?<\/style>/g, "")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function findTopLevelContainers(html) {
  const containers = [];
  const openRe = /<div\b[^>]*\bclass="([^"]*)"[^>]*>/g;
  const closeTag = "</div>";
  let m;
  const starts = [];
  while ((m = openRe.exec(html)) !== null) {
    starts.push({ idx: m.index, classes: m[1] });
  }
  let pos = 0;
  while (pos < html.length) {
    const parent = starts.find(
      (s) => s.idx >= pos && /\be-parent\b/.test(s.classes) && /\be-con\b/.test(s.classes)
    );
    if (!parent) break;
    let depth = 0;
    let i = parent.idx;
    let endIdx = -1;
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
    containers.push({ start: parent.idx, end: endIdx, html: html.slice(parent.idx, endIdx) });
    pos = endIdx;
  }
  return containers;
}

function parseHero(heroHtml) {
  const h1 = (heroHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] || "").replace(/<[^>]+>/g, "").trim();

  // Extract text-editor widgets between H1 and the byline ("min read").
  // The first two or so are intro paragraphs, the last one is the byline.
  const widgetRe = /elementor-widget-text-editor[\s\S]*?<div class="elementor-widget-container">([\s\S]*?)<\/div>\s*<\/div>/g;
  const widgets = [];
  let m;
  while ((m = widgetRe.exec(heroHtml)) !== null) {
    widgets.push(m[1].trim());
  }

  // Drop widgets whose text is only the category chip or byline.
  const intros = [];
  let minRead = "";
  for (const w of widgets) {
    const plain = stripTags(w);
    if (/Neothink Awakening$/i.test(plain) && plain.length < 40) continue;
    if (/min\s*read/i.test(plain)) {
      const mm = plain.match(/(\d+)\s*min\s*read/i);
      if (mm) minRead = `${mm[1]} min read`;
      continue;
    }
    // Split into paragraphs and push as strings.
    const paraRe = /<p[^>]*>([\s\S]*?)<\/p>/g;
    let pm;
    let had = false;
    while ((pm = paraRe.exec(w)) !== null) {
      const text = stripTags(pm[1]);
      if (text) {
        intros.push(text);
        had = true;
      }
    }
    if (!had) {
      const text = stripTags(w);
      if (text) intros.push(text);
    }
  }

  return { h1: decodeHtml(h1), introParas: intros, minRead: minRead || "10 min read" };
}

function parseQuickAnswer(qaHtml) {
  const h2 = (qaHtml.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1] || "").replace(/<[^>]+>/g, "").trim();
  const kickerMatch = qaHtml.match(/<div class="elementor-heading-title[^"]*">\s*([A-Z ]{3,})\s*<\/div>/);
  const kicker = kickerMatch ? kickerMatch[1].trim() : "QUICK ANSWER";
  // First <p> inside the QA container is the body.
  const p = (qaHtml.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1] || "").trim();

  let leadStrong = "";
  let rest = p;
  // If first child is <strong>, split.
  const leadMatch = p.match(/^\s*<strong[^>]*>([\s\S]*?)<\/strong>\s*([\s\S]*)/);
  if (leadMatch) {
    leadStrong = stripTags(leadMatch[1]);
    rest = leadMatch[2];
  }
  return {
    kicker: kicker === "QUICK ANSWER" ? "Quick answer" : kicker.toLowerCase(),
    h2: decodeHtml(h2),
    leadStrong,
    restHtml: rest,
    restText: stripTags(rest),
  };
}

function parseYouTubeId(containers) {
  for (const c of containers) {
    const m = c.html.match(/youtube_url&quot;:&quot;https:\\\/\\\/www\.youtube\.com\\\/watch\?v=([A-Za-z0-9_-]{6,})/);
    if (m) return m[1];
    const m2 = c.html.match(/youtube\.com\/watch\?v=([A-Za-z0-9_-]{6,})/);
    if (m2) return m2[1];
  }
  return "";
}

function parseFaq(faqHtml) {
  const items = [];
  // Elementor FAQ items are repeated styled <div>...<h3>Q</h3><p>A</p>... blocks.
  const re = /<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g;
  let m;
  while ((m = re.exec(faqHtml)) !== null) {
    const q = stripTags(m[1]);
    const a = stripTags(m[2]);
    if (q && a) items.push({ q, a });
  }
  return items;
}

async function fetchMeta(wpId) {
  const postUrl = `https://neothink.com/wp-json/wp/v2/posts/${wpId}?_fields=slug,date,modified,title,featured_media`;
  const post = await fetch(postUrl).then((r) => r.json());
  let image = null;
  if (post.featured_media) {
    const mediaUrl = `https://neothink.com/wp-json/wp/v2/media/${post.featured_media}?_fields=source_url,alt_text,media_details`;
    const media = await fetch(mediaUrl).then((r) => r.json());
    const full = media?.media_details?.sizes?.full;
    image = {
      src: full?.source_url || media?.source_url,
      alt: media?.alt_text || "",
      width: full?.width || media?.media_details?.width || 1200,
      height: full?.height || media?.media_details?.height || 630,
    };
  }
  // If WP has no featured image, fall back to the site's default OG image.
  // Three newest Awakening posts (Mar 2026) are published without a bespoke thumbnail.
  if (!image) {
    image = {
      src: "https://neothink.com/opengraph-image",
      alt: "Neothink Institute — The Intellectual Foundation for the Next Stage of Human Civilization",
      width: 1200,
      height: 630,
      fallback: true,
    };
  }
  return {
    slug: post.slug,
    title: decodeHtml(post.title?.rendered || ""),
    date: post.date?.slice(0, 10),
    modified: post.modified?.slice(0, 10),
    modifiedIso: post.modified ? `${post.modified}.000Z` : "",
    image,
  };
}

function constPrefix(slug) {
  // Pick a concise upper_snake prefix per slug. Falls back to slug-based prefix.
  const map = {
    "how-to-raise-a-genius": "HTRG",
    "are-we-the-illuminati-truth": "AWTI",
    "aliens-real-never-visit-earth": "ARNV",
    "trumps-victory-beginning-new-era": "TVBNE",
    "sell-anything-marketing-secret": "SAMS",
    "why-neothink-makes-you-irresistible": "WNMYI",
    "new-country-with-no-taxes": "NCNT",
    "think-like-elon-musk-mind-hacks": "TLEMMH",
    "finding-achieving-your-life-purpose": "FAYLP",
    "escape-the-matrix-now": "EMN",
    "youre-being-manipulated-they-use-guilt-to-control-you": "YBMG",
    "this-is-how-close-we-are-to-biological-immortality": "HCBI",
    "the-future-of-humanity-building-a-new-country-without-rulers": "FHBNCWR",
    "a-society-without-politics-poverty-or-war": "SWPPW",
    "philosopher-make-your-life-exciting-again-do-this": "PMLEA",
    "how-to-be-a-leader-the-one-thing-holding-you-back": "HBL1TH",
    "separating-heroes-from-dreamers": "SHFD",
    "the-secret-to-a-wealthy-healthy-peaceful-country": "SWHPC",
    "universal-wealth-secrets-the-solution-exposed": "UWSSE",
  };
  return map[slug] || slug.replace(/[^a-z0-9]+/gi, "_").toUpperCase();
}

function toDoubleQuoted(s) {
  return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function renderDataModule({ slug, meta, hero, qa, youtubeId }) {
  const P = constPrefix(slug);
  const image = meta.image || { src: "", alt: `${hero.h1} — Neothink Awakening article`, width: 1200, height: 630 };
  const introParas = hero.introParas.slice(0, 3);
  return `/**
 * Neothink Awakening article from WordPress post \`${slug}\` (id ${SLUG_TO_WP_ID[slug]}).
 * Auto-generated by \`scripts/generate-awakening-data.mjs\`. Hand-tune intro wording,
 * quick-answer body, and related links after generation.
 *
 * @see https://neothink.com/wp-json/wp/v2/posts/${SLUG_TO_WP_ID[slug]}
 */
import type { AwakeningArticleImage } from "@/components/neothink-awakening/neothink-awakening-article";

export const ${P}_PATH = "/${slug}" as const;

export const ${P}_IMAGE: AwakeningArticleImage = {
  src: ${toDoubleQuoted(image.src)},
  alt: ${toDoubleQuoted(image.alt || `${hero.h1} — Neothink Awakening article`)},
  width: ${image.width},
  height: ${image.height},
};

export const ${P}_DATES = {
  datePublished: ${toDoubleQuoted(meta.date)},
  dateModified: ${toDoubleQuoted(meta.modified)},
} as const;

export const ${P}_META_TITLE = ${toDoubleQuoted(meta.title)} as const;

export const ${P}_HEADLINE = ${toDoubleQuoted(hero.h1)} as const;

${youtubeId ? `export const ${P}_YOUTUBE_ID = ${toDoubleQuoted(youtubeId)} as const;\n` : `/** No YouTube video on this post. */\nexport const ${P}_YOUTUBE_ID: string | undefined = undefined;\n`}
export const ${P}_MIN_READ = ${toDoubleQuoted(hero.minRead)} as const;

export const ${P}_INTRO_PARAS: readonly string[] = [
${introParas.map((p) => `  ${toDoubleQuoted(p)},`).join("\n")}
];

export const ${P}_QUICK_ANSWER_KICKER = "Quick answer" as const;
export const ${P}_QUICK_ANSWER_TITLE = ${toDoubleQuoted(qa.h2)} as const;
${qa.leadStrong ? `export const ${P}_QUICK_ANSWER_LEAD_STRONG = ${toDoubleQuoted(qa.leadStrong)} as const;\n` : `export const ${P}_QUICK_ANSWER_LEAD_STRONG: string | undefined = undefined;\n`}
/** Prose body of the quick answer (first paragraph from WP). Edit by hand to add inline Links. */
export const ${P}_QUICK_ANSWER_REST = ${toDoubleQuoted(qa.restText)} as const;
`;
}

function renderFaqModule({ slug, faq }) {
  const P = constPrefix(slug);
  return `/**
 * FAQ for \`${slug}\` (Neothink Awakening). Auto-generated by
 * \`scripts/generate-awakening-data.mjs\` from the Elementor FAQ block. Hand-tune
 * wording as needed.
 */
export const ${P}_FAQ = [
${faq
  .map(
    (it) =>
      `  {\n    question: ${toDoubleQuoted(it.q)},\n    answer:\n      ${toDoubleQuoted(it.a)},\n  },`
  )
  .join("\n")}
] as const;
`;
}

async function run() {
  const slugs = ONLY ? [ONLY] : Object.keys(SLUG_TO_WP_ID);
  const results = [];
  for (const slug of slugs) {
    try {
      const srcPath = path.join(ROOT, "migration/source", `${slug}.html`);
      if (!existsSync(srcPath)) {
        console.error(`SKIP ${slug}: missing source`);
        continue;
      }
      const html = readFileSync(srcPath, "utf8");
      const containers = findTopLevelContainers(html);
      const quickIdx = containers.findIndex((c) => c.html.includes("QUICK ANSWER"));
      const faqIdx = containers.findIndex((c) => /Frequently\s+[Aa]sked/.test(c.html));
      if (quickIdx < 1) throw new Error(`no quick-answer container`);
      if (faqIdx < 0) throw new Error(`no faq container`);
      const hero = parseHero(containers[quickIdx - 1].html);
      const qa = parseQuickAnswer(containers[quickIdx].html);
      const youtubeId = parseYouTubeId(containers.slice(quickIdx + 1, faqIdx + 1));
      const faq = parseFaq(containers[faqIdx].html);
      const meta = await fetchMeta(SLUG_TO_WP_ID[slug]);

      const dataOut = renderDataModule({ slug, meta, hero, qa, youtubeId });
      const faqOut = renderFaqModule({ slug, faq });

      const dataPath = path.join(ROOT, "lib", `${slug}-data.ts`);
      const faqPath = path.join(ROOT, "lib", `${slug}-faq.ts`);

      const status = {
        slug,
        h1: hero.h1,
        minRead: hero.minRead,
        introParas: hero.introParas.length,
        qaTitle: qa.h2,
        hasLead: Boolean(qa.leadStrong),
        youtubeId,
        faqCount: faq.length,
        imageOk: Boolean(meta.image?.src),
      };
      results.push(status);

      if (WRITE) {
        if (!FORCE && existsSync(dataPath)) {
          console.error(`keep ${dataPath} (exists; use --force to overwrite)`);
        } else {
          writeFileSync(dataPath, dataOut);
          console.log(`wrote ${dataPath}`);
        }
        if (!FORCE && existsSync(faqPath)) {
          console.error(`keep ${faqPath} (exists; use --force to overwrite)`);
        } else {
          writeFileSync(faqPath, faqOut);
          console.log(`wrote ${faqPath}`);
        }
      }
    } catch (err) {
      console.error(`ERR ${slug}: ${err.message}`);
    }
  }
  console.log("\nSummary:");
  console.log(
    `${"slug".padEnd(58)} ${"h1".padEnd(45)} min  intros  QA  yt  faq  img`
  );
  for (const r of results) {
    console.log(
      `${r.slug.padEnd(58)} ${r.h1.padEnd(45).slice(0, 45)} ${(r.minRead || "").padEnd(4)} ${String(r.introParas).padStart(3)}    ${r.hasLead ? "+" : " "}   ${r.youtubeId ? "y" : "n"}   ${String(r.faqCount).padStart(2)}   ${r.imageOk ? "y" : "n"}`
    );
  }
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
