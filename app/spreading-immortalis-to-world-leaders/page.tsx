import { SpreadingImmortalisToWorldLeadersPageContent } from "@/components/spreading-immortalis-to-world-leaders/spreading-immortalis-to-world-leaders-page-content";
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
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_DATES,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_HEADLINE,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_META_DESCRIPTION,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_PATH,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_SEO_TITLE,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_VIDEO_RUNTIME_MINUTES,
  SPREADING_IMMORTALIS_TO_WORLD_LEADERS_YOUTUBE_ID,
} from "@/lib/spreading-immortalis-to-world-leaders-data";
import { SPREADING_IMMORTALIS_TO_WORLD_LEADERS_FAQ } from "@/lib/spreading-immortalis-to-world-leaders-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = SPREADING_IMMORTALIS_TO_WORLD_LEADERS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#siwl-intro-lead", "#siwl-quick-title", "#siwl-faq-heading"] as const;

const MODIFIED = "2026-02-12T17:14:11.000Z";

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: SPREADING_IMMORTALIS_TO_WORLD_LEADERS_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_HEADLINE} (video thumbnail)`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: MODIFIED,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Spreading Immortalis to world leaders", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: SPREADING_IMMORTALIS_TO_WORLD_LEADERS_META_DESCRIPTION,
  datePublished: `${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: SPREADING_IMMORTALIS_TO_WORLD_LEADERS_HEADLINE,
  description: SPREADING_IMMORTALIS_TO_WORLD_LEADERS_META_DESCRIPTION,
  datePublished: `${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: MODIFIED,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, SPREADING_IMMORTALIS_TO_WORLD_LEADERS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Spreading Immortalis to World Leaders: Neothink Society address (Mark Hamilton)",
  description: SPREADING_IMMORTALIS_TO_WORLD_LEADERS_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${SPREADING_IMMORTALIS_TO_WORLD_LEADERS_YOUTUBE_ID}`,
  durationMinutes: SPREADING_IMMORTALIS_TO_WORLD_LEADERS_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function SpreadingImmortalisToWorldLeadersPage() {
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
      <SpreadingImmortalisToWorldLeadersPageContent />
    </>
  );
}
