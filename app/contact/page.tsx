import { ContactPageContent } from "@/components/contact/contact-page-content";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "./contact-page.css";

export const metadata = pageMetadata({
  title: "Contact | Neothink Institute",
  description:
    "Reach the Neothink Institute: general inquiries, investment, advisory, and build channels. We respond personally.",
  pathname: "/contact",
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const pageLd = webPageJsonLd({
  pathname: "/contact",
  name: "Contact | Neothink Institute",
  description:
    "Reach the Neothink Institute: general inquiries, investment, advisory, and build channels. We respond personally.",
  pageType: "ContactPage",
  aboutId: schemaIds.organization,
  speakableSelectors: ["#ct-hero-heading"],
});

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <ContactPageContent />
    </>
  );
}
