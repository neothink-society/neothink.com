"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { NeothinkUniversityTestimonials } from "@/components/neothink-university/neothink-university-testimonials";
import {
  PROJECT_LIFE_ABOUT_LEAD,
  PROJECT_LIFE_ABOUT_TITLE,
  PROJECT_LIFE_BENEFITS,
  PROJECT_LIFE_BENEFITS_LEAD,
  PROJECT_LIFE_BENEFITS_TITLE,
  PROJECT_LIFE_CONTACT_LEAD,
  PROJECT_LIFE_HERO_IMAGE,
  PROJECT_LIFE_INTRO,
  PROJECT_LIFE_PILLARS,
  PROJECT_LIFE_SECTION_IMAGE,
  PROJECT_LIFE_SECONDARY,
  PROJECT_LIFE_SECONDARY_LEAD,
  PROJECT_LIFE_SECONDARY_TITLE,
  PROJECT_LIFE_WHY,
  PROJECT_LIFE_WHY_LEAD,
  PROJECT_LIFE_WHY_TITLE,
} from "@/lib/project-life-data";
import { SOCIETY_FAQ_TESTIMONIALS } from "@/lib/society-faq-page";
import { WP } from "@/lib/wordpress-routes";

export function ProjectLifePageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page plife-page">
      <section className="nu-hero" aria-labelledby="plife-hero-heading">
        <div className="nu-hero-label">Neothink Society</div>
        <h1 id="plife-hero-heading">
          Project <em>Life</em>
        </h1>
        <p className="nu-hero-sub" id="plife-hero-sub">
          {PROJECT_LIFE_INTRO}
        </p>
      </section>

      <section className="nu-intro" aria-labelledby="plife-visual-heading">
        <div className="nu-intro-inner plife-intro-visual">
          <h2 id="plife-visual-heading" className="plife-sr-only">
            Project Life overview
          </h2>
          <div className="plife-hero-image-wrap nu-reveal">
            <Image
              src={PROJECT_LIFE_HERO_IMAGE.src}
              alt={PROJECT_LIFE_HERO_IMAGE.alt}
              width={PROJECT_LIFE_HERO_IMAGE.width}
              height={PROJECT_LIFE_HERO_IMAGE.height}
              className="plife-hero-image"
              sizes="(max-width: 900px) 100vw, 920px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="nu-about" aria-labelledby="plife-about-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="plife-about-heading">{PROJECT_LIFE_ABOUT_TITLE}</h2>
          <p>{PROJECT_LIFE_ABOUT_LEAD}</p>
          <ul className="plife-list">
            {PROJECT_LIFE_PILLARS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nu-about plife-stone" aria-labelledby="plife-benefits-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="plife-benefits-heading">{PROJECT_LIFE_BENEFITS_TITLE}</h2>
          <div className="plife-inline-image">
            <Image
              src={PROJECT_LIFE_SECTION_IMAGE.src}
              alt={PROJECT_LIFE_SECTION_IMAGE.alt}
              width={PROJECT_LIFE_SECTION_IMAGE.width}
              height={PROJECT_LIFE_SECTION_IMAGE.height}
              className="plife-body-image"
              sizes="(max-width: 900px) 100vw, 920px"
            />
          </div>
          <p>{PROJECT_LIFE_BENEFITS_LEAD}</p>
          <ul className="plife-list">
            {PROJECT_LIFE_BENEFITS.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nu-about" aria-labelledby="plife-why-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="plife-why-heading">{PROJECT_LIFE_WHY_TITLE}</h2>
          <p>{PROJECT_LIFE_WHY_LEAD}</p>
          <ul className="plife-list">
            {PROJECT_LIFE_WHY.map((item) => (
              <li key={item.title}>
                <strong>{item.title}:</strong> {item.body}
              </li>
            ))}
          </ul>
          <p>
            {PROJECT_LIFE_CONTACT_LEAD}{" "}
            <Link href={WP.contact} className="plife-inline-link">
              Contact
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="nu-testimonials nu-reveal" aria-labelledby="plife-stories-heading">
        <div className="nu-testimonials-inner">
          <header className="nu-resources-header">
            <span className="nu-section-label">Voices</span>
            <h2 id="plife-stories-heading">Real stories, real transformation</h2>
            <p>
              Member voices from the same carousel as the FAQ page ({SOCIETY_FAQ_TESTIMONIALS.length} stories). Use
              arrows, dots, keyboard navigation, or pause auto-advance.
            </p>
          </header>
          <NeothinkUniversityTestimonials />
        </div>
      </section>

      <section className="nu-secondary nu-reveal" aria-labelledby="plife-secondary-heading">
        <div className="nu-secondary-inner">
          <h2 id="plife-secondary-heading">{PROJECT_LIFE_SECONDARY_TITLE}</h2>
          <p className="nu-secondary-lead">{PROJECT_LIFE_SECONDARY_LEAD}</p>
          <div className="nu-secondary-grid">
            {PROJECT_LIFE_SECONDARY.map((s) => (
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
