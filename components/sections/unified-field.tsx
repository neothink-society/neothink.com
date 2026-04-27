"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

const TREATISE = [
  {
    numeral: "I.",
    title: "The Bicameral Origin",
    description:
      "Three thousand years ago, the internal structure that governed human cognition broke down. What emerged in its place was not consciousness, but chaos. Philosophy arose across the ancient world as emergency stabilization.",
  },
  {
    numeral: "II.",
    title: "The Aristotelian Interruption",
    description:
      "For one brief window, Aristotle completed the transition to integrated consciousness. Then his works were lost. What followed was the 2,400-year detour.",
  },
  {
    numeral: "III.",
    title: "The Civilizational Law",
    description:
      "Every civilization that has risen, fallen, flourished, or collapsed has followed the same underlying pattern. The pattern is not ideological. It is structural.",
  },
  {
    numeral: "IV.",
    title: "The Correction",
    description:
      "The structural correction has been identified, codified, and is now being built.",
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
              The Unified Field of <em>Conscious Civilization.</em>
            </h2>
            <p className="nti-subhead">
              The first complete explanation of man, consciousness, and
              civilization.
            </p>
            <div className="nti-thesis-stamp">
              This is not ideology. It is <em>architecture.</em>
            </div>
            <p className="nti-lead">
              For 2,400 years, the nature of man, the source of human suffering,
              and the structure of civilization have been studied in fragments.
              History, anthropology, psychology, philosophy, politics, biology
              each traced pieces of the pattern without seeing the whole.
            </p>
            <p>
              The Unified Field of Conscious Civilization resolves them. A
              synthesis fifty years in the making, it explains where man came
              from, what went wrong 2,400 years ago, why the modern world
              suffers, and what must replace the structure still running today.
            </p>
            <p className="nti-top-quote">
              &ldquo;The detour is not a mistake. It is a physical law playing
              out in slow motion.&rdquo;
            </p>
            <Link href={WP.unifiedField} className="nti-btn">
              Read the Full Framework
            </Link>
          </div>
          <div className="nti-cards nti-reveal">
            {TREATISE.map((card) => (
              <div key={card.numeral} className="nti-card">
                <span className="nti-card-num">{card.numeral}</span>
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
