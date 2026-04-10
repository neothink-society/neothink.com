"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  CURE_TO_AGING_CORE_ORDERED,
  CURE_TO_AGING_DEMAND_LIST,
  CURE_TO_AGING_FAQ,
  CURE_TO_AGING_LESSON,
  CURE_TO_AGING_MISSION_BULLETS,
  CURE_TO_AGING_PATH_FLOW,
  CURE_TO_AGING_STEPS,
  CURE_TO_AGING_SUPPLY_LIST,
  CURE_TO_AGING_TAKEAWAYS,
  CURE2AGING_URL,
} from "@/lib/cure-to-aging-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${CURE_TO_AGING_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${CURE_TO_AGING_LESSON.youtubeId}`;
const markHamiltonYoutubeSubscribe = "https://www.youtube.com/@realmarkhamilton?sub_confirmation=1";

export function CureToAgingPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".c2a-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("c2a-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("c2a-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="c2a-page">
      <header className="c2a-hero">
        <p className="c2a-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="c2a-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {CURE_TO_AGING_LESSON.number}</span>
        </p>
        <h1 id="c2a-heading">{CURE_TO_AGING_LESSON.title}</h1>
        <p className="c2a-dek">
          Hamilton connects the whole series to a civilizational goal: <strong>demand</strong> for curing aging—fueled by
          leaving routine ruts and wanting a life worth extending—and <strong>supply</strong> of breakthroughs, blocked in
          his analysis by initiatory force and regulation. The talk names <strong>cure2aging.com</strong>, the
          billionaire longevity spend, the DuPont/FDA story, and the <strong>Prime Law</strong> as a 28th Amendment.
        </p>
        <p className="c2a-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{CURE_TO_AGING_LESSON.videoRuntimeMinutes} min video · ~{CURE_TO_AGING_LESSON.readTimeMinutes} min read
          </span>
        </p>
      </header>

      <section className="c2a-section c2a-prose" aria-labelledby="c2a-intro">
        <h2 id="c2a-intro" className="c2a-visually-hidden">
          Introduction
        </h2>
        <p>
          This page follows the WordPress migration and the embedded lesson (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ; id {CURE_TO_AGING_LESSON.youtubeId}). If a transcript differs, treat the video and essay as the site copy.
          Prior lesson: <Link href={WP.soaringProductivity}>Soaring productivity</Link>. External site from the talk:{" "}
          <a href={CURE2AGING_URL} target="_blank" rel="noopener noreferrer">
            cure2aging.com
          </a>
          .
        </p>
      </section>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-quick">
        <p className="c2a-kicker">Quick answer</p>
        <h2 id="c2a-quick">How does the Neothink Mentality connect to curing aging?</h2>
        <p>
          <strong>The Neothink Mentality creates the massive demand needed to cure aging.</strong> When people shift
          from stagnant routine ruts toward becoming{" "}
          <Link href={WP.unlockYourGenius}>value creators</Link>, they rediscover desire for life—like the “child of the
          past” who saw endless possibilities. That demand is said to pull money into research, while the{" "}
          <Link href={WP.thePrimeLawMentality}>Prime Law</Link> horizon addresses regulatory obstacles on the supply
          side.
        </p>
      </section>

      <section className="c2a-video c2a-reveal" aria-label="Lesson video">
        <div className="c2a-video-frame">
          <iframe
            title="Neothink Mentality lesson 10: Cure to Aging"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-takeaways">
        <h2 id="c2a-takeaways">Key takeaways</h2>
        <div className="c2a-takeaways">
          <ul>
            {CURE_TO_AGING_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-longevity">
        <h2 id="c2a-longevity">What is the Neothink Mentality, and how does it affect longevity?</h2>
        <p>
          <strong>
            The Neothink Mentality is the move from specialized “following mode” to integrated “self-leader” thinking.
          </strong>{" "}
          In this lesson, that shift reignites creative drive and happiness—conditions Hamilton ties to wanting more life
          and to funding longevity science. Most people are described as trapped in specialized ruts; the series, starting
          with <Link href={WP.riseFromRut}>Rise from the routine rut</Link>, is built to break that cycle.
        </p>
        <h3 className="c2a-h3">The billionaire pattern</h3>
        <p>
          Self-made billionaires have spent <strong>millions to hundreds of millions of dollars</strong> toward curing
          aging. In the talk, they want to live because they are living the life they were meant to live—
          <Link href={WP.unlockYourGenius}>creating</Link>, in harmony with the essence of being human, happy, in love
          with life. Every self-made “major winner” had to leap beyond following mode; Hamilton states that all self-made
          billionaires live in the Neothink Mentality.
        </p>
      </section>

      <aside className="c2a-insight c2a-section c2a-reveal" aria-labelledby="c2a-conn">
        <p className="c2a-kicker" id="c2a-conn">
          The connection
        </p>
        <h3>Why value creators want longevity</h3>
        <p>
          When you create value and feel aligned with essence, you naturally want more life—you want to live forever,
          as the video puts it. Routine ruts, by contrast, dull enthusiasm; people stuck there are described as bored
          with life and not sharing the same desire to live as those in the Neothink Mentality.
        </p>
      </aside>

      <div className="c2a-section c2a-reveal">
        <div className="c2a-child-card">
          <h3>The child of the past</h3>
          <p>
            Remember childhood—<strong>endless possibilities</strong>, wonder, enthusiasm for what was ahead. In
            specialized jobs and routine ruts, that child is described as buried under “falling leaves of resignation.”
            The Neothink Mentality is framed as bringing that inner life back.
          </p>
        </div>
      </div>

      <hr className="c2a-rule c2a-reveal" />

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-demand">
        <h2 id="c2a-demand">How do we create the massive demand needed to cure aging?</h2>
        <p>
          <strong>Curing aging is framed as a cause-and-effect, demand-and-supply dynamic.</strong> First there must be
          massive <strong>demand</strong> so money pours into R&D and scientists and companies meet it. Through{" "}
          <Link href={WP.higherLevelThinking}>integrated thinking</Link>, Hamilton says he has identified a path: spread
          the mentality, grow desire for life, then fund the science. He put up{" "}
          <a href={CURE2AGING_URL} target="_blank" rel="noopener noreferrer">
            cure2aging.com
          </a>{" "}
          for the billionaire club with one version of that path.
        </p>
      </section>

      <div className="c2a-section c2a-reveal">
        <div className="c2a-path-flow">
          <h3>The path to curing aging</h3>
          <div className="c2a-path-inner">
            {CURE_TO_AGING_PATH_FLOW.flatMap((item, i) => {
              const step = (
                <div key={`step-${item.step}`} className="c2a-path-step">
                  <div className="c2a-path-step-num">{item.step}</div>
                  <p>{item.label}</p>
                </div>
              );
              if (i < CURE_TO_AGING_PATH_FLOW.length - 1) {
                return [
                  step,
                  <span key={`arr-${item.step}`} className="c2a-path-arrow" aria-hidden>
                    →
                  </span>,
                ];
              }
              return [step];
            })}
          </div>
        </div>
      </div>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-ruts">
        <h2 id="c2a-ruts" className="c2a-visually-hidden">
          Routine ruts
        </h2>
        <h3 className="c2a-h3">Why routine ruts kill demand</h3>
        <p>
          People stuck doing the same thing every day <strong>get bored with life</strong> and do not want to live
          forever in the same way. The Neothink Mentality is said to lift not only work and wealth but happiness, joy,
          and the desire to live—restoring the child of the past. That is why most of the talks focus on pulling you out
          of stagnation: breaking specialized thinking, following mode, and top-down orders, and learning to integrate your
          own path—so you can become a value creator (only humans create values in this framework) and feel you do not
          want to die.
        </p>
      </section>

      <aside className="c2a-synergy c2a-section c2a-reveal" aria-labelledby="c2a-step1">
        <p className="c2a-kicker" id="c2a-step1">
          Step one
        </p>
        <h3>Creating the demand</h3>
        <p>
          Hamilton’s stated priority is demand: books, talks, and videos mostly aim to free people from the “trap” of
          stagnation. In the video he says that once you are in the mentality, you can join the ultimate goal—curing aging
          and death—with step one being that shift in mentality. He asks viewers to invite family and friends to the
          talks so the mentality spreads.
        </p>
      </aside>

      <hr className="c2a-rule c2a-reveal" />

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-reg">
        <h2 id="c2a-reg">What are the regulatory obstacles blocking longevity progress?</h2>
        <p>
          <strong>
            Even with demand, supply can stay blocked: political structures and regulations based on initiatory force
            suppress progress and make breakthrough research cost-prohibitive.
          </strong>{" "}
          The “power class”—politicians, bureaucrats, media, legal matrix—is described as pushing compliance: comply or
          face criminal penalties. That blocks everyone, billionaires included, from freely supplying what demand asks
          for.
        </p>
      </section>

      <div className="c2a-section c2a-reveal">
        <div className="c2a-quote-card">
          <span className="c2a-quote-mark" aria-hidden>
            “
          </span>
          <p className="c2a-kicker">Real example</p>
          <h3>The DuPont cancer program</h3>
          <p>
            Hamilton’s father worked with <strong>DuPont</strong> in the <strong>1970s</strong> on a{" "}
            <span className="c2a-highlight">very promising approach to cancer</span>.{" "}
            <span className="c2a-highlight">FDA requirements made the project too cost-prohibitive</span> and it was
            killed—not because science had nowhere to go, but because regulatory burden ended viability.
          </p>
        </div>
      </div>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-comply">
        <h2 id="c2a-comply" className="c2a-visually-hidden">
          Compliance
        </h2>
        <h3 className="c2a-h3">The comply-or-criminal structure</h3>
        <p>
          Laws and regulations rooted in initiatory force mean: <strong>comply or become a criminal. Comply or go to prison.</strong>{" "}
          Until that structure changes, Hamilton argues we will not have freedom to supply demand as it grows—except
          perhaps by rare paths like a new sovereign country, which he mentions as difficult.
        </p>
      </section>

      <aside className="c2a-trap c2a-section c2a-reveal" aria-labelledby="c2a-step2">
        <p className="c2a-kicker" id="c2a-step2">
          Step two
        </p>
        <h3>Freeing the supply</h3>
        <p>
          Freedom to supply is tied to <Link href={WP.thePrimeLawMentality}>removing initiatory force from government</Link>—{" "}
          for example the <strong>Prime Law</strong> as a <strong>28th Amendment</strong> to the U.S. Constitution, a
          theme from earlier lessons. Hamilton also appeals to the billionaire club: money and influence might help
          establish a sovereign jurisdiction without suppressive regulation. The open letter on{" "}
          <a href={CURE2AGING_URL} target="_blank" rel="noopener noreferrer">
            cure2aging.com
          </a>{" "}
          is addressed in that direction.
        </p>
      </aside>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-both">
        <h2 id="c2a-both">Why curing aging requires both demand and supply</h2>
        <div className="c2a-compare">
          <div className="c2a-compare-col c2a-compare-col--positive">
            <h3>Creating demand</h3>
            <ul>
              {CURE_TO_AGING_DEMAND_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="c2a-compare-col c2a-compare-col--positive">
            <h3>Freeing supply</h3>
            <ul>
              {CURE_TO_AGING_SUPPLY_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-pm">
        <h2 id="c2a-pm">How does the Prime Law enable the cure for aging?</h2>
        <p>
          <strong>
            The <Link href={WP.thePrimeLawMentality}>Prime Law</Link> is presented as removing initiatory force—especially
            from government—so that “pure freedom” can unblock progress.
          </strong>{" "}
          Hamilton contrasts adding positive rights (the Bill of Rights) with removing the negative (initiatory force);
          he argues the founders were close but “one integration short.” With the Prime Law as a 28th Amendment, medical
          and scientific supply could meet demand without the same regulatory choke points. See also{" "}
          <Link href={WP.primeLaw}>Prime Law</Link> on this site.
        </p>
      </section>

      <div className="c2a-section c2a-reveal">
        <div className="c2a-callout-dark">
          <p className="c2a-callout-kicker">Alternative path</p>
          <h3>The billionaire option</h3>
          <p>
            The appeal to ultra-wealthy audiences: they have power, money, and influence to possibly establish a sovereign
            new country without a government using initiatory force to suppress progress.
          </p>
        </div>
      </div>

      <hr className="c2a-rule c2a-reveal" />

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-life">
        <h2 id="c2a-life">How can I achieve the “life worth living forever”?</h2>
        <p>
          <strong>
            The lesson pairs mental evolution with aggressive longevity practices: become an integrated self-leader while
            staying healthy long enough for science to close the gap.
          </strong>{" "}
          Hamilton says his number-one goal is to cure aging and death; those close to him work on longevity to “hold us
          over” until biological solutions land. The channel will bring in health content for that reason.
        </p>
      </section>

      <div className="c2a-section c2a-reveal">
        <div className="c2a-pair-grid">
          <div className="c2a-pair-card">
            <h3>Mental evolution</h3>
            <p>
              In one year, become an integrator rather than a follower—rise in business, wealth, and happiness through
              the Neothink Mentality and join the demand for more life.
            </p>
          </div>
          <div className="c2a-pair-card">
            <h3>Longevity health</h3>
            <p>
              Be conscious about health; work aggressively on longevity to bridge the gap until biological immortality
              becomes feasible.
            </p>
          </div>
        </div>
      </div>

      <div className="c2a-section c2a-reveal">
        <div className="c2a-train-card" aria-labelledby="c2a-train-h">
          <p className="c2a-kicker" id="c2a-train-h">
            Analogy
          </p>
          <h3>The train on a circular track</h3>
          <p>
            Imagine specialized thinking as a <strong>train on a circular track</strong>—same path every day until the
            engine wears out. The Neothink Mentality is like a <strong>switch</strong> that lets the train leave the
            circle toward an open horizon. Longevity practices <strong>upgrade the engine</strong> so you can keep going
            until the track ahead includes real cures.
          </p>
        </div>
      </div>

      <hr className="c2a-rule c2a-reveal" />

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-mission">
        <h2 id="c2a-mission">What is the ultimate goal of these talks?</h2>
        <p>
          <strong>The stated ultimate goal is to cure aging and death.</strong> That means (1) growing demand by moving
          people out of stagnation into the Neothink Mentality, and (2) dismantling illusions and regulations that block
          supply. Mission elements from the talk include:
        </p>
        <ul className="c2a-mission-list">
          {CURE_TO_AGING_MISSION_BULLETS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p>
          <strong>In one year</strong>, Hamilton wants you to be someone different—not a follower, but an integrator and
          self-leader. That is “number one”; periodic talks on illusions are “number two,” alongside building demand and
          freeing supply until aging is cured.
        </p>
      </section>

      <aside className="c2a-insight c2a-section c2a-reveal" aria-labelledby="c2a-vision">
        <p className="c2a-kicker" id="c2a-vision">
          The vision
        </p>
        <h3>The life worth living forever</h3>
        <p>
          When you leave following mentality and leap into integrated Neothink thinking, you can begin to create value.
          When that happens, you are in harmony with essence—and you do not want to die. You live the life worth living
          forever.
        </p>
      </aside>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-core">
        <h2 id="c2a-core">What is the core message about curing aging?</h2>
        <p>
          <strong>Curing aging is framed through demand and supply.</strong> The Neothink Mentality grows demand by
          turning stagnant followers into joyful value creators who want more life. The Prime Law story frees supply by
          removing obstacles from initiatory force. Together, they aim at biological immortality as the horizon—not
          fantasy to Hamilton, given billionaire investment and a clear political–economic path.
        </p>
        <ol className="c2a-core-ol">
          {CURE_TO_AGING_CORE_ORDERED.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
        <p>
          The goal is to end stagnation of spirit and, ultimately, to cure aging and death. Everyone deserves the life
          they were meant to live—the life worth living forever.
        </p>
      </section>

      <section className="c2a-section c2a-prose c2a-reveal" aria-labelledby="c2a-bio">
        <h2 id="c2a-bio">The path to biological immortality</h2>
        <p className="c2a-subhead-center">From routine rut to the life worth living forever</p>
        <ol className="c2a-steps">
          {CURE_TO_AGING_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="c2a-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="c2a-faq c2a-reveal" aria-labelledby="c2a-faq-h">
        <h2 id="c2a-faq-h">Frequently asked questions</h2>
        <div className="c2a-faq-grid">
          {CURE_TO_AGING_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="c2a-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.soaringProductivity}>Soaring productivity</Link>
        </p>
        <p>
          Next: <Link href={WP.soarBeyondPeers}>Soar beyond peers</Link>
        </p>
      </nav>

      <section className="c2a-cta c2a-reveal" aria-label="Continue the series">
        <h2>Continue the journey</h2>
        <p>
          Subscribe on YouTube for the rest of the series—building demand for life and addressing the illusions that
          block progress.
        </p>
        <div className="c2a-cta-row">
          <Link href={WP.neothinkMentality} className="c2a-btn">
            All lessons
          </Link>
          <a href={markHamiltonYoutubeSubscribe} className="c2a-btn c2a-btn--ghost" target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </main>
  );
}
