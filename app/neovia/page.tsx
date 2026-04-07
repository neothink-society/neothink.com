import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Neovia | The First Civilization for Conscious Human Beings",
  description:
    "Neovia is the first civilizational architecture designed to remove initiated force at the structural root and allow consciousness to operate at full power.",
  alternates: { canonical: "/neovia" },
  openGraph: {
    title: "Neovia | The First Civilization for Conscious Human Beings",
    description:
      "Neovia is the first civilizational architecture designed to remove initiated force at the structural root and allow consciousness to operate at full power.",
    url: "https://neothink.com/neovia",
    type: "article",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const WHAT_CHANGES = [
  {
    icon: "∞",
    title: "Economics",
    description:
      "When extraction through force is structurally impossible, value creation becomes the only viable economic strategy. Wealth is generated rather than redistributed. Productivity compounds without ceiling.",
  },
  {
    icon: "♣",
    title: "Health & Longevity",
    description:
      "Medical research freed from regulatory capture accelerates by an order of magnitude. Voluntary incentive structures replace coercive ones. The suppression of life-extension science ends.",
  },
  {
    icon: "♦",
    title: "Governance",
    description:
      "The Prime Law replaces legislation. No body may initiate force against any person for any reason. Governance becomes the protection of that principle, not its circumvention.",
  },
  {
    icon: "♠",
    title: "Education",
    description:
      "Learning freed from compulsion produces integrated thinkers, not compliant workers. The Neothink mentality emerges naturally when hierarchy stops shaping the mind from childhood.",
  },
  {
    icon: "♥",
    title: "Psychology",
    description:
      "When external authority is structurally removed, internal authority emerges. The psychological damage hierarchy causes — anxiety, dependency, suppressed creativity — begins to heal.",
  },
  {
    icon: "↔",
    title: "Peace",
    description:
      "War requires states that can conscript, tax, and compel. Remove the structural capacity for initiated force and you remove the infrastructure on which organized violence depends.",
  },
] as const;

type ExtinctionStep = {
  label: string;
  text: string;
  isRed?: boolean;
};

const EXTINCTION_CHAIN: ExtinctionStep[] = [
  {
    label: "The Structural Condition",
    text: "Every current civilization is organized around the state's monopoly on initiated force. This is not a governance flaw. It is the foundational design.",
  },
  {
    label: "The Proliferation Problem",
    text: "That design is now combined with nuclear, biological, and increasingly autonomous weapons. The tools of mass destruction are becoming cheaper, smaller, and more accessible.",
  },
  {
    label: "The Incentive Structure",
    text: "Hierarchical systems produce leaders who benefit from conflict. The incentive to use catastrophic force — whether to maintain power, prevent defeat, or pre-empt a rival — is structural, not incidental.",
  },
  {
    label: "The Historical Trajectory",
    text: "Every prior civilization that reached this level of destructive capacity has eventually used it. Not always through rational calculation. Often through miscalculation, desperation, or systemic breakdown.",
  },
  {
    label: "The Timeline",
    text: "The window between human civilizations having the technical capacity to build bioweapons and the political will to prevent their use is not indefinitely long. It may be measured in decades, not centuries.",
  },
  {
    label: "The Only Exit",
    text: "A civilization without the structural capacity for initiated force cannot produce the kind of leaders who would use it. Neovia is not idealism. It is the only remaining structural solution.",
    isRed: true,
  },
];

const COUNTERFACTUAL_ERAS = [
  {
    date: "~330 BC",
    title: "The Alexandrian Synthesis",
    description:
      "Alexander's integration of Greek rationalism with Persian administrative sophistication created the conditions for a proto-civilizational breakthrough. The death of one man ended it.",
    saved: "Integrated knowledge",
  },
  {
    date: "0–200 AD",
    title: "The Roman Constitutional Moment",
    description:
      "For two centuries Rome operated under a system of law that constrained — imperfectly but genuinely — the use of arbitrary force. The institutional framework almost held.",
    saved: "Rule of law",
  },
  {
    date: "200–400 AD",
    title: "The Library of Alexandria",
    description:
      "The accumulated scientific and philosophical knowledge of the ancient world represented the most advanced knowledge base in human history. Its destruction set science back by a thousand years.",
    saved: "Scientific continuity",
  },
  {
    date: "400–1000",
    title: "The Islamic Golden Age",
    description:
      "For six centuries, Islamic scholars preserved Greek rationalism, advanced mathematics, medicine, and astronomy while Europe collapsed. The window closed when theological authority reasserted control.",
    saved: "Rational tradition",
  },
  {
    date: "Now",
    title: "This Is the Last Window",
    description:
      "We are in the only period in human history where the tools to build a civilization without initiated force actually exist — alongside the tools to end civilization entirely. There is no next chance.",
    saved: "Everything",
  },
] as const;

const INVOLVEMENT_CARDS = [
  {
    numeral: "I",
    title: "Invest",
    description:
      "Neovia requires capital to move from architectural vision to physical reality. We are building the financial and legal structures that make participation possible.",
    href: "/get-involved#invest",
  },
  {
    numeral: "II",
    title: "Advise",
    description:
      "Constitutional lawyers, economists, architects, governance theorists, and domain specialists who understand what we are building and want to contribute their expertise.",
    href: "/get-involved#advise",
  },
  {
    numeral: "III",
    title: "Build",
    description:
      "Engineers, designers, researchers, and builders who want to work on the hardest civilizational problem of the 21st century. The work is real. The stakes are real.",
    href: "/get-involved#build",
  },
  {
    numeral: "IV",
    title: "Support",
    description:
      "Communicate the vision. Connect us with people who should know about it. Help build the network of awareness that any civilizational project requires to move forward.",
    href: "/get-involved#support",
  },
] as const;

// ─── JSON-LD ─────────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://neothink.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Neovia",
      item: "https://neothink.com/neovia",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Neovia | The First Civilization for Conscious Human Beings",
  description:
    "Neovia is the first civilizational architecture designed to remove initiated force at the structural root and allow consciousness to operate at full power.",
  url: "https://neothink.com/neovia",
  datePublished: "2024-05-02",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function NeoviaPage() {
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
      <main id="main-content">

        {/* ── Section 1: Hero ──────────────────────────────────────────────── */}
        <section
          aria-labelledby="neovia-hero-heading"
          className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-[#0E0E0E] px-6 pb-[120px] pt-[160px] md:px-12 max-md:pb-20"
        >
          {/* Radial gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(184,151,58,0.04) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />

          {/* NEOVIA watermark */}
          <span
            className="pointer-events-none absolute bottom-0 right-[-2%] select-none font-serif font-light leading-none text-white"
            style={{
              fontSize: "clamp(200px, 25vw, 400px)",
              opacity: 0.02,
              lineHeight: 0.85,
            }}
            aria-hidden="true"
          >
            NEOVIA
          </span>

          <div className="relative z-10 mx-auto w-full max-w-[1160px]">
            <p
              className="nti-reveal text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B060]"
              style={{ animationDelay: "0.2s" }}
            >
              The Civilizational Vision
            </p>

            <h1
              id="neovia-hero-heading"
              className="nti-reveal mt-6 max-w-[780px] font-serif font-light leading-[1.05] tracking-[-0.01em] text-[#FDFCFA]"
              style={{
                fontSize: "clamp(42px, 5.5vw, 78px)",
                animationDelay: "0.4s",
              }}
            >
              The first civilization designed for{" "}
              <em className="text-[#D4B060]">fully conscious</em> human beings.
            </h1>

            <p
              className="nti-reveal mt-8 max-w-[560px] text-[17px] font-light leading-[1.8] text-[rgba(253,252,250,0.6)]"
              style={{ animationDelay: "0.6s" }}
            >
              Every civilization in history has been organized around the use of
              initiated force. Neovia is the first one explicitly designed to
              remove it — not as a reform, but as a structural foundation.
            </p>

            <div
              className="nti-reveal mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "0.8s" }}
            >
              <a
                href="#problem"
                className="inline-flex min-h-[44px] items-center justify-center bg-[#B8973A] px-8 text-[13px] font-medium uppercase tracking-[0.12em] text-[#0E0E0E] transition-colors duration-200 hover:bg-[#D4B060] hover:border-[#D4B060]"
              >
                Why Neovia Must Be Built
              </a>
              <a
                href="#involved"
                className="inline-flex min-h-[44px] items-center justify-center border border-[rgba(255,255,255,0.2)] px-8 text-[13px] font-medium uppercase tracking-[0.12em] text-[rgba(253,252,250,0.7)] transition-colors duration-200 hover:border-[#D4B060] hover:text-[#D4B060]"
              >
                Get Involved
              </a>
            </div>
          </div>
        </section>

        {/* ── Section 2: The Problem ───────────────────────────────────────── */}
        <section
          id="problem"
          aria-labelledby="neovia-problem-heading"
          className="border-b border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Problem
            </p>
            <h2
              id="neovia-problem-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              Every civilization in history has been built on{" "}
              <em className="text-[#8A7030]">the same structural error.</em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The error is not bad leadership, corrupt institutions, or flawed
              ideology. Those are symptoms. The structural error is simpler and
              more fundamental:{" "}
              <strong>
                every civilization in recorded history has been organized around
                the premise that some group of human beings has the right to
                initiate force against others.
              </strong>{" "}
              Governments that compel compliance through the threat of violence.
              Economic systems that extract value through coercion rather than
              creation. Hierarchies of all kinds that substitute authority for
              reason.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              This is not a description of some civilizations. It is a
              description of all of them. Every political system ever tried —
              democracy, monarchy, theocracy, socialism, fascism, republic — has
              shared this feature. The debate has always been about who gets to
              exercise the initiated force and under what procedural constraints.
              No one has seriously challenged the premise that the force itself
              must exist.
            </p>

            {/* Pull quote */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[22px] italic leading-[1.5] text-[#4A4540]">
                The question is not how to better manage a civilization built on
                force. The question is whether civilization can be built without
                it.
              </p>
            </blockquote>

            <p className="text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Mark Hamilton&rsquo;s answer, developed over fifty years of
              civilizational research, is yes. But only if the removal of
              initiated force is treated as a{" "}
              <strong>structural design constraint</strong> — not a political
              goal to be pursued through existing hierarchical processes. You
              cannot remove initiated force by winning an election inside a
              system whose existence depends on it. You have to build a new
              system from the ground up with that constraint built in.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              That is what Neovia is. Not a reform. Not a political platform.
              Not an ideology. A civilizational architecture in which the
              initiation of force is structurally impossible — not merely
              illegal, but removed from the design at the constitutional level
              through the Prime Law.
            </p>
          </div>
        </section>

        {/* ── Section 3: The Prime Law ─────────────────────────────────────── */}
        <section
          aria-labelledby="neovia-primelaw-heading"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[800px] text-center">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
              The Constitutional Foundation
            </p>

            <h2
              id="neovia-primelaw-heading"
              className="nti-reveal font-serif text-[clamp(28px,2.8vw,44px)] font-light italic leading-[1.3] text-[#FDFCFA]"
            >
              &ldquo;No person, group of persons, or government shall initiate
              force, threat of force, or fraud against any individual&rsquo;s
              self, property, or contracts.&rdquo;
            </h2>

            <div className="mt-16 max-w-[640px] mx-auto space-y-0 text-left">
              {/* Article I */}
              <div className="border-b border-[rgba(255,255,255,0.08)] pb-10">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                  Article I
                </p>
                <h3 className="mt-3 font-serif text-[22px] font-normal leading-[1.3] text-[#FDFCFA]">
                  No Initiated Force
                </h3>
                <p className="mt-3 text-[15px] font-light leading-[1.85] text-[rgba(253,252,250,0.7)]">
                  No individual, company, or government may initiate force,
                  threat of force, or fraud against any individual&rsquo;s self,
                  property, or contracts. Force is permitted only in defense.
                  This is not a law that can be repealed. It is the condition of
                  membership in the civilization.
                </p>
              </div>

              {/* Article II */}
              <div className="border-b border-[rgba(255,255,255,0.08)] py-10">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                  Article II
                </p>
                <h3 className="mt-3 font-serif text-[22px] font-normal leading-[1.3] text-[#FDFCFA]">
                  No Exceptions
                </h3>
                <p className="mt-3 text-[15px] font-light leading-[1.85] text-[rgba(253,252,250,0.7)]">
                  The law applies to all people equally, including those in
                  positions of governance. No emergency, national interest, or
                  democratic majority can override it. The protection of the
                  individual against initiated force is absolute and
                  non-negotiable. This is what makes it constitutional rather
                  than merely legal.
                </p>
              </div>

              {/* Article III */}
              <div className="pt-10">
                <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                  Article III
                </p>
                <h3 className="mt-3 font-serif text-[22px] font-normal leading-[1.3] text-[#FDFCFA]">
                  Defense Only
                </h3>
                <p className="mt-3 text-[15px] font-light leading-[1.85] text-[rgba(253,252,250,0.7)]">
                  Force used in self-defense, defense of others, or defense of
                  property is explicitly protected. The law does not produce
                  passivity. It produces a civilization in which only defensive
                  force exists — and defensive force, by definition, cannot be
                  the foundation of oppression.
                </p>
              </div>
            </div>

            <p className="mt-14 font-serif text-[15px] italic leading-[1.7] text-[rgba(253,252,250,0.45)]">
              The Prime Law is not a moral claim. It is a structural design
              constraint. The question it answers is not &ldquo;what should
              people do?&rdquo; but &ldquo;what kind of civilization becomes
              possible when this constraint is enforced absolutely?&rdquo;
            </p>
          </div>
        </section>

        {/* ── Section 4: What Changes ──────────────────────────────────────── */}
        <section
          aria-labelledby="neovia-changes-heading"
          className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              When Force Is Removed
            </p>
            <h2
              id="neovia-changes-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              Six domains that{" "}
              <em className="text-[#8A7030]">transform structurally.</em>
            </h2>
            <p className="nti-reveal mt-6 max-w-[640px] text-[16px] font-light leading-[1.9] text-[#4A4540]">
              When the structural permission to initiate force is removed, every
              institution built on that permission must be rebuilt from first
              principles. The results are not gradual improvements. They are
              phase changes.
            </p>

            <div className="mt-16 grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] sm:grid-cols-2 lg:grid-cols-3">
              {WHAT_CHANGES.map((card) => (
                <div
                  key={card.title}
                  className="nti-reveal bg-[#F4F1EC] px-[36px] py-[44px] transition-colors duration-200 hover:bg-[#FDFCFA]"
                >
                  <span
                    className="font-serif text-[32px] font-light leading-none text-[#B8973A]"
                    aria-hidden="true"
                  >
                    {card.icon}
                  </span>
                  <h3 className="mt-5 font-serif text-[22px] font-normal leading-[1.25] text-[#0E0E0E]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] font-light leading-[1.85] text-[#4A4540]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: The Deeper Vision ─────────────────────────────────── */}
        <section
          aria-labelledby="neovia-vision-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Deeper Vision
            </p>
            <h2
              id="neovia-vision-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              Neovia is not the destination.{" "}
              <em className="text-[#8A7030]">It is the launch point.</em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The practical case for Neovia — economic acceleration, scientific
              freedom, psychological health, the end of politically manufactured
              poverty — is strong enough on its own. But the deeper case is
              about what becomes possible when consciousness is no longer
              suppressed at the structural level.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Every human mind alive today has been shaped by hierarchy. Not in
              the trivial sense of having attended schools or worked in
              organizations. In the deeper sense that the cognitive patterns
              hierarchy installs — deference to external authority, tolerance of
              contradiction, compartmentalized thinking, suppressed
              self-direction — are so pervasive that most people cannot see them
              at all. They feel like reality. They feel like human nature.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              They are not human nature. They are{" "}
              <strong>
                the cognitive legacy of 2,400 years of civilizational hierarchy.
              </strong>{" "}
              Remove the structural source and the distortions begin to clear.
              What emerges is not a better version of the hierarchically
              conditioned mind. It is a different kind of mind — one that
              operates from internal authority rather than external permission,
              integrates across domains rather than thinking in silos, and
              defaults to creation rather than compliance.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Transcendent Pressures
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Mark Hamilton uses the phrase &ldquo;transcendent
              pressures&rdquo; to describe the forces that accumulate when
              consciousness is freed from suppression. They are not metaphorical.
              When integrated thinking replaces compartmentalized thinking across
              a civilization, the rate of scientific discovery accelerates. When
              value creation replaces value extraction as the dominant economic
              mode, compound growth operates without the friction of coercive
              drag. When psychological health replaces anxiety-driven compliance,
              human relationships become generative rather than transactional.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              These pressures compound. A civilization of integrated thinkers
              who are psychologically whole and economically free does not
              produce the same rate of progress as the civilizations we have
              built so far. It produces{" "}
              <strong>orders of magnitude more.</strong> This is what Hamilton
              means by the transcendent pressure outward and forward. It is not
              utopia. It is physics. Remove the suppressor and the suppressed
              energy expands.
            </p>

            {/* Pull quote */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[22px] italic leading-[1.5] text-[#4A4540]">
                The gods of every civilization have been projections of what
                human beings could become if the suppression ended. Neovia is
                the project of making those projections real.
              </p>
            </blockquote>

            <h3 className="mt-8 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              The Outward Arc
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The logical endpoint of a civilization operating under transcendent
              pressures is not a slightly better version of the 21st century. It
              is species expansion beyond Earth. The technical and economic
              prerequisites for interplanetary civilization are not the hard
              problem. The hard problem is building the kind of civilization that
              can actually get there without destroying itself first.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Every previous attempt at space expansion has been organized
              through hierarchical state structures. Those structures do not
              produce the cognitive architecture, the economic dynamism, or the
              cooperative capacity that permanent interplanetary civilization
              requires. Neovia does. This is not a distant aspiration. It is the
              direct logical consequence of what Neovia is designed to produce.
            </p>
          </div>
        </section>

        {/* ── Section 6: The Extinction Argument ──────────────────────────── */}
        <section
          aria-labelledby="neovia-extinction-heading"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
              {/* Left */}
              <div>
                <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                  The Stakes
                </p>
                <h2
                  id="neovia-extinction-heading"
                  className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#D4B060]"
                >
                  This is not about making civilization better.{" "}
                  <em>It is about whether it survives.</em>
                </h2>

                <p className="mt-8 text-[16px] font-light leading-[1.9] text-[rgba(253,252,250,0.6)]">
                  The argument for Neovia is not primarily an argument from
                  flourishing. It is an argument from necessity.{" "}
                  <strong className="text-[#FDFCFA]">
                    The combination of hierarchical civilization and weapons of
                    mass destruction is not stable over long time horizons.
                  </strong>{" "}
                  The question is not whether the current trajectory ends badly.
                  The question is whether there is time to build a different
                  trajectory.
                </p>

                <p className="mt-5 text-[16px] font-light leading-[1.9] text-[rgba(253,252,250,0.6)]">
                  Hamilton has been making this argument since the 1970s. The
                  case has not weakened. The proliferation of nuclear, biological,
                  and autonomous weapons, combined with the accelerating
                  instability of hierarchical political structures, means the
                  window for building a structural alternative is real and
                  finite.
                </p>

                <p className="mt-5 text-[16px] font-light leading-[1.9] text-[rgba(253,252,250,0.6)]">
                  <strong className="text-[#FDFCFA]">
                    Neovia is the response.
                  </strong>{" "}
                  Not the only possible response — but the only response that
                  addresses the structural root cause. Every other approach
                  treats the symptoms. Neovia removes the condition that makes
                  the symptoms inevitable.
                </p>
              </div>

              {/* Right: Chain of steps */}
              <div className="flex flex-col gap-0">
                {EXTINCTION_CHAIN.map((step, i) => (
                  <div
                    key={step.label}
                    className={`nti-reveal relative pb-10 pl-8 last:pb-0 border-l-[2px] ${step.isRed ? "border-[#C75050]" : "border-[rgba(184,151,58,0.3)]"}`}
                  >
                    {/* Gold dot */}
                    <div
                      className="absolute -left-[41px] top-[6px] h-[10px] w-[10px] rounded-full"
                      style={{
                        backgroundColor: step.isRed ? "#C75050" : "#B8973A",
                        outline: step.isRed
                          ? "2px solid rgba(199,80,80,0.3)"
                          : "none",
                        outlineOffset: "2px",
                      }}
                      aria-hidden="true"
                    />
                    {step.isRed ? (
                      <>
                        <p
                          className="text-[10px] font-medium uppercase tracking-[0.22em]"
                          style={{ color: "#E07070" }}
                        >
                          {step.label}
                        </p>
                        <p
                          className="mt-2 text-[15px] font-light leading-[1.85]"
                          style={{ color: "rgba(253,252,250,0.6)" }}
                        >
                          {step.text}
                        </p>
                      </>
                    ) : (
                      <>
                        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                          {step.label}
                        </p>
                        <p className="mt-2 text-[15px] font-light leading-[1.85] text-[rgba(253,252,250,0.6)]">
                          {step.text}
                        </p>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 7: The Counterfactual ────────────────────────────────── */}
        <section
          aria-labelledby="neovia-counterfactual-heading"
          className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Civilization That Almost Was
            </p>
            <h2
              id="neovia-counterfactual-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              History is full of{" "}
              <em className="text-[#8A7030]">near misses.</em>
            </h2>
            <p className="nti-reveal mt-6 max-w-[680px] text-[16px] font-light leading-[1.9] text-[#4A4540]">
              At least five times in recorded history, a breakthrough toward
              genuinely free civilization was within reach. Each time, hierarchy
              reasserted itself. The cost, measured in centuries of suppressed
              human potential, is incalculable.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] md:grid-cols-2 lg:grid-cols-5">
              {COUNTERFACTUAL_ERAS.map((era) => (
                <div
                  key={era.date}
                  className="nti-reveal bg-[#F4F1EC] transition-colors duration-200 hover:bg-[#FDFCFA]"
                  style={{ padding: "32px 24px" }}
                >
                  <p
                    className="font-serif font-light text-[#B8973A]"
                    style={{ fontSize: "20px" }}
                  >
                    {era.date}
                  </p>
                  <h3 className="mt-3 font-serif text-[17px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {era.title}
                  </h3>
                  <p className="mt-3 text-[13px] font-light leading-[1.85] text-[#4A4540]">
                    {era.description}
                  </p>
                  <p className="mt-5 inline-block text-[10px] font-medium uppercase tracking-[0.18em] text-[#B8973A]">
                    {era.saved}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 8: Getting Involved ──────────────────────────────────── */}
        <section
          id="involved"
          aria-labelledby="neovia-involved-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px] text-center">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              Build With Us
            </p>
            <h2
              id="neovia-involved-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              Neovia needs people who understand{" "}
              <em className="text-[#8A7030]">what is being built.</em>
            </h2>
            <p className="nti-reveal mx-auto mt-6 max-w-[600px] text-[16px] font-light leading-[1.9] text-[#4A4540]">
              This is a civilizational project, not a startup. The people who
              will build it are those who grasp the stakes and have the
              expertise to contribute to the specific architectural challenges
              Neovia requires.
            </p>

            <div className="mt-14 grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] sm:grid-cols-2 lg:grid-cols-4">
              {INVOLVEMENT_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="nti-reveal group block bg-[#FDFCFA] text-center transition-colors duration-200 hover:bg-[#F4F1EC]"
                  style={{ padding: "40px 28px" }}
                >
                  <span
                    className="font-serif font-light leading-none text-[#B8973A]"
                    style={{ fontSize: "32px" }}
                    aria-hidden="true"
                  >
                    {card.numeral}
                  </span>
                  <h3 className="mt-4 font-serif text-[20px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[14px] font-light leading-[1.85] text-[#4A4540]">
                    {card.description}
                  </p>
                  <p className="mt-6 flex items-center justify-center gap-2 text-[12px] font-medium uppercase tracking-[0.08em] text-[#B8973A] transition-[gap] duration-200 group-hover:gap-3">
                    Learn More
                    <span aria-hidden="true">&rarr;</span>
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <Link
                href="/get-involved"
                className="inline-flex min-h-[44px] items-center justify-center bg-[#0E0E0E] px-10 text-[13px] font-medium uppercase tracking-[0.12em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A]"
              >
                Contact the Institute
              </Link>
            </div>
          </div>
        </section>

        {/* ── Section 9: Closing ───────────────────────────────────────────── */}
        <section
          aria-label="Closing statement"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[700px] text-center">
            <blockquote>
              <p className="nti-reveal font-serif text-[clamp(22px,2.5vw,36px)] font-light leading-[1.45] text-[#FDFCFA]">
                The gods never meant to rule us. They were{" "}
                <em className="text-[#D4B060]">placeholders.</em> Waiting for
                us to grow up. The fire is{" "}
                <em className="text-[#D4B060]">yours.</em>
              </p>
            </blockquote>

            <p className="mt-10 text-[16px] font-light leading-[1.9] text-[rgba(253,252,250,0.55)]">
              Every mythology, every religion, every philosophical system that
              ever pointed at something greater than the human being as
              currently constituted was pointing at the same thing: what the
              human mind becomes when it is no longer suppressed. That is what
              Neovia is for.
            </p>

            <div className="mt-12">
              <Link
                href="/unified-field"
                className="inline-flex min-h-[44px] items-center justify-center border border-[rgba(255,255,255,0.2)] px-10 text-[13px] font-medium uppercase tracking-[0.12em] text-[rgba(253,252,250,0.7)] transition-colors duration-200 hover:border-[#D4B060] hover:text-[#D4B060]"
              >
                Read the Unified Field
              </Link>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
