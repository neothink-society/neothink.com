import { YoureBeingManipulatedTheyUseGuiltToControlYouPageContent } from "@/components/youre-being-manipulated-they-use-guilt-to-control-you/youre-being-manipulated-they-use-guilt-to-control-you-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  YBMG_DATES,
  YBMG_IMAGE,
  YBMG_META_TITLE,
  YBMG_PATH,
  YBMG_YOUTUBE_ID,
  YBMG_QUICK_ANSWER_REST,
} from "@/lib/youre-being-manipulated-they-use-guilt-to-control-you-data";
import { YBMG_FAQ } from "@/lib/youre-being-manipulated-they-use-guilt-to-control-you-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = YBMG_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = YBMG_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#ybmg-intro-lead",
  "#ybmg-quick-title",
  "#ybmg-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${YBMG_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: YBMG_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${YBMG_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${YBMG_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "You’re Being Manipulated! They Use Guilt to Control You!", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${YBMG_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${YBMG_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${YBMG_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: YBMG_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${YBMG_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${YBMG_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: YBMG_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, YBMG_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${YBMG_META_TITLE} — video | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${YBMG_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${YBMG_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${YBMG_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${YBMG_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function YoureBeingManipulatedTheyUseGuiltToControlYouPage() {
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
      <YoureBeingManipulatedTheyUseGuiltToControlYouPageContent />
    </>
  );
}
