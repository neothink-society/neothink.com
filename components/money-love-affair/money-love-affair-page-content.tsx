"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  MONEY_LOVE_AFFAIR_FAQ,
  MONEY_LOVE_AFFAIR_LESSON,
  MONEY_LOVE_AFFAIR_LOVE_AFFAIR,
  MONEY_LOVE_AFFAIR_OBSESSION,
  MONEY_LOVE_AFFAIR_STEPS,
  MONEY_LOVE_AFFAIR_TAKEAWAYS,
} from "@/lib/money-love-affair-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${MONEY_LOVE_AFFAIR_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${MONEY_LOVE_AFFAIR_LESSON.youtubeId}`;
const markHamiltonYoutubeSubscribe = "https://www.youtube.com/@realmarkhamilton?sub_confirmation=1";

export function MoneyLoveAffairPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".mla-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("mla-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("mla-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="mla-page">
      <header className="mla-hero">
        <p className="mla-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="mla-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {MONEY_LOVE_AFFAIR_LESSON.number}</span>
        </p>
        <h1 id="mla-heading">{MONEY_LOVE_AFFAIR_LESSON.title}</h1>
        <p className="mla-dek">
          Inside the Society, members are described as falling <strong>in love with making money</strong>—not by
          grinding harder, but by doing what they love while treating <strong>money as an effect</strong> of value put
          into society. This lesson names the survival tether to cash, the cause-and-effect flip, and the contrast between
          producing existing values and creating new ones (McDonald’s cook vs Tesla-scale creation in the talk).
        </p>
        <p className="mla-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{MONEY_LOVE_AFFAIR_LESSON.videoRuntimeMinutes} min video · ~{MONEY_LOVE_AFFAIR_LESSON.readTimeMinutes} min
            read
          </span>
        </p>
      </header>

      <section className="mla-section mla-prose" aria-labelledby="mla-intro">
        <h2 id="mla-intro" className="mla-visually-hidden">
          Introduction
        </h2>
        <p>
          This page follows the WordPress migration and the embedded lesson (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ; id {MONEY_LOVE_AFFAIR_LESSON.youtubeId}). If wording differs from a transcript, treat the video as the spoken
          source. Prior lesson: <Link href={WP.soarBeyondPeers}>Soar beyond peers</Link>. Branding:{" "}
          <strong>Neothink</strong> (one word).
        </p>
      </section>

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-quick">
        <p className="mla-kicker">Quick answer</p>
        <h2 id="mla-quick">How can I fall in love with making money instead of obsessing over it?</h2>
        <p>
          <strong>
            Shift from treating money as the cause of your choices to treating value creation as the cause and money as
            the effect.
          </strong>{" "}
          The talk opens with how survival and quality of life tether most people to payday—then offers a Neothink frame:
          put the right kind of value into society, and society returns money in proportion. The “love affair” is framed
          as aligning earning with what you love because the question changes.
        </p>
      </section>

      <section className="mla-video mla-reveal" aria-label="Lesson video">
        <div className="mla-video-frame">
          <iframe
            title="Neothink Mentality lesson 12: Money Love Affair"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-takeaways">
        <h2 id="mla-takeaways">Key takeaways</h2>
        <div className="mla-takeaways">
          <ul>
            {MONEY_LOVE_AFFAIR_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-irony">
        <h2 id="mla-irony">The irony: we need money—and it steers everything</h2>
        <p>
          Hamilton calls it a <strong>shocking irony</strong>: people are preoccupied, sometimes obsessed, with money
          because survival and quality of life depend on it. That pressure shapes jobs, majors, and where we live. The
          lesson asks you to imagine decisions if those financial pressures were not the driver—what you would pursue
          drifts toward <strong>what you love</strong>, which is where the “love affair” language begins.
        </p>
      </section>

      <aside className="mla-insight mla-section mla-reveal" aria-labelledby="mla-tether">
        <p className="mla-kicker" id="mla-tether">
          The tether
        </p>
        <h3>Payday vs possibility</h3>
        <p>
          As long as thinking stays chained to payday, the video says, you cannot freely follow the creative drift the
          exercise invites. The Neothink path is not pretending the tether disappears—it is changing the causal story so
          the mind migrates toward creation anyway.
        </p>
      </aside>

      <hr className="mla-rule mla-reveal" />

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-cause">
        <h2 id="mla-cause">Money as effect, value as cause</h2>
        <p>
          <strong>Putting value into society is the cause; money returning is the effect.</strong> Greater value to
          society is said to bring greater money back. Members are described as learning which values to place and how—
          mastering that inside the Society—while this talk introduces the frame.
        </p>
      </section>

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-values">
        <h2 id="mla-values">Production of values vs creation of new values</h2>
        <p>
          <strong>Flipping burgers at McDonald’s</strong> is offered as producing an <em>existing</em> value—important,
          common, and how many livelihoods work. <strong>Tesla-style engineering</strong> illustrates creating values
          that did not exist before. Few livelihoods, in the talk, reach that creation realm—yet minds are described as
          born to create. That gap is where the money story lands:{" "}
          <strong>creation of values is greater value to society than production alone</strong>, with the Musk vs cook
          contrast used as magnitude, not moral ranking.
        </p>
      </section>

      <div className="mla-section mla-reveal">
        <div className="mla-example-grid" aria-label="Examples from the talk">
          <div className="mla-example-card">
            <div className="mla-example-index" aria-hidden>
              A
            </div>
            <h3>Production of existing values</h3>
            <p>
              Repeatable delivery of what the market already knows—necessary work, often the backbone of a paycheck, in
              the McDonald’s illustration.
            </p>
          </div>
          <div className="mla-example-card">
            <div className="mla-example-index" aria-hidden>
              B
            </div>
            <h3>Creation of new values</h3>
            <p>
              Bringing something into the world that was not there before—linked to integrated creativity and, in the
              story, to outsized economic returns when scale hits.
            </p>
          </div>
        </div>
      </div>

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-question">
        <h2 id="mla-question">Change the question</h2>
        <p>
          Stop centering <strong>“How do I make more money?”</strong> and instead ask{" "}
          <strong>“How do I put more value into society?”</strong> The video says that migration pulls you toward the
          creativity you were born with—the only thing in the known universe that creates—and toward doing what you
          love while wealth follows as return.
        </p>
      </section>

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-compare">
        <h2 id="mla-compare">Effect-chasing vs value-first thinking</h2>
        <div className="mla-compare">
          <div className="mla-compare-col mla-compare-col--negative">
            <h3>Tethered to money as cause</h3>
            <ul>
              {MONEY_LOVE_AFFAIR_OBSESSION.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="mla-compare-col mla-compare-col--positive">
            <h3>Love affair with value creation</h3>
            <ul>
              {MONEY_LOVE_AFFAIR_LOVE_AFFAIR.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="mla-section mla-reveal">
        <div className="mla-callout-dark" aria-labelledby="mla-exercise">
          <p className="mla-callout-kicker" id="mla-exercise">
            From the closing of the talk
          </p>
          <h3>The “sacred exercise”</h3>
          <p>
            When the video ends: put down the phone, turn off the tablet, close the laptop. Sit quietly, stare into
            space, and spend time imagining <strong>you</strong> putting values into society. The talk treats that
            solitary moment as the pivot—“your whole life from here on out changes.”
          </p>
        </div>
      </div>

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-steps">
        <h2 id="mla-steps">Putting it into practice</h2>
        <p className="mla-subhead-center">From survival story to creative cause</p>
        <ol className="mla-steps">
          {MONEY_LOVE_AFFAIR_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="mla-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mla-section mla-prose mla-reveal" aria-labelledby="mla-series">
        <h2 id="mla-series">How this fits the series</h2>
        <p>
          After <Link href={WP.soarBeyondPeers}>soaring beyond peers</Link> with vision and assembly-line execution,
          this lesson aims the same capacity at <strong>why</strong> money shows up: value first, with integrated
          thinking and Neothink Society practice as the place to deepen the skill. Next:{" "}
          <Link href={WP.keepTheBalance}>Keep the balance</Link>—harmonizing creation with reflection so happiness stays
          lived, not only built.
        </p>
      </section>

      <section className="mla-faq mla-reveal" aria-labelledby="mla-faq-h">
        <h2 id="mla-faq-h">Frequently asked questions</h2>
        <div className="mla-faq-grid">
          {MONEY_LOVE_AFFAIR_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="mla-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.soarBeyondPeers}>Soar beyond peers</Link>
        </p>
        <p>
          Next: <Link href={WP.keepTheBalance}>Keep the balance</Link>
        </p>
      </nav>

      <section className="mla-cta mla-reveal" aria-label="Continue the series">
        <h2>Continue the journey</h2>
        <p>
          Subscribe on YouTube for weekly drops—and join the Neothink Society from the links in the video if you want
          the full path members follow.
        </p>
        <div className="mla-cta-row">
          <Link href={WP.neothinkMentality} className="mla-btn">
            All lessons
          </Link>
          <a href={markHamiltonYoutubeSubscribe} className="mla-btn mla-btn--ghost" target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </main>
  );
}
