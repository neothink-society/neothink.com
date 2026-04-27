import { AboutPageContent } from "@/components/about/about-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./about-page.css";

export const metadata = pageMetadata({
  title: "About the Neothink Institute | Independent Research Institution",
  description:
    "The Neothink Institute is an independent research institution advancing the Unified Field of Conscious Civilization, the Neothink body of work, Unleashed, and Neovia.",
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
  name: "About the Neothink Institute | Independent Research Institution",
  description:
    "The Neothink Institute is an independent research institution advancing the Unified Field of Conscious Civilization, the Neothink body of work, Unleashed, and Neovia.",
  pageType: "AboutPage",
  mainEntityId: schemaIds.organization,
  speakableSelectors: ["#ab-hero-heading", "#ab-what-heading"],
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
