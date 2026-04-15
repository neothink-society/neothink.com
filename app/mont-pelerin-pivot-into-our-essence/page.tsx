import { MontPelerinPivotIntoOurEssencePageContent } from "@/components/mont-pelerin-pivot-into-our-essence/mont-pelerin-pivot-into-our-essence-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  MONT_PELERIN_PIVOT_DATES,
  MONT_PELERIN_PIVOT_META_TITLE,
  MONT_PELERIN_PIVOT_PATH,
} from "@/lib/mont-pelerin-pivot-into-our-essence-data";
import { MONT_PELERIN_PIVOT_FAQ } from "@/lib/mont-pelerin-pivot-into-our-essence-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = MONT_PELERIN_PIVOT_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "The Mont Pelerin pivot: medical mecca messaging, essence vs. abstraction, turnkey packages — Neothink Philosophy citizens meeting on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#mpp-intro-lead", "#mpp-quick-title", "#mpp-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${MONT_PELERIN_PIVOT_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${MONT_PELERIN_PIVOT_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${MONT_PELERIN_PIVOT_DATES.dateModified}T20:09:47.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Mont Pelerin pivot", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${MONT_PELERIN_PIVOT_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${MONT_PELERIN_PIVOT_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${MONT_PELERIN_PIVOT_DATES.dateModified}T20:09:47.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: MONT_PELERIN_PIVOT_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${MONT_PELERIN_PIVOT_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${MONT_PELERIN_PIVOT_DATES.dateModified}T20:09:47.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, MONT_PELERIN_PIVOT_FAQ);

export default function MontPelerinPivotIntoOurEssencePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <MontPelerinPivotIntoOurEssencePageContent />
    </>
  );
}
