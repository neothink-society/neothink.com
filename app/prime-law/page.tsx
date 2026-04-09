import type { Metadata } from "next";

import { PrimeLawPageContent } from "@/components/prime-law/prime-law-page-content";

import "./prime-law-page.css";

export const metadata: Metadata = {
  title: "The Prime Law | Constitutional Foundation | Neothink",
  description:
    "Three articles. No exceptions. The first constitutional framework built on the absolute prohibition of initiated force. A natural law, not an ideology.",
  alternates: { canonical: "/prime-law" },
  openGraph: {
    title: "The Prime Law | Constitutional Foundation | Neothink",
    description:
      "Three articles. No exceptions. The first constitutional framework built on the absolute prohibition of initiated force. A natural law, not an ideology.",
    url: "https://neothink.com/prime-law",
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
      name: "The Prime Law",
      item: "https://neothink.com/prime-law",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Prime Law | Constitutional Foundation | Neothink",
  description:
    "Three articles. No exceptions. The first constitutional framework built on the absolute prohibition of initiated force. A natural law, not an ideology.",
  url: "https://neothink.com/prime-law",
  datePublished: "2024-05-02",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

export default function PrimeLawPage() {
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
      <PrimeLawPageContent />
    </>
  );
}
