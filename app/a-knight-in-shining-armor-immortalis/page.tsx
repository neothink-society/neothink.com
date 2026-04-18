import { AKnightInShiningArmorImmortalisPageContent } from "@/components/a-knight-in-shining-armor-immortalis/a-knight-in-shining-armor-immortalis-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  KNIGHT_IMMORTALIS_DATES,
  KNIGHT_IMMORTALIS_META_TITLE,
  KNIGHT_IMMORTALIS_PATH,
  KNIGHT_IMMORTALIS_YOUTUBE_ID,
} from "@/lib/a-knight-in-shining-armor-immortalis-data";
import { KNIGHT_IMMORTALIS_FAQ } from "@/lib/a-knight-in-shining-armor-immortalis-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = KNIGHT_IMMORTALIS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Immortalis as a knight in shining armor: letters of intent, Argentina and U.S. strategy, and why the message transcends political divides. Neothink Philosophy citizens meeting on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#kni-intro-lead", "#kni-quick-title", "#kni-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${KNIGHT_IMMORTALIS_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${KNIGHT_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${KNIGHT_IMMORTALIS_DATES.dateModified}T20:09:43.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Knight in shining armor: Immortalis", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${KNIGHT_IMMORTALIS_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${KNIGHT_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${KNIGHT_IMMORTALIS_DATES.dateModified}T20:09:43.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: KNIGHT_IMMORTALIS_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${KNIGHT_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${KNIGHT_IMMORTALIS_DATES.dateModified}T20:09:43.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, KNIGHT_IMMORTALIS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${KNIGHT_IMMORTALIS_META_TITLE} — video | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${KNIGHT_IMMORTALIS_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${KNIGHT_IMMORTALIS_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${KNIGHT_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${KNIGHT_IMMORTALIS_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function AKnightInShiningArmorImmortalisPage() {
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
      <AKnightInShiningArmorImmortalisPageContent />
    </>
  );
}
