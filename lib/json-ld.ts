import { siteConfig } from "@/lib/metadata";

import { schemaIds } from "@/lib/schema-ids";

/**
 * BreadcrumbList for page-level JSON-LD. Paths are site paths (`/` = home).
 * Stable `@id` is derived from the last crumb so it matches the current page URL.
 */
export function breadcrumbListJsonLd(
  items: readonly { name: string; path: string }[]
): Record<string, unknown> {
  const base = siteConfig.url;
  const leaf = items[items.length - 1]?.path ?? "/";
  const pageUrl = leaf === "/" ? base : `${base}${leaf}`;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? base : `${base}${it.path}`,
    })),
  };
}

type PageSchemaType = "WebPage" | "ContactPage";

type WebPageJsonLdInput = {
  pathname: string;
  name: string;
  description: string;
  /** schema.org page type */
  pageType?: PageSchemaType;
  datePublished?: string;
  dateModified?: string;
  /** `about` — topic or creative work `@id` */
  aboutId?: string;
  authorId?: string;
  /** Primary entity for this URL (e.g. Person profile page → `#founder`) */
  mainEntityId?: string;
};

/**
 * WebPage / ContactPage JSON-LD aligned with global `@graph` (publisher, isPartOf, stable `@id`).
 */
export function webPageJsonLd(opts: WebPageJsonLdInput): Record<string, unknown> {
  const url = `${siteConfig.url}${opts.pathname}`;
  const id = `${url}#webpage`;
  const pageType = opts.pageType ?? "WebPage";

  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": pageType,
    "@id": id,
    url,
    name: opts.name,
    description: opts.description,
    datePublished: opts.datePublished ?? "2024-05-02",
    dateModified: opts.dateModified ?? new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
    isPartOf: { "@id": schemaIds.website },
    publisher: { "@id": schemaIds.organization },
  };

  if (opts.aboutId) node.about = { "@id": opts.aboutId };
  if (opts.authorId) node.author = { "@id": opts.authorId };
  if (opts.mainEntityId) node.mainEntity = { "@id": opts.mainEntityId };

  node.breadcrumb = { "@id": `${url}#breadcrumb` };

  return node;
}
