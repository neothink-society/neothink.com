#!/usr/bin/env node
/**
 * Add `videoObjectJsonLd` + script tag to blog `page.tsx` files that have
 * `*_YOUTUBE_ID` in `*-data.ts` but no `videoObjectJsonLd` import yet.
 *
 * Uses the same `datePublished` time pattern as the existing `blogPostingJsonLd`
 * block. Idempotent.
 */
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const SLUGS = [
  "a-knight-in-shining-armor-immortalis",
  "a-society-without-politics-poverty-or-war",
  "aliens-real-never-visit-earth",
  "are-we-the-illuminati-truth",
  "escape-the-matrix-now",
  "finding-achieving-your-life-purpose",
  "freedom-key-to-unlocking-true-wealth",
  "how-to-be-a-leader-the-one-thing-holding-you-back",
  "how-to-raise-a-genius",
  "mark-hamiltons-story",
  "new-country-with-no-taxes",
  "philosopher-make-your-life-exciting-again-do-this",
  "reprogram-mind-to-be-rich",
  "separating-heroes-from-dreamers",
  "the-city-that-cures-disease-neovia",
  "the-future-of-humanity-building-a-new-country-without-rulers",
  "the-greatest-mental-breakthrough",
  "the-missing-key-to-universal-prosperity",
  "the-secret-to-a-wealthy-healthy-peaceful-country",
  "think-like-elon-musk-mind-hacks",
  "this-is-how-close-we-are-to-biological-immortality",
  "trumps-victory-beginning-new-era",
  "universal-wealth-secrets-the-solution-exposed",
  "why-neothink-makes-you-irresistible",
  "youre-being-manipulated-they-use-guilt-to-control-you",
];

function patchSlug(appSlug) {
  const pagePath = path.join(root, "app", appSlug, "page.tsx");
  const dataPath = path.join(root, "lib", `${appSlug}-data.ts`);
  let src = fs.readFileSync(pagePath, "utf8");
  if (src.includes("videoObjectJsonLd")) return "skip-has";
  const data = fs.readFileSync(dataPath, "utf8");
  const yt = data.match(/export const (\w+_YOUTUBE_ID) = "/);
  if (!yt) return "skip-no-yt";
  const youtubeConst = yt[1];
  const prefix = youtubeConst.replace(/_YOUTUBE_ID$/, "");
  const metaTitleConst = `${prefix}_META_TITLE`;
  const datesConst = `${prefix}_DATES`;
  if (!data.includes(`export const ${metaTitleConst}`)) {
    throw new Error(`${appSlug}: missing ${metaTitleConst}`);
  }
  if (!data.includes(`export const ${datesConst}`)) {
    throw new Error(`${appSlug}: missing ${datesConst}`);
  }

  src = src.replace(
    "faqPageJsonLd,\n  webPageJsonLd,",
    "faqPageJsonLd,\n  videoObjectJsonLd,\n  webPageJsonLd,"
  );

  const pathIdent = `${prefix}_PATH`;
  if (!src.includes(youtubeConst)) {
    const pathLine = `  ${pathIdent},`;
    if (src.includes(pathLine + "\n")) {
      src = src.replace(pathLine + "\n", pathLine + "\n  " + youtubeConst + ",\n");
    } else {
      const escSlug = appSlug.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      const oneLine = new RegExp(
        `(\\b${pathIdent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})(\\s*\\}\\s*from "@/lib/${escSlug}-data")`
      );
      if (!oneLine.test(src)) throw new Error(`${appSlug}: cannot insert ${youtubeConst} into data import`);
      src = src.replace(oneLine, `$1, ${youtubeConst}$2`);
    }
  }

  const bp = src.indexOf("blogPostingJsonLd({");
  if (bp === -1) throw new Error(`${appSlug}: no blogPostingJsonLd`);
  const chunk = src.slice(bp, bp + 1200);
  const dpm = chunk.match(/datePublished: `([^`]+)`/);
  if (!dpm) throw new Error(`${appSlug}: no datePublished in blogPostingJsonLd`);
  const uploadInner = dpm[1];

  const videoBlock = `const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: \`\${${metaTitleConst}} — video | Neothink Institute\`,
  description: DESCRIPTION,
  embedUrl: \`https://www.youtube.com/embed/\${${youtubeConst}}\`,
  thumbnailUrl: \`https://i.ytimg.com/vi/\${${youtubeConst}}/maxresdefault.jpg\`,
  uploadDate: \`${uploadInner}\`,
  contentUrl: \`https://www.youtube.com/watch?v=\${${youtubeConst}}\`,
  speakerId: schemaIds.founder,
});

`;

  if (src.includes("const videoLd = videoObjectJsonLd")) return "skip-dup";

  src = src.replace(
    /(const faqLd = faqPageJsonLd\([^)]+\);\n)/,
    `$1\n${videoBlock}`
  );

  src = src.replace(
    /(<script type="application\/ld\+json" dangerouslySetInnerHTML=\{\{ __html: JSON.stringify\(faqLd\) \}\} \/>)\n/,
    `$1\n      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />\n`
  );

  fs.writeFileSync(pagePath, src);
  return "ok";
}

const stats = {};
for (const s of SLUGS) {
  const r = patchSlug(s);
  stats[r] = (stats[r] || 0) + 1;
}
console.log(stats);
