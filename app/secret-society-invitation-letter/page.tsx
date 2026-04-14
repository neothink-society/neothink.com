import { SecretSocietyInvitationLetterPageContent } from "@/components/secret-society-invitation-letter/secret-society-invitation-letter-page-content";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  faqPageJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { SSIL_DATES, SSIL_IMAGE, SSIL_PATH } from "@/lib/secret-society-invitation-letter-data";
import { SSIL_FAQ } from "@/lib/secret-society-invitation-letter-faq";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "../is-neothink-just-another-self-help-book/shb-page.css";

const PATH = SSIL_PATH;
const CANONICAL = `${siteConfig.url}${PATH}`;

const DESCRIPTION =
  "What a secret society invitation means, how to judge legitimacy (source, tone, call to action, testimonials), and how Neothink Society approaches growth. Agency-era article on neothink.com.";

const SPEAKABLE_SSIL = [
  "main#main-content h1",
  "#ssil-intro-lead",
  "#ssil-what-is-a-secret-society-invitation-h",
  "#ssil-faq-heading",
] as const;

export const metadata = pageMetadata({
  title:
    "Secret Society Invitation: Have You Received This Letter? What Does It Mean? | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: `${SSIL_DATES.datePublished}T09:38:40.000Z`,
    modifiedTime: `${SSIL_DATES.dateModified}T05:10:26.000Z`,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Secret society invitation letter", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Secret Society Invitation: Have You Received This Letter? What Does It Mean? | Neothink Institute",
  description: DESCRIPTION,
  datePublished: `${SSIL_DATES.datePublished}T09:38:40.000Z`,
  dateModified: `${SSIL_DATES.dateModified}T05:10:26.000Z`,
  aboutId: schemaIds.society,
  authorId: schemaIds.organization,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: SPEAKABLE_SSIL,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: "Secret Society Invitation: Have You Received This Letter? What Does It Mean?",
  description: DESCRIPTION,
  datePublished: `${SSIL_DATES.datePublished}T09:38:40.000Z`,
  dateModified: `${SSIL_DATES.dateModified}T05:10:26.000Z`,
  authorId: schemaIds.organization,
  image: SSIL_IMAGE.src,
});

const faqLd = faqPageJsonLd(PATH, SSIL_FAQ);

export default function SecretSocietyInvitationLetterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SecretSocietyInvitationLetterPageContent />
    </>
  );
}
