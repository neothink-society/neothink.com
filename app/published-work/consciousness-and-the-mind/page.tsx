/**
 * Published Work domain landing — Consciousness and the Mind.
 * In-house page (published 2026-04-29). Source-faithful migration from
 * neothink-machine/output/nti/deploy/published-work/consciousness-and-the-mind/index.html
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

const PATH = "/published-work/consciousness-and-the-mind";
const DOMAIN_NAME = "Consciousness and the Mind";
const TITLE = `${DOMAIN_NAME} | Neothink Institute`;
const DESCRIPTION =
  "The bicameral mind, integrated thinking, the active brain, and Neothink as cognitive technology. Where the structure of individual consciousness meets the structure of civilization.";

const INTRO =
  "The structure of individual consciousness determines the structure of civilization. This domain examines how the human mind operates, why most minds remain in a passive mode of functioning, and what becomes possible when that mode is replaced by an active, integrated cognitive system.";

const COVERAGE = [
  "What was the bicameral mind, and what are the consequences of its residual structure in the modern human brain?",
  "What distinguishes integrated thinking from the passive, externally directed cognition that characterizes most human functioning?",
  'What does it mean for a mind to be "covered," and what cognitive capacities emerge when that covering is removed?',
  "How does the structure of consciousness connect to the structure of civilization; that is, how do individual cognitive patterns produce collective outcomes?",
  "What is the relationship between Neothink as a cognitive operating system and artificial intelligence as a computational one?",
];

const COVERAGE_INTRO =
  "This department addresses the foundational questions about how human cognition actually operates and what prevents it from operating fully.";

const FRAMEWORKS: DomainFramework[] = [
  {
    href: null,
    title: "The Bicameral Mind",
    description:
      "Building on Julian Jaynes's foundational thesis, this framework examines the implications of the bicameral mental structure for modern consciousness. The residual bicameral architecture explains why most humans default to an externally directed mode of cognition, receiving instructions rather than generating autonomous thought. The civilizational consequences of this default are enormous.",
  },
  {
    href: "/neothink",
    title: "Neothink: The Cognitive Operating System",
    description:
      "Neothink is not a philosophy or a belief system. It is a mode of cognitive functioning: the integration of wide ranging knowledge into original, autonomous thought. Where the passive mind processes information sequentially, the Neothink mind synthesizes across domains, producing new integrations that did not exist before the thinking occurred.",
  },
  {
    href: null,
    title: "The Covered Mind and the Uncovered Mind",
    description:
      "The distinction between the mind operating under layers of external conditioning and the mind functioning in its natural, uncovered state. The covered mind accepts authority, follows precedent, and avoids the discomfort of original judgment. The uncovered mind generates value, perceives reality directly, and operates from internal authority.",
  },
  {
    href: null,
    title: "The Supermind",
    description:
      "The convergence of Neothink and artificial intelligence into a new cognitive configuration. Neothink provides the integrative, conceptual dimension that AI cannot generate on its own. AI provides the computational scale and data synthesis that the individual mind cannot achieve alone. Together they constitute a cognitive architecture that neither can produce independently.",
  },
];

const FRAMEWORKS_INTRO =
  "The original models and extensions developed within this domain, each advancing the understanding of how consciousness functions and what it produces.";

const ARTICLES: DomainArticle[] = [
  {
    href: "/published-work/consciousness-and-the-mind/the-neothink-mind",
    tag: "Consciousness · Mark Hamilton",
    title: "The Neothink Mind: The Final Form of Consciousness",
    description:
      "The cognitive form that integrates rather than fragments. The third stage of consciousness beyond the bicameral mind and the rational mind, identified and named by Mark Hamilton across fifty years of integrated research. The integrating mind plus AI compresses centuries of synthesis into human-scale time.",
  },
  {
    href: null,
    tag: "Cognitive Theory · Mark Hamilton",
    title: "Integrated Thinking: The Mechanism Behind Original Value Creation",
    description:
      "Most cognitive models describe thinking as information processing. Integrated thinking is something different: the synthesis of knowledge across multiple domains into a new conceptual whole. This paper examines the specific mechanism by which integration produces original thought and why conventional education systematically prevents its development.",
  },
  {
    href: null,
    tag: "AI and Consciousness · Mark Hamilton",
    title: "The Supermind Thesis: Why AI Without Neothink Produces Nothing New",
    description:
      "Artificial intelligence can process, correlate, and predict at scales no human mind can match. What it cannot do is integrate across domains to produce genuinely original conceptual breakthroughs. The Supermind thesis proposes that the next stage of cognitive capability requires the convergence of human integrated thinking with computational intelligence.",
  },
];

const ARTICLES_INTRO =
  "Research and analysis from the Consciousness and the Mind domain of the Neothink Institute.";

const RELATED_DOMAINS: DomainRelatedLink[] = [
  { href: "/published-work/human-nature", label: "Human Nature" },
  { href: "/published-work/psychology-and-self-leadership", label: "Psychology and Self-Leadership" },
  { href: "/published-work/philosophy-and-anthropology", label: "Philosophy and Anthropology" },
];

const RELATED_DOMAINS_INTRO =
  "These domains examine connected dimensions of consciousness, identity, and the conditions that shape how the mind develops.";

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

export default function ConsciousnessAndTheMindPage() {
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
