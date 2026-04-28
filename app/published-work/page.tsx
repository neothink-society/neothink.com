import { PublishedWorkPageContent } from "@/components/published-work/published-work-page-content";
import { breadcrumbListJsonLd, SPEAKABLE_MAIN_H1, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./published-work-page.css";

export const metadata = pageMetadata({
  title: "Published Work | Neothink Institute",
  description:
    "The Neothink Institute publishes its body of work online for free public access: major works, the Neothink Corpus, and current research by domain.",
  pathname: "/published-work",
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Published Work", path: "/published-work" },
]);

const pageLd = webPageJsonLd({
  pathname: "/published-work",
  name: "Published Work | Neothink Institute",
  description:
    "The Neothink Institute publishes its body of work online for free public access: major works, the Neothink Corpus, and current research by domain.",
  pageType: "CollectionPage",
  aboutId: schemaIds.organization,
  authorId: schemaIds.founder,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

export default function PublishedWorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <PublishedWorkPageContent />
    </>
  );
}
