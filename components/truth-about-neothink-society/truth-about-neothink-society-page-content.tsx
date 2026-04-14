"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { parseAgencyPostInline } from "@/lib/agency-post-inline";
import {
  TATNS_HEADLINE,
  TATNS_IMAGE,
  TATNS_INTRO_PARAS,
  TATNS_SECTIONS,
} from "@/lib/truth-about-neothink-society-data";
import { TATNS_FAQ } from "@/lib/truth-about-neothink-society-faq";
import { WP } from "@/lib/wordpress-routes";

export function TruthAboutNeothinkSocietyPageContent() {
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
            window.setTimeout(() => {
              entry.target.classList.add("nu-visible");
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
    <main id="main-content" ref={mainRef} className="nu-page shb-page">
      <article>
        <header className="nu-hero" aria-labelledby="tatns-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="tatns-hero-heading">{TATNS_HEADLINE}</h1>
          {TATNS_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "tatns-intro-lead" : undefined}>
              {parseAgencyPostInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={TATNS_IMAGE.src}
            alt={TATNS_IMAGE.alt}
            width={TATNS_IMAGE.width}
            height={TATNS_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {TATNS_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`tatns-${sec.id}-h`}>
              <h2 id={`tatns-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseAgencyPostInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="tatns-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="tatns-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.isNeothinkSocietyLegit}>Is it legit?</Link>,{" "}
              <Link href={WP.neothinkSocietyClearingMisunderstandings}>Secret society myths</Link>,{" "}
              <Link href={WP.neothinkReviews}>Neothink Reviews</Link>, <Link href={WP.faq}>FAQ</Link>,{" "}
              <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {TATNS_FAQ.map((item) => (
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
                <h3>Is it legit?</h3>
                <p>Companion article on legitimacy framing.</p>
                <Link href={WP.isNeothinkSocietyLegit}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Clearing misunderstandings</h3>
                <p>The “secret society” label in context.</p>
                <Link href={WP.neothinkSocietyClearingMisunderstandings}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Genuine vs fraud</h3>
                <p>Evaluating offers.</p>
                <Link href={WP.discernGenuineSecretSociety}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Programs</h3>
                <p>Program families map.</p>
                <Link href={WP.programs}>Programs</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
