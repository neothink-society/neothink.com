import type { Metadata } from "next";

import { ManuscriptsPageContent } from "@/components/manuscripts/manuscripts-page-content";

import "./manuscripts-page.css";

export const metadata: Metadata = {
  title: "The Published Manuscripts of Mark Hamilton | Neothink Institute",
  description:
    "Five decades of research into consciousness, economics, political theory, civilizational design, and integrated human potential. The complete Neothink library.",
  alternates: { canonical: "/manuscripts" },
  openGraph: {
    title: "The Published Manuscripts of Mark Hamilton | Neothink Institute",
    description:
      "Five decades of research into consciousness, economics, political theory, civilizational design, and integrated human potential. The complete Neothink library.",
    url: "https://neothink.com/manuscripts",
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
      name: "Manuscripts",
      item: "https://neothink.com/manuscripts",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Published Manuscripts of Mark Hamilton | Neothink Institute",
  description:
    "Five decades of research into consciousness, economics, political theory, civilizational design, and integrated human potential. The complete Neothink library.",
  url: "https://neothink.com/manuscripts",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

export default function ManuscriptsPage() {
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
      <ManuscriptsPageContent />
    </>
  );
}
