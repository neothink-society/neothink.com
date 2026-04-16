#!/usr/bin/env node
/**
 * Static analysis pass over all 301 rules in the repo (wp-redirects.ts +
 * inline rules in next.config.ts) to catch:
 *   - duplicate sources (last-one-wins silently, which is a bug)
 *   - redirect loops (A → B → A)
 *   - chains deeper than 2 hops (each 301 is a paint penalty)
 *   - destinations that don't map to a real Next.js route or wildcard handler
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

async function parseRedirects() {
  const rules = [];
  const sources = [
    path.join(ROOT, "lib/migration/wp-redirects.ts"),
    path.join(ROOT, "next.config.ts"),
  ];
  for (const file of sources) {
    const src = await fs.readFile(file, "utf8");

    // slugPair("/source", "/dest") → generates 2 rules
    const pairRe = /slugPair\(\s*"([^"]+)"\s*,\s*"([^"]+)"\s*\)/g;
    let m;
    while ((m = pairRe.exec(src))) {
      const s = m[1].replace(/\/$/, "");
      const d = m[2];
      rules.push({ source: s, destination: d, file });
      rules.push({ source: `${s}/`, destination: d, file });
    }

    // Explicit { source: "...", destination: "...", permanent: true|false }
    const litRe =
      /source:\s*"([^"]+)"\s*,\s*destination:\s*"([^"]+)"\s*,\s*permanent:\s*(?:true|false)/g;
    while ((m = litRe.exec(src))) {
      rules.push({ source: m[1], destination: m[2], file });
    }
  }
  return rules;
}

async function collectRoutes() {
  const appDir = path.join(ROOT, "app");
  const publicDir = path.join(ROOT, "public");
  const routes = new Set(["/"]);
  async function walk(dir, relBase = "") {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      if (!e.isDirectory()) {
        if (/^page\.(tsx|ts|jsx|js|mdx)$/.test(e.name)) {
          routes.add(relBase || "/");
        }
        // Next.js App Router file conventions that produce real URLs.
        if (e.name === "sitemap.ts" || e.name === "sitemap.tsx") routes.add("/sitemap.xml");
        if (e.name === "robots.ts" || e.name === "robots.tsx") routes.add("/robots.txt");
        if (e.name === "opengraph-image.tsx" || e.name === "opengraph-image.ts")
          routes.add(`${relBase}/opengraph-image`);
        continue;
      }
      if (e.name.startsWith("_") || e.name.startsWith(".")) continue;
      await walk(path.join(dir, e.name), `${relBase}/${e.name}`);
    }
  }
  await walk(appDir);

  // Static files served from `public/`
  async function walkPublic(dir, relBase = "") {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const e of entries) {
      const full = path.join(dir, e.name);
      if (e.isDirectory()) {
        await walkPublic(full, `${relBase}/${e.name}`);
      } else {
        routes.add(`${relBase}/${e.name}`);
      }
    }
  }
  await walkPublic(publicDir);

  return routes;
}

async function main() {
  const rules = await parseRedirects();
  const routes = await collectRoutes();

  const bySource = new Map();
  const dupes = new Map();
  for (const r of rules) {
    // Skip pattern rules — :path* etc. aren't literal keys
    if (r.source.includes(":")) continue;
    if (bySource.has(r.source)) {
      if (!dupes.has(r.source)) dupes.set(r.source, [bySource.get(r.source)]);
      dupes.get(r.source).push(r);
    }
    bySource.set(r.source, r);
  }

  const loops = [];
  const longChains = [];
  for (const [source, rule] of bySource) {
    const visited = new Set([source]);
    let cur = rule.destination;
    let hops = 1;
    while (bySource.has(cur)) {
      if (visited.has(cur)) {
        loops.push({ start: source, loopAt: cur });
        break;
      }
      visited.add(cur);
      cur = bySource.get(cur).destination;
      hops += 1;
      if (hops > 3) {
        longChains.push({ start: source, hops, end: cur });
        break;
      }
    }
  }

  const deadDestinations = [];
  for (const [, rule] of bySource) {
    const d = rule.destination;
    if (d.includes(":")) continue; // pattern destination
    if (/^https?:/.test(d)) continue;
    if (d.startsWith("#") || d.startsWith("?")) continue;
    const pathOnly = d.split(/[?#]/)[0].replace(/\/$/, "") || "/";
    if (pathOnly === "/") continue;
    if (bySource.has(d)) continue; // it's the start of a chain
    if (!routes.has(pathOnly)) {
      deadDestinations.push({ source: rule.source, destination: rule.destination });
    }
  }

  console.log(`Parsed rules (literal, non-pattern): ${bySource.size}`);
  console.log(`Total rules incl. patterns: ${rules.length}`);
  console.log(`Declared Next.js routes: ${routes.size}`);
  console.log(`Duplicate sources: ${dupes.size}`);
  for (const [src, copies] of dupes) {
    console.log(`  DUP: ${src}`);
    for (const c of copies.slice(-2)) console.log(`    in ${path.relative(ROOT, c.file)} → ${c.destination}`);
  }
  console.log(`Loops: ${loops.length}`);
  loops.forEach((l) => console.log(`  LOOP: ${l.start} → ${l.loopAt}`));
  console.log(`Chains > 3 hops: ${longChains.length}`);
  longChains.forEach((l) =>
    console.log(`  CHAIN: ${l.start} → ... → ${l.end} (${l.hops} hops)`)
  );
  console.log(`Dead destinations: ${deadDestinations.length}`);
  deadDestinations.slice(0, 20).forEach((d) =>
    console.log(`  DEAD: ${d.source} → ${d.destination}`)
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
