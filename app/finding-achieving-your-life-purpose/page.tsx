import { FindingAchievingYourLifePurposePageContent } from "@/components/finding-achieving-your-life-purpose/finding-achieving-your-life-purpose-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  FAYLP_DATES,
  FAYLP_IMAGE,
  FAYLP_META_TITLE,
  FAYLP_PATH,
  FAYLP_QUICK_ANSWER_REST,
} from "@/lib/finding-achieving-your-life-purpose-data";
import { FAYLP_FAQ } from "@/lib/finding-achieving-your-life-purpose-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = FAYLP_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = FAYLP_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#faylp-intro-lead",
  "#faylp-quick-title",
  "#faylp-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${FAYLP_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: FAYLP_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${FAYLP_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${FAYLP_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "A Process for Finding & Achieving Your Life’s Purpose", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${FAYLP_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${FAYLP_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${FAYLP_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: FAYLP_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${FAYLP_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${FAYLP_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: FAYLP_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, FAYLP_FAQ);

export default function FindingAchievingYourLifePurposePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <FindingAchievingYourLifePurposePageContent />
    </>
  );
}
