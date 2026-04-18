"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, type ReactNode } from "react";

import { NeothinkUniversityTestimonials } from "@/components/neothink-university/neothink-university-testimonials";
import {
  SOCIETY_FAQ_ENTRIES,
  SOCIETY_FAQ_IMAGES,
  SOCIETY_FAQ_INTRO,
  SOCIETY_FAQ_TESTIMONIALS,
} from "@/lib/society-faq-page";
import { WP } from "@/lib/wordpress-routes";

const SECONDARY = [
  { title: "Free learning", body: "Public courses and lessons on this site.", href: WP.freeCourses, cta: "Free courses" },
  {
    title: "Secret society myths",
    body: "Agency-era article clarifying the “secret society” label and Neothink Society framing.",
    href: WP.neothinkSocietyClearingMisunderstandings,
    cta: "Read article",
  },
  { title: "Get involved", body: "Invest, advise, build, or go deeper when you are ready.", href: WP.getInvolved, cta: "Get involved" },
  { title: "Immortalis", body: "Neothink Country / Immortalis vision summary.", href: WP.immortalis, cta: "Immortalis" },
  { title: "Contact", body: "Reach the Institute for routing and questions.", href: WP.contact, cta: "Contact" },
] as const;

function paragraphWithLinks(entryId: string, index: number, text: string): ReactNode {
  if (entryId === "what-programs" && index === 1) {
    const before = "Neothink University offers masterclasses and personalized coaching oriented toward excitement, happiness, purpose, passion, freedom, and love. On this site, ";
    const after =
      " is the paid Society program hub (distinct from the Institute’s free public courses).";
    if (text.startsWith(before) && text.endsWith(after)) {
      return (
        <>
          {before}
          <Link href={WP.neothinkUniversity}>Neothink University</Link>
          {after}
        </>
      );
    }
  }

  if (entryId === "formula-cure-aging" && index === 1) {
    const before =
      "It is described in connection with the Neothink Country / Immortalis vision: rapid, benevolent progress. For the public lesson that overlaps this theme on this site, see the ";
    const after = ".";
    const needle = "Neothink Mentality module on curing aging";
    if (text.startsWith(before) && text.endsWith(after) && text.includes(needle)) {
      return (
        <>
          {before}
          <Link href={WP.cureToAging}>{needle}</Link>
          {after}
        </>
      );
    }
  }

  if (entryId === "what-is-neothink-country" && index === 1) {
    const before = "The ";
    const mid = " page on neothink.com summarizes a closely related Society vision in the Neothink Institute’s public voice.";
    const needle = "Immortalis";
    if (text === `${before}${needle}${mid}`) {
      return (
        <>
          {before}
          <Link href={WP.immortalis}>{needle}</Link>
          {mid}
        </>
      );
    }
  }

  if (entryId === "how-to-join" && index === 1) {
    const p1 = "On this site, start with ";
    const p2 = " or ";
    const p3 = " for public entry points; use ";
    const p4 =
      " for routing. Paid University and private Society onboarding are not the same as the free public library.";
    if (text.startsWith(p1) && text.includes(p2) && text.includes(p3)) {
      return (
        <>
          {p1}
          <Link href={WP.freeCourses}>Free Courses</Link>
          {p2}
          <Link href={WP.getInvolved}>Get Involved</Link>
          {p3}
          <Link href={WP.contact}>Contact</Link>
          {p4}
        </>
      );
    }
  }

  if (entryId === "how-to-contact" && index === 0) {
    const before = "Use neothink.com (this site) for Institute contact and published resources. The ";
    const after =
      " page is the right starting point for general inquiries; specific programs may route you to Society or partner channels.";
    if (text === `${before}Contact${after}`) {
      return (
        <>
          {before}
          <Link href={WP.contact}>Contact</Link>
          {after}
        </>
      );
    }
  }

  return text;
}

export function FaqPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page faq-hub-page">
      <section className="nu-hero" aria-labelledby="faq-hero-heading">
        <div className="nu-hero-label">The Neothink Society · FAQ</div>
        <h1 id="faq-hero-heading">
          Frequently asked <em>questions</em>
        </h1>
        <p className="nu-hero-sub" id="faq-intro-lead">
          {SOCIETY_FAQ_INTRO}
        </p>
      </section>

      <section className="faq-visual-band nu-reveal" aria-label="Illustration">
        <div className="faq-visual-inner">
          <Image
            src={SOCIETY_FAQ_IMAGES.header.src}
            alt={SOCIETY_FAQ_IMAGES.header.alt}
            width={SOCIETY_FAQ_IMAGES.header.width}
            height={SOCIETY_FAQ_IMAGES.header.height}
            className="faq-hero-image"
            sizes="(max-width: 900px) 100vw, 880px"
            priority
          />
        </div>
      </section>

      <section className="nu-faq nu-reveal" aria-labelledby="faq-main-heading">
        <div className="nu-faq-inner">
          <h2 id="faq-main-heading">Questions and answers</h2>
          <p className="nu-faq-lead">
            Each answer below matches the JSON-LD FAQ on this URL. For lesson-specific FAQs, see individual Neothink
            Mentality pages. For Institute vs Society, see <Link href={WP.about}>About</Link> and{" "}
            <Link href={WP.neothinkUniversity}>Neothink University</Link>.
          </p>
          <div className="nu-faq-grid faq-grid--topics">
            {SOCIETY_FAQ_ENTRIES.map((entry) => (
              <article key={entry.id} id={entry.id} className="faq-topic">
                <h3>{entry.question}</h3>
                {entry.imageKey ? (
                  <div className="faq-topic-image">
                    <Image
                      src={SOCIETY_FAQ_IMAGES[entry.imageKey].src}
                      alt={SOCIETY_FAQ_IMAGES[entry.imageKey].alt}
                      width={SOCIETY_FAQ_IMAGES[entry.imageKey].width}
                      height={SOCIETY_FAQ_IMAGES[entry.imageKey].height}
                      className="faq-hero-image"
                      sizes="(max-width: 900px) 100vw, 880px"
                    />
                  </div>
                ) : null}
                {entry.paragraphs.map((p, i) => (
                  <p key={`${entry.id}-${i}`}>{paragraphWithLinks(entry.id, i, p)}</p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nu-testimonials nu-reveal" aria-labelledby="faq-testimonials-heading">
        <div className="nu-testimonials-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Voices</span>
            <h2 id="faq-testimonials-heading">Real stories, real transformation</h2>
            <p>
              Member voices from the same carousel as the legacy FAQ page ({SOCIETY_FAQ_TESTIMONIALS.length} stories).
              Use arrows, dots, keyboard navigation, or pause auto-advance.
            </p>
          </header>
          <NeothinkUniversityTestimonials />
        </div>
      </section>

      <section className="nu-secondary nu-reveal" aria-labelledby="faq-sec-heading">
        <div className="nu-secondary-inner">
          <h2 id="faq-sec-heading">Where to go next</h2>
          <p className="nu-secondary-lead">
            Public research and lessons stay on the Institute side; paid Society programs and private communities are
            separate paths. This FAQ is only an orientation.
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
