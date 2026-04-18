import { FaqPageContent } from "@/components/faq/faq-page-content";
import { breadcrumbListJsonLd, faqPageJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";
import { SOCIETY_FAQ_FOR_JSON_LD } from "@/lib/society-faq-page";

import "../neothink-university/neothink-university-page.css";
import "./faq-page.css";

const PATH = "/faq";
const PAGE_URL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Frequently asked questions about the Neothink Society: programs, Project Life, Neothink Country, Ascension, and how to get oriented. Published by the Neothink Institute on neothink.com as public context; membership and product details are handled through Society channels.";

const SPEAKABLE_FAQ = [
  "main#main-content h1",
  "#faq-intro-lead",
  "#faq-main-heading",
  "#what-is-neothink-society",
] as const;

export const metadata = pageMetadata({
  title: "FAQ | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "FAQ", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "FAQ | Neothink Institute",
  description: DESCRIPTION,
  aboutId: schemaIds.society,
  mainEntityId: `${PAGE_URL}#faq`,
  speakableSelectors: SPEAKABLE_FAQ,
  dateModified: "2026-03-10T15:29:02.000Z",
});

const faqLd = faqPageJsonLd(PATH, SOCIETY_FAQ_FOR_JSON_LD);

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <FaqPageContent />
    </>
  );
}
