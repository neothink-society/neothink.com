import { SeparatingHeroesFromDreamersPageContent } from "@/components/separating-heroes-from-dreamers/separating-heroes-from-dreamers-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  SHFD_DATES,
  SHFD_IMAGE,
  SHFD_META_TITLE,
  SHFD_PATH,
  SHFD_YOUTUBE_ID,
  SHFD_QUICK_ANSWER_REST,
} from "@/lib/separating-heroes-from-dreamers-data";
import { SHFD_FAQ } from "@/lib/separating-heroes-from-dreamers-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = SHFD_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = SHFD_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#shfd-intro-lead",
  "#shfd-quick-title",
  "#shfd-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${SHFD_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: SHFD_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${SHFD_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${SHFD_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Separating Heroes from Dreamers", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${SHFD_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${SHFD_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${SHFD_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: SHFD_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${SHFD_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${SHFD_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: SHFD_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, SHFD_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${SHFD_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${SHFD_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${SHFD_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${SHFD_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${SHFD_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function SeparatingHeroesFromDreamersPage() {
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
      <SeparatingHeroesFromDreamersPageContent />
    </>
  );
}
