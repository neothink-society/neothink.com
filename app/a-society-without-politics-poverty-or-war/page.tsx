import { ASocietyWithoutPoliticsPovertyOrWarPageContent } from "@/components/a-society-without-politics-poverty-or-war/a-society-without-politics-poverty-or-war-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  SWPPW_DATES,
  SWPPW_IMAGE,
  SWPPW_META_TITLE,
  SWPPW_PATH,
  SWPPW_QUICK_ANSWER_REST,
} from "@/lib/a-society-without-politics-poverty-or-war-data";
import { SWPPW_FAQ } from "@/lib/a-society-without-politics-poverty-or-war-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = SWPPW_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = SWPPW_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#swppw-intro-lead",
  "#swppw-quick-title",
  "#swppw-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${SWPPW_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${SWPPW_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${SWPPW_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "A Society Without Politics, Poverty, or War", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${SWPPW_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${SWPPW_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${SWPPW_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: SWPPW_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${SWPPW_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${SWPPW_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: SWPPW_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, SWPPW_FAQ);

export default function ASocietyWithoutPoliticsPovertyOrWarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ASocietyWithoutPoliticsPovertyOrWarPageContent />
    </>
  );
}
