/**
 * Published Work domain landing — Civilization and History.
 * In-house page (published 2026-04-29). Source-faithful migration from
 * neothink-machine/output/nti/deploy/published-work/civilization-and-history/index.html
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

const PATH = "/published-work/civilization-and-history";
const DOMAIN_NAME = "Civilization and History";
const TITLE = `${DOMAIN_NAME} | Neothink Institute`;
const DESCRIPTION =
  "The 2,400-year detour, the Law of Humanity, the structural variable that governs every empire that has risen and collapsed, and the specific philosophical error that redirected Western civilization.";

const INTRO =
  "Every empire that has risen and collapsed did so according to a single structural variable. This domain traces the full arc of civilizational trajectory from ancient Greece to the present, identifying the repeating error that has governed twenty four centuries of human history.";

const COVERAGE_INTRO =
  "The questions that define this department span the entire record of organized human societies and the forces that determine their fate.";

const COVERAGE = [
  "Why do civilizations that achieve extraordinary flourishing consistently collapse into stagnation and decline?",
  "What structural condition separates the periods of rapid human advancement from the periods of regression?",
  "How did a single philosophical error in ancient Greece redirect the trajectory of Western civilization for over two millennia?",
  "What is the relationship between the use of initiatory force and the measurable decline of a society's creative output?",
  "Is the pattern of civilizational collapse inevitable, or does a specific structural correction exist that has never been fully implemented?",
];

const FRAMEWORKS_INTRO =
  "The original concepts developed within this domain of the body of work, each representing a distinct contribution to civilizational theory.";

const FRAMEWORKS: DomainFramework[] = [
  {
    href: "/unified-field",
    title: "The Unified Field of Conscious Civilization",
    description:
      "The identification of a single operative variable that governs civilizational flourishing across every domain of human activity. This framework proposes that the same condition producing political tyranny also produces economic stagnation, educational failure, and the suppression of individual consciousness. The variable is structural, not cultural.",
  },
  {
    href: null,
    title: "The 2,400 Year Detour",
    description:
      "A reinterpretation of Western history proposing that a specific philosophical error originating in ancient Greece sent civilization on a multi millennial wrong trajectory. The detour is not metaphorical. It refers to a concrete structural deviation from the conditions that produce human flourishing, traceable through every major epoch since Plato.",
  },
  {
    href: null,
    title: "The Law of Humanity",
    description:
      "The formulation that as force rises within a civilization, that civilization collapses; as force recedes, civilization soars. This is presented not as a philosophical preference but as an observable historical regularity with the explanatory consistency of a natural law. Every major period of human advancement and decline can be mapped against it.",
  },
  {
    href: null,
    title: "The Structural Error",
    description:
      "The specific, identifiable mistake embedded in the organization of every major civilization since antiquity. The structural error is not a policy failure or a leadership failure. It is an architectural flaw in how societies organize authority, and it reappears in every political revolution that attempts reform without correcting the underlying design.",
  },
];

const ARTICLES_INTRO =
  "Research and analysis from the Civilization and History domain of the Neothink Institute.";

const ARTICLES: DomainArticle[] = [
  {
    href: "/published-work/civilization-and-history/the-unified-field-of-conscious-civilization",
    tag: "Civilizational Theory · Mark Hamilton",
    title: "The Unified Field of Conscious Civilization",
    description:
      "The synthesis identifying the single structural variable that determines whether civilizations rise, stagnate, or collapse. The framework traces the variable across the major empires, religions, and political systems of recorded history, and names the architectural correction that ends the 2,400-year detour.",
  },
  {
    href: null,
    tag: "Historical Analysis · Mark Hamilton",
    title: "From Athens to the Present: Tracing the Detour Across Twenty Four Centuries",
    description:
      "The philosophical turn that occurred in the generation after Socrates produced consequences that extend to the present day. This paper traces the structural implications of that turn through the Roman adoption of hierarchy, the medieval consolidation of external authority, and the incomplete corrections of the Enlightenment.",
  },
  {
    href: null,
    tag: "Civilizational Theory · Mark Hamilton",
    title: "Why Every Political Revolution Repeats the Same Mistake",
    description:
      "The French Revolution replaced a monarchy with a terror. The Russian Revolution replaced a tsar with a totalitarian state. The structural error is not who holds power but the architecture through which power operates. Until the architecture changes, the revolution merely rotates the personnel.",
  },
];

const RELATED_DOMAINS: DomainRelatedLink[] = [
  { href: "/published-work/governance-and-political-theory", label: "Governance and Political Theory" },
  { href: "/published-work/philosophy-and-anthropology", label: "Philosophy and Anthropology" },
  { href: "/published-work/consciousness-and-the-mind", label: "Consciousness and the Mind" },
];

const RELATED_DOMAINS_INTRO =
  "These domains share deep structural connections with the study of civilization and its trajectory.";

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

export default function CivilizationAndHistoryPage() {
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
        coverageIntro={COVERAGE_INTRO}
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
