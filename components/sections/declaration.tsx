"use client";

import { useEffect, useRef } from "react";

export function Declaration() {
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
      id="declaration"
      className="nti-declaration"
      aria-labelledby="declaration-heading"
    >
      <div className="nti-inner">
        <h2 id="declaration-heading" className="nti-decl-opening nti-reveal">
          When a living being is separated from its nature, it suffers. When it
          is in harmony, <em>it thrives.</em>
        </h2>
        <div className="nti-decl-body nti-reveal">
          <p>2,400 years ago, man was separated from his nature.</p>
          <p>Throughout history, intermediaries placed themselves above man.</p>
          <p className="nti-decl-staccato">
            <span>Kings.</span>
            <span>Governments.</span>
            <span>Religions.</span>
            <span>Institutions.</span>
          </p>
          <p>
            They claimed authority, control, rule that never belonged to them.
            It was man&rsquo;s power all along.
          </p>
          <p>
            All of human civilization is built on this separation, and man
            suffers.
          </p>
        </div>
        <p className="nti-decl-closer nti-reveal">
          The Neothink Institute is <em>correcting that wrong,</em> restoring
          man to his nature, and <em>building what comes after.</em>
        </p>
      </div>
    </section>
  );
}
