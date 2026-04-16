import { DecodingSuperPuzzlePageContent } from "@/components/decoding-super-puzzle/decoding-super-puzzle-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  DECODING_SUPER_PUZZLE_DATES,
  DECODING_SUPER_PUZZLE_HEADLINE,
  DECODING_SUPER_PUZZLE_META_DESCRIPTION,
  DECODING_SUPER_PUZZLE_PATH,
  DECODING_SUPER_PUZZLE_SEO_TITLE,
  DECODING_SUPER_PUZZLE_VIDEO_RUNTIME_MINUTES,
  DECODING_SUPER_PUZZLE_YOUTUBE_ID,
} from "@/lib/decoding-super-puzzle-data";
import { DECODING_SUPER_PUZZLE_FAQ } from "@/lib/decoding-super-puzzle-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = DECODING_SUPER_PUZZLE_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${DECODING_SUPER_PUZZLE_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#dsp-intro-lead", "#dsp-quick-title", "#dsp-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: DECODING_SUPER_PUZZLE_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${DECODING_SUPER_PUZZLE_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `2026-02-12T20:10:06.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Decoding Super Puzzle", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: DECODING_SUPER_PUZZLE_META_DESCRIPTION,
  datePublished: `${DECODING_SUPER_PUZZLE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-12T20:10:06.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: DECODING_SUPER_PUZZLE_HEADLINE,
  description: DECODING_SUPER_PUZZLE_META_DESCRIPTION,
  datePublished: `${DECODING_SUPER_PUZZLE_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `2026-02-12T20:10:06.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, DECODING_SUPER_PUZZLE_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Decoding Super Puzzle: The Secret Formula for Curing Aging — Neothink Philosophy (Mark Hamilton)",
  description: DECODING_SUPER_PUZZLE_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${DECODING_SUPER_PUZZLE_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${DECODING_SUPER_PUZZLE_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${DECODING_SUPER_PUZZLE_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${DECODING_SUPER_PUZZLE_YOUTUBE_ID}`,
  durationMinutes: DECODING_SUPER_PUZZLE_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function DecodingSuperPuzzlePage() {
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
      <DecodingSuperPuzzlePageContent />
    </>
  );
}
