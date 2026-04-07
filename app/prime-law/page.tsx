import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Prime Law | The Constitutional Foundation for Civilization",
  description:
    "Three articles. No exceptions. The first constitutional framework built on the absolute prohibition of initiated force. A natural law, not an ideology.",
  alternates: { canonical: "/prime-law" },
  openGraph: {
    title: "The Prime Law | The Constitutional Foundation for Civilization",
    description:
      "Three articles. No exceptions. The first constitutional framework built on the absolute prohibition of initiated force. A natural law, not an ideology.",
    url: "https://neothink.com/prime-law",
    type: "article",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const ARTICLES = [
  {
    label: "Article 1",
    text: "No person, group of persons, or government shall initiate force, threat of force, or fraud against any individual's self, property, or contracts.",
  },
  {
    label: "Article 2",
    text: "Force is moral only when used to protect individuals from those who initiate its use.",
  },
  {
    label: "Article 3",
    text: "No exceptions shall exist for Articles 1 and 2.",
  },
] as const;

const PROOF_ITEMS = [
  {
    direction: "Force Recedes",
    isRise: false,
    title: "The American Founding",
    description:
      "Constitutional limits on government power produced the most rapid expansion of prosperity, innovation, and individual liberty in recorded history. The correlation between force reduction and civilizational advance is measurable and precise.",
    result: "Greatest wealth creation in history",
  },
  {
    direction: "Force Rises",
    isRise: true,
    title: "The Soviet Experiment",
    description:
      "Maximum state control — over economics, culture, science, and personal life — produced universal poverty, intellectual stagnation, and eventual structural collapse. The law operated exactly as predicted.",
    result: "Collapse in 74 years",
  },
  {
    direction: "Force Recedes",
    isRise: false,
    title: "The Renaissance",
    description:
      "As religious authority's grip on inquiry loosened, art, science, and commerce exploded simultaneously. The expansion was not caused by new resources or technology. It was caused by reduced suppression of consciousness.",
    result: "300 years of cultural explosion",
  },
  {
    direction: "Force Rises",
    isRise: true,
    title: "The Dark Ages",
    description:
      "Maximum religious and political force produced a thousand years of stagnation. Literacy fell. Innovation ceased. Life expectancy declined. The mechanism was structural, not incidental.",
    result: "1,000 years of civilizational contraction",
  },
  {
    direction: "Force Recedes",
    isRise: false,
    title: "Early Hong Kong",
    description:
      "With minimal government intervention and near-zero initiated force in commerce, a resource-poor island became one of the wealthiest places on earth within two generations. The Prime Law in partial practice.",
    result: "GDP per capita rose 87× in 50 years",
  },
  {
    direction: "Force Rises",
    isRise: true,
    title: "Venezuela, 1999–Present",
    description:
      "A wealthy, oil-rich nation subjected to progressive nationalization and state control. Each increase in government force produced a corresponding collapse in production, freedom, and human welfare.",
    result: "80% poverty rate within 20 years",
  },
] as const;

const COMPARISON_ROWS = [
  {
    label: "Authority",
    hierarchy: "Laws originate from the will of those who hold power. Citizens comply or face coercion.",
    primeLaw: "One law governs all: no initiated force. Authority is structural, not personal.",
  },
  {
    label: "Economics",
    hierarchy: "Wealth is extracted, redistributed, and allocated by political decision. Innovation requires permission.",
    primeLaw: "Voluntary exchange governs all economic activity. Wealth is created, not extracted.",
  },
  {
    label: "Innovation",
    hierarchy: "Regulated, licensed, and suppressed when it threatens existing power structures.",
    primeLaw: "Uninhibited. The only limit is the prohibition on initiating force against others.",
  },
  {
    label: "Education",
    hierarchy: "Controlled by the state or religious authority. Designed to produce compliance, not consciousness.",
    primeLaw: "Fully voluntary. Curriculum, method, and provider chosen by individuals and families.",
  },
  {
    label: "Peace",
    hierarchy: "Maintained by the threat of state violence. Requires continuous enforcement.",
    primeLaw: "Structural. The prohibition on initiated force removes the mechanism of conflict.",
  },
  {
    label: "Consciousness",
    hierarchy: "Suppressed by external authority. Directed toward compliance with inherited frameworks.",
    primeLaw: "Freed to operate at full power. No external authority directs individual cognition.",
  },
  {
    label: "Trajectory",
    hierarchy: "Cycles of rise and decline, each ending in the same structural outcome: a new hierarchy.",
    primeLaw: "Continuous advance. The suppressor of consciousness removed at the structural level.",
  },
] as const;

const CONNECTION_CARDS = [
  {
    href: "/unified-field",
    title: "The Unified Field",
    desc: "The structural diagnosis behind the Prime Law. Why force suppresses consciousness at civilizational scale.",
    arrow: "Read the Unified Field",
  },
  {
    href: "/neovia",
    title: "Neovia",
    desc: "The first civilization designed to operate under the Prime Law. Freedom at civilizational scale.",
    arrow: "Explore Neovia",
  },
  {
    href: "/neothink",
    title: "Neothink: Unleashed",
    desc: "The cognitive architecture freed when initiated force is removed. The mind the Prime Law makes possible.",
    arrow: "What Is Unleashed",
  },
  {
    href: "/the-way",
    title: "The Way",
    desc: "The personal path of removing force from your own mind. The Prime Law lived from the inside.",
    arrow: "Read The Way",
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
      name: "The Prime Law",
      item: "https://neothink.com/prime-law",
    },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "The Prime Law | The Constitutional Foundation for Civilization",
  description:
    "Three articles. No exceptions. The first constitutional framework built on the absolute prohibition of initiated force. A natural law, not an ideology.",
  url: "https://neothink.com/prime-law",
  datePublished: "2024-05-02",
  dateModified: new Date().toISOString().split("T")[0],
  inLanguage: "en-US",
  isPartOf: { "@id": "https://neothink.com/#website" },
  author: { "@id": "https://neothink.com/#founder" },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function PrimeLawPage() {
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

        {/* ── Section 1: Hero (dark) ────────────────────────────────────────── */}
        <section
          aria-labelledby="pl-hero-heading"
          className="relative overflow-hidden bg-[#0E0E0E] px-6 pb-[120px] pt-[180px] text-center md:px-12 max-md:py-20"
        >
          {/* Radial gradient overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(184,151,58,0.10) 0%, transparent 70%)",
            }}
          />
          <div className="relative mx-auto max-w-[700px]">
            <p
              className="nti-reveal mb-6 text-[11px] font-medium uppercase tracking-[0.22em] text-[#D4B060]"
              style={{ animationDelay: "0.2s" }}
            >
              The Constitutional Foundation
            </p>
            <h1
              id="pl-hero-heading"
              className="nti-reveal font-serif font-light leading-[1.05] tracking-[-0.01em] text-[#FDFCFA]"
              style={{
                fontSize: "clamp(42px, 5.5vw, 76px)",
                animationDelay: "0.4s",
              }}
            >
              The{" "}
              <em className="text-[#D4B060]">Prime Law.</em>
            </h1>
            {/* Gold rule */}
            <div
              className="nti-reveal mx-auto mt-8 mb-8 h-px bg-[#B8973A]"
              style={{ width: "48px", animationDelay: "0.6s" }}
              aria-hidden="true"
            />
            <p
              className="nti-reveal mx-auto max-w-[560px] text-[17px] font-light leading-[1.8] text-[rgba(253,252,250,0.7)]"
              style={{ animationDelay: "0.7s" }}
            >
              Three articles. No exceptions. The first constitutional framework
              built on the absolute prohibition of initiated force — derived from
              the nature of consciousness itself, not from the preferences of
              those in power.
            </p>
            <p
              className="nti-reveal mt-6 text-[13px] font-medium uppercase tracking-[0.1em] text-[rgba(253,252,250,0.4)]"
              style={{ animationDelay: "0.9s" }}
            >
              By{" "}
              <span className="text-[#D4B060]">Mark Hamilton</span>
              {" "}·{" "}Neothink Institute
            </p>
          </div>
        </section>

        {/* ── Section 2: The Law Itself (dark, continuation) ───────────────── */}
        <section
          aria-labelledby="pl-law-heading"
          className="bg-[#0E0E0E] px-6 pb-[120px] md:px-12 max-md:pb-20"
        >
          <div className="mx-auto max-w-[800px]">

            {/* Preamble */}
            <div className="mb-16 text-center">
              <p className="mb-8 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                Preamble
              </p>
              <p
                className="nti-reveal font-serif font-light italic leading-[1.6] text-[rgba(253,252,250,0.7)]"
                style={{ fontSize: "clamp(18px,2.2vw,22px)" }}
              >
                We the people of civilization recognize that the fundamental
                right of every individual is to live free from initiated force.
              </p>
              <p
                className="nti-reveal mt-5 font-serif font-light italic leading-[1.6] text-[rgba(253,252,250,0.7)]"
                style={{ fontSize: "clamp(18px,2.2vw,22px)", animationDelay: "0.1s" }}
              >
                We recognize that this right is not granted by governments,
                religions, or any other institution. It is a natural condition
                of conscious existence.
              </p>
              <p
                className="nti-reveal mt-5 font-serif font-light italic leading-[1.6] text-[rgba(253,252,250,0.7)]"
                style={{ fontSize: "clamp(18px,2.2vw,22px)", animationDelay: "0.2s" }}
              >
                We establish the following as the supreme law of civilization,
                binding on all individuals, groups, and institutions without
                exception.
              </p>
            </div>

            {/* Articles */}
            <div
              id="pl-law-heading"
              className="sr-only"
            >
              The Three Articles of the Prime Law
            </div>
            <div className="grid grid-cols-1 gap-px border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)]">
              {ARTICLES.map((article) => (
                <div
                  key={article.label}
                  className="nti-reveal bg-[#0E0E0E] px-[48px] py-[40px] transition-colors duration-300 hover:bg-[rgba(184,151,58,0.04)] max-md:px-8"
                >
                  <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                    {article.label}
                  </p>
                  <p
                    className="font-serif font-light leading-[1.5] text-[#FDFCFA]"
                    style={{ fontSize: "clamp(20px,2.5vw,28px)" }}
                  >
                    {article.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Note */}
            <p className="mx-auto mt-10 max-w-[560px] text-center text-[14px] italic leading-[1.7] text-[rgba(253,252,250,0.4)]">
              The Prime Law does not prohibit defensive force. It prohibits only
              initiated force — coercion applied against individuals who have not
              themselves initiated it.
            </p>
          </div>
        </section>

        {/* ── Section 3: Why A Law (white) ─────────────────────────────────── */}
        <section
          aria-labelledby="pl-argument-heading"
          className="bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Argument
            </p>
            <h2
              id="pl-argument-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              Not an ideology.{" "}
              <em className="text-[#8A7030]">A natural law.</em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Every political ideology in history has claimed that its use of
              force is justified by some higher purpose — the will of the people,
              the glory of God, the good of the collective, the march of history.
              The Prime Law makes no such claim. It does not argue for a
              preferred outcome. It identifies a single structural fact:{" "}
              <strong>
                initiated force destroys the conditions required for conscious
                human life to flourish.
              </strong>
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              This is not a moral preference. It is a structural observation of
              the same order as a physical law. When initiated force is present
              in a system — at any scale, applied by any actor — consciousness
              contracts, creativity diminishes, production falls, and the
              conditions for human advancement deteriorate. This pattern holds
              across every civilizational context ever examined. It has no
              exceptions. It is, in that sense, a{" "}
              <strong>law</strong> rather than an argument.
            </p>

            {/* Pull quote */}
            <blockquote className="my-12 border-l-[2px] border-[#B8973A] pl-8">
              <p className="font-serif text-[24px] italic leading-[1.5] text-[#7A7570]">
                Every constitution ever written has attempted to constrain the
                use of force. The Prime Law is the first to prohibit it at the
                source — not regulate it, not redistribute it, but abolish its
                initiation entirely.
              </p>
            </blockquote>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              What previous constitutions missed
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Every constitutional tradition in history — from Athens to
              Philadelphia — has attempted to solve the problem of arbitrary
              power by distributing it: creating checks, balances, rights,
              procedures, and institutions designed to prevent any single actor
              from monopolizing force. This approach has produced genuine
              advances. It has never produced a permanent solution.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The reason is structural. Distributing force does not eliminate
              initiated force. It changes who wields it. The constitutional
              framework that prohibits slavery still permits conscription. The
              one that prohibits conscription still permits taxation. The one
              that limits taxation still permits regulation. At no point in the
              Western constitutional tradition has any framework asked the prior
              question:{" "}
              <strong>
                what if no actor — government or otherwise — has the right to
                initiate force at all?
              </strong>
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Why force constrains consciousness
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The connection between initiated force and the suppression of
              consciousness is not metaphorical. When an individual must direct
              cognitive resources toward compliance with external authority —
              navigating regulations, appeasing institutions, calculating risks
              of non-conformity — those resources are unavailable for creative,
              productive, and integrative thought. Force does not merely restrict
              behavior. It redirects cognition.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              At civilizational scale, this redirection accumulates into the
              pattern the{" "}
              <strong>Unified Field</strong> identifies: the systematic
              suppression of human consciousness across all domains of life, for
              the duration of the period in which force remains present as an
              organizing principle of society. The Prime Law addresses this not
              by reforming the institution that wields force, but by prohibiting
              the initiation of force itself — at every level, with no
              exceptions.
            </p>
          </div>
        </section>

        {/* ── Section 4: The Proof (stone) ─────────────────────────────────── */}
        <section
          aria-labelledby="pl-proof-heading"
          className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Historical Proof
            </p>
            <h2
              id="pl-proof-heading"
              className="nti-reveal text-center font-serif text-[clamp(30px,3vw,48px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              The law{" "}
              <em className="text-[#8A7030]">in action.</em>
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8] sm:grid-cols-2">
              {PROOF_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="nti-reveal bg-[#F4F1EC] px-[40px] py-[44px] transition-colors duration-200 hover:bg-[#FDFCFA] max-md:px-8"
                >
                  <p
                    className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em]"
                    style={{ color: item.isRise ? "#A06040" : "#B8973A" }}
                  >
                    {item.direction}
                  </p>
                  <h3 className="font-serif text-[22px] font-normal leading-[1.3] text-[#0E0E0E]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[15px] font-light leading-[1.8] text-[#4A4540]">
                    {item.description}
                  </p>
                  <p
                    className={
                      item.isRise
                        ? "mt-6 inline-block border-b border-[rgba(160,96,64,0.3)] pb-[2px] text-[11px] font-medium uppercase tracking-[0.14em] text-[#A06040]"
                        : "mt-6 inline-block border-b border-[rgba(184,151,58,0.3)] pb-[2px] text-[11px] font-medium uppercase tracking-[0.14em] text-[#B8973A]"
                    }
                  >
                    {item.result}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 5: What It Changes (white) ───────────────────────────── */}
        <section
          aria-labelledby="pl-implications-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[760px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              The Implications
            </p>
            <h2
              id="pl-implications-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              What the Prime Law{" "}
              <em className="text-[#8A7030]">changes.</em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              The Prime Law is not a reform of existing institutions. It is a
              replacement of the structural foundation on which those institutions
              rest. When initiated force is prohibited at the constitutional
              level — absolutely, with no exceptions — every major domain of
              human civilization is reorganized from first principles.
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Law
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Under the Prime Law, the only legitimate function of any legal
              system is the protection of individuals from initiated force, fraud,
              and coercion. Laws that restrict voluntary behavior between
              consenting individuals have no legal standing. The proliferation of
              regulatory, licensing, and compliance frameworks — the primary
              mechanism through which initiated force currently enters economic
              and social life — is constitutionally prohibited.{" "}
              <strong>Law becomes simple, stable, and just.</strong>
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Economics
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Economic activity under the Prime Law is entirely voluntary.
              Taxation — the taking of property without the owner&rsquo;s
              consent — is a form of initiated force and is prohibited. Trade,
              production, and exchange are governed by voluntary agreement alone.
              The result is not a policy preference. It is the logical extension
              of the constitutional prohibition on initiated force into the
              economic domain.{" "}
              <strong>
                Wealth is created, not extracted. Production replaces
                redistribution.
              </strong>
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Education
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Compulsory education — the forced attendance of children in
              state-designed institutions for the purpose of imparting
              state-approved content — is prohibited under the Prime Law as a
              form of initiated force against both children and parents. Education
              becomes fully voluntary. Curriculum, method, institution, and
              duration are chosen by individuals and families.{" "}
              <strong>
                Learning organized around the development of consciousness
                replaces schooling organized around the production of compliance.
              </strong>
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Peace
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              War — the organized initiation of force by one political entity
              against another — is prohibited under the Prime Law as the most
              extreme form of initiated force in existence. Peace under existing
              political systems is maintained by the threat of state violence
              directed inward and outward. Peace under the Prime Law is
              structural: the mechanism of conflict — initiated force — is
              removed at the constitutional level.{" "}
              <strong>
                The absence of war is not enforced. It is the natural condition
                of a system in which no actor has the right to initiate force.
              </strong>
            </p>

            <h3 className="mt-14 font-serif text-[28px] font-normal leading-[1.25] text-[#0E0E0E]">
              Consciousness
            </h3>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              This is the deepest implication. When initiated force is removed
              from the structure of civilization, the cognitive resources that
              were directed toward compliance, navigation, and risk-calculation
              become available for creative and integrative thought. Consciousness
              — which the Unified Field identifies as the primary driver of
              civilizational advance — is freed to operate at full power for the
              first time in 3,200 years. The result is not merely material
              prosperity. It is the emergence of a qualitatively different form
              of human civilization.{" "}
              <strong>This is what the Prime Law is for.</strong>
            </p>
          </div>
        </section>

        {/* ── Section 6: Comparison (dark) ─────────────────────────────────── */}
        <section
          aria-labelledby="pl-comparison-heading"
          className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[1160px]">
            <p className="mb-5 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
              Two Civilizational Architectures
            </p>
            <h2
              id="pl-comparison-heading"
              className="nti-reveal text-center font-serif text-[clamp(28px,3vw,46px)] font-light leading-[1.15] text-[#FDFCFA]"
            >
              The hierarchy of force versus the{" "}
              <em className="text-[#D4B060]">Prime Law.</em>
            </h2>

            <div className="mt-16 grid grid-cols-1 gap-px border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.08)] sm:grid-cols-2">

              {/* Left: Under Hierarchy */}
              <div className="bg-[rgba(14,14,14,0.7)]">
                <div className="px-[48px] py-[40px] max-md:px-8">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#7A7570]">
                    Under Hierarchy
                  </p>
                  <h3 className="font-serif text-[24px] font-light leading-[1.2] text-[#FDFCFA]">
                    The Architecture of Force
                  </h3>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.06)]">
                  {COMPARISON_ROWS.map((row) => (
                    <div
                      key={`hier-${row.label}`}
                      className="border-b border-[rgba(255,255,255,0.06)] px-[48px] py-[28px] last:border-b-0 max-md:px-8"
                    >
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#7A7570]">
                        {row.label}
                      </p>
                      <p className="text-[14px] leading-[1.75] text-[rgba(253,252,250,0.5)]">
                        {row.hierarchy}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Under the Prime Law */}
              <div className="bg-[rgba(14,14,14,0.4)]">
                <div className="px-[48px] py-[40px] max-md:px-8">
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
                    Under the Prime Law
                  </p>
                  <h3 className="font-serif text-[24px] font-light leading-[1.2] text-[#FDFCFA]">
                    The Architecture of Freedom
                  </h3>
                </div>
                <div className="border-t border-[rgba(255,255,255,0.06)]">
                  {COMPARISON_ROWS.map((row) => (
                    <div
                      key={`pl-${row.label}`}
                      className="border-b border-[rgba(255,255,255,0.06)] px-[48px] py-[28px] last:border-b-0 max-md:px-8"
                    >
                      <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.18em] text-[#D4B060]">
                        {row.label}
                      </p>
                      <p className="text-[14px] leading-[1.75] text-[rgba(253,252,250,0.7)]">
                        {row.primeLaw}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── Section 7: No Exceptions (stone) ─────────────────────────────── */}
        <section
          aria-labelledby="pl-noexceptions-heading"
          className="bg-[#F4F1EC] px-6 py-[120px] text-center md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[700px]">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
              Article 3
            </p>
            <h2
              id="pl-noexceptions-heading"
              className="nti-reveal font-serif text-[clamp(32px,3vw,50px)] font-light leading-[1.1] text-[#0E0E0E]"
            >
              No{" "}
              <em className="text-[#8A7030]">exceptions.</em>
            </h2>

            <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Every previous attempt to limit the use of force has failed for
              the same reason: it allowed exceptions. The exceptions were always
              reasonable. They were always temporary. They were always necessary.
              And they always expanded until the original prohibition was
              unrecognizable.{" "}
              <strong>
                The history of constitutional government is the history of
                exceptions consuming their principles.
              </strong>
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              Article 3 exists because the logic of the Prime Law requires it.
              If initiated force is structurally harmful — if it is the mechanism
              that suppresses consciousness, destroys wealth, and produces
              civilizational decline — then no exception to its prohibition is
              justified on structural grounds. The argument that allows one
              exception allows all of them. The constitutional tradition
              demonstrates this in practice, across every jurisdiction, without
              a single counterexample.
            </p>

            <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
              This is not rigidity. It is precision.{" "}
              <strong>
                A law that prohibits initiated force but allows exceptions does
                not prohibit initiated force.
              </strong>{" "}
              It merely renames it. Article 3 is the clause that makes the Prime
              Law a law rather than a preference — the structural guarantee that
              the prohibition means what it says.
            </p>
          </div>
        </section>

        {/* ── Section 8: Connection (white, 2-col) ─────────────────────────── */}
        <section
          aria-labelledby="pl-connection-heading"
          className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20"
        >
          <div className="mx-auto grid max-w-[1160px] grid-cols-1 items-start gap-[80px] lg:grid-cols-[1fr_440px]">

            {/* Left: text */}
            <div>
              <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
                The Broader Framework
              </p>
              <h2
                id="pl-connection-heading"
                className="nti-reveal font-serif text-[clamp(30px,3vw,48px)] font-light leading-[1.1] text-[#0E0E0E]"
              >
                The Prime Law within{" "}
                <em className="text-[#8A7030]">the full architecture.</em>
              </h2>

              <p className="mt-8 text-[16px] font-light leading-[1.9] text-[#4A4540]">
                The Prime Law does not stand alone. It is the legal foundation
                of a complete civilizational architecture:{" "}
                <strong>Neovia</strong>, the first jurisdiction designed to
                operate under it; <strong>Neothink</strong>, the cognitive
                framework that flourishes when initiated force is removed;
                and the <strong>Unified Field</strong>, the structural analysis
                that demonstrates why force suppresses consciousness and what
                changes when it is removed.
              </p>

              <p className="mt-5 text-[16px] font-light leading-[1.9] text-[#4A4540]">
                Together, these constitute what Mark Hamilton calls the
                correction — the structural answer to the 3,200-year problem
                identified by the Unified Field. The Prime Law is not the end
                of that answer. It is the foundation on which{" "}
                <strong>everything else becomes possible.</strong>
              </p>
            </div>

            {/* Right: link cards */}
            <div className="grid grid-cols-1 gap-px border border-[#E8E3D8] bg-[#E8E3D8]">
              {CONNECTION_CARDS.map((card) => (
                <Link
                  key={card.href}
                  href={card.href}
                  className="group block min-h-[44px] bg-[#FDFCFA] px-8 py-7 transition-colors duration-200 hover:bg-[#F4F1EC]"
                >
                  <p className="font-serif text-[18px] font-normal leading-[1.3] text-[#0E0E0E] transition-colors duration-200 group-hover:text-[#8A7030]">
                    {card.title}
                  </p>
                  <p className="mt-2 text-[14px] font-light leading-[1.7] text-[#4A4540]">
                    {card.desc}
                  </p>
                  <p className="mt-4 text-[11px] font-medium uppercase tracking-[0.18em] text-[#B8973A]">
                    {card.arrow} →
                  </p>
                </Link>
              ))}
            </div>

          </div>
        </section>

        {/* ── Section 9: Closing (dark) ─────────────────────────────────────── */}
        <section
          aria-label="Closing statement"
          className="bg-[#0E0E0E] px-6 py-[120px] text-center md:px-12 max-md:py-20"
        >
          <div className="mx-auto max-w-[700px]">
            <blockquote className="mb-10">
              <p className="font-serif text-[clamp(22px,2.6vw,36px)] font-light italic leading-[1.5] text-[#FDFCFA]">
                The Prime Law is not a demand. It is a{" "}
                <em className="text-[#D4B060]">recognition</em> — that
                consciousness, left free from initiated force, produces a
                civilization{" "}
                <em className="text-[#D4B060]">beyond anything</em> hierarchy
                has ever attempted.
              </p>
            </blockquote>

            <p className="mx-auto mb-12 max-w-[560px] text-[16px] font-light leading-[1.9] text-[rgba(253,252,250,0.6)]">
              Neovia is the first jurisdiction built on this foundation. It is
              not a theory awaiting implementation. It is a civilizational
              architecture in formation — the first place in history where the
              Prime Law governs not as an aspiration, but as a constitution.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/neovia"
                className="inline-flex min-h-[44px] items-center justify-center border border-[rgba(255,255,255,0.2)] px-8 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[rgba(253,252,250,0.7)] transition-colors duration-200 hover:border-[#D4B060] hover:text-[#D4B060]"
              >
                Explore Neovia
              </Link>
              <Link
                href="/unified-field"
                className="inline-flex min-h-[44px] items-center justify-center border border-[rgba(255,255,255,0.2)] px-8 py-3 text-[13px] font-medium uppercase tracking-[0.14em] text-[rgba(253,252,250,0.7)] transition-colors duration-200 hover:border-[#D4B060] hover:text-[#D4B060]"
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
