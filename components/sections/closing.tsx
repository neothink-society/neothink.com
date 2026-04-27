"use client";

import { useEffect, useRef } from "react";

export function Closing() {
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
      id="closing"
      className="nti-closing"
      aria-labelledby="closing-heading"
    >
      <div className="nti-inner nti-reveal">
        <h2 id="closing-heading">
          <em>The detour ends here.</em>
        </h2>
        <p>
          For 2,400 years, man has been separated from his nature. For fifty of
          those years, the Neothink Institute has been developing the framework,
          designing the correction, and building what comes after.
        </p>
      </div>
    </section>
  );
}
