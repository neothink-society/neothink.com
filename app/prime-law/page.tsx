import { PrimeLawPageContent } from "@/components/prime-law/prime-law-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./prime-law-page.css";

export const metadata = pageMetadata({
  title: "The Prime Law | Constitutional Foundation | Neothink",
  description:
    "Three articles. No exceptions. The first constitutional framework built on the absolute prohibition of initiated force. A natural law, not an ideology.",
  pathname: "/prime-law",
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Prime Law", path: "/prime-law" },
]);

const pageLd = webPageJsonLd({
  pathname: "/prime-law",
  name: "The Prime Law | Constitutional Foundation | Neothink",
  description:
    "Three articles. No exceptions. The first constitutional framework built on the absolute prohibition of initiated force. A natural law, not an ideology.",
  aboutId: schemaIds.primeLaw,
  authorId: schemaIds.founder,
});

export default function PrimeLawPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <PrimeLawPageContent />
    </>
  );
}
