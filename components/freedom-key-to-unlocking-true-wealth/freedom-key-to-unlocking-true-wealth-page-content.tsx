"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { FREEDOM_KEY_BODY_HTML } from "@/lib/freedom-key-to-unlocking-true-wealth-body-html";
import {
  FKTUW_HEADLINE,
  FKTUW_IMAGE,
  FKTUW_INTRO_PARAS,
  FKTUW_QUICK_ANSWER,
  FKTUW_YOUTUBE_ID,
} from "@/lib/freedom-key-to-unlocking-true-wealth-data";
import { FKTUW_FAQ } from "@/lib/freedom-key-to-unlocking-true-wealth-faq";
import { parseAgencyPostInline } from "@/lib/agency-post-inline";
import { WP } from "@/lib/wordpress-routes";

export function FreedomKeyToUnlockingTrueWealthPageContent() {
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

  const embedUrl = `https://www.youtube-nocookie.com/embed/${FKTUW_YOUTUBE_ID}?rel=0`;

  return (
    <main id="main-content" ref={mainRef} className="nu-page shb-page">
      <article>
        <header className="nu-hero" aria-labelledby="fktuw-hero-heading">
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
          <h1 id="fktuw-hero-heading">{FKTUW_HEADLINE}</h1>
          {FKTUW_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "fktuw-intro-lead" : undefined}>
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
            · 11 min read
          </p>
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={FKTUW_IMAGE.src}
            alt={FKTUW_IMAGE.alt}
            width={FKTUW_IMAGE.width}
            height={FKTUW_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-awakening-quick nu-reveal">
          <p className="nu-awakening-kicker">{FKTUW_QUICK_ANSWER.kicker}</p>
          <h2 id="fktuw-quick-title">{FKTUW_QUICK_ANSWER.title}</h2>
          <p>
            <strong>{FKTUW_QUICK_ANSWER.leadStrong}</strong>
            {parseAgencyPostInline(FKTUW_QUICK_ANSWER.rest)}
          </p>
        </div>

        <section className="nu-awakening-video nu-reveal" aria-label="Video">
          <div className="nu-awakening-video-frame">
            <iframe
              title="Freedom and true wealth — Mark Hamilton"
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>

        <div
          className="nu-awakening-html nu-reveal"
          dangerouslySetInnerHTML={{ __html: FREEDOM_KEY_BODY_HTML }}
        />

        <section className="nu-faq nu-reveal" aria-labelledby="fktuw-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="fktuw-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.primeLaw}>Prime Law</Link>, <Link href={WP.immortalis}>Immortalis</Link>,{" "}
              <Link href={WP.twelveVisionsParty}>Twelve Visions Party</Link>,{" "}
              <Link href={WP.reprogramMindToBeRich}>Reprogram your mind to be rich</Link>,{" "}
              <Link href={WP.freedomFromRights}>Freedom from rights</Link> (lesson).
            </p>
            <div className="nu-faq-grid">
              {FKTUW_FAQ.map((item) => (
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
              <div className="nu-secondary-card">
                <h3>Reprogram your mind</h3>
                <p>Awakening companion piece.</p>
                <Link href={WP.reprogramMindToBeRich}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Movement &amp; independence</h3>
                <p>Themes article.</p>
                <Link href={WP.neothinkMovementFinancialIndependence}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Prime Law</h3>
                <p>Institute hub.</p>
                <Link href={WP.primeLaw}>Prime Law</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>The Movement</h3>
                <p>Framework overview.</p>
                <Link href={WP.theMovement}>The Movement</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
