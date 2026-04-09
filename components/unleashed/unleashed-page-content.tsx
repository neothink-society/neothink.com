"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

import {
  CLOSING_PART,
  INTRO_PART,
  PART_ONE,
} from "./unleashed-toc-data";

const CONTEXT_LINKS = [
  {
    href: WP.unifiedField,
    title: "The Unified Field",
    description: "The framework overview. The argument compressed into one page.",
    arrow: "Read →",
  },
  {
    href: WP.neovia,
    title: "Neovia",
    description: "The civilizational vision. The Prime Law made physical.",
    arrow: "Explore →",
  },
  {
    href: WP.theWay,
    title: "The Way",
    description: "The personal path. The Unified Field lived from the inside.",
    arrow: "Walk The Way →",
  },
  {
    href: WP.podcast,
    title: "The Podcast",
    description: "Unleashed delivered in conversation. Twelve founding episodes.",
    arrow: "Listen →",
  },
  {
    href: WP.markHamilton,
    title: "Mark Hamilton",
    description: "The architect. Fifty years of independent research.",
    arrow: "His Story →",
  },
] as const;

function TocPartSection({
  label,
  partTitle,
  chapters,
}: {
  label: string;
  partTitle: string;
  chapters: readonly { num: string; title: string; description: string }[];
}) {
  return (
    <div className="ul-part ul-reveal">
      <div className="ul-part-header">
        <span className="ul-part-label">{label}</span>
        <div className="ul-part-title">{partTitle}</div>
      </div>
      <div className="ul-chapters">
        {chapters.map((ch) => (
          <div key={`${ch.num}-${ch.title}`} className="ul-chapter">
            <span className="ul-chapter-num">{ch.num || "\u00a0"}</span>
            <div className="ul-chapter-content">
              <div className="ul-chapter-title">{ch.title}</div>
              <div className="ul-chapter-desc">{ch.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function UnleashedPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".ul-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("ul-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("ul-visible");
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
    <main id="main-content" ref={mainRef} className="ul-page">
      {/* HERO */}
      <section className="ul-hero" aria-labelledby="unleashed-hero-heading">
        <div className="ul-hero-label">The Magnum Opus</div>
        <h1 id="unleashed-hero-heading">Unleashed</h1>
        <div className="ul-hero-subtitle">The Promethean Promise</div>
        <div className="ul-hero-author">
          by <span>Mark Hamilton</span>
        </div>
        <p className="ul-hero-desc">
          The complete delivery of the Unified Field of Conscious Civilization. The work that traces the arc of
          consciousness from the silence of the gods to the civilization that comes next.
        </p>
        <div className="ul-hero-rule" aria-hidden="true" />
        <div className="ul-hero-actions">
          <Link href={WP.unleashedDownload} className="ul-btn-gold">
            Download PDF
          </Link>
          <a href="#toc" className="ul-btn-light">
            View Table of Contents
          </a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ul-overview" aria-labelledby="unleashed-overview-heading">
        <div className="ul-overview-inner">
          <div className="ul-reveal">
            <span className="ul-section-label">About This Work</span>
            <h2 id="unleashed-overview-heading">
              The definitive work on consciousness and <em>civilization.</em>
            </h2>
            <p>
              Unleashed is the product of fifty years of independent research by Mark Hamilton. It is the first complete
              synthesis identifying the single structural pattern that has governed every empire, every religion, every
              economy, and every human destiny across all of recorded history.
            </p>
            <p>
              The work traces the full arc of conscious civilization: from the collapse of the bicameral mind and the
              silence of the gods, through Socrates, Plato, Aristotle, Alexander, Jesus, Augustine, the Dark Ages, the
              Renaissance, the Enlightenment, the century of blood, and the Prime Law, to Neovia and the civilization
              that comes next.
            </p>
            <p>
              <strong>It is available here in its entirety</strong> because this knowledge belongs to everyone. The
              correction that was interrupted 2,400 years ago when Aristotle&apos;s works were lost cannot be gated. It
              must reach the world.
            </p>
          </div>
          <div className="ul-reveal">
            <div className="ul-overview-stats">
              <div className="ul-stat">
                <span className="ul-stat-value">4</span>
                <span className="ul-stat-label">Parts</span>
              </div>
              <div className="ul-stat">
                <span className="ul-stat-value">24</span>
                <span className="ul-stat-label">Chapters</span>
              </div>
              <div className="ul-stat">
                <span className="ul-stat-value">2,400+</span>
                <span className="ul-stat-label">Years Covered</span>
              </div>
              <div className="ul-stat">
                <span className="ul-stat-value">50</span>
                <span className="ul-stat-label">Years of Research</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="ul-toc" id="toc" aria-labelledby="unleashed-toc-heading">
        <div className="ul-toc-header ul-reveal">
          <span className="ul-section-label">Table of Contents</span>
          <h2 id="unleashed-toc-heading">
            The complete arc of <em>conscious civilization.</em>
          </h2>
          <p>Four parts. Twenty-four chapters. From the origin of consciousness to the civilization that comes next.</p>
        </div>

        <TocPartSection
          label={INTRO_PART.label}
          partTitle={INTRO_PART.partTitle}
          chapters={INTRO_PART.chapters}
        />
        <TocPartSection label={PART_ONE.label} partTitle={PART_ONE.partTitle} chapters={PART_ONE.chapters} />
        <TocPartSection
          label={CLOSING_PART.label}
          partTitle={CLOSING_PART.partTitle}
          chapters={CLOSING_PART.chapters}
        />
      </section>

      {/* CONTEXT */}
      <section className="ul-context" aria-labelledby="unleashed-context-heading">
        <div className="ul-context-inner">
          <div className="ul-context-text ul-reveal">
            <span className="ul-section-label">Continue Exploring</span>
            <h2 id="unleashed-context-heading">
              Unleashed is the foundation. Here is what it <em>connects to.</em>
            </h2>
            <p>
              The Unified Field is the discovery. The Way is its personal expression. Neovia is its civilizational
              expression. Neothink is the operating system of the mind it frees. The Prime Law is its constitutional
              codification. The podcast delivers it in conversation.
            </p>
          </div>
          <div className="ul-reveal">
            <div className="ul-context-links">
              {CONTEXT_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="ul-context-link">
                  <h4>{link.title}</h4>
                  <p>{link.description}</p>
                  <span className="ul-link-arrow">{link.arrow}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
