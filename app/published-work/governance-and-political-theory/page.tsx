/**
 * Published Work domain landing — Governance and Political Theory.
 * In-house page (published 2026-04-29). Source-faithful migration from
 * neothink-machine/output/nti/deploy/published-work/governance-and-political-theory/index.html
 */

import {
  DomainLandingPage,
  type DomainArticle,
  type DomainFramework,
  type DomainRelatedLink,
} from "@/components/published-work-articles/domain-landing";
import {
  breadcrumbListJsonLd,
  itemListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

const PATH = "/published-work/governance-and-political-theory";
const DOMAIN_NAME = "Governance and Political Theory";
const TITLE = `${DOMAIN_NAME} | Neothink Institute`;
const DESCRIPTION =
  "The Prime Law, the prohibition of initiated force, the structural error in every revolution, and the constitutional alternative to hierarchy. Political theory built on a single operative principle.";

const INTRO =
  "Political history is a record of the same structural error committed across every epoch. This domain identifies that error, traces its repetition through every major revolution and regime, and presents the constitutional alternative: the Prime Law and the prohibition of initiated force as the foundation of legitimate governance.";

const COVERAGE = [
  "Why has every political revolution in recorded history eventually reproduced the same hierarchical structure it sought to overthrow?",
  "What is the structural origin of political authority, and on what basis does any government claim the right to initiate force against its own population?",
  "What would a constitutional framework look like if its sole purpose were the prohibition of initiated force, with no exceptions and no loopholes?",
  "How does the Prime Law differ from every existing constitution, and why does that difference determine civilizational outcomes?",
  "What is the relationship between voluntary cooperation and genuine social order, as distinct from order imposed through coercion?",
];

const FRAMEWORKS_INTRO =
  "Structural principles of governance derived from the analysis of political failure across every major civilization and epoch.";

const FRAMEWORKS: DomainFramework[] = [
  {
    href: "/prime-law",
    title: "The Prime Law",
    description:
      "A constitutional instrument consisting of three articles and admitting no exceptions. Its single operative principle is the prohibition of initiated force by any individual, group, or government. The Prime Law does not regulate behavior. It removes the one instrument through which all political corruption operates.",
  },
  {
    href: null,
    title: "Hierarchy and Force",
    description:
      "The structural analysis of why political systems concentrate power over time regardless of their founding intentions. The mechanism is identified: hierarchies require force to sustain themselves, force requires justification, and justification requires the suppression of independent thought. The cycle is self reinforcing.",
  },
  {
    href: null,
    title: "Voluntary Cooperation",
    description:
      "The demonstration that social order does not require coercion. When initiated force is removed, individuals organize through voluntary exchange, mutual benefit, and contractual agreement. The result is not disorder but a form of order that compounds rather than degrades over time.",
  },
  {
    href: null,
    title: "The Law of Humanity",
    description:
      "The broader principle from which the Prime Law derives its authority. The Law of Humanity establishes that the purpose of human life is to prosper and live happily, and that any system which initiates force against the individual violates this fundamental condition. It is the standard against which all governance is measured.",
  },
];

const ARTICLES_INTRO =
  "Research and analysis within the Governance and Political Theory domain.";

const ARTICLES: DomainArticle[] = [
  {
    href: "/published-work/governance-and-political-theory/the-case-for-neovia",
    tag: "Governance · Mark Hamilton",
    title: "The Case for Neovia: Why the Anti-Extinction Architecture Must Be Built Now",
    description:
      "As long as hierarchy legitimizes force and AI accelerates decisions, catastrophic failure is not a risk. It is a statistical certainty. Neovia is the structural exit. The first jurisdiction designed from the ground up on the Prime Law as constitutional foundation.",
  },
  {
    href: "/published-work/governance-and-political-theory/prime-law",
    tag: "Governance · Mark Hamilton",
    title: "The Prime Law: The Missing Cosmological Constant of Civilization",
    description:
      "The constitutional prohibition of initiated force. Codified as civilizational architecture, not as moral aspiration. Three articles, no exceptions. The architectural correction that ends the 2,400-year detour and the foundation Neovia is built on.",
  },
  {
    href: null,
    tag: "Governance · Mark Hamilton",
    title: "External Authority and the Covered Mind",
    description:
      "Political obedience is not a rational calculation. It is a psychological condition produced by the same covering that suppresses integrated thinking. The governed mind and the passive mind are the same mind. This analysis connects political theory to the broader framework of consciousness.",
  },
];

const RELATED_DOMAINS: DomainRelatedLink[] = [
  { href: "/published-work/civilization-and-history", label: "Civilization and History" },
  { href: "/published-work/economics", label: "Economics" },
  { href: "/published-work/philosophy-and-anthropology", label: "Philosophy and Anthropology" },
];

export const metadata = pageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "website",
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Published Work", path: "/published-work" },
  { name: DOMAIN_NAME, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  pageType: "CollectionPage",
  name: TITLE,
  description: DESCRIPTION,
  authorId: schemaIds.organization,
});

const articlesListLd = itemListJsonLd(
  PATH,
  "domain-articles",
  `Selected Articles in ${DOMAIN_NAME}`,
  `Published research and analysis articles in the ${DOMAIN_NAME} domain.`,
  ARTICLES.filter((a): a is DomainArticle & { href: string } => a.href !== null).map((a) => ({
    title: a.title,
    path: a.href,
  }))
);

export default function GovernanceAndPoliticalTheoryPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articlesListLd) }}
      />
      <DomainLandingPage
        domainName={DOMAIN_NAME}
        intro={INTRO}
        coverage={COVERAGE}
        frameworks={FRAMEWORKS}
        frameworksIntro={FRAMEWORKS_INTRO}
        articles={ARTICLES}
        articlesIntro={ARTICLES_INTRO}
        relatedDomains={RELATED_DOMAINS}
      />
    </>
  );
}
