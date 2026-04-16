"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

import { WP } from "@/lib/wordpress-routes";

export type AgencyArticleImage = {
  readonly src: string;
  readonly alt: string;
  readonly width: number;
  readonly height: number;
};

export type AgencyArticleRelatedCard = {
  readonly title: string;
  readonly description: string;
  readonly href: string;
  readonly external?: boolean;
  readonly linkLabel?: string;
};

export type AgencyArticleProps = {
  readonly slugPrefix: string;
  readonly headline: string;
  readonly introParas: readonly ReactNode[];
  readonly image: AgencyArticleImage;
  readonly minReadLabel: string;
  /** Pre-rewritten body HTML (headings + paragraphs). */
  readonly bodyHtml: string;
  readonly related: readonly AgencyArticleRelatedCard[];
};

/**
 * Shared shell for agency-era Uncategorized posts (pre-2025-12-01). Preserves
 * the original SEO structure (h1, h2 headings, paragraphs) while giving the
 * article the site's typography and related-links context for a cohesive feel.
 */
export function AgencyArticle({
  slugPrefix,
  headline,
  introParas,
  image,
  minReadLabel,
  bodyHtml,
  related,
}: AgencyArticleProps) {
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

  return (
    <main id="main-content" ref={mainRef} className="nu-page shb-page">
      <article>
        <header className="nu-hero" aria-labelledby={heroId}>
          <div className="nu-hero-label">
            <span
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
              }}
            >
              Perspective
            </span>
          </div>
          <h1 id={heroId}>{headline}</h1>
          {introParas.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? introLeadId : undefined}>
              {para}
            </p>
          ))}
          <p className="nu-awakening-byline nu-hero-sub">
            Published by{" "}
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

        <div
          className="nu-awakening-html nu-reveal"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />

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
