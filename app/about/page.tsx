import { AboutPageContent } from "@/components/about/about-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./about-page.css";

export const metadata = pageMetadata({
  title: "About | Neothink Institute",
  description:
    "The Neothink Institute, the Neothink Society, and Mark Hamilton — civilizational research, membership community, and the architect of the Unified Field, Neovia, and the Neothink corpus.",
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
    "The Neothink Institute, the Neothink Society, and Mark Hamilton — the architect of the Unified Field, Neovia, and the Neothink corpus.",
  mainEntityId: schemaIds.organization,
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
