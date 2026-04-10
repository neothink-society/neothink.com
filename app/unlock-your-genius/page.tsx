import { UnlockYourGeniusPageContent } from "@/components/unlock-your-genius/unlock-your-genius-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { UNLOCK_YOUR_GENIUS_FAQ, UNLOCK_YOUR_GENIUS_LESSON } from "@/lib/unlock-your-genius-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./unlock-your-genius-page.css";

const PATH = "/unlock-your-genius";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Unlock Your Genius | Neothink Mentality Lesson 7 | Neothink Institute",
  description:
    "Lesson 7 (Neothink Institute): value producer vs value creator, integrated thinking, Neothink mentality; video on YouTube (6RQq_gzAKU8) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 7: Unlock your genius", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Unlock Your Genius | Neothink Mentality Lesson 7",
  description:
    "Value production vs value creation, following mode, and the Neothink mentality: lesson 7 essay and FAQ by Neothink Institute.",
  datePublished: UNLOCK_YOUR_GENIUS_LESSON.datePublished,
  dateModified: UNLOCK_YOUR_GENIUS_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Unlock Your Genius (Neothink Mentality Lesson 7)",
  description:
    "Neothink Institute essay on value creators and integrated thinking; embedded lesson video features Mark Hamilton.",
  datePublished: `${UNLOCK_YOUR_GENIUS_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${UNLOCK_YOUR_GENIUS_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, UNLOCK_YOUR_GENIUS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 7: Unlock Your Genius",
  description:
    "Lesson video: Mark Hamilton on value creation and the Neothink mentality (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${UNLOCK_YOUR_GENIUS_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${UNLOCK_YOUR_GENIUS_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${UNLOCK_YOUR_GENIUS_LESSON.datePublished}T12:00:00.000Z`,
  speakerId: schemaIds.founder,
});

export default function UnlockYourGeniusPage() {
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
      <UnlockYourGeniusPageContent />
    </>
  );
}
