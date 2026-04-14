"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  TVP_ABOUT_PARAGRAPHS,
  TVP_BENEFITS_BULLETS,
  TVP_BENEFITS_CLOSING,
  TVP_BENEFITS_IMAGE,
  TVP_BENEFITS_LEAD,
  TVP_CONTACT_LEAD,
  TVP_HERO_IMAGE,
  TVP_INTRO,
  TVP_SYSTEM_BULLETS,
  TVP_SYSTEM_LEAD,
  TVP_WHY_PARAGRAPHS,
} from "@/lib/twelve-visions-party-data";
import { WP } from "@/lib/wordpress-routes";

export function TwelveVisionsPartyPageContent() {
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
    <main id="main-content" ref={mainRef} className="nu-page tvp-page">
      <section className="nu-hero" aria-labelledby="tvp-hero-heading">
        <div className="nu-hero-label">Neothink Society</div>
        <h1 id="tvp-hero-heading">
          Twelve Visions <em>Party</em>
        </h1>
        <p className="nu-hero-sub" id="tvp-hero-sub">
          {TVP_INTRO}
        </p>
      </section>

      <section className="nu-intro" aria-labelledby="tvp-visual-heading">
        <div className="nu-intro-inner tvp-intro-visual">
          <h2 id="tvp-visual-heading" className="tvp-sr-only">
            Twelve Visions Party overview
          </h2>
          <div className="tvp-hero-image-wrap nu-reveal">
            <Image
              src={TVP_HERO_IMAGE.src}
              alt={TVP_HERO_IMAGE.alt}
              width={TVP_HERO_IMAGE.width}
              height={TVP_HERO_IMAGE.height}
              className="tvp-hero-image"
              sizes="(max-width: 900px) 100vw, 920px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="nu-about" aria-labelledby="tvp-about-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="tvp-about-heading">About the Twelve Visions Party</h2>
          {TVP_ABOUT_PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      <section className="nu-about tvp-stone" aria-labelledby="tvp-system-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="tvp-system-heading">Understanding the Twelve Visions System</h2>
          <p>{TVP_SYSTEM_LEAD}</p>
          <ul className="tvp-list">
            {TVP_SYSTEM_BULLETS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="nu-about" aria-labelledby="tvp-benefits-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="tvp-benefits-heading">Benefits of following the Twelve Visions</h2>
          <div className="tvp-inline-image">
            <Image
              src={TVP_BENEFITS_IMAGE.src}
              alt={TVP_BENEFITS_IMAGE.alt}
              width={TVP_BENEFITS_IMAGE.width}
              height={TVP_BENEFITS_IMAGE.height}
              className="tvp-body-image"
              sizes="(max-width: 900px) 100vw, 920px"
            />
          </div>
          <p>{TVP_BENEFITS_LEAD}</p>
          <ul className="tvp-list">
            {TVP_BENEFITS_BULLETS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>{TVP_BENEFITS_CLOSING}</p>
        </div>
      </section>

      <section className="nu-about tvp-stone" aria-labelledby="tvp-why-heading">
        <div className="nu-about-inner nu-prose nu-reveal">
          <h2 id="tvp-why-heading">Why choose the Neothink Society?</h2>
          {TVP_WHY_PARAGRAPHS.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <p>
            {TVP_CONTACT_LEAD}{" "}
            <Link href={WP.contact} className="tvp-inline-link">
              Contact the Institute
            </Link>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
