import { ProjectLifePageContent } from "@/components/project-life/project-life-page-content";
import { PROJECT_LIFE_PATH, PROJECT_LIFE_WP } from "@/lib/project-life-data";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./project-life-page.css";

const PATH = PROJECT_LIFE_PATH;

const DESCRIPTION =
  "Project Life within the Neothink Society: anti-aging research themes, nutraceuticals, and personalized health support. Public orientation on neothink.com by the Neothink Institute; enrollment through Society channels.";

const SPEAKABLE_PLIFE = [
  "main#main-content h1",
  "#plife-hero-sub",
  "#plife-about-heading",
  "#plife-benefits-heading",
] as const;

export const metadata = pageMetadata({
  title: "Project Life | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Project Life", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Project Life | Neothink Institute",
  description: DESCRIPTION,
  dateModified: `${PROJECT_LIFE_WP.dateModified}T19:26:13.000Z`,
  aboutId: schemaIds.society,
  speakableSelectors: SPEAKABLE_PLIFE,
});

export default function ProjectLifePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <ProjectLifePageContent />
    </>
  );
}
