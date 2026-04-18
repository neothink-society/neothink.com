"use client";

import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";
import { useEffect, useRef } from "react";

const STATS = [
  { value: "2026", label: "Site Selection", isPrimeLaw: false },
  { value: "2027", label: "First Residents", isPrimeLaw: false },
  { value: "\u221E", label: "Designed to Last", isPrimeLaw: false },
  { value: "", label: "Constitutional Foundation", isPrimeLaw: true },
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
        <div className="nti-grid">
          <div className="nti-left nti-reveal">
            <h2 id="neovia-heading">
              Neovia, the first civilization designed for{" "}
              <em>fully integrated</em> human consciousness.
            </h2>
            <p>
              Neovia is the Institute&rsquo;s flagship civilizational project.
              The first Prime Law jurisdiction. A city designed from the ground up
              to remove hierarchy and initiated force as governing principles,
              and to create the environmental conditions in which fully conscious
              human beings can operate without constraint.
            </p>
            <p>
              Neovia is not a utopia. It is not an ideology. It is an
              anti-extinction architecture. The practical, jurisdictional exit
              ramp from the otherwise inevitable collision between nuclear-era
              force-based civilization and the accelerating power of artificial
              intelligence.
            </p>
            <p>
              When force is structurally removed, consciousness expands.
              Innovation compounds. Wealth becomes exponential. The purpose void
              left by AI is filled not by policy, but by the release of human
              potential that hierarchy has suppressed for two millennia.
            </p>
            <div className="nti-stats">
              {STATS.map((stat) => (
                <div key={stat.label} className="nti-stat">
                  <span className="nti-stat-num">
                    {stat.isPrimeLaw ? (
                      <>
                        Prime
                        <br />
                        Law
                      </>
                    ) : (
                      stat.value
                    )}
                  </span>
                  <span className="nti-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
            <Link href={WP.neovia} className="nti-btn">
              Explore the Neovia Project
            </Link>
          </div>
          <div className="nti-features nti-reveal">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="nti-feature">
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
