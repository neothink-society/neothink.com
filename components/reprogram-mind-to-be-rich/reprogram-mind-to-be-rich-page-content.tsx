"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

import { REPROGRAM_MIND_BODY_HTML } from "@/lib/reprogram-mind-to-be-rich-body-html";
import {
  RMTBR_HEADLINE,
  RMTBR_IMAGE,
  RMTBR_INTRO_PARAS,
  RMTBR_YOUTUBE_ID,
} from "@/lib/reprogram-mind-to-be-rich-data";
import { RMTBR_FAQ } from "@/lib/reprogram-mind-to-be-rich-faq";
import { WP } from "@/lib/wordpress-routes";

const AWAKENING_SERIES = "https://neothink.com/category/neothink-awakening/";
const LUCK_350M = "https://neothink.com/mark-hamilton-luck-350-million/";
const GREATEST_MENTAL = "https://neothink.com/the-greatest-mental-breakthrough/";

export function ReprogramMindToBeRichPageContent() {
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
            window.setTimeout(() => entry.target.classList.add("nu-visible"), 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${RMTBR_YOUTUBE_ID}?rel=0`;

  return (
    <main id="main-content" ref={mainRef} className="nu-page shb-page">
      <article>
        <header className="nu-hero" aria-labelledby="rmtbr-hero-heading">
          <div className="nu-hero-label">
            <a
              href={AWAKENING_SERIES}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: "linear-gradient(135deg,#d4a853 0%,#f5d799 50%,#d4a853 100%)",
                color: "#050505",
                padding: "8px 20px",
                borderRadius: 24,
                fontSize: 12,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                textDecoration: "none",
              }}
            >
              Neothink Awakening
            </a>
          </div>
          <h1 id="rmtbr-hero-heading">{RMTBR_HEADLINE}</h1>
          {RMTBR_INTRO_PARAS.map((para, idx) => (
            <p key={idx} className="nu-hero-sub" id={idx === 0 ? "rmtbr-intro-lead" : undefined}>
              {idx === 1 ? (
                <>
                  Mark Hamilton discovered a fundamentally different approach to using the human mind—one that took him
                  from the edge of bankruptcy to <strong>$350 million in sales</strong>. He called it{" "}
                  <strong>Neothink</strong>.
                </>
              ) : (
                para
              )}
            </p>
          ))}
          <p className="nu-awakening-byline nu-hero-sub">
            Based on{" "}
            <a href="https://markhamilton.co/" target="_blank" rel="noopener noreferrer">
              Mark Hamilton
            </a>{" "}
            · Published by{" "}
            <Link href={WP.home} className="nu-prose">
              Neothink Institute
            </Link>{" "}
            · 14 min read
          </p>
        </header>

        <div className="shb-featured nu-reveal">
          <Image
            src={RMTBR_IMAGE.src}
            alt={RMTBR_IMAGE.alt}
            width={RMTBR_IMAGE.width}
            height={RMTBR_IMAGE.height}
            className="shb-hero-image"
            sizes="(max-width: 900px) 100vw, 920px"
            priority
          />
        </div>

        <div className="nu-awakening-quick nu-reveal">
          <p className="nu-awakening-kicker">Quick answer</p>
          <h2 id="rmtbr-quick-title">How can you reprogram your mind to be rich?</h2>
          <p>
            <strong>Through Neothink—a limitless way of thinking that starts simple and scales infinitely.</strong>{" "}
            <a href={LUCK_350M} style={{ color: "#96792b", textDecoration: "none" }}>
              Mark Hamilton
            </a>{" "}
            developed this approach after nearly losing his business. By applying a thinking technique that pulls
            concepts together into new systems, he went from drowning in daily tasks to building a $350 million
            enterprise. The key: most people are trapped in perceptual thinking (reacting to what’s in front of them).
            Neothink teaches you how to rise to conceptual thinking, then to{" "}
            <a href={GREATEST_MENTAL} style={{ color: "#96792b", textDecoration: "none" }}>
              integrating
            </a>{" "}
            concepts into breakthrough systems that create wealth.
          </p>
        </div>

        <section className="nu-awakening-video nu-reveal" aria-label="Video">
          <div className="nu-awakening-video-frame">
            <iframe
              title="Reprogram your mind to be rich — Mark Hamilton"
              src={embedUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </section>

        <div
          className="nu-awakening-html nu-reveal"
          dangerouslySetInnerHTML={{ __html: REPROGRAM_MIND_BODY_HTML }}
        />

        <section className="nu-faq nu-reveal" aria-labelledby="rmtbr-faq-heading">
          <div className="nu-faq-inner">
            <h2 id="rmtbr-faq-heading">Frequently asked questions</h2>
            <p className="nu-faq-lead">
              Related: <Link href={WP.integratedThinking}>Integrated thinking</Link>,{" "}
              <Link href={WP.neothinkMentality}>Neothink Mentality</Link>,{" "}
              <Link href={WP.freedomKeyToUnlockingTrueWealth}>Freedom &amp; true wealth</Link>,{" "}
              <Link href={WP.programs}>Programs</Link>.
            </p>
            <div className="nu-faq-grid">
              {RMTBR_FAQ.map((item) => (
                <article key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="nu-secondary nu-reveal" aria-label="Related on this site">
          <div className="nu-secondary-inner">
            <h2 className="nu-secondary-lead" style={{ marginBottom: "1rem" }}>
              Related
            </h2>
            <div className="nu-secondary-grid">
              <div className="nu-secondary-card">
                <h3>Freedom &amp; wealth</h3>
                <p>Awakening article.</p>
                <Link href={WP.freedomKeyToUnlockingTrueWealth}>Read article</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Neothink Mentality</h3>
                <p>Structured public course.</p>
                <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Value creator</h3>
                <p>Value-creation hub.</p>
                <Link href={WP.valueCreator}>Value creator</Link>
              </div>
              <div className="nu-secondary-card">
                <h3>Surprising logic</h3>
                <p>Mark Hamilton teachings.</p>
                <Link href={WP.markHamiltonsNeothinkSurprisingLogic}>Read article</Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
