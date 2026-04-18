import type { Metadata } from "next";

import { siteConfig } from "@/lib/metadata";

type OgType = "website" | "article" | "profile";

const defaultOgImage = {
  url: siteConfig.ogImage,
  width: 1200,
  height: 630,
  alt: `${siteConfig.name}. The Intellectual Foundation for the Next Stage of Human Civilization`,
} as const;

type ArticleOgImage = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

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
  /** When `ogType` is `article`, pass ISO8601 strings for richer link previews. */
  article?: { publishedTime?: string; modifiedTime?: string };
  /**
   * Primary share image for this URL (hero / featured). When set, Open Graph and
   * Twitter use it instead of the site default; aligns social previews with
   * `blogPostingJsonLd` `image` and visible hero art.
   */
  articleOgImage?: ArticleOgImage;
}): Metadata {
  const url = `${siteConfig.url}${input.pathname}`;
  const ogType = input.ogType ?? "article";

  const shareImage =
    input.articleOgImage !== undefined
      ? {
          url: input.articleOgImage.src,
          width: input.articleOgImage.width,
          height: input.articleOgImage.height,
          alt: input.articleOgImage.alt,
        }
      : { ...defaultOgImage };

  const openGraphBase = {
    title: input.title,
    description: input.description,
    url,
    locale: "en_US",
    siteName: siteConfig.name,
    images: [shareImage],
  };

  const openGraph = (
    ogType === "article"
      ? {
          ...openGraphBase,
          type: "article" as const,
          ...(input.article?.publishedTime !== undefined
            ? { publishedTime: input.article.publishedTime }
            : {}),
          ...(input.article?.modifiedTime !== undefined ? { modifiedTime: input.article.modifiedTime } : {}),
        }
      : {
          ...openGraphBase,
          type: ogType,
        }
  ) as Metadata["openGraph"];

  return {
    title: input.title,
    description: input.description,
    alternates: { canonical: input.pathname },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.creator,
      title: input.title,
      description: input.description,
      images: [shareImage],
    },
  };
}
