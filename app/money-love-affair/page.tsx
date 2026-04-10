import { MoneyLoveAffairPageContent } from "@/components/money-love-affair/money-love-affair-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { MONEY_LOVE_AFFAIR_FAQ, MONEY_LOVE_AFFAIR_LESSON } from "@/lib/money-love-affair-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./money-love-affair-page.css";

const PATH = "/money-love-affair";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Money Love Affair | Neothink Mentality Lesson 12 | Neothink Institute",
  description:
    "Lesson 12 (Neothink Institute): money as effect of value, production vs creation, loving wealth through what you love; video on YouTube (CAMx5sC1Fy8) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 12: Money love affair", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Money Love Affair | Neothink Mentality Lesson 12",
  description:
    "Cause and effect of wealth, value creation vs production, and the mind shift from chasing money to putting value into society—lesson 12 essay and FAQ by Neothink Institute.",
  datePublished: MONEY_LOVE_AFFAIR_LESSON.datePublished,
  dateModified: MONEY_LOVE_AFFAIR_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Money Love Affair (Neothink Mentality Lesson 12)",
  description:
    "Neothink Institute essay on money as downstream of value; embedded lesson video features Mark Hamilton.",
  datePublished: `${MONEY_LOVE_AFFAIR_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${MONEY_LOVE_AFFAIR_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, MONEY_LOVE_AFFAIR_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 12: Money Love Affair",
  description:
    "Lesson video: Mark Hamilton on value, money as effect, and the Neothink mentality (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${MONEY_LOVE_AFFAIR_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${MONEY_LOVE_AFFAIR_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${MONEY_LOVE_AFFAIR_LESSON.datePublished}T12:00:00.000Z`,
  speakerId: schemaIds.founder,
});

export default function MoneyLoveAffairPage() {
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
      <MoneyLoveAffairPageContent />
    </>
  );
}
