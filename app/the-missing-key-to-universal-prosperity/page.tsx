import { TheMissingKeyToUniversalProsperityPageContent } from "@/components/the-missing-key-to-universal-prosperity/the-missing-key-to-universal-prosperity-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { MKUP_DATES, MKUP_META_TITLE, MKUP_PATH, MKUP_YOUTUBE_ID } from "@/lib/the-missing-key-to-universal-prosperity-data";
import { MKUP_FAQ } from "@/lib/the-missing-key-to-universal-prosperity-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = MKUP_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "The missing key to universal prosperity: Mark Hamilton on the following mode, the self-leader mentality, and the second evolutionary leap of the human mind. Neothink Philosophy speech on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#mkup-intro-lead", "#mkup-quick-title", "#mkup-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${MKUP_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${MKUP_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${MKUP_META_TITLE} — video thumbnail`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${MKUP_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${MKUP_DATES.dateModified}T20:09:55.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Missing key to universal prosperity", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${MKUP_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${MKUP_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${MKUP_DATES.dateModified}T20:09:55.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: MKUP_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${MKUP_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${MKUP_DATES.dateModified}T20:09:55.000Z`,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${MKUP_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, MKUP_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${MKUP_META_TITLE} — video | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${MKUP_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${MKUP_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${MKUP_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${MKUP_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function TheMissingKeyToUniversalProsperityPage() {
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
      <TheMissingKeyToUniversalProsperityPageContent />
    </>
  );
}
