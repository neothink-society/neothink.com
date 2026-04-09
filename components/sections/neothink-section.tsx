"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

const CAPABILITIES: { title: string; description: React.ReactNode }[] = [
  {
    title: "Integrated Thinking",
    description:
      "The capacity to hold physics, economics, biology, psychology, ethics, and purpose inside a single causal picture of reality.",
  },
  {
    title: "See What Others Cannot",
    description: (
      <>
        The ability to see reality directly, through illusion, past appearances, down to{" "}
        <em>what is.</em> Once given, it cannot be taken back.
      </>
    ),
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
];

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
    <section ref={sectionRef} className="nti-neothink" id="neothink" aria-labelledby="neothink-heading">
      <div className="nti-inner">
        <span className="nti-label nti-reveal">The Operating System</span>
        <div className="nti-grid nti-reveal">
          <div>
            <h2 id="neothink-heading">
              Neothink &mdash; the <em>mind unleashed.</em>
            </h2>
            <p>
              Neothink is the operating system of the uncovered mind. It is what consciousness does
              when it is no longer caged by hierarchy, force, and external authority. When the
              human mind functions the way it was designed to function.
            </p>
            <p>
              Where The Way removes the covering, Neothink is what the freed mind becomes. It is the
              capacity to integrate across domains, to see cause and effect with precision, to detect
              contradictions that others accept, to build concepts into larger concepts, and to create
              new knowledge that advances human life.
            </p>
            <p>
              The Neothink mentality is not merely thinking differently. It is operating from a
              fundamentally different cognitive architecture. One that was glimpsed briefly by
              Aristotle 2,400 years ago and has been suppressed by hierarchical civilization ever
              since.
            </p>
            <Link href={WP.neothink} className="nti-btn">
              What Is Neothink
            </Link>
          </div>
          <div>
            <div className="nti-caps">
              {CAPABILITIES.map((cap) => (
                <div key={cap.title} className="nti-cap">
                  <div className="nti-cap-dot" aria-hidden />
                  <div className="nti-cap-text">
                    <strong>{cap.title}</strong>
                    {cap.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
