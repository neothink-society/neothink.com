"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  PRIME_LAW_MENTALITY_FAQ,
  PRIME_LAW_MENTALITY_LESSON,
  PRIME_LAW_MENTALITY_STEPS,
  PRIME_LAW_MENTALITY_TAKEAWAYS,
  PRIME_LAW_RULE_BY_MAN,
  PRIME_LAW_STRUCTURE,
  PRIME_LAW_UNDER_PRIME_LAW,
  PRIME_LAW_UNIVERSAL_OUTCOMES,
} from "@/lib/prime-law-mentality-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${PRIME_LAW_MENTALITY_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${PRIME_LAW_MENTALITY_LESSON.youtubeId}`;

export function ThePrimeLawMentalityPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".plm-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("plm-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("plm-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="plm-page">
      <header className="plm-hero">
        <p className="plm-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="plm-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {PRIME_LAW_MENTALITY_LESSON.number}</span>
        </p>
        <h1 id="plm-heading">{PRIME_LAW_MENTALITY_LESSON.title}</h1>
        <p className="plm-dek">
          This lesson applies the series to politics: how <strong>following mode</strong> hides the structure of force,
          and how the <strong>Prime Law</strong> (non-initiation of force as a single constitutional standard) is presented
          as the alternative to “rule by man.” For the wider Prime Law treatment on this site, see{" "}
          <Link href={WP.primeLaw}>Prime Law</Link>.
        </p>
        <p className="plm-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{PRIME_LAW_MENTALITY_LESSON.videoRuntimeMinutes} min video · ~{PRIME_LAW_MENTALITY_LESSON.readTimeMinutes}{" "}
            min read
          </span>
        </p>
      </header>

      <section className="plm-section plm-prose" aria-labelledby="plm-intro">
        <h2 id="plm-intro" className="plm-visually-hidden">
          Introduction
        </h2>
        <p>
          The embedded lesson matches the Institute migration and the video (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ). There is no separate transcript in repo; the essay follows WordPress. Branding: <strong>Neothink</strong>{" "}
          (one word).
        </p>
        <p>
          The opening frames political life as illusions that benefit those at the top while most people stay in{" "}
          <Link href={WP.riseFromRut}>following mode</Link>. Integrated thinking from earlier lessons is the lens; this
          installment names <strong>initiatory force</strong> as what to remove systemically, not only to debate policy by
          policy.
        </p>
      </section>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-quick">
        <p className="plm-kicker">Quick answer</p>
        <h2 id="plm-quick">What is the Prime Law and how does it relate to prosperity?</h2>
        <p>
          <strong>
            The Prime Law is a fundamental rule forbidding initiatory force, fraud, and coercion by any person, group, or
            government.
          </strong>{" "}
          As a constitutional amendment in Hamilton’s model, it would strip government of ruling-class uses of force and
          replace ad hoc “rule by man” with protection of freedom. The migration ties that freedom to conditions for
          broad wealth, health, and peace: aspirational outcomes in his civilizational argument, not promises from the
          Institute.
        </p>
      </section>

      <section className="plm-video plm-reveal" aria-label="Lesson video">
        <div className="plm-video-frame">
          <iframe
            title="Neothink Mentality lesson 8: The Prime Law Mentality"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-takeaways">
        <h2 id="plm-takeaways">Key takeaways</h2>
        <div className="plm-takeaways">
          <ul>
            {PRIME_LAW_MENTALITY_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-what">
        <h2 id="plm-what">What the Prime Law is</h2>
        <p>
          The essay defines it as a <strong>law of protection</strong>: no initiatory force, fraud, or coercion against a
          person’s self, property, or contract. Government’s legitimate role, in this framing, is to secure the conditions
          for people to prosper and live happily: conditions that require forbidding initiation of force. The structure
          is not a grab bag of policies but a preamble plus three articles that interlock:
        </p>
        <div className="plm-structure">
          {PRIME_LAW_STRUCTURE.map((block) => (
            <div key={block.label} className="plm-structure-card">
              <p className="plm-structure-kicker">{block.label}</p>
              <h3>{block.title}</h3>
              <p>{block.body}</p>
            </div>
          ))}
        </div>
      </section>

      <aside className="plm-def plm-reveal" aria-labelledby="plm-core-pl">
        <p className="plm-def-label">Core concept</p>
        <h3 id="plm-core-pl">The Prime Law</h3>
        <p>
          A bright line: force only in defense against those who initiate, never to initiate. The page argues that
          universality removes the main mechanism by which governments oppress citizens in the analysis Hamilton gives.
        </p>
      </aside>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-corruption">
        <h2 id="plm-corruption">Corruption and the “ruling class” dimension</h2>
        <p>
          Constitutional adoption is presented as <strong>cleansing initiatory force from government</strong>, not
          chasing scandals one by one. Programs that move resources by threat of force, however well-intentioned, rest on
          coercion in this account. The shift is described as a new dimension, not a tidier version of the same
          machinery.
        </p>
      </section>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-policy">
        <h2 id="plm-policy">Why policy-by-policy fighting is called impotent</h2>
        <p>
          Reform that stays inside a force-based system keeps regenerating new uses of force; the migration uses the{" "}
          <strong>ocean and bucket</strong> image: you may remove a bucket, but the source keeps filling the system.
          Hamilton suggests parties and campaigns center the Prime Law; he references the <strong>12 Visions Party</strong>{" "}
          as a vehicle built to foreground that idea, with the law as the centerpiece rather than the personality.
        </p>
      </section>

      <section className="plm-section plm-reveal" aria-labelledby="plm-vs">
        <h2 id="plm-vs">Rule by man vs. the Prime Law</h2>
        <div className="plm-compare">
          <div className="plm-compare-col plm-compare-col--negative">
            <h3>Rule by man (current paradigm in the essay)</h3>
            <ul>
              {PRIME_LAW_RULE_BY_MAN.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="plm-compare-col plm-compare-col--positive">
            <h3>Under the Prime Law (as presented)</h3>
            <ul>
              {PRIME_LAW_UNDER_PRIME_LAW.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-wealth">
        <h2 id="plm-wealth">Neothink mentality and “universal” outcomes</h2>
        <p>
          The Neothink mentality (integrated thinking and moving from follower to <Link href={WP.unlockYourGenius}>value creator</Link>) is
          linked to seeing past political theater. In a Prime Law environment, the text describes runaway productivity
          and people turning passions into ventures. Three headline outcomes in the migration:
        </p>
        <div className="plm-lift-grid">
          {PRIME_LAW_UNIVERSAL_OUTCOMES.map((o) => (
            <div key={o.title} className="plm-lift-card">
              <h3>{o.title}</h3>
              <p>{o.body}</p>
            </div>
          ))}
        </div>
        <p>
          The <strong>cleansing filter</strong> analogy: stop fishing debris from the stream and fix what pollutes at the
          source: the system that keeps producing initiatory force.
        </p>
      </section>

      <div className="plm-section plm-reveal">
        <div className="plm-callout-dark">
          <p className="plm-callout-kicker">Resources</p>
          <h3>Going deeper</h3>
          <p>
            Hamilton points readers to his book <em>The New World</em> for a full layout of the system and to
            possibilities, including health and longevity, when initiation of force is removed from society. That is his
            claim in the migration, not an Institute product pitch here.
          </p>
        </div>
      </div>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-illusions">
        <h2 id="plm-illusions">Seeing through political illusions</h2>
        <p>
          With <Link href={WP.higherLevelThinking}>integrated thinking</Link>, the essay says you notice how “benevolent”
          rights and benefits often ride on force, and that major parties can share the same force-based dimension. The aim
          is clarity, not cynicism for its own sake; effort goes toward structural change rather than endless
          tactical debates alone.
        </p>
      </section>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-steps-h">
        <h2 id="plm-steps-h">From following mode to self-leadership</h2>
        <ol className="plm-steps">
          {PRIME_LAW_MENTALITY_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="plm-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="plm-section plm-prose plm-reveal" aria-labelledby="plm-core-msg">
        <h2 id="plm-core-msg">Core message</h2>
        <p>
          Lasting freedom and prosperity require cutting initiatory force at the root, not only debating isolated
          policies. The Prime Law supplies the proposed mechanism; the Neothink mentality supplies the integrated vision
          to see the system as it is and to lead yourself while working toward that horizon.
        </p>
      </section>

      <section className="plm-faq plm-reveal" aria-labelledby="plm-faq-h">
        <h2 id="plm-faq-h">Frequently asked questions</h2>
        <div className="plm-faq-grid">
          {PRIME_LAW_MENTALITY_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="plm-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.unlockYourGenius}>Unlock Your Genius</Link>
        </p>
        <p>
          Next: <Link href={WP.soaringProductivity}>Soaring productivity</Link>
        </p>
      </nav>

      <section className="plm-cta plm-reveal" aria-label="Continue the series">
        <h2>Continue the series</h2>
        <p>Open the full lesson list or follow new video on YouTube.</p>
        <div className="plm-cta-row">
          <Link href={WP.neothinkMentality} className="plm-btn">
            All lessons
          </Link>
          <a href={WP.podcastChannel} className="plm-btn plm-btn--ghost" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>
        </div>
      </section>
    </main>
  );
}
