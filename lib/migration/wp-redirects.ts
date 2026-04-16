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
  const d = destination.replace(/\/$/, "");
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
];
