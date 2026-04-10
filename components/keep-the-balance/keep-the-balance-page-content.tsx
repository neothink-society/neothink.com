"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  KEEP_THE_BALANCE_FAQ,
  KEEP_THE_BALANCE_HARMONY,
  KEEP_THE_BALANCE_LEFT_REFLEX,
  KEEP_THE_BALANCE_LESSON,
  KEEP_THE_BALANCE_STEPS,
  KEEP_THE_BALANCE_TAKEAWAYS,
} from "@/lib/keep-the-balance-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${KEEP_THE_BALANCE_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${KEEP_THE_BALANCE_LESSON.youtubeId}`;
const markHamiltonYoutubeSubscribe = "https://www.youtube.com/@realmarkhamilton?sub_confirmation=1";

export function KeepTheBalancePageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".ktb-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("ktb-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("ktb-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="ktb-page">
      <header className="ktb-hero">
        <p className="ktb-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="ktb-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {KEEP_THE_BALANCE_LESSON.number}</span>
        </p>
        <h1 id="ktb-heading">{KEEP_THE_BALANCE_LESSON.title}</h1>
        <p className="ktb-dek">
          Hamilton frames <strong>keeping the balance</strong> as a life compass when{" "}
          <Link href={WP.moneyLoveAffair}>value creation</Link> accelerates—so exhilaration over new work does not erase
          family, health, or the relationships that let you <em>feel</em> happiness. The talk names a familiar reflex: the
          logical mind says <strong>“too busy”</strong>; the emotional side often knows to say yes to pickleball, Iceland, or
          an ordinary afternoon with the people who matter.
        </p>
        <p className="ktb-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{KEEP_THE_BALANCE_LESSON.videoRuntimeMinutes} min video · ~{KEEP_THE_BALANCE_LESSON.readTimeMinutes} min read
          </span>
        </p>
      </header>

      <section className="ktb-section ktb-prose" aria-labelledby="ktb-intro">
        <h2 id="ktb-intro" className="ktb-visually-hidden">
          Introduction
        </h2>
        <p>
          This page follows the WordPress migration and the embedded lesson (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ; id {KEEP_THE_BALANCE_LESSON.youtubeId}). If wording differs from a transcript, treat the video as the spoken
          source. Hamilton opens with Neothink books in <strong>140 countries</strong> and <strong>12 languages</strong>.
          Prior lesson: <Link href={WP.moneyLoveAffair}>Money love affair</Link>. Branding: <strong>Neothink</strong>{" "}
          (one word).
        </p>
      </section>

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-quick">
        <p className="ktb-kicker">Quick answer</p>
        <h2 id="ktb-quick">How do I balance career success with personal happiness?</h2>
        <p>
          <strong>
            Harmonize value creation (work that fulfills your creative essence) with value reflection (time that lets you
            experience happiness with people you love).
          </strong>{" "}
          If happiness is the purpose of life—as Hamilton says he believes—balance is not optional decoration; it
          steers you toward a life you can actually relish, not only produce.
        </p>
      </section>

      <section className="ktb-video ktb-reveal" aria-label="Lesson video">
        <div className="ktb-video-frame">
          <iframe
            title="Neothink Mentality lesson 13: Keep the Balance"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-takeaways">
        <h2 id="ktb-takeaways">Key takeaways</h2>
        <div className="ktb-takeaways">
          <ul>
            {KEEP_THE_BALANCE_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-important">
        <h2 id="ktb-important">What matters—to him, and to you</h2>
        <p>
          Hamilton lists <strong>wife and children</strong>, <strong>writing and readers</strong>,{" "}
          <strong>business and customers</strong>, <strong>health and body</strong>, and—since going public—
          <strong>videos and relationship with you</strong>, the audience. The exercise implied for you: name the domains
          that should stay on your compass, not only your calendar.
        </p>
      </section>

      <aside className="ktb-insight ktb-section ktb-reveal" aria-labelledby="ktb-compass">
        <p className="ktb-kicker" id="ktb-compass">
          Life compass
        </p>
        <h3>Happiness as north</h3>
        <p>
          Keeping the balance is described as keeping movement pointed toward happiness. Busy seasons will come,
          especially as Neothink Mentality work deepens; the compass is what keeps other vital areas from disappearing
          behind momentum.
        </p>
      </aside>

      <hr className="ktb-rule ktb-reveal" />

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-reflex">
        <h2 id="ktb-reflex">The “too busy” reflex—and two brains</h2>
        <p>
          When family invites him into recreation, Hamilton describes a bodily <strong>no—I can’t, I’m too busy</strong>{" "}
          surge. He attributes that first hit to the <strong>left brain</strong>: logical, in-the-moment, schedule-bound.
          The <strong>right brain</strong> is framed as more creative, emotional, subconscious. His practice: when the
          left-brain veto fires, <strong>work to keep the balance</strong>—let the emotional side weigh in. More often
          than not, he takes the walk, the game, or the trip—and finds life richer for it.
        </p>
      </section>

      <div className="ktb-section ktb-reveal">
        <div className="ktb-example-grid" aria-label="Examples from the talk">
          <div className="ktb-example-card">
            <div className="ktb-example-index" aria-hidden>
              1
            </div>
            <h3>Small yes</h3>
            <p>Pickleball or another simple recreational break—nothing exotic required to interrupt the busy trance.</p>
          </div>
          <div className="ktb-example-card">
            <div className="ktb-example-index" aria-hidden>
              2
            </div>
            <h3>Big yes</h3>
            <p>A more involved adventure—he mentions Iceland—as the kind of memory that balances scale with intimacy.</p>
          </div>
        </div>
      </div>

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-warning">
        <h2 id="ktb-warning">Why this lesson shows up now</h2>
        <p>
          As you move deeper into the Neothink Mentality, Hamilton expects you to get <strong>busier, more powerful, more
          successful</strong>—and more exhilarated by new creations. That high can crowd out other important parts of
          life unless you <strong>work hard to keep the balance</strong> on purpose.
        </p>
      </section>

      <hr className="ktb-rule ktb-reveal" />

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-harmony">
        <h2 id="ktb-harmony">Value creation and value reflection</h2>
        <p>
          <strong>Value creation</strong> through work brings happiness by fulfilling human essence—creating and placing
          values in the world. <strong>Value reflection</strong> with loved ones is how you <em>feel</em> that happiness,
          experience it, and in his phrase, <strong>cash in</strong> on the hard work. The punchline: learn to{" "}
          <strong>harmonize</strong> them—not merely prioritize one forever over the other. Harmony, he says, is what
          moves happiness, the “true reason for your life.”
        </p>
      </section>

      <div className="ktb-section ktb-reveal">
        <div className="ktb-callout-dark" aria-labelledby="ktb-rhetorical">
          <p className="ktb-callout-kicker" id="ktb-rhetorical">
            From the talk
          </p>
          <h3>Build and relish</h3>
          <p>
            “What good is simply building happiness without being able to experience and relish in it?” The video pairs
            that question with Hamilton’s self-description: <strong>always happy</strong>, <strong>always busy</strong>,
            yet deliberate about stepping away for people he loves—calling that pattern the best way to live.
          </p>
        </div>
      </div>

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-compare">
        <h2 id="ktb-compare">Busy reflex vs intentional harmony</h2>
        <div className="ktb-compare">
          <div className="ktb-compare-col ktb-compare-col--negative">
            <h3>Left-brain default</h3>
            <ul>
              {KEEP_THE_BALANCE_LEFT_REFLEX.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="ktb-compare-col ktb-compare-col--positive">
            <h3>Balanced practice</h3>
            <ul>
              {KEEP_THE_BALANCE_HARMONY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-steps">
        <h2 id="ktb-steps">Keeping the balance in practice</h2>
        <p className="ktb-subhead-center">A sequence you can reuse</p>
        <ol className="ktb-steps">
          {KEEP_THE_BALANCE_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="ktb-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ktb-section ktb-prose ktb-reveal" aria-labelledby="ktb-series">
        <h2 id="ktb-series">What comes next in the series</h2>
        <p>
          Next lesson: <Link href={WP.powerOfCalm}>Power of calm</Link>—composure under pressure as the mentality
          keeps leveling up. You can always return to the hub: <Link href={WP.neothinkMentality}>Neothink Mentality</Link>.
        </p>
      </section>

      <section className="ktb-faq ktb-reveal" aria-labelledby="ktb-faq-h">
        <h2 id="ktb-faq-h">Frequently asked questions</h2>
        <div className="ktb-faq-grid">
          {KEEP_THE_BALANCE_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="ktb-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.moneyLoveAffair}>Money love affair</Link>
        </p>
        <p>
          Next: <Link href={WP.powerOfCalm}>Power of calm</Link>
        </p>
      </nav>

      <section className="ktb-cta ktb-reveal" aria-label="Continue the series">
        <h2>Continue the journey</h2>
        <p>Subscribe on YouTube and use the Society link in the video when you are ready to go deeper than the shorts.</p>
        <div className="ktb-cta-row">
          <Link href={WP.neothinkMentality} className="ktb-btn">
            All lessons
          </Link>
          <a href={markHamiltonYoutubeSubscribe} className="ktb-btn ktb-btn--ghost" target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </main>
  );
}
