"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  NTI_FAQ_SECTIONS,
  NTI_FAQ_TOTAL_QUESTIONS,
} from "@/lib/nti-faq";
import { WP } from "@/lib/wordpress-routes";

const START_LINKS: Record<string, string> = {
  homepage: WP.home,
  Unleashed: WP.unleashed,
  "Unified Field": WP.unifiedField,
  Neothink: WP.neothink,
  Neovia: WP.neovia,
  "Published Work": WP.publishedWork,
};

/**
 * Highlights a known starting point in the "Where should someone start?"
 * answer paragraphs by wrapping the keyword in a Link to its dedicated page.
 * Falls back to plain text if no keyword matches.
 */
function renderStartLine(line: string) {
  for (const keyword of Object.keys(START_LINKS)) {
    const match = line.match(
      new RegExp(`^(Start with the |Start with )(${keyword})( .+)$`)
    );
    if (match) {
      return (
        <>
          {match[1]}
          <Link href={START_LINKS[keyword]}>{match[2]}</Link>
          {match[3]}
        </>
      );
    }
  }
  return line;
}

export function FaqPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".faq-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("faq-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("faq-visible");
            }, 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main id="main-content" ref={mainRef} className="faq-page">
      <section className="faq-hero" aria-labelledby="faq-hero-heading">
        <div className="faq-hero-inner">
          <p className="faq-hero-eyebrow">From the Institute</p>
          <h1 id="faq-hero-heading">
            Common Questions About the Neothink Institute
          </h1>
          <p className="faq-hero-lede" id="faq-intro-lead">
            The Neothink Institute is an independent research institution
            advancing the Unified Field of Conscious Civilization, the
            Neothink body of work, Unleashed, and Neovia.
          </p>
          <p className="faq-hero-lede">
            This page answers common questions about the Institute, the body
            of work, the corpus, and the Institute&rsquo;s relationship to
            Neothink Society.
          </p>
        </div>
      </section>

      <nav className="faq-toc" aria-label="Browse by section">
        <div className="faq-toc-inner">
          <p className="faq-toc-label">
            <span className="faq-toc-label-eyebrow">Browse</span>
            <span className="faq-toc-label-count">
              {NTI_FAQ_TOTAL_QUESTIONS} questions across {NTI_FAQ_SECTIONS.length}{" "}
              sections
            </span>
          </p>
          <ol className="faq-toc-list">
            {NTI_FAQ_SECTIONS.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="faq-toc-link">
                  <span className="faq-toc-num">{section.number}</span>
                  <span className="faq-toc-title">{section.title}</span>
                  <span className="faq-toc-count">
                    {section.questions.length}
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {NTI_FAQ_SECTIONS.map((section, i) => {
        const isWhereToStart = section.id === "for-researchers-and-readers";
        const sectionTone = i % 2 === 0 ? "cream" : "stone";
        return (
          <section
            key={section.id}
            id={section.id}
            className={`faq-section faq-section--${sectionTone}`}
            aria-labelledby={`${section.id}-heading`}
          >
            <div className="faq-section-inner">
              <header className="faq-section-header faq-reveal">
                <span className="faq-section-eyebrow">
                  Section {section.number}
                </span>
                <h2 id={`${section.id}-heading`} className="faq-section-title">
                  {section.title}
                </h2>
                <span className="faq-section-count">
                  {section.questions.length} questions
                </span>
              </header>

              <div className="faq-questions">
                {section.questions.map((q) => {
                  const isStartList =
                    isWhereToStart && q.id === "where-should-someone-start";
                  return (
                    <article key={q.id} className="faq-q-block faq-reveal">
                      <h3 id={q.id} className="faq-question">
                        <a
                          href={`#${q.id}`}
                          className="faq-question-anchor"
                          aria-label={`Direct link to: ${q.question}`}
                        >
                          {q.question}
                        </a>
                      </h3>
                      {isStartList ? (
                        <ul className="faq-start-list">
                          {q.answer.map((line, idx) => (
                            <li
                              key={`${q.id}-${idx}`}
                              className="faq-start-line"
                            >
                              {renderStartLine(line)}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        q.answer.map((p, idx) => (
                          <p key={`${q.id}-${idx}`} className="faq-answer">
                            {p}
                          </p>
                        ))
                      )}
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="faq-closing" aria-labelledby="faq-closing-heading">
        <div className="faq-closing-inner faq-reveal">
          <p className="faq-closing-setup">
            The Neothink Institute is an independent research institution.
          </p>
          <p className="faq-closing-setup">
            It publishes the work, opens the corpus, advances the Unified
            Field, and builds the frameworks that carry man beyond the
            2,400-year detour.
          </p>
          <h2 id="faq-closing-heading" className="faq-closing-verdict">
            <em>The detour ends here.</em>
          </h2>
        </div>
      </section>
    </main>
  );
}
