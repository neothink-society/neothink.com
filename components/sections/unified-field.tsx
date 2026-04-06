import Link from "next/link";

const CARDS = [
  {
    numeral: "I",
    title: "The Bicameral Origin",
    description:
      "2,400 years ago, the internal voice structure that governed human cognition collapsed. Philosophy arose not as wisdom, but as emergency stabilization for a species that had lost its psychological foundation.",
  },
  {
    numeral: "II",
    title: "The Aristotelian Interruption",
    description:
      "For one brief moment, Aristotle completed the transition to fully integrated consciousness. His works were lost. Humanity took a 2,400-year detour into hierarchy, force, and external authority. A detour it has never recovered from.",
  },
  {
    numeral: "III",
    title: "The Civilizational Law",
    description:
      "As force rises, civilization collapses. As force recedes, civilization soars. This is not a moral preference. It is a natural law, proven across every empire and epoch in recorded history.",
  },
  {
    numeral: "IV",
    title: "The Correction",
    description:
      "The Prime Law, the prohibition of initiated force, is the necessary environmental condition for advanced human consciousness to function at scale. Neovia is its physical expression.",
  },
] as const;

export function UnifiedField() {
  return (
    <section id="unified-field" aria-labelledby="unified-field-heading" className="bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
          The Unified Field
        </p>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-[340px_1fr] lg:gap-[100px]">
          {/* Left column */}
          <div className="nti-reveal">
            <h2
              id="unified-field-heading"
              className="font-serif text-[clamp(36px,3vw,52px)] font-light leading-[1.15] text-[#0E0E0E]"
              aria-label="The Unified Field: The Single Variable That Determines Whether Civilization Rises or Collapses"
            >
              The single variable that determines whether civilization rises or{" "}
              <em className="text-[#8A7030]">collapses.</em>
            </h2>
            <p className="mt-6 text-[16px] font-light leading-[1.8] text-[#4A4540]">
              The Unified Field of Conscious Civilization is the
              Institute&rsquo;s foundational contribution. A synthesis fifty
              years in the making, identifying the structural pattern that has
              governed every empire, every religion, every economy, and every
              human destiny across all of history.
            </p>
            <p className="mt-4 text-[16px] font-light leading-[1.8] text-[#4A4540]">
              The insight is not ideological. It is architectural. Every major
              civilization in the recorded arc of history has repeated the same
              error. The Unified Field makes that error visible and shows what
              replaces it.
            </p>
            <Link
              href="/unified-field"
              className="mt-8 inline-flex items-center min-h-[44px] border border-[#C8C0B0] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#0E0E0E]"
            >
              Read the Full Framework
            </Link>
          </div>

          {/* Right column: cards */}
          <div className="flex flex-col">
            {CARDS.map((card, i) => (
              <div
                key={card.numeral}
                className={`nti-reveal group border border-[#E8E3D8] bg-[#F4F1EC] px-10 py-9 transition-colors duration-200 hover:bg-[#FDFCFA] ${
                  i > 0 ? "-mt-px" : ""
                }`}
              >
                <span className="font-serif text-[13px] font-normal text-[#B8973A]">
                  {card.numeral}.
                </span>
                <h3 className="mt-2 font-serif text-[22px] font-normal leading-[1.3] text-[#0E0E0E]">
                  {card.title}
                </h3>
                <p className="mt-3 text-[14px] font-light leading-[1.7] text-[#4A4540]">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
