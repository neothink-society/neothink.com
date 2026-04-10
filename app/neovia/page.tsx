import { NeoviaPageContent } from "@/components/neovia/neovia-page-content";
import { breadcrumbListJsonLd, SPEAKABLE_MAIN_H1, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./neovia-page.css";

export const metadata = pageMetadata({
  title: "Neovia — The First Civilization Designed for Fully Conscious Human Beings",
  description:
    "Neovia is the first civilizational architecture in human history designed to remove initiated force at the structural root and allow consciousness to operate at full power. The anti-extinction exit ramp.",
  pathname: "/neovia",
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neovia", path: "/neovia" },
]);

const pageLd = webPageJsonLd({
  pathname: "/neovia",
  name: "Neovia — The First Civilization Designed for Fully Conscious Human Beings",
  description:
    "Neovia is the first civilizational architecture in human history designed to remove initiated force at the structural root and allow consciousness to operate at full power. The anti-extinction exit ramp.",
  aboutId: schemaIds.organization,
  authorId: schemaIds.founder,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

export default function NeoviaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <NeoviaPageContent />
    </>
  );
}
