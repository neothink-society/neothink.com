"use client";

import { useEffect, useRef } from "react";

const YOUTUBE_URL = "https://www.youtube.com/@realmarkhamilton";

export function Podcast() {
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
      id="podcast"
      className="nti-podcast"
      aria-labelledby="podcast-heading"
    >
      <div className="nti-inner">
        <span className="nti-label nti-reveal">The Flagship</span>
        <div className="nti-grid nti-reveal">
          <div className="nti-text">
            <h2 id="podcast-heading">
              <em>Unleashed</em>: The Podcast
            </h2>
            <p>
              Mark Hamilton and Wallace Hamilton in conversation delivering the
              Unified Field of Conscious Civilization to the world for the first
              time. The discovery that explains why the human mind was caged, why
              civilization keeps collapsing, and what replaces it.
            </p>
            <p>
              Twelve founding episodes tracing the complete arc: from the
              collapse of the bicameral mind and the silence of the gods,
              through Socrates, Plato, Aristotle, Jesus, and the 2,400-year
              detour, to the Prime Law, Neovia, and the civilization that comes
              next.
            </p>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nti-btn"
            >
              COMING SOON · SUBSCRIBE
            </a>
          </div>
          <div className="nti-visual">
            <h3>Unleashed</h3>
            <p>A Podcast by Mark Hamilton &amp; Wallace Hamilton</p>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nti-badge"
            >
              12 Founding Episodes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
