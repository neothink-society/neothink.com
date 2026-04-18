import { UnleashedPageContent } from "@/components/unleashed/unleashed-page-content";
import { breadcrumbListJsonLd, SPEAKABLE_MAIN_H1, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./unleashed-page.css";

export const metadata = pageMetadata({
  title: "Unleashed: The Promethean Promise | Mark Hamilton",
  description:
    "The complete delivery of the Unified Field of Conscious Civilization. Fifty years of research tracing consciousness from the silence of the gods to Neovia, the magnum opus by Mark Hamilton.",
  pathname: "/unleashed",
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Unleashed", path: "/unleashed" },
]);

const pageLd = webPageJsonLd({
  pathname: "/unleashed",
  name: "Unleashed: The Promethean Promise | Mark Hamilton",
  description:
    "The complete delivery of the Unified Field of Conscious Civilization. Fifty years of research tracing consciousness from the silence of the gods to Neovia, the magnum opus by Mark Hamilton.",
  datePublished: "2025-01-01",
  dateModified: "2025-01-01",
  aboutId: schemaIds.unleashedBook,
  authorId: schemaIds.founder,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

export default function UnleashedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <UnleashedPageContent />
    </>
  );
}
