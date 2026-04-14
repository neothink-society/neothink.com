import { ImmortalisPageContent } from "@/components/immortalis/immortalis-page-content";
import {
  breadcrumbListJsonLd,
  faqPageJsonLd,
  itemListEntitiesJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { IMMORTALIS_CITIZEN_BENEFITS } from "@/lib/immortalis-data";
import { IMMORTALIS_FAQ } from "@/lib/immortalis-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./immortalis-page.css";

const PATH = "/immortalis";
const PAGE_URL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Immortalis is a Neothink Society vision for Neothink Country—freedom, innovation, and human flourishing—from digital community toward a physical society grounded in the Prime Law. Published on the Neothink Institute site as public context for the broader idea system.";

const SPEAKABLE_IM = [
  "main#main-content h1",
  "#im-about-heading",
  "#im-benefits-heading",
  "#im-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "Immortalis | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Immortalis", path: PATH },
]);

const benefitsListLd = itemListEntitiesJsonLd({
  pathname: PATH,
  listId: "citizen-benefits",
  name: "Immortalis — described citizen benefits",
  description:
    "Benefits summarized on the Immortalis page: freedom, progress, wealth creation, health focus, peace, global network, and future-focused participation.",
  items: IMMORTALIS_CITIZEN_BENEFITS.map((b) => ({ name: b.title, description: b.body })),
});

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Immortalis | Neothink Institute",
  description: DESCRIPTION,
  aboutId: schemaIds.society,
  mainEntityId: `${PAGE_URL}#citizen-benefits`,
  speakableSelectors: SPEAKABLE_IM,
  dateModified: "2026-03-10T15:31:07.000Z",
});

const faqLd = faqPageJsonLd(PATH, IMMORTALIS_FAQ);

export default function ImmortalisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(benefitsListLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ImmortalisPageContent />
    </>
  );
}
