import { NeothinkReviewsPageContent } from "@/components/neothink-reviews/neothink-reviews-page-content";
import { breadcrumbListJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { NEOTHINK_REVIEWS_FAQ } from "@/lib/neothink-reviews-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./neothink-reviews-page.css";

const PATH = "/neothink-reviews";
const PAGE_URL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Neothink reviews and member stories—sample voices from the Neothink Society ecosystem, plus links to larger legacy archives. Published on neothink.com by the Neothink Institute as public context; not third-party verified ratings.";

const SPEAKABLE_NR = [
  "main#main-content h1",
  "#nr-hero-sub",
  "#nr-stories-heading",
  "#nr-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "Neothink Reviews | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Reviews", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Neothink Reviews | Neothink Institute",
  description: DESCRIPTION,
  aboutId: schemaIds.society,
  mainEntityId: `${PAGE_URL}#faq`,
  speakableSelectors: SPEAKABLE_NR,
  dateModified: "2026-01-06T19:26:12.000Z",
});

const faqLd = faqPageJsonLd(PATH, NEOTHINK_REVIEWS_FAQ);

export default function NeothinkReviewsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NeothinkReviewsPageContent />
    </>
  );
}
