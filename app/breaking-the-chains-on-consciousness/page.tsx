import { BreakingTheChainsOnConsciousnessPageContent } from "@/components/breaking-the-chains-on-consciousness/breaking-the-chains-on-consciousness-page-content";
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
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_DATES,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_HEADLINE,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_META_DESCRIPTION,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_PATH,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_SEO_TITLE,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_VIDEO_RUNTIME_MINUTES,
  BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_YOUTUBE_ID,
} from "@/lib/breaking-the-chains-on-consciousness-data";
import { BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_FAQ } from "@/lib/breaking-the-chains-on-consciousness-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#btco-intro-lead", "#btco-quick-title", "#btco-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_HEADLINE} (video thumbnail)`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: "2026-02-12T18:19:40.000Z",
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Breaking the chains on consciousness", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_META_DESCRIPTION,
  datePublished: `${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-12T18:19:40.000Z",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_HEADLINE,
  description: BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_META_DESCRIPTION,
  datePublished: `${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-12T18:19:40.000Z",
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Breaking The Chains On Consciousness: Neothink Society address (Mark Hamilton)",
  description: BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_YOUTUBE_ID}`,
  durationMinutes: BREAKING_THE_CHAINS_ON_CONSCIOUSNESS_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function BreakingTheChainsOnConsciousnessPage() {
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
      <BreakingTheChainsOnConsciousnessPageContent />
    </>
  );
}
