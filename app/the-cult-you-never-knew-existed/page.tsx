import { TheCultYouNeverKnewExistedPageContent } from "@/components/the-cult-you-never-knew-existed/the-cult-you-never-knew-existed-page-content";
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
  THE_CULT_YOU_NEVER_KNEW_EXISTED_DATES,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_HEADLINE,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_META_DESCRIPTION,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_PATH,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_SEO_TITLE,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_VIDEO_RUNTIME_MINUTES,
  THE_CULT_YOU_NEVER_KNEW_EXISTED_YOUTUBE_ID,
} from "@/lib/the-cult-you-never-knew-existed-data";
import { THE_CULT_YOU_NEVER_KNEW_EXISTED_FAQ } from "@/lib/the-cult-you-never-knew-existed-faq";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = THE_CULT_YOU_NEVER_KNEW_EXISTED_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${THE_CULT_YOU_NEVER_KNEW_EXISTED_SEO_TITLE} | Neothink Institute`;

const SPEAKABLE = ["main#main-content h1", "#tcy-intro-lead", "#tcy-quick-title", "#tcy-faq-heading"] as const;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: THE_CULT_YOU_NEVER_KNEW_EXISTED_META_DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${THE_CULT_YOU_NEVER_KNEW_EXISTED_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${THE_CULT_YOU_NEVER_KNEW_EXISTED_HEADLINE} — video thumbnail`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${THE_CULT_YOU_NEVER_KNEW_EXISTED_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: "2026-02-14T03:53:51.000Z",
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "The cult you never knew existed", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: THE_CULT_YOU_NEVER_KNEW_EXISTED_META_DESCRIPTION,
  datePublished: `${THE_CULT_YOU_NEVER_KNEW_EXISTED_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-14T03:53:51.000Z",
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: THE_CULT_YOU_NEVER_KNEW_EXISTED_HEADLINE,
  description: THE_CULT_YOU_NEVER_KNEW_EXISTED_META_DESCRIPTION,
  datePublished: `${THE_CULT_YOU_NEVER_KNEW_EXISTED_DATES.datePublished}T09:00:00.000Z`,
  dateModified: "2026-02-14T03:53:51.000Z",
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${THE_CULT_YOU_NEVER_KNEW_EXISTED_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, THE_CULT_YOU_NEVER_KNEW_EXISTED_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "The Cult You Never Knew Existed — Neothink Society address (Mark Hamilton)",
  description: THE_CULT_YOU_NEVER_KNEW_EXISTED_META_DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${THE_CULT_YOU_NEVER_KNEW_EXISTED_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${THE_CULT_YOU_NEVER_KNEW_EXISTED_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${THE_CULT_YOU_NEVER_KNEW_EXISTED_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${THE_CULT_YOU_NEVER_KNEW_EXISTED_YOUTUBE_ID}`,
  durationMinutes: THE_CULT_YOU_NEVER_KNEW_EXISTED_VIDEO_RUNTIME_MINUTES,
  speakerId: schemaIds.founder,
});

export default function TheCultYouNeverKnewExistedPage() {
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
      <TheCultYouNeverKnewExistedPageContent />
    </>
  );
}
