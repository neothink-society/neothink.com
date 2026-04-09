import type { Metadata } from "next";

import { ContactPageContent } from "@/components/contact/contact-page-content";

import "./contact-page.css";

export const metadata: Metadata = {
  title: "Contact | Neothink Institute",
  description:
    "Reach the Neothink Institute — general inquiries, investment, advisory, and build channels. We respond personally.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Neothink Institute",
    description:
      "Reach the Neothink Institute — general inquiries, investment, advisory, and build channels. We respond personally.",
    url: "https://neothink.com/contact",
    type: "website",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://neothink.com" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://neothink.com/contact" },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact | Neothink Institute",
  description:
    "Reach the Neothink Institute — general inquiries, investment, advisory, and build channels. We respond personally.",
  url: "https://neothink.com/contact",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <ContactPageContent />
    </>
  );
}
