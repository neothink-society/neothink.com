import { FreedomKeyToUnlockingTrueWealthPageContent } from "@/components/freedom-key-to-unlocking-true-wealth/freedom-key-to-unlocking-true-wealth-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  FKTUW_DATES,
  FKTUW_IMAGE,
  FKTUW_META_TITLE,
  FKTUW_PATH,
  FKTUW_YOUTUBE_ID,
} from "@/lib/freedom-key-to-unlocking-true-wealth-data";
import { FKTUW_FAQ } from "@/lib/freedom-key-to-unlocking-true-wealth-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = FKTUW_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Why economic freedom drives true wealth: innovation vs regulation, the computer revolution, initiatory force, the Prime Law, Immortalis, and a network-state path. Neothink Awakening article on neothink.com.";

const SPEAKABLE_FKTUW = [
  "main#main-content h1",
  "#fktuw-intro-lead",
  "#fktuw-quick-title",
  "#fktuw-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${FKTUW_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: FKTUW_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${FKTUW_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${FKTUW_DATES.dateModified}T20:25:08.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Freedom & true wealth", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${FKTUW_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${FKTUW_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${FKTUW_DATES.dateModified}T20:25:08.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_FKTUW,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: FKTUW_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${FKTUW_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${FKTUW_DATES.dateModified}T20:25:08.000Z`,
  authorId: schemaIds.organization,
  image: FKTUW_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, FKTUW_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${FKTUW_META_TITLE} — video | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${FKTUW_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${FKTUW_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${FKTUW_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${FKTUW_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function FreedomKeyToUnlockingTrueWealthPage() {
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
      <FreedomKeyToUnlockingTrueWealthPageContent />
    </>
  );
}
