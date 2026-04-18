import { NeothinkSocietyClearingMisunderstandingsPageContent } from "@/components/neothink-society-clearing-misunderstandings/neothink-society-clearing-misunderstandings-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NSCM_DATES,
  NSCM_HEADLINE,
  NSCM_IMAGE,
  NSCM_PATH,
} from "@/lib/neothink-society-clearing-misunderstandings-data";
import { NSCM_FAQ } from "@/lib/neothink-society-clearing-misunderstandings-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = NSCM_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Clearing up misunderstandings about the “Neothink secret society”: empowerment vs rumors, what sets the Society apart, myths, and personal development. Agency-era article on neothink.com.";

const SPEAKABLE_NSCM = [
  "main#main-content h1",
  "#nscm-intro-lead",
  "#nscm-what-is-the-neothink-secret-society-h",
  "#nscm-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${NSCM_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: NSCM_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${NSCM_DATES.datePublished}T06:16:00.000Z`,
    modifiedTime: `${NSCM_DATES.dateModified}T05:10:33.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Clearing up secret society misunderstandings", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NSCM_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${NSCM_DATES.datePublished}T06:16:00.000Z`,
  dateModified: `${NSCM_DATES.dateModified}T05:10:33.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_NSCM,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NSCM_HEADLINE,
  description: DESCRIPTION,
  datePublished: `${NSCM_DATES.datePublished}T06:16:00.000Z`,
  dateModified: `${NSCM_DATES.dateModified}T05:10:33.000Z`,
  authorId: schemaIds.organization,
  image: NSCM_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, NSCM_FAQ);

export default function NeothinkSocietyClearingMisunderstandingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NeothinkSocietyClearingMisunderstandingsPageContent />
    </>
  );
}
