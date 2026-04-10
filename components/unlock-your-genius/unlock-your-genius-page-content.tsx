"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  UNLOCK_YOUR_GENIUS_FAQ,
  UNLOCK_YOUR_GENIUS_LESSON,
  UNLOCK_YOUR_GENIUS_PROCESS_STEPS,
  UNLOCK_YOUR_GENIUS_TAKEAWAYS,
  UNLOCK_YOUR_GENIUS_VALUE_CREATOR,
  UNLOCK_YOUR_GENIUS_VALUE_PRODUCER,
} from "@/lib/unlock-your-genius-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${UNLOCK_YOUR_GENIUS_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${UNLOCK_YOUR_GENIUS_LESSON.youtubeId}`;

const LIFT_DIMENSIONS = [
  {
    title: "Money and career",
    body:
      "The talk places outsized income with creators of businesses, services, and technologies—not with instruction-following alone.",
  },
  {
    title: "Relationships",
    body:
      "Hamilton mentions romantic life alongside money: confidence and integration from creation reframing how you show up with others.",
  },
  {
    title: "Inner life",
    body:
      "Joy, motivation, and harmony with essence are described as downstream of even small moves into creating values.",
  },
] as const;

export function UnlockYourGeniusPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".uyg-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("uyg-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("uyg-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="uyg-page">
      <header className="uyg-hero">
        <p className="uyg-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="uyg-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {UNLOCK_YOUR_GENIUS_LESSON.number}</span>
        </p>
        <h1 id="uyg-heading">{UNLOCK_YOUR_GENIUS_LESSON.title}</h1>
        <p className="uyg-dek">
          The video names the gap between <strong>following mode</strong>—specialized tasks and stagnation—and the move
          into <strong>integrated thinking</strong> and <strong>creating values</strong>. Any honest job still{" "}
          <em>produces</em> value; this lesson distinguishes that from <em>creating</em> value, which is where the arc
          says money and deep fulfillment concentrate.
        </p>
        <p className="uyg-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{UNLOCK_YOUR_GENIUS_LESSON.videoRuntimeMinutes} min video · ~{UNLOCK_YOUR_GENIUS_LESSON.readTimeMinutes} min
            read
          </span>
        </p>
      </header>

      <section className="uyg-section uyg-prose" aria-labelledby="uyg-intro">
        <h2 id="uyg-intro" className="uyg-visually-hidden">
          Introduction
        </h2>
        <p>
          After <Link href={WP.areasOfProfit}>areas of purpose</Link> and{" "}
          <Link href={WP.higherLevelThinking}>integrated thinking</Link>, this lesson states the distinction bluntly:{" "}
          <strong>value producer</strong> versus <strong>value creator</strong>. This essay follows the WordPress
          migration and the spoken video (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ). Branding is <strong>Neothink</strong> (one word). The transcript is the authority if wording differs.
        </p>
      </section>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-quick">
        <p className="uyg-kicker">Quick answer</p>
        <h2 id="uyg-quick">What is the difference between producing values and creating values?</h2>
        <p>
          <strong>
            Producing values means doing assigned work well inside someone else’s design—still necessary and honorable.
          </strong>{" "}
          Creating values means bringing something <em>new</em> into existence: a better process, a fix, a product, a
          venture—using integrated thinking. The talk insists that only the human mind creates values in that sense;
          following mode keeps most people at production without that creative leap.
        </p>
      </section>

      <section className="uyg-video uyg-reveal" aria-label="Lesson video">
        <div className="uyg-video-frame">
          <iframe
            title="Neothink Mentality lesson 7: Unlock Your Genius"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-takeaways">
        <h2 id="uyg-takeaways">Key takeaways</h2>
        <div className="uyg-takeaways">
          <ul>
            {UNLOCK_YOUR_GENIUS_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-following">
        <h2 id="uyg-following">Why people stay stuck in following mode</h2>
        <p>
          Hamilton describes a <strong>prevailing following-mode mentality</strong>: specialized tasks, little
          integration, patterns that pass down across generations. The cook at McDonald’s is the stock example—flipping
          burgers as taught, producing value, not integrating or creating at a higher level. The transcript is careful:
          that work is still valuable and admirable; the point is structural, not to demean an occupation. In the story,
          that path rarely yields “great money” or the life someone might have imagined as a child—so the series aims to
          open a different trajectory.
        </p>
      </section>

      <aside className="uyg-def uyg-reveal" aria-labelledby="uyg-trap">
        <p className="uyg-def-label">The trap</p>
        <h3 id="uyg-trap">Following mode</h3>
        <p>
          Specialized thinking: you do what you were taught, stay in tunnel vision, and repeat. Production without
          integration is the ceiling the talk is written to break.
        </p>
      </aside>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-expand">
        <h2 id="uyg-expand">How the mind expands into integrated thinking</h2>
        <p>
          Breaking tunnel vision means seeing and connecting more of reality—step by step, talk by talk, as the transcript
          repeats. It may begin with something small: a more efficient way to do a task.{" "}
          <strong>Bringing that improvement to the business is your baby step into integrated thinking</strong>—because
          you introduced a new way, not only executed an old one. From there you move toward creating, not only
          following.
        </p>
      </section>

      <div className="uyg-section uyg-reveal">
        <div className="uyg-result">
          <p className="uyg-kicker">Baby steps</p>
          <p>
            Small efficiencies matter because they are <em>yours</em>: you integrated context and changed an outcome. That
            is the hinge between producer and creator in this lesson’s language.
          </p>
        </div>
      </div>

      <aside className="uyg-def uyg-reveal" aria-labelledby="uyg-vc-def">
        <p className="uyg-def-label">The breakthrough</p>
        <h3 id="uyg-vc-def">Value creator</h3>
        <p>
          Someone who uses integrated thinking to bring something new into existence—a process, offering, or venture.
          Creators of businesses, services, and technologies are the ones who make the outsized returns in the story—not
          because production is worthless, but because creation scales differently.
        </p>
      </aside>

      <section className="uyg-section uyg-reveal" aria-labelledby="uyg-vs">
        <h2 id="uyg-vs">Value producer vs. value creator</h2>
        <div className="uyg-compare">
          <div className="uyg-compare-col uyg-compare-col--negative">
            <h3>Value producer (following)</h3>
            <ul>
              {UNLOCK_YOUR_GENIUS_VALUE_PRODUCER.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="uyg-compare-col uyg-compare-col--positive">
            <h3>Value creator (integrating)</h3>
            <ul>
              {UNLOCK_YOUR_GENIUS_VALUE_CREATOR.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-money">
        <h2 id="uyg-money">Money, essence, and “only the human mind”</h2>
        <p>
          The video is direct: <strong>that is where the money is</strong>—with creators. It also says that only the
          human mind creates values; nothing else in the known universe does. When you create, even slightly at first, the
          transcript describes <strong>deep-rooted excitement</strong> and motivation—getting in sync with who you were
          meant to be, integrated with <strong>essence</strong>. Hamilton asks whether you want the joy and love that
          come from falling in harmony with that essence—language the essay preserves without adding promises beyond
          what the recording claims.
        </p>
      </section>

      <div className="uyg-section uyg-reveal">
        <div className="uyg-callout-dark">
          <p className="uyg-callout-kicker">Core truth</p>
          <h3>Uniquely human power</h3>
          <p>
            Creation of values is framed as the distinct human capacity. The Neothink mentality names the integrated,
            self-leader path that exercises it—this lesson is where producer vs. creator is drawn in starkest terms.
          </p>
        </div>
      </div>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-transform">
        <h2 id="uyg-transform">What the transformation can touch</h2>
        <p>
          The transcript says Hamilton will lift you <strong>monetarily</strong>, <strong>romantically</strong>, and into
          the <strong>Neothink mentality</strong>—a life lifted to the “next level” by feeling integration. The essay
          summarizes that as multiple dimensions without guaranteeing outcomes:
        </p>
        <div className="uyg-lift-grid">
          {LIFT_DIMENSIONS.map((d) => (
            <div key={d.title} className="uyg-lift-card">
              <h3>{d.title}</h3>
              <p>{d.body}</p>
            </div>
          ))}
        </div>
        <p>
          The WordPress essay adds the <strong>train vs. drone</strong> analogy: a follower like a train on fixed tracks;
          the Neothink mentality like a drone that can integrate a wider landscape and choose a path. Same metaphor,
          different emphasis than other lessons—here to reinforce creation vs. following.
        </p>
      </section>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-neothink">
        <h2 id="uyg-neothink">Into the Neothink mentality</h2>
        <p>
          The close of the recording invites subscription and a link below for more—standard for the channel. Substantively,
          it positions the series as the vehicle into integrated thinking and the Neothink mentality: from limited following
          to an unlimited integrating stance that does not need an external authority to script every move, and a mind
          stretched into a “new existence.” That lines up with the next lessons in the hub, beginning with{" "}
          <Link href={WP.thePrimeLawMentality}>The Prime Law mentality</Link>.
        </p>
      </section>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-steps-h">
        <h2 id="uyg-steps-h">From following to creating</h2>
        <ol className="uyg-steps">
          {UNLOCK_YOUR_GENIUS_PROCESS_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="uyg-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="uyg-section uyg-prose uyg-reveal" aria-labelledby="uyg-core">
        <h2 id="uyg-core">Core message of this stretch of the journey</h2>
        <p>
          Liberation from following mode, step by step: integrate reality, build your path, become a value creator—not
          only a producer. In the talk’s closing list, that is where the money, fulfillment, joy, and alignment with
          essence live—because nothing else in the universe creates values; people do.
        </p>
      </section>

      <section className="uyg-faq uyg-reveal" aria-labelledby="uyg-faq-h">
        <h2 id="uyg-faq-h">Frequently asked questions</h2>
        <div className="uyg-faq-grid">
          {UNLOCK_YOUR_GENIUS_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="uyg-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.areasOfProfit}>Areas of Profit</Link>
        </p>
        <p>
          Next: <Link href={WP.thePrimeLawMentality}>The Prime Law mentality</Link>
        </p>
      </nav>

      <section className="uyg-cta uyg-reveal" aria-label="Continue the series">
        <h2>Continue the series</h2>
        <p>Open the full lesson list or follow new video on YouTube.</p>
        <div className="uyg-cta-row">
          <Link href={WP.neothinkMentality} className="uyg-btn">
            All lessons
          </Link>
          <a href={WP.podcastChannel} className="uyg-btn uyg-btn--ghost" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>
        </div>
      </section>
    </main>
  );
}
