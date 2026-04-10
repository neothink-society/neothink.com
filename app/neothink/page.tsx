import { NeothinkPageContent } from "@/components/neothink/neothink-page-content";
import { breadcrumbListJsonLd, SPEAKABLE_MAIN_H1, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./neothink-page.css";

export const metadata = pageMetadata({
  title: "Neothink | The Mind Unleashed",
  description:
    "Neothink is the cognitive architecture that hierarchy suppressed for 2,400 years. The operating system of the uncovered mind, created by Mark Hamilton.",
  pathname: "/neothink",
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink", path: "/neothink" },
]);

const pageLd = webPageJsonLd({
  pathname: "/neothink",
  name: "Neothink: The Mind Unleashed",
  description:
    "Neothink is the cognitive architecture that hierarchy suppressed for 2,400 years. The operating system of the uncovered mind, created by Mark Hamilton.",
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.founder,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

export default function NeothinkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <NeothinkPageContent />
    </>
  );
}
