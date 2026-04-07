import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";

export const metadata: Metadata = {
  title: "Neothink | The Mind Unleashed",
  description:
    "Neothink is the cognitive architecture that hierarchy suppressed for 2,400 years. The operating system of the uncovered mind, created by Mark Hamilton.",
  alternates: { canonical: "/neothink" },
  openGraph: {
    title: "Neothink | The Mind Unleashed",
    description:
      "Neothink is the cognitive architecture that hierarchy suppressed for 2,400 years. The operating system of the uncovered mind, created by Mark Hamilton.",
    url: "https://neothink.com/neothink",
    type: "article",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  {
    numeral: "I",
    title: "Integrated Thinking",
    description:
      "The capacity to hold physics, economics, biology, psychology, ethics, and purpose inside a single causal picture of reality. The mind stops thinking in silos and begins operating as a unified whole.",
  },
  {
    numeral: "II",
    title: "The Gift of Sight",
    description:
      "The ability to see reality directly, through illusion, past appearances, down to what is. To observe without the distorting lens of hierarchy, authority, or inherited belief. Once given, it cannot be taken back.",
  },
  {
    numeral: "III",
    title: "Contradiction Detection",
    description:
      "The automatic recognition of internal inconsistency in any system of thought. Contradictions that others accept become visible as structural errors. The uncovered mind cannot unknow what it sees.",
  },
  {
    numeral: "IV",
    title: "Concept Building",
    description:
      "Percepts become concepts. Concepts snap together into larger integrations, becoming puzzle pictures that reveal what others cannot see. Knowledge becomes architecture, not just information.",
  },
  {
    numeral: "V",
    title: "Causal Prediction",
    description:
      "When cause and effect are understood at sufficient depth, the future becomes visible. Not as prophecy. As structure. The Neothink mind predicts where systems are heading long before others perceive the motion.",
  },
  {
    numeral: "VI",
    title: "Value Creation",
    description:
      "The freed mind defaults to creation over consumption. Building new value rather than capturing existing value. Contributing to human life rather than redistributing it. This is the economic signature of the Neothink mentality.",
  },
] as const;

const NEW_HUMAN_TRAITS = [
  {
    title: "Internal Authority",
    description:
      "The hierarchical need for an external voice of authority is removed. Decisions arise from observation, logic, and integration rather than approval or permission.",
  },
  {
    title: "Integrated Consciousness",
    description:
      "The bicameral split between thinking and doing collapses. The Neothink mind is unified, self-directed, and self-generating. The psychological division that has plagued civilization for 2,400 years closes.",
  },
  {
    title: "Creative Default",
    description:
      "Where the old mind defaults to maintenance and compliance, the Neothink mind defaults to creation. This is not personality. It is cognitive architecture.",
  },
  {
    title: "Benevolent Power",
    description:
      "Power exercised through value creation rather than force extraction. The Neothink mentality is incompatible with parasitism, coercion, or any form of initiated aggression.",
  },
  {
    title: "Expanding Trajectory",
    description:
      "The Neothink mind does not plateau. Each integration generates the capacity for more integration. The trajectory is permanently ascending, not cyclically oscillating.",
  },
] as const;

const MORTAL_ITEMS = [
  "Seeks approval from external authority",
  "Accepts contradiction as normal",
  "Thinks in isolated domains",
  "Operates in cycles of effort and collapse",
  "Confuses motion with progress",
  "Derives identity from group, ideology, or role",
];

const IMMORTAL_ITEMS = [
  "Generates authority from internal integration",
  "Detects contradiction as structural error",
  "Integrates across all domains simultaneously",
  "Operates on a permanently ascending trajectory",
  "Identifies cause and effect with precision",
  "Derives identity from one's own created values",
];

const TIMELINE = [
  {
    date: "384 BC",
    title: "Aristotle Completes the Turn",
    description:
      "For one moment in history, a human mind achieved fully integrated consciousness. Aristotle's method of direct observation and logical integration was the first complete expression of what would later be called the Neothink mentality.",
  },
  {
    date: "356 BC",
    title: "The Works Are Suppressed",
    description:
      "The Aristotelian corpus is scattered, suppressed, and lost. Hierarchy reasserts itself. External authority becomes the governing cognitive structure for the next two millennia.",
  },
  {
    date: "400 AD",
    title: "The Bicameral Collapse Deepens",
    description:
      "The psychological split between the conscious and directive mind, the division Julian Jaynes would later theorize, becomes structurally embedded in Western civilization through organized religion and imperial authority.",
  },
  {
    date: "1225 AD",
    title: "Aquinas Glimpses the Structure",
    description:
      "Thomas Aquinas partially recovers Aristotle, reintroducing integrated thinking into scholastic philosophy. The glimpse is real. The institutional context suppresses it again within a generation.",
  },
  {
    date: "1976",
    title: "Mark Hamilton Begins the Work",
    description:
      "After decades of private research into consciousness, hierarchy, and civilizational structure, Mark Hamilton begins developing the framework that will become the Unified Field. The Neothink cognitive architecture is articulated for the first time.",
  },
  {
    date: "Now",
    title: "The Architecture Is Available",
    description:
      "For the first time in history, the cognitive operating system of fully integrated consciousness is documented, teachable, and available. The 2,400-year detour ends for anyone willing to begin.",
  },
] as const;

const CONNECTION_LINKS = [
  {
    href: "/the-way",
    title: "The Way",
    description:
      "The personal path for removing the coverings that prevent the Neothink mentality from operating. Where the framework is lived from the inside.",
    arrow: "Begin The Way",
  },
  {
    href: "/unified-field",
    title: "The Unified Field",
    description:
      "The civilizational framework that identifies hierarchy as the structural suppressor of integrated consciousness across all of recorded history.",
    arrow: "Explore the Framework",
  },
  {
    href: "/neovia",
    title: "Neovia",
    description:
      "The physical expression of the Neothink mentality at civilizational scale. A jurisdiction built for fully integrated human consciousness to operate without constraint.",
    arrow: "See the Project",
  },
  {
    href: "/unleashed",
    title: "Unleashed",
    description:
      "The complete synthesis of fifty years of research on consciousness, hierarchy, and the architecture of human liberation. The primary text.",
    arrow: "Read the Book",
  },
] as const;

// ─── Page ────────────────────────────────────────────────────────────────────

export default function NeothinkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
      {/* ── Section 1: Hero ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="neothink-hero-heading"
        className="relative border-b border-[#E8E3D8] px-6 pb-[120px] pt-[160px] text-center md:px-12 max-md:pb-20"
      >
        <div className="mx-auto max-w-[760px]">
          <p
            className="nti-reveal mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]"
            style={{ animationDelay: "0.2s" }}
          >
            The Operating System
          </p>
          <h1
            id="neothink-hero-heading"
            className="nti-reveal font-serif text-[clamp(44px,5.5vw,80px)] font-light leading-[1.08] tracking-[-0.01em] text-[#0E0E0E]"
            style={{ animationDelay: "0.4s" }}
          >
            Neothink: the mind{" "}
            <em className="text-[#8A7030]">unleashed.</em>
          </h1>
          <p
            className="nti-reveal mt-8 text-[16px] font-light leading-[1.85] text-[#4A4540]"
            style={{ animationDelay: "0.6s" }}
          >
            Neothink is what consciousness does when it is no longer caged by
            hierarchy, force, and external authority. It is not a philosophy to
            believe in. It is a cognitive technology to operate from.
          </p>
          <p
            className="nti-reveal mt-5 text-[13px] font-light tracking-[0.04em] text-[#7A7570]"
            style={{ animationDelay: "0.8s" }}
          >
            Developed by{" "}
            <span className="text-[#B8973A]">Mark Hamilton</span> over five
            decades of research
          </p>
        </div>
      </section>

      {/* ── Section 2: Opening ──────────────────────────────────────────── */}
      <section
        aria-label="Opening statement"
        className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[740px] text-center">
          <blockquote>
            <p className="font-serif text-[clamp(26px,3vw,42px)] font-light leading-[1.35] text-[#FDFCFA]">
              &ldquo;The human mind was never designed to follow. It was designed
              to{" "}
              <em className="text-[#D4B060]">integrate.</em> When the cage comes
              off, something extraordinary happens. The mind does not drift. It{" "}
              <em className="text-[#D4B060]">explodes.</em>&rdquo;
            </p>
          </blockquote>
        </div>
      </section>

      {/* ── Section 3: The Argument ─────────────────────────────────────── */}
      <section
        aria-labelledby="argument-heading"
        className="bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[760px]">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
            What Neothink Is
          </p>
          <h2
            id="argument-heading"
            className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
          >
            The cognitive architecture that hierarchy{" "}
            <em className="text-[#8A7030]">suppressed.</em>
          </h2>

          <p className="mt-8 text-[16px] font-light leading-[1.85] text-[#4A4540]">
            For 2,400 years, the dominant cognitive structure of civilization has
            been bicameral: a mind divided against itself, one part directing and
            one part following, waiting for an external voice of authority to
            tell it what to do. Philosophy, religion, and political ideology all
            emerged from this division. They are its products, not its solutions.
          </p>
          <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
            Neothink is the cognitive architecture that replaces this division
            with integration. Not as a theory to believe in but as an operating
            state to inhabit. It is what the mind does when the external
            authority structure is removed and the internal integrating function
            is restored.
          </p>
          <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
            Aristotle glimpsed it once, in the fourth century BC, and built a
            philosophy of direct observation and logical integration that pointed
            straight at it. Then his works were suppressed. Hierarchy closed the
            door. The cognitive revolution he nearly completed was deferred for
            2,400 years.
          </p>

          {/* Pull quote */}
          <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
            <p className="font-serif text-[22px] italic leading-[1.5] text-[#4A4540]">
              Neothink is not thinking differently. It is operating from a
              different cognitive architecture entirely. The difference between
              a mind following a map and a mind that can read the terrain.
            </p>
          </blockquote>

          <h3 className="font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
            How It Works
          </h3>
          <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
            The Neothink mentality operates through integration rather than
            segmentation. Where the bicameral mind holds knowledge in isolated
            domains, the Neothink mind connects percepts into concepts, concepts
            into larger integrations, and integrations into causal pictures of
            whole systems. <strong>This is not new.</strong> It is the natural
            function of a mind that is not suppressed.
          </p>
          <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
            The primary tool is the{" "}
            <strong>puzzle picture</strong>: the capacity to hold every relevant
            fact in a single integrated mental structure, so that causes are
            visible, contradictions surface immediately, and the shape of the
            future becomes readable from the present. It is not genius. It is
            what all minds can do when they are no longer blocked.
          </p>
          <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
            The result is a qualitatively different kind of person. Not smarter
            in the conventional sense. More integrated, more self-directed, more
            capable of creating genuine value, and structurally incapable of
            sustaining the internal contradictions that hierarchy requires to
            maintain its authority.
          </p>
        </div>
      </section>

      {/* ── Section 4: Capabilities ─────────────────────────────────────── */}
      <section
        aria-labelledby="capabilities-heading"
        className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[1160px]">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
            The Capabilities
          </p>
          <h2
            id="capabilities-heading"
            className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
          >
            What the uncovered mind{" "}
            <em className="text-[#8A7030]">can do.</em>
          </h2>
          <p className="nti-reveal mt-6 max-w-[640px] text-[16px] font-light leading-[1.85] text-[#4A4540]">
            These are not skills to be learned or traits to be developed. They
            are the natural expressions of a cognitive architecture that is
            functioning without suppression. When the covering is removed, these
            capacities emerge.
          </p>

          <div className="mt-16 grid grid-cols-1 gap-px bg-[#E8E3D8] border border-[#E8E3D8] md:grid-cols-2">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.numeral}
                className="nti-reveal bg-[#F4F1EC] px-10 py-10 transition-colors duration-200 hover:bg-[#FDFCFA]"
              >
                <span className="block text-[13px] font-medium tracking-[0.12em] text-[#B8973A]">
                  {cap.numeral}
                </span>
                <h3 className="mt-3 font-serif text-[22px] font-normal leading-[1.3] text-[#0E0E0E]">
                  {cap.title}
                </h3>
                <p className="mt-3 text-[15px] font-light leading-[1.85] text-[#4A4540]">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5: The New Human ────────────────────────────────────── */}
      <section
        aria-labelledby="new-human-heading"
        className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[1160px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-[100px]">
            {/* Left */}
            <div className="nti-reveal">
              <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                The Result
              </p>
              <h2
                id="new-human-heading"
                className="font-serif text-[clamp(36px,3.5vw,54px)] font-light leading-[1.1] text-[#FDFCFA]"
              >
                The New{" "}
                <em className="text-[#D4B060]">Human.</em>
              </h2>
              <p className="mt-6 text-[16px] font-light leading-[1.85] text-[rgba(253,252,250,0.65)]">
                The Neothink mentality does not produce a better version of the
                old human. It produces a categorically different kind of person.
                The difference is not one of degree. It is one of operating
                system.
              </p>
              <p className="mt-5 text-[16px] font-light leading-[1.85] text-[rgba(253,252,250,0.65)]">
                Where the bicameral human operates from approval, the Neothink
                human operates from integration. Where the old mentality produces
                cycles, the new mentality produces trajectory. Where the old
                mind consumes, the new mind creates.
              </p>
              <p className="mt-5 text-[16px] font-light leading-[1.85] text-[rgba(253,252,250,0.65)]">
                This is not aspiration. It is the natural state of a mind that
                is no longer blocked. The cage was never part of the human
                design. Remove it, and what emerges has always been there,
                waiting.
              </p>
            </div>

            {/* Right: traits */}
            <div className="flex flex-col gap-px bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.06)]">
              {NEW_HUMAN_TRAITS.map((trait) => (
                <div
                  key={trait.title}
                  className="nti-reveal bg-[rgba(14,14,14,0.5)] px-9 py-8 transition-colors duration-200 hover:bg-[rgba(184,151,58,0.06)]"
                >
                  <h3 className="font-serif text-[20px] font-normal leading-[1.3] text-[#FDFCFA]">
                    {trait.title}
                  </h3>
                  <p className="mt-2 text-[14px] font-light leading-[1.75] text-[rgba(253,252,250,0.5)]">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: Mortal vs Immortal ───────────────────────────────── */}
      <section
        aria-labelledby="mentalities-heading"
        className="bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[760px]">
          <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
            Two Mentalities
          </p>
          <h2
            id="mentalities-heading"
            className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
          >
            The mortal mind and the{" "}
            <em className="text-[#8A7030]">immortal mind.</em>
          </h2>
          <p className="nti-reveal mt-6 text-[16px] font-light leading-[1.9] text-[#4A4540]">
            Every human being carries the potential for both mentalities. The
            mortal mentality is not stupidity or weakness. It is the cognitive
            structure that hierarchy installs and maintains by design. The
            immortal mentality is not superiority. It is the state of a mind
            that has been freed from the installation.
          </p>

          {/* Comparison grid */}
          <div className="mt-12 grid grid-cols-1 gap-px bg-[#E8E3D8] border border-[#E8E3D8] sm:grid-cols-2">
            {/* Left: mortal */}
            <div className="bg-[#F4F1EC] px-8 py-10">
              <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#7A7570]">
                Under Hierarchy
              </p>
              <h3 className="mb-6 font-serif text-[20px] font-normal text-[#0E0E0E]">
                The Mortal Mentality
              </h3>
              <ul className="space-y-4">
                {MORTAL_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] font-light leading-[1.7] text-[#4A4540]"
                  >
                    <span className="mt-[6px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#C8C0B0]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: immortal */}
            <div className="bg-[#FDFCFA] px-8 py-10">
              <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8973A]">
                Under the Prime Law
              </p>
              <h3 className="mb-6 font-serif text-[20px] font-normal text-[#0E0E0E]">
                The Immortal Mentality
              </h3>
              <ul className="space-y-4">
                {IMMORTAL_ITEMS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] font-light leading-[1.7] text-[#4A4540]"
                  >
                    <span className="mt-[6px] block h-[5px] w-[5px] shrink-0 rounded-full bg-[#B8973A]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-10 text-[16px] font-light leading-[1.9] text-[#4A4540]">
            The mortal mentality is not a permanent condition. It is an
            installation, and installations can be removed. The Way is the
            process by which the mortal structure is systematically cleared and
            the immortal mentality, which was always underneath it, is allowed
            to operate.
          </p>
          <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
            <strong>
              The transition from mortal to immortal mentality is the central
              personal work of the Neothink framework.
            </strong>{" "}
            It is not a matter of belief or willpower. It is a matter of
            removing what does not belong and allowing what has always been
            there to finally function.
          </p>
        </div>
      </section>

      {/* ── Section 7: Historical Context ───────────────────────────────── */}
      <section
        aria-labelledby="history-heading"
        className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[1160px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[380px_1fr] lg:gap-[100px]">
            {/* Left */}
            <div className="nti-reveal">
              <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                Historical Context
              </p>
              <h2
                id="history-heading"
                className="font-serif text-[clamp(32px,2.8vw,46px)] font-light leading-[1.15] text-[#0E0E0E]"
              >
                This has been{" "}
                <em className="text-[#8A7030]">glimpsed before.</em>
              </h2>
              <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                The Neothink mentality is not an invention. It is a recovery.
                The capacity for fully integrated consciousness has always been
                present in the human mind. What changes is whether the
                conditions exist for it to operate.
              </p>
              <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                Throughout history, isolated individuals and brief moments have
                touched the edge of what Neothink describes. Aristotle came
                closest. Each time, hierarchy moved to contain and suppress the
                glimpse before it could spread.
              </p>
              <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                What is different now is that the framework has been completed,
                documented, and made teachable. The suppression that worked for
                2,400 years requires a degree of information control that the
                current technological environment no longer permits.
              </p>
            </div>

            {/* Right: timeline */}
            <div className="flex flex-col gap-px bg-[#E8E3D8] border border-[#E8E3D8]">
              {TIMELINE.map((era) => (
                <div
                  key={era.date}
                  className="nti-reveal bg-[#F4F1EC] px-9 py-8 transition-colors duration-200 hover:bg-[#FDFCFA]"
                >
                  <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#B8973A]">
                    {era.date}
                  </p>
                  <h4 className="font-serif text-[19px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {era.title}
                  </h4>
                  <p className="mt-2 text-[14px] font-light leading-[1.75] text-[#4A4540]">
                    {era.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8: AI Integration ───────────────────────────────────── */}
      <section
        aria-labelledby="ai-heading"
        className="bg-[#0E0E0E] px-6 py-[120px] text-center md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[700px]">
          <p className="nti-reveal mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
            The Next Integration
          </p>
          <h2
            id="ai-heading"
            className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#FDFCFA]"
          >
            Neothink augmented by{" "}
            <em className="text-[#D4B060]">AI.</em>
          </h2>
          <p className="nti-reveal mt-8 text-[16px] font-light leading-[1.85] text-[rgba(253,252,250,0.65)]">
            Artificial intelligence is the most powerful tool ever placed in
            human hands. Whether it amplifies the mortal mentality or the
            immortal mentality depends entirely on the cognitive architecture
            of the person using it. In the hands of a bicameral mind, AI
            becomes a more efficient machine for compliance and dependency. In
            the hands of a Neothink mind, it becomes an integration engine of
            extraordinary power.
          </p>
          <p className="nti-reveal mt-5 text-[16px] font-light leading-[1.85] text-[rgba(253,252,250,0.65)]">
            The Institute is building the curriculum, tools, and community
            infrastructure for the Neothink-augmented human. The combination
            of fully integrated consciousness and the computational power of
            modern AI represents a qualitative leap in human capability that
            has no historical precedent.
          </p>
        </div>
      </section>

      {/* ── Section 9: Connection ───────────────────────────────────────── */}
      <section
        aria-labelledby="connection-heading"
        className="border-b border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[1160px]">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[380px_1fr] lg:gap-[100px]">
            {/* Left */}
            <div className="nti-reveal">
              <p className="mb-8 text-[11px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                How It All Connects
              </p>
              <h2
                id="connection-heading"
                className="font-serif text-[clamp(30px,2.8vw,44px)] font-light leading-[1.15] text-[#0E0E0E]"
              >
                Neothink is the mind. The rest is what the mind{" "}
                <em className="text-[#8A7030]">builds.</em>
              </h2>
              <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                The Unified Field identifies the civilizational problem. The
                Prime Law defines the structural solution. Neovia is the
                physical expression of that solution. The Way is how each
                individual removes the barriers to operating from the Neothink
                mentality.
              </p>
              <p className="mt-5 text-[16px] font-light leading-[1.85] text-[#4A4540]">
                Neothink is the cognitive operating system that connects all of
                it. Without it, the other elements are frameworks. With it,
                they become expressions of a living, integrated intelligence.
              </p>
            </div>

            {/* Right: link cards */}
            <div className="flex flex-col gap-px bg-[#E8E3D8] border border-[#E8E3D8]">
              {CONNECTION_LINKS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="nti-reveal group block bg-[#F4F1EC] px-9 py-8 transition-colors duration-200 hover:bg-[#FDFCFA] min-h-[44px]"
                >
                  <h4 className="font-serif text-[20px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {card.title}
                  </h4>
                  <p className="mt-2 text-[14px] font-light leading-[1.75] text-[#4A4540]">
                    {card.description}
                  </p>
                  <span className="mt-4 inline-block text-[11px] font-medium uppercase tracking-[0.14em] text-[#B8973A] transition-colors duration-200 group-hover:text-[#8A7030]">
                    {card.arrow} &rsaquo;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 10: CTA ─────────────────────────────────────────────── */}
      <section
        aria-labelledby="cta-heading"
        className="bg-[#FDFCFA] px-6 py-[120px] text-center md:px-12 max-md:py-20"
      >
        <div className="mx-auto max-w-[640px]">
          <h2
            id="cta-heading"
            className="nti-reveal font-serif text-[clamp(32px,3.5vw,52px)] font-light italic leading-[1.2] text-[#0E0E0E]"
          >
            The power of gods, wielded by humans.
          </h2>
          <p className="nti-reveal mt-6 text-[16px] font-light leading-[1.85] text-[#4A4540]">
            This is not metaphor. It is the literal description of what becomes
            possible when fully integrated human consciousness is paired with
            the technological capabilities now available. The only question is
            which cognitive architecture carries those capabilities into the
            future.
          </p>
          <div className="nti-reveal mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/the-way"
              className="inline-flex items-center min-h-[44px] bg-[#0E0E0E] border border-[#0E0E0E] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#B8973A] hover:border-[#B8973A]"
            >
              Begin The Way
            </Link>
            <Link
              href="/unleashed"
              className="inline-flex items-center min-h-[44px] border border-[#C8C0B0] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#0E0E0E]"
            >
              Read Unleashed
            </Link>
          </div>
        </div>
      </section>
      </main>
      <SiteFooter />
    </>
  );
}
