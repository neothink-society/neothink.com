import { AboutPageContent } from "@/components/about/about-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./about-page.css";

export const metadata = pageMetadata({
  title: "About | Neothink Institute",
  description:
    "About Mark Hamilton — Founder of Neothink, architect of the Unified Field of Conscious Civilization, and originator of Neovia. Civilizational theorist and systems philosopher.",
  pathname: "/about",
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const pageLd = webPageJsonLd({
  pathname: "/about",
  name: "About | Neothink Institute",
  description:
    "About Mark Hamilton — Founder of Neothink, architect of the Unified Field of Conscious Civilization, and originator of Neovia.",
  mainEntityId: schemaIds.founder,
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <AboutPageContent />
    </>
  );
}
