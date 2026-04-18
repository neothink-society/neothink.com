import { WhatPeopleGetWrongNeothinkUniversityPageContent } from "@/components/what-people-get-wrong-neothink-university/what-people-get-wrong-neothink-university-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  WPGU_DATES,
  WPGU_HEADLINE,
  WPGU_IMAGE,
  WPGU_PATH,
} from "@/lib/what-people-get-wrong-neothink-university-data";
import { WPGU_FAQ } from "@/lib/what-people-get-wrong-neothink-university-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = WPGU_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Common myths about Neothink University vs what the platform describes: traditional school, entrepreneurs-only, instant results, wealth-only, who it is for, cost, and the truth. WordPress-migrated article on neothink.com.";

const SPEAKABLE_WPGU = [
  "main#main-content h1",
  "#wpgu-intro-lead",
  "#wpgu-myth-1-traditional-school-h",
  "#wpgu-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${WPGU_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: WPGU_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${WPGU_DATES.datePublished}T09:51:24.000Z`,
    modifiedTime: `${WPGU_DATES.dateModified}T05:10:23.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "What people get wrong about Neothink University", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${WPGU_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${WPGU_DATES.datePublished}T09:51:24.000Z`,
  dateModified: `${WPGU_DATES.dateModified}T05:10:23.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_WPGU,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: WPGU_HEADLINE,
  description: DESCRIPTION,
  datePublished: `${WPGU_DATES.datePublished}T09:51:24.000Z`,
  dateModified: `${WPGU_DATES.dateModified}T05:10:23.000Z`,
  authorId: schemaIds.organization,
  image: WPGU_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, WPGU_FAQ);

export default function WhatPeopleGetWrongNeothinkUniversityPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <WhatPeopleGetWrongNeothinkUniversityPageContent />
    </>
  );
}
