"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { parseAgencyPostInline } from "@/lib/agency-post-inline";
import {
  NMFI_HEADLINE,
  NMFI_IMAGE,
  NMFI_INTRO_PARAS,
  NMFI_SECTIONS,
} from "@/lib/neothink-movement-financial-independence-data";
import { NMFI_FAQ } from "@/lib/neothink-movement-financial-independence-faq";
import { WP } from "@/lib/wordpress-routes";

export function NeothinkMovementFinancialIndependencePageContent() {
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
        <header className="nu-hero" aria-labelledby="nmfi-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="nmfi-hero-heading">{NMFI_HEADLINE}</h1>
          {NMFI_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "nmfi-intro-lead" : undefined}>
              {parseAgencyPostInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={NMFI_IMAGE.src}
            alt={NMFI_IMAGE.alt}
            width={NMFI_IMAGE.width}
            height={NMFI_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {NMFI_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`nmfi-${sec.id}-h`}>
              <h2 id={`nmfi-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseAgencyPostInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="nmfi-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="nmfi-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.theMovement}>The Movement</Link>,{" "}
              <Link href={WP.programs}>Programs</Link>, <Link href={WP.valueCreator}>Value creator</Link>,{" "}
              <Link href={WP.faq}>FAQ</Link>, <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {NMFI_FAQ.map((item) => (
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
                <h3>The Movement</h3>
                <p>Civilizational framework on this site.</p>
                <Link href={WP.theMovement}>Open page</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Programs</h3>
                <p>Program families map.</p>
                <Link href={WP.programs}>Programs</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Neothink University myths</h3>
                <p>What people get wrong.</p>
                <Link href={WP.whatPeopleGetWrongNeothinkUniversity}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Value creator</h3>
                <p>Value-creation orientation.</p>
                <Link href={WP.valueCreator}>Value creator</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
