"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  MOVEMENT_CLOSING,
  MOVEMENT_COLLECTIVE,
  MOVEMENT_FRAMEWORK_PARAGRAPHS,
  MOVEMENT_FRAMEWORK_TITLE,
  MOVEMENT_HERO_IMAGE,
  MOVEMENT_INDIVIDUAL,
  MOVEMENT_INTRO,
  MOVEMENT_RELATED,
  MOVEMENT_RELATED_TITLE,
  MOVEMENT_TWO_FOLD_TITLE,
} from "@/lib/the-movement-data";

export function TheMovementPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page mv-page">
      <section className="nu-hero" aria-labelledby="mv-hero-heading">
        <div className="nu-hero-label">Neothink Institute</div>
        <h1 id="mv-hero-heading">
          The <em>movement</em>
        </h1>
        <p className="nu-hero-sub" id="mv-hero-sub">
          {MOVEMENT_INTRO}
        </p>
      </section>

      <section className="nu-intro" aria-labelledby="mv-visual-heading">
        <div className="nu-intro-inner mv-intro-visual">
          <h2 id="mv-visual-heading" className="mv-sr-only">
            Institute banner
          </h2>
          <div className="mv-hero-image-wrap nu-reveal">
            <Image
              src={MOVEMENT_HERO_IMAGE.src}
              alt={MOVEMENT_HERO_IMAGE.alt}
              width={MOVEMENT_HERO_IMAGE.width}
              height={MOVEMENT_HERO_IMAGE.height}
              className="mv-hero-image"
              sizes="(max-width: 900px) 100vw, 1160px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="nu-about" aria-labelledby="mv-two-fold-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="mv-two-fold-heading">{MOVEMENT_TWO_FOLD_TITLE}</h2>
          <div className="mv-journeys">
            <article className="mv-journey" aria-labelledby="mv-individual-heading">
              <p className="mv-journey-eyebrow">{MOVEMENT_INDIVIDUAL.eyebrow}</p>
              <h3 id="mv-individual-heading" className="mv-journey-title">
                {MOVEMENT_INDIVIDUAL.title}
              </h3>
              {MOVEMENT_INDIVIDUAL.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="mv-journey-links">
                {MOVEMENT_INDIVIDUAL.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="mv-inline-link">
                      {item.cta}
                    </Link>
                    <span className="mv-journey-link-note"> {item.note}</span>
                  </li>
                ))}
              </ul>
            </article>
            <article className="mv-journey mv-journey-alt" aria-labelledby="mv-collective-heading">
              <p className="mv-journey-eyebrow">{MOVEMENT_COLLECTIVE.eyebrow}</p>
              <h3 id="mv-collective-heading" className="mv-journey-title">
                {MOVEMENT_COLLECTIVE.title}
              </h3>
              {MOVEMENT_COLLECTIVE.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <ul className="mv-journey-links">
                {MOVEMENT_COLLECTIVE.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="mv-inline-link">
                      {item.cta}
                    </Link>
                    <span className="mv-journey-link-note"> {item.note}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="nu-about mv-stone" aria-labelledby="mv-framework-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="mv-framework-heading">{MOVEMENT_FRAMEWORK_TITLE}</h2>
          {MOVEMENT_FRAMEWORK_PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="nu-about" aria-labelledby="mv-related-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="mv-related-heading">{MOVEMENT_RELATED_TITLE}</h2>
          <ul className="mv-resource-list">
            {MOVEMENT_RELATED.map((r) => (
              <li key={r.href}>
                <strong>{r.title}:</strong> {r.body}{" "}
                <Link href={r.href} className="mv-inline-link">
                  {r.cta}
                </Link>
                .
              </li>
            ))}
          </ul>
          <p>{MOVEMENT_CLOSING}</p>
        </div>
      </section>
    </main>
  );
}
