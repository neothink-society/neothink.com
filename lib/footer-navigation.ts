import { siteConfig } from "@/lib/metadata";
import { schemaIds } from "@/lib/schema-ids";

import { WP } from "@/lib/wordpress-routes";

/**
 * Sitewide footer IA, reduced to the **main pages** only:
 * About (the Institute as an entity) plus the seven header-nav
 * destinations (Mark Hamilton, Unified Field, Neovia, Neothink, The Way,
 * Published Work, Unleashed) plus the pages those link to internally
 * (Prime Law, Manuscripts, Podcast, Get Involved).
 *
 * Anything outside this set (series category hubs, FAQ, Neothink
 * University, Events, Programs, etc.) lives in the page bodies and XML
 * sitemap, it is intentionally not in the footer.
 */
export type FooterLink = { href: string; name: string };

export const FOOTER_PRIMARY_LINKS: readonly FooterLink[] = [
  { href: WP.about, name: "About" },
  { href: WP.markHamilton, name: "Mark Hamilton" },
  { href: WP.unifiedField, name: "Unified Field" },
  { href: WP.neovia, name: "Neovia" },
  { href: WP.neothink, name: "Neothink" },
  { href: WP.theWay, name: "The Way" },
  { href: WP.primeLaw, name: "Prime Law" },
  { href: WP.publishedWork, name: "Published Work" },
  { href: WP.manuscripts, name: "Manuscripts" },
  { href: WP.unleashed, name: "Unleashed" },
  { href: WP.podcast, name: "Podcast" },
  { href: WP.getInvolved, name: "Get Involved" },
] as const;

/**
 * Legal / meta fine-print rendered on a single small row with the copyright.
 * Kept minimal for compliance (privacy/terms) and reachability (contact).
 */
export const FOOTER_FINE_PRINT_LINKS: readonly FooterLink[] = [
  { href: WP.privacyPolicy, name: "Privacy Policy" },
  { href: WP.termsAndConditions, name: "Terms" },
  { href: WP.contact, name: "Contact" },
] as const;

type JsonLd = Record<string, unknown>;

/**
 * `ItemList` mirroring the visible footer's primary pages, linked from
 * `WebSite.hasPart` for crawlers and answer engines. Order matches the
 * visible DOM order for `SpeakableSpecification`/AEO consistency.
 */
export function getFooterNavigationItemListSchema(): JsonLd {
  const base = siteConfig.url;

  return {
    "@type": "ItemList",
    "@id": schemaIds.footerNavigation,
    name: "Neothink Institute, primary pages (footer)",
    description:
      "Primary destinations on neothink.com: the Unified Field, Neovia, The Way, Neothink, Mark Hamilton, Prime Law, Published Work, Manuscripts, Unleashed, Podcast, and Get Involved.",
    numberOfItems: FOOTER_PRIMARY_LINKS.length,
    itemListElement: FOOTER_PRIMARY_LINKS.map((link, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: link.name,
      item: `${base}${link.href}`,
    })),
  };
}
