import { NeothinkUniversityPageContent } from "@/components/neothink-university/neothink-university-page-content";
import {
  breadcrumbListJsonLd,
  faqPageJsonLd,
  itemListEntitiesJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { NEOTHINK_UNIVERSITY_PROGRAMS } from "@/lib/neothink-university-data";
import { NEOTHINK_UNIVERSITY_FAQ } from "@/lib/neothink-university-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./neothink-university-page.css";

const PATH = "/neothink-university";
const PAGE_URL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Neothink University is a paid program offering of The Neothink Society (private education)—structured programs for passion, prosperity, mindset, and wellness with mentoring. Not the Neothink Institute’s free public learning hub on this site.";

/** AEO: multiple visible answer surfaces (hero h1 + key h2 sections + FAQ). */
const SPEAKABLE_NU = [
  "main#main-content h1",
  "#nu-about-heading",
  "#nu-programs-heading",
  "#nu-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "Neothink University | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink University", path: PATH },
]);

const programsListLd = itemListEntitiesJsonLd({
  pathname: PATH,
  listId: "programs-offered",
  name: "Neothink University paid program areas",
  description:
    "Paid Neothink Society program pillars—Passion Development, Prosperity Pathway, Mindset Mastery, and Health and Wellness—as described on the Neothink University page.",
  items: NEOTHINK_UNIVERSITY_PROGRAMS.map((p) => ({ name: p.title, description: p.body })),
});

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Neothink University | Neothink Institute",
  description: DESCRIPTION,
  /** Page subject is the Society’s paid University offering (see global graph `#society`). */
  aboutId: schemaIds.society,
  /** Primary structured entity for this URL (program list). */
  mainEntityId: `${PAGE_URL}#programs-offered`,
  speakableSelectors: SPEAKABLE_NU,
  dateModified: "2026-01-06T19:26:12.000Z",
});

const faqLd = faqPageJsonLd(PATH, NEOTHINK_UNIVERSITY_FAQ);

export default function NeothinkUniversityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(programsListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NeothinkUniversityPageContent />
    </>
  );
}
