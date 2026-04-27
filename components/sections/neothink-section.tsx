"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

const CAPS = [
  {
    title: "A New Operating System",
    description:
      "Not a technique or method. A different way the mind interfaces with reality itself.",
  },
  {
    title: "Sees Reality Directly",
    description:
      "Past appearance. Past narrative. Past inherited interpretation. The mind sees what is actually there.",
  },
  {
    title: "Generates New Knowledge",
    description:
      "The integrating mind does not only make sense of existing knowledge. It generates knowledge that no single domain could produce.",
  },
  {
    title: "Future Prediction",
    description:
      "When structure is understood, what will be becomes visible. Not as prophecy. As structure.",
  },
  {
    title: "Value Creation at Scale",
    description:
      "This mind does not compete for existing value. It creates new value where none existed.",
  },
] as const;

export function NeothinkSection() {
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
      className="nti-neothink"
      id="neothink"
      aria-labelledby="neothink-heading"
    >
      <div className="nti-inner">
        <span className="nti-label nti-reveal">The Operating System</span>
        <div className="nti-grid nti-reveal">
          <div>
            <h2 id="neothink-heading">
              Neothink: <em>the mind unleashed.</em>
            </h2>
            <p className="nti-neothink-lead">
              Most people feel helpless and powerless in a world they do not
              understand and cannot control. This is the mind separated from its
              nature.
            </p>
            <p className="nti-neothink-highlight">
              What you understand, you can control. What you cannot understand,
              you can only react to.
            </p>
            <p>
              When you finally understand the world, life becomes predictable.
              Opportunities expand. Life becomes easier and more effortless.
              Abiding prosperity, love, and happiness stop being things you
              chase and become natural.
            </p>
            <p>
              There is a mind that operates this way. That sees reality and
              shapes it. The difference is not higher intelligence. It is a
              different mode of mind.
            </p>
            <p>
              This mode has produced every genuine breakthrough in human
              history. It has appeared only in flashes, in rare individuals,
              under conditions most civilizations have suppressed.
            </p>
            <p className="nti-neothink-stamp">
              That mode is Neothink. The mind restored to its nature.
            </p>
          </div>
          <div>
            <div className="nti-caps">
              {CAPS.map((cap) => (
                <div key={cap.title} className="nti-cap">
                  <h4>{cap.title}</h4>
                  <p>{cap.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="nti-neothink-new-human nti-reveal">
          <h3>The Mind Restored</h3>
          <p>Neothink is the completion of consciousness.</p>
        </div>
        <div className="nti-neothink-cta nti-reveal">
          <Link href={WP.neothink} className="nti-btn">
            What Is Neothink
          </Link>
        </div>
      </div>
    </section>
  );
}
