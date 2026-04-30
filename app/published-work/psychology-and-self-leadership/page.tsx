/**
 * Published Work domain landing — Psychology and Self-Leadership.
 * In-house page (published 2026-04-29). Source-faithful migration from
 * neothink-machine/output/nti/deploy/published-work/psychology-and-self-leadership/index.html
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

const PATH = "/published-work/psychology-and-self-leadership";
const DOMAIN_NAME = "Psychology and Self-Leadership";
const TITLE = `${DOMAIN_NAME} | Neothink Institute`;
const DESCRIPTION =
  "Self-leadership versus passive compliance. The active brain. Internal authority. The structural conditions that determine whether an individual operates as cause or as respondent.";

const INTRO =
  "Most psychology describes behavior. This domain examines the structural conditions that determine whether an individual operates as the cause of his own life or as a passive respondent to external direction. The distinction between these two modes governs nearly everything else.";

const COVERAGE = [
  "The structural difference between a mind that leads itself and a mind that waits for instruction. What produces each condition, and what it takes to shift from one to the other.",
  "How conditioning installs patterns of compliance that persist long after the original authority disappears. The mechanics of psychological dependency across institutions, relationships, and internal habits.",
  "The active brain versus the passive brain. What activates sustained, self-generated cognition and what suppresses it.",
  "Internal Authority as the operating principle of the self-led individual. The locus of all causality placed within the person rather than delegated to hierarchies or external systems.",
  "Why specialization without integration produces a fractured psychology. The relationship between cognitive integration and personal effectiveness.",
];

const FRAMEWORKS_INTRO =
  "Original contributions to the understanding of individual psychology and the architecture of self-governance.";

const FRAMEWORKS: DomainFramework[] = [
  {
    href: null,
    title: "Self-Leadership vs. Passive Compliance",
    description:
      "The foundational distinction in this domain. Two modes of psychological operation exist, and every individual defaults to one of them. This framework defines each mode, identifies the structural variable that separates them, and maps the consequences across every area of life.",
  },
  {
    href: null,
    title: "The Active Brain",
    description:
      "A brain in its active state generates its own thought sequences, initiates its own projects, and sustains effort without external prompting. This framework identifies what activates and what suppresses this capacity, and why most educational and institutional systems produce the suppressed version.",
  },
  {
    href: null,
    title: "Internal Authority",
    description:
      "The principle that all causality originates within the individual. Internal Authority is the structural opposite of hierarchy: no delegation of judgment, no outsourcing of responsibility, no reliance on external validation as a substitute for self-generated direction.",
  },
  {
    href: null,
    title: "Overcoming Conditioning",
    description:
      "Conditioning does not merely shape preferences. It installs entire operating systems that govern perception, decision, and action below the level of conscious awareness. This framework maps the layers of installed compliance and the sequence required to dismantle them.",
  },
];

const ARTICLES_INTRO =
  "Articles and papers from the Psychology and Self-Leadership domain.";

const ARTICLES: DomainArticle[] = [
  {
    href: null,
    tag: "Psychology & Self-Leadership · Mark Hamilton",
    title: "The Passive Brain: How Compliance Becomes a Default Operating System",
    description:
      "The majority of adults do not lead their own thinking. They execute patterns installed during childhood and reinforced by every institution they pass through. This paper identifies the mechanism and its reversal.",
  },
  {
    href: null,
    tag: "Psychology & Self-Leadership · Mark Hamilton",
    title: "Internal Authority and the End of Psychological Hierarchy",
    description:
      "External authority produces dependence. Internal authority produces creation. The shift between these two structures is not gradual; it is a discrete transition with identifiable preconditions.",
  },
  {
    href: "/published-work/psychology-and-self-leadership/integrated-thinking",
    tag: "Psychology & Self-Leadership · Mark Hamilton",
    title: "Integrated Thinking: The Cognitive Mechanism of Value Creation",
    description:
      "The cognitive operation underlying every act of value creation in human history. The mode that generates frames rather than working inside them. With Walter Chrysler as the foundational case study, this article traces how integration produces wealth, mastery, and self-leadership.",
  },
];

const RELATED_DOMAINS: DomainRelatedLink[] = [
  { href: "/published-work/consciousness-and-the-mind", label: "Consciousness and the Mind" },
  { href: "/published-work/human-nature", label: "Human Nature" },
  { href: "/published-work/productivity-and-the-integrated-life", label: "Productivity and the Integrated Life" },
];

const RELATED_DOMAINS_INTRO =
  "Self-leadership connects to the broader architecture of consciousness, human nature, and productive output.";

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

export default function PsychologyAndSelfLeadershipPage() {
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
        relatedDomainsIntro={RELATED_DOMAINS_INTRO}
      />
    </>
  );
}
