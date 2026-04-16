import { PhilosopherMakeYourLifeExcitingAgainDoThisPageContent } from "@/components/philosopher-make-your-life-exciting-again-do-this/philosopher-make-your-life-exciting-again-do-this-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  PMLEA_DATES,
  PMLEA_IMAGE,
  PMLEA_META_TITLE,
  PMLEA_PATH,
  PMLEA_QUICK_ANSWER_REST,
} from "@/lib/philosopher-make-your-life-exciting-again-do-this-data";
import { PMLEA_FAQ } from "@/lib/philosopher-make-your-life-exciting-again-do-this-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = PMLEA_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = PMLEA_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#pmlea-intro-lead",
  "#pmlea-quick-title",
  "#pmlea-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${PMLEA_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${PMLEA_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${PMLEA_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Make Your Life Exciting Again", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${PMLEA_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${PMLEA_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${PMLEA_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: PMLEA_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${PMLEA_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${PMLEA_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: PMLEA_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, PMLEA_FAQ);

export default function PhilosopherMakeYourLifeExcitingAgainDoThisPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <PhilosopherMakeYourLifeExcitingAgainDoThisPageContent />
    </>
  );
}
