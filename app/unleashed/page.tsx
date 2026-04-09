import type { Metadata } from "next";

import { UnleashedPageContent } from "@/components/unleashed/unleashed-page-content";

import "./unleashed-page.css";

export const metadata: Metadata = {
  title: "Unleashed: The Promethean Promise | Mark Hamilton",
  description:
    "The complete delivery of the Unified Field of Conscious Civilization. Fifty years of research tracing consciousness from the silence of the gods to Neovia — the magnum opus by Mark Hamilton.",
  alternates: { canonical: "/unleashed" },
  openGraph: {
    title: "Unleashed: The Promethean Promise | Mark Hamilton",
    description:
      "The complete delivery of the Unified Field of Conscious Civilization. Fifty years of research tracing consciousness from the silence of the gods to Neovia — the magnum opus by Mark Hamilton.",
    url: "https://neothink.com/unleashed",
    type: "article",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://neothink.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Unleashed",
      item: "https://neothink.com/unleashed",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Unleashed: The Promethean Promise | Mark Hamilton",
  description:
    "The complete delivery of the Unified Field of Conscious Civilization. Fifty years of research tracing consciousness from the silence of the gods to Neovia — the magnum opus by Mark Hamilton.",
  url: "https://neothink.com/unleashed",
  datePublished: "2025-01-01",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  about: { "@id": "https://neothink.com/#unleashed" },
  author: { "@id": "https://neothink.com/#founder" },
};

export default function UnleashedPage() {
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
      <UnleashedPageContent />
    </>
  );
}
