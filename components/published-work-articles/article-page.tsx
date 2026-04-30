"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import "./article-page.css";

export type ArticleFAQ = {
  question: string;
  answer: string;
};

export type ArticleFurtherCard = {
  href: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type ArticleRelatedDomain = {
  href: string;
  label: string;
};

export type ArticlePageProps = {
  /** Article title rendered as <h1>. */
  title: string;
  /** One-line italicized tagline below the title. */
  tagline: string;
  /** Domain display name (e.g. "Consciousness and the Mind"). */
  domain: string;
  /** Domain landing-page path (e.g. "/published-work/consciousness-and-the-mind"). */
  domainPath: string;
  /** Byline date display (e.g. "April 2026"). */
  publishedDateDisplay: string;
  /** Body HTML rendered into the narrow column via dangerouslySetInnerHTML. */
  bodyHtml: string;
  /** Optional Common Questions block (rendered visually + matches FAQPage JSON-LD). */
  faq?: ArticleFAQ[];
  /** Further Reading card grid. */
  furtherReading: ArticleFurtherCard[];
  /** Related domain links shown below the card grid. */
  relatedDomains: ArticleRelatedDomain[];
};

export function ArticlePage({
  title,
  tagline,
  domain,
  domainPath,
  publishedDateDisplay,
  bodyHtml,
  faq,
  furtherReading,
  relatedDomains,
}: ArticlePageProps) {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".pwa-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("pwa-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("pwa-visible");
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
    <main ref={rootRef} id="main-content" className="pwa-page">
      <article>
        <section className="pwa-hero">
          <span className="pwa-domain-tag">
            <Link href={domainPath}>{domain}</Link>
          </span>
          <h1>{title}</h1>
          <p className="pwa-tagline">{tagline}</p>
          <p className="pwa-byline">
            By <Link href="/mark-hamilton">Mark Hamilton</Link>, Founder,{" "}
            <Link href="/">Neothink Institute</Link> &middot; {publishedDateDisplay}
          </p>
        </section>

        <section className="pwa-body">
          <div
            className="pwa-narrow"
            dangerouslySetInnerHTML={{ __html: bodyHtml }}
          />
        </section>

        {faq && faq.length > 0 ? (
          <section className="pwa-faq pwa-reveal">
            <div className="pwa-narrow">
              <div className="pwa-section-head">
                <span className="pwa-eyebrow">Common Questions</span>
                <h2>Common Questions</h2>
              </div>
              {faq.map((item, i) => (
                <div key={i} className="pwa-qa">
                  <h3>{item.question}</h3>
                  <div dangerouslySetInnerHTML={{ __html: item.answer }} />
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <section className="pwa-further pwa-reveal">
          <div className="pwa-inner">
            <div className="pwa-section-head">
              <span className="pwa-eyebrow">Further Reading</span>
              <h2>Continue</h2>
              <p>
                The framework introduced here is one piece of a larger
                synthesis. The dedicated pages below carry the deeper
                architecture.
              </p>
            </div>
            <div className="pwa-grid">
              {furtherReading.map((card) => (
                <Link key={card.href} href={card.href} className="pwa-card">
                  <span className="pwa-eyebrow">{card.eyebrow}</span>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </Link>
              ))}
            </div>
            {relatedDomains.length > 0 ? (
              <div className="pwa-domains-row">
                <span className="pwa-domains-label">Related Domains</span>
                {relatedDomains.map((d) => (
                  <Link key={d.href} href={d.href}>
                    {d.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      </article>
    </main>
  );
}
