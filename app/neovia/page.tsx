import type { Metadata } from "next";

import { NeoviaPageContent } from "@/components/neovia/neovia-page-content";

import "./neovia-page.css";

export const metadata: Metadata = {
  title: "Neovia — The First Civilization Designed for Fully Conscious Human Beings",
  description:
    "Neovia is the first civilizational architecture in human history designed to remove initiated force at the structural root and allow consciousness to operate at full power. The anti-extinction exit ramp.",
  alternates: { canonical: "/neovia" },
  openGraph: {
    title: "Neovia — The First Civilization Designed for Fully Conscious Human Beings",
    description:
      "Neovia is the first civilizational architecture in human history designed to remove initiated force at the structural root and allow consciousness to operate at full power. The anti-extinction exit ramp.",
    url: "https://neothink.com/neovia",
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
      name: "Neovia",
      item: "https://neothink.com/neovia",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Neovia — The First Civilization Designed for Fully Conscious Human Beings",
  description:
    "Neovia is the first civilizational architecture in human history designed to remove initiated force at the structural root and allow consciousness to operate at full power. The anti-extinction exit ramp.",
  url: "https://neothink.com/neovia",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

export default function NeoviaPage() {
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
      <NeoviaPageContent />
    </>
  );
}
