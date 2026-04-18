"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { NeothinkUniversityTestimonials } from "@/components/neothink-university/neothink-university-testimonials";
import {
  IMMORTALIS_ABOUT,
  IMMORTALIS_CITIZEN_BENEFITS,
  IMMORTALIS_HERO_INTRO,
  IMMORTALIS_IMAGES,
  IMMORTALIS_PRIME_LAW,
  IMMORTALIS_TESTIMONIALS,
  IMMORTALIS_WHY_SOCIETY,
} from "@/lib/immortalis-data";
import { IMMORTALIS_FAQ } from "@/lib/immortalis-faq";
import { WP } from "@/lib/wordpress-routes";

const SECONDARY = [
  {
    title: "Neovia",
    body: "Charter-city and intentional-community framing for Prime Law–grounded physical community.",
    href: WP.neovia,
    cta: "Read about Neovia",
  },
  {
    title: "Prime Law",
    body: "The constitutional baseline behind the Immortalis vision: non-initiation of force.",
    href: WP.primeLaw,
    cta: "Read the Prime Law",
  },
  {
    title: "Neothink University",
    body: "Paid Society programs with mentoring, separate from the free public learning hub.",
    href: WP.neothinkUniversity,
    cta: "Neothink University",
  },
  {
    title: "Contact",
    body: "Questions about Immortalis, programs, or how to reach the right channel.",
    href: WP.contact,
    cta: "Contact",
  },
] as const;

export function ImmortalisPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page im-page">
      <section className="nu-hero" aria-labelledby="im-hero-heading">
        <div className="nu-hero-label">Neothink Country · Society vision</div>
        <h1 id="im-hero-heading">
          <em>Immortalis</em>
        </h1>
        <p className="nu-hero-sub">{IMMORTALIS_HERO_INTRO}</p>
      </section>

      <section className="im-visual-band nu-reveal">
        <div className="im-visual-inner">
          <Image
            src={IMMORTALIS_IMAGES.heroVisual.src}
            alt={IMMORTALIS_IMAGES.heroVisual.alt}
            width={IMMORTALIS_IMAGES.heroVisual.width}
            height={IMMORTALIS_IMAGES.heroVisual.height}
            className="im-hero-image"
            sizes="(max-width: 900px) 100vw, 880px"
            priority
          />
        </div>
      </section>

      <section className="nu-about nu-reveal" aria-labelledby="im-about-heading">
        <div className="nu-about-inner nu-prose">
          <h2 id="im-about-heading">About Immortalis</h2>
          <p>{IMMORTALIS_ABOUT.lead}</p>
          <p>{IMMORTALIS_ABOUT.mission}</p>
          <p>{IMMORTALIS_ABOUT.digitalFirst}</p>
        </div>
      </section>

      <section className="nu-resources nu-reveal" aria-labelledby="im-benefits-heading">
        <div className="nu-resources-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Citizens</span>
            <h2 id="im-benefits-heading">Benefits of aligning with Immortalis</h2>
            <p>Life in Immortalis is described as offering these advantages: summary of the legacy page, edited for clarity.</p>
          </header>
          <div className="im-benefits-visual nu-reveal">
            <Image
              src={IMMORTALIS_IMAGES.benefitsVisual.src}
              alt={IMMORTALIS_IMAGES.benefitsVisual.alt}
              width={IMMORTALIS_IMAGES.benefitsVisual.width}
              height={IMMORTALIS_IMAGES.benefitsVisual.height}
              className="im-hero-image"
              sizes="(max-width: 900px) 100vw, 880px"
            />
          </div>
          <ul className="im-benefit-list">
            {IMMORTALIS_CITIZEN_BENEFITS.map((b) => (
              <li key={b.title}>
                <strong>{b.title}</strong>
                <span className="im-benefit-colon">: </span>
                {b.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nu-benefits nu-reveal" aria-labelledby="im-prime-heading">
        <div className="nu-resources-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Constitution</span>
            <h2 id="im-prime-heading">Learn about the Prime Law</h2>
          </header>
          <div className="nu-resource-grid">
            <div className="nu-resource-card">
              <p>{IMMORTALIS_PRIME_LAW.lead}</p>
              <p>{IMMORTALIS_PRIME_LAW.body}</p>
              <p>
                <Link href={WP.primeLaw}>Read the full Prime Law page</Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="nu-why nu-reveal" aria-labelledby="im-society-heading">
        <div className="nu-secondary-inner">
          <h2 id="im-society-heading">Why choose The Neothink Society?</h2>
          <p className="nu-secondary-lead">{IMMORTALIS_WHY_SOCIETY.lead}</p>
          <p className="nu-why-foot">{IMMORTALIS_WHY_SOCIETY.body}</p>
          <p className="nu-why-foot">
            <Link href={WP.contact}>Contact the Institute</Link>
            {" · "}
            <Link href={WP.neothinkUniversity}>Neothink University</Link>
          </p>
        </div>
      </section>

      <section className="nu-faq nu-reveal" aria-labelledby="im-faq-heading">
        <div className="nu-faq-inner">
          <h2 id="im-faq-heading">Frequently asked questions</h2>
          <p className="nu-faq-lead">
            Short answers aligned with this page. For membership specifics, use <Link href={WP.contact}>Contact</Link> or
            your Society channels.
          </p>
          <div className="nu-faq-grid">
            {IMMORTALIS_FAQ.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nu-testimonials nu-reveal" aria-labelledby="im-testimonials-heading">
        <div className="nu-testimonials-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Voices</span>
            <h2 id="im-testimonials-heading">Real stories, real transformation</h2>
            <p>
              Discover how the Neothink Society has helped members unlock their potential: the same member carousel as on
              the legacy Immortalis page ({IMMORTALIS_TESTIMONIALS.length} voices). Use arrows, dots, or keyboard; pause
              auto-advance anytime.
            </p>
          </header>
          <NeothinkUniversityTestimonials />
        </div>
      </section>

      <section className="nu-secondary nu-reveal" aria-labelledby="im-sec-heading">
        <div className="nu-secondary-inner">
          <h2 id="im-sec-heading">Next steps</h2>
          <p className="nu-secondary-lead">
            Explore Neovia and the Prime Law for the public civilizational framing, Neothink University for paid Society
            programs, or contact the Institute for routing questions.
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
          <h2>The idea system behind the vision</h2>
          <p>
            Immortalis sits alongside the Neothink Institute’s published framework: consciousness, integration, and
            non-aggression as structural themes.
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
