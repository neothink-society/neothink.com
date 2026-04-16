/**
 * Terms and Conditions content — sourced verbatim from the WordPress original
 * (https://neothink.com/terms-and-conditions/, last updated 2026-01-04).
 *
 * Keep the legal copy source-faithful. When the live terms change, update
 * both `TERMS_LAST_UPDATED_LABEL` and `TERMS_DATE_MODIFIED`.
 */
import type { LegalPageSection } from "@/components/legal/legal-page";

export const TERMS_PATH = "/terms-and-conditions" as const;

export const TERMS_TITLE = "Terms and Conditions" as const;

export const TERMS_LAST_UPDATED_LABEL = "Last Updated: January 04, 2026" as const;

export const TERMS_DATE_MODIFIED = "2026-01-04" as const;

export const TERMS_INTRO = [
  "Please read these Terms and Conditions carefully before using our website or services.",
] as const;

export const TERMS_SECTIONS: readonly LegalPageSection[] = [
  {
    id: "company-information",
    heading: "Company Information",
    body: ["The Neothink Society, LLC operates this Service."],
  },
  {
    id: "acceptance",
    heading: "Acceptance of Terms",
    body: [
      "By accessing or using https://neothink.com, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree, do not use the Service.",
      "You must be at least 18 years old to use the Service.",
    ],
  },
  {
    id: "use-of-service",
    heading: "Use of the Service",
    body: [
      "You agree to use the Service only for lawful purposes and in accordance with these Terms.",
      "We reserve the right to modify, suspend, or discontinue any aspect of the Service at any time.",
    ],
  },
  {
    id: "sms-terms",
    heading: "SMS Messaging Terms",
    body: ["If you opt in to receive SMS or MMS messages from Neothink, the following terms apply:"],
    list: [
      "Messages may include educational updates, announcements, event reminders, and account-related notifications",
      "Message frequency varies",
      "Message and data rates may apply",
      "Reply STOP to opt out at any time",
      "Reply HELP for help or contact support@neothink.com",
      "Consent to receive SMS messages is not a condition of purchase",
      "Carriers are not liable for delayed or undelivered messages",
    ],
  },
  {
    id: "third-party-links",
    heading: "Third-Party Links",
    body: [
      "The Service may contain links to third-party websites or services. Neothink is not responsible for the content or practices of third parties.",
    ],
  },
  {
    id: "termination",
    heading: "Termination",
    body: [
      "We may terminate or suspend access to the Service at any time for violation of these Terms or for lawful business reasons.",
    ],
  },
  {
    id: "disclaimer",
    heading: "Disclaimer of Warranties",
    body: [
      "The Service is provided \u201CAS IS\u201D and \u201CAS AVAILABLE\u201D without warranties of any kind, express or implied.",
    ],
  },
  {
    id: "limitation",
    heading: "Limitation of Liability",
    body: [
      "To the maximum extent permitted by law, The Neothink Society, LLC shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the Service.",
    ],
  },
  {
    id: "governing-law",
    heading: "Governing Law",
    body: [
      "These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to conflict of law principles.",
    ],
  },
  {
    id: "dispute",
    heading: "Dispute Resolution",
    body: [
      "If you have a dispute regarding the Service, you agree to first attempt to resolve it informally by contacting support@neothink.com.",
    ],
  },
  {
    id: "severability",
    heading: "Severability",
    body: [
      "If any provision of these Terms is found unenforceable, the remaining provisions will remain in full force and effect.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to Terms",
    body: [
      "We reserve the right to update these Terms at any time. Continued use of the Service after changes are posted constitutes acceptance of the revised Terms.",
    ],
  },
];

export const TERMS_CONTACT = {
  entity: "The Neothink Society, LLC",
  addressLines: [
    "2505 Anthem Village Dr. E503",
    "Henderson, NV 89052",
    "United States",
  ],
  email: "support@neothink.com",
} as const;
