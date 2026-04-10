#!/usr/bin/env node
/**
 * Fetch a published WordPress page/post via REST API (`content.rendered` includes Elementor HTML).
 *
 * Public pages work without credentials. Set WORDPRESS_USERNAME + WORDPRESS_APPLICATION_PASSWORD
 * in `.env.local` for private/draft content or if the site restricts the REST API.
 *
 * Usage:
 *   pnpm migration:wp-page -- --slug about
 *   pnpm migration:wp-page -- --id 494
 *   pnpm migration:wp-page -- --slug free-courses --out migration/source/free-courses.html
 *
 * Loads `.env.local` then `.env` from the project root if present (manual dotenv via readFile).
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function loadEnvFile(name) {
  const p = path.join(ROOT, name);
  if (!existsSync(p)) return;
  const text = readFileSync(p, "utf8");
  for (const line of text.split("\n")) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!m) continue;
    const key = m[1];
    if (process.env[key] !== undefined) continue;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    process.env[key] = val;
  }
}

loadEnvFile(".env.local");
loadEnvFile(".env");

const BASE = (process.env.WORDPRESS_BASE_URL || "https://neothink.com").replace(/\/$/, "");
const USER = process.env.WORDPRESS_USERNAME || "";
const APP_PASSWORD = (process.env.WORDPRESS_APPLICATION_PASSWORD || "").replace(/\s+/g, "");

function parseArgs() {
  const argv = process.argv.slice(2);
  const out = { slug: null, id: null, output: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--slug" && argv[i + 1]) {
      out.slug = argv[++i];
    } else if (a === "--id" && argv[i + 1]) {
      out.id = argv[++i];
    } else if (a === "--out" && argv[i + 1]) {
      out.output = argv[++i];
    }
  }
  return out;
}

function authHeader() {
  if (!USER || !APP_PASSWORD) return {};
  const token = Buffer.from(`${USER}:${APP_PASSWORD}`, "utf8").toString("base64");
  return { Authorization: `Basic ${token}` };
}

async function main() {
  const { slug, id, output } = parseArgs();
  if (!slug && !id) {
    console.error("Usage: node scripts/wp-fetch-page.mjs --slug <slug> | --id <id> [--out <file>]");
    process.exit(1);
  }

  let url;
  if (id) {
    url = `${BASE}/wp-json/wp/v2/pages/${encodeURIComponent(id)}?_fields=id,slug,link,title,modified,content`;
  } else {
    url = `${BASE}/wp-json/wp/v2/pages?slug=${encodeURIComponent(slug)}&_fields=id,slug,link,title,modified,content`;
  }

  const res = await fetch(url, { headers: { Accept: "application/json", ...authHeader() } });
  if (!res.ok) {
    console.error(`HTTP ${res.status}: ${await res.text()}`);
    process.exit(1);
  }

  const data = await res.json();
  const page = Array.isArray(data) ? data[0] : data;
  if (!page?.content?.rendered) {
    console.error("No content returned. Check slug/id or credentials for non-public pages.");
    process.exit(1);
  }

  const html = `<!DOCTYPE html>
<meta charset="utf-8">
<!-- source: ${page.link} | modified: ${page.modified} -->
<title>${page.title?.rendered || page.slug}</title>
<body>
${page.content.rendered}
</body>
`;

  if (output) {
    const outPath = path.isAbsolute(output) ? output : path.join(ROOT, output);
    writeFileSync(outPath, html, "utf8");
    console.log(`Wrote ${outPath}`);
  } else {
    process.stdout.write(html);
  }

  console.error(`OK: ${page.link} (id ${page.id})`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
