import { SoarBeyondPeersPageContent } from "@/components/soar-beyond-peers/soar-beyond-peers-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { SOAR_BEYOND_PEERS_FAQ, SOAR_BEYOND_PEERS_LESSON } from "@/lib/soar-beyond-peers-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./soar-beyond-peers-page.css";

const PATH = "/soar-beyond-peers";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Soar Beyond Peers | Neothink Mentality Lesson 11 | Neothink Institute",
  description:
    "Lesson 11 (Neothink Institute): 23 projects in one week, vision to physical tasks, essence and 10-second miracles; video on YouTube (ZaGpmOi0IrA) features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 11: Soar beyond peers", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Soar Beyond Peers | Neothink Mentality Lesson 11",
  description:
    "Grand visions, assembly line scheduling, essence, and 10-second miracles: lesson 11 essay and FAQ by Neothink Institute.",
  datePublished: SOAR_BEYOND_PEERS_LESSON.datePublished,
  dateModified: SOAR_BEYOND_PEERS_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Soar Beyond Peers (Neothink Mentality Lesson 11)",
  description:
    "Neothink Institute essay on reverse-engineering success and integrated productivity; embedded lesson video features Mark Hamilton.",
  datePublished: `${SOAR_BEYOND_PEERS_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${SOAR_BEYOND_PEERS_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, SOAR_BEYOND_PEERS_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 11: Soar Beyond Peers",
  description:
    "Lesson video: Mark Hamilton on 23 projects, essence, and the Neothink mentality (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${SOAR_BEYOND_PEERS_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${SOAR_BEYOND_PEERS_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${SOAR_BEYOND_PEERS_LESSON.datePublished}T12:00:00.000Z`,
  speakerId: schemaIds.founder,
});

export default function SoarBeyondPeersPage() {
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
      <SoarBeyondPeersPageContent />
    </>
  );
}
