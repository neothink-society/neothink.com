"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

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
      id="framework"
      className="nti-framework"
      aria-labelledby="unified-field-heading"
    >
      <div className="nti-inner">
        <span className="nti-label nti-reveal">The Unified Field</span>
        <div className="nti-grid">
          <div className="nti-left nti-reveal">
            <h2 id="unified-field-heading">
              The single variable that determines whether civilization rises or{" "}
              <em>collapses.</em>
            </h2>
            <p>
              The Unified Field of Conscious Civilization is the Institute&rsquo;s
              foundational contribution. A synthesis fifty years in the making,
              identifying the structural pattern that has governed every empire,
              every religion, every economy, and every human destiny across all
              of history.
            </p>
            <p>
              The insight is not ideological. It is architectural. Every major
              civilization in the recorded arc of history has repeated the same
              error. The Unified Field makes that error visible and shows what
              replaces it.
            </p>
            <Link href={WP.unifiedField} className="nti-btn">
              Read the Full Framework
            </Link>
          </div>
          <div className="nti-cards nti-reveal">
            {CARDS.map((card) => (
              <div key={card.numeral} className="nti-card">
                <span className="nti-card-num">{card.numeral}.</span>
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
