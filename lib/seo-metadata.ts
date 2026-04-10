import type { Metadata } from "next";

import { siteConfig } from "@/lib/metadata";

type OgType = "website" | "article" | "profile";

const defaultOgImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}. The Intellectual Foundation for the Next Stage of Human Civilization`,
} as const;

/**
 * Consistent metadata for public routes: canonical, Open Graph, Twitter/X cards.
 * Uses `siteConfig` so URLs and handles stay aligned with `lib/metadata.ts`.
 * Includes default OG/Twitter images so shares resolve predictably (merged with `metadataBase`).
 */
export function pageMetadata(input: {
  title: string;
  description: string;
  pathname: string;
  ogType?: OgType;
}): Metadata {
  const url = `${siteConfig.url}${input.pathname}`;
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.pathname },
    openGraph: {
      title: input.title,
      description: input.description,
      url,
      type: input.ogType ?? "article",
      locale: "en_US",
      siteName: siteConfig.name,
      images: [defaultOgImage],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.creator,
      title: input.title,
      description: input.description,
      images: [defaultOgImage],
    },
  };
}
