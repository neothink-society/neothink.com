/**
 * Privacy Policy content, sourced verbatim from the WordPress original
 * (https://neothink.com/privacy-policy/, last updated 2026-02-02).
 *
 * Keep the legal copy source-faithful. When the live policy changes, update
 * both `PRIVACY_LAST_UPDATED_LABEL` and `PRIVACY_DATE_MODIFIED`.
 */
import type { LegalPageSection } from "@/components/legal/legal-page";

export const PRIVACY_PATH = "/privacy-policy" as const;

export const PRIVACY_TITLE = "Privacy Policy" as const;

export const PRIVACY_LAST_UPDATED_LABEL = "Last Updated: February 2, 2026" as const;

export const PRIVACY_DATE_MODIFIED = "2026-02-02" as const;

export const PRIVACY_INTRO = [
  "The Neothink Society, LLC (\u201CNeothink,\u201D \u201Cwe,\u201D \u201Cus,\u201D or \u201Cour\u201D) thanks you for visiting and interacting with the online and mobile resources we publish, including our website located at https://neothink.com (collectively, the \u201COnline and Mobile Resources\u201D).",
  "This Privacy Policy explains from whom and the types of personal information we collect, how we use that information, with whom it may be shared, and the measures we take to protect it.",
  "By accessing or using our Online and Mobile Resources, you agree to the collection and use of information in accordance with this Privacy Policy.",
] as const;

export const PRIVACY_SECTIONS: readonly LegalPageSection[] = [
  {
    id: "online-and-mobile-resources",
    heading: "Online and Mobile Resources",
    body: [
      "\u201COnline and Mobile Resources\u201D means the websites and other internet-based features we own or operate that allow you to interact with our content, as well as any applications we may distribute that enable users to view or interact with our content.",
    ],
  },
  {
    id: "who-we-collect-from",
    heading: "Who We Collect Personal Information From",
    body: ["We may collect personal information from the following categories of individuals:"],
    list: [
      "Visitors to and users of our Online and Mobile Resources",
      "Customers and subscribers",
      "Individuals who register for events, programs, or services",
      "Individuals who communicate with us by email, phone, form submission, or SMS",
      "Vendors and business partners",
      "Job applicants and members of our workforce",
    ],
  },
  {
    id: "what-is-personal-information",
    heading: "What Is Personal Information",
    body: [
      "\u201CPersonal information\u201D means information that identifies, relates to, describes, or can reasonably be linked to an identifiable individual. This may include identifiers such as name, postal address, email address, telephone number, payment information, IP address, and other similar identifiers.",
      "Where applicable, this definition includes the categories of personal information protected by laws such as the California Consumer Privacy Act (\u201CCCPA\u201D), California Privacy Rights Act (\u201CCPRA\u201D), and the General Data Protection Regulation (\u201CGDPR\u201D).",
    ],
  },
  {
    id: "information-we-collect",
    heading: "Information We Collect",
    body: [
      "Voluntarily Submitted Information. You may voluntarily provide personal information when you fill out online forms, subscribe to communications, register for events or programs, create an account, make a purchase, or contact us.",
      "The information collected may include identifiers, professional information, and transactional or payment information. We do not sell, rent, or trade voluntarily submitted personal information.",
      "Participation in these activities is voluntary. Choosing not to provide certain information may limit access to specific services but will not prevent access to publicly available content.",
      "Communications. When you communicate with us, we may retain records of those communications, including contact details and message content, to respond to requests, provide services, maintain records, and improve operations. Communications may occur via email, telephone, or SMS depending on the contact method you choose and the consents you provide.",
      "Automatically Collected Information. When you access our Online and Mobile Resources, certain information may be collected automatically through cookies and similar technologies, including IP address, browser type, device type, operating system, visit dates and times, pages viewed, and referring URLs. If you access our resources via a mobile device, we may also receive device identifiers and approximate location information if enabled. You can disable location services through your device settings.",
    ],
  },
  {
    id: "cookies-and-analytics",
    heading: "Cookies and Analytics",
    body: [
      "We use cookies and similar technologies to operate and improve our Online and Mobile Resources. Cookies help us understand how visitors use our site, remember preferences, and improve functionality.",
      "We may use third-party analytics services such as Google Analytics to analyze usage patterns. You may control cookie preferences through your browser settings.",
    ],
  },
  {
    id: "how-we-use",
    heading: "How We Use Personal Information",
    body: ["We use personal information to:"],
    list: [
      "Provide, administer, and improve our services",
      "Process transactions and registrations",
      "Communicate regarding updates, events, and account-related matters",
      "Send email or SMS communications only where explicit consent has been provided",
      "Respond to inquiries and support requests",
      "Conduct internal analytics and business operations",
      "Comply with legal obligations",
    ],
  },
  {
    id: "sms-and-mobile-messaging",
    heading: "SMS and Mobile Messaging",
    body: [
      "If you provide your mobile phone number and explicitly opt in, Neothink may send SMS or MMS messages related to educational content, announcements, event reminders, account notifications, or other information relevant to your relationship with us.",
      "Message frequency varies. Message and data rates may apply.",
      "You may opt out at any time by replying STOP. You may request help by replying HELP or by contacting support@neothink.com.",
      "SMS opt-in data and consent will not be shared with third parties.",
      "Consent to receive SMS messages is not a condition of purchase.",
    ],
  },
  {
    id: "sms-data-protection",
    heading: "SMS Data Protection",
    body: [
      "Notwithstanding any other provision in this Privacy Policy, mobile phone numbers, SMS opt-in data, and messaging consent will not be shared, sold, rented, or disclosed to any third parties for any purposes, except to service providers necessary to deliver messaging services as requested by users.",
    ],
  },
  {
    id: "sharing",
    heading: "Sharing of Personal Information",
    body: [
      "We do not sell personal information.",
      "We may share personal information only with service providers and partners who assist us in operating our business, to comply with legal obligations, to protect rights and safety, or in connection with a merger or asset sale.",
      "All service providers are required to protect personal information and use it only for authorized purposes.",
    ],
  },
  {
    id: "data-retention",
    heading: "Data Retention",
    body: [
      "We retain personal information only as long as reasonably necessary to fulfill the purposes described in this Privacy Policy or as required by law.",
    ],
  },
  {
    id: "data-security",
    heading: "Data Security",
    body: [
      "We maintain reasonable administrative, technical, and physical safeguards designed to protect personal information. No method of transmission or storage is completely secure, and absolute security cannot be guaranteed.",
    ],
  },
  {
    id: "external-links",
    heading: "External Links and Social Media",
    body: [
      "Our Online and Mobile Resources may contain links to third-party websites or social media platforms. We are not responsible for their privacy practices and encourage you to review their policies.",
    ],
  },
  {
    id: "your-rights",
    heading: "Your Rights and Choices",
    body: [
      "Depending on your jurisdiction, you may have rights to access, correct, delete, or restrict the use of your personal information. Requests may be submitted to support@neothink.com and may require identity verification.",
    ],
  },
  {
    id: "california",
    heading: "California Privacy Rights",
    body: [
      "California residents have rights under the CCPA and CPRA, including rights to access, delete, and correct personal information. We do not sell personal information and do not discriminate for exercising privacy rights.",
    ],
  },
  {
    id: "gdpr",
    heading: "GDPR and International Users",
    body: [
      "We process personal information of users in GDPR jurisdictions in accordance with applicable law and rely on lawful bases such as consent or legitimate interests. You may lodge a complaint with your local data protection authority.",
    ],
  },
  {
    id: "childrens-privacy",
    heading: "Children\u2019s Privacy",
    body: [
      "Our Online and Mobile Resources are not intended for children under the age of 13. We do not knowingly collect personal information from children.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to This Privacy Policy",
    body: [
      "We may update this Privacy Policy from time to time. Changes will be posted with an updated effective date.",
    ],
  },
];

export const PRIVACY_CONTACT = {
  entity: "The Neothink Society, LLC",
  addressLines: [
    "2505 Anthem Village Dr. E503",
    "Henderson, NV 89052",
  ],
  email: "support@neothink.com",
} as const;
