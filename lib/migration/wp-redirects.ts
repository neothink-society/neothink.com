import type { Redirect } from "next/dist/lib/load-custom-routes";

/**
 * WordPress often exposes multiple URLs for the same page (draft duplicates, `/page-2/`, etc.).
 * These 301s point search and bookmarks at the canonical Next.js routes in this app.
 *
 * Add pairs with `slugPair` so both trailing and non-trailing WP URLs match.
 * See `data/migration/url-inventory-gsc-merged.json` for traffic priority.
 */
function slugPair(sourceBase: string, destination: string): Redirect[] {
  const s = sourceBase.replace(/\/$/, "");
  const d = destination === "/" ? "/" : destination.replace(/\/$/, "");
  return [
    { source: s, destination: d, permanent: true },
    { source: `${s}/`, destination: d, permanent: true },
  ];
}

export const wpRedirects: Redirect[] = [
  {
    source: "/category/neothink-philosophy/",
    destination: "/category/neothink-philosophy",
    permanent: true,
  },
  {
    source: "/category/neothink-awakening/",
    destination: "/category/neothink-awakening",
    permanent: true,
  },
  {
    source: "/category/neothink-concepts/",
    destination: "/category/neothink-concepts",
    permanent: true,
  },
  {
    source: "/category/neothink-mentality/",
    destination: "/category/neothink-mentality",
    permanent: true,
  },
  ...slugPair(
    "/how-the-neothink-secret-society-differs-from-other-secret-groups",
    "/neothink-secret-society-differs-other-groups"
  ),
  ...slugPair("/about-us", "/about"),
  ...slugPair("/the-prime-law", "/prime-law"),
  ...slugPair("/prime-law-5", "/prime-law"),
  ...slugPair("/the-way-9", "/the-way"),
  ...slugPair("/published-work-9", "/published-work"),
  ...slugPair("/neothink-9", "/neothink"),
  ...slugPair("/neovia-9", "/neovia"),
  ...slugPair("/unified-field-9", "/unified-field"),
  ...slugPair("/podcast-2", "/podcast"),
  ...slugPair("/podcast-list", "/podcast"),
  ...slugPair("/contact-2", "/contact"),
  ...slugPair("/books", "/manuscripts"),
  ...slugPair("/neothink-mentality-a-new-way-to-look-at-life-and-work", "/neothink-mentality"),
  ...slugPair("/neothink-mentality-new-way-life-work", "/neothink-mentality"),
  ...slugPair("/neothink-coaching-programs", "/programs"),
  ...slugPair(
    "/secret-society-invitation-have-you-received-this-letter-what-does-it-mean",
    "/secret-society-invitation-letter"
  ),
  ...slugPair("/how-to-join-neothink-society-secret-meetings", "/join-neothink-society-secret-meetings"),
  ...slugPair(
    "/neothink-society-clearing-up-the-misunderstandings-about-the-secret-society-neothink",
    "/neothink-society-clearing-misunderstandings"
  ),
  ...slugPair(
    "/mark-hamiltons-neothink-the-surprising-logic-behind-its-teachings",
    "/mark-hamiltons-neothink-surprising-logic"
  ),
  ...slugPair(
    "/whats-the-truth-about-the-neothink-society-separating-fact-from-fiction",
    "/truth-about-neothink-society"
  ),
  ...slugPair(
    "/is-the-neothink-society-legit-everything-you-need-to-know",
    "/is-neothink-society-legit"
  ),
  ...slugPair(
    "/how-the-neothink-movement-empowers-financial-independence",
    "/neothink-movement-financial-independence"
  ),
  ...slugPair(
    "/what-people-get-wrong-about-neothink-university-and-whats-actually-true",
    "/what-people-get-wrong-neothink-university"
  ),
  ...slugPair(
    "/creating-success-stories-with-neothink-mastermind-group",
    "/neothink-mastermind-group-success-stories"
  ),
  ...slugPair(
    "/renowned-philosopher-exposes-what-all-philosophies-get-wrong",
    "/what-all-philosophies-get-wrong"
  ),
  ...slugPair("/beautiful-vs-ugly-in-our-world", "/the-beautiful-vs-the-ugly-in-our-world-3"),
  ...slugPair("/integrated-thinking-see-what-specialists-miss", "/integrated-thinking"),
  ...slugPair("/future-of-humanity-everything-free", "/the-job-revolution"),
  ...slugPair("/never-be-manipulated-again", "/illusion-pollution"),
  ...slugPair("/read-this-to-never-be-manipulated-again", "/illusion-pollution"),
  ...slugPair("/freeing-hidden-geniuses-elon-musk", "/immortalis"),
  ...slugPair("/secret-society-reveals-civilizations-hope", "/the-cult-you-never-knew-existed"),
  ...slugPair("/mark-hamilton-luck-350-million", "/mark-hamiltons-story"),
  ...slugPair("/thriving-career-overcoming-burnout", "/the-missing-key-to-universal-prosperity"),
  // /blog (WP landing page with category index) -> the most active public category hub.
  ...slugPair("/blog", "/category/neothink-awakening"),
  // /newsletter (WP signup page) -> /contact until the Next app ships a native newsletter flow.
  ...slugPair("/newsletter", "/contact"),
  ...slugPair("/newsletter-signup-thank-you", "/contact"),
  // Trailing-slash variants for newly migrated legal pages (Next.js auto-handles /.
  // trailing slashes to non-trailing, but we also list them here for clarity
  // and to survive any routing changes).
  { source: "/privacy-policy/", destination: "/privacy-policy", permanent: true },
  { source: "/terms-and-conditions/", destination: "/terms-and-conditions", permanent: true },

  // ---- Pre-cutover gap sweep (from scripts/verify-wp-coverage.mjs) ---------
  // Podcast episode deep-links -> matching article (or /podcast hub when no direct match).
  ...slugPair(
    "/podcast/are-we-the-illuminati-the-truth-behind-the-allegations-mh-explains",
    "/are-we-the-illuminati-truth"
  ),
  ...slugPair(
    "/podcast/the-future-of-humanity-everything-becomes-free",
    "/the-job-revolution"
  ),
  ...slugPair(
    "/podcast/the-secret-society-reveals-civilizations-only-hope-for-a-good-future",
    "/the-cult-you-never-knew-existed"
  ),
  ...slugPair(
    "/podcast/youre-being-manipulated-they-use-guilt-to-control-you-mark-hamilton",
    "/youre-being-manipulated-they-use-guilt-to-control-you"
  ),
  ...slugPair(
    "/podcast/freeing-societys-hidden-geniuses-with-elon-musk",
    "/immortalis"
  ),
  ...slugPair(
    "/podcast/a-new-country-with-no-taxes-mark-hamilton",
    "/a-new-country-the-great-experiment-called-immortalis"
  ),
  ...slugPair(
    "/podcast/i-used-luck-to-make-a-fortune-and-you-can-too-the-neothink-mentality",
    "/mark-hamiltons-story"
  ),
  ...slugPair(
    "/podcast/a-process-for-finding-achieving-your-lifes-purpose-mark-hamilton",
    "/finding-achieving-your-life-purpose"
  ),
  ...slugPair(
    "/podcast/aliens-are-real-but-theyll-never-visit-earth-heres-why",
    "/aliens-real-never-visit-earth"
  ),
  ...slugPair(
    "/podcast/think-like-elon-musk-the-mind-hacks-that-build-billion-dollar-empires",
    "/think-like-elon-musk-mind-hacks"
  ),
  ...slugPair(
    "/podcast/escape-the-matrix-now-mark-hamilton",
    "/escape-the-matrix-now"
  ),
  ...slugPair(
    "/podcast/freedom-is-the-key-to-unlocking-true-wealth-in-2024",
    "/freedom-key-to-unlocking-true-wealth"
  ),
  ...slugPair(
    "/podcast/this-is-how-close-we-are-to-biological-immortality-mark-hamilton",
    "/cure-to-aging"
  ),
  ...slugPair(
    "/podcast/watch-this-to-never-be-manipulated-again",
    "/illusion-pollution"
  ),
  // Podcast episodes with no direct article match -> hub.
  ...slugPair(
    "/podcast/reprogram-your-mind-to-be-rich-in-1-hour-the-neothink-approach",
    "/podcast"
  ),
  ...slugPair(
    "/podcast/is-trumps-victory-the-beginning-of-a-new-era",
    "/podcast"
  ),
  ...slugPair(
    "/podcast/want-to-sell-anything-in-2024-heres-the-secret",
    "/podcast"
  ),

  // Legacy "free / resources / programs" landing pages.
  ...slugPair("/free", "/free-courses"),
  ...slugPair("/resources", "/free-courses"),
  ...slugPair("/ascension-platform-for-business-and-personal-growth", "/programs"),
  ...slugPair("/life-coaching", "/programs"),
  ...slugPair("/what-i-offer", "/programs"),
  ...slugPair("/wealth-engine", "/areas-of-profit"),

  // Marketing/outreach pages -> best existing surface.
  ...slugPair("/apply-for-membership", "/contact"),
  ...slugPair("/contact-form-submitted", "/contact"),
  ...slugPair("/press-media", "/contact"),
  ...slugPair("/sms-opt-in", "/contact"),
  ...slugPair("/our-mission", "/the-movement"),
  ...slugPair("/society", "/the-movement"),

  // Concept / topic pages with weaker content -> best topical hub.
  ...slugPair("/formula-cure-to-aging", "/cure-to-aging"),
  ...slugPair("/neovia-case", "/neovia"),
  ...slugPair("/ai-purpose-void", "/finding-achieving-your-life-purpose"),
  ...slugPair("/bicameral-mind", "/beyond-tunnel-vision"),
  ...slugPair("/performing-self", "/about"),
  ...slugPair("/lexicon", "/faq"),

  // Default WP artifacts / test pages -> home.
  ...slugPair("/sample-page", "/"),
  ...slugPair("/master28", "/"),
];
