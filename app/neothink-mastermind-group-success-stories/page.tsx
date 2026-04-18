import { NeothinkMastermindGroupSuccessStoriesPageContent } from "@/components/neothink-mastermind-group-success-stories/neothink-mastermind-group-success-stories-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NMGS_DATES,
  NMGS_HEADLINE,
  NMGS_IMAGE,
  NMGS_PATH,
} from "@/lib/neothink-mastermind-group-success-stories-data";
import { NMGS_FAQ } from "@/lib/neothink-mastermind-group-success-stories-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = NMGS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "How the Neothink mastermind group supports success: collaboration, accountability, learning from peers, Neothink principles, stories, and how to join. WordPress-migrated Society article on neothink.com.";

const SPEAKABLE_NMGS = [
  "main#main-content h1",
  "#nmgs-intro-lead",
  "#nmgs-what-is-the-neothink-mastermind-h",
  "#nmgs-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${NMGS_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: NMGS_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${NMGS_DATES.datePublished}T03:18:00.000Z`,
    modifiedTime: `${NMGS_DATES.dateModified}T16:40:15.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink mastermind success stories", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NMGS_HEADLINE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${NMGS_DATES.datePublished}T03:18:00.000Z`,
  dateModified: `${NMGS_DATES.dateModified}T16:40:15.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_NMGS,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NMGS_HEADLINE,
  description: DESCRIPTION,
  datePublished: `${NMGS_DATES.datePublished}T03:18:00.000Z`,
  dateModified: `${NMGS_DATES.dateModified}T16:40:15.000Z`,
  authorId: schemaIds.organization,
  image: NMGS_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, NMGS_FAQ);

export default function NeothinkMastermindGroupSuccessStoriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <NeothinkMastermindGroupSuccessStoriesPageContent />
    </>
  );
}
