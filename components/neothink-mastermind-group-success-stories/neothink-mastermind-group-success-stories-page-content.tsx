"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { parseAgencyPostInline } from "@/lib/agency-post-inline";
import {
  NMGS_HEADLINE,
  NMGS_IMAGE,
  NMGS_INTRO_PARAS,
  NMGS_SECTIONS,
} from "@/lib/neothink-mastermind-group-success-stories-data";
import { NMGS_FAQ } from "@/lib/neothink-mastermind-group-success-stories-faq";
import { WP } from "@/lib/wordpress-routes";

export function NeothinkMastermindGroupSuccessStoriesPageContent() {
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
        <header className="nu-hero" aria-labelledby="nmgs-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="nmgs-hero-heading">{NMGS_HEADLINE}</h1>
          {NMGS_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "nmgs-intro-lead" : undefined}>
              {parseAgencyPostInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={NMGS_IMAGE.src}
            alt={NMGS_IMAGE.alt}
            width={NMGS_IMAGE.width}
            height={NMGS_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {NMGS_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`nmgs-${sec.id}-h`}>
              <h2 id={`nmgs-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseAgencyPostInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="nmgs-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="nmgs-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.programs}>Programs</Link>, <Link href={WP.neothinkUniversity}>Neothink University</Link>
              , <Link href={WP.faq}>FAQ</Link>, <Link href={WP.contact}>Contact</Link>,{" "}
              <Link href={WP.truthAboutNeothinkSociety}>Truth about the Society</Link>.
            </p>
            <div className="nu-faq-grid">
              {NMGS_FAQ.map((item) => (
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
                <h3>Programs</h3>
                <p>Coaching and program families.</p>
                <Link href={WP.programs}>Programs</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Movement &amp; wealth themes</h3>
                <p>Financial independence article.</p>
                <Link href={WP.neothinkMovementFinancialIndependence}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>About</h3>
                <p>Society context on this site.</p>
                <Link href={WP.about}>About</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Reviews</h3>
                <p>Member stories hub.</p>
                <Link href={WP.neothinkReviews}>Reviews</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
