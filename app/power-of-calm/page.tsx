import { PowerOfCalmPageContent } from "@/components/power-of-calm/power-of-calm-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  SPEAKABLE_MAIN_H1,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { POWER_OF_CALM_FAQ, POWER_OF_CALM_LESSON } from "@/lib/power-of-calm-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./power-of-calm-page.css";

const PATH = "/power-of-calm";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Power of Calm | Neothink Mentality Lesson 14 | Neothink Institute",
  description:
    "Lesson 14 (Neothink Institute): composure under pressure—in work, parenting, and investing; video on YouTube (mXp6tLVO2Hg) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${POWER_OF_CALM_LESSON.datePublished}T12:00:00.000Z`,
    modifiedTime: `${POWER_OF_CALM_LESSON.dateModified}T12:00:00.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 14: Power of calm", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Power of Calm | Neothink Mentality Lesson 14",
  description:
    "Calm vs panic, business and parenting, investing and partnership—lesson 14 essay and FAQ by Neothink Institute.",
  datePublished: POWER_OF_CALM_LESSON.datePublished,
  dateModified: POWER_OF_CALM_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_MAIN_H1,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Power of Calm (Neothink Mentality Lesson 14)",
  description:
    "Neothink Institute essay on composure as practical power; embedded lesson video features Mark Hamilton.",
  datePublished: `${POWER_OF_CALM_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${POWER_OF_CALM_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, POWER_OF_CALM_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 14: Power of Calm",
  description:
    "Lesson video: Mark Hamilton on calm under pressure and the Neothink mentality (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${POWER_OF_CALM_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${POWER_OF_CALM_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${POWER_OF_CALM_LESSON.datePublished}T12:00:00.000Z`,
  contentUrl: `https://www.youtube.com/watch?v=${POWER_OF_CALM_LESSON.youtubeId}`,
  durationMinutes: POWER_OF_CALM_LESSON.videoRuntimeMinutes,
  speakerId: schemaIds.founder,
});

export default function PowerOfCalmPage() {
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
      <PowerOfCalmPageContent />
    </>
  );
}
