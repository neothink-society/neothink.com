import { ProgramsPageContent } from "@/components/programs/programs-page-content";
import { PROGRAMS_PATH, PROGRAMS_WP } from "@/lib/programs-data";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./programs-page.css";

const PATH = PROGRAMS_PATH;

const DESCRIPTION =
  "Map of Neothink Society program families: Neothink University, coaching programs, Project Life, Ascension, free Institute learning, and events. Orientation on neothink.com; fulfillment through Society channels.";

const SPEAKABLE_PG = ["main#main-content h1", "#pg-hero-sub", "#pg-cards-heading"] as const;

export const metadata = pageMetadata({
  title: "Programs | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Programs", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Programs | Neothink Institute",
  description: DESCRIPTION,
  dateModified: `${PROGRAMS_WP.dateModified}T19:26:12.000Z`,
  aboutId: schemaIds.society,
  speakableSelectors: SPEAKABLE_PG,
});

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <ProgramsPageContent />
    </>
  );
}
