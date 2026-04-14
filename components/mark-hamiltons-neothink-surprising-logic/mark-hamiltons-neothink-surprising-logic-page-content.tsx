"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { parseAgencyPostInline } from "@/lib/agency-post-inline";
import {
  MHNSL_HEADLINE,
  MHNSL_IMAGE,
  MHNSL_INTRO_PARAS,
  MHNSL_SECTIONS,
} from "@/lib/mark-hamiltons-neothink-surprising-logic-data";
import { MHNSL_FAQ } from "@/lib/mark-hamiltons-neothink-surprising-logic-faq";
import { WP } from "@/lib/wordpress-routes";

export function MarkHamiltonsNeothinkSurprisingLogicPageContent() {
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
        <header className="nu-hero" aria-labelledby="mhnsl-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="mhnsl-hero-heading">{MHNSL_HEADLINE}</h1>
          {MHNSL_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "mhnsl-intro-lead" : undefined}>
              {parseAgencyPostInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={MHNSL_IMAGE.src}
            alt={MHNSL_IMAGE.alt}
            width={MHNSL_IMAGE.width}
            height={MHNSL_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {MHNSL_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`mhnsl-${sec.id}-h`}>
              <h2 id={`mhnsl-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseAgencyPostInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="mhnsl-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="mhnsl-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.neothink}>Neothink overview</Link>,{" "}
              <Link href={WP.markHamilton}>Mark Hamilton</Link>,{" "}
              <Link href={WP.manuscripts}>Manuscripts</Link>, <Link href={WP.faq}>FAQ</Link>,{" "}
              <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {MHNSL_FAQ.map((item) => (
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
                <h3>Is Neothink self-help?</h3>
                <p>Books and programs framing.</p>
                <Link href={WP.isNeothinkSelfHelpBook}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Neothink framework</h3>
                <p>Operating system overview.</p>
                <Link href={WP.neothink}>Neothink</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Programs</h3>
                <p>Program families map.</p>
                <Link href={WP.programs}>Programs</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Secret society myths</h3>
                <p>Label vs described mission.</p>
                <Link href={WP.neothinkSocietyClearingMisunderstandings}>Read article</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
