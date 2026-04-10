import { MarkHamiltonPageContent } from "@/components/mark-hamilton/mark-hamilton-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./mark-hamilton-page.css";

export const metadata = pageMetadata({
  title: "Mark Hamilton — Founder, Neothink Institute",
  description:
    "Mark Hamilton is the architect of the Unified Field of Conscious Civilization and the originator of Neovia — the first civilization designed to remove initiated force and allow consciousness to operate at full power.",
  pathname: "/mark-hamilton",
  ogType: "profile",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Mark Hamilton", path: "/mark-hamilton" },
]);

const pageLd = webPageJsonLd({
  pathname: "/mark-hamilton",
  name: "Mark Hamilton — Founder, Neothink Institute",
  description:
    "Mark Hamilton is the architect of the Unified Field of Conscious Civilization and the originator of Neovia — the first civilization designed to remove initiated force and allow consciousness to operate at full power.",
  pageType: "ProfilePage",
  mainEntityId: schemaIds.founder,
  speakableSelectors: ["#mh-hero-heading"],
});

export default function MarkHamiltonPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <MarkHamiltonPageContent />
    </>
  );
}
