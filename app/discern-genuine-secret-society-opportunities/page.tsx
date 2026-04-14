import { DiscernGenuineSecretSocietyPageContent } from "@/components/discern-genuine-secret-society/discern-genuine-secret-society-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { DGSS_DATES, DGSS_IMAGE, DGSS_PATH } from "@/lib/discern-genuine-secret-society-data";
import { DGSS_FAQ } from "@/lib/discern-genuine-secret-society-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = DGSS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "How to tell genuine secret society opportunities from fraud: self-leadership, transparency, community, track record, and pressure tactics. Agency-era Neothink Society article on neothink.com.";

const SPEAKABLE_DGSS = [
  "main#main-content h1",
  "#dgss-intro-lead",
  "#dgss-real-societies-focus-on-self-leadership-not-control-h",
  "#dgss-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "How To Discern Genuine Secret Society Opportunities From Fraud | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${DGSS_DATES.datePublished}T16:15:05.000Z`,
    modifiedTime: `${DGSS_DATES.dateModified}T05:10:21.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Discern genuine vs fraud", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "How To Discern Genuine Secret Society Opportunities From Fraud | Neothink Institute",
  description: DESCRIPTION,
  datePublished: `${DGSS_DATES.datePublished}T16:15:05.000Z`,
  dateModified: `${DGSS_DATES.dateModified}T05:10:21.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_DGSS,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "How To Discern Genuine Secret Society Opportunities From Fraud",
  description: DESCRIPTION,
  datePublished: `${DGSS_DATES.datePublished}T16:15:05.000Z`,
  dateModified: `${DGSS_DATES.dateModified}T05:10:21.000Z`,
  authorId: schemaIds.organization,
  image: DGSS_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, DGSS_FAQ);

export default function DiscernGenuineSecretSocietyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <DiscernGenuineSecretSocietyPageContent />
    </>
  );
}
