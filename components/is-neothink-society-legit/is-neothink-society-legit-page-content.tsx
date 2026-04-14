"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { parseAgencyPostInline } from "@/lib/agency-post-inline";
import {
  INSL_HEADLINE,
  INSL_IMAGE,
  INSL_INTRO_PARAS,
  INSL_SECTIONS,
} from "@/lib/is-neothink-society-legit-data";
import { INSL_FAQ } from "@/lib/is-neothink-society-legit-faq";
import { WP } from "@/lib/wordpress-routes";

export function IsNeothinkSocietyLegitPageContent() {
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
        <header className="nu-hero" aria-labelledby="insl-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="insl-hero-heading">{INSL_HEADLINE}</h1>
          {INSL_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "insl-intro-lead" : undefined}>
              {parseAgencyPostInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={INSL_IMAGE.src}
            alt={INSL_IMAGE.alt}
            width={INSL_IMAGE.width}
            height={INSL_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {INSL_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`insl-${sec.id}-h`}>
              <h2 id={`insl-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseAgencyPostInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="insl-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="insl-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.truthAboutNeothinkSociety}>Truth vs fiction</Link>,{" "}
              <Link href={WP.discernGenuineSecretSociety}>Genuine vs fraud</Link>,{" "}
              <Link href={WP.neothinkReviews}>Neothink Reviews</Link>, <Link href={WP.faq}>FAQ</Link>,{" "}
              <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {INSL_FAQ.map((item) => (
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
                <h3>Truth vs fiction</h3>
                <p>Reviews and misconceptions.</p>
                <Link href={WP.truthAboutNeothinkSociety}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Secret society myths</h3>
                <p>Label in context.</p>
                <Link href={WP.neothinkSocietyClearingMisunderstandings}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Neothink overview</h3>
                <p>Framework on this site.</p>
                <Link href={WP.neothink}>Neothink</Link>
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
