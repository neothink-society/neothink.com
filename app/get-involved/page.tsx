import type { Metadata } from "next";

import { GetInvolvedPageContent } from "@/components/get-involved/get-involved-page-content";

import "./get-involved-page.css";

export const metadata: Metadata = {
  title: "Get Involved | Neothink Institute",
  description:
    "Invest, advise, build Neovia, or walk The Way. Ways to participate in the civilizational project and the personal path.",
  alternates: { canonical: "/get-involved" },
  openGraph: {
    title: "Get Involved | Neothink Institute",
    description:
      "Invest, advise, build Neovia, or walk The Way. Ways to participate in the civilizational project and the personal path.",
    url: "https://neothink.com/get-involved",
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
      name: "Get Involved",
      item: "https://neothink.com/get-involved",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Get Involved | Neothink Institute",
  description:
    "Invest, advise, build Neovia, or walk The Way. Ways to participate in the civilizational project and the personal path.",
  url: "https://neothink.com/get-involved",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
};

export default function GetInvolvedPage() {
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
      <GetInvolvedPageContent />
    </>
  );
}
