import { TheCityThatCuresDiseaseNeoviaPageContent } from "@/components/the-city-that-cures-disease-neovia/the-city-that-cures-disease-neovia-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  NEOVIA_SPEECH_DATES,
  NEOVIA_SPEECH_META_TITLE,
  NEOVIA_SPEECH_PATH,
  NEOVIA_SPEECH_YOUTUBE_ID,
} from "@/lib/the-city-that-cures-disease-neovia-data";
import { NEOVIA_SPEECH_FAQ } from "@/lib/the-city-that-cures-disease-neovia-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = NEOVIA_SPEECH_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Neovia: biotech freedom city on federal land, virtual zone, warp biotech, Prime Law constitution, sister cities with Argentina, healthcare economics. Neothink Philosophy keynote on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#nvsp-intro-lead", "#nvsp-quick-title", "#nvsp-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${NEOVIA_SPEECH_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
    articleOgImage: {
    src: `https://i.ytimg.com/vi/${NEOVIA_SPEECH_YOUTUBE_ID}/hqdefault.jpg`,
    alt: `${NEOVIA_SPEECH_META_TITLE} — video thumbnail`,
    width: 480,
    height: 360,
  },
  ogType: "article",
  article: {
    publishedTime: `${NEOVIA_SPEECH_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${NEOVIA_SPEECH_DATES.dateModified}T17:55:15.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neovia: city that cures disease", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${NEOVIA_SPEECH_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${NEOVIA_SPEECH_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${NEOVIA_SPEECH_DATES.dateModified}T17:55:15.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: NEOVIA_SPEECH_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${NEOVIA_SPEECH_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${NEOVIA_SPEECH_DATES.dateModified}T17:55:15.000Z`,
  authorId: schemaIds.organization,
  image: `https://i.ytimg.com/vi/${NEOVIA_SPEECH_YOUTUBE_ID}/hqdefault.jpg`,
});

const faqLd = faqPageJsonLd(PATH, NEOVIA_SPEECH_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: `${NEOVIA_SPEECH_META_TITLE} — video | Neothink Institute`,
  description: DESCRIPTION,
  embedUrl: `https://www.youtube.com/embed/${NEOVIA_SPEECH_YOUTUBE_ID}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${NEOVIA_SPEECH_YOUTUBE_ID}/maxresdefault.jpg`,
  uploadDate: `${NEOVIA_SPEECH_DATES.datePublished}T09:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${NEOVIA_SPEECH_YOUTUBE_ID}`,
  speakerId: schemaIds.founder,
});


export default function TheCityThatCuresDiseaseNeoviaPage() {
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
      <TheCityThatCuresDiseaseNeoviaPageContent />
    </>
  );
}
