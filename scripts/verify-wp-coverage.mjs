#!/usr/bin/env node
/**
 * Final pre-cutover verification:
 * every WP sitemap URL resolves (as a Next.js route) or 301-redirects on Next.js.
 *
 * Outputs:
 *   - resolves: paths that exist as Next.js app/ routes (static segments)
 *   - redirects: paths covered by lib/migration/wp-redirects.ts (slugPair expansion)
 *   - gaps: paths that are NEITHER a route nor a redirect
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const INV = path.join(ROOT, "data/migration/url-inventory-gsc-merged.json");
const REDIRECTS = path.join(ROOT, "lib/migration/wp-redirects.ts");
const APP_DIR = path.join(ROOT, "app");

function listAppRoutes(dir, prefix = "") {
  const routes = new Set();
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const name = entry.name;
    // Skip private/dynamic segments and non-route folders.
    if (name.startsWith("_") || name.startsWith("(") || name.startsWith("[")) continue;
    if (name === "api") continue;
    const nextPrefix = prefix ? `${prefix}/${name}` : name;
    const full = path.join(dir, name);
    const files = fs.readdirSync(full);
    if (files.some((f) => /^page\.(tsx|jsx|ts|js|mdx)$/.test(f))) {
      routes.add(`/${nextPrefix}`);
    }
    for (const child of listAppRoutes(full, nextPrefix)) routes.add(child);
  }
  return routes;
}

// Parse wpRedirects sources (both slugPair expansions and explicit entries).
function parseRedirectSources() {
  const src = fs.readFileSync(REDIRECTS, "utf8");
  const sources = new Set();
  // slugPair("/foo", "/bar")
  const pairRe = /slugPair\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\)/g;
  let m;
  while ((m = pairRe.exec(src))) {
    const s = m[1].replace(/\/$/, "");
    sources.add(s);
    sources.add(`${s}/`);
  }
  // Explicit { source: "...", ... }
  const litRe = /source:\s*"([^"]+)"/g;
  while ((m = litRe.exec(src))) sources.add(m[1]);
  return sources;
}

function canonicalize(p) {
  // Normalize: remove trailing slash (except root), ensure leading slash.
  if (!p) return "/";
  let out = p.startsWith("/") ? p : `/${p}`;
  if (out !== "/" && out.endsWith("/")) out = out.replace(/\/+$/, "");
  return out;
}

function main() {
  const inv = JSON.parse(fs.readFileSync(INV, "utf8"));
  // Audit both sitemap + GSC-indexed URLs (the inventory merges both). GSC-only
  // entries catch long editorial slugs that WordPress removed from the sitemap
  // but Google still has indexed — they need redirects just as urgently.
  const auditable = inv.entries.filter(
    (e) => (e.inSitemap || e.gsc) && e.path && e.path.startsWith("/")
  );
  const wpPaths = auditable.map((e) => canonicalize(e.path));

  const appRoutes = new Set(
    [...listAppRoutes(APP_DIR)].map((r) => canonicalize(r))
  );
  // Manual: root exists via app/page.tsx
  appRoutes.add("/");

  // Known dynamic category routes.
  const categoryBases = new Set([
    "/category/neothink-philosophy",
    "/category/neothink-awakening",
    "/category/neothink-concepts",
    "/category/neothink-mentality",
  ]);
  for (const c of categoryBases) appRoutes.add(c);

  const redirectSrcs = new Set(
    [...parseRedirectSources()].map((s) => canonicalize(s))
  );

  const resolves = [];
  const redirects = [];
  const gaps = [];

  for (const p of wpPaths) {
    const pNoSlash = canonicalize(p);
    if (appRoutes.has(pNoSlash)) {
      resolves.push(pNoSlash);
    } else if (redirectSrcs.has(pNoSlash) || redirectSrcs.has(`${pNoSlash}/`)) {
      redirects.push(pNoSlash);
    } else {
      // check against dynamic category detail slug (/category/X)
      if (pNoSlash.startsWith("/category/") && categoryBases.has(pNoSlash)) {
        resolves.push(pNoSlash);
      } else {
        gaps.push(pNoSlash);
      }
    }
  }

  console.log(`WP URLs audited (sitemap + GSC): ${wpPaths.length}`);
  console.log(`  Resolved (Next route):         ${resolves.length}`);
  console.log(`  Redirected (301):              ${redirects.length}`);
  console.log(`  Gaps (TODO):                   ${gaps.length}`);
  if (gaps.length) {
    console.log("\n-- Gaps --");
    for (const g of gaps.sort()) console.log(`  ${g}`);
  }
}

main();
