import { MarkHamiltonsStoryPageContent } from "@/components/mark-hamiltons-story/mark-hamiltons-story-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { MH_STORY_DATES, MH_STORY_META_TITLE, MH_STORY_PATH } from "@/lib/mark-hamiltons-story-data";
import { MH_STORY_FAQ } from "@/lib/mark-hamiltons-story-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = MH_STORY_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Mark Hamilton’s story: subtle mysticism, the following mode, Neo-Tech, business authorship as a vehicle for integrated thinking, value creators vs producers, and Immortalis. Neothink Philosophy speech on neothink.com.";

const SPEAKABLE = ["main#main-content h1", "#mhs-intro-lead", "#mhs-quick-title", "#mhs-faq-heading"] as const;

export const metadata = pageMetadata({
  title: `${MH_STORY_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${MH_STORY_DATES.datePublished}T09:00:00.000Z`,
    modifiedTime: `${MH_STORY_DATES.dateModified}T04:10:39.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Mark Hamilton’s story", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${MH_STORY_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${MH_STORY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${MH_STORY_DATES.dateModified}T04:10:39.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: MH_STORY_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${MH_STORY_DATES.datePublished}T09:00:00.000Z`,
  dateModified: `${MH_STORY_DATES.dateModified}T04:10:39.000Z`,
  authorId: schemaIds.organization,
});

const faqLd = faqPageJsonLd(PATH, MH_STORY_FAQ);

export default function MarkHamiltonsStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <MarkHamiltonsStoryPageContent />
    </>
  );
}
