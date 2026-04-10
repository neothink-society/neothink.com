import { GetInvolvedPageContent } from "@/components/get-involved/get-involved-page-content";
import { breadcrumbListJsonLd, SPEAKABLE_MAIN_H1, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./get-involved-page.css";

export const metadata = pageMetadata({
  title: "Get Involved | Neothink Institute",
  description:
    "Invest, advise, build Neovia, or walk The Way. Ways to participate in the civilizational project and the personal path.",
  pathname: "/get-involved",
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Get Involved", path: "/get-involved" },
]);

const pageLd = webPageJsonLd({
  pathname: "/get-involved",
  name: "Get Involved | Neothink Institute",
  description:
    "Invest, advise, build Neovia, or walk The Way. Ways to participate in the civilizational project and the personal path.",
  aboutId: schemaIds.organization,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

export default function GetInvolvedPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <GetInvolvedPageContent />
    </>
  );
}
