import { TheFutureOfHumanityBuildingANewCountryWithoutRulersPageContent } from "@/components/the-future-of-humanity-building-a-new-country-without-rulers/the-future-of-humanity-building-a-new-country-without-rulers-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  FHBNCWR_DATES,
  FHBNCWR_IMAGE,
  FHBNCWR_META_TITLE,
  FHBNCWR_PATH,
  FHBNCWR_QUICK_ANSWER_REST,
} from "@/lib/the-future-of-humanity-building-a-new-country-without-rulers-data";
import { FHBNCWR_FAQ } from "@/lib/the-future-of-humanity-building-a-new-country-without-rulers-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = FHBNCWR_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = FHBNCWR_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#fhbncwr-intro-lead",
  "#fhbncwr-quick-title",
  "#fhbncwr-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${FHBNCWR_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${FHBNCWR_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${FHBNCWR_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "The Future of Humanity", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${FHBNCWR_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${FHBNCWR_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${FHBNCWR_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: FHBNCWR_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${FHBNCWR_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${FHBNCWR_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: FHBNCWR_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, FHBNCWR_FAQ);

export default function TheFutureOfHumanityBuildingANewCountryWithoutRulersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <TheFutureOfHumanityBuildingANewCountryWithoutRulersPageContent />
    </>
  );
}
