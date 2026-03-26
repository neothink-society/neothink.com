const STATS = [
  { value: "2026", label: "Site Selection" },
  { value: "2027", label: "First Residents" },
  { value: "\u221E", label: "Designed to Last" },
  { value: "Prime Law", label: "Constitutional Foundation" },
] as const;

const FEATURES = [
  {
    title: "The Prime Law Foundation",
    description:
      "No person, group, or government may initiate force against any individual\u2019s self, property, or contract. The first constitutional framework in history built on this new paradigm as structure.",
  },
  {
    title: "Biomedical Research City",
    description:
      "Home to world-class research facilities in biomedical and biotech innovation. Scientific advisory relationships with leading researchers in aging, genetics, regenerative, and preventative medicine.",
  },
  {
    title: "Voluntary, Contractual Governance",
    description:
      "All participation is voluntary. Association is contractual. Exit is absolute. No coercive authority. Disputes resolved through restitution rather than punishment. Order through abundance, not enforcement.",
  },
  {
    title: "The Anti-Extinction Architecture",
    description:
      "As long as force-based hierarchies govern in a nuclear age, and AI compresses the time between decision and consequence, the probability of nuclear annihilation is a mathematical certainty. Neovia is the only structural exit from that trajectory. The first non-coercive civilizational alternative in history.",
  },
  {
    title: "Economic Design for Value Creation",
    description:
      "Without confiscation or coercive redistribution, wealth compounds naturally. Innovation accelerates without suppression. The immortal mentality, creation over survival, becomes the civilizational default.",
  },
] as const;

export function Neovia() {
  return (
    <section id="neovia" aria-labelledby="neovia-heading" className="relative overflow-hidden bg-[#0E0E0E] px-6 py-[120px] md:px-12 max-md:py-20">
      {/* Ghost watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-[-20px] top-1/2 -translate-y-1/2 select-none font-serif text-[280px] font-light tracking-wider text-[#FDFCFA] opacity-[0.03]"
      >
        NEOVIA
      </span>

      <div className="relative mx-auto max-w-[1160px]">
        <p className="mb-10 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
          The Project
        </p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-[100px]">
          {/* Left */}
          <div className="nti-reveal">
            <h2 id="neovia-heading" className="font-serif text-[clamp(36px,3vw,52px)] font-light leading-[1.15] text-[#FDFCFA]">
              Neovia &mdash; the first civilization designed for{" "}
              <em className="text-[#D4B060]">fully integrated</em> human
              consciousness.
            </h2>
            <p className="mt-6 text-[16px] font-light leading-[1.85] text-[#FDFCFA]/65">
              Neovia is the Institute&rsquo;s flagship civilizational project.
              The first Prime Law jurisdiction. A city designed from the ground
              up to remove hierarchy and initiated force as governing
              principles, and to create the environmental conditions in which
              fully conscious human beings can operate without constraint.
            </p>
            <p className="mt-4 text-[16px] font-light leading-[1.85] text-[#FDFCFA]/65">
              Neovia is not a utopia. It is not an ideology. It is an
              anti-extinction architecture. The practical, jurisdictional exit
              ramp from the otherwise inevitable collision between nuclear-era
              force-based civilization and the accelerating power of artificial
              intelligence.
            </p>
            <p className="mt-4 text-[16px] font-light leading-[1.85] text-[#FDFCFA]/65">
              When force is structurally removed, consciousness expands.
              Innovation compounds. Wealth becomes exponential. The purpose void
              left by AI is filled not by policy, but by the release of human
              potential that hierarchy has suppressed for two millennia.
            </p>

            {/* Stats grid */}
            <div className="mt-10 grid grid-cols-2 gap-px bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.08)]">
              {STATS.map((stat) => (
                <div key={stat.label} className="bg-[rgba(14,14,14,0.6)] px-8 py-7">
                  <p className="font-serif text-[36px] font-light leading-none text-[#D4B060]">
                    {stat.value === "Prime Law" ? <>Prime<br />Law</> : stat.value}
                  </p>
                  <p className="mt-2 text-[12px] font-normal uppercase tracking-[0.12em] text-[rgba(253,252,250,0.45)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <a
              href="/neovia"
              className="mt-10 inline-flex items-center min-h-[44px] border border-[#FDFCFA]/20 px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#FDFCFA]/70 transition-colors duration-200 hover:border-[#D4B060] hover:text-[#D4B060]"
            >
              Explore the Neovia Project
            </a>
          </div>

          {/* Right: feature cards */}
          <div className="flex flex-col gap-0">
            {FEATURES.map((feature, i) => (
              <div
                key={i}
                className={`nti-reveal border border-[#FDFCFA]/[0.06] bg-[#0E0E0E] px-9 py-8 transition-colors duration-200 hover:bg-[rgba(184,151,58,0.06)] ${
                  i > 0 ? "-mt-px" : ""
                }`}
              >
                <h3 className="font-serif text-[20px] font-normal leading-[1.3] text-[#FDFCFA]">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[14px] font-light leading-[1.65] text-[rgba(253,252,250,0.5)]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
