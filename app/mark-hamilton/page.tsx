import type { Metadata } from "next";
import { MarkHamiltonPageContent } from "@/components/mark-hamilton/mark-hamilton-page-content";
import { MARK_HAMILTON_PORTRAIT_URL } from "@/lib/wordpress-images";
import "./mark-hamilton-page.css";

export const metadata: Metadata = {
  title: "Mark Hamilton — Founder, Neothink Institute",
  description:
    "Mark Hamilton is the architect of the Unified Field of Conscious Civilization and the originator of Neovia — the first civilization designed to remove initiated force and allow consciousness to operate at full power.",
  alternates: { canonical: "/mark-hamilton" },
  openGraph: {
    title: "Mark Hamilton — Founder, Neothink Institute",
    description:
      "Mark Hamilton is the architect of the Unified Field of Conscious Civilization and the originator of Neovia — the first civilization designed to remove initiated force and allow consciousness to operate at full power.",
    url: "https://neothink.com/mark-hamilton",
    type: "profile",
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
      name: "Mark Hamilton",
      item: "https://neothink.com/mark-hamilton",
    },
  ],
};

function getPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Mark Hamilton — Founder, Neothink Institute",
    description:
      "Mark Hamilton is the architect of the Unified Field of Conscious Civilization and the originator of Neovia — the first civilization designed to remove initiated force and allow consciousness to operate at full power.",
    url: "https://neothink.com/mark-hamilton",
    datePublished: "2024-05-02",
    dateModified: new Date().toISOString().split("T")[0],
    inLanguage: "en-US",
    isPartOf: { "@id": "https://neothink.com/#website" },
    author: { "@id": "https://neothink.com/#founder" },
  };
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mark Hamilton",
  jobTitle: "Civilizational Theorist, Systems Philosopher, Founder",
  description:
    "Architect of the Unified Field of Conscious Civilization. Originator of Neovia. Creator of the Neothink Mentality. Five decades of independent research into consciousness, economics, political theory, and civilizational design.",
  url: "https://neothink.com/mark-hamilton",
  image: MARK_HAMILTON_PORTRAIT_URL,
  affiliation: {
    "@type": "ResearchOrganization",
    "@id": "https://neothink.com/#organization",
    name: "Neothink Institute",
  },
  sameAs: ["https://www.wikidata.org/wiki/Q6042981"],
  knowsAbout: [
    "Civilizational theory",
    "Consciousness studies",
    "Integrated thinking",
    "Political philosophy",
    "Non-aggression principle",
    "Human flourishing",
    "Economics",
    "Civilizational design",
  ],
};

export default function MarkHamiltonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getPageSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <MarkHamiltonPageContent />
    </>
  );
}
