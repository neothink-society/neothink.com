#!/usr/bin/env node
/**
 * Fetch a published WordPress page/post via REST API (`content.rendered` includes Elementor HTML).
 *
 * Public pages work without credentials. Set WORDPRESS_USERNAME + WORDPRESS_APPLICATION_PASSWORD
 * in `.env.local` for private/draft content or if the site restricts the REST API.
 *
 * Usage:
 *   pnpm migration:wp-page -- --slug about
 *   pnpm migration:wp-page -- --slug rise-from-rut --post --out migration/source/rise-from-rut.html
 *   pnpm migration:wp-page -- --slug freedom-from-rights --post --out migration/source/freedom-from-rights.html
 *   pnpm migration:wp-page -- --slug beyond-tunnel-vision --post --out migration/source/beyond-tunnel-vision.html
 *   pnpm migration:wp-page -- --slug impact-profits --post --out migration/source/impact-profits.html
 *   pnpm migration:wp-page -- --slug higher-level-thinking --post --out migration/source/higher-level-thinking.html
 *   pnpm migration:wp-page -- --slug areas-of-profit --post --out migration/source/areas-of-profit.html
 *   pnpm migration:wp-page -- --slug unlock-your-genius --post --out migration/source/unlock-your-genius.html
 *   pnpm migration:wp-page -- --slug the-prime-law-mentality --post --out migration/source/the-prime-law-mentality.html
 *   pnpm migration:wp-page -- --slug soaring-productivity --post --out migration/source/soaring-productivity.html
 *   pnpm migration:wp-page -- --slug cure-to-aging --post --out migration/source/cure-to-aging.html
 *   pnpm migration:wp-page -- --slug soar-beyond-peers --post --out migration/source/soar-beyond-peers.html
 *   pnpm migration:wp-page -- --slug money-love-affair --post --out migration/source/money-love-affair.html
 *   pnpm migration:wp-page -- --slug keep-the-balance --post --out migration/source/keep-the-balance.html
 *   pnpm migration:wp-page -- --slug power-of-calm --post --out migration/source/power-of-calm.html
 *   pnpm migration:wp-page -- --id 494
 *   pnpm migration:wp-page -- --slug free-courses --out migration/source/free-courses.html
 *   pnpm migration:wp-page -- --slug neothink-university --out migration/source/neothink-university.html
 *   pnpm migration:wp-page -- --slug immortalis --out migration/source/immortalis.html
 *   pnpm migration:wp-page -- --slug faq --out migration/source/faq.html
 *   pnpm migration:wp-page -- --slug neothink-reviews --out migration/source/neothink-reviews.html
 *   pnpm migration:wp-page -- --post --slug neothink-secret-society-differs-other-groups --out migration/source/neothink-secret-society-differs-other-groups.html
 *
 * Use `--post` for WordPress *posts* (e.g. Neothink Mentality lessons). Default is `pages`.
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
  const out = { slug: null, id: null, output: null, post: false };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--slug" && argv[i + 1]) {
      out.slug = argv[++i];
    } else if (a === "--id" && argv[i + 1]) {
      out.id = argv[++i];
    } else if (a === "--out" && argv[i + 1]) {
      out.output = argv[++i];
    } else if (a === "--post") {
      out.post = true;
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
  const { slug, id, output, post } = parseArgs();
  if (!slug && !id) {
    console.error(
      "Usage: node scripts/wp-fetch-page.mjs --slug <slug> | --id <id> [--post] [--out <file>]"
    );
    process.exit(1);
  }

  const rest = post ? "posts" : "pages";
  let url;
  if (id) {
    url = `${BASE}/wp-json/wp/v2/${rest}/${encodeURIComponent(id)}?_fields=id,slug,link,title,modified,content`;
  } else {
    url = `${BASE}/wp-json/wp/v2/${rest}?slug=${encodeURIComponent(slug)}&_fields=id,slug,link,title,modified,content`;
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
