#!/usr/bin/env node
/**
 * For each Neothink Awakening slug, scaffold:
 *   - components/<slug>/<slug>-page-content.tsx  (thin wrapper around shared
 *     NeothinkAwakeningArticle component)
 *   - app/<slug>/page.tsx                        (metadata + JSON-LD)
 *
 * Assumes lib/<slug>-data.ts, lib/<slug>-faq.ts, and lib/<slug>-body-html.ts
 * already exist (run `generate-awakening-data.mjs --write` and
 * `extract-awakening-bodies.mjs` first).
 *
 *   node scripts/scaffold-awakening-pages.mjs                   # dry-run
 *   node scripts/scaffold-awakening-pages.mjs --write           # write files
 *   node scripts/scaffold-awakening-pages.mjs --write --force   # overwrite
 *   node scripts/scaffold-awakening-pages.mjs --write --only new-country-with-no-taxes
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const args = process.argv.slice(2);
const WRITE = args.includes("--write");
const FORCE = args.includes("--force");
const ONLY_IDX = args.indexOf("--only");
const ONLY = ONLY_IDX >= 0 ? args[ONLY_IDX + 1] : null;

const CONST_PREFIX = {
  "universal-wealth-secrets-the-solution-exposed": "UWSSE",
  "the-secret-to-a-wealthy-healthy-peaceful-country": "SWHPC",
  "separating-heroes-from-dreamers": "SHFD",
  "how-to-be-a-leader-the-one-thing-holding-you-back": "HBL1TH",
  "philosopher-make-your-life-exciting-again-do-this": "PMLEA",
  "a-society-without-politics-poverty-or-war": "SWPPW",
  "the-future-of-humanity-building-a-new-country-without-rulers": "FHBNCWR",
  "this-is-how-close-we-are-to-biological-immortality": "HCBI",
  "youre-being-manipulated-they-use-guilt-to-control-you": "YBMG",
  "escape-the-matrix-now": "EMN",
  "finding-achieving-your-life-purpose": "FAYLP",
  "think-like-elon-musk-mind-hacks": "TLEMMH",
  "new-country-with-no-taxes": "NCNT",
  "why-neothink-makes-you-irresistible": "WNMYI",
  "sell-anything-marketing-secret": "SAMS",
  "trumps-victory-beginning-new-era": "TVBNE",
  "aliens-real-never-visit-earth": "ARNV",
  "are-we-the-illuminati-truth": "AWTI",
  "how-to-raise-a-genius": "HTRG",
};

const WP_ROUTE_KEY = {
  "universal-wealth-secrets-the-solution-exposed": "universalWealthSecretsTheSolutionExposed",
  "the-secret-to-a-wealthy-healthy-peaceful-country": "theSecretToAWealthyHealthyPeacefulCountry",
  "separating-heroes-from-dreamers": "separatingHeroesFromDreamers",
  "how-to-be-a-leader-the-one-thing-holding-you-back": "howToBeALeaderTheOneThingHoldingYouBack",
  "philosopher-make-your-life-exciting-again-do-this": "philosopherMakeYourLifeExcitingAgainDoThis",
  "a-society-without-politics-poverty-or-war": "aSocietyWithoutPoliticsPovertyOrWar",
  "the-future-of-humanity-building-a-new-country-without-rulers": "theFutureOfHumanityBuildingANewCountryWithoutRulers",
  "this-is-how-close-we-are-to-biological-immortality": "thisIsHowCloseWeAreToBiologicalImmortality",
  "youre-being-manipulated-they-use-guilt-to-control-you": "yourBeingManipulatedGuiltToControlYou",
  "escape-the-matrix-now": "escapeTheMatrixNow",
  "finding-achieving-your-life-purpose": "findingAchievingYourLifePurpose",
  "think-like-elon-musk-mind-hacks": "thinkLikeElonMuskMindHacks",
  "new-country-with-no-taxes": "newCountryWithNoTaxes",
  "why-neothink-makes-you-irresistible": "whyNeothinkMakesYouIrresistible",
  "sell-anything-marketing-secret": "sellAnythingMarketingSecret",
  "trumps-victory-beginning-new-era": "trumpsVictoryBeginningNewEra",
  "aliens-real-never-visit-earth": "aliensRealNeverVisitEarth",
  "are-we-the-illuminati-truth": "areWeTheIlluminatiTruth",
  "how-to-raise-a-genius": "howToRaiseAGenius",
};

function pascal(slug) {
  return slug
    .split("-")
    .map((s) => (s ? s[0].toUpperCase() + s.slice(1) : ""))
    .join("");
}

function upperSnake(slug) {
  return slug.replace(/[^a-z0-9]+/gi, "_").toUpperCase();
}

function titleCaseFromH1(h1) {
  return h1
    .replace(/[^a-zA-Z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function readDataConstants(slug) {
  const P = CONST_PREFIX[slug];
  const dataPath = path.join(ROOT, "lib", `${slug}-data.ts`);
  const src = readFileSync(dataPath, "utf8");

  const headlineMatch = src.match(new RegExp(`${P}_HEADLINE\\s*=\\s*"([^"]+)"`));
  const metaTitleMatch = src.match(new RegExp(`${P}_META_TITLE\\s*=\\s*"([^"]+)"`));
  const pubMatch = src.match(/datePublished:\s*"([^"]+)"/);
  const modMatch = src.match(/dateModified:\s*"([^"]+)"/);
  const youtubeHas = /YOUTUBE_ID = ".+"/.test(src);
  const leadHas = new RegExp(`${P}_QUICK_ANSWER_LEAD_STRONG\\s*=\\s*"`).test(src);
  return {
    headline: headlineMatch?.[1] || slug,
    metaTitle: metaTitleMatch?.[1] || slug,
    datePublished: pubMatch?.[1] || "2026-02-11",
    dateModified: modMatch?.[1] || "2026-02-12",
    hasYoutube: youtubeHas,
    hasLead: leadHas,
  };
}

function componentSource(slug) {
  const P = CONST_PREFIX[slug];
  const U = upperSnake(slug); // Used for body-html const name
  const Component = pascal(slug) + "PageContent";
  const d = readDataConstants(slug);

  return `import { NeothinkAwakeningArticle } from "@/components/neothink-awakening/neothink-awakening-article";
import { ${U}_BODY_HTML } from "@/lib/${slug}-body-html";
import {
  ${P}_HEADLINE,
  ${P}_IMAGE,
  ${P}_INTRO_PARAS,
  ${P}_MIN_READ,
  ${P}_QUICK_ANSWER_KICKER,${d.hasLead ? `\n  ${P}_QUICK_ANSWER_LEAD_STRONG,` : ""}
  ${P}_QUICK_ANSWER_REST,
  ${P}_QUICK_ANSWER_TITLE,${d.hasYoutube ? `\n  ${P}_YOUTUBE_ID,` : ""}
} from "@/lib/${slug}-data";
import { ${P}_FAQ } from "@/lib/${slug}-faq";

export function ${Component}() {
  return (
    <NeothinkAwakeningArticle
      slugPrefix="${P.toLowerCase()}"
      headline={${P}_HEADLINE}
      introParas={${P}_INTRO_PARAS}
      image={${P}_IMAGE}
      minReadLabel={${P}_MIN_READ}${d.hasYoutube ? `\n      youtubeId={${P}_YOUTUBE_ID}` : ""}
      videoTitle={\`\${${P}_HEADLINE} — Mark Hamilton\`}
      quickAnswer={{
        kicker: ${P}_QUICK_ANSWER_KICKER,
        title: ${P}_QUICK_ANSWER_TITLE,${d.hasLead ? `\n        leadStrong: ${P}_QUICK_ANSWER_LEAD_STRONG,` : ""}
        rest: ${d.hasLead ? `<> {${P}_QUICK_ANSWER_REST}</>` : `${P}_QUICK_ANSWER_REST`},
      }}
      bodyHtml={${U}_BODY_HTML}
      faq={${P}_FAQ}
      related={DEFAULT_RELATED}
    />
  );
}

const DEFAULT_RELATED = [
  {
    title: "Neothink Awakening",
    description: "All articles in the series.",
    href: "/category/neothink-awakening",
  },
  {
    title: "Freedom & true wealth",
    description: "Awakening companion on Prime Law, Immortalis.",
    href: "/freedom-key-to-unlocking-true-wealth",
  },
  {
    title: "Reprogram your mind",
    description: "Awakening companion on Neothink thinking.",
    href: "/reprogram-mind-to-be-rich",
  },
  {
    title: "Neothink Mentality",
    description: "Structured public course.",
    href: "/neothink-mentality",
  },
] as const;
`;
}

function pageSource(slug) {
  const P = CONST_PREFIX[slug];
  const Component = pascal(slug) + "PageContent";
  const d = readDataConstants(slug);
  const breadcrumbLabel = shortLabel(d.headline);

  return `import { ${Component} } from "@/components/${slug}/${slug}-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  ${P}_DATES,
  ${P}_IMAGE,
  ${P}_META_TITLE,
  ${P}_PATH,
  ${P}_QUICK_ANSWER_REST,
} from "@/lib/${slug}-data";
import { ${P}_FAQ } from "@/lib/${slug}-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = ${P}_PATH;
const CANONICAL = \`\${siteConfig.url}\${PATH}\`;

const DESCRIPTION = ${P}_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#${P.toLowerCase()}-intro-lead",
  "#${P.toLowerCase()}-quick-title",
  "#${P.toLowerCase()}-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: \`\${${P}_META_TITLE} | Neothink Institute\`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: \`\${${P}_DATES.datePublished}T12:00:00.000Z\`,
    modifiedTime: \`\${${P}_DATES.dateModified}T12:00:00.000Z\`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: ${JSON.stringify(breadcrumbLabel)}, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: \`\${${P}_META_TITLE} | Neothink Institute\`,
  description: DESCRIPTION,
  datePublished: \`\${${P}_DATES.datePublished}T12:00:00.000Z\`,
  dateModified: \`\${${P}_DATES.dateModified}T12:00:00.000Z\`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: \`\${CANONICAL}#article\`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: ${P}_META_TITLE,
  description: DESCRIPTION,
  datePublished: \`\${${P}_DATES.datePublished}T12:00:00.000Z\`,
  dateModified: \`\${${P}_DATES.dateModified}T12:00:00.000Z\`,
  authorId: schemaIds.organization,
  image: ${P}_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, ${P}_FAQ);

export default function ${pascal(slug)}Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <${Component} />
    </>
  );
}
`;
}

function shortLabel(h1) {
  // Use the full headline for breadcrumbs; only strip content after a colon
  // since "Title: Subtitle" patterns get noisy. Do not truncate mid-word.
  return h1.split(/[:—–]/)[0].trim();
}

function writeIfNeeded(p, contents) {
  if (!WRITE) {
    console.log(`dry ${path.relative(ROOT, p)} (${contents.length} bytes)`);
    return;
  }
  if (!FORCE && existsSync(p)) {
    console.log(`keep ${path.relative(ROOT, p)}`);
    return;
  }
  mkdirSync(path.dirname(p), { recursive: true });
  writeFileSync(p, contents);
  console.log(`wrote ${path.relative(ROOT, p)}`);
}

const ALL_SLUGS = Object.keys(CONST_PREFIX).filter(
  // Skip the hand-tuned article; its files are never regenerated.
  (s) => s !== "how-to-raise-a-genius",
);
const slugs = ONLY ? [ONLY] : ALL_SLUGS;
for (const slug of slugs) {
  try {
    const compPath = path.join(ROOT, "components", slug, `${slug}-page-content.tsx`);
    const pagePath = path.join(ROOT, "app", slug, "page.tsx");
    writeIfNeeded(compPath, componentSource(slug));
    writeIfNeeded(pagePath, pageSource(slug));
  } catch (err) {
    console.error(`ERR ${slug}: ${err.message}`);
  }
}
