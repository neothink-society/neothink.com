import type { Metadata } from "next";

import { UnifiedFieldPageContent } from "@/components/unified-field/unified-field-page-content";

import "./unified-field-page.css";

export const metadata: Metadata = {
  title: "The Unified Field of Conscious Civilization — Neothink Institute",
  description:
    "The first complete synthesis identifying the single structural pattern governing every empire, every economy, and every human destiny across all of recorded history. A fifty-year body of work by Mark Hamilton.",
  alternates: { canonical: "/unified-field" },
  openGraph: {
    title: "The Unified Field of Conscious Civilization — Neothink Institute",
    description:
      "The first complete synthesis identifying the single structural pattern governing every empire, every economy, and every human destiny across all of recorded history. A fifty-year body of work by Mark Hamilton.",
    url: "https://neothink.com/unified-field",
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
      name: "The Unified Field",
      item: "https://neothink.com/unified-field",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Unified Field of Conscious Civilization — Neothink Institute",
  description:
    "The first complete synthesis identifying the single structural pattern governing every empire, every economy, and every human destiny across all of recorded history. A fifty-year body of work by Mark Hamilton.",
  url: "https://neothink.com/unified-field",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

export default function UnifiedFieldPage() {
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
      <UnifiedFieldPageContent />
    </>
  );
}
