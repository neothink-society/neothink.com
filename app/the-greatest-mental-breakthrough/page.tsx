import { TheGreatestMentalBreakthroughPageContent } from "@/components/the-greatest-mental-breakthrough/the-greatest-mental-breakthrough-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { GMB_DATES, GMB_META_TITLE, GMB_PATH, GMB_YOUTUBE_ID } from "@/lib/the-greatest-mental-breakthrough-data";
import { GMB_FAQ } from "@/lib/the-greatest-mental-breakthrough-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = GMB_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Why removing the negative outperforms adding the positive: subtractive progress, stagnation, following mode, integrated thinking, and human longevity. Neothink Philosophy article on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#gmb-intro-lead", "#gmb-quick-title", "#gmb-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${GMB_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${GMB_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${GMB_META_TITLE} (video thumbnail)`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${GMB_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${GMB_DATES.dateModified}T19:44:09.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Greatest mental breakthrough", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${GMB_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${GMB_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${GMB_DATES.dateModified}T19:44:09.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: GMB_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${GMB_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${GMB_DATES.dateModified}T19:44:09.000Z`,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${GMB_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, GMB_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${GMB_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${GMB_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${GMB_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${GMB_DATES.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${GMB_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function TheGreatestMentalBreakthroughPage() {
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
      <TheGreatestMentalBreakthroughPageContent />
    </>
  );
}
