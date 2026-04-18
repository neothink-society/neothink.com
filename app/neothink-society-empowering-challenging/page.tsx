import { NeothinkSocietyEmpoweringChallengingPageContent } from "@/components/neothink-society-empowering-challenging/neothink-society-empowering-challenging-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { NSEC_DATES, NSEC_IMAGE, NSEC_PATH } from "@/lib/neothink-society-empowering-challenging-data";
import { NSEC_FAQ } from "@/lib/neothink-society-empowering-challenging-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = NSEC_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "How the Neothink Society can feel both empowering and challenging: complaints, the “secret society” phrase, legitimacy, community, and transformation. Agency-era article on neothink.com, published by the Neothink Institute as public context.";

const SPEAKABLE_NSEC = [
  "main#main-content h1",
  "#nsec-intro-lead",
  "#nsec-facing-the-neothink-society-complaints-h",
  "#nsec-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "How The Neothink Society Can Be Both Empowering And Challenging | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: NSEC_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${NSEC_DATES.datePublished}T12:01:53.000Z`,
    modifiedTime: `${NSEC_DATES.dateModified}T16:01:14.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Empowering and challenging", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "How The Neothink Society Can Be Both Empowering And Challenging | Neothink Institute",
  description: DESCRIPTION,
  datePublished: `${NSEC_DATES.datePublished}T12:01:53.000Z`,
  dateModified: `${NSEC_DATES.dateModified}T16:01:14.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_NSEC,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "How The Neothink Society Can Be Both Empowering And Challenging",
  description: DESCRIPTION,
  datePublished: `${NSEC_DATES.datePublished}T12:01:53.000Z`,
  dateModified: `${NSEC_DATES.dateModified}T16:01:14.000Z`,
  authorId: schemaIds.organization,
  image: NSEC_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, NSEC_FAQ);

export default function NeothinkSocietyEmpoweringChallengingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NeothinkSocietyEmpoweringChallengingPageContent />
    </>
  );
}
