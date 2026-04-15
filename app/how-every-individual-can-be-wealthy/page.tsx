import { HowEveryIndividualCanBeWealthyPageContent } from "@/components/how-every-individual-can-be-wealthy/how-every-individual-can-be-wealthy-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { schemaIds } from "@/lib/schema-ids";
import { pageMetadata } from "@/lib/seo-metadata";
import {
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_DATES,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_HEADLINE,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_META_DESCRIPTION,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_PATH,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_SEO_TITLE,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_VIDEO_RUNTIME_MINUTES,
  HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_YOUTUBE_ID,
} from "@/lib/how-every-individual-can-be-wealthy-data";
import { HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_FAQ } from "@/lib/how-every-individual-can-be-wealthy-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#heiw-intro-lead", "#heiw-quick-title", "#heiw-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: "2026-02-14T03:53:50.000Z",
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "How every individual can be wealthy", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_META_DESCRIPTION,
  datePublished: `${HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-14T03:53:50.000Z",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_HEADLINE,
  description: HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_META_DESCRIPTION,
  datePublished: `${HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-14T03:53:50.000Z",
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "How Every Individual Can Be Wealthy — Neothink Society address (Mark Hamilton)",
  description: HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_YOUTUBE_ID}`,
  durationMinutes: HOW_EVERY_INDIVIDUAL_CAN_BE_WEALTHY_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function HowEveryIndividualCanBeWealthyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd) }} />
      <HowEveryIndividualCanBeWealthyPageContent />
    </>
  );
}
