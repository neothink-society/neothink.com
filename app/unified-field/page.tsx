import { UnifiedFieldPageContent } from "@/components/unified-field/unified-field-page-content";
import { breadcrumbListJsonLd, SPEAKABLE_MAIN_H1, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./unified-field-page.css";

export const metadata = pageMetadata({
  title: "The Unified Field of Conscious Civilization — Neothink Institute",
  description:
    "The first complete synthesis identifying the single structural pattern governing every empire, every economy, and every human destiny across all of recorded history. A fifty-year body of work by Mark Hamilton.",
  pathname: "/unified-field",
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Unified Field", path: "/unified-field" },
]);

const pageLd = webPageJsonLd({
  pathname: "/unified-field",
  name: "The Unified Field of Conscious Civilization — Neothink Institute",
  description:
    "The first complete synthesis identifying the single structural pattern governing every empire, every economy, and every human destiny across all of recorded history. A fifty-year body of work by Mark Hamilton.",
  aboutId: schemaIds.organization,
  authorId: schemaIds.founder,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

export default function UnifiedFieldPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <UnifiedFieldPageContent />
    </>
  );
}
