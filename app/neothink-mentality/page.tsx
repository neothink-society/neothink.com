import { NeothinkMentalityPageContent } from "@/components/neothink-mentality/neothink-mentality-page-content";
import {
  breadcrumbListJsonLd,
  faqPageJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { NEOTHINK_MENTALITY_FAQ, NEOTHINK_MENTALITY_LESSONS } from "@/lib/neothink-mentality-data";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./neothink-mentality-page.css";

const PATH = "/neothink-mentality";

export const metadata = pageMetadata({
  title: "Neothink Mentality Course | Neothink Institute",
  description:
    "Fourteen video lessons in integrated thinking from Mark Hamilton’s research: sequential public course with on-site lesson pages, FAQ, and links to Unleashed and the Unified Field.",
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Course | Neothink Institute",
  description:
    "Fourteen video lessons in integrated thinking: public sequential course from the Neothink Institute, with lesson pages and institutional context.",
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.founder,
  mainEntityId: `${siteConfig.url}${PATH}#faq`,
});

const faqLd = faqPageJsonLd(PATH, NEOTHINK_MENTALITY_FAQ);

const lessonsLd = itemListJsonLd(
  PATH,
  "lessons",
  "Neothink Mentality video lessons",
  "Fourteen ordered lesson URLs for the public Neothink Mentality series on neothink.com.",
  NEOTHINK_MENTALITY_LESSONS.map((l) => ({ title: l.title, path: l.path }))
);

export default function NeothinkMentalityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lessonsLd) }} />
      <NeothinkMentalityPageContent />
    </>
  );
}
