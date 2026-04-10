"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  NEOTHINK_MENTALITY_FAQ,
  NEOTHINK_MENTALITY_LESSONS,
  NEOTHINK_MENTALITY_PHASES,
} from "@/lib/neothink-mentality-data";
import { WP } from "@/lib/wordpress-routes";

export function NeothinkMentalityPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".nm-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("nm-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("nm-visible");
            }, 60);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -32px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const firstLesson = NEOTHINK_MENTALITY_LESSONS[0];

  return (
    <main id="main-content" ref={mainRef} className="nm-page">
      <section className="nm-hero" aria-labelledby="nm-hero-heading">
        <p className="nm-hero-badge">Public video series</p>
        <h1 id="nm-hero-heading">
          The Neothink <em>Mentality</em>
        </h1>
        <p className="nm-hero-sub">
          Fourteen lessons in integrated thinking, filmed as a single arc. It is public material from the same research program that produced Unleashed, the Unified Field, and the Institute&apos;s civilizational work.
        </p>
        <dl className="nm-stats" aria-label="Series facts">
          <div>
            <dt>Lessons</dt>
            <dd>14</dd>
          </div>
          <div>
            <dt>Research depth</dt>
            <dd>50+ years</dd>
          </div>
          <div>
            <dt>Format</dt>
            <dd>Video + on-site pages</dd>
          </div>
        </dl>
      </section>

      <section className="nm-quick nm-reveal" aria-labelledby="nm-quick-heading">
        <h2 id="nm-quick-heading" className="nm-quick-h2">
          In one paragraph
        </h2>
        <p className="nm-quick-text">
          The Neothink mentality is trained integrated thinking: you learn to see the structure of a situation, connect what specialization hides, and act from internal causality instead of from routine obedience. Mark Hamilton developed the underlying research over more than five decades; this series is the sequential on-ramp. It does not replace{" "}
          <Link href={WP.unleashed}>Unleashed</Link> or <Link href={WP.unifiedField}>the Unified Field</Link>. It prepares the mind to read them seriously.
        </p>
      </section>

      <section className="nm-quote nm-reveal" aria-label="Quotation">
        <blockquote>
          <p>&quot;Reality serves the mind that pierces illusions.&quot;</p>
          <footer>
            <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </footer>
        </blockquote>
      </section>

      <section className="nm-prose nm-reveal" aria-labelledby="nm-prose-heading">
        <h2 id="nm-prose-heading">Why this exists</h2>
        <p>
          Most adults are trained into hyperspecialization. That pays bills in the short term. It also fragments causality: you see a slice, not the whole. The Neothink mentality is the opposite move. Integration across domains is not a motivational slogan. It is how you detect contradiction, predict consequences, and build value that did not exist before.
        </p>
        <p>
          These lessons were once circulated inside the Society first. They are public now because the Institute treats the proof as a public good. Watch in order. Each page below hosts the lesson text and context on this domain.
        </p>
      </section>

      <section className="nm-lessons nm-reveal" aria-labelledby="nm-lessons-heading">
        <div className="nm-section-head">
          <span className="nm-kicker">The complete series</span>
          <h2 id="nm-lessons-heading">Fourteen lessons</h2>
          <p>Open each lesson on the site. When a page is still legacy HTML during migration, the slug stays the same.</p>
        </div>
        <ul className="nm-lesson-list">
          {NEOTHINK_MENTALITY_LESSONS.map((lesson, i) => (
            <li key={lesson.path}>
              <Link href={lesson.path} className="nm-lesson-card">
                <span className="nm-lesson-num" aria-hidden>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="nm-lesson-body">
                  <span className="nm-lesson-title">{lesson.title}</span>
                  <span className="nm-lesson-desc">{lesson.description}</span>
                </span>
                <span className="nm-lesson-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="nm-phases nm-reveal" aria-labelledby="nm-phases-heading">
        <div className="nm-section-head">
          <span className="nm-kicker">Arc of the work</span>
          <h2 id="nm-phases-heading">Four phases</h2>
        </div>
        <div className="nm-phase-grid">
          {NEOTHINK_MENTALITY_PHASES.map((phase, i) => (
            <div key={phase.title} className="nm-phase-card">
              <span className="nm-phase-step">{i + 1}</span>
              <h3>{phase.title}</h3>
              <p>{phase.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="nm-faq nm-reveal" aria-labelledby="nm-faq-heading">
        <div className="nm-section-head">
          <span className="nm-kicker">Questions</span>
          <h2 id="nm-faq-heading">Frequently asked</h2>
        </div>
        <div className="nm-faq-list">
          {NEOTHINK_MENTALITY_FAQ.map((item) => (
            <article key={item.question} className="nm-faq-item">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nm-cta nm-reveal" aria-label="Start the series">
        <h2>Begin at lesson one</h2>
        <p>
          Integrated thinking is cumulative. Start with the first lesson, then proceed in order.
        </p>
        <div className="nm-cta-row">
          <Link href={firstLesson.path} className="nm-btn">
            {firstLesson.title}
          </Link>
          <Link href={WP.podcastChannel} className="nm-btn nm-btn--ghost" target="_blank" rel="noopener noreferrer">
            Neothink Institute on YouTube
          </Link>
        </div>
        <p className="nm-cta-note">
          For the full theoretical system, read <Link href={WP.unleashed}>Unleashed</Link> and explore{" "}
          <Link href={WP.freeCourses}>free learning resources</Link>.
        </p>
      </section>
    </main>
  );
}
