#!/usr/bin/env node
/**
 * Phase 0: download https://neothink.com/sitemap.xml (Rank Math / WP),
 * follow nested sitemap indexes, collect every page URL from urlsets, dedupe, write JSON.
 *
 * Usage: node scripts/fetch-wp-sitemap-inventory.mjs
 * Requires network access to neothink.com.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = "https://neothink.com/sitemap.xml";
const OUT = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "data",
  "migration",
  "url-inventory.json",
);

const UA = "neothink-phase0-inventory/1.0 (+https://github.com/neothink-society/neothink.com)";

async function fetchText(url) {
  const res = await fetch(url, {
    headers: { "user-agent": UA, accept: "application/xml,text/xml,*/*" },
  });
  if (!res.ok) throw new Error(`GET ${url} → ${res.status}`);
  return res.text();
}

/** First <loc> inside each <url>...</url> block (avoids nested loc-like tags in extensions). */
function extractFromUrlset(xml) {
  const out = [];
  const parts = xml.split(/<url[\s>]/i);
  for (let i = 1; i < parts.length; i++) {
    const block = parts[i];
    const end = block.search(/<\/url\s*>/i);
    const chunk = end >= 0 ? block.slice(0, end) : block;
    const locM = chunk.match(/<loc>\s*([^<]+?)\s*<\/loc>/i);
    if (!locM) continue;
    const loc = locM[1].trim();
    const lastmodM = chunk.match(/<lastmod>\s*([^<]+?)\s*<\/lastmod>/i);
    out.push({ loc, lastmod: lastmodM ? lastmodM[1].trim() : undefined });
  }
  return out;
}

function isSitemapIndex(xml) {
  return /<sitemapindex[\s>]/i.test(xml);
}

/** Child sitemap URLs from a sitemap index. */
function extractChildSitemaps(xml) {
  const out = [];
  const re = /<loc>\s*([^<]+?)\s*<\/loc>/gi;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const u = m[1].trim();
    if (/\.xml(\?|$)/i.test(u)) out.push(u);
  }
  return out;
}

function pathFromUrl(full) {
  try {
    const u = new URL(full);
    if (u.hostname.replace(/^www\./, "") !== "neothink.com") return null;
    let p = u.pathname || "/";
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    return p || "/";
  } catch {
    return null;
  }
}

function labelFromSitemapUrl(sitemapUrl) {
  try {
    return new URL(sitemapUrl).pathname.split("/").pop() || sitemapUrl;
  } catch {
    return sitemapUrl;
  }
}

async function main() {
  const queue = [ROOT];
  const seenSitemaps = new Set();
  /** @type {Map<string, { url: string, path: string, lastmod?: string, sitemap: string }>} */
  const byPath = new Map();

  while (queue.length) {
    const sitemapUrl = queue.shift();
    if (!sitemapUrl || seenSitemaps.has(sitemapUrl)) continue;
    seenSitemaps.add(sitemapUrl);
    const xml = await fetchText(sitemapUrl);
    const sitemapLabel = labelFromSitemapUrl(sitemapUrl);

    if (isSitemapIndex(xml)) {
      for (const child of extractChildSitemaps(xml)) {
        if (!seenSitemaps.has(child)) queue.push(child);
      }
      continue;
    }

    for (const row of extractFromUrlset(xml)) {
      const p = pathFromUrl(row.loc);
      if (p == null) continue;
      const prev = byPath.get(p);
      const labels = new Set((prev?.sitemap ?? "").split(",").filter(Boolean));
      labels.add(sitemapLabel);
      byPath.set(p, {
        url: row.loc,
        path: p,
        lastmod: row.lastmod ?? prev?.lastmod,
        sitemap: [...labels].sort().join(","),
      });
    }
  }

  const paths = [...byPath.keys()].sort((a, b) => a.localeCompare(b));
  const entries = paths.map((p) => byPath.get(p));

  /** How many URL rows list each sitemap file (same path in post + video counts twice). */
  const urlRowsBySitemapFile = {};
  for (const e of entries) {
    for (const lab of e.sitemap.split(",")) {
      urlRowsBySitemapFile[lab] = (urlRowsBySitemapFile[lab] || 0) + 1;
    }
  }

  const payload = {
    generatedAt: new Date().toISOString(),
    source: ROOT,
    description:
      "URLs discovered via live WordPress XML sitemaps. Merge with GSC ‘Pages’ export for traffic priority; sitemaps can omit or mis-include URLs.",
    stats: {
      uniquePaths: entries.length,
      sitemapsFetched: seenSitemaps.size,
      urlRowsBySitemapFile,
      statsNote:
        "urlRowsBySitemapFile counts each path once per sitemap file it appears in (e.g. post + video); sums can exceed uniquePaths.",
    },
    entries,
  };

  mkdirSync(path.dirname(OUT), { recursive: true });
  writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n", "utf8");
  console.log(`Wrote ${entries.length} unique paths to ${OUT}`);
  console.log("Sitemaps fetched:", seenSitemaps.size);
  console.log("URL rows by sitemap file:", urlRowsBySitemapFile);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
