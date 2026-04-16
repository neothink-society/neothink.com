import { LegalPage } from "@/components/legal/legal-page";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";
import {
  TERMS_CONTACT,
  TERMS_DATE_MODIFIED,
  TERMS_INTRO,
  TERMS_LAST_UPDATED_LABEL,
  TERMS_PATH,
  TERMS_SECTIONS,
  TERMS_TITLE,
} from "@/lib/terms-and-conditions-data";

const DESCRIPTION =
  "Terms and Conditions for neothink.com — acceptance, use of the Service, SMS messaging terms, third-party links, termination, disclaimers, limitation of liability, governing law, and dispute resolution.";

export const metadata = pageMetadata({
  title: `${TERMS_TITLE} | Neothink`,
  description: DESCRIPTION,
  pathname: TERMS_PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: TERMS_TITLE, path: TERMS_PATH },
]);

const pageLd = webPageJsonLd({
  pathname: TERMS_PATH,
  name: `${TERMS_TITLE} | Neothink`,
  description: DESCRIPTION,
  pageType: "WebPage",
  datePublished: `${TERMS_DATE_MODIFIED}T00:00:00.000Z`,
  dateModified: `${TERMS_DATE_MODIFIED}T00:00:00.000Z`,
  aboutId: schemaIds.organization,
  speakableSelectors: ["#lp-title"],
});

export default function TermsAndConditionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }}
      />
      <LegalPage
        eyebrow="Legal"
        title={TERMS_TITLE}
        lastUpdatedLabel={TERMS_LAST_UPDATED_LABEL}
        intro={TERMS_INTRO}
        sections={TERMS_SECTIONS}
        contact={TERMS_CONTACT}
        sibling={{ href: "/privacy-policy", label: "Privacy Policy" }}
      />
    </>
  );
}
