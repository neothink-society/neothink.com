#!/usr/bin/env node
/**
 * For philosophy / concepts posts missing `image` on `blogPostingJsonLd`:
 * - YouTube posts: `image` + `articleOgImage` use `hqdefault.jpg` (reliable vs maxres).
 * - Ensure `*_YOUTUBE_ID` is imported; add `VideoObject` JSON-LD if missing.
 * - Text-only concept posts (no WP image, no video): `defaultOpenGraphImageUrl()`
 *   + matching `articleOgImage` (explicit site default).
 *
 * Idempotent. Safe to re-run.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

/** Posts where `blogPostingJsonLd` had no `image` (audit 2026-04). */
const APP_SLUGS = [
  "a-knight-in-shining-armor-immortalis",
  "a-new-country-the-great-experiment-called-immortalis",
  "breaking-the-chains-on-consciousness",
  "building-the-engine-behind-immortalis",
  "creating-the-demand-to-live-forever",
  "decoding-super-puzzle",
  "friday-night-essence",
  "how-every-individual-can-be-wealthy",
  "how-jobs-will-change",
  "how-neothink-brings-you-world-of-prosperity",
  "illusion-pollution",
  "immortalis-the-great-experiment-of-our-time",
  "integrated-thinking",
  "land-based-immortalis",
  "libertarians-next-big-possibility",
  "live-longer",
  "mark-hamiltons-story",
  "mont-pelerin-pivot-into-our-essence",
  "self-leader-secret",
  "spreading-immortalis-to-world-leaders",
  "starting-our-own-country",
  "strategic-briefing-for-presidents",
  "the-2400-year-mistake",
  "the-beautiful-vs-the-ugly-in-our-world-3",
  "the-city-that-cures-disease-neovia",
  "the-cult-you-never-knew-existed",
  "the-grand-experiment-of-our-time",
  "the-greatest-mental-breakthrough",
  "the-job-revolution",
  "the-missing-key-to-universal-prosperity",
  "the-two-obstacles-to-curing-aging",
  "the-unbreakable-equation",
  "the-year-capitalism-sets-the-world-free",
  "value-creator",
  "what-all-philosophies-get-wrong",
];

function resolveDataBasename(pageSrc) {
  const m = pageSrc.match(/} from "@\/lib\/([\w-]+-data)"/);
  return m ? m[1] : null;
}

function patchBlogPostingImage(src, imageExpr) {
  const marker = "const articleLd = blogPostingJsonLd({";
  const ms = src.indexOf(marker);
  if (ms === -1) throw new Error("articleLd not found");
  const open = src.indexOf("{", ms + marker.length - 1);
  let depth = 0;
  for (let i = open; i < src.length; i++) {
    const c = src[i];
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        const inner = src.slice(open + 1, i);
        if (/\bimage:\s/.test(inner)) return { src, changed: false };
        const updated = inner.replace(
          /(authorId: schemaIds.organization,)/,
          `$1\n  image: ${imageExpr},`
        );
        if (updated === inner) throw new Error("authorId not found in articleLd");
        return { src: src.slice(0, open + 1) + updated + src.slice(i), changed: true };
      }
    }
  }
  throw new Error("unbalanced braces in articleLd");
}

function ensureJsonLdImport(src, symbol) {
  if (src.includes(`${symbol},`)) return src;
  if (symbol === "defaultOpenGraphImageUrl") {
    if (src.includes("videoObjectJsonLd,")) {
      return src.replace(
        "breadcrumbListJsonLd,\n  faqPageJsonLd,\n  videoObjectJsonLd,",
        "breadcrumbListJsonLd,\n  defaultOpenGraphImageUrl,\n  faqPageJsonLd,\n  videoObjectJsonLd,"
      );
    }
    return src.replace(
      "breadcrumbListJsonLd,\n  faqPageJsonLd,\n  webPageJsonLd,",
      "breadcrumbListJsonLd,\n  defaultOpenGraphImageUrl,\n  faqPageJsonLd,\n  webPageJsonLd,"
    );
  }
  if (symbol === "videoObjectJsonLd") {
    return src.replace(
      "faqPageJsonLd,\n  webPageJsonLd,",
      "faqPageJsonLd,\n  videoObjectJsonLd,\n  webPageJsonLd,"
    );
  }
  throw new Error(`unknown symbol ${symbol}`);
}

function ensureDataImportSymbol(src, basename, symbol) {
  const tail = `} from "@/lib/${basename}"`;
  const idx = src.indexOf(tail);
  if (idx === -1) throw new Error(`no import ${basename}`);
  const head = src.lastIndexOf("import {", idx);
  const importBlock = src.slice(head, idx + tail.length);
  if (new RegExp(`\\b${symbol}\\b`).test(importBlock)) return src;
  let needle = `\n} from "@/lib/${basename}"`;
  let pos = src.indexOf(needle);
  if (pos === -1) {
    needle = ` } from "@/lib/${basename}"`;
    pos = src.indexOf(needle);
    if (pos === -1) throw new Error(`import close ${basename}`);
    return src.slice(0, pos) + `, ${symbol}` + src.slice(pos);
  }
  return src.slice(0, pos) + `\n  ${symbol},` + src.slice(pos);
}

function ensureArticleOgImage(src, ogBlockLines) {
  if (src.includes("articleOgImage:")) return src;
  const block = ogBlockLines.join("\n");
  return src.replace(
    /(pathname:\s*[^,\n]+,\n)(\s*)(ogType:)/,
    `$1$2${block}\n$2$3`
  );
}

function addVideoIfMissing(src, basename, youtubeConst, titleToken, descriptionRef) {
  if (src.includes("videoObjectJsonLd")) return src;
  let s = ensureJsonLdImport(src, "videoObjectJsonLd");
  s = ensureDataImportSymbol(s, basename, youtubeConst);

  const bp = s.indexOf("blogPostingJsonLd({");
  const chunk = s.slice(bp, bp + 1200);
  const dpm = chunk.match(/datePublished: `([^`]+)`/);
  if (!dpm) throw new Error("datePublished not found");
  const uploadInner = dpm[1];

  const videoBlock = `const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: \`\${${titleToken}} — video | Neothink Institute\`,
  description: ${descriptionRef},
  embedUrl: \`https://www.youtube.com/embed/\${${youtubeConst}}\`,
  thumbnailUrl: \`https://i.ytimg.com/vi/\${${youtubeConst}}/hqdefault.jpg\`,
  uploadDate: \`${uploadInner}\`,
  contentUrl: \`https://www.youtube.com/watch?v=\${${youtubeConst}}\`,
  speakerId: schemaIds.founder,
});

`;

  s = s.replace(/(const faqLd = faqPageJsonLd\([^)]+\);\n)/, `$1\n${videoBlock}`);
  s = s.replace(
    /(<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON.stringify\(faqLd\) \}\} \/>)\n/,
    `$1\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />\n`
  );
  return s;
}

function articleDescriptionRef(pageSrc) {
  const marker = "const articleLd = blogPostingJsonLd({";
  const ms = pageSrc.indexOf(marker);
  if (ms === -1) return "DESCRIPTION";
  const chunk = pageSrc.slice(ms, ms + 800);
  const m = chunk.match(/description:\s*([^,\n]+),/);
  return m ? m[1].trim() : "DESCRIPTION";
}

function articleHeadlineRef(pageSrc) {
  const marker = "const articleLd = blogPostingJsonLd({";
  const ms = pageSrc.indexOf(marker);
  if (ms === -1) return null;
  const chunk = pageSrc.slice(ms, ms + 800);
  const m = chunk.match(/headline:\s*([^,\n]+),/);
  return m ? m[1].trim() : null;
}

function patchSlug(appSlug) {
  const pagePath = path.join(root, "app", appSlug, "page.tsx");
  let src = fs.readFileSync(pagePath, "utf8");

  const basename = resolveDataBasename(src);
  if (!basename) throw new Error(`${appSlug}: no *-data import`);

  const dataPath = path.join(root, "lib", `${basename}.ts`);
  const data = fs.readFileSync(dataPath, "utf8");

  const yt = data.match(/export const (\w+_YOUTUBE_ID) = "/);
  const img = data.match(/export const (\w+_IMAGE)\s*=/);
  const meta =
    data.match(/export const (\w+_META_TITLE)\s*=/) ||
    data.match(/export const (\w+_SEO_TITLE)\s*=/);
  if (!meta) throw new Error(`${appSlug}: no META_TITLE or SEO_TITLE`);
  const metaConst = meta[1];
  const titleToken = articleHeadlineRef(src) ?? metaConst;

  const descriptionRef = articleDescriptionRef(src);

  if (yt) {
    src = addVideoIfMissing(src, basename, yt[1], titleToken, descriptionRef);
    src = ensureDataImportSymbol(src, basename, yt[1]);
  }

  let imageExpr;
  /** @type {string[]} */
  let ogLines;

  if (img) {
    const imgConst = img[1];
    src = ensureDataImportSymbol(src, basename, imgConst);
    imageExpr = `${imgConst}.src`;
    ogLines = [`  articleOgImage: ${imgConst},`];
  } else if (yt) {
    const ytConst = yt[1];
    imageExpr = `\`https://i.ytimg.com/vi/\${${ytConst}}/hqdefault.jpg\``;
    ogLines = [
      "  articleOgImage: {",
      `    src: \`https://i.ytimg.com/vi/\${${ytConst}}/hqdefault.jpg\`,`,
      `    alt: \`\${${titleToken}} — video thumbnail\`,`,
      "    width: 480,",
      "    height: 360,",
      "  },",
    ];
  } else {
    src = ensureJsonLdImport(src, "defaultOpenGraphImageUrl");
    imageExpr = "defaultOpenGraphImageUrl()";
    ogLines = [
      "  articleOgImage: {",
      "    src: defaultOpenGraphImageUrl(),",
      `    alt: \`\${${titleToken}} | \${siteConfig.name}\`,`,
      "    width: 1200,",
      "    height: 630,",
      "  },",
    ];
  }

  const r = patchBlogPostingImage(src, imageExpr);
  src = r.src;
  if (!r.changed && src.includes("articleOgImage:")) return "skip";

  src = ensureArticleOgImage(src, ogLines);

  fs.writeFileSync(pagePath, src);
  return "ok";
}

const stats = {};
for (const s of APP_SLUGS) {
  try {
    const out = patchSlug(s);
    stats[out] = (stats[out] || 0) + 1;
  } catch (e) {
    console.error(s, e.message);
    stats.error = (stats.error || 0) + 1;
  }
}
console.log(stats);
