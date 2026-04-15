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

type PageSchemaType = "WebPage" | "ContactPage" | "AboutPage" | "ProfilePage" | "CollectionPage";

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
  /** AEO: CSS selectors for visible speakable regions (Google Speakable / answer engines). */
  speakableSelectors?: readonly string[];
};

/** ISO 8601 duration for VideoObject (whole minutes). */
export function iso8601DurationFromMinutes(minutes: number): string {
  const m = Math.max(1, Math.round(minutes));
  return `PT${m}M`;
}

/** Default OG / article image URL (matches `siteConfig.ogImage`). */
export function defaultOpenGraphImageUrl(): string {
  return `${siteConfig.url}${siteConfig.ogImage}`;
}

/**
 * AEO hint: pages that expose a single primary `h1` inside `main#main-content` (lessons + most marketing layouts).
 */
export const SPEAKABLE_MAIN_H1 = ["main#main-content h1"] as const;

/**
 * WebPage and specialized page types — aligned with global `@graph` (publisher, isPartOf, stable `@id`).
 * Omits `datePublished` / `dateModified` unless provided (avoids fake dates on evergreen pages).
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
    inLanguage: "en-US",
    isPartOf: { "@id": schemaIds.website },
    publisher: { "@id": schemaIds.organization },
  };

  if (opts.datePublished !== undefined) node.datePublished = opts.datePublished;
  if (opts.dateModified !== undefined) node.dateModified = opts.dateModified;

  if (opts.aboutId) node.about = { "@id": opts.aboutId };
  if (opts.authorId) node.author = { "@id": opts.authorId };
  if (opts.mainEntityId) node.mainEntity = { "@id": opts.mainEntityId };

  if (opts.speakableSelectors && opts.speakableSelectors.length > 0) {
    node.speakable = {
      "@type": "SpeakableSpecification",
      cssSelector: [...opts.speakableSelectors],
    };
  }

  node.breadcrumb = { "@id": `${url}#breadcrumb` };

  return node;
}

/**
 * FAQPage JSON-LD for AEO-friendly Q&A (match visible FAQ copy on the page).
 */
export function faqPageJsonLd(
  pathname: string,
  items: readonly { question: string; answer: string }[]
): Record<string, unknown> {
  const url = `${siteConfig.url}${pathname}`;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    url,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    isPartOf: { "@id": schemaIds.website },
    publisher: { "@id": schemaIds.organization },
  };
}

/**
 * Ordered list of URLs (e.g. lesson series) for discovery and answer engines.
 */
export function itemListJsonLd(
  pathname: string,
  listId: string,
  name: string,
  description: string,
  items: readonly { title: string; path: string }[]
): Record<string, unknown> {
  const base = siteConfig.url;
  const pageUrl = `${base}${pathname}`;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#${listId}`,
    name,
    description,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.title,
      item: `${base}${it.path}`,
    })),
    isPartOf: { "@id": schemaIds.website },
    publisher: { "@id": schemaIds.organization },
  };
}

/**
 * ItemList of named entities with descriptions (no per-item URL) — e.g. program pillars on a hub page.
 * Helps search and answer engines recover structured lists that are not separate routes.
 */
export function itemListEntitiesJsonLd(opts: {
  pathname: string;
  listId: string;
  name: string;
  description: string;
  items: readonly { name: string; description: string }[];
}): Record<string, unknown> {
  const pageUrl = `${siteConfig.url}${opts.pathname}`;
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${pageUrl}#${opts.listId}`,
    name: opts.name,
    description: opts.description,
    numberOfItems: opts.items.length,
    itemListElement: opts.items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      description: it.description,
    })),
    isPartOf: { "@id": schemaIds.website },
    publisher: { "@id": schemaIds.organization },
  };
}

/** Blog / lesson post (Neothink Mentality series articles). */
export function blogPostingJsonLd(opts: {
  pathname: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  /** Creative author of the written post (defaults to Neothink Institute for lesson pages). */
  authorId?: string;
  /** Primary image (defaults to site OG image). */
  image?: string | readonly string[];
}): Record<string, unknown> {
  const url = `${siteConfig.url}${opts.pathname}`;
  const images = opts.image ?? [defaultOpenGraphImageUrl()];
  const imageArr = typeof images === "string" ? [images] : [...images];

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    image: imageArr,
    url,
    author: { "@id": opts.authorId ?? schemaIds.organization },
    publisher: { "@id": schemaIds.organization },
    isPartOf: { "@id": schemaIds.website },
    mainEntityOfPage: { "@id": `${url}#webpage` },
  };
}

/**
 * Embedded lesson video: Institute publishes; optional speaker is the on-camera lecturer (Person `@id`).
 */
export function videoObjectJsonLd(opts: {
  pathname: string;
  name: string;
  description: string;
  embedUrl: string;
  thumbnailUrl: string;
  uploadDate: string;
  /** Canonical watch URL (helps some validators alongside `embedUrl`). */
  contentUrl?: string;
  /** Runtime in minutes → schema.org `duration` as ISO 8601 (e.g. PT10M). */
  durationMinutes?: number;
  /** Person who speaks in the recording (schema.org `author` on VideoObject). */
  speakerId?: string;
}): Record<string, unknown> {
  const pageUrl = `${siteConfig.url}${opts.pathname}`;
  const node: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "@id": `${pageUrl}#video`,
    name: opts.name,
    description: opts.description,
    embedUrl: opts.embedUrl,
    thumbnailUrl: opts.thumbnailUrl,
    uploadDate: opts.uploadDate,
    publisher: { "@id": schemaIds.organization },
  };
  if (opts.contentUrl) node.contentUrl = opts.contentUrl;
  if (opts.durationMinutes !== undefined) {
    node.duration = iso8601DurationFromMinutes(opts.durationMinutes);
  }
  if (opts.speakerId) {
    node.author = { "@id": opts.speakerId };
  }
  return node;
}
