import { LegalPage } from "@/components/legal/legal-page";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import {
  PRIVACY_CONTACT,
  PRIVACY_DATE_MODIFIED,
  PRIVACY_INTRO,
  PRIVACY_LAST_UPDATED_LABEL,
  PRIVACY_PATH,
  PRIVACY_SECTIONS,
  PRIVACY_TITLE,
} from "@/lib/privacy-policy-data";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

const DESCRIPTION =
  "Privacy policy for neothink.com — what personal information The Neothink Society, LLC collects, how it is used, SMS data protection, cookies and analytics, CCPA/CPRA/GDPR rights, and contact details.";

export const metadata = pageMetadata({
  title: `${PRIVACY_TITLE} | Neothink`,
  description: DESCRIPTION,
  pathname: PRIVACY_PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: PRIVACY_TITLE, path: PRIVACY_PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PRIVACY_PATH,
  name: `${PRIVACY_TITLE} | Neothink`,
  description: DESCRIPTION,
  pageType: "WebPage",
  datePublished: `${PRIVACY_DATE_MODIFIED}T00:00:00.000Z`,
  dateModified: `${PRIVACY_DATE_MODIFIED}T00:00:00.000Z`,
  aboutId: schemaIds.organization,
  speakableSelectors: ["#lp-title"],
});

export default function PrivacyPolicyPage() {
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
        title={PRIVACY_TITLE}
        lastUpdatedLabel={PRIVACY_LAST_UPDATED_LABEL}
        intro={PRIVACY_INTRO}
        sections={PRIVACY_SECTIONS}
        contact={PRIVACY_CONTACT}
        sibling={{ href: "/terms-and-conditions", label: "Terms and Conditions" }}
      />
    </>
  );
}
