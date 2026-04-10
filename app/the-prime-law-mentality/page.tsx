import { ThePrimeLawMentalityPageContent } from "@/components/the-prime-law-mentality/the-prime-law-mentality-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { PRIME_LAW_MENTALITY_FAQ, PRIME_LAW_MENTALITY_LESSON } from "@/lib/prime-law-mentality-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./the-prime-law-mentality-page.css";

const PATH = "/the-prime-law-mentality";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "The Prime Law Mentality | Neothink Mentality Lesson 8 | Neothink Institute",
  description:
    "Lesson 8 (Neothink Institute): the Prime Law, rule by man vs. systemic freedom, Neothink mentality; video on YouTube (Kp2GZm5N4F8) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 8: The Prime Law mentality", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "The Prime Law Mentality | Neothink Mentality Lesson 8",
  description:
    "Prime Law, non-initiation of force, and political illusions: lesson 8 essay and FAQ by Neothink Institute.",
  datePublished: PRIME_LAW_MENTALITY_LESSON.datePublished,
  dateModified: PRIME_LAW_MENTALITY_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "The Prime Law Mentality (Neothink Mentality Lesson 8)",
  description:
    "Neothink Institute essay on the Prime Law and governance; embedded lesson video features Mark Hamilton.",
  datePublished: `${PRIME_LAW_MENTALITY_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${PRIME_LAW_MENTALITY_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, PRIME_LAW_MENTALITY_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 8: The Prime Law Mentality",
  description:
    "Lesson video: Mark Hamilton on the Prime Law and the Neothink mentality (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${PRIME_LAW_MENTALITY_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${PRIME_LAW_MENTALITY_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${PRIME_LAW_MENTALITY_LESSON.datePublished}T12:00:00.000Z`,
  speakerId: schemaIds.founder,
});

export default function ThePrimeLawMentalityPage() {
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
      <ThePrimeLawMentalityPageContent />
    </>
  );
}
