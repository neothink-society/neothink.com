"use client";

import { useEffect, useRef } from "react";

export function InflectionPoint() {
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
      id="inflection"
      className="nti-inflection"
      aria-labelledby="inflection-heading"
    >
      <div className="nti-inner">
        <div className="nti-inflection-left nti-reveal">
          <span className="nti-label">The Inflection Point</span>
          <h2 id="inflection-heading">
            Every civilization in recorded history has followed the same cycle.
            Rise, flourishing, stagnation, <em>collapse.</em>
          </h2>
          <div className="nti-cycle-diagram">
            <svg
              viewBox="0 0 600 380"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              role="img"
              aria-label="Historical pattern of civilizational arches. Multiple rise-and-fall cycles repeat across history. The present cycle is marked with four phases: rise, flourishing, stagnation, collapse."
            >
              <defs>
                <linearGradient id="archGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#8A7030" stopOpacity="0.5" />
                  <stop offset="35%" stopColor="#B8973A" stopOpacity="1" />
                  <stop offset="55%" stopColor="#D4B060" stopOpacity="1" />
                  <stop offset="80%" stopColor="#B8973A" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#8A7030" stopOpacity="0.4" />
                </linearGradient>
                <radialGradient id="archGlow" cx="50%" cy="40%" r="55%">
                  <stop offset="0%" stopColor="#D4B060" stopOpacity="0.12" />
                  <stop offset="100%" stopColor="#D4B060" stopOpacity="0" />
                </radialGradient>
              </defs>

              <line
                x1="20"
                y1="250"
                x2="585"
                y2="250"
                stroke="rgba(184,151,58,0.22)"
                strokeWidth="1"
              />

              <path
                d="M 30,250 C 45,250 55,220 75,180 C 95,142 115,140 130,180 C 145,220 155,250 170,250"
                fill="none"
                stroke="rgba(184,151,58,0.18)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M 150,250 C 165,250 175,215 195,170 C 215,128 235,125 250,170 C 265,215 275,250 290,250"
                fill="none"
                stroke="rgba(184,151,58,0.26)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M 260,250 C 275,250 287,212 307,160 C 328,115 350,112 365,160 C 380,212 392,250 408,250"
                fill="none"
                stroke="rgba(184,151,58,0.38)"
                strokeWidth="1.5"
                strokeLinecap="round"
              />

              <ellipse cx="478" cy="100" rx="115" ry="90" fill="url(#archGlow)" />

              <path
                d="M 378,250 C 395,250 410,215 430,170 C 450,115 475,90 500,105 C 520,115 535,150 550,210 C 560,238 572,250 580,250"
                fill="none"
                stroke="url(#archGrad)"
                strokeWidth="2.75"
                strokeLinecap="round"
              />
              <path
                d="M 580,250 C 586,247 590,244 592,238"
                fill="none"
                stroke="rgba(184,151,58,0.35)"
                strokeWidth="1.5"
                strokeDasharray="3 4"
                strokeLinecap="round"
              />

              <line x1="100" y1="250" x2="100" y2="256" stroke="rgba(184,151,58,0.3)" strokeWidth="1" />
              <line x1="222" y1="250" x2="222" y2="256" stroke="rgba(184,151,58,0.35)" strokeWidth="1" />
              <line x1="336" y1="250" x2="336" y2="256" stroke="rgba(184,151,58,0.4)" strokeWidth="1" />

              <line x1="418" y1="200" x2="418" y2="276" stroke="rgba(184,151,58,0.22)" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="418" cy="200" r="10" fill="none" stroke="rgba(184,151,58,0.22)" strokeWidth="1" />
              <circle cx="418" cy="200" r="4.5" fill="#B8973A" stroke="#1c1814" strokeWidth="2" />

              <line x1="478" y1="100" x2="478" y2="320" stroke="rgba(212,176,96,0.28)" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="478" cy="100" r="13" fill="none" stroke="rgba(212,176,96,0.32)" strokeWidth="1" />
              <circle cx="478" cy="100" r="5" fill="#D4B060" stroke="#1c1814" strokeWidth="2" />

              <line x1="528" y1="144" x2="528" y2="276" stroke="rgba(184,151,58,0.22)" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="528" cy="144" r="10" fill="none" stroke="rgba(184,151,58,0.22)" strokeWidth="1" />
              <circle cx="528" cy="144" r="4.5" fill="#B8973A" stroke="#1c1814" strokeWidth="2" />

              <line x1="568" y1="240" x2="568" y2="320" stroke="rgba(184,151,58,0.2)" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="568" cy="240" r="10" fill="none" stroke="rgba(138,112,48,0.3)" strokeWidth="1" />
              <circle cx="568" cy="240" r="4.5" fill="#8A7030" stroke="#1c1814" strokeWidth="2" />

              <text x="418" y="284" fill="#D4B060" fontFamily="Jost, sans-serif" fontSize="10" fontWeight="600" letterSpacing="2" textAnchor="middle">I</text>
              <text x="418" y="304" fill="#FDFCFA" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="16" fontStyle="italic" fontWeight="400" textAnchor="middle">Rise</text>

              <text x="528" y="284" fill="#D4B060" fontFamily="Jost, sans-serif" fontSize="10" fontWeight="600" letterSpacing="2" textAnchor="middle">III</text>
              <text x="528" y="304" fill="#FDFCFA" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="16" fontStyle="italic" fontWeight="400" textAnchor="middle">Stagnation</text>

              <text x="478" y="328" fill="#D4B060" fontFamily="Jost, sans-serif" fontSize="10" fontWeight="600" letterSpacing="2" textAnchor="middle">II</text>
              <text x="478" y="348" fill="#FDFCFA" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="16" fontStyle="italic" fontWeight="400" textAnchor="middle">Flourishing</text>

              <text x="568" y="328" fill="#D4B060" fontFamily="Jost, sans-serif" fontSize="10" fontWeight="600" letterSpacing="2" textAnchor="middle">IV</text>
              <text x="568" y="348" fill="#FDFCFA" fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="16" fontStyle="italic" fontWeight="400" textAnchor="middle">Collapse</text>

              <text
                x="14"
                y="150"
                fill="rgba(212,176,96,0.55)"
                fontFamily="Jost, sans-serif"
                fontSize="9"
                fontWeight="500"
                letterSpacing="2.2"
                textAnchor="middle"
                transform="rotate(-90 14,150)"
              >
                CIVILIZATIONAL VITALITY
              </text>
              <text
                x="300"
                y="372"
                fill="rgba(212,176,96,0.5)"
                fontFamily="Jost, sans-serif"
                fontSize="9"
                fontWeight="500"
                letterSpacing="2.4"
                textAnchor="middle"
              >
                RECORDED HISTORY
              </text>
            </svg>
          </div>
        </div>
        <div className="nti-inflection-body nti-reveal">
          <p>
            For 2,400 years, no framework has explained why. Until the Unified
            Field.
          </p>
          <div className="nti-inflection-thesis">
            This cycle will complete itself again.{" "}
            <strong>But this time is different.</strong>
          </div>
          <p>
            Force-based hierarchies now possess advanced weapons and technology.
            Artificial intelligence is compressing the time between decision and
            consequence toward zero.
          </p>
          <p className="nti-inflection-aside">
            With today&rsquo;s weapons and technology, the next collapse
            threatens extinction.
          </p>
          <p className="nti-inflection-closer">
            This is not ideology. It is <em>architecture.</em>
          </p>
          <p className="nti-inflection-closer">
            Neovia is the <em>structural exit.</em>
          </p>
        </div>
      </div>
    </section>
  );
}
