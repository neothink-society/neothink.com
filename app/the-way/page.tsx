import type { Metadata } from "next";

import { TheWayPageContent } from "@/components/the-way/the-way-page-content";

import "./the-way-page.css";

export const metadata: Metadata = {
  title: "The Way | The Personal Path of Conscious Awakening",
  description:
    "The Unified Field, lived from the inside. The practice of correcting the structural error that caged your mind — subtractive, not additive. Compatible with everything you already believe.",
  alternates: { canonical: "/the-way" },
  openGraph: {
    title: "The Way | The Personal Path of Conscious Awakening",
    description:
      "The Unified Field, lived from the inside. The practice of correcting the structural error that caged your mind — subtractive, not additive. Compatible with everything you already believe.",
    url: "https://neothink.com/the-way",
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
      name: "The Way",
      item: "https://neothink.com/the-way",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Way | The Personal Path of Conscious Awakening",
  description:
    "The Unified Field, lived from the inside. The practice of correcting the structural error that caged your mind — subtractive, not additive. Compatible with everything you already believe.",
  url: "https://neothink.com/the-way",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

export default function TheWayPage() {
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
      <TheWayPageContent />
    </>
  );
}
