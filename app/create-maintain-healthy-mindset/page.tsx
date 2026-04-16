import { AgencyArticle } from "@/components/agency-article/agency-article";
import {
  CREATE_MAINTAIN_HEALTHY_MINDSET_BODY_HTML,
  CREATE_MAINTAIN_HEALTHY_MINDSET_DATES,
  CREATE_MAINTAIN_HEALTHY_MINDSET_DESCRIPTION,
  CREATE_MAINTAIN_HEALTHY_MINDSET_HEADLINE,
  CREATE_MAINTAIN_HEALTHY_MINDSET_IMAGE,
  CREATE_MAINTAIN_HEALTHY_MINDSET_INTRO_PARAS,
  CREATE_MAINTAIN_HEALTHY_MINDSET_META_TITLE,
  CREATE_MAINTAIN_HEALTHY_MINDSET_MIN_READ,
  CREATE_MAINTAIN_HEALTHY_MINDSET_PATH,
} from "@/lib/agency-posts/create-maintain-healthy-mindset";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";
import "../neothink-awakening/neothink-awakening-html.css";

const PATH = CREATE_MAINTAIN_HEALTHY_MINDSET_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const SPEAKABLE = [
  "main#main-content h1",
  "#create-maintain-healthy-mindset-intro-lead",
] as const;

export const metadata = pageMetadata({
  title: `${CREATE_MAINTAIN_HEALTHY_MINDSET_META_TITLE} | Neothink Institute`,
  description: CREATE_MAINTAIN_HEALTHY_MINDSET_DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: CREATE_MAINTAIN_HEALTHY_MINDSET_DATES.datePublished,
    modifiedTime: CREATE_MAINTAIN_HEALTHY_MINDSET_DATES.dateModified,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "9 Effective Steps To Create And Maintain A Healthy Mindset", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: `${CREATE_MAINTAIN_HEALTHY_MINDSET_META_TITLE} | Neothink Institute`,
  description: CREATE_MAINTAIN_HEALTHY_MINDSET_DESCRIPTION,
  datePublished: CREATE_MAINTAIN_HEALTHY_MINDSET_DATES.datePublished,
  dateModified: CREATE_MAINTAIN_HEALTHY_MINDSET_DATES.dateModified,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: CREATE_MAINTAIN_HEALTHY_MINDSET_META_TITLE,
  description: CREATE_MAINTAIN_HEALTHY_MINDSET_DESCRIPTION,
  datePublished: CREATE_MAINTAIN_HEALTHY_MINDSET_DATES.datePublished,
  dateModified: CREATE_MAINTAIN_HEALTHY_MINDSET_DATES.dateModified,
  authorId: schemaIds.organization,
  image: CREATE_MAINTAIN_HEALTHY_MINDSET_IMAGE.src,
});

const DEFAULT_RELATED = [
  {
    title: "What is the Neothink Society?",
    description: "Public overview of programs, Project Life, and membership.",
    href: "/faq",
  },
  {
    title: "Mark Hamilton",
    description: "Founder of Neothink Institute and author of the manuscripts.",
    href: "/mark-hamilton",
  },
  {
    title: "Neothink manuscripts",
    description: "Where the movement's ideas are written down in full.",
    href: "/manuscripts",
  },
  {
    title: "Free courses",
    description: "Start learning Neothink without any cost.",
    href: "/free-courses",
  },
] as const;

export default function CreateMaintainHealthyMindsetPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <AgencyArticle
        slugPrefix="create-maintain-healthy-mindset"
        headline={CREATE_MAINTAIN_HEALTHY_MINDSET_HEADLINE}
        introParas={CREATE_MAINTAIN_HEALTHY_MINDSET_INTRO_PARAS}
        image={CREATE_MAINTAIN_HEALTHY_MINDSET_IMAGE}
        minReadLabel={CREATE_MAINTAIN_HEALTHY_MINDSET_MIN_READ}
        bodyHtml={CREATE_MAINTAIN_HEALTHY_MINDSET_BODY_HTML}
        related={DEFAULT_RELATED}
      />
    </>
  );
}
