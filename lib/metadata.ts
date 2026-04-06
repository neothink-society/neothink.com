import type { Metadata } from "next";

export const siteConfig = {
  name: "Neothink Institute",
  url: "https://neothink.com",
  ogImage: "/opengraph-image",
  description:
    "The Neothink Institute studies conscious civilization, integrated thinking, and the conditions for human flourishing. Founded by Mark Hamilton.",
  twitter: {
    site: "@NeothinkHQ",
    creator: "@NeothinkHQ",
  },
} as const;

export function generateSiteMetadata(): Metadata {
  return {
    title: "Neothink Institute | What Comes Next for Civilization",
    description: siteConfig.description,
    metadataBase: new URL("https://neothink.com"),
    alternates: {
      canonical: "/",
    },
    category: "education",
    classification: "Research Institute",
    openGraph: {
      type: "website",
      locale: "en_US",
      url: siteConfig.url,
      siteName: siteConfig.name,
      title:
        "Neothink Institute | What Comes Next for Civilization",
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Neothink Institute. The Intellectual Foundation for the Next Stage of Human Civilization",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.twitter.site,
      creator: siteConfig.twitter.creator,
      title:
        "Neothink Institute | What Comes Next for Civilization",
      description: siteConfig.description,
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: "Neothink Institute. The Intellectual Foundation for the Next Stage of Human Civilization",
        },
      ],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-video-preview": -1,
        "max-image-preview": "large",
      },
    },
    other: {
      "google-site-verification":
        "XtJzh-19DtiuLrOuskc5gebJ6tnCIdyhOXKJwYhnWLo",
    },
  };
}
