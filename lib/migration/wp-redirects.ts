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
  ...slugPair("/the-prime-law", "/prime-law"),
  ...slugPair("/prime-law-5", "/prime-law"),
  ...slugPair("/the-way-9", "/the-way"),
  ...slugPair("/published-work-9", "/published-work"),
  ...slugPair("/neothink-9", "/neothink"),
  ...slugPair("/podcast-2", "/podcast"),
  ...slugPair("/podcast-list", "/podcast"),
  ...slugPair("/contact-2", "/contact"),
  ...slugPair("/books", "/published-work"),
];
