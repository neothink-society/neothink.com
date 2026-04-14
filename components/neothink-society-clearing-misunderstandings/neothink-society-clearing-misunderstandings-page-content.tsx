"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { parseAgencyPostInline } from "@/lib/agency-post-inline";
import {
  NSCM_HEADLINE,
  NSCM_IMAGE,
  NSCM_INTRO_PARAS,
  NSCM_SECTIONS,
} from "@/lib/neothink-society-clearing-misunderstandings-data";
import { NSCM_FAQ } from "@/lib/neothink-society-clearing-misunderstandings-faq";
import { WP } from "@/lib/wordpress-routes";

export function NeothinkSocietyClearingMisunderstandingsPageContent() {
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
        <header className="nu-hero" aria-labelledby="nscm-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="nscm-hero-heading">{NSCM_HEADLINE}</h1>
          {NSCM_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "nscm-intro-lead" : undefined}>
              {parseAgencyPostInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={NSCM_IMAGE.src}
            alt={NSCM_IMAGE.alt}
            width={NSCM_IMAGE.width}
            height={NSCM_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {NSCM_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`nscm-${sec.id}-h`}>
              <h2 id={`nscm-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseAgencyPostInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="nscm-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="nscm-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.secretSocietyDiffers}>Neothink vs other “secret groups”</Link>,{" "}
              <Link href={WP.discernGenuineSecretSociety}>Genuine vs fraud</Link>,{" "}
              <Link href={WP.secretSocietyInvitationLetter}>Invitation letters</Link>,{" "}
              <Link href={WP.faq}>FAQ</Link>, <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {NSCM_FAQ.map((item) => (
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
                <h3>Neothink vs other secret groups</h3>
                <p>Longer comparison article.</p>
                <Link href={WP.secretSocietyDiffers}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Invitation letter guide</h3>
                <p>What an invitation can mean.</p>
                <Link href={WP.secretSocietyInvitationLetter}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Secret meetings</h3>
                <p>How members approach gatherings.</p>
                <Link href={WP.joinNeothinkSocietySecretMeetings}>Read article</Link>
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
