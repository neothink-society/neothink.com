import { WhyNeothinkMakesYouIrresistiblePageContent } from "@/components/why-neothink-makes-you-irresistible/why-neothink-makes-you-irresistible-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  WNMYI_DATES,
  WNMYI_IMAGE,
  WNMYI_META_TITLE,
  WNMYI_PATH,
  WNMYI_YOUTUBE_ID,
  WNMYI_QUICK_ANSWER_REST,
} from "@/lib/why-neothink-makes-you-irresistible-data";
import { WNMYI_FAQ } from "@/lib/why-neothink-makes-you-irresistible-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = WNMYI_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION = WNMYI_QUICK_ANSWER_REST;

const SPEAKABLE = [
  "main#main-content h1",
  "#wnmyi-intro-lead",
  "#wnmyi-quick-title",
  "#wnmyi-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${WNMYI_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: WNMYI_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${WNMYI_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${WNMYI_DATES.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Awakening", path: "/category/neothink-awakening" },
  { name: "The Surprising Reason Neothink Makes You Irresistible", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${WNMYI_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${WNMYI_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${WNMYI_DATES.dateModified}T12:00:00.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: WNMYI_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${WNMYI_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${WNMYI_DATES.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
  image: WNMYI_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, WNMYI_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${WNMYI_META_TITLE} — video | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${WNMYI_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${WNMYI_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${WNMYI_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${WNMYI_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function WhyNeothinkMakesYouIrresistiblePage() {
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
      <WhyNeothinkMakesYouIrresistiblePageContent />
    </>
  );
}
