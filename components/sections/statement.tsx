export function Statement() {
  return (
    <section id="statement" aria-labelledby="statement-heading" className="bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 gap-12 md:grid-cols-2 md:gap-20">
        {/* Left: quote */}
        <div className="nti-reveal">
          <h2 id="statement-heading" className="sr-only">The Civilizational Thesis</h2>
          <blockquote>
            <p className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(32px,3.5vw,52px)] font-light leading-[1.2] text-[#FDFCFA]">
              Every civilization in history has repeated the same cycle. For the
              first time,{" "}
              <em className="text-[#D4B060]">the flaw has been identified,</em>{" "}
              and we are building the correction.
            </p>
            <footer className="mt-4">
              <cite className="text-[12px] font-light tracking-[0.1em] text-[#FDFCFA]/60 not-italic">
                &mdash; Neothink Institute
              </cite>
            </footer>
          </blockquote>
        </div>

        {/* Right: body copy */}
        <div className="nti-reveal flex flex-col gap-6">
          <p className="text-[16px] font-light leading-[1.8] text-[#FDFCFA]/65">
            The convergence of artificial intelligence, existential risk,
            stalled human consciousness, and accelerating civilizational
            instability marks a civilizational inflection point unlike any in
            recorded history. The old political and philosophical frameworks
            that governed the last two millennia were not designed for this
            moment. They were designed for an earlier form of mind.
          </p>
          <p className="text-[16px] font-light leading-[1.8] text-[#FDFCFA]/65">
            The Neothink Institute has spent fifty years developing a different
            kind of framework. Not a reform of existing systems. Not a new
            ideology to replace old ones. A unified understanding of the single
            variable that determines whether civilizations rise or collapse, and
            the architectural alternative to everything that doesn&rsquo;t work.
          </p>
          <p className="text-[16px] font-light leading-[1.8] text-[#FDFCFA]/65">
            This is not ideology. It is architecture.
          </p>
        </div>
      </div>
    </section>
  );
}
