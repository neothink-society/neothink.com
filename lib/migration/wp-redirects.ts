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
  ...slugPair("/about-neothink", "/neothink"),
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

  // ---- GSC-only gap sweep ---------------------------------------------------
  // URLs Google indexed from WordPress that never appeared in the sitemap.
  // Long editorial slug -> canonical migrated short slug (agency-era posts).
  ...slugPair(
    "/is-trumps-victory-the-beginning-of-a-new-era",
    "/trumps-victory-beginning-new-era"
  ),
  ...slugPair(
    "/how-the-neothink-society-can-be-both-empowering-and-challenging",
    "/neothink-society-empowering-challenging"
  ),
  // Agency-era WP slug also collapses into the in-house canonical (these were
  // two URLs for the same article in WordPress; consolidate to the shorter
  // in-house slug to avoid duplicate content on Next.js).
  ...slugPair(
    "/neothink-society-empowering-and-challenging",
    "/neothink-society-empowering-challenging"
  ),
  ...slugPair(
    "/secret-society-letters-are-they-just-selling-happiness",
    "/secret-society-letters-selling-happiness"
  ),
  ...slugPair(
    "/neothink-books-do-they-reveal-a-secret-world",
    "/neothink-books-reveal-secret-world"
  ),
  ...slugPair(
    "/what-do-secret-societies-do-understanding-their-purpose-and-existence",
    "/what-do-secret-societies-do"
  ),
  ...slugPair(
    "/freedom-is-the-key-to-unlocking-true-wealth-in-2026",
    "/freedom-key-to-unlocking-true-wealth"
  ),
  ...slugPair(
    "/how-to-discern-genuine-secret-society-opportunities-from-fraud",
    "/discern-genuine-secret-society-opportunities"
  ),
  ...slugPair(
    "/neothink-in-the-21st-century-how-to-navigate-todays-challenges",
    "/neothink-21st-century-navigate-challenges"
  ),
  ...slugPair(
    "/the-ancient-formula-for-wealth-and-influence-does-neothink-hold-the-answer",
    "/ancient-formula-wealth-influence-neothink"
  ),
  ...slugPair(
    "/how-to-excel-at-work-33-practical-tips-for-professional-growth",
    "/excel-at-work-33-practical-tips"
  ),
  ...slugPair(
    "/neothink-and-the-twelve-visions-party-the-untold-truth",
    "/twelve-visions-party"
  ),
  ...slugPair(
    "/the-surprising-reason-neothink-makes-you-irresistible",
    "/why-neothink-makes-you-irresistible"
  ),
  ...slugPair(
    "/what-to-do-if-youre-having-doubts-about-the-neothink-society",
    "/doubts-about-neothink-society"
  ),
  ...slugPair(
    "/what-will-shape-the-future-of-humanity-these-powerful-forces-will-define-it",
    "/what-will-shape-future-of-humanity"
  ),
  ...slugPair("/a-new-country-with-no-taxes", "/new-country-with-no-taxes"),
  ...slugPair(
    "/the-benefits-of-becoming-an-active-neothink-member",
    "/benefits-active-neothink-member"
  ),
  ...slugPair(
    "/aliens-are-real-but-theyll-never-visit-earth-heres-why",
    "/aliens-real-never-visit-earth"
  ),
  ...slugPair(
    "/who-really-joins-secret-societies-the-truth-behind-the-members",
    "/who-joins-secret-societies"
  ),
  ...slugPair(
    "/neothink-manuscripts-from-skepticism-to-multigenerationals-wisdom",
    "/neothink-manuscripts-skepticism-to-success"
  ),
  ...slugPair(
    "/the-neothink-debate-can-minimal-government-lead-to-maximum-progress",
    "/neothink-debate-minimal-government"
  ),
  ...slugPair(
    "/neothink-society-why-people-cant-stop-talking-about-it",
    "/neothink-society-why-people-cant-stop-talking"
  ),
  ...slugPair("/testimonials", "/neothink-reviews"),

  // Duplicate podcast episode slugs (-2 suffix from WordPress post duplicates).
  ...slugPair(
    "/podcast/a-process-for-finding-achieving-your-lifes-purpose-mark-hamilton-2",
    "/finding-achieving-your-life-purpose"
  ),
  ...slugPair(
    "/podcast/freedom-is-the-key-to-unlocking-true-wealth-in-2024-2",
    "/freedom-key-to-unlocking-true-wealth"
  ),
  ...slugPair(
    "/podcast/freeing-societys-hidden-geniuses-with-elon-musk-2",
    "/immortalis"
  ),
  ...slugPair(
    "/podcast/is-trumps-victory-the-beginning-of-a-new-era-2",
    "/trumps-victory-beginning-new-era"
  ),
  ...slugPair(
    "/podcast/the-future-of-humanity-everything-becomes-free-2",
    "/the-job-revolution"
  ),

  // Tag archives (WordPress /tag/* pages) -> best topical surface on Next.js.
  // Most point at a canonical article or category hub; none are indexed for traffic.
  ...slugPair("/tag/mini-day-system", "/reprogram-mind-to-be-rich"),
  ...slugPair("/tag/integrated-thinking", "/integrated-thinking"),
  ...slugPair("/tag/mini-company-model", "/category/neothink-awakening"),
  ...slugPair("/tag/neothink-mentality", "/neothink-mentality"),
  ...slugPair("/tag/neothink-books", "/manuscripts"),
  ...slugPair("/tag/neothink-books/page/2", "/manuscripts"),
  ...slugPair("/tag/the-prime-law", "/prime-law"),
  ...slugPair("/tag/immortality", "/immortalis"),
  ...slugPair("/tag/prime-literature", "/manuscripts"),
  ...slugPair("/tag/ten-second-miracle", "/category/neothink-awakening"),
  ...slugPair("/tag/cure-to-aging", "/project-life"),
  ...slugPair("/tag/higher-level-thinking", "/category/neothink-concepts"),
  ...slugPair("/tag/universal-health", "/project-life"),
  ...slugPair("/tag/areas-of-purpose", "/finding-achieving-your-life-purpose"),
  ...slugPair("/tag/division-of-essence", "/reprogram-mind-to-be-rich"),
  ...slugPair("/tag/calm-parenting", "/how-to-raise-a-genius"),
  ...slugPair("/tag/curiosity-at-work", "/category/neothink-awakening"),
  ...slugPair("/tag/fne", "/friday-night-essence"),
  ...slugPair("/tag/happiness", "/category/neothink-awakening"),
  ...slugPair("/tag/how-to-raise-a-genius", "/how-to-raise-a-genius"),
  ...slugPair("/tag/human-potential", "/category/neothink-awakening"),
  ...slugPair("/tag/impact-profits", "/category/neothink-awakening"),
  ...slugPair("/tag/power-of-calm", "/category/neothink-awakening"),
  ...slugPair("/tag/self-leader", "/self-leader-secret"),
  ...slugPair("/tag/wealth-building", "/category/neothink-awakening"),
  ...slugPair("/tag/work-life-balance", "/category/neothink-awakening"),

  // WordPress spam (Russian affiliate slugs injected by past exploit) -> home.
  ...slugPair("/ofitsial-nyi-sait-epikstar-dlia-klientov-kompanii", "/"),
  ...slugPair("/analiz-stavok-vavada-sport-dlia-uvelicheniia-pribyli", "/"),

  // Dead WordPress plugin artifacts (WP Geo / KML).
  { source: "/locations.kml", destination: "/", permanent: true },
];
