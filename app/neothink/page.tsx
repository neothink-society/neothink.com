import type { Metadata } from "next";
import { NeothinkPageContent } from "@/components/neothink/neothink-page-content";
import "./neothink-page.css";

export const metadata: Metadata = {
  title: "Neothink | The Mind Unleashed",
  description:
    "Neothink is the cognitive architecture that hierarchy suppressed for 2,400 years. The operating system of the uncovered mind, created by Mark Hamilton.",
  alternates: { canonical: "/neothink" },
  openGraph: {
    title: "Neothink | The Mind Unleashed",
    description:
      "Neothink is the cognitive architecture that hierarchy suppressed for 2,400 years. The operating system of the uncovered mind, created by Mark Hamilton.",
    url: "https://neothink.com/neothink",
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
      name: "Neothink",
      item: "https://neothink.com/neothink",
    },
  ],
};

function getPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Neothink: The Mind Unleashed",
    description:
      "Neothink is the cognitive architecture that hierarchy suppressed for 2,400 years. The operating system of the uncovered mind, created by Mark Hamilton.",
    url: "https://neothink.com/neothink",
    datePublished: "2024-05-02",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
    isPartOf: { "@id": "https://neothink.com/#website" },
    about: { "@id": "https://neothink.com/#neothink-system" },
    author: { "@id": "https://neothink.com/#founder" },
  };
}

export default function NeothinkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getPageSchema()),
        }}
      />
      <NeothinkPageContent />
    </>
  );
}
