"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

import { WP } from "@/lib/wordpress-routes";

export type AwakeningArticleImage = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

export type AwakeningQuickAnswer = {
  readonly kicker: string;
  readonly title: string;
  /** Optional bold lead sentence shown before the rest of the answer. */
  readonly leadStrong?: string;
  /** Rest of the quick-answer body. May contain ReactNode (links, em, etc.). */
  readonly rest: ReactNode;
};

export type AwakeningFaqItem = {
  readonly question: string;
  readonly answer: ReactNode;
};

export type AwakeningRelatedCard = {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly external?: boolean;
  readonly linkLabel?: string;
};

export type NeothinkAwakeningArticleProps = {
  readonly slugPrefix: string;
  readonly headline: string;
  readonly introParas: readonly ReactNode[];
  readonly image: AwakeningArticleImage;
  readonly quickAnswer: AwakeningQuickAnswer;
  /** Optional YouTube video id. When present, an embedded nocookie iframe renders above the body. */
  readonly youtubeId?: string;
  readonly videoTitle?: string;
  /** Byline minutes-read copy (e.g. "12 min read"). */
  readonly minReadLabel: string;
  /** Pre-rewritten Elementor body HTML (after Quick Answer, before FAQ). */
  readonly bodyHtml: string;
  readonly faq: readonly AwakeningFaqItem[];
  /** Optional related-link lead text rendered above the FAQ grid (inline Links). */
  readonly faqLead?: ReactNode;
  readonly related: readonly AwakeningRelatedCard[];
};

/**
 * Shared Neothink Awakening article shell. Used by every migrated post in the
 * Neothink Awakening series (category id 80). Keeps hero / quick-answer / video /
 * body / FAQ / related layout identical across posts so the category hub and
 * internal cross-links stay coherent.
 */
export function NeothinkAwakeningArticle({
  slugPrefix,
  headline,
  introParas,
  image,
  quickAnswer,
  youtubeId,
  videoTitle,
  minReadLabel,
  bodyHtml,
  faq,
  faqLead,
  related,
}: NeothinkAwakeningArticleProps) {
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

  const heroId = `${slugPrefix}-hero-heading`;
  const introLeadId = `${slugPrefix}-intro-lead`;
  const quickTitleId = `${slugPrefix}-quick-title`;
  const faqHeadingId = `${slugPrefix}-faq-heading`;
  const embedUrl = youtubeId ? `https://www.youtube-nocookie.com/embed/${youtubeId}?rel=0` : undefined;

  return (
    <main id="main-content" ref={mainRef} className="nu-page shb-page">
      <article>
        <header className="nu-hero" aria-labelledby={heroId}>
          <div className="nu-hero-label">
            <Link
              href={WP.neothinkAwakeningCategory}
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
              Neothink Awakening
            </Link>
          </div>
          <h1 id={heroId}>{headline}</h1>
          {introParas.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? introLeadId : undefined}>
              {para}
            </p>
          ))}
          <p className="nu-awakening-byline nu-hero-sub">
            Based on{" "}
            <a href="https://markhamilton.co/" target="_blank" rel="noopener noreferrer">
              Mark Hamilton
            </a>{" "}
            · Published by{" "}
            <Link href={WP.home} className="nu-prose">
              Neothink Institute
            </Link>{" "}
            · {minReadLabel}
          </p>
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-awakening-quick nu-reveal">
          <p className="nu-awakening-kicker">{quickAnswer.kicker}</p>
          <h2 id={quickTitleId}>{quickAnswer.title}</h2>
          <p>
            {quickAnswer.leadStrong ? <strong>{quickAnswer.leadStrong}</strong> : null}
            {quickAnswer.rest}
          </p>
        </div>

        {embedUrl ? (
          <section className="nu-awakening-video nu-reveal" aria-label="Video">
            <div className="nu-awakening-video-frame">
              <iframe
                title={videoTitle || `${headline} — Mark Hamilton`}
                src={embedUrl}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </section>
        ) : null}

        <div
          className="nu-awakening-html nu-reveal"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

        <section className="nu-faq nu-reveal" aria-labelledby={faqHeadingId}>
          <div className="nu-faq-inner">
            <h2 id={faqHeadingId}>Frequently asked questions</h2>
            {faqLead ? <p className="nu-faq-lead">{faqLead}</p> : null}
            <div className="nu-faq-grid">
              {faq.map((item) => (
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
              {related.map((card) => (
                <div key={card.href} className="nu-secondary-card">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                  {card.external ? (
                    <a href={card.href} target="_blank" rel="noopener noreferrer">
                      {card.linkLabel || "Read article"}
                    </a>
                  ) : (
                    <Link href={card.href}>{card.linkLabel || "Read article"}</Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
