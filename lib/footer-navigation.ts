import { siteConfig } from "@/lib/metadata";
import { schemaIds } from "@/lib/schema-ids";

import { WP } from "@/lib/wordpress-routes";

/**
 * Sitewide footer IA — reduced to the **main pages** only:
 * the original set Wallace created (the seven header-nav destinations:
 * Unified Field, Neovia, The Way, Neothink, Mark Hamilton, Published Work,
 * Unleashed) plus the pages those seven link to internally (Prime Law,
 * Manuscripts, Podcast, Get Involved).
 *
 * Anything outside this set (series category hubs, About/FAQ, Neothink
 * University, Events, Programs, etc.) lives in the page bodies and XML
 * sitemap — it is intentionally not in the footer.
 */
export type FooterLink = { href: string; name: string };

export const FOOTER_PRIMARY_LINKS: readonly FooterLink[] = [
  { href: WP.unifiedField, name: "Unified Field" },
  { href: WP.neovia, name: "Neovia" },
  { href: WP.theWay, name: "The Way" },
  { href: WP.neothink, name: "Neothink" },
  { href: WP.markHamilton, name: "Mark Hamilton" },
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
 * `ItemList` mirroring the visible footer's primary pages — linked from
 * `WebSite.hasPart` for crawlers and answer engines. Order matches the
 * visible DOM order for `SpeakableSpecification`/AEO consistency.
 */
export function getFooterNavigationItemListSchema(): JsonLd {
  const base = siteConfig.url;

  return {
    "@type": "ItemList",
    "@id": schemaIds.footerNavigation,
    name: "Neothink Institute — primary pages (footer)",
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
