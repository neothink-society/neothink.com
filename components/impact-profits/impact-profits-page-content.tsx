"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  IMPACT_PROFITS_FAQ,
  IMPACT_PROFITS_LESSON,
  IMPACT_PROFITS_PROCESS_STEPS,
  IMPACT_PROFITS_PROFIT_DRIVERS,
  IMPACT_PROFITS_SPECIALIZED_WORKER,
  IMPACT_PROFITS_TAKEAWAYS,
  IMPACT_PROFITS_VALUE_CREATOR,
} from "@/lib/impact-profits-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${IMPACT_PROFITS_LESSON.youtubeId}`;

export function ImpactProfitsPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".ip-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("ip-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("ip-visible"), 50);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.06, rootMargin: "0px 0px -28px 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main id="main-content" ref={mainRef} className="ip-page">
      <header className="ip-hero">
        <p className="ip-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="ip-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {IMPACT_PROFITS_LESSON.number}</span>
        </p>
        <h1 id="ip-heading">{IMPACT_PROFITS_LESSON.title}</h1>
        <p className="ip-dek">
          After <Link href={WP.beyondTunnelVision}>Project Curiosity in lesson three</Link>, this lesson turns expanded attention into a concrete focus:{" "}
          <strong>impact profits</strong>, the places where value and money actually meet, and how to move from specialized tasks toward value creation.
        </p>
        <p className="ip-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{IMPACT_PROFITS_LESSON.videoRuntimeMinutes} min video · ~{IMPACT_PROFITS_LESSON.readTimeMinutes} min read
          </span>
        </p>
      </header>

      <section className="ip-section ip-prose" aria-labelledby="ip-intro">
        <h2 id="ip-intro" className="ip-visually-hidden">
          Introduction
        </h2>
        <p>
          This essay follows the Institute migration from WordPress and aligns with the lesson video (
          <a href="https://www.youtube.com/watch?v=KD9tcurr8qE" target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ). Branding is <strong>Neothink</strong> (one word). The video is the spoken source if text and recording diverge.
        </p>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-quick">
        <p className="ip-kicker">Quick answer</p>
        <h2 id="ip-quick">How do I escape the routine rut and start creating wealth?</h2>
        <p>
          <strong>Focus where profits are actually made.</strong> Use the awareness from Project Curiosity to see customer flow, service quality, efficiency, and location: the “common denominators” of income in most businesses. Shifting from narrow tasks to those profit-impacting zones is how specialized following gives way to integrated thinking and first steps toward durable value.
        </p>
      </section>

      <section className="ip-video ip-reveal" aria-label="Lesson video">
        <div className="ip-video-frame">
          <iframe
            title="Neothink Mentality lesson 4: Impact Profits"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-takeaways">
        <h2 id="ip-takeaways">Key takeaways</h2>
        <div className="ip-takeaways">
          <ul>
            {IMPACT_PROFITS_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-pc">
        <h2 id="ip-pc">From Project Curiosity to a wider map</h2>
        <p>
          Hamilton treats Project Curiosity as the prerequisite: interview coworkers, study operations, and hold a two-week view of the whole business so the mind can integrate. That expanded map is what makes profit-impacting areas visible instead of invisible behind a task list.
        </p>
      </section>

      <aside className="ip-def ip-reveal" aria-labelledby="ip-def-impact">
        <p className="ip-def-label">Key concept</p>
        <h3 id="ip-def-impact">Impact profits</h3>
        <p>
          The recurring places where value shows up as income: service quality, throughput, standards, location, customer mix. Naming them is how you stop treating work as random chores and start seeing where money is made.
        </p>
      </aside>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-dish">
        <h2 id="ip-dish">Example: the dishwasher who looked past the sink</h2>
        <p>
          Hamilton returns to the restaurant story: curiosity about curb appeal, traffic, and flow, not only dishes, is how observation tied to profit. The point is not the job title; it is where attention goes once tunnel vision loosens.
        </p>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-identify">
        <h2 id="ip-identify">What to observe</h2>
        <p>
          Follow money and friction: who buys, what slows service, what raises quality, what the location does to access. Integrated thinking here means listing concrete levers, not slogans.
        </p>
        <ul>
          {IMPACT_PROFITS_PROFIT_DRIVERS.map((x) => (
            <li key={x}>{x}</li>
          ))}
        </ul>
        <p>
          When those connections clarify, the mind can move from executing tasks to <strong>creating values</strong>: improvements that did not exist before. That creative move is the lever Hamilton distinguishes from simply working harder.
        </p>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-nash">
        <h2 id="ip-nash">Charles Nash: from blacksmith to integrated leadership</h2>
        <p>
          The lesson cites Charles Nash’s rise, focusing on efficiencies that doubled output, moving across functions, and eventually leading at scale, as a historical pattern of asking how work could impact profits rather than only completing a specialty. Whether every detail matches your industry is less important than the structural idea: integrated attention to profit-impacting improvement beats permanent narrow repetition.
        </p>
      </section>

      <section className="ip-section ip-reveal" aria-labelledby="ip-vs">
        <h2 id="ip-vs">Specialized worker versus value creator</h2>
        <div className="ip-compare">
          <div className="ip-compare-col ip-compare-col--negative">
            <h3>Specialized worker</h3>
            <ul>
              {IMPACT_PROFITS_SPECIALIZED_WORKER.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="ip-compare-col ip-compare-col--positive">
            <h3>Value creator</h3>
            <ul>
              {IMPACT_PROFITS_VALUE_CREATOR.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-wealth">
        <h2 id="ip-wealth">Why value creation comes first</h2>
        <p>
          Wealth in this framework tracks created value, not brute hours. Small improvements in profit-impacting areas are still steps into the Neothink mentality: the move from follower to someone whose work visibly changes outcomes.
        </p>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-hoax">
        <h2 id="ip-hoax">The “white collar” barrier</h2>
        <p>
          Hamilton names a pattern where organizations reward staying in lane: less internal competition, simpler management. Breaking through is a conscious choice to develop integration anyway, using curiosity and profit focus as your own curriculum, not waiting for permission.
        </p>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-clock">
        <h2 id="ip-clock">Clockwork analogy</h2>
        <p>
          A specialized view is one gear turning in isolation; an integrated view is understanding how the mechanism fits together so you know which adjustment changes the outcome. That is the same habit applied to profits: whole system, not only your tooth on the gear.
        </p>
      </section>

      <div className="ip-section ip-reveal">
        <div className="ip-callout-dark">
          <p className="ip-callout-kicker">Transformation</p>
          <h3>From follower to value creator</h3>
          <p>
            When work connects to profit and essence, meaning and opportunity show up more often than in pure task repetition. The Neothink mentality, in this arc, starts with naming what impacts profits where you are.
          </p>
        </div>
      </div>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-steps-h">
        <h2 id="ip-steps-h">From Project Curiosity to impact profits</h2>
        <ol className="ip-steps">
          {IMPACT_PROFITS_PROCESS_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="ip-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ip-section ip-prose ip-reveal" aria-labelledby="ip-next-lesson">
        <h2 id="ip-next-lesson">What’s next in the series</h2>
        <p>
          The following lesson is{" "}
          <Link href={WP.higherLevelThinking}>Higher Level Thinking</Link>, accelerating integration once profit-impacting areas are in view.
        </p>
      </section>

      <section className="ip-faq ip-reveal" aria-labelledby="ip-faq-h">
        <h2 id="ip-faq-h">Frequently asked questions</h2>
        <div className="ip-faq-grid">
          {IMPACT_PROFITS_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="ip-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.beyondTunnelVision}>Beyond Tunnel Vision</Link>
        </p>
        <p>
          Next: <Link href={WP.higherLevelThinking}>Higher Level Thinking</Link>
        </p>
      </nav>

      <section className="ip-cta ip-reveal" aria-label="Continue the series">
        <h2>Continue the series</h2>
        <p>Open the full lesson list or follow new video on YouTube.</p>
        <div className="ip-cta-row">
          <Link href={WP.neothinkMentality} className="ip-btn">
            All lessons
          </Link>
          <a href={WP.podcastChannel} className="ip-btn ip-btn--ghost" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>
        </div>
      </section>
    </main>
  );
}
