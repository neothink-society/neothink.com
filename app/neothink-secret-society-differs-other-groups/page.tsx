import { NeothinkSecretSocietyDiffersPageContent } from "@/components/neothink-secret-society-differs/neothink-secret-society-differs-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NSSD_DATES,
  NSSD_IMAGE,
  NSSD_PATH,
} from "@/lib/neothink-secret-society-differs-data";
import { NSSD_FAQ } from "@/lib/neothink-secret-society-differs-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./nssd-page.css";

const PATH = NSSD_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "How the Neothink Secret Society differs from typical secret groups: open knowledge, growth, integrated thinking, empowerment, practical tools, and community—public article on neothink.com by the Neothink Institute.";

const SPEAKABLE_NSSD = [
  "main#main-content h1",
  "#nssd-intro-lead",
  "#nssd-open-knowledge-h",
  "#nssd-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "How Neothink Differs From Other Secret Groups | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: NSSD_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${NSSD_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${NSSD_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink vs other secret groups", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "How Neothink Differs From Other Secret Groups | Neothink Institute",
  description: DESCRIPTION,
  datePublished: `${NSSD_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${NSSD_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_NSSD,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "How the Neothink Secret Society Differs From Other Secret Groups",
  description: DESCRIPTION,
  datePublished: `${NSSD_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${NSSD_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: NSSD_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, NSSD_FAQ);

export default function NeothinkSecretSocietyDiffersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NeothinkSecretSocietyDiffersPageContent />
    </>
  );
}
