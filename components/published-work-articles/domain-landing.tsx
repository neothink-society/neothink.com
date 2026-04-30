"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import "./domain-landing.css";

export type DomainFramework = {
  /** Optional href; pass `null` for upcoming/placeholder frameworks. */
  href: string | null;
  title: string;
  description: string;
};

export type DomainArticle = {
  /** Pass `null` for placeholder/upcoming article cards. */
  href: string | null;
  tag: string;
  title: string;
  description: string;
};

export type DomainRelatedLink = {
  href: string;
  label: string;
};

export type DomainLandingProps = {
  /** Domain title (h1). */
  domainName: string;
  /** Lead paragraph below h1, displayed in serif. */
  intro: string;
  /** "What This Domain Covers" section. 4 to 6 short bullet items. */
  coverage: string[];
  /** Optional intro paragraph for the coverage section. */
  coverageIntro?: string;
  /** "Key Frameworks" — 3 to 5 framework cards. */
  frameworks: DomainFramework[];
  /** Optional intro paragraph for the frameworks section. */
  frameworksIntro?: string;
  /** "Selected Articles" — 3 to 6 article cards (some may be placeholders with href=null). */
  articles: DomainArticle[];
  /** Optional intro paragraph for the articles section. */
  articlesIntro?: string;
  /** "Related Domains" links shown at the bottom. */
  relatedDomains: DomainRelatedLink[];
  /** Optional intro paragraph for the related domains section. */
  relatedDomainsIntro?: string;
};

export function DomainLandingPage({
  domainName,
  intro,
  coverage,
  coverageIntro,
  frameworks,
  frameworksIntro,
  articles,
  articlesIntro,
  relatedDomains,
  relatedDomainsIntro,
}: DomainLandingProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".pwd-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("pwd-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("pwd-visible");
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
    <main ref={rootRef} id="main-content" className="pwd-page">
      <section className="pwd-hero">
        <div className="pwd-breadcrumb">
          <Link href="/published-work">Published Work</Link>
        </div>
        <h1>{domainName}</h1>
        <p className="pwd-intro">{intro}</p>
      </section>

      <section className="pwd-coverage pwd-reveal">
        <div className="pwd-inner">
          <div className="pwd-section-head">
            <span className="pwd-eyebrow">What This Domain Covers</span>
            <h2>The Lines of Inquiry</h2>
            {coverageIntro ? <p>{coverageIntro}</p> : null}
          </div>
          <ul className="pwd-coverage-list">
            {coverage.map((item, i) => (
              <li key={i} className="pwd-coverage-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pwd-frameworks pwd-reveal">
        <div className="pwd-inner">
          <div className="pwd-section-head">
            <span className="pwd-eyebrow">Core Contributions</span>
            <h2>Key Frameworks</h2>
            {frameworksIntro ? <p>{frameworksIntro}</p> : null}
          </div>
          <div className="pwd-fw-grid">
            {frameworks.map((fw, i) =>
              fw.href ? (
                <Link key={i} href={fw.href} className="pwd-fw-card">
                  <h3>{fw.title}</h3>
                  <p>{fw.description}</p>
                </Link>
              ) : (
                <div key={i} className="pwd-fw-card">
                  <h3>{fw.title}</h3>
                  <p>{fw.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="pwd-articles pwd-reveal">
        <div className="pwd-inner">
          <div className="pwd-section-head">
            <span className="pwd-eyebrow">Published Work</span>
            <h2>Selected Articles</h2>
            {articlesIntro ? <p>{articlesIntro}</p> : null}
          </div>
          <div className="pwd-a-grid">
            {articles.map((a, i) =>
              a.href ? (
                <Link key={i} href={a.href} className="pwd-a-card">
                  <span className="pwd-a-card-tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </Link>
              ) : (
                <div key={i} className="pwd-a-card" data-placeholder="true">
                  <span className="pwd-a-card-tag">{a.tag}</span>
                  <h3>{a.title}</h3>
                  <p>{a.description}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      <section className="pwd-related pwd-reveal">
        <div className="pwd-inner">
          <span className="pwd-eyebrow">Continue Exploring</span>
          <h2>Related Domains</h2>
          {relatedDomainsIntro ? <p>{relatedDomainsIntro}</p> : null}
          <div className="pwd-related-links">
            {relatedDomains.map((d) => (
              <Link key={d.href} href={d.href}>
                {d.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
