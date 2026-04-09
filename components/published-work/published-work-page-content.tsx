"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { WP } from "@/lib/wordpress-routes";

import {
  AI_ARTICLES,
  CIVILIZATION_ARTICLES,
  FILTER_LINKS,
  type PwArticle,
  NEOVIA_ARTICLES,
  NEOTHINK_ARTICLES,
  THE_WAY_ARTICLES,
  UNIFIED_FIELD_ARTICLES,
} from "./published-work-data";

function ArticleCard({ tag, title, description, footer }: PwArticle) {
  return (
    <div className="pw-article">
      <span className="pw-article-tag">{tag}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="pw-article-footer">{footer}</div>
    </div>
  );
}

function ArticleSection({
  id,
  titleId,
  title,
  countLabel,
  articles,
}: {
  id: string;
  titleId: string;
  title: string;
  countLabel: string;
  articles: PwArticle[];
}) {
  return (
    <section className="pw-section" id={id} aria-labelledby={titleId}>
      <div className="pw-section-header pw-reveal">
        <h2 id={titleId}>{title}</h2>
        <span className="pw-count">{countLabel}</span>
      </div>
      <div className="pw-articles-grid">
        {articles.map((a) => (
          <ArticleCard key={a.title} {...a} />
        ))}
      </div>
    </section>
  );
}

export function PublishedWorkPageContent() {
  const mainRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<(typeof FILTER_LINKS)[number]["id"]>("all");

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".pw-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("pw-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("pw-visible");
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
    <main id="main-content" ref={mainRef} className="pw-page">
      <section className="pw-hero" aria-labelledby="pw-hero-heading">
        <div className="pw-hero-label">From the Institute</div>
        <h1 id="pw-hero-heading">
          Published <em>Work</em>
        </h1>
        <p className="pw-hero-sub">
          Research, analysis, and original scholarship from the Neothink Institute. The intellectual foundation behind
          the Unified Field, Neovia, The Way, and Neothink.
        </p>
      </section>

      <nav className="pw-filter" aria-label="Browse published work by category">
        <div className="pw-filter-inner">
          <span className="pw-filter-label">Browse by</span>
          <div className="pw-filter-tags">
            {FILTER_LINKS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`pw-filter-tag ${activeFilter === item.id ? "pw-active" : ""}`}
                onClick={() => setActiveFilter(item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section className="pw-featured" aria-labelledby="pw-featured-heading">
        <div className="pw-featured-inner pw-reveal">
          <div className="pw-featured-text">
            <h2 id="pw-featured-heading">Unleashed</h2>
            <span className="pw-featured-subtitle">The Promethean Promise</span>
            <p>
              Mark Hamilton&apos;s magnum opus. The complete delivery of the Unified Field of Conscious Civilization. The
              full arc from the bicameral collapse through the Prime Law to Neovia. The work that changes how you see
              civilization, consciousness, and what humanity is capable of when the cage finally comes off.
            </p>
            <span className="pw-featured-author">
              by <span>Mark Hamilton</span> · Foundational
            </span>
            <Link href={WP.unleashed} className="pw-btn-gold">
              Learn More
            </Link>
            <Link href={WP.unleashedDownload} className="pw-btn-light">
              Download PDF
            </Link>
          </div>
          <div className="pw-featured-visual">
            <div className="pw-featured-visual-title">Unleashed</div>
            <div className="pw-featured-visual-sub">The Promethean Promise</div>
            <div className="pw-featured-visual-stats">
              <div className="pw-fv-stat">
                <strong>24</strong>
                <span>Chapters</span>
              </div>
              <div className="pw-fv-stat">
                <strong>2,400+</strong>
                <span>Years Covered</span>
              </div>
              <div className="pw-fv-stat">
                <strong>50</strong>
                <span>Years of Research</span>
              </div>
              <div className="pw-fv-stat">
                <strong>4</strong>
                <span>Parts</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ArticleSection
        id="uf-section"
        titleId="pw-uf-heading"
        title="The Unified Field"
        countLabel="Civilizational Theory & History"
        articles={UNIFIED_FIELD_ARTICLES}
      />

      <ArticleSection
        id="neovia-section"
        titleId="pw-neovia-heading"
        title="Neovia"
        countLabel="Civilizational Design & Vision"
        articles={NEOVIA_ARTICLES}
      />

      <ArticleSection
        id="neothink-section"
        titleId="pw-neothink-heading"
        title="Neothink"
        countLabel="Consciousness & Cognition"
        articles={NEOTHINK_ARTICLES}
      />

      <ArticleSection
        id="way-section"
        titleId="pw-way-heading"
        title="The Way"
        countLabel="Personal Transformation"
        articles={THE_WAY_ARTICLES}
      />

      <ArticleSection
        id="ai-section"
        titleId="pw-ai-heading"
        title="AI & Existential Risk"
        countLabel="Current Analysis"
        articles={AI_ARTICLES}
      />

      <ArticleSection
        id="civ-section"
        titleId="pw-civ-heading"
        title="Civilization"
        countLabel="Broad Analysis"
        articles={CIVILIZATION_ARTICLES}
      />

      <section className="pw-manuscripts" aria-labelledby="pw-manuscripts-heading">
        <div className="pw-manuscripts-inner">
          <div className="pw-reveal">
            <span className="pw-section-label">The Complete Library</span>
            <h2 id="pw-manuscripts-heading">
              Mark Hamilton&apos;s published <em>manuscripts.</em>
            </h2>
            <p>
              Beyond Unleashed, Mark Hamilton has authored millions of words across five decades of research. The
              complete Neothink Corpus spans psychology, economics, political theory, civilizational design, romantic
              love, value creation, and the full architecture of integrated consciousness.
            </p>
            <Link href={WP.manuscripts} className="pw-btn-primary">
              Explore the Manuscripts
            </Link>
          </div>
          <div className="pw-reveal">
            <div className="pw-manuscripts-list">
              <Link href={WP.unleashed} className="pw-manuscript">
                <h4>Unleashed: The Promethean Promise</h4>
                <p>The Unified Field of Conscious Civilization. The magnum opus.</p>
                <span className="pw-ms-arrow">Read →</span>
              </Link>
              <Link href={WP.manuscripts} className="pw-manuscript">
                <h4>The Neothink Manuscripts</h4>
                <p>The foundational body of work on integrated thinking, value creation, and the operating system of the uncovered mind.</p>
                <span className="pw-ms-arrow">Explore →</span>
              </Link>
              <Link href={WP.manuscripts} className="pw-manuscript">
                <h4>The Neo-Tech Discovery</h4>
                <p>The original identification of mysticism as the root disease and integrated honesty as the cure.</p>
                <span className="pw-ms-arrow">Explore →</span>
              </Link>
              <Link href={WP.manuscripts} className="pw-manuscript">
                <h4>The Prime Law Papers</h4>
                <p>The complete argument for the prohibition of initiated force as civilizational architecture.</p>
                <span className="pw-ms-arrow">Explore →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
