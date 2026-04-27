"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

const DIAGNOSIS = [
  {
    mark: "α",
    text: "For millennia, civilization has been built on the same inherited structure: authority above the individual, hierarchy as the structural load-bearer, coercion held in reserve.",
  },
  {
    mark: "Δ",
    text: "Every reform, every revolution, every new constitution has changed who holds power but left the architecture itself in place.",
  },
  {
    mark: "Ω",
    text: "Renaissances, Golden Ages, and Enlightenments have been periods of flourishing the architecture ultimately closed.",
  },
] as const;

export function Neovia() {
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
      id="neovia"
      className="nti-neovia"
      aria-labelledby="neovia-heading"
    >
      <div className="nti-inner">
        <span className="nti-label nti-reveal">The Project</span>
        <h2 id="neovia-heading" className="nti-reveal">
          Neovia: the civilization that was{" "}
          <em>always possible</em>.
        </h2>
        <div className="nti-neovia-body nti-reveal">
          <div className="nti-neovia-col">
            <span className="nti-neovia-col-label">The Diagnosis</span>
            {DIAGNOSIS.map((beat) => (
              <div key={beat.mark} className="nti-neovia-beat">
                <div className="nti-neovia-beat-mark">{beat.mark}</div>
                <p>{beat.text}</p>
              </div>
            ))}
          </div>
          <div className="nti-neovia-col nti-neovia-exit-flow">
            <span className="nti-neovia-col-label">The Verdict</span>
            <div className="nti-neovia-verdict">
              <p>
                The structure creates the cycles and always leads to collapse.
              </p>
            </div>
            <div className="nti-neovia-exit-section">
              <span className="nti-neovia-col-label">The Exit</span>
              <p>To escape collapse, a structural exit is needed.</p>
              <p>
                Neovia is that exit. The first civilization designed without
                the structural flaw.
              </p>
              <p>
                When the suppression ends, consciousness expands. What
                civilizations have briefly glimpsed, Neovia is structured to
                sustain.
              </p>
              <p className="nti-neovia-closer">
                A golden age that does not have to end.
              </p>
            </div>
          </div>
        </div>
        <div className="nti-neovia-cta nti-reveal">
          <Link href={WP.neovia} className="nti-btn-ghost">
            Explore the Neovia Project
          </Link>
        </div>
      </div>
    </section>
  );
}
