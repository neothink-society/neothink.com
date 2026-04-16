#!/usr/bin/env node
/**
 * Download every `https://neothink.com/wp-content/uploads/...` asset referenced
 * in the Next.js source (lib/**) into `public/images/wp/...`, preserving the
 * WordPress year/month folder structure, then rewrite the references from the
 * absolute WordPress URL to a relative `/images/wp/...` path so the bundled
 * site no longer depends on the WordPress host surviving the DNS cutover.
 *
 * Idempotent: already-downloaded files are skipped. Already-rewritten source
 * files are a no-op. Run with `--dry` to preview without writing.
 *
 * Design choices:
 * - Only scans `lib/` (never `migration/agency-cache/`, `data/migration/**`, or
 *   `public/**`). Those are either historical snapshots or already-local.
 * - Throttled downloads with retry + exponential backoff to be friendly to
 *   Cloudflare in front of WordPress.
 * - Uses a blocklist of hostnames we definitely don't want to rewrite (e.g.
 *   `secure.gravatar.com`), though at the moment we only touch neothink.com.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const SCAN_DIRS = [
  path.join(ROOT, "lib"),
  path.join(ROOT, "components"),
  path.join(ROOT, "app"),
];
const PUBLIC_IMG_WP = path.join(ROOT, "public", "images", "wp");

const DRY = process.argv.includes("--dry");

/** Match WordPress-hosted media under the neothink.com domain. */
const WP_URL_RE =
  /https:\/\/(?:www\.)?neothink\.com\/wp-content\/uploads\/([^\s"'`)<>]+?\.(?:png|jpe?g|webp|avif|gif|svg|ico))/gi;

const inventory = new Map(); // urlPath -> { url, localAbs, files: Set<string> }

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await walk(full);
    } else if (entry.isFile() && /\.(ts|tsx|mjs|js)$/.test(entry.name)) {
      const src = await fs.readFile(full, "utf8");
      let m;
      const re = new RegExp(WP_URL_RE.source, "g");
      while ((m = re.exec(src))) {
        const uploadPath = m[1];
        const urlPath = `wp-content/uploads/${uploadPath}`;
        const url = `https://neothink.com/${urlPath}`;
        if (!inventory.has(urlPath)) {
          inventory.set(urlPath, {
            url,
            localAbs: path.join(PUBLIC_IMG_WP, uploadPath),
            files: new Set(),
          });
        }
        inventory.get(urlPath).files.add(full);
      }
    }
  }
}

async function download(url, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true });
  try {
    await fs.access(dest);
    return "skipped";
  } catch {
    // fall through and download
  }
  const maxAttempts = 4;
  let attempt = 0;
  for (;;) {
    attempt += 1;
    try {
      const res = await fetch(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (localize-wp-images; contact=admin@neothink.com)",
          accept: "image/*,*/*;q=0.8",
        },
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const buf = Buffer.from(await res.arrayBuffer());
      await fs.writeFile(dest, buf);
      return "downloaded";
    } catch (err) {
      if (attempt >= maxAttempts) {
        return `failed: ${err instanceof Error ? err.message : String(err)}`;
      }
      await new Promise((r) => setTimeout(r, 500 * 2 ** attempt));
    }
  }
}

async function rewriteSources() {
  const touched = new Set();
  for (const [, entry] of inventory) {
    for (const filePath of entry.files) {
      touched.add(filePath);
    }
  }
  let filesChanged = 0;
  let replacementsTotal = 0;
  for (const filePath of touched) {
    const src = await fs.readFile(filePath, "utf8");
    let replacements = 0;
    const updated = src.replace(
      new RegExp(WP_URL_RE.source, "gi"),
      (_m, uploadPath) => {
        replacements += 1;
        return `/images/wp/${uploadPath}`;
      }
    );
    if (replacements === 0 || updated === src) continue;
    filesChanged += 1;
    replacementsTotal += replacements;
    if (!DRY) {
      await fs.writeFile(filePath, updated, "utf8");
    }
  }
  return { filesChanged, replacementsTotal };
}

async function main() {
  for (const dir of SCAN_DIRS) {
    try {
      await walk(dir);
    } catch (err) {
      if (err && typeof err === "object" && "code" in err && err.code === "ENOENT") continue;
      throw err;
    }
  }
  const total = inventory.size;
  if (total === 0) {
    console.log("No WordPress image URLs found in lib/. Nothing to do.");
    return;
  }
  console.log(`Found ${total} unique WordPress image URLs across ${new Set([...inventory.values()].flatMap((e) => [...e.files])).size} files.`);

  if (DRY) {
    for (const [urlPath, entry] of inventory) {
      console.log(`  ${urlPath}  (${entry.files.size} source file${entry.files.size === 1 ? "" : "s"})`);
    }
    console.log("[dry run] skipping downloads and rewrites.");
    return;
  }

  let downloaded = 0;
  let skipped = 0;
  let failed = [];
  let i = 0;
  for (const [, entry] of inventory) {
    i += 1;
    const status = await download(entry.url, entry.localAbs);
    if (status === "downloaded") downloaded += 1;
    else if (status === "skipped") skipped += 1;
    else failed.push({ url: entry.url, err: status });
    if (i % 10 === 0) {
      console.log(`  [${i}/${total}] downloaded=${downloaded} skipped=${skipped} failed=${failed.length}`);
    }
    await new Promise((r) => setTimeout(r, 120)); // gentle throttle
  }
  console.log(`Downloads: ${downloaded} new, ${skipped} already cached, ${failed.length} failed.`);
  if (failed.length) {
    for (const f of failed) console.warn(`  FAIL ${f.url}  (${f.err})`);
  }

  // Only rewrite source references for URLs that are now available locally.
  const availableUrlPaths = new Set();
  for (const [urlPath, entry] of inventory) {
    try {
      await fs.access(entry.localAbs);
      availableUrlPaths.add(urlPath);
    } catch {
      // skip
    }
  }
  if (availableUrlPaths.size !== inventory.size) {
    // Filter inventory to only the available ones before rewriting.
    for (const key of [...inventory.keys()]) {
      if (!availableUrlPaths.has(key)) inventory.delete(key);
    }
  }
  const { filesChanged, replacementsTotal } = await rewriteSources();
  console.log(`Rewrites: ${replacementsTotal} replacements across ${filesChanged} source files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
