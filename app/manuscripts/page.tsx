import { ManuscriptsPageContent } from "@/components/manuscripts/manuscripts-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

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
});

export default function ManuscriptsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <ManuscriptsPageContent />
    </>
  );
}
