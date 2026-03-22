const STAGES = [
  {
    numeral: "I",
    title: "The Waking",
    description:
      "The recognition that you have been asleep. Learning to see through illusions down to what is. Become aware of the conditioned self and imprints of external authority installed without your knowledge.",
    tag: "See clearly",
  },
  {
    numeral: "II",
    title: "The Clearing",
    description:
      "The systematic removal of everything false. The worth structures that don\u2019t work. The unforgiven past that costs energy every day. The environmental architecture that keeps reinstalling the old operating system. The deepest work. The real transformation.",
    tag: "Remove what is not",
  },
  {
    numeral: "III",
    title: "The Living",
    description:
      "Operating fully from the awake self in ordinary life. Creating, loving, growing, building \u2014 with the full power of a mind that is finally free. The question is no longer who you should become. It is what you will create, build, and add to life now that the cage is removed. The path for the rest of a life of abiding happiness and prosperity.",
    tag: "Live unleashed",
  },
] as const;

export function TheWay() {
  return (
    <section id="the-way" aria-labelledby="the-way-heading" className="border-t border-[#E8E3D8] bg-[#FDFCFA] px-6 py-[120px] md:px-12 max-md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8A7030]">
          The Personal Path
        </p>
        <div className="mb-12 h-px w-12 bg-[#B8973A]" />

        {/* Intro: 2-column */}
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-[1fr_480px] md:gap-20">
          <div className="nti-reveal">
            <h2 id="the-way-heading" className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(36px,4vw,52px)] font-light leading-[1.1] text-[#0E0E0E]">
              The Unified Field, lived from the inside.
            </h2>
            <p className="mt-6 text-[15px] font-light leading-[1.75] text-[#4A4540]">
              The Way is the personal expression of everything the Institute is
              building at the civilizational scale. It is the path of seeing
              through the illusions of those who wish to keep you small,
              removing everything that was installed from the outside, and
              waking up a mind that has been caged.
            </p>
          </div>
          <div className="nti-reveal flex items-start">
            <blockquote>
              <p className="font-[family-name:var(--font-cormorant-garamond)] text-[20px] italic leading-[1.6] text-[#7A7570]">
                &ldquo;You are not broken. You were never broken. You were
                covered. And that covering can be removed.&rdquo;
              </p>
              <footer className="mt-2">
                <cite className="text-[11px] font-light tracking-[0.1em] text-[#7A7570]/60 not-italic">
                  &mdash; Mark Hamilton
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>

        {/* 3 stage cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {STAGES.map((stage, i) => (
            <div
              key={stage.numeral}
              className={`nti-reveal p-8 transition-colors duration-200 hover:bg-[#F4F1EC] ${
                i > 0 ? "border-t border-[#E8E3D8] lg:border-t-0 lg:border-l" : ""
              }`}
            >
              <span className="block font-[family-name:var(--font-cormorant-garamond)] text-[64px] font-light leading-none text-[#E8E3D8]">
                {stage.numeral}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-cormorant-garamond)] text-[24px] font-normal leading-[1.3] text-[#0E0E0E]">
                {stage.title}
              </h3>
              <p className="mt-4 text-[14px] font-light leading-[1.7] text-[#4A4540]">
                {stage.description}
              </p>
              <span className="mt-6 inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-[#8A7030]">
                {stage.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-[#E8E3D8] pt-10 md:flex-row md:items-center">
          <blockquote>
            <p className="font-[family-name:var(--font-cormorant-garamond)] text-[18px] italic leading-[1.5] text-[#7A7570]">
              We do not tell you who you are. We show you how to remove all that is not you. What is left, is you.
            </p>
          </blockquote>
          <a
            href="/the-way"
            className="inline-flex items-center min-h-[44px] bg-[#0E0E0E] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#FDFCFA] transition-colors duration-200 hover:bg-[#2a2a2a]"
          >
            Begin The Way
          </a>
        </div>
      </div>
    </section>
  );
}
