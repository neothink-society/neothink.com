import { AreWeTheIlluminatiTruthPageContent } from "@/components/are-we-the-illuminati-truth/are-we-the-illuminati-truth-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  AWTI_DATES,
  AWTI_IMAGE,
  AWTI_META_TITLE,
  AWTI_PATH,
  AWTI_YOUTUBE_ID,
  AWTI_QUICK_ANSWER_REST,
} from "@/lib/are-we-the-illuminati-truth-data";
import { AWTI_FAQ } from "@/lib/are-we-the-illuminati-truth-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = AWTI_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = AWTI_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#awti-intro-lead",
  "#awti-quick-title",
  "#awti-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${AWTI_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: AWTI_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${AWTI_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${AWTI_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Are We the Illuminati? The Truth Behind the Allegations", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${AWTI_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${AWTI_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${AWTI_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: AWTI_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${AWTI_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${AWTI_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: AWTI_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, AWTI_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${AWTI_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${AWTI_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${AWTI_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${AWTI_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${AWTI_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function AreWeTheIlluminatiTruthPage() {
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
      <AreWeTheIlluminatiTruthPageContent />
    </>
  );
}
