import type { Metadata } from "next";

import { PodcastPageContent } from "@/components/podcast/podcast-page-content";

import "./podcast-page.css";

export const metadata: Metadata = {
  title: "Unleashed — The Podcast | Neothink Institute",
  description:
    "Mark Hamilton and Wallace Hamilton on the Unified Field of Conscious Civilization. Twelve founding episodes — on YouTube.",
  alternates: { canonical: "/podcast" },
  openGraph: {
    title: "Unleashed — The Podcast | Neothink Institute",
    description:
      "Mark Hamilton and Wallace Hamilton on the Unified Field of Conscious Civilization. Twelve founding episodes — on YouTube.",
    url: "https://neothink.com/podcast",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://neothink.com" },
    { "@type": "ListItem", position: 2, name: "Podcast", item: "https://neothink.com/podcast" },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Unleashed — The Podcast | Neothink Institute",
  description:
    "Mark Hamilton and Wallace Hamilton on the Unified Field of Conscious Civilization. Twelve founding episodes — on YouTube.",
  url: "https://neothink.com/podcast",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
};

export default function PodcastPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <PodcastPageContent />
    </>
  );
}
