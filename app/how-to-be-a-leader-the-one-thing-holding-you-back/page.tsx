import { HowToBeALeaderTheOneThingHoldingYouBackPageContent } from "@/components/how-to-be-a-leader-the-one-thing-holding-you-back/how-to-be-a-leader-the-one-thing-holding-you-back-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  HBL1TH_DATES,
  HBL1TH_IMAGE,
  HBL1TH_META_TITLE,
  HBL1TH_PATH,
  HBL1TH_YOUTUBE_ID,
  HBL1TH_QUICK_ANSWER_REST,
} from "@/lib/how-to-be-a-leader-the-one-thing-holding-you-back-data";
import { HBL1TH_FAQ } from "@/lib/how-to-be-a-leader-the-one-thing-holding-you-back-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = HBL1TH_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = HBL1TH_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#hbl1th-intro-lead",
  "#hbl1th-quick-title",
  "#hbl1th-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${HBL1TH_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: HBL1TH_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${HBL1TH_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${HBL1TH_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "How to Be a Leader", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${HBL1TH_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${HBL1TH_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${HBL1TH_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: HBL1TH_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${HBL1TH_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${HBL1TH_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: HBL1TH_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, HBL1TH_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${HBL1TH_META_TITLE} — video | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${HBL1TH_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${HBL1TH_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${HBL1TH_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${HBL1TH_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function HowToBeALeaderTheOneThingHoldingYouBackPage() {
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
      <HowToBeALeaderTheOneThingHoldingYouBackPageContent />
    </>
  );
}
