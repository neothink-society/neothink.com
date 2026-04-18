import { LibertariansNextBigPossibilityPageContent } from "@/components/libertarians-next-big-possibility/libertarians-next-big-possibility-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_HEADLINE,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_DESCRIPTION,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_PATH,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_SEO_TITLE,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_VIDEO_RUNTIME_MINUTES,
  LIBERTARIANS_NEXT_BIG_POSSIBILITY_YOUTUBE_ID,
} from "@/lib/libertarians-next-big-possibility-data";
import { LIBERTARIANS_NEXT_BIG_POSSIBILITY_FAQ } from "@/lib/libertarians-next-big-possibility-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = LIBERTARIANS_NEXT_BIG_POSSIBILITY_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#lnb-intro-lead", "#lnb-quick-title", "#lnb-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${LIBERTARIANS_NEXT_BIG_POSSIBILITY_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_HEADLINE} — video thumbnail`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.dateModified}T20:09:36.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Libertarians’ next big possibility", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_DESCRIPTION,
  datePublished: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.dateModified}T20:09:36.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: LIBERTARIANS_NEXT_BIG_POSSIBILITY_HEADLINE,
  description: LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_DESCRIPTION,
  datePublished: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.dateModified}T20:09:36.000Z`,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${LIBERTARIANS_NEXT_BIG_POSSIBILITY_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, LIBERTARIANS_NEXT_BIG_POSSIBILITY_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Libertarians’ Next Big Possibility — Neothink Society address (Mark Hamilton)",
  description: LIBERTARIANS_NEXT_BIG_POSSIBILITY_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${LIBERTARIANS_NEXT_BIG_POSSIBILITY_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${LIBERTARIANS_NEXT_BIG_POSSIBILITY_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${LIBERTARIANS_NEXT_BIG_POSSIBILITY_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${LIBERTARIANS_NEXT_BIG_POSSIBILITY_YOUTUBE_ID}`,
  durationMinutes: LIBERTARIANS_NEXT_BIG_POSSIBILITY_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function LibertariansNextBigPossibilityPage() {
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
      <LibertariansNextBigPossibilityPageContent />
    </>
  );
}
