import { TheMovementPageContent } from "@/components/the-movement/the-movement-page-content";
import { MOVEMENT_PATH, MOVEMENT_WP } from "@/lib/the-movement-data";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./the-movement-page.css";

const PATH = MOVEMENT_PATH;

const DESCRIPTION =
  "The Neothink movement in two parts: virtuously selfish individual development (Ascension, Neothink Mentality) and virtuously selfless civilizational work (Immortalis, Twelve Visions Party), grounded in the Institute’s public framework.";

const SPEAKABLE_MV = [
  "main#main-content h1",
  "#mv-hero-sub",
  "#mv-two-fold-heading",
  "#mv-individual-heading",
  "#mv-collective-heading",
] as const;

export const metadata = pageMetadata({
  title: "The Movement | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Movement", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "The Movement | Neothink Institute",
  description: DESCRIPTION,
  datePublished: `${MOVEMENT_WP.datePublished}T21:45:28.000Z`,
  dateModified: `${MOVEMENT_WP.dateModified}T19:26:13.000Z`,
  aboutId: schemaIds.organization,
  speakableSelectors: SPEAKABLE_MV,
});

export default function TheMovementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <TheMovementPageContent />
    </>
  );
}
