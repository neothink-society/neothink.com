"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { NeothinkUniversityTestimonials } from "@/components/neothink-university/neothink-university-testimonials";
import {
  EVENTS_ABOUT_BULLETS,
  EVENTS_ABOUT_LEAD,
  EVENTS_BENEFITS_BULLETS,
  EVENTS_BENEFITS_IMAGE,
  EVENTS_BENEFITS_LEAD,
  EVENTS_HERO_IMAGE,
  EVENTS_INTRO,
  EVENTS_RESOURCES,
  EVENTS_RESOURCES_LEAD,
  EVENTS_TESTIMONIALS_LEAD,
  EVENTS_TESTIMONIALS_TITLE,
  EVENTS_WHY_CLOSING,
  EVENTS_WHY_PARAGRAPHS,
} from "@/lib/events-data";
import { WP } from "@/lib/wordpress-routes";

export function EventsPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page ev-page">
      <section className="nu-hero" aria-labelledby="ev-hero-heading">
        <div className="nu-hero-label">Neothink Society</div>
        <h1 id="ev-hero-heading">
          Upcoming <em>events</em>
        </h1>
        <p className="nu-hero-sub" id="ev-hero-sub">
          {EVENTS_INTRO}
        </p>
      </section>

      <section className="nu-intro" aria-labelledby="ev-visual-heading">
        <div className="nu-intro-inner ev-intro-visual">
          <h2 id="ev-visual-heading" className="ev-sr-only">
            Events overview
          </h2>
          <div className="ev-hero-image-wrap nu-reveal">
            <Image
              src={EVENTS_HERO_IMAGE.src}
              alt={EVENTS_HERO_IMAGE.alt}
              width={EVENTS_HERO_IMAGE.width}
              height={EVENTS_HERO_IMAGE.height}
              className="ev-hero-image"
              sizes="(max-width: 900px) 100vw, 920px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="nu-about" aria-labelledby="ev-about-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="ev-about-heading">About our events</h2>
          <p>{EVENTS_ABOUT_LEAD}</p>
          <ul className="ev-list">
            {EVENTS_ABOUT_BULLETS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nu-about ev-stone" aria-labelledby="ev-benefits-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="ev-benefits-heading">Benefits of attending events</h2>
          <div className="ev-inline-image">
            <Image
              src={EVENTS_BENEFITS_IMAGE.src}
              alt={EVENTS_BENEFITS_IMAGE.alt}
              width={EVENTS_BENEFITS_IMAGE.width}
              height={EVENTS_BENEFITS_IMAGE.height}
              className="ev-body-image"
              sizes="(max-width: 900px) 100vw, 920px"
            />
          </div>
          <p>{EVENTS_BENEFITS_LEAD}</p>
          <ul className="ev-list">
            {EVENTS_BENEFITS_BULLETS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nu-about" aria-labelledby="ev-resources-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="ev-resources-heading">Other available resources</h2>
          <p>{EVENTS_RESOURCES_LEAD}</p>
          <ul className="ev-resource-list">
            {EVENTS_RESOURCES.map((r) => (
              <li key={r.href}>
                <strong>{r.title}:</strong> {r.body}{" "}
                <Link href={r.href} className="ev-inline-link">
                  {r.cta}
                </Link>
                .
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nu-about ev-stone" aria-labelledby="ev-why-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="ev-why-heading">Why choose the Neothink Society?</h2>
          {EVENTS_WHY_PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            {EVENTS_WHY_CLOSING}{" "}
            <Link href={WP.contact} className="ev-inline-link">
              Contact the Institute
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="nu-testimonials nu-reveal" aria-labelledby="ev-stories-heading">
        <div className="nu-testimonials-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Member voices</span>
            <h2 id="ev-stories-heading">{EVENTS_TESTIMONIALS_TITLE}</h2>
            <p>{EVENTS_TESTIMONIALS_LEAD}</p>
            <p>
              <Link href={WP.neothinkReviews} className="ev-inline-link">
                Neothink reviews hub
              </Link>{" "}
              for full archive context and additional member resources.
            </p>
          </header>
          <NeothinkUniversityTestimonials />
        </div>
      </section>
    </main>
  );
}
