"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { NeothinkUniversityTestimonials } from "@/components/neothink-university/neothink-university-testimonials";
import {
  NEOTHINK_REVIEWS_EXTERNAL_ARCHIVES,
  NEOTHINK_REVIEWS_HERO_SUB,
  NEOTHINK_REVIEWS_SECTION_LEAD,
  NEOTHINK_REVIEWS_SECTION_TITLE,
  NEOTHINK_REVIEWS_TESTIMONIALS,
} from "@/lib/neothink-reviews-data";
import { NEOTHINK_REVIEWS_FAQ } from "@/lib/neothink-reviews-faq";
import { WP } from "@/lib/wordpress-routes";

const SECONDARY = [
  { title: "FAQ", body: "Society programs, Project Life, and orientation.", href: WP.faq, cta: "Open FAQ" },
  { title: "Neothink University", body: "Paid Society program hub on this site.", href: WP.neothinkUniversity, cta: "University" },
  { title: "Mark Hamilton", body: "Founder hub on this site.", href: WP.markHamilton, cta: "Mark Hamilton" },
  { title: "Contact", body: "Routing questions and sharing your story.", href: WP.contact, cta: "Contact" },
] as const;

export function NeothinkReviewsPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page nr-page">
      <section className="nu-hero" aria-labelledby="nr-hero-heading">
        <div className="nu-hero-label">Member voices · Neothink Society</div>
        <h1 id="nr-hero-heading">
          Neothink <em>reviews</em>
        </h1>
        <p className="nu-hero-sub" id="nr-hero-sub">
          {NEOTHINK_REVIEWS_HERO_SUB}
        </p>
      </section>

      <section className="nu-about nu-reveal" aria-labelledby="nr-stories-heading">
        <div className="nu-about-inner nu-prose">
          <h2 id="nr-stories-heading">{NEOTHINK_REVIEWS_SECTION_TITLE}</h2>
          <p>{NEOTHINK_REVIEWS_SECTION_LEAD}</p>
        </div>
      </section>

      <section className="nu-testimonials nu-reveal" aria-labelledby="nr-carousel-heading">
        <div className="nu-testimonials-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Carousel</span>
            <h2 id="nr-carousel-heading">Member stories</h2>
            <p>
              {NEOTHINK_REVIEWS_TESTIMONIALS.length} voices—same dataset as other Society hubs on this site; layout here
              is the accessible carousel (arrows, dots, keyboard, pause).
            </p>
          </header>
          <NeothinkUniversityTestimonials />
        </div>
      </section>

      <section className="nu-resources nu-reveal" aria-labelledby="nr-archives-heading">
        <div className="nu-resources-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Archives</span>
            <h2 id="nr-archives-heading">More member archives (legacy sites)</h2>
            <p>
              The original page linked to large collections off neothink.com. These open in a new tab; they are not
              operated as part of this Next.js app.
            </p>
          </header>
          <div className="nu-resource-grid">
            {NEOTHINK_REVIEWS_EXTERNAL_ARCHIVES.map((a) => (
              <div key={a.href} className="nu-resource-card">
                <h3>
                  <a href={a.href} target="_blank" rel="noopener noreferrer">
                    {a.name}
                  </a>
                </h3>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nu-faq nu-reveal" aria-labelledby="nr-faq-heading">
        <div className="nu-faq-inner">
          <h2 id="nr-faq-heading">Frequently asked questions</h2>
          <p className="nu-faq-lead">
            Short answers about what this page is (and is not). For program specifics, see <Link href={WP.faq}>FAQ</Link>{" "}
            or <Link href={WP.contact}>Contact</Link>.
          </p>
          <div className="nu-faq-grid">
            {NEOTHINK_REVIEWS_FAQ.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nu-secondary nu-reveal" aria-labelledby="nr-sec-heading">
        <div className="nu-secondary-inner">
          <h2 id="nr-sec-heading">On this site</h2>
          <p className="nu-secondary-lead">
            Public Institute pages, Society program hubs, and contact—use the cards below to navigate without leaving
            neothink.com.
          </p>
          <div className="nu-secondary-grid">
            {SECONDARY.map((s) => (
              <div key={s.href} className="nu-secondary-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link href={s.href}>{s.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
