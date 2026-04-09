"use client";

import { useEffect, useRef } from "react";

export function Statement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".nti-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("nti-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("nti-visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="statement"
      className="nti-statement"
      aria-labelledby="statement-heading"
    >
      <h2 id="statement-heading" className="sr-only">
        The Civilizational Thesis
      </h2>
      <div className="nti-inner">
        <div className="nti-quote nti-reveal">
          &quot;Every civilization in history has repeated the same cycle. For
          the first time, <em>the flaw has been identified,</em> and we are
          building the correction.&quot;
        </div>
        <div className="nti-body nti-reveal">
          <p>
            The convergence of artificial intelligence, existential risk, stalled
            human consciousness, and accelerating civilizational instability
            marks a civilizational inflection point unlike any in recorded
            history. The old political and philosophical frameworks that
            governed the last two millennia were not designed for this moment.
            They were designed for an earlier form of mind.
          </p>
          <p>
            The Neothink Institute has spent fifty years developing a different
            kind of framework. Not a reform of existing systems. Not a new
            ideology to replace old ones. A unified understanding of the single
            variable that determines whether civilizations rise or collapse, and
            the architectural alternative to everything that doesn&rsquo;t work.
          </p>
          <p>This is not ideology. It is architecture.</p>
        </div>
      </div>
    </section>
  );
}
