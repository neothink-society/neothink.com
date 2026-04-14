import { JoinNeothinkSocietySecretMeetingsPageContent } from "@/components/join-neothink-society-secret-meetings/join-neothink-society-secret-meetings-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import {
  JNSSM_DATES,
  JNSSM_IMAGE,
  JNSSM_PATH,
} from "@/lib/join-neothink-society-secret-meetings-data";
import { JNSSM_FAQ } from "@/lib/join-neothink-society-secret-meetings-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = JNSSM_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "How to join Neothink Society secret meetings: membership, events, Clubhouse gatherings, community engagement, and webinars. Agency-era article on neothink.com.";

const SPEAKABLE_JNSSM = [
  "main#main-content h1",
  "#jnssm-intro-lead",
  "#jnssm-understanding-the-neothink-society-and-its-secret-meetings-h",
  "#jnssm-faq-heading",
] as const;

export const metadata = pageMetadata({
  title: "How To Join Neothink Society Secret Meetings | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${JNSSM_DATES.datePublished}T03:29:00.000Z`,
    modifiedTime: `${JNSSM_DATES.dateModified}T05:10:28.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Join Neothink Society secret meetings", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "How To Join Neothink Society Secret Meetings | Neothink Institute",
  description: DESCRIPTION,
  datePublished: `${JNSSM_DATES.datePublished}T03:29:00.000Z`,
  dateModified: `${JNSSM_DATES.dateModified}T05:10:28.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_JNSSM,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "How To Join Neothink Society Secret Meetings",
  description: DESCRIPTION,
  datePublished: `${JNSSM_DATES.datePublished}T03:29:00.000Z`,
  dateModified: `${JNSSM_DATES.dateModified}T05:10:28.000Z`,
  authorId: schemaIds.organization,
  image: JNSSM_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, JNSSM_FAQ);

export default function JoinNeothinkSocietySecretMeetingsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <JoinNeothinkSocietySecretMeetingsPageContent />
    </>
  );
}
