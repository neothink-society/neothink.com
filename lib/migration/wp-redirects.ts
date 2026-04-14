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
];
