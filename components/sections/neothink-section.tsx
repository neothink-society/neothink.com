const CAPABILITIES = [
  {
    title: "Integrated Thinking",
    description:
      "The capacity to hold physics, economics, biology, psychology, ethics, and purpose inside a single causal picture of reality.",
  },
  {
    title: "See What Others Cannot",
    description:
      "The ability to see reality directly, through illusion, past appearances, down to what is. Once given, it cannot be taken back.",
  },
  {
    title: "Puzzle Building",
    description:
      "Percepts become concepts. Concepts snap together into larger integrations, becoming puzzle pictures that reveal what others cannot see.",
  },
  {
    title: "Future Prediction",
    description:
      "When you understand cause and effect at sufficient depth, the future becomes visible. Not as prophecy. As structure.",
  },
  {
    title: "The New Human",
    description:
      "A human being operating from the Neothink mentality is categorically different. Not because they gained something new, but because what was always there is finally unbound.",
  },
] as const;

export function NeothinkSection() {
  return (
    <section id="neothink" aria-labelledby="neothink-heading" className="border-t border-[#E8E3D8] bg-[#F4F1EC] px-6 py-[120px] md:px-12 max-md:py-20">
      <div className="mx-auto max-w-[1160px]">
        <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8A7030]">
          The Operating System
        </p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left */}
          <div className="nti-reveal">
            <h2 id="neothink-heading" className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(36px,4vw,52px)] font-light leading-[1.1] text-[#0E0E0E]">
              Neothink &mdash; the{" "}
              <em className="text-[#B8973A]">mind unleashed.</em>
            </h2>
            <p className="mt-6 text-[15px] font-light leading-[1.75] text-[#4A4540]">
              Neothink is the operating system of the uncovered mind. It is what
              consciousness does when it is no longer caged by hierarchy, force,
              and external authority. When the human mind functions the way it
              was designed to function.
            </p>
            <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#4A4540]">
              Where The Way removes the covering, Neothink is what the freed
              mind becomes. It is the capacity to integrate across domains, to
              see cause and effect with precision, to detect contradictions that
              others accept, to build concepts into larger concepts, and to
              create new knowledge that advances human life.
            </p>
            <p className="mt-4 text-[15px] font-light leading-[1.75] text-[#4A4540]">
              The Neothink mentality is not merely thinking differently. It is
              operating from a fundamentally different cognitive architecture.
              One that was glimpsed briefly by Aristotle 2,400 years ago and has
              been suppressed by hierarchical civilization ever since.
            </p>
            <a
              href="/neothink"
              className="mt-8 inline-flex items-center min-h-[44px] border border-[#E8E3D8] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#0E0E0E]"
            >
              What Is Neothink
            </a>
          </div>

          {/* Right: capabilities */}
          <div className="flex flex-col">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={i}
                className={`nti-reveal flex gap-4 py-5 ${
                  i > 0 ? "border-t border-[#E8E3D8]" : ""
                }`}
              >
                <span className="mt-[6px] h-[6px] w-[6px] flex-shrink-0 rounded-full bg-[#B8973A]" />
                <div>
                  <p className="text-[14px] font-medium text-[#0E0E0E]">
                    {cap.title}
                  </p>
                  <p className="mt-1 text-[13px] font-light leading-[1.6] text-[#4A4540]">
                    {cap.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
