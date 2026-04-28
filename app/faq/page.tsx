import { FaqPageContent } from "@/components/faq/faq-page-content";
import { breadcrumbListJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { NTI_FAQ_FOR_JSON_LD } from "@/lib/nti-faq";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./faq-page.css";

const PATH = "/faq";
const PAGE_URL = `${siteConfig.url}${PATH}`;

const TITLE =
  "Common Questions About the Neothink Institute | Neothink Institute";
const DESCRIPTION =
  "Answers to common questions about the Neothink Institute, the Unified Field, the Neothink Corpus, Unleashed, Neovia, and the relationship to Neothink Society.";

const SPEAKABLE_FAQ = [
  "main#main-content h1",
  "#faq-intro-lead",
  "#about-the-institute-heading",
] as const;

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Common Questions", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: TITLE,
  description: DESCRIPTION,
  pageType: "WebPage",
  aboutId: schemaIds.organization,
  mainEntityId: `${PAGE_URL}#faq`,
  speakableSelectors: SPEAKABLE_FAQ,
});

const faqLd = faqPageJsonLd(PATH, NTI_FAQ_FOR_JSON_LD);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <FaqPageContent />
    </>
  );
}
