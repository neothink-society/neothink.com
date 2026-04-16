#!/usr/bin/env node
/**
 * Regenerate Elementor body fragments for Neothink Philosophy & Neothink Concepts long-form posts.
 * Requires migration/source/<slug>.html from wp-fetch-page.mjs.
 *
 *   pnpm migration:philosophy-body
 */
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

const PATH_MAP = {
  "/": "/",
  "/about": "/about",
  "/programs": "/programs",
  "/neothink-coaching-programs": "/programs",
  "/freedom-from-rights": "/freedom-from-rights",
  "/prime-law": "/prime-law",
  "/immortalis": "/immortalis",
  "/neovia": "/neovia",
  "/twelve-visions-party": "/twelve-visions-party",
  "/the-movement": "/the-movement",
  "/neothink-university": "/neothink-university",
  "/integrated-thinking": "/integrated-thinking",
  "/free-courses": "/free-courses",
  "/contact": "/contact",
  "/faq": "/faq",
  "/neothink-mastermind-group-success-stories": "/neothink-mastermind-group-success-stories",
  "/neothink-movement-financial-independence": "/neothink-movement-financial-independence",
  "/freedom-key-to-unlocking-true-wealth": "/freedom-key-to-unlocking-true-wealth",
  "/reprogram-mind-to-be-rich": "/reprogram-mind-to-be-rich",
  "/mark-hamiltons-neothink-surprising-logic": "/mark-hamiltons-neothink-surprising-logic",
  "/truth-about-neothink-society": "/truth-about-neothink-society",
  "/value-creator": "/value-creator",
  "/mark-hamiltons-story": "/mark-hamiltons-story",
  "/immortalis-the-great-experiment-of-our-time": "/immortalis-the-great-experiment-of-our-time",
  "/the-city-that-cures-disease-neovia": "/the-city-that-cures-disease-neovia",
  "/the-missing-key-to-universal-prosperity": "/the-missing-key-to-universal-prosperity",
  "/the-greatest-mental-breakthrough": "/the-greatest-mental-breakthrough",
  "/a-knight-in-shining-armor-immortalis": "/a-knight-in-shining-armor-immortalis",
  "/self-leader-secret": "/self-leader-secret",
  "/friday-night-essence": "/friday-night-essence",
  "/land-based-immortalis": "/land-based-immortalis",
  "/libertarians-next-big-possibility": "/libertarians-next-big-possibility",
  "/mont-pelerin-pivot-into-our-essence": "/mont-pelerin-pivot-into-our-essence",
  "/the-grand-experiment-of-our-time": "/the-grand-experiment-of-our-time",
  "/category/neothink-philosophy": "/category/neothink-philosophy",
  "/breaking-the-chains-on-consciousness": "/breaking-the-chains-on-consciousness",
  "/the-unbreakable-equation": "/the-unbreakable-equation",
  "/what-all-philosophies-get-wrong": "/what-all-philosophies-get-wrong",
  "/how-neothink-brings-you-world-of-prosperity": "/how-neothink-brings-you-world-of-prosperity",
  "/the-cult-you-never-knew-existed": "/the-cult-you-never-knew-existed",
  "/how-every-individual-can-be-wealthy": "/how-every-individual-can-be-wealthy",
  "/a-new-country-the-great-experiment-called-immortalis":
    "/a-new-country-the-great-experiment-called-immortalis",
  "/the-beautiful-vs-the-ugly-in-our-world-3": "/the-beautiful-vs-the-ugly-in-our-world-3",
  "/how-jobs-will-change": "/how-jobs-will-change",
  "/decoding-super-puzzle": "/decoding-super-puzzle",
  "/starting-our-own-country": "/starting-our-own-country",
  "/live-longer": "/live-longer",
  "/the-two-obstacles-to-curing-aging": "/the-two-obstacles-to-curing-aging",
  "/spreading-immortalis-to-world-leaders": "/spreading-immortalis-to-world-leaders",
  "/building-the-engine-behind-immortalis": "/building-the-engine-behind-immortalis",
  "/the-job-revolution": "/the-job-revolution",
  "/the-2400-year-mistake": "/the-2400-year-mistake",
  "/strategic-briefing-for-presidents": "/strategic-briefing-for-presidents",
  "/the-year-capitalism-sets-the-world-free": "/the-year-capitalism-sets-the-world-free",
  "/creating-the-demand-to-live-forever": "/creating-the-demand-to-live-forever",
  "/illusion-pollution": "/illusion-pollution",
  /** Neothink Mentality & legacy marketing slugs → canonical routes */
  "/rise-from-rut": "/rise-from-rut",
  "/integrated-thinking-see-what-specialists-miss": "/integrated-thinking",
  "/future-of-humanity-everything-free": "/the-job-revolution",
  "/never-be-manipulated-again": "/illusion-pollution",
  "/read-this-to-never-be-manipulated-again": "/illusion-pollution",
  "/freeing-hidden-geniuses-elon-musk": "/immortalis",
  "/secret-society-reveals-civilizations-hope": "/the-cult-you-never-knew-existed",
  "/mark-hamilton-luck-350-million": "/mark-hamiltons-story",
  "/thriving-career-overcoming-burnout": "/the-missing-key-to-universal-prosperity",
};

function norm(p) {
  if (!p || p === "/") return "/";
  let x = p.replace(/\/+$/, "") || "/";
  if (!x.startsWith("/")) x = `/${x}`;
  return x;
}

function lookupPath(n) {
  return PATH_MAP[n] || PATH_MAP[`${n}/`] || PATH_MAP[n.replace(/\/$/, "")];
}

function extractBetween(html, startId, endId) {
  const i0 = html.indexOf(`data-id="${startId}"`);
  if (i0 < 0) throw new Error(`missing start ${startId}`);
  const i = html.lastIndexOf("<div", i0);
  const j0 = html.indexOf(`data-id="${endId}"`);
  if (j0 < 0) throw new Error(`missing end ${endId}`);
  const j = html.lastIndexOf("<div", j0);
  return html.slice(i, j).trim();
}

function rewrite(html) {
  let h = html.replace(
    /href=(["'])https?:\/\/neothink\.com(\/[^"'#?]*)(#[^"']*)?\1/gi,
    (full, q, pathPart, hash) => {
      const n = norm(pathPart || "/");
      const dest = lookupPath(n);
      if (dest) return `href=${q}${dest}${hash || ""}${q}`;
      return full;
    }
  );
  h = h.replace(/href=(["'])\/([^"'#?]+)(#[^"']*)?\1/gi, (full, q, raw, hash) => {
    const n = norm(`/${raw}`);
    const dest = lookupPath(n);
    if (dest) return `href=${q}${dest}${hash || ""}${q}`;
    const tail = raw.replace(/^\//, "");
    return `href=${q}https://neothink.com/${tail}${hash || ""}${q}`;
  });
  return h;
}

const esc = (s) => s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${");

const jobs = [
  {
    slug: "mark-hamiltons-story",
    constName: "MARK_HAMILTONS_STORY_BODY_HTML",
    outFile: "lib/mark-hamiltons-story-body-html.ts",
    startId: "05a72f2",
    endId: "9f5a680",
  },
  {
    slug: "the-city-that-cures-disease-neovia",
    constName: "NEOVIA_SPEECH_BODY_HTML",
    outFile: "lib/the-city-that-cures-disease-neovia-body-html.ts",
    startId: "fd01c35",
    endId: "386f134",
  },
  {
    slug: "immortalis-the-great-experiment-of-our-time",
    constName: "IMMORTALIS_GREAT_EXPERIMENT_BODY_HTML",
    outFile: "lib/immortalis-the-great-experiment-body-html.ts",
    startId: "8db9def",
    endId: "f9b116e",
  },
  {
    slug: "the-missing-key-to-universal-prosperity",
    constName: "MISSING_KEY_UNIVERSAL_PROSPERITY_BODY_HTML",
    outFile: "lib/the-missing-key-to-universal-prosperity-body-html.ts",
    startId: "4568dce",
    endId: "fe5c2d3",
  },
  {
    slug: "the-greatest-mental-breakthrough",
    constName: "GREATEST_MENTAL_BREAKTHROUGH_BODY_HTML",
    outFile: "lib/the-greatest-mental-breakthrough-body-html.ts",
    startId: "ope5n9ce",
    endId: "7fqv7pxl",
  },
  {
    slug: "a-knight-in-shining-armor-immortalis",
    constName: "KNIGHT_IMMORTALIS_BODY_HTML",
    outFile: "lib/a-knight-in-shining-armor-immortalis-body-html.ts",
    startId: "fa4d8bd",
    endId: "d276150",
  },
  {
    slug: "friday-night-essence",
    constName: "FRIDAY_NIGHT_ESSENCE_BODY_HTML",
    outFile: "lib/friday-night-essence-body-html.ts",
    startId: "b2eb876",
    endId: "a547647",
  },
  {
    slug: "self-leader-secret",
    constName: "SELF_LEADER_SECRET_BODY_HTML",
    outFile: "lib/self-leader-secret-body-html.ts",
    startId: "f1def32",
    endId: "57e4682",
  },
  {
    slug: "integrated-thinking",
    constName: "INTEGRATED_THINKING_BODY_HTML",
    outFile: "lib/integrated-thinking-body-html.ts",
    startId: "ec6351c",
    endId: "8a14740",
  },
  {
    slug: "value-creator",
    constName: "VALUE_CREATOR_BODY_HTML",
    outFile: "lib/value-creator-body-html.ts",
    startId: "5a2aeb9",
    endId: "f1dff83",
  },
  {
    slug: "land-based-immortalis",
    constName: "LAND_BASED_IMMORTALIS_BODY_HTML",
    outFile: "lib/land-based-immortalis-body-html.ts",
    startId: "d131e91",
    endId: "4b60b52",
  },
  {
    slug: "libertarians-next-big-possibility",
    constName: "LIBERTARIANS_NEXT_BIG_POSSIBILITY_BODY_HTML",
    outFile: "lib/libertarians-next-big-possibility-body-html.ts",
    startId: "f42a7aa",
    endId: "a43e73d",
  },
  {
    slug: "mont-pelerin-pivot-into-our-essence",
    constName: "MONT_PELERIN_PIVOT_INTO_OUR_ESSENCE_BODY_HTML",
    outFile: "lib/mont-pelerin-pivot-into-our-essence-body-html.ts",
    startId: "5208087",
    endId: "0543f13",
  },
  {
    slug: "the-grand-experiment-of-our-time",
    constName: "THE_GRAND_EXPERIMENT_OF_OUR_TIME_BODY_HTML",
    outFile: "lib/the-grand-experiment-of-our-time-body-html.ts",
    startId: "b041d8f",
    endId: "1c59aae",
  },
  {
    slug: "breaking-the-chains-on-consciousness",
    constName: "BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_BODY_HTML",
    outFile: "lib/breaking-the-chains-on-consciousness-body-html.ts",
    startId: "e775752",
    endId: "d740239",
  },
  {
    slug: "the-unbreakable-equation",
    constName: "THE_UNBREAKABLE_EQUATION_BODY_HTML",
    outFile: "lib/the-unbreakable-equation-body-html.ts",
    startId: "e61ba49",
    endId: "6dd25f4",
  },
  {
    slug: "what-all-philosophies-get-wrong",
    constName: "WHAT_ALL_PHILOSOPHIES_GET_WRONG_BODY_HTML",
    outFile: "lib/what-all-philosophies-get-wrong-body-html.ts",
    startId: "kno2yf7p",
    endId: "62h4xag4",
  },
  {
    slug: "how-neothink-brings-you-world-of-prosperity",
    constName: "HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_BODY_HTML",
    outFile: "lib/how-neothink-brings-you-world-of-prosperity-body-html.ts",
    startId: "d27bea15",
    endId: "c685e6c8",
  },
  {
    slug: "the-cult-you-never-knew-existed",
    constName: "THE_CULT_YOU_NEVER_KNEW_EXISTED_BODY_HTML",
    outFile: "lib/the-cult-you-never-knew-existed-body-html.ts",
    startId: "770cf2a",
    endId: "8eb429b",
  },
  {
    slug: "how-every-individual-can-be-wealthy",
    constName: "HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_BODY_HTML",
    outFile: "lib/how-every-individual-can-be-wealthy-body-html.ts",
    startId: "e735828",
    endId: "48574aa",
  },
  {
    slug: "a-new-country-the-great-experiment-called-immortalis",
    constName: "A_NEW_COUNTRY_THE_GREAT_EXPERIMENT_CALLED_IMMORTALIS_BODY_HTML",
    outFile: "lib/a-new-country-the-great-experiment-called-immortalis-body-html.ts",
    startId: "abcde6c",
    endId: "2dae69b",
  },
  {
    slug: "the-beautiful-vs-the-ugly-in-our-world-3",
    constName: "THE_BEAUTIFUL_VS_THE_UGLY_IN_OUR_WORLD_3_BODY_HTML",
    outFile: "lib/the-beautiful-vs-the-ugly-in-our-world-3-body-html.ts",
    startId: "a36c428",
    endId: "c964ef4",
  },
  {
    slug: "how-jobs-will-change",
    constName: "HOW_JOBS_WILL_CHANGE_BODY_HTML",
    outFile: "lib/how-jobs-will-change-body-html.ts",
    startId: "04876e9",
    endId: "893427d",
  },
  {
    slug: "decoding-super-puzzle",
    constName: "DECODING_SUPER_PUZZLE_BODY_HTML",
    outFile: "lib/decoding-super-puzzle-body-html.ts",
    startId: "470cbee",
    endId: "a2d94ed",
  },
  {
    slug: "starting-our-own-country",
    constName: "STARTING_OUR_OWN_COUNTRY_BODY_HTML",
    outFile: "lib/starting-our-own-country-body-html.ts",
    startId: "2b67209",
    endId: "d22cb7d",
  },
  {
    slug: "live-longer",
    constName: "LIVE_LONGER_BODY_HTML",
    outFile: "lib/live-longer-body-html.ts",
    startId: "703957f",
    endId: "2031d45",
  },
  {
    slug: "the-two-obstacles-to-curing-aging",
    constName: "THE_TWO_OBSTACLES_TO_CURING_AGING_BODY_HTML",
    outFile: "lib/the-two-obstacles-to-curing-aging-body-html.ts",
    startId: "714cc47",
    endId: "a597617",
  },
  {
    slug: "spreading-immortalis-to-world-leaders",
    constName: "SPREADING_IMMORTALIS_TO_WORLD_LEADERS_BODY_HTML",
    outFile: "lib/spreading-immortalis-to-world-leaders-body-html.ts",
    startId: "fcaad17",
    endId: "1a0c8c7",
  },
  {
    slug: "building-the-engine-behind-immortalis",
    constName: "BUILDING_THE_ENGINE_BEHIND_IMMORTALIS_BODY_HTML",
    outFile: "lib/building-the-engine-behind-immortalis-body-html.ts",
    startId: "0d7bd18",
    endId: "e25ba58",
  },
  {
    slug: "the-job-revolution",
    constName: "THE_JOB_REVOLUTION_BODY_HTML",
    outFile: "lib/the-job-revolution-body-html.ts",
    startId: "65f7195",
    endId: "2292710",
  },
  {
    slug: "the-2400-year-mistake",
    constName: "THE_2400_YEAR_MISTAKE_BODY_HTML",
    outFile: "lib/the-2400-year-mistake-body-html.ts",
    startId: "bbe7acb",
    endId: "de14837",
  },
  {
    slug: "strategic-briefing-for-presidents",
    constName: "STRATEGIC_BRIEFING_FOR_PRESIDENTS_BODY_HTML",
    outFile: "lib/strategic-briefing-for-presidents-body-html.ts",
    startId: "efa40d2",
    endId: "d7bf97e",
  },
  {
    slug: "the-year-capitalism-sets-the-world-free",
    constName: "THE_YEAR_CAPITALISM_SETS_THE_WORLD_FREE_BODY_HTML",
    outFile: "lib/the-year-capitalism-sets-the-world-free-body-html.ts",
    startId: "4882742",
    endId: "54fcf3e",
  },
  {
    slug: "creating-the-demand-to-live-forever",
    constName: "CREATING_THE_DEMAND_TO_LIVE_FOREVER_BODY_HTML",
    outFile: "lib/creating-the-demand-to-live-forever-body-html.ts",
    startId: "22d6fc5",
    endId: "2d40a8e",
  },
  {
    slug: "illusion-pollution",
    constName: "ILLUSION_POLLUTION_BODY_HTML",
    outFile: "lib/illusion-pollution-body-html.ts",
    startId: "3b54273",
    endId: "c846fe1",
  },
];

for (const job of jobs) {
  const src = readFileSync(path.join(ROOT, `migration/source/${job.slug}.html`), "utf8");
  const body = rewrite(extractBetween(src, job.startId, job.endId));
  writeFileSync(
    path.join(ROOT, job.outFile),
    `/**\n * Elementor body fragment for ${job.slug}. Regenerate: pnpm migration:philosophy-body\n */\nexport const ${job.constName} = \`${esc(body)}\`;\n`
  );
  console.log(job.outFile, body.length);
}
