"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { NeothinkUniversityTestimonials } from "@/components/neothink-university/neothink-university-testimonials";
import {
  NEOTHINK_UNIVERSITY_ABOUT,
  NEOTHINK_UNIVERSITY_BENEFITS,
  NEOTHINK_UNIVERSITY_MISSION,
  NEOTHINK_UNIVERSITY_PROGRAMS,
  NEOTHINK_UNIVERSITY_TESTIMONIALS,
  NEOTHINK_UNIVERSITY_WHY_SOCIETY,
} from "@/lib/neothink-university-data";
import { NEOTHINK_UNIVERSITY_FAQ } from "@/lib/neothink-university-faq";
import { WP } from "@/lib/wordpress-routes";

const SECONDARY = [
  {
    title: "Free learning hub",
    body: "Public courses, manuscripts, essays, and media: start without a paywall on the core library.",
    href: WP.freeCourses,
    cta: "Open free courses",
  },
  {
    title: "Get involved",
    body: "Invest, advise, build Neovia, or go deeper than public pages when you are ready.",
    href: WP.getInvolved,
    cta: "Explore",
  },
  {
    title: "Contact",
    body: "Questions about Neothink University programs or how membership works.",
    href: WP.contact,
    cta: "Write to us",
  },
] as const;

export function NeothinkUniversityPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page">
      <section className="nu-hero" aria-labelledby="nu-hero-heading">
        <div className="nu-hero-label">The Neothink Society · Paid programs</div>
        <h1 id="nu-hero-heading">
          Neothink <em>University</em>
        </h1>
        <p className="nu-hero-sub">{NEOTHINK_UNIVERSITY_MISSION}</p>
      </section>

      <section className="nu-about nu-reveal" aria-labelledby="nu-about-heading">
        <div className="nu-about-inner nu-prose">
          <h2 id="nu-about-heading">About Neothink University</h2>
          <p>{NEOTHINK_UNIVERSITY_ABOUT.lead}</p>
          <p>{NEOTHINK_UNIVERSITY_ABOUT.body}</p>
        </div>
      </section>

      <section className="nu-resources nu-reveal" aria-labelledby="nu-programs-heading">
        <div className="nu-resources-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Programs</span>
            <h2 id="nu-programs-heading">What we offer</h2>
            <p>
              Key paid programs at Neothink University. Offerings are tailored to members; pricing, enrollment, and pacing
              are handled through Neothink Society channels, not as free public courses.
            </p>
          </header>
          <div className="nu-resource-grid">
            {NEOTHINK_UNIVERSITY_PROGRAMS.map((p) => (
              <div key={p.title} className="nu-resource-card">
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nu-benefits nu-reveal" aria-labelledby="nu-benefits-heading">
        <div className="nu-resources-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Member experience</span>
            <h2 id="nu-benefits-heading">Benefits of enrolling</h2>
            <p>Programs are designed to be life-changing and practical. Here is what you can expect:</p>
          </header>
          <div className="nu-resource-grid">
            {NEOTHINK_UNIVERSITY_BENEFITS.map((b) => (
              <div key={b.title} className="nu-resource-card">
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nu-why nu-reveal" aria-labelledby="nu-why-heading">
        <div className="nu-secondary-inner">
          <h2 id="nu-why-heading">Why choose The Neothink Society?</h2>
          <p className="nu-secondary-lead">
            We built The Neothink Society on the foundation of enhancing lives. Many members have been with us for
            years, some for decades, finding value and growth through our programs.
          </p>
          <div className="nu-secondary-grid">
            {NEOTHINK_UNIVERSITY_WHY_SOCIETY.map((w) => (
              <div key={w.title} className="nu-secondary-card">
                <h3>{w.title}</h3>
                <p>{w.body}</p>
              </div>
            ))}
          </div>
          <p className="nu-why-foot">
            If you have any inquiries about Neothink University, feel free to{" "}
            <Link href={WP.contact}>contact us today</Link>.
          </p>
        </div>
      </section>

      <section className="nu-faq nu-reveal" aria-labelledby="nu-faq-heading">
        <div className="nu-faq-inner">
          <h2 id="nu-faq-heading">Frequently asked questions</h2>
          <p className="nu-faq-lead">
            Short answers aligned with this page. For membership specifics, use{" "}
            <Link href={WP.contact}>Contact</Link> or your Society channels.
          </p>
          <div className="nu-faq-grid">
            {NEOTHINK_UNIVERSITY_FAQ.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nu-testimonials nu-reveal" aria-labelledby="nu-testimonials-heading">
        <div className="nu-testimonials-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Voices</span>
            <h2 id="nu-testimonials-heading">Real stories, real transformation</h2>
            <p>
              Discover how the Neothink Society has helped members unlock their potential, overcome challenges, and
              achieve success: the same member stories as on the original site ({NEOTHINK_UNIVERSITY_TESTIMONIALS.length}{" "}
              voices). Use the arrows, dot strip, or keyboard (arrow keys when the carousel is focused). You can pause
              auto-advance with the pause control.
            </p>
          </header>
          <NeothinkUniversityTestimonials />
        </div>
      </section>

      <section className="nu-secondary nu-reveal" aria-labelledby="nu-sec-heading">
        <div className="nu-secondary-inner">
          <h2 id="nu-sec-heading">Next steps</h2>
          <p className="nu-secondary-lead">
            The Neothink Institute’s free public entry points (for example Free Courses) stay separate from Neothink
            University, which is a paid Neothink Society offering with mentoring and member support.
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

      <section className="nu-cta nu-reveal" aria-label="Core ideas">
        <div className="nu-cta-inner">
          <h2>The idea system behind the University</h2>
          <p>
            Neothink University applies the same integrated idea system the Neothink Institute publishes publicly,
            delivered here as paid, mentored Society programs rather than free site content alone.
          </p>
          <div className="nu-cta-links">
            <Link href={WP.neothink}>Neothink</Link>
            <Link href={WP.unifiedField}>Unified Field</Link>
            <Link href={WP.theWay}>The Way</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
