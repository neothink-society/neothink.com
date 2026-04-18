import { AboutPageContent } from "@/components/about/about-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./about-page.css";

export const metadata = pageMetadata({
  title: "About | Neothink Institute",
  description:
    "The Neothink Institute, Society, and Mark Hamilton. The Unified Field, Neovia, and the Neothink corpus. Research institution and membership community.",
  pathname: "/about",
  /** About/institution page; not a dated article. */
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

const pageLd = webPageJsonLd({
  pathname: "/about",
  name: "About | Neothink Institute",
  description:
    "The Neothink Institute, Society, and Mark Hamilton. The Unified Field, Neovia, and the Neothink corpus. Research institution and membership community.",
  pageType: "AboutPage",
  mainEntityId: schemaIds.organization,
  speakableSelectors: ["#ab-hero-heading", "#ab-institute-heading"],
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
