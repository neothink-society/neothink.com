import { TheWayPageContent } from "@/components/the-way/the-way-page-content";
import { breadcrumbListJsonLd, SPEAKABLE_MAIN_H1, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./the-way-page.css";

export const metadata = pageMetadata({
  title: "The Way | The Personal Path of Conscious Awakening",
  description:
    "The Unified Field, lived from the inside. The practice of correcting the structural error that caged your mind — subtractive, not additive. Compatible with everything you already believe.",
  pathname: "/the-way",
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Way", path: "/the-way" },
]);

const pageLd = webPageJsonLd({
  pathname: "/the-way",
  name: "The Way | The Personal Path of Conscious Awakening",
  description:
    "The Unified Field, lived from the inside. The practice of correcting the structural error that caged your mind — subtractive, not additive. Compatible with everything you already believe.",
  aboutId: schemaIds.organization,
  authorId: schemaIds.founder,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

export default function TheWayPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <TheWayPageContent />
    </>
  );
}
