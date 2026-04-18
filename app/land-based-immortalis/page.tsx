import { LandBasedImmortalisPageContent } from "@/components/land-based-immortalis/land-based-immortalis-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  LAND_BASED_IMMORTALIS_DATES,
  LAND_BASED_IMMORTALIS_HEADLINE,
  LAND_BASED_IMMORTALIS_META_DESCRIPTION,
  LAND_BASED_IMMORTALIS_PATH,
  LAND_BASED_IMMORTALIS_SEO_TITLE,
  LAND_BASED_IMMORTALIS_VIDEO_RUNTIME_MINUTES,
  LAND_BASED_IMMORTALIS_YOUTUBE_ID,
} from "@/lib/land-based-immortalis-data";
import { LAND_BASED_IMMORTALIS_FAQ } from "@/lib/land-based-immortalis-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = LAND_BASED_IMMORTALIS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${LAND_BASED_IMMORTALIS_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#lbi-intro-lead", "#lbi-quick-title", "#lbi-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: LAND_BASED_IMMORTALIS_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${LAND_BASED_IMMORTALIS_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${LAND_BASED_IMMORTALIS_HEADLINE} (video thumbnail)`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${LAND_BASED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${LAND_BASED_IMMORTALIS_DATES.dateModified}T20:09:39.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Land-based Immortalis", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: LAND_BASED_IMMORTALIS_META_DESCRIPTION,
  datePublished: `${LAND_BASED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${LAND_BASED_IMMORTALIS_DATES.dateModified}T20:09:39.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: LAND_BASED_IMMORTALIS_HEADLINE,
  description: LAND_BASED_IMMORTALIS_META_DESCRIPTION,
  datePublished: `${LAND_BASED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${LAND_BASED_IMMORTALIS_DATES.dateModified}T20:09:39.000Z`,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${LAND_BASED_IMMORTALIS_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, LAND_BASED_IMMORTALIS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Land-Based Immortalis: citizens meeting (Mark Hamilton)",
  description: LAND_BASED_IMMORTALIS_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${LAND_BASED_IMMORTALIS_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${LAND_BASED_IMMORTALIS_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${LAND_BASED_IMMORTALIS_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${LAND_BASED_IMMORTALIS_YOUTUBE_ID}`,
  durationMinutes: LAND_BASED_IMMORTALIS_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function LandBasedImmortalisPage() {
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
      <LandBasedImmortalisPageContent />
    </>
  );
}
