import { BeyondTunnelVisionPageContent } from "@/components/beyond-tunnel-vision/beyond-tunnel-vision-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  videoObjectJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { BEYOND_TUNNEL_VISION_FAQ, BEYOND_TUNNEL_VISION_LESSON } from "@/lib/beyond-tunnel-vision-data";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./beyond-tunnel-vision-page.css";

const PATH = "/beyond-tunnel-vision";
const CANONICAL = `${siteConfig.url}${PATH}`;

export const metadata = pageMetadata({
  title: "Beyond Tunnel Vision | Neothink Mentality Lesson 3 | Neothink Institute",
  description:
    "Lesson 3 (Neothink Institute): tunnel vision, curiosity, Project Curiosity at work for two weeks, Neothink mentality; video features Mark Hamilton.",
  pathname: PATH,
  ogType: "article",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Neothink Mentality", path: "/neothink-mentality" },
  { name: "Lesson 3: Beyond tunnel vision", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Beyond Tunnel Vision | Neothink Mentality Lesson 3",
  description:
    "Curiosity, Project Curiosity, tunnel vision vs integrated thinking: lesson 3 essay and FAQ by Neothink Institute.",
  datePublished: BEYOND_TUNNEL_VISION_LESSON.datePublished,
  dateModified: BEYOND_TUNNEL_VISION_LESSON.dateModified,
  aboutId: schemaIds.neothinkSystem,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Beyond Tunnel Vision (Neothink Mentality Lesson 3)",
  description:
    "Neothink Institute essay on curiosity and Project Curiosity at work; embedded lesson video features Mark Hamilton.",
  datePublished: `${BEYOND_TUNNEL_VISION_LESSON.datePublished}T12:00:00.000Z`,
  dateModified: `${BEYOND_TUNNEL_VISION_LESSON.dateModified}T12:00:00.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, BEYOND_TUNNEL_VISION_FAQ);

const videoLd = videoObjectJsonLd({
  pathname: PATH,
  name: "Neothink Mentality Lesson 3: Beyond Tunnel Vision",
  description:
    "Lesson video: Mark Hamilton on tunnel vision, curiosity, and Project Curiosity at work (published by Neothink Institute).",
  embedUrl: `https://www.youtube.com/embed/${BEYOND_TUNNEL_VISION_LESSON.youtubeId}`,
  thumbnailUrl: `https://i.ytimg.com/vi/${BEYOND_TUNNEL_VISION_LESSON.youtubeId}/maxresdefault.jpg`,
  uploadDate: `${BEYOND_TUNNEL_VISION_LESSON.datePublished}T12:00:00.000Z`,
  speakerId: schemaIds.founder,
});

export default function BeyondTunnelVisionPage() {
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
      <BeyondTunnelVisionPageContent />
    </>
  );
}
