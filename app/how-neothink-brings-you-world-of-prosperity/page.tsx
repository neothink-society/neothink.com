import { HowNeothinkBringsYouWorldOfProsperityPageContent } from "@/components/how-neothink-brings-you-world-of-prosperity/how-neothink-brings-you-world-of-prosperity-page-content";
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
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_DATES,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_HEADLINE,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_META_DESCRIPTION,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_PATH,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_SEO_TITLE,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_VIDEO_RUNTIME_MINUTES,
  HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_YOUTUBE_ID,
} from "@/lib/how-neothink-brings-you-world-of-prosperity-data";
import { HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_FAQ } from "@/lib/how-neothink-brings-you-world-of-prosperity-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#hnwp-intro-lead", "#hnwp-quick-title", "#hnwp-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: "2026-02-14T03:54:55.000Z",
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "How Neothink brings you a world of prosperity", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_META_DESCRIPTION,
  datePublished: `${HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-14T03:54:55.000Z",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_HEADLINE,
  description: HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_META_DESCRIPTION,
  datePublished: `${HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-14T03:54:55.000Z",
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "How Neothink Brings You a World of Prosperity — Neothink Society address (Mark Hamilton)",
  description: HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_YOUTUBE_ID}`,
  durationMinutes: HOW_NEOTHINK_BRINGS_YOU_WORLD_OF_PROSPERITY_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function HowNeothinkBringsYouWorldOfProsperityPage() {
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
      <HowNeothinkBringsYouWorldOfProsperityPageContent />
    </>
  );
}
