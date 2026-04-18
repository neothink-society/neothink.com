import { TwelveVisionsPartyPageContent } from "@/components/twelve-visions-party/twelve-visions-party-page-content";
import { TVP_PATH, TVP_WP } from "@/lib/twelve-visions-party-data";
import { breadcrumbListJsonLd, webPageJsonLd } from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

import "../neothink-university/neothink-university-page.css";
import "./twelve-visions-party-page.css";

const PATH = TVP_PATH;

const DESCRIPTION =
  "The Twelve Visions Party: Mark Hamilton’s political framework built on the Twelve Visions System, human potential, and expanding opportunity. Public context on neothink.com from the Neothink Institute.";

const SPEAKABLE_TVP = [
  "main#main-content h1",
  "#tvp-hero-sub",
  "#tvp-about-heading",
  "#tvp-system-heading",
] as const;

export const metadata = pageMetadata({
  title: "Twelve Visions Party | Neothink Institute",
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Twelve Visions Party", path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: "Twelve Visions Party | Neothink Institute",
  description: DESCRIPTION,
  dateModified: `${TVP_WP.dateModified}T19:26:13.000Z`,
  aboutId: schemaIds.society,
  speakableSelectors: SPEAKABLE_TVP,
});

export default function TwelveVisionsPartyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageLd) }} />
      <TwelveVisionsPartyPageContent />
    </>
  );
}
