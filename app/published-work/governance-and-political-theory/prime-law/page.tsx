/**
 * Published Work article — The Prime Law: The Missing Cosmological Constant of Civilization
 *
 * In-house article (published 2026-04-29). Foundational/canonical for the
 * Governance and Political Theory domain. Source-of-truth draft at
 * neothink-machine/neothink-articles/drafts/prime-law.md
 */

import {
  ArticlePage,
  type ArticleFurtherCard,
  type ArticleRelatedDomain,
} from "@/components/published-work-articles/article-page";
import {
  blogPostingJsonLd,
  breadcrumbListJsonLd,
  webPageJsonLd,
} from "@/lib/json-ld";
import { siteConfig } from "@/lib/metadata";
import { pageMetadata } from "@/lib/seo-metadata";
import { schemaIds } from "@/lib/schema-ids";

const PATH = "/published-work/governance-and-political-theory/prime-law";
const DOMAIN_PATH = "/published-work/governance-and-political-theory";
const DOMAIN_NAME = "Governance and Political Theory";
const TITLE = "The Prime Law: The Missing Cosmological Constant of Civilization";
const DISPLAY_TITLE = "The Prime Law";
const TAGLINE = "The missing cosmological constant of civilization.";
const DESCRIPTION =
  "The Prime Law is the constitutional prohibition of initiated force. The architectural correction to the 2,400-year detour, codified as civilizational law.";
const PUBLISHED_ISO = "2026-04-29T09:00:00.000Z";
const MODIFIED_ISO = "2026-04-29T20:00:00.000Z";
const PUBLISHED_DISPLAY = "April 2026";

const FURTHER: ArticleFurtherCard[] = [
  {
    href: "/unified-field",
    eyebrow: "Civilizational Theory",
    title: "The Unified Field of Conscious Civilization",
    description:
      "The framework explaining where the structural error came from and what must replace it. The Prime Law is the framework's correction.",
  },
  {
    href: "/neovia",
    eyebrow: "The Civilization",
    title: "Neovia",
    description:
      "The first jurisdiction designed from the ground up on the Prime Law as constitutional foundation. The physical expression of the correction.",
  },
  {
    href: "/neothink",
    eyebrow: "The Operating System",
    title: "Neothink",
    description:
      "The cognitive form that emerges when force is removed as the organizing principle. What consciousness does when uncovered.",
  },
  {
    href: "/mark-hamilton",
    eyebrow: "The Architect",
    title: "Mark Hamilton",
    description:
      "Civilizational theorist, systems philosopher, and founder of the Neothink Institute. The author of the Prime Law as constitutional architecture.",
  },
  {
    href: "/unleashed",
    eyebrow: "The Synthesis",
    title: "Unleashed: The Promethean Promise",
    description:
      "The flagship synthesis where the Prime Law is delivered in full context, from the bicameral collapse through the present convergence to the correction.",
  },
];

const RELATED_DOMAINS: ArticleRelatedDomain[] = [
  { href: "/published-work/civilization-and-history", label: "Civilization and History" },
  { href: "/published-work/philosophy-and-anthropology", label: "Philosophy and Anthropology" },
  { href: "/published-work/economics", label: "Economics" },
];

const BODY_HTML = `<p>When a living being is separated from its nature, it suffers. When it is in harmony, it thrives.</p>
<p>For 2,400 years, civilization has been built on a contradiction. Consciousness advanced. Reason matured. Knowledge multiplied. Beneath every law, every institution, every border, and every system of order, force was held in reserve. Civilization evolved outwardly while continuing to rely inwardly on coercion as its final authority. Every reform changed who held power. Every revolution changed which faction sat above the rest. The architecture itself remained in place. Hierarchy as the structural load-bearer. Initiated force as the silent guarantor.</p>
<p>The Prime Law ends that contradiction. It is the prohibition of initiated force. Codified as civilizational architecture, not as moral aspiration.</p>
<p>This is not ideology. It is architecture.</p>

<h2 class="pwa-reveal">The law in canonical form</h2>
<p>The Prime Law is published in Unleashed in three articles preceded by a single Preamble. The construction is deliberate. Preamble names the purpose of life and the function of government. The three articles encode the law itself.</p>
<p><strong>Preamble.</strong> The purpose of human life is to prosper and live happily. The function of government is to provide the conditions that let individuals fulfill that purpose. The Prime Law guarantees those conditions by forbidding the use of initiatory force, fraud, or coercion by any person or group against any individual, property, or contract.</p>
<p><strong>Article 1.</strong> No person, group of persons, or government shall initiate force, threat of force, or fraud against any individual's self, property, or contract.</p>
<p><strong>Article 2.</strong> Force is morally and legally justified only for protection from those who violate Article 1.</p>
<p><strong>Article 3.</strong> No exceptions shall exist for Articles 1 and 2.</p>
<p>The structure is closed. Article 1 names the single prohibition. Article 2 names the single permission. Article 3 forecloses every loophole through which force has historically reentered. The categorical clause is load-bearing. Without it, every empire, every clergy, every regulator has rebuilt the cage in the name of stability, justice, faith, security, equity, or emergency.</p>
<p>It reduces all legislation to one question: Was force initiated?</p>
<p>That single question replaces millennia of moral debate with a structural test. If yes, the act is illegitimate. If no, it is free. Law becomes a filter rather than a stack of statutes. Government becomes a guardian rather than a maker.</p>

<div class="pwa-callout pwa-reveal">
  <span class="pwa-callout-label">The Test</span>
  <p class="pwa-callout-text">Was force initiated?</p>
</div>

<h2 class="pwa-reveal">Why this is not the Non-Aggression Principle</h2>
<p>The libertarian Non-Aggression Principle and the Prime Law share a sentence and almost nothing else. The Non-Aggression Principle is a normative claim. It asserts that initiating force is morally wrong, and it leaves the rest of civilization to argue about what counts as force, who applies it, and which exceptions are allowed.</p>
<p>The Prime Law is a civilizational-physics claim. It does not ask what is morally desirable. It states what civilization actually requires to function once consciousness has crossed a threshold. The conscious human being simply cannot function under force. Force destroys feedback. It suppresses information. It prevents correction. When power cannot be challenged, error compounds and human beings become the expendable variable. The Prime Law names this as the structural variable governing every civilization in recorded history.</p>
<p>Force up, civilization down. Force down, civilization up.</p>
<p>Every collapse in recorded history traces this curve. Rome, Byzantium, Ming China, Spain, the Soviet Union. Every flourishing traces its inverse. Athens at the moment of Socrates and the integrating philosophers. Florence under conditions of unusual contractual freedom. Britain and the early United States during the windows when regulation was thin and inquiry was unlicensed. The pattern is invariant. Force is civilization's failure mode. It is never its foundation.</p>
<p>The libertarian formulation cannot reach this register. It begins from the autonomy of the individual and extends outward to a political program. The Prime Law begins from observed civilizational physics and codifies the result. One is preference. The other is law. Where Non-Aggression argues, the Prime Law records.</p>

<h2 class="pwa-reveal">Aristotle and the moment civilization missed</h2>
<p>The integrating mind has appeared before. Briefly. The clearest emergence was in Aristotle, who completed the transition from bicameral cognition to integrated consciousness by articulating the structure of a self-governing mind.</p>
<p>Aristotle had crossed the threshold humanity would not collectively cross again for millennia. He grasped causality, empiricism, logic, biology, ethics, politics, and metaphysics as an integrated whole. He understood that reality was intelligible, that knowledge was cumulative, and that the human mind left free could discover truth without recourse to force or authority. He said that force constrains volition, constrains reason.</p>
<p>His successor Andronicus of Rhodes preserved fragments. The widely accessible exoteric works disappeared. What survived narrowly were lecture notes circulated among small intellectual elites. The civilization that should have inherited his operating system inherited Plato's hierarchy instead, because Plato's structure was triage for a population still largely bicameral and Aristotle's framework required psychological readiness the era did not have.</p>
<p>Humanity did not reject Aristotle's full consciousness. It never truly received it.</p>
<p>Aristotle's ethics terminate at the Prime Law by structural necessity. Identity and non-contradiction make force philosophically unintelligible, because force forces a mind to accept contradictions and thereby violates the basic structure of reason. Final cause and eudaimonia make force destructive of human flourishing, because force destroys self-directed purpose. Virtue as rational action makes force the negation of virtue, because virtue requires voluntary, reason-guided choice and force destroys choice.</p>
<p>The conscious human being simply cannot function under force.</p>
<p>Force is the negation of consciousness.</p>
<p>The Prime Law is what Aristotle would have written in his lost public works. Where consciousness was self-governing in his ethics, civilization becomes self-governing under the Prime Law. The integration travels outward from the individual mind to the architecture of civilization. The same single principle scales.</p>

<p class="pwa-pullquote pwa-reveal">In Aristotle, consciousness was self-governing. In the Prime Law, civilization becomes self-governing.</p>

<p>What began as philosophy ends as physics.</p>

<h2 class="pwa-reveal">The lineage that reached the law</h2>
<p>Aristotle articulated the structure of a self-governing mind: perception, thought, deliberation, choice, action, character. He showed force to be the negation of consciousness itself. The cornerstone existed in his work. What he could not do, given the political conditions of fourth-century Athens, was codify the cornerstone as constitutional architecture.</p>
<p><a href="/mark-hamilton">Mark Hamilton</a>, after fifty years of integrated research across every major domain of human knowledge, completed that codification. The Prime Law is the formal codification of the constraint Aristotle articulated, written as the load-bearing rule of the first civilizational architecture designed to operate without initiated force. What Aristotle described as the precondition for full consciousness, Mark Hamilton codified as the precondition for the civilization built on it.</p>

<h2 class="pwa-reveal">The moral physics</h2>
<p>The Prime Law is presented in Unleashed as moral physics. The framing is exact.</p>
<p>Just as physics has universal laws, biology has evolutionary laws, and logic has axiomatic laws, conscious civilization has the Prime Law. Galaxies do not require kings to orbit their suns. Order emerges from natural forces acting without command. Civilization, when allowed to follow its natural law, behaves the same way. Coercion is to civilization what entropy is to a physical system. Remove coercion, and society becomes as stable and creative as the cosmos itself.</p>
<p>Every prior political structure failed for the same reason. They contained no mechanism to prevent initiatory force. Each assumed that coercion, if guided by noble purpose, could produce good. Plato's Republic, Augustine's Church, Marx's commune, and modern democracy all collapsed under the same uncorrected equation.</p>
<p>Coercion = Order.</p>
<p>The Prime Law corrects it.</p>
<p>Volition = Order.</p>
<p>When coercion approaches zero, civilization enters what physicists would call a singularity of creation. A point where moral and material progress accelerate without limit. Innovation compounds because nothing suppresses it. Inquiry explodes because nothing throttles it. Wealth ceases to be zero-sum and becomes exponential. Knowledge becomes cumulative rather than periodically erased by authority.</p>
<p>Freedom + integrated minds = exponential value creation.</p>
<p>This is why the framing differs from political philosophy. Political philosophy debates which force is just. Moral physics observes what creation requires. The Prime Law names the single variable.</p>

<div class="pwa-callout pwa-reveal">
  <span class="pwa-callout-label">The Constant</span>
  <p class="pwa-callout-text">The Prime Law is the missing keystone.</p>
</div>

<h2 class="pwa-reveal">The civilization that almost was</h2>
<p>History records what happens when force recedes briefly. The Athenian Big Bang scattered ideas into a vast moral universe. The dense gravity of superstition broke apart. The Enlightenment freed thought. The American Constitution restrained power, divided authority, and assumed that individuals could think, act, trade, speak, and create without constant supervision. It translated reason into law and, for the first time at scale, made freedom operational rather than aspirational.</p>
<p>And yet, even this triumph stopped short of the deepest law governing civilization. The Constitution restrained force. It did not eliminate it. It assumed force would always be present, managed, balanced, and checked. It never rejected force as a principle.</p>
<p>The Enlightenment freed thought. The Constitution freed governance. The Prime Law frees consciousness itself.</p>
<p>The counterfactual is precise rather than utopian. Had the Prime Law been codified at the moment of Aristotle, knowledge would never have reset. There would have been no Dark Ages, because there would have been no authority empowered to suppress inquiry. Libraries would not have burned as instruments of control. Aristotle's work would have been expanded immediately by thousands, then millions of minds operating freely across generations. Humanity would not have waited 2,000 years to rediscover empirical science. Industrial Revolution by the second or third century. Continuous medicine. No Dark Ages. No totalitarian states. No world wars. No industrialized genocide. No nuclear brinkmanship.</p>
<p>Under hierarchy and force, progress crawls, stalls, collapses, and resets. Under the Prime Law, progress compounds.</p>
<p>Humanity did not lack intelligence for 2,300 years. It lacked permission.</p>
<p>The civilization that almost was still waits, no longer as a counterfactual, but as a decision.</p>

<h2 class="pwa-reveal">The anti-extinction argument</h2>
<p>The twentieth century proved what force produces when given ideological justification and industrial power. Weapons once limited by muscle and distance became mechanized, automated, and abstract. Killing no longer required proximity. Decisions made behind desks could annihilate cities. Bureaucrats could erase millions with signatures. Force had become impersonal and therefore limitless. By the century's end, humanity stood atop a paradox. Never before had productive power risen so high where freedom remained intact. Never before had extinction itself become technically feasible.</p>
<p>Nuclear weapons changed the equation permanently. Force was no longer merely civilizationally destructive. It became existentially terminal. A handful of decisions, made under coercive structures, could erase nations. They could erase the species itself.</p>
<p>Artificial intelligence has now compressed the time between decision and consequence toward zero. As long as force-based hierarchies govern in a nuclear age, and AI compresses the time between decision and consequence, the probability of catastrophic failure approaches certainty. <a href="/neovia">Neovia</a> is the structural exit from that trajectory.</p>
<p>The Prime Law and Neovia are beyond moral idealism. They are survival realism.</p>
<p>For the first time, the choice is no longer between prosperity and poverty. It is between consciousness and extinction.</p>
<p>If humanity delays the Prime Law again, now armed with nuclear force, the next delay may not cost millennia. It may cost everything.</p>
<p>The detour is not a mistake. It is a physical law playing out in slow motion. The same equation runs in every direction. Force up, civilization down. Force down, civilization up. The pattern does not need belief. It needs codification.</p>

<h2 class="pwa-reveal">Neovia: the first Prime Law civilization</h2>
<p>A Prime Law civilization begins through demonstration rather than decree. It begins voluntarily. Prime Law societies will first arise as opt-in jurisdictions, zones in which participation is contractual rather than compulsory, and exit is guaranteed rather than forbidden. Within these environments, no individual is compelled to associate, transact, or remain. All human interaction rests on consent. Disputes are resolved through restitution rather than punishment. Property is respected as absolute. Violence, fraud, and coercion are treated as violations of human autonomy requiring remedy.</p>
<p>These early societies are not imagined utopia. They are proof. Not argument. Outcome.</p>
<p>Once such zones demonstrate rapid wealth creation, extraordinary innovation, higher health outcomes, and near-total absence of violent conflict, the philosophical debate quietly ends. Civilization adopts superior systems because and when people move to them in overwhelming numbers. Migration has always been history's most honest vote. Capital flows outward. Talent departs. Productivity relocates.</p>
<p>Neovia is the first society in history built for the conscious mind. Not an improvement of past civilizations. Not a reform. Not a tweak. A phase change. The shift from a pre-conscious civilization to a conscious civilization. The Prime Law is to Neovia what the laws of physics are to the universe: the fundamental constraint that makes freedom possible.</p>
<p>The intermediaries that placed themselves above man for millennia were always architectures of inherited force. Kings. Governments. Religions. Institutions. They claimed authority, control, rule that never belonged to them. The Prime Law removes them at the foundation rather than at the surface. Authority no longer requires belief. It requires only the prevention of initiated force.</p>
<p>Freedom without structure collapses back into force. The Prime Law is the structure that holds freedom in place. Three articles. One prohibition. No exceptions. The cosmos obeys the analogous laws by necessity. Consciousness must choose this one by will.</p>

<h2 class="pwa-reveal">The detour ends here</h2>
<p>For 2,400 years, civilization has run the same experiment on every continent. Every result has confirmed the same equation. The contradiction has been named. The law has been written. The civilization built on it is under construction.</p>
<p>The detour ends here.</p>`;

const CANONICAL = `${siteConfig.url}${PATH}`;
const DOC_TITLE = `${TITLE} | Neothink Institute`;

export const metadata = pageMetadata({
  title: DOC_TITLE,
  description: DESCRIPTION,
  pathname: PATH,
  ogType: "article",
  article: {
    publishedTime: PUBLISHED_ISO,
    modifiedTime: MODIFIED_ISO,
  },
});

const breadcrumbs = breadcrumbListJsonLd([
  { name: "Home", path: "/" },
  { name: "Published Work", path: "/published-work" },
  { name: DOMAIN_NAME, path: DOMAIN_PATH },
  { name: DISPLAY_TITLE, path: PATH },
]);

const pageLd = webPageJsonLd({
  pathname: PATH,
  name: DOC_TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED_ISO,
  dateModified: MODIFIED_ISO,
  authorId: schemaIds.founder,
  mainEntityId: `${CANONICAL}#article`,
  speakableSelectors: ["main#main-content h1", "main#main-content .pwa-tagline"] as const,
});

const articleLd = blogPostingJsonLd({
  pathname: PATH,
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED_ISO,
  dateModified: MODIFIED_ISO,
  authorId: schemaIds.founder,
});

export default function ThePrimeLawPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <ArticlePage
        title={DISPLAY_TITLE}
        tagline={TAGLINE}
        domain={DOMAIN_NAME}
        domainPath={DOMAIN_PATH}
        publishedDateDisplay={PUBLISHED_DISPLAY}
        bodyHtml={BODY_HTML}
        furtherReading={FURTHER}
        relatedDomains={RELATED_DOMAINS}
      />
    </>
  );
}
