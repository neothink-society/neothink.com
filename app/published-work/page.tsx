import type { Metadata } from "next";

import { PublishedWorkPageContent } from "@/components/published-work/published-work-page-content";

import "./published-work-page.css";

export const metadata: Metadata = {
  title: "Published Work | Neothink Institute Research Library",
  description:
    "Research, analysis, and original scholarship from the Neothink Institute. The intellectual foundation behind the Unified Field, Neovia, The Way, and Neothink.",
  alternates: { canonical: "/published-work" },
  openGraph: {
    title: "Published Work | Neothink Institute Research Library",
    description:
      "Research, analysis, and original scholarship from the Neothink Institute. The intellectual foundation behind the Unified Field, Neovia, The Way, and Neothink.",
    url: "https://neothink.com/published-work",
    type: "website",
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
      name: "Published Work",
      item: "https://neothink.com/published-work",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Published Work | Neothink Institute Research Library",
  description:
    "Research, analysis, and original scholarship from the Neothink Institute. The intellectual foundation behind the Unified Field, Neovia, The Way, and Neothink.",
  url: "https://neothink.com/published-work",
  datePublished: "2024-05-02",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

export default function PublishedWorkPage() {
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
      <PublishedWorkPageContent />
    </>
  );
}
