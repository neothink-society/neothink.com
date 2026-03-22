export function PrimeLaw() {
  return (
    <section id="prime-law" aria-labelledby="prime-law-heading" className="bg-[#0E0E0E] px-6 py-20 text-center md:px-12">
      <div className="mx-auto max-w-[700px]">
        <h2 id="prime-law-heading" className="nti-reveal mb-8 text-[10px] font-medium uppercase tracking-[0.22em] text-[#D4B060]">
          The Constitutional Foundation
        </h2>
        <blockquote className="nti-reveal" cite="https://neothink.com/prime-law">
          <p className="font-[family-name:var(--font-cormorant-garamond)] text-[clamp(18px,2.4vw,24px)] font-light italic leading-[1.7] text-[#FDFCFA]/80">
            &ldquo;No person, group of persons, or government shall initiate
            force, threat of force, or fraud against any individual&rsquo;s
            self, property, or contract.&rdquo;
          </p>
          <footer className="mt-4">
            <cite className="text-[11px] font-light tracking-[0.1em] text-[#FDFCFA]/60 not-italic">
              &mdash; The Prime Law, Mark Hamilton
            </cite>
          </footer>
        </blockquote>
        <a
          href="/prime-law"
          className="nti-reveal mt-8 inline-flex items-center min-h-[44px] text-[12px] font-medium uppercase tracking-[0.1em] text-[#D4B060] transition-[letter-spacing] duration-200 hover:tracking-[0.18em]"
        >
          Read the Prime Law &rarr;
        </a>
      </div>
    </section>
  );
}
