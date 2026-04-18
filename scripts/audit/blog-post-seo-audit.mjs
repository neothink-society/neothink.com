#!/usr/bin/env node
/**
 * Static SEO / AEO audit for all migrated blog posts:
 *   - `lib/*-body-html.ts` (Elementor long-form)
 *   - `lib/agency-posts/*.ts` (agency-era HTML posts)
 *
 * Outputs JSON to stdout. Optional: AUDIT_OUT=/path.json
 *
 * Checks: route exists, metadata helpers present, JSON-LD image + OG sync,
 * meta description length band, FAQ JSON-LD presence, video JSON-LD when
 * YouTube id exists in data module.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const libDir = path.join(root, "lib");

/** Body HTML filename slug → App Router folder when they differ. */
const BODY_HTML_TO_ROUTE = new Map([
  ["immortalis-the-great-experiment", "immortalis-the-great-experiment-of-our-time"],
]);

const bodySlugs = fs
  .readdirSync(libDir)
  .filter((f) => f.endsWith("-body-html.ts"))
  .map((f) => f.replace(/-body-html\.ts$/, ""));

const agencyDir = path.join(libDir, "agency-posts");
const agencySlugs = fs
  .readdirSync(agencyDir)
  .filter((f) => f.endsWith(".ts"))
  .map((f) => f.replace(/\.ts$/, ""));

const slugs = [...new Set([...bodySlugs, ...agencySlugs])].sort();

function routeSlugFor(bodyOrAgencySlug) {
  return BODY_HTML_TO_ROUTE.get(bodyOrAgencySlug) ?? bodyOrAgencySlug;
}

function readAgencyDescription(slug) {
  const p = path.join(agencyDir, `${slug}.ts`);
  if (!fs.existsSync(p)) return null;
  const s = fs.readFileSync(p, "utf8");
  const m = s.match(/export const \w+_DESCRIPTION = "((?:[^"\\]|\\.)*)"/);
  if (m) return m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n");
  const m2 = s.match(/export const \w+_DESCRIPTION = `([\s\S]*?)`/);
  return m2 ? m2[1].trim() : null;
}

function readDataModuleForYoutube(slug) {
  const routeSlug = routeSlugFor(slug);
  const p = path.join(libDir, `${routeSlug}-data.ts`);
  if (!fs.existsSync(p)) return { file: null, hasYoutube: false };
  const s = fs.readFileSync(p, "utf8");
  const m = s.match(/export const \w+_YOUTUBE_ID = "([a-zA-Z0-9_-]{6,})"/);
  return { file: p, hasYoutube: !!m };
}

function auditSlug(slug) {
  const appSlug = routeSlugFor(slug);
  const pagePath = path.join(root, "app", appSlug, "page.tsx");
  const kind = fs.existsSync(path.join(agencyDir, `${slug}.ts`)) ? "agency" : "body-html";

  const row = {
    slug,
    appSlug,
    kind,
    pageExists: fs.existsSync(pagePath),
    hasPageMetadata: false,
    hasBlogPostingLd: false,
    hasFaqPageLd: false,
    hasVideoObjectLd: false,
    blogPostingHasImage: false,
    hasArticleOgImage: false,
    metaDescriptionLength: null,
    metaDescriptionBand: null,
    dataModuleYoutube: null,
    youtubeWithoutVideoLd: false,
    flags: [],
  };

  if (!row.pageExists) {
    row.flags.push("MISSING_APP_ROUTE");
    return row;
  }

  const src = fs.readFileSync(pagePath, "utf8");
  row.hasPageMetadata = src.includes("pageMetadata({");
  row.hasBlogPostingLd = src.includes("blogPostingJsonLd({");
  row.hasFaqPageLd = src.includes("faqPageJsonLd(");
  row.hasVideoObjectLd = src.includes("videoObjectJsonLd(");
  row.hasArticleOgImage = src.includes("articleOgImage:");

  const bp = src.indexOf("blogPostingJsonLd({");
  if (bp !== -1) {
    const chunk = src.slice(bp, bp + 3000);
    // StaticImageData `.src`, URL literals, or helpers like `defaultOpenGraphImageUrl()`.
    row.blogPostingHasImage = /\bimage:\s*(?:[A-Za-z0-9_][A-Za-z0-9_]*\(\)|[A-Za-z0-9_]+\.src|`[^`]*`|"[^"]*"|'[^']*')/.test(
      chunk
    );
  }

  let desc = extractDescriptionConst(src);
  if (!desc) {
    const m = src.match(/description:\s*([A-Z][A-Z0-9_]*)\s*,/);
    if (m && kind === "agency") desc = readAgencyDescription(slug);
    if (m && kind !== "agency") {
      const dataPath = path.join(libDir, `${appSlug}-data.ts`);
      if (fs.existsSync(dataPath)) {
        const ds = fs.readFileSync(dataPath, "utf8");
        const dm = ds.match(
          /export const \w+_META_DESCRIPTION = "((?:[^"\\]|\\.)*)"|export const \w+_QUICK_ANSWER_REST = "((?:[^"\\]|\\.)*)"/
        );
        if (dm) desc = (dm[1] || dm[2] || "").replace(/\\"/g, '"');
      }
    }
  }
  if (!desc) {
    const backtick = src.match(/description:\s*`([^`]{20,})`/);
    if (backtick) desc = backtick[1];
  }
  if (desc) {
    const plain = desc.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
    row.metaDescriptionLength = plain.length;
    if (plain.length < 110) row.metaDescriptionBand = "short";
    else if (plain.length > 175) row.metaDescriptionBand = "long";
    else row.metaDescriptionBand = "ok";
  } else {
    row.metaDescriptionBand = "unknown";
    row.flags.push("DESCRIPTION_PARSE_FAILED");
  }

  if (row.hasBlogPostingLd && !row.blogPostingHasImage) row.flags.push("NO_BLOGPOSTING_IMAGE");
  if (row.hasBlogPostingLd && row.blogPostingHasImage && !row.hasArticleOgImage)
    row.flags.push("OG_IMAGE_NOT_SYNCED");

  const yt = readDataModuleForYoutube(slug);
  row.dataModuleYoutube = yt.hasYoutube;
  if (yt.hasYoutube && row.hasBlogPostingLd && !row.hasVideoObjectLd) {
    row.youtubeWithoutVideoLd = true;
    row.flags.push("YOUTUBE_ID_BUT_NO_VIDEO_OBJECT_LD");
  }

  if (!row.hasBlogPostingLd) row.flags.push("NO_BLOGPOSTING_LD");

  return row;
}

/** `const DESCRIPTION = ...` — template, double-quoted, or as const string. */
function extractDescriptionConst(src) {
  let m = src.match(/const DESCRIPTION = `([\s\S]*?)`\s*(?:as const)?;/);
  if (m) return m[1].replace(/\\\`/g, "`").trim();
  m = src.match(/const DESCRIPTION = "((?:[^"\\]|\\.)*)"\s*as const;/);
  if (m) return m[1].replace(/\\"/g, '"').replace(/\\n/g, "\n");
  m = src.match(/const DESCRIPTION = "((?:[^"\\]|\\.)*)"\s*;/);
  if (m) return m[1].replace(/\\"/g, '"');
  return null;
}

const rows = slugs.map(auditSlug);
const summary = {
  generatedAt: new Date().toISOString(),
  totalSlugs: slugs.length,
  missingRoute: rows.filter((r) => r.flags.includes("MISSING_APP_ROUTE")).length,
  noBlogPostingImage: rows.filter((r) => r.flags.includes("NO_BLOGPOSTING_IMAGE")).length,
  ogNotSynced: rows.filter((r) => r.flags.includes("OG_IMAGE_NOT_SYNCED")).length,
  shortMetaDescription: rows.filter((r) => r.metaDescriptionBand === "short").length,
  longMetaDescription: rows.filter((r) => r.metaDescriptionBand === "long").length,
  youtubeMissingVideoLd: rows.filter((r) => r.flags.includes("YOUTUBE_ID_BUT_NO_VIDEO_OBJECT_LD"))
    .length,
  withFaqLd: rows.filter((r) => r.hasFaqPageLd).length,
  withoutFaqLd: rows.filter((r) => r.hasBlogPostingLd && !r.hasFaqPageLd).length,
};

const out = { summary, rows };
if (process.env.AUDIT_OUT) {
  fs.writeFileSync(process.env.AUDIT_OUT, JSON.stringify(out, null, 2));
}
console.log(JSON.stringify(out, null, 2));
