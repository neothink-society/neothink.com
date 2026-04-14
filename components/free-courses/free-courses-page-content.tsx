"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { FREE_COURSES_HERO_IMAGE_URL } from "@/lib/wordpress-images";
import { WP } from "@/lib/wordpress-routes";

/** Ordered hub: structured course first, then manuscript, library, audio, path, and reference hubs. */
const PUBLIC_CONTENT = [
  {
    title: "Neothink Mentality course",
    body: "Structured entry into the Neothink mentality: life, work, and integrated thinking. Public course material on the main site.",
    href: WP.neothinkMentality,
    cta: "Start the course",
    featured: true,
  },
  {
    title: "Unleashed",
    body: "The complete manuscript. The Unified Field of Conscious Civilization in full. The spine of everything else.",
    href: WP.unleashed,
    cta: "Read the book",
    featured: false,
  },
  {
    title: "Published Work",
    body: "Essays and research: civilizational theory, consciousness, political philosophy, and development.",
    href: WP.publishedWork,
    cta: "Browse articles",
    featured: false,
  },
  {
    title: "Podcast & video",
    body: "Unleashed in conversation. Long-form audio and video aligned with the book’s arc.",
    href: WP.podcast,
    cta: "Listen",
    featured: false,
  },
  {
    title: "The Way",
    body: "The personal path: subtractive practice, the covering, and the golden world. The individual scale of the correction.",
    href: WP.theWay,
    cta: "Explore The Way",
    featured: false,
  },
  {
    title: "Manuscripts",
    body: "Mark Hamilton’s manuscript library and related published volumes. Deeper than a single landing page.",
    href: WP.manuscripts,
    cta: "Open manuscripts",
    featured: false,
  },
  {
    title: "Neothink",
    body: "The operating system of the uncovered mind. Concept building, integration, and causal prediction at the level of method.",
    href: WP.neothink,
    cta: "Read Neothink",
    featured: false,
  },
  {
    title: "The Unified Field",
    body: "The foundational discovery: one structural variable across all of recorded civilization.",
    href: WP.unifiedField,
    cta: "Enter the Unified Field",
    featured: false,
  },
] as const;

const SECONDARY = [
  {
    title: "Neothink University",
    body:
      "Paid Neothink Society programs—passion, prosperity, mindset, and wellness—not part of this free public hub.",
    href: WP.neothinkUniversity,
    cta: "Learn more",
  },
  {
    title: "Get involved",
    body: "Invest, advise, build Neovia, or walk the path beyond public material.",
    href: WP.getInvolved,
    cta: "Explore",
  },
  {
    title: "Contact",
    body: "Questions about programs, media, or a first introduction to the Institute.",
    href: WP.contact,
    cta: "Write to us",
  },
] as const;

export function FreeCoursesPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".fc-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("fc-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("fc-visible");
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
    <main id="main-content" ref={mainRef} className="fc-page">
      <section className="fc-hero" aria-labelledby="fc-hero-heading">
        <div className="fc-hero-label">Public material · No paywall on the core library</div>
        <h1 id="fc-hero-heading">
          Free <em>learning.</em>
        </h1>
        <p className="fc-hero-sub">
          This page exists to move you into the work without friction. Start with the Neothink Mentality course if you want a guided shape, then add the manuscript, the essay archive, audio, and the framework pages in whatever order fits your attention.
        </p>
      </section>

      <section className="fc-intro fc-reveal" aria-labelledby="fc-intro-heading">
        <div className="fc-intro-inner">
          <figure className="fc-figure">
            <Image
              src={FREE_COURSES_HERO_IMAGE_URL}
              alt="Neothink Institute public learning and resources"
              width={1000}
              height={667}
              sizes="(max-width: 900px) 100vw, 800px"
              className="h-auto w-full"
              priority
            />
          </figure>
          <div className="fc-prose">
            <h2 id="fc-intro-heading">How to use this hub</h2>
            <p>
              The grid below is intentionally flat: pick a door. The Neothink Mentality course is the structured public course (full page on the main site until that route is rebuilt here). Unleashed, Published Work, the podcast, The Way, manuscripts, Neothink, and the Unified Field are linked from this Next app. If a URL still serves legacy HTML during migration, you remain on{" "}
              <strong>neothink.com</strong>
              {" "}with the same body of work.
            </p>
          </div>
        </div>
      </section>

      <section className="fc-resources fc-reveal" aria-labelledby="fc-pub-heading">
        <div className="fc-resources-inner">
          <header className="fc-resources-header">
            <span className="fc-section-label">Pick your door</span>
            <h2 id="fc-pub-heading">Public content</h2>
            <p>Course first, then the manuscript and the rest. None of this replaces the other. They reinforce one another.</p>
          </header>
          <div className="fc-resource-grid">
            {PUBLIC_CONTENT.map((r) => (
              <div
                key={r.href}
                className={r.featured ? "fc-resource-card fc-resource-card--featured" : "fc-resource-card"}
              >
                {r.featured ? <span className="fc-resource-badge">Start here</span> : null}
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <Link href={r.href}>{r.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fc-secondary fc-reveal" aria-labelledby="fc-sec-heading">
        <div className="fc-secondary-inner">
          <h2 id="fc-sec-heading">Beyond public pages</h2>
          <p className="fc-secondary-lead">
            Participation, capital, and direct inquiry sit outside the free library. Use these when you are ready to go further than reading and listening.
          </p>
          <div className="fc-secondary-grid">
            {SECONDARY.map((s) => (
              <div key={s.href} className="fc-secondary-card">
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <Link href={s.href}>{s.cta}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="fc-cta fc-reveal" aria-label="Spine of the work">
        <div className="fc-cta-inner">
          <h2>The spine is still Unleashed</h2>
          <p>
            If you only anchor one thing, anchor the book. Everything else is orbit.
          </p>
          <div className="fc-cta-links">
            <Link href={WP.unleashed}>Read Unleashed</Link>
            <Link href={WP.neothinkMentality}>Neothink Mentality course</Link>
            <Link href={WP.publishedWork}>Published Work</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
