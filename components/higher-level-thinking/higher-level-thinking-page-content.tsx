"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  HIGHER_LEVEL_THINKING_DOWN_HERE,
  HIGHER_LEVEL_THINKING_FAQ,
  HIGHER_LEVEL_THINKING_LESSON,
  HIGHER_LEVEL_THINKING_RISING_STEPS,
  HIGHER_LEVEL_THINKING_TAKEAWAYS,
  HIGHER_LEVEL_THINKING_UP_HERE,
} from "@/lib/higher-level-thinking-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${HIGHER_LEVEL_THINKING_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${HIGHER_LEVEL_THINKING_LESSON.youtubeId}`;

export function HigherLevelThinkingPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".hlt-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("hlt-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("hlt-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="hlt-page">
      <header className="hlt-hero">
        <p className="hlt-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="hlt-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {HIGHER_LEVEL_THINKING_LESSON.number}</span>
        </p>
        <h1 id="hlt-heading">{HIGHER_LEVEL_THINKING_LESSON.title}</h1>
        <p className="hlt-dek">
          After <Link href={WP.beyondTunnelVision}>Project Curiosity</Link> and{" "}
          <Link href={WP.impactProfits}>areas that impact profits</Link>, the natural question is what{" "}
          <em>integrated thinking</em> actually is. This lesson names it as <strong>higher level thinking</strong>: the
          mind lifting above the hypnotic routine rut to see the whole business and pull integrations together.
        </p>
        <p className="hlt-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{HIGHER_LEVEL_THINKING_LESSON.videoRuntimeMinutes} min video · ~{HIGHER_LEVEL_THINKING_LESSON.readTimeMinutes}{" "}
            min read
          </span>
        </p>
      </header>

      <section className="hlt-section hlt-prose" aria-labelledby="hlt-intro">
        <h2 id="hlt-intro" className="hlt-visually-hidden">
          Introduction
        </h2>
        <p>
          This essay follows the Institute migration from WordPress and aligns with the lesson video (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ). Branding is <strong>Neothink</strong> (one word). The video and transcript are the spoken source if text
          and recording diverge.
        </p>
      </section>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-quick">
        <p className="hlt-kicker">Quick answer</p>
        <h2 id="hlt-quick">What is integrated thinking?</h2>
        <p>
          <strong>Integrated thinking is higher level thinking.</strong> Picture your mind rising above daily tasks to
          look down at the business with a wide view. From there you pull thoughts from different areas (integrations) that
          stay invisible to someone stuck in a specialized, almost hypnotic routine. That elevated view is the cognitive
          motion behind creative breakthroughs and clearer sight of profit impact.
        </p>
      </section>

      <section className="hlt-video hlt-reveal" aria-label="Lesson video">
        <div className="hlt-video-frame">
          <iframe
            title="Neothink Mentality lesson 5: Higher Level Thinking"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-takeaways">
        <h2 id="hlt-takeaways">Key takeaways</h2>
        <div className="hlt-takeaways">
          <ul>
            {HIGHER_LEVEL_THINKING_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-what">
        <h2 id="hlt-what">What integrated thinking does for your career</h2>
        <p>
          <strong>
            Integrated thinking is a higher level of cognitive function: you hold the business as a whole instead of only
            your slot in it.
          </strong>{" "}
          Diverse observations combine into integrations: missing pieces in how the place actually works, so profits,
          power, and opportunity come into focus rather than staying hidden behind task repetition.
        </p>
        <ul>
          <li>
            <strong>Wide perspective:</strong> you look down at the operation instead of tunnel vision on one chore.
          </li>
          <li>
            <strong>Connecting the dots:</strong> you pull from different roles and see links specialized workers miss.
          </li>
          <li>
            <strong>Temporal awareness:</strong> past, present, and future of the business can be held together.
          </li>
          <li>
            <strong>Creative motion:</strong> you can combine what has not been combined before: that is creativity in
            this framework.
          </li>
        </ul>
      </section>

      <aside className="hlt-def hlt-reveal" aria-labelledby="hlt-def-hlt">
        <p className="hlt-def-label">Key concept</p>
        <h3 id="hlt-def-hlt">Higher level thinking</h3>
        <p>
          A state in which the mind works from an elevated view of the whole business, not a narrow focal point. From
          that height, integrations and breakthrough solutions show up that are not visible from inside the rut.
        </p>
      </aside>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-visualize">
        <h2 id="hlt-visualize">Up here vs. down here</h2>
        <div className="hlt-result">
          <p>
            <strong>Up here:</strong> wide perspective, see the whole, pull integrations, room for creative
            breakthroughs. <strong>Down here:</strong> specialized rut, hypnotic routine, hard to see past the immediate
            task. Project Curiosity is what lifts attention from one toward the other; integrations tend to follow once
            the view widens.
          </p>
        </div>
      </section>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-pc">
        <h2 id="hlt-pc">How Project Curiosity lifts you toward higher level thinking</h2>
        <p>
          <strong>
            Project Curiosity means learning the business as a whole: asking, watching, and taking interest in other
            people’s jobs.
          </strong>{" "}
          That widened attention moves the mind from a narrow focal point toward a wide-angle view. As perspective
          grows, the mind rises above the routine rut, and integrations begin to happen on their own.
        </p>
        <p>In the restaurant story, curiosity led to noticing:</p>
        <ul>
          <li>Curb appeal and how the place looked from the street</li>
          <li>How staff presented themselves and how customers looked and behaved</li>
          <li>Access from the road and practical friction for guests</li>
        </ul>
        <p>
          The other dishwashers stayed down in the specialized rut; the integrations that surfaced (like the missing piece
          of <strong>lack of parking</strong>) came from that rising view. Fixing that lever mattered for the business;
          the story is used to show structure, not to promise identical outcomes everywhere.
        </p>
      </section>

      <div className="hlt-section hlt-reveal">
        <div className="hlt-callout-dark">
          <p className="hlt-callout-kicker">How integrations snap together</p>
          <h3>Puzzle pieces and the missing piece</h3>
          <p>
            Observations began fitting like puzzle pieces until the limiting factor became obvious: parking. Addressing
            that integration changed the trajectory; the narrative ties that cognitive motion to higher level thinking,
            not to a guarantee in every workplace.
          </p>
        </div>
      </div>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-rises">
        <h2 id="hlt-rises">What happens when your mind rises</h2>
        <p>
          <strong>
            From the same cognitive territory self-made success stories describe, you look down at the entire business,
            see connections others miss, and combine integrations into creative moves.
          </strong>{" "}
          You are not fixed on a single chore; you can reach across functions and pull together something new. Integrated
          thinking and creativity here are names for that elevated synthesis.
        </p>
      </section>

      <aside className="hlt-def hlt-reveal" aria-labelledby="hlt-def-int">
        <p className="hlt-def-label">Key concept</p>
        <h3 id="hlt-def-int">Integrations</h3>
        <p>
          Connections your mind makes when it views the business from higher level thinking: patterns, missing elements,
          and combinations that do not appear from ground-level specialization alone.
        </p>
      </aside>

      <section className="hlt-section hlt-reveal" aria-labelledby="hlt-vs">
        <h2 id="hlt-vs">Down here vs. up here</h2>
        <div className="hlt-compare">
          <div className="hlt-compare-col hlt-compare-col--negative">
            <h3>Down here (specialized rut)</h3>
            <ul>
              {HIGHER_LEVEL_THINKING_DOWN_HERE.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="hlt-compare-col hlt-compare-col--positive">
            <h3>Up here (higher level thinking)</h3>
            <ul>
              {HIGHER_LEVEL_THINKING_UP_HERE.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-nm">
        <h2 id="hlt-nm">The Neothink mentality</h2>
        <p>
          <strong>
            The Neothink mentality is this higher level integrated thinking, trained and practiced, not a fixed
            temperament.
          </strong>{" "}
          It is the lens Hamilton uses to describe how successful self-made wealth maps to cognitive integration: mind
          rises first; power and wealth track that rise when contributions connect to real results.
        </p>
      </section>

      <aside className="hlt-def hlt-reveal" aria-labelledby="hlt-core-nm">
        <p className="hlt-def-label">Core concept</p>
        <h3 id="hlt-core-nm">Neothink mentality (in this lesson)</h3>
        <p>
          The capacity for higher level integrated thinking: rising out of the stagnation trap of repetitive, narrow
          roles. The series presents it as learnable through curiosity and deliberate practice.
        </p>
      </aside>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-lesson2">
        <h2 id="hlt-lesson2">Higher level thinking beyond the workplace</h2>
        <p>
          The same motion (pulling integrations from a wide view) shows up in civic analysis. In{" "}
          <Link href={WP.freedomFromRights}>lesson two</Link>, Hamilton uses that lens on the Bill of Rights and the
          “rights direction,” and on the Prime Law as a structural response (removing initiatory force). The lesson here
          stays focused on work; the parallel is that integrated thinking scales from a kitchen to a constitution when
          the same habit of synthesis is applied.
        </p>
      </section>

      <div className="hlt-section hlt-reveal">
        <div className="hlt-callout-dark">
          <p className="hlt-callout-kicker">Path forward</p>
          <h3>From stagnation toward integration</h3>
          <p>
            The sequence in the material is explicit: widen perspective with Project Curiosity, let the mind rise, then
            let integrations concentrate where they boost profits and visible contribution. That is the thread to the next
            lessons in the series.
          </p>
        </div>
      </div>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-analogy">
        <h2 id="hlt-analogy">Trench and hilltop</h2>
        <p>
          Moving from a specialized rut to integrated thinking is like climbing from a narrow trench to a hilltop: in the
          trench you only see the walls; on the hilltop the whole landscape connects and paths become intelligible. The
          metaphor matches the video’s “down here / up here” language without adding new claims.
        </p>
      </section>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-rising-h">
        <h2 id="hlt-rising-h">The rising mind process</h2>
        <ol className="hlt-steps">
          {HIGHER_LEVEL_THINKING_RISING_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="hlt-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-after">
        <h2 id="hlt-after">What happens after the mentality takes root</h2>
        <p>
          <strong>Mind first, then power and wealth in proportion to real contribution.</strong> Integrations tend to
          aim at areas that affect profits because the elevated view makes those levers visible. The documentation tied
          to this series presents that order as the common pattern behind major success, not a promise of timing or
          amount.
        </p>
      </section>

      <section className="hlt-section hlt-prose hlt-reveal" aria-labelledby="hlt-next-lesson">
        <h2 id="hlt-next-lesson">What’s next in the series</h2>
        <p>
          The following lesson is <Link href={WP.areasOfProfit}>Areas of Profit</Link>, listing basic responsibilities and
          grouping them into areas of purpose (where money is made) and the mini-company frame.
        </p>
      </section>

      <section className="hlt-faq hlt-reveal" aria-labelledby="hlt-faq-h">
        <h2 id="hlt-faq-h">Frequently asked questions</h2>
        <div className="hlt-faq-grid">
          {HIGHER_LEVEL_THINKING_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="hlt-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.impactProfits}>Impact Profits</Link>
        </p>
        <p>
          Next: <Link href={WP.areasOfProfit}>Areas of Profit</Link>
        </p>
      </nav>

      <section className="hlt-cta hlt-reveal" aria-label="Continue the series">
        <h2>Continue the series</h2>
        <p>Open the full lesson list or follow new video on YouTube.</p>
        <div className="hlt-cta-row">
          <Link href={WP.neothinkMentality} className="hlt-btn">
            All lessons
          </Link>
          <a href={WP.podcastChannel} className="hlt-btn hlt-btn--ghost" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>
        </div>
      </section>
    </main>
  );
}
