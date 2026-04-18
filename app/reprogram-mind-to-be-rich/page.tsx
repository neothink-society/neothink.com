import { ReprogramMindToBeRichPageContent } from "@/components/reprogram-mind-to-be-rich/reprogram-mind-to-be-rich-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  RMTBR_DATES,
  RMTBR_IMAGE,
  RMTBR_META_TITLE,
  RMTBR_PATH,
} from "@/lib/reprogram-mind-to-be-rich-data";
import { RMTBR_FAQ } from "@/lib/reprogram-mind-to-be-rich-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = RMTBR_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "Three levels of thinking, mini-days, division of essence, and Neothink progression from personal mastery to civilization—Mark Hamilton’s approach to reprogramming how your mind creates wealth. Neothink Awakening article on neothink.com.";

const SPEAKABLE_RMTBR = [
  "main#main-content h1",
  "#rmtbr-intro-lead",
  "#rmtbr-quick-title",
  "#rmtbr-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: `${RMTBR_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  pathname: PATH,
  articleOgImage: RMTBR_IMAGE,
  ogType: "article",
  article: {
    publishedTime: `${RMTBR_DATES.datePublished}T12:00:00.000Z`,
    modifiedTime: `${RMTBR_DATES.dateModified}T04:19:33.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Reprogram your mind to be rich", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${RMTBR_META_TITLE} | Neothink Institute`,
  description: DESCRIPTION,
  datePublished: `${RMTBR_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${RMTBR_DATES.dateModified}T04:19:33.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_RMTBR,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: RMTBR_META_TITLE,
  description: DESCRIPTION,
  datePublished: `${RMTBR_DATES.datePublished}T12:00:00.000Z`,
  dateModified: `${RMTBR_DATES.dateModified}T04:19:33.000Z`,
  authorId: schemaIds.organization,
  image: RMTBR_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, RMTBR_FAQ);

export default function ReprogramMindToBeRichPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <ReprogramMindToBeRichPageContent />
    </>
  );
}
