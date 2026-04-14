"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { parseAgencyPostInline } from "@/lib/agency-post-inline";
import {
  WPGU_HEADLINE,
  WPGU_IMAGE,
  WPGU_INTRO_PARAS,
  WPGU_SECTIONS,
} from "@/lib/what-people-get-wrong-neothink-university-data";
import { WPGU_FAQ } from "@/lib/what-people-get-wrong-neothink-university-faq";
import { WP } from "@/lib/wordpress-routes";

export function WhatPeopleGetWrongNeothinkUniversityPageContent() {
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
        <header className="nu-hero" aria-labelledby="wpgu-hero-heading">
          <div className="nu-hero-label">Article · Neothink Society</div>
          <h1 id="wpgu-hero-heading">{WPGU_HEADLINE}</h1>
          {WPGU_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "wpgu-intro-lead" : undefined}>
              {parseAgencyPostInline(para)}
            </p>
          ))}
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={WPGU_IMAGE.src}
            alt={WPGU_IMAGE.alt}
            width={WPGU_IMAGE.width}
            height={WPGU_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-about-inner nu-prose shb-body">
          {WPGU_SECTIONS.map((sec) => (
            <section key={sec.id} id={sec.id} className="shb-section nu-reveal" aria-labelledby={`wpgu-${sec.id}-h`}>
              <h2 id={`wpgu-${sec.id}-h`}>{sec.title}</h2>
              {sec.paragraphs.map((p, pi) => (
                <p key={`${sec.id}-${pi}`}>{parseAgencyPostInline(p)}</p>
              ))}
            </section>
          ))}
        </div>

        <section className="nu-faq nu-reveal" aria-labelledby="wpgu-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="wpgu-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.neothinkUniversity}>Neothink University</Link>,{" "}
              <Link href={WP.programs}>Programs</Link>,{" "}
              <Link href={WP.neothinkMovementFinancialIndependence}>Movement &amp; financial independence</Link>,{" "}
              <Link href={WP.faq}>FAQ</Link>, <Link href={WP.contact}>Contact</Link>.
            </p>
            <div className="nu-faq-grid">
              {WPGU_FAQ.map((item) => (
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
                <h3>Neothink University</h3>
                <p>Hub on this site.</p>
                <Link href={WP.neothinkUniversity}>Open page</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Financial independence</h3>
                <p>Movement-oriented article.</p>
                <Link href={WP.neothinkMovementFinancialIndependence}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Truth about the Society</h3>
                <p>Reviews and myths.</p>
                <Link href={WP.truthAboutNeothinkSociety}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Free courses</h3>
                <p>Public on-ramp.</p>
                <Link href={WP.freeCourses}>Free courses</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
