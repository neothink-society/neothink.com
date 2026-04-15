"use client";

import Link from "next/link";
import { type ReactNode, useEffect, useRef } from "react";

export type PhilosophyFaqItem = { readonly question: string; readonly answer: string };

export type PhilosophyRelatedCard = {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly cta: string;
};

type Props = {
  /** `main` id prefix e.g. `mhs` → `#mhs-intro-lead` */
  idPrefix: string;
  seriesLabel: string;
  seriesHref: string;
  heading: string;
  /** Plain-text intro paragraphs (use instead of {@link introHtml}). */
  introParagraphs?: readonly string[];
  /** Single trusted HTML block for intro (e.g. contains &lt;strong&gt;). */
  introHtml?: string;
  readTime: string;
  quickKicker: string;
  quickTitle: string;
  /** Trusted HTML from WordPress quick-answer block */
  quickAnswerHtml: string;
  /** Omit both to hide the video block (e.g. Neothink Concepts articles with no embed). */
  youtubeId?: string;
  videoTitle?: string;
  bodyHtml: string;
  faqHeadingId: string;
  faqLead: ReactNode;
  faqItems: readonly PhilosophyFaqItem[];
  relatedCards: readonly PhilosophyRelatedCard[];
};

export function NeothinkPhilosophyLongformPageContent({
  idPrefix,
  seriesLabel,
  seriesHref,
  heading,
  introParagraphs = [],
  introHtml,
  readTime,
  quickKicker,
  quickTitle,
  quickAnswerHtml,
  youtubeId,
  videoTitle,
  bodyHtml,
  faqHeadingId,
  faqLead,
  faqItems,
  relatedCards,
}: Props) {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".nu-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("nu-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("nu-visible"), 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const heroHeadingId = `${idPrefix}-hero-heading`;
  const introLeadId = `${idPrefix}-intro-lead`;
  const quickTitleId = `${idPrefix}-quick-title`;

  return (
    <main id="main-content" ref={mainRef} className="nu-page shb-page">
      <article>
        <header className="nu-hero" aria-labelledby={heroHeadingId}>
          <div className="nu-hero-label">
            <a
              href={seriesHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#d4a853 0%,#f5d799 50%,#d4a853 100%)",
                color: "#050505",
                padding: "8px 20px",
                borderRadius: 24,
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                textDecoration: "none",
              }}
            >
              {seriesLabel}
            </a>
          </div>
          <h1 id={heroHeadingId}>{heading}</h1>
          {introHtml ? (
            <div
              id={introLeadId}
              className="nu-hero-sub nu-prose"
              dangerouslySetInnerHTML={{ __html: introHtml }}
            />
          ) : (
            introParagraphs.map((para, idx) => (
              <p key={idx} className="nu-hero-sub" id={idx === 0 ? introLeadId : undefined}>
                {para}
              </p>
            ))
          )}
          <p className="nu-awakening-byline nu-hero-sub">
            Based on{" "}
            <a href="https://markhamilton.co/" target="_blank" rel="noopener noreferrer">
              Mark Hamilton
            </a>{" "}
            · Published by{" "}
            <Link href="/" className="nu-prose">
              Neothink Institute
            </Link>{" "}
            · {readTime}
          </p>
        </header>

        <div className="nu-awakening-quick nu-reveal">
          <p className="nu-awakening-kicker">{quickKicker}</p>
          <h2 id={quickTitleId}>{quickTitle}</h2>
          <div className="nu-prose" dangerouslySetInnerHTML={{ __html: quickAnswerHtml }} />
        </div>

        {youtubeId ? (
          <section className="nu-awakening-video nu-reveal" aria-label="Video">
            <div className="nu-awakening-video-frame">
              <iframe
                title={videoTitle ?? "Video"}
                src={`https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        ) : null}

        <div className="nu-awakening-html nu-reveal" dangerouslySetInnerHTML={{ __html: bodyHtml }} />

        <section className="nu-faq nu-reveal" aria-labelledby={faqHeadingId}>
          <div className="nu-faq-inner">
            <h2 id={faqHeadingId}>Frequently asked questions</h2>
            <p className="nu-faq-lead">{faqLead}</p>
            <div className="nu-faq-grid">
              {faqItems.map((item) => (
                <article key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nu-secondary nu-reveal" aria-label="Related on this site">
          <div className="nu-secondary-inner">
            <h2 className="nu-secondary-lead" style={{ marginBottom: "1rem" }}>
              Related
            </h2>
            <div className="nu-secondary-grid">
              {relatedCards.map((c) => (
                <div key={c.href} className="nu-secondary-card">
                  <h3>{c.title}</h3>
                  <p>{c.description}</p>
                  <Link href={c.href}>{c.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
