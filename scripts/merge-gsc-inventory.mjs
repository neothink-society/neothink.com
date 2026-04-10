#!/usr/bin/env node
/**
 * Join `data/migration/url-inventory.json` with a GSC Performance → Pages CSV export.
 * Writes `data/migration/url-inventory-gsc-merged.json` for redirect prioritization.
 *
 * Usage: node scripts/merge-gsc-inventory.mjs [path/to/performance-pages.csv]
 * Default CSV: data/migration/gsc/2026-04-09/performance-pages.csv
 */

import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const INVENTORY = path.join(ROOT, "data/migration/url-inventory.json");
const DEFAULT_GSC = path.join(
  ROOT,
  "data/migration/gsc/2026-04-09/performance-pages.csv",
);
const OUT = path.join(ROOT, "data/migration/url-inventory-gsc-merged.json");

/** Canonical key: pathname for apex `neothink.com`, else `host/path` (avoids colliding with www). */
function pathKeyFromUrl(urlStr) {
  try {
    const u = new URL(urlStr.trim());
    const host = u.hostname.replace(/^www\./, "");
    if (host !== "neothink.com" && host !== "business.neothink.com") return null;
    let p = u.pathname || "/";
    if (p.length > 1 && p.endsWith("/")) p = p.slice(0, -1);
    const pathPart = p || "/";
    if (host === "neothink.com") return pathPart;
    return `${host}${pathPart}`;
  } catch {
    return null;
  }
}

/** Robust line parse: URL may theoretically contain commas (rare). */
function parsePagesLine(line) {
  const parts = line.split(",");
  if (parts.length < 5) return null;
  const position = parseFloat(parts[parts.length - 1]);
  const ctrRaw = parts[parts.length - 2];
  const impressions = parseInt(parts[parts.length - 3], 10);
  const clicks = parseInt(parts[parts.length - 4], 10);
  const url = parts.slice(0, parts.length - 4).join(",");
  if (!url.startsWith("http")) return null;
  const ctrPercent = parseFloat(String(ctrRaw).replace("%", "")) || 0;
  return {
    url: url.trim(),
    clicks: Number.isFinite(clicks) ? clicks : 0,
    impressions: Number.isFinite(impressions) ? impressions : 0,
    ctrPercent,
    position: Number.isFinite(position) ? position : 0,
  };
}

function main() {
  const gscPath = process.argv[2] || DEFAULT_GSC;
  const inventory = JSON.parse(readFileSync(INVENTORY, "utf8"));
  const gscText = readFileSync(gscPath, "utf8");
  const lines = gscText.trim().split(/\r?\n/);
  const gscByPath = new Map();

  for (let i = 1; i < lines.length; i++) {
    const row = parsePagesLine(lines[i]);
    if (!row) continue;
    const pk = pathKeyFromUrl(row.url);
    if (!pk) continue;
    gscByPath.set(pk, row);
  }

  const invPaths = new Set(inventory.entries.map((e) => e.path));
  const gscPaths = new Set(gscByPath.keys());

  const allPaths = new Set([...invPaths, ...gscPaths]);
  const entries = [];

  for (const p of allPaths) {
    const inv = inventory.entries.find((e) => e.path === p);
    const gsc = gscByPath.get(p);
    entries.push({
      path: p,
      inSitemap: invPaths.has(p),
      inventory: inv
        ? { url: inv.url, lastmod: inv.lastmod, sitemap: inv.sitemap }
        : undefined,
      gsc: gsc
        ? {
            url: gsc.url,
            clicks: gsc.clicks,
            impressions: gsc.impressions,
            ctrPercent: gsc.ctrPercent,
            position: gsc.position,
          }
        : undefined,
    });
  }

  entries.sort((a, b) => {
    const ca = a.gsc?.clicks ?? 0;
    const cb = b.gsc?.clicks ?? 0;
    if (cb !== ca) return cb - ca;
    const ia = a.gsc?.impressions ?? 0;
    const ib = b.gsc?.impressions ?? 0;
    if (ib !== ia) return ib - ia;
    return a.path.localeCompare(b.path);
  });

  const inBoth = [...invPaths].filter((p) => gscPaths.has(p)).length;
  const inInventoryOnly = [...invPaths].filter((p) => !gscPaths.has(p)).length;
  const inGscOnly = [...gscPaths].filter((p) => !invPaths.has(p)).length;

  const payload = {
    generatedAt: new Date().toISOString(),
    sources: {
      inventory: "data/migration/url-inventory.json",
      gscPages: path.relative(ROOT, gscPath).replace(/\\/g, "/"),
    },
    description:
      "Sitemap inventory merged with GSC Performance → Pages. Rows with inSitemap false still appeared in search — plan redirects or canonicals. Rows with gsc undefined are in the XML inventory only (no clicks/impressions in this export window).",
    stats: {
      uniquePaths: entries.length,
      inSitemap: invPaths.size,
      inGscPagesExport: gscPaths.size,
      inBoth,
      inInventoryOnly,
      inGscOnly,
    },
    entries,
  };

  writeFileSync(OUT, JSON.stringify(payload, null, 2) + "\n", "utf8");
  console.log(`Wrote ${OUT}`);
  console.log(payload.stats);
}

main();
