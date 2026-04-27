import { ManuscriptsPageContent } from "@/components/manuscripts/manuscripts-page-content";
import { breadcrumbListJsonLd, SPEAKABLE_MAIN_H1, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";
import { getManuscriptsBibliographyGraph } from "@/lib/structured-data";

import "./manuscripts-page.css";

export const metadata = pageMetadata({
  title: "The Published Manuscripts of Mark Hamilton | Neothink Institute",
  description:
    "Five decades of research into consciousness, economics, political theory, civilizational design, and integrated human potential. The complete Neothink library.",
  pathname: "/manuscripts",
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Manuscripts", path: "/manuscripts" },
]);

const pageLd = webPageJsonLd({
  pathname: "/manuscripts",
  name: "The Published Manuscripts of Mark Hamilton | Neothink Institute",
  description:
    "Five decades of research into consciousness, economics, political theory, civilizational design, and integrated human potential. The complete Neothink library.",
  aboutId: schemaIds.organization,
  authorId: schemaIds.founder,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

/**
 * Bibliography graph: CollectionPage + ItemList + 27 Book entities.
 * One Book per work in `manuscripts-books-data.ts`. Each Book is a
 * top-level @graph node with its own @id so AI systems can cite the
 * works individually. Books with their own Next.js routes carry a
 * `url`; placeholders gain `url` as per-book pages get built.
 */
const bibliographyGraph = getManuscriptsBibliographyGraph();

export default function ManuscriptsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bibliographyGraph) }}
      />
      <ManuscriptsPageContent />
    </>
  );
}
