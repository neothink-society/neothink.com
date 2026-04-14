"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  PROGRAMS_CARDS,
  PROGRAMS_CARDS_TITLE,
  PROGRAMS_CLOSING,
  PROGRAMS_INTRO,
} from "@/lib/programs-data";
import { WP } from "@/lib/wordpress-routes";

export function ProgramsPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page pg-page">
      <section className="nu-hero" aria-labelledby="pg-hero-heading">
        <div className="nu-hero-label">Neothink Society</div>
        <h1 id="pg-hero-heading">
          Society <em>programs</em>
        </h1>
        <p className="nu-hero-sub" id="pg-hero-sub">
          {PROGRAMS_INTRO}
        </p>
      </section>

      <section className="nu-secondary nu-reveal" aria-labelledby="pg-cards-heading">
        <div className="nu-secondary-inner">
          <h2 id="pg-cards-heading">{PROGRAMS_CARDS_TITLE}</h2>
          <div className="nu-secondary-grid">
            {PROGRAMS_CARDS.map((c) => (
              <div key={c.href} className="nu-secondary-card">
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <Link href={c.href}>{c.cta}</Link>
              </div>
            ))}
          </div>
          <p className="pg-closing nu-secondary-lead">
            {PROGRAMS_CLOSING}{" "}
            <Link href={WP.faq} className="pg-inline-link">
              Society FAQ
            </Link>
            ,{" "}
            <Link href={WP.freeCourses} className="pg-inline-link">
              Free courses
            </Link>
            , or{" "}
            <Link href={WP.contact} className="pg-inline-link">
              Contact
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
