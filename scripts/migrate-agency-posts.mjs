#!/usr/bin/env node
/**
 * Source-faithful migration for agency-era Uncategorized WP posts (pre-2025-12-01).
 *
 * For each slug in AGENCY_SLUGS:
 *   1. Fetch the post via WordPress REST API (`content.rendered`, dates, featured_media).
 *   2. Fetch the live HTML page for Yoast-written meta description + og:image.
 *   3. Fetch the featured media via `/wp/v2/media/<id>` for width/height/alt.
 *   4. Parse `content.rendered`:
 *        - intro paragraphs (text before the first <h2>)
 *        - body HTML (first <h2> onward through the closing text-editor)
 *        - rewrite internal neothink.com hrefs to canonical Next paths
 *   5. Write `lib/agency-posts/<slug>.ts` with data + body HTML
 *   6. Write `app/<slug>/page.tsx` that renders the shared <AgencyArticle />
 *
 * Usage:
 *   node scripts/migrate-agency-posts.mjs            # dry-run
 *   node scripts/migrate-agency-posts.mjs --write    # write files
 *   node scripts/migrate-agency-posts.mjs --write --only <slug>
 */
import { writeFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const WRITE = args.includes("--write");
const FORCE = args.includes("--force");
const ONLY_IDX = args.indexOf("--only");
const ONLY = ONLY_IDX >= 0 ? args[ONLY_IDX + 1] : null;

const AGENCY_SLUGS = [
  "what-will-shape-future-of-humanity",
  "doubts-about-neothink-society",
  "neothink-debate-minimal-government",
  "neothink-society-empowering-and-challenging",
  "who-joins-secret-societies",
  "secret-society-letters-selling-happiness",
  "neothink-manuscripts-skepticism-to-success",
  "what-do-secret-societies-do",
  "ancient-formula-wealth-influence-neothink",
  "neothink-unrealistic-too-good-to-be-true",
  "neothink-society-path-to-wealth",
  "neothink-books-reveal-secret-world",
  "are-secret-societies-really-secret",
  "what-is-the-neothink-society",
  "benefits-active-neothink-member",
  "feeling-stuck-in-life-how-to-fix",
  "what-is-the-purpose-of-life",
  "not-passionate-about-anything",
  "starting-over-at-50",
  "make-money-stay-at-home-mom-2025",
  "find-your-passion-life-career",
  "deal-with-financial-stress",
  "break-bad-habits-transformation-tips",
  "finding-purpose-retirement",
  "find-happiness-in-retirement",
  "neothink-society-why-people-cant-stop-talking",
  "neothink-21st-century-navigate-challenges",
  "mark-hamilton-visionary-neothink",
  "excel-at-work-33-practical-tips",
  "how-to-have-fun-as-adult",
  "good-financial-habits-change-life",
  "self-leadership-strategies-empower-yourself",
  "create-maintain-healthy-mindset",
];

// Rewrite agency-post internal links to canonical Next paths where known.
const PATH_MAP = {
  "/": "/",
  "/about": "/about",
  "/contact": "/contact",
  "/faq": "/faq",
  "/neothink": "/neothink",
  "/the-way": "/the-way",
  "/neovia": "/neovia",
  "/immortalis": "/immortalis",
  "/unleashed": "/unleashed",
  "/prime-law": "/prime-law",
  "/unified-field": "/unified-field",
  "/programs": "/programs",
  "/neothink-coaching-programs": "/programs",
  "/project-life": "/project-life",
  "/twelve-visions-party": "/twelve-visions-party",
  "/the-movement": "/the-movement",
  "/mark-hamilton": "/mark-hamilton",
  "/mark-hamiltons-story": "/mark-hamiltons-story",
  "/neothink-university": "/neothink-university",
  "/free-courses": "/free-courses",
  "/manuscripts": "/manuscripts",
  "/books": "/manuscripts",
  "/published-work": "/published-work",
  "/podcast": "/podcast",
  "/events": "/events",
  "/get-involved": "/get-involved",
  "/neothink-reviews": "/neothink-reviews",
  "/neothink-mentality": "/neothink-mentality",
  "/category/neothink-philosophy": "/category/neothink-philosophy",
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

const UA =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0 Safari/537.36";

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function retryFetch(url, { textResponse = false } = {}) {
  let delay = 2000;
  for (let attempt = 0; attempt < 5; attempt++) {
    const res = await fetch(url, { headers: { "User-Agent": UA, Accept: "*/*" } });
    if (res.ok) return textResponse ? res.text() : res.json();
    if (res.status === 429 || res.status === 403 || res.status >= 500) {
      console.log(`  ${res.status} ${url.slice(-60)} — retrying in ${delay}ms`);
      await sleep(delay);
      delay = Math.min(delay * 2, 30000);
      continue;
    }
    throw new Error(`${url} -> ${res.status}`);
  }
  throw new Error(`${url} -> gave up after retries`);
}

async function fetchJson(url) {
  return retryFetch(url);
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&#8217;/g, "\u2019")
    .replace(/&#8216;/g, "\u2018")
    .replace(/&#8220;/g, "\u201c")
    .replace(/&#8221;/g, "\u201d")
    .replace(/&#8211;/g, "\u2013")
    .replace(/&#8212;/g, "\u2014")
    .replace(/&#038;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

function stripTags(s) {
  return s.replace(/<[^>]+>/g, "");
}

function escBacktick(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

function countWords(html) {
  return stripTags(html).split(/\s+/).filter(Boolean).length;
}

function upperSnake(slug) {
  return slug.replace(/[^a-z0-9]+/gi, "_").toUpperCase();
}

/**
 * Parse a post's Elementor `content.rendered` into intro paragraphs + body HTML.
 *
 * The typical shape is a sequence of `<p>` and `<h2>` elements inside one or
 * more `elementor-widget-text-editor > .elementor-widget-container` blocks.
 * We flatten all text-editor widgets in document order, then split at the
 * first `<h2>` into `introParas` and `bodyHtml` (everything h2 onward).
 */
function parseArticle(rendered) {
  // Flatten: grab the inner HTML of every text-editor widget in order.
  const widgetRe =
    /<div[^>]*elementor-widget-text-editor[^>]*>\s*<div class="elementor-widget-container">\s*([\s\S]*?)\s*<\/div>\s*<\/div>/g;
  const parts = [];
  let m;
  while ((m = widgetRe.exec(rendered)) !== null) {
    parts.push(m[1].trim());
  }
  if (parts.length === 0) {
    // Fallback: use the whole rendered content if no text-editor widgets found.
    parts.push(rendered);
  }
  const flat = parts.join("\n").trim();

  // Split at first heading (h2 preferred, then h3). Some early agency posts used
  // only h3 headings inside the single text-editor widget.
  const firstHeading = flat.search(/<h[23]\b/i);
  let introHtml = flat;
  let bodyHtml = "";
  if (firstHeading >= 0) {
    introHtml = flat.slice(0, firstHeading);
    bodyHtml = flat.slice(firstHeading);
  } else {
    // No headings at all — promote the post into body (keep all as prose)
    bodyHtml = flat;
    introHtml = "";
  }

  // Extract paragraph text from introHtml.
  const introParas = [];
  const pRe = /<p\b[^>]*>([\s\S]*?)<\/p>/gi;
  let pm;
  while ((pm = pRe.exec(introHtml)) !== null) {
    const inner = pm[1].trim();
    if (inner) introParas.push(inner);
  }

  return { introParas, bodyHtml: bodyHtml.trim() };
}

const CACHE_DIR = path.join(ROOT, "migration/agency-cache");
mkdirSync(CACHE_DIR, { recursive: true });

async function cachedJson(key, url) {
  const fp = path.join(CACHE_DIR, `${key}.json`);
  if (existsSync(fp)) {
    try {
      return JSON.parse(readFileSync(fp, "utf8"));
    } catch {}
  }
  const data = await fetchJson(url);
  writeFileSync(fp, JSON.stringify(data));
  await sleep(1500);
  return data;
}

/**
 * Read the live HTML page from cache if it looks like the real page (has
 * og:title). Otherwise return null and fall back to content-derived meta.
 */
function readLivePage(slug) {
  const fp = path.join(CACHE_DIR, `page-${slug}.html`);
  if (!existsSync(fp)) return null;
  const html = readFileSync(fp, "utf8");
  if (!/og:title|name="description"/i.test(html)) return null;
  return html;
}

function extractFeaturedImageFromContent(rendered, fallbackAlt) {
  const block = rendered.match(
    /elementor-widget-theme-post-featured-image[\s\S]*?<img\b([^>]+)>/i
  );
  if (!block) return null;
  const attrs = block[1];
  const get = (name) => {
    const m = attrs.match(new RegExp(`\\b${name}="([^"]+)"`));
    return m?.[1];
  };
  const src = get("src");
  const w = Number(get("width")) || 0;
  const h = Number(get("height")) || 0;
  const alt = get("alt") || fallbackAlt;
  if (!src) return null;
  return {
    src,
    width: w || 1200,
    height: h || 630,
    alt: decodeEntities(alt || "").trim() || fallbackAlt,
  };
}

/**
 * Build a 155-char meta description from excerpt.rendered or the first body
 * paragraph when Yoast meta isn't accessible.
 */
function deriveDescription(excerptHtml, introParas) {
  // Prefer the first intro paragraph (canonical body text) over the WP excerpt,
  // since agency posts frequently left stale excerpt text from earlier drafts.
  const introFirst = (introParas[0] || "").trim();
  const excerptClean = decodeEntities(stripTags(excerptHtml || ""))
    .replace(/\[&hellip;\]|\u2026/g, "")
    .trim();
  const seed = introFirst || excerptClean;
  if (!seed) return "";
  if (seed.length <= 160) return seed;
  // Cut on the last sentence boundary that fits under 160 chars, otherwise word.
  const slice = seed.slice(0, 160);
  const lastPeriod = slice.lastIndexOf(". ");
  if (lastPeriod > 80) return slice.slice(0, lastPeriod + 1);
  const lastSpace = slice.lastIndexOf(" ");
  return `${slice.slice(0, lastSpace).trimEnd()}\u2026`;
}

async function extractPost(slug) {
  const api = `https://neothink.com/wp-json/wp/v2/posts?slug=${encodeURIComponent(slug)}&_fields=id,slug,title,date,date_gmt,modified,modified_gmt,link,featured_media,content,excerpt`;
  const arr = await cachedJson(`post-${slug}`, api);
  if (!arr || arr.length === 0) throw new Error(`${slug}: no WP post returned`);
  const p = arr[0];

  const pageHtml = readLivePage(slug);
  const descMatch = pageHtml?.match(/<meta name="description" content="([^"]+)"/i);
  const ogImgMatch = pageHtml?.match(/<meta property="og:image" content="([^"]+)"/i);
  const ogTitleMatch = pageHtml?.match(/<meta property="og:title" content="([^"]+)"/i);
  const canonicalMatch = pageHtml?.match(/<link rel="canonical" href="([^"]+)"/i);

  const headline = decodeEntities(p.title.rendered).trim();
  const yoastDescription = decodeEntities(descMatch?.[1] || "").trim();
  const ogImage = ogImgMatch?.[1] || null;
  const ogTitle = decodeEntities(ogTitleMatch?.[1] || "").trim();
  const canonical = canonicalMatch?.[1] || "";

  const contentImage = extractFeaturedImageFromContent(p.content.rendered, headline);
  const image = contentImage || {
    src: ogImage || "/brand-assets/neothink-hero.jpg",
    width: 1200,
    height: 630,
    alt: headline,
  };

  const metaTitle = ogTitle || headline;
  const { introParas, bodyHtml } = parseArticle(p.content.rendered);
  const bodyRewritten = rewriteLinks(bodyHtml);
  const cleanIntro = introParas.map((x) => decodeEntities(x).replace(/<[^>]+>/g, "").trim()).filter(Boolean);
  const description = yoastDescription || deriveDescription(p.excerpt?.rendered, cleanIntro);

  const words = countWords(p.content.rendered);
  const minRead = Math.max(2, Math.round(words / 220));
  const minReadLabel = `${minRead} min read`;

  return {
    slug,
    id: p.id,
    headline,
    metaTitle,
    description,
    canonical,
    datePublished: p.date_gmt ? `${p.date_gmt}Z` : p.date,
    dateModified: p.modified_gmt ? `${p.modified_gmt}Z` : p.modified,
    image,
    introParas: cleanIntro,
    bodyHtml: bodyRewritten,
    minReadLabel,
    wordCount: words,
  };
}

function dataFile(post) {
  const U = upperSnake(post.slug);
  const introLit = post.introParas.map((p) => `  ${JSON.stringify(p)}`).join(",\n");
  return `/**
 * Data module for agency-era post \`${post.slug}\`. Source-faithful migration
 * from WordPress (published ${post.datePublished.substring(0, 10)}).
 *
 * Regenerate: node scripts/migrate-agency-posts.mjs --write --only ${post.slug}
 */
export const ${U}_PATH = "/${post.slug}";
export const ${U}_HEADLINE = ${JSON.stringify(post.headline)};
export const ${U}_META_TITLE = ${JSON.stringify(post.metaTitle)};
export const ${U}_DESCRIPTION = ${JSON.stringify(post.description)};

export const ${U}_DATES = {
  datePublished: ${JSON.stringify(post.datePublished)},
  dateModified: ${JSON.stringify(post.dateModified)},
} as const;

export const ${U}_IMAGE = {
  src: ${JSON.stringify(post.image.src)},
  alt: ${JSON.stringify(post.image.alt)},
  width: ${post.image.width},
  height: ${post.image.height},
} as const;

export const ${U}_INTRO_PARAS: readonly string[] = [
${introLit}
];

export const ${U}_MIN_READ = ${JSON.stringify(post.minReadLabel)};

export const ${U}_BODY_HTML = \`${escBacktick(post.bodyHtml)}\`;
`;
}

function pageFile(post) {
  const U = upperSnake(post.slug);
  const Component = pascal(post.slug);
  const speakableId = `${post.slug.replace(/[^a-z0-9]+/gi, "-")}-intro-lead`;
  const breadcrumb = post.headline.split(/[:—–]/)[0].trim();
  return `import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  ${U}_BODY_HTML,
  ${U}_DATES,
  ${U}_DESCRIPTION,
  ${U}_HEADLINE,
  ${U}_IMAGE,
  ${U}_INTRO_PARAS,
  ${U}_META_TITLE,
  ${U}_MIN_READ,
  ${U}_PATH,
} from "@/lib/agency-posts/${post.slug}";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = ${U}_PATH;
const CANONICAL = \`\${siteConfig.url}\${PATH}\`;

const SPEAKABLE = [
  "main#main-content h1",
  ${JSON.stringify("#" + speakableId)},
] as const;

export const metadata = pageMetadata({
  title: \`\${${U}_META_TITLE} | Neothink Institute\`,
  description: ${U}_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: ${U}_DATES.datePublished,
    modifiedTime: ${U}_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: ${JSON.stringify(breadcrumb)}, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: \`\${${U}_META_TITLE} | Neothink Institute\`,
  description: ${U}_DESCRIPTION,
  datePublished: ${U}_DATES.datePublished,
  dateModified: ${U}_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: \`\${CANONICAL}#article\`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: ${U}_META_TITLE,
  description: ${U}_DESCRIPTION,
  datePublished: ${U}_DATES.datePublished,
  dateModified: ${U}_DATES.dateModified,
  authorId: schemaIds.organization,
  image: ${U}_IMAGE.src,
});

const DEFAULT_RELATED = [
  {
    title: "What is the Neothink Society?",
    description: "Public overview of programs, Project Life, and membership.",
    href: "/faq",
  },
  {
    title: "Mark Hamilton",
    description: "Founder of Neothink Institute and author of the manuscripts.",
    href: "/mark-hamilton",
  },
  {
    title: "Neothink manuscripts",
    description: "Where the movement's ideas are written down in full.",
    href: "/manuscripts",
  },
  {
    title: "Free courses",
    description: "Start learning Neothink without any cost.",
    href: "/free-courses",
  },
] as const;

export default function ${Component}Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix=${JSON.stringify(post.slug.replace(/[^a-z0-9]+/gi, "-"))}
        headline={${U}_HEADLINE}
        introParas={${U}_INTRO_PARAS}
        image={${U}_IMAGE}
        minReadLabel={${U}_MIN_READ}
        bodyHtml={${U}_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
`;
}

function writeIfNeeded(p, contents) {
  if (!WRITE) {
    console.log(`  dry ${path.relative(ROOT, p)} (${contents.length} bytes)`);
    return;
  }
  if (!FORCE && existsSync(p)) {
    console.log(`  keep ${path.relative(ROOT, p)}`);
    return;
  }
  mkdirSync(path.dirname(p), { recursive: true });
  writeFileSync(p, contents);
  console.log(`  wrote ${path.relative(ROOT, p)}`);
}

// Pre-fetch all Uncategorized posts in one call so per-slug REST requests hit
// the cache and we only need 1 page HTML + 1 media lookup per post.
async function prefetchIndex() {
  const key = "uncategorized-index";
  const fp = path.join(CACHE_DIR, `${key}.json`);
  if (existsSync(fp)) {
    console.log(`Using cached index (${readFileSync(fp).length} bytes)`);
    return;
  }
  console.log("Fetching Uncategorized index (categories=1)...");
  const posts = await fetchJson(
    "https://neothink.com/wp-json/wp/v2/posts?categories=1&per_page=100&_fields=id,slug,title,date,date_gmt,modified,modified_gmt,link,featured_media,content,excerpt"
  );
  writeFileSync(fp, JSON.stringify(posts));
  console.log(`  cached ${posts.length} posts`);
  // Also hydrate per-slug caches so cachedJson hits them.
  for (const p of posts) {
    writeFileSync(path.join(CACHE_DIR, `post-${p.slug}.json`), JSON.stringify([p]));
  }
  await sleep(3000);
}

await prefetchIndex();

const slugs = ONLY ? [ONLY] : AGENCY_SLUGS;
let ok = 0;
let failed = 0;
for (const slug of slugs) {
  console.log(`\n>>> ${slug}`);
  try {
    const post = await extractPost(slug);
    if (post.bodyHtml.length < 100) {
      throw new Error(`body HTML too short (${post.bodyHtml.length} chars) — check extractor`);
    }
    console.log(
      `  h1="${post.headline}" | paras=${post.introParas.length} | body=${post.bodyHtml.length}ch | ${post.minReadLabel}`
    );
    writeIfNeeded(path.join(ROOT, "lib/agency-posts", `${slug}.ts`), dataFile(post));
    writeIfNeeded(path.join(ROOT, "app", slug, "page.tsx"), pageFile(post));
    ok += 1;
  } catch (err) {
    failed += 1;
    console.error(`  ERR ${slug}: ${err.message}`);
  }
}
console.log(`\nDone. ok=${ok} failed=${failed} total=${slugs.length}`);
