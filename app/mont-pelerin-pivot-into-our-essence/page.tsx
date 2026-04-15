import { MontPelerinPivotIntoOurEssencePageContent } from "@/components/mont-pelerin-pivot-into-our-essence/mont-pelerin-pivot-into-our-essence-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  MONT_PELERIN_PIVOT_DATES,
  MONT_PELERIN_PIVOT_HEADLINE,
  MONT_PELERIN_PIVOT_META_DESCRIPTION,
  MONT_PELERIN_PIVOT_PATH,
  MONT_PELERIN_PIVOT_SEO_TITLE,
  MONT_PELERIN_PIVOT_VIDEO_RUNTIME_MINUTES,
  MONT_PELERIN_PIVOT_YOUTUBE_ID,
} from "@/lib/mont-pelerin-pivot-into-our-essence-data";
import { MONT_PELERIN_PIVOT_FAQ } from "@/lib/mont-pelerin-pivot-into-our-essence-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = MONT_PELERIN_PIVOT_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${MONT_PELERIN_PIVOT_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#mpp-intro-lead", "#mpp-quick-title", "#mpp-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: MONT_PELERIN_PIVOT_META_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${MONT_PELERIN_PIVOT_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${MONT_PELERIN_PIVOT_DATES.dateModified}T20:09:47.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The Mont Pelerin pivot", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: MONT_PELERIN_PIVOT_META_DESCRIPTION,
  datePublished: `${MONT_PELERIN_PIVOT_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${MONT_PELERIN_PIVOT_DATES.dateModified}T20:09:47.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: MONT_PELERIN_PIVOT_HEADLINE,
  description: MONT_PELERIN_PIVOT_META_DESCRIPTION,
  datePublished: `${MONT_PELERIN_PIVOT_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${MONT_PELERIN_PIVOT_DATES.dateModified}T20:09:47.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, MONT_PELERIN_PIVOT_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The Mont Pelerin Pivot — citizens meeting (Mark Hamilton)",
  description: MONT_PELERIN_PIVOT_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${MONT_PELERIN_PIVOT_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${MONT_PELERIN_PIVOT_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${MONT_PELERIN_PIVOT_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${MONT_PELERIN_PIVOT_YOUTUBE_ID}`,
  durationMinutes: MONT_PELERIN_PIVOT_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function MontPelerinPivotIntoOurEssencePage() {
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
      <MontPelerinPivotIntoOurEssencePageContent />
    </>
  );
}
