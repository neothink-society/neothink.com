import { siteConfig } from "@/lib/metadata";
import { schemaIds } from "@/lib/schema-ids";

import { WP } from "@/lib/wordpress-routes";

/**
 * Sitewide footer columns: IA aligned with brand hierarchy (ideas → institute → library → action)
 * and with `public/llms.txt` core concepts. Used by `SiteFooter` and JSON-LD `ItemList` (`#footer-navigation`).
 */
export type FooterColumn = {
  /** Short heading shown in the footer (visible). */
  label: string;
  /** `name` is visible anchor text and JSON-LD `ListItem.name` (keep in sync for AEO). */
  links: readonly { href: string; name: string }[];
};

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    label: "Core framework",
    links: [
      { href: WP.unifiedField, name: "Unified Field" },
      { href: WP.primeLaw, name: "Prime Law" },
      { href: WP.neothink, name: "Neothink" },
      { href: WP.theWay, name: "The Way" },
      { href: WP.neovia, name: "Neovia" },
      { href: WP.immortalis, name: "Immortalis" },
    ],
  },
  {
    label: "Institute & founder",
    links: [
      { href: WP.about, name: "About" },
      { href: WP.markHamilton, name: "Mark Hamilton" },
      { href: WP.contact, name: "Contact" },
      { href: WP.faq, name: "FAQ" },
    ],
  },
  {
    label: "Library & follow",
    links: [
      { href: WP.unleashed, name: "Unleashed" },
      { href: WP.freeCourses, name: "Free learning" },
      { href: WP.neothinkUniversity, name: "Neothink University" },
      { href: WP.programs, name: "Programs" },
      { href: WP.projectLife, name: "Project Life" },
      { href: WP.neothinkReviews, name: "Neothink Reviews" },
      { href: WP.events, name: "Events" },
      { href: WP.twelveVisionsParty, name: "Twelve Visions Party" },
      { href: WP.theMovement, name: "The Movement" },
      { href: WP.publishedWork, name: "Published Work" },
      { href: WP.manuscripts, name: "Manuscripts" },
      { href: WP.podcast, name: "Podcast & video" },
      { href: WP.getInvolved, name: "Get Involved" },
    ],
  },
] as const;

type JsonLd = Record<string, unknown>;

/**
 * Valid schema.org `ItemList` of primary internal destinations — mirrors the visible footer.
 * Linked from `WebSite` via `hasPart` for crawlers and answer engines.
 */
export function getFooterNavigationItemListSchema(): JsonLd {
  const base = siteConfig.url;
  const flat = FOOTER_COLUMNS.flatMap((col) => col.links);

  return {
    "@type": "ItemList",
    "@id": schemaIds.footerNavigation,
    name: "Neothink Institute — primary site sections (footer)",
    description:
      "Topic-grouped navigation to the Unified Field, Prime Law, Neothink, The Way, Neovia, Immortalis, institute pages, FAQ, library, free learning hub, Neothink University, Programs and Project Life hubs, Neothink Reviews (member stories), Society events, Twelve Visions Party, and participation.",
    numberOfItems: flat.length,
    itemListElement: flat.map((link, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: link.name,
      item: `${base}${link.href}`,
    })),
  };
}
