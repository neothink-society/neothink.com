import { ThinkLikeElonMuskMindHacksPageContent } from "@/components/think-like-elon-musk-mind-hacks/think-like-elon-musk-mind-hacks-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  TLEMMH_DATES,
  TLEMMH_IMAGE,
  TLEMMH_META_TITLE,
  TLEMMH_PATH,
  TLEMMH_YOUTUBE_ID,
  TLEMMH_QUICK_ANSWER_REST,
} from "@/lib/think-like-elon-musk-mind-hacks-data";
import { TLEMMH_FAQ } from "@/lib/think-like-elon-musk-mind-hacks-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = TLEMMH_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = TLEMMH_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#tlemmh-intro-lead",
  "#tlemmh-quick-title",
  "#tlemmh-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${TLEMMH_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: TLEMMH_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${TLEMMH_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${TLEMMH_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "Think Like Elon Musk", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${TLEMMH_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${TLEMMH_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${TLEMMH_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: TLEMMH_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${TLEMMH_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${TLEMMH_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: TLEMMH_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, TLEMMH_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${TLEMMH_META_TITLE} — video | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${TLEMMH_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${TLEMMH_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${TLEMMH_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${TLEMMH_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function ThinkLikeElonMuskMindHacksPage() {
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
      <ThinkLikeElonMuskMindHacksPageContent />
    </>
  );
}
