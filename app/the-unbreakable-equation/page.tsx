import { TheUnbreakableEquationPageContent } from "@/components/the-unbreakable-equation/the-unbreakable-equation-page-content";
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
  THE_UNBREAKABLE_EQUATION_DATES,
  THE_UNBREAKABLE_EQUATION_HEADLINE,
  THE_UNBREAKABLE_EQUATION_META_DESCRIPTION,
  THE_UNBREAKABLE_EQUATION_PATH,
  THE_UNBREAKABLE_EQUATION_SEO_TITLE,
  THE_UNBREAKABLE_EQUATION_VIDEO_RUNTIME_MINUTES,
  THE_UNBREAKABLE_EQUATION_YOUTUBE_ID,
} from "@/lib/the-unbreakable-equation-data";
import { THE_UNBREAKABLE_EQUATION_FAQ } from "@/lib/the-unbreakable-equation-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_UNBREAKABLE_EQUATION_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${THE_UNBREAKABLE_EQUATION_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#ueq-intro-lead", "#ueq-quick-title", "#ueq-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: THE_UNBREAKABLE_EQUATION_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${THE_UNBREAKABLE_EQUATION_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${THE_UNBREAKABLE_EQUATION_HEADLINE} (video thumbnail)`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${THE_UNBREAKABLE_EQUATION_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: "2026-02-12T16:39:46.000Z",
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The unbreakable equation", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: THE_UNBREAKABLE_EQUATION_META_DESCRIPTION,
  datePublished: `${THE_UNBREAKABLE_EQUATION_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-12T16:39:46.000Z",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_UNBREAKABLE_EQUATION_HEADLINE,
  description: THE_UNBREAKABLE_EQUATION_META_DESCRIPTION,
  datePublished: `${THE_UNBREAKABLE_EQUATION_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-12T16:39:46.000Z",
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${THE_UNBREAKABLE_EQUATION_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, THE_UNBREAKABLE_EQUATION_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The Unbreakable Equation: Neothink Society address (Mark Hamilton)",
  description: THE_UNBREAKABLE_EQUATION_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${THE_UNBREAKABLE_EQUATION_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${THE_UNBREAKABLE_EQUATION_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${THE_UNBREAKABLE_EQUATION_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${THE_UNBREAKABLE_EQUATION_YOUTUBE_ID}`,
  durationMinutes: THE_UNBREAKABLE_EQUATION_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function TheUnbreakableEquationPage() {
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
      <TheUnbreakableEquationPageContent />
    </>
  );
}
