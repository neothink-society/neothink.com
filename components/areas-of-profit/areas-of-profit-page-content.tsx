"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  AREAS_OF_PROFIT_DIVISION_ESSENCE,
  AREAS_OF_PROFIT_DIVISION_LABOR,
  AREAS_OF_PROFIT_FAQ,
  AREAS_OF_PROFIT_LESSON,
  AREAS_OF_PROFIT_PROCESS_STEPS,
  AREAS_OF_PROFIT_PUBLISHING_EXAMPLE,
  AREAS_OF_PROFIT_TAKEAWAYS,
} from "@/lib/areas-of-profit-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${AREAS_OF_PROFIT_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${AREAS_OF_PROFIT_LESSON.youtubeId}`;

export function AreasOfProfitPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".aop-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("aop-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("aop-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="aop-page">
      <header className="aop-hero">
        <p className="aop-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="aop-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {AREAS_OF_PROFIT_LESSON.number}</span>
        </p>
        <h1 id="aop-heading">{AREAS_OF_PROFIT_LESSON.title}</h1>
        <p className="aop-dek">
          This lesson turns integrated thinking tactical: after{" "}
          <Link href={WP.beyondTunnelVision}>Project Curiosity</Link>,{" "}
          <Link href={WP.impactProfits}>areas that impact income</Link>, and{" "}
          <Link href={WP.higherLevelThinking}>higher level thinking</Link>, you name where money is actually made:{" "}
          <strong>areas of purpose</strong>, and how the <strong>mini-company</strong> idea maps work to those channels.
        </p>
        <p className="aop-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{AREAS_OF_PROFIT_LESSON.videoRuntimeMinutes} min video · ~{AREAS_OF_PROFIT_LESSON.readTimeMinutes} min read
          </span>
        </p>
      </header>

      <section className="aop-section aop-prose" aria-labelledby="aop-intro">
        <h2 id="aop-intro" className="aop-visually-hidden">
          Introduction
        </h2>
        <p>
          This essay follows the Institute migration from WordPress and tracks the lesson video (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ). Branding is <strong>Neothink</strong> (one word). The video and transcript are the spoken source if text and
          recording diverge.
        </p>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-quick">
        <p className="aop-kicker">Quick answer</p>
        <h2 id="aop-quick">How do I identify where money is really made?</h2>
        <p>
          <strong>
            After Project Curiosity, list the business’s basic responsibilities, then group them into areas of purpose:{" "}
            the specific channels where income actually enters.
          </strong>{" "}
          Focus there rather than on isolated specialized tasks. The lesson describes restructuring attention around
          those profit channels and, when possible, owning the scope of work inside one channel: what Hamilton calls a
          mini-company mindset.
        </p>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-creative">
        <h2 id="aop-creative">The creative mind and creating values</h2>
        <p>
          The transcript ties this step to what came before: with a growing map of the business, you may find a way to
          improve efficiency on a particular task or procedure: that can be a first small move into the{" "}
          <strong>creative mind</strong>. In the framework, the human mind is what creates values; creating values aligns
          with human essence and with wealth, while narrow following-mode specialization blocks that path. The
          mini-company / division-of-essence material is offered as the structural way to bring creative scope into
          every job, not only management titles.
        </p>
      </section>

      <section className="aop-video aop-reveal" aria-label="Lesson video">
        <div className="aop-video-frame">
          <iframe
            title="Neothink Mentality lesson 6: Areas of Profit"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-takeaways">
        <h2 id="aop-takeaways">Key takeaways</h2>
        <div className="aop-takeaways">
          <ul>
            {AREAS_OF_PROFIT_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-after-pc">
        <h2 id="aop-after-pc">After Project Curiosity: list basic responsibilities</h2>
        <p>
          <strong>
            After at least two weeks of Project Curiosity, write a list of the main responsibilities that make up the
            business: not only your role, but the building blocks of the operation.
          </strong>{" "}
          If you run or are starting a business, the same exercise applies: list your business’s basic responsibilities.
          That list is much easier once curiosity has widened what you can see beyond specialized tasks.
        </p>
        <p>
          The video frames this for people stuck in jobs: the point is to break out of the routine rut and move onto an
          integrating path; eventually the same habits support starting a business, but the lesson starts with clarity
          where you are now.
        </p>
      </section>

      <aside className="aop-def aop-reveal" aria-labelledby="aop-exercise">
        <p className="aop-def-label">Key exercise</p>
        <h3 id="aop-exercise">List basic responsibilities</h3>
        <p>
          Capture the responsibilities that constitute the business itself. The list sets up grouping by where money is
          made rather than by department label alone.
        </p>
      </aside>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-dol">
        <h2 id="aop-dol">Why the default division of labor falls short</h2>
        <p>
          Most organizations turn each basic responsibility into a specialized job or department. In Hamilton’s
          publishing example, that typical split produced specialized tasks, the routine rut, and{" "}
          <strong>inferior productivity</strong> compared with an integrated design. The alternative he names is an{" "}
          <strong>integrated division of essence</strong>: responsibilities fold into areas of purpose so the creative
          mind applies across the full slice of work that touches money.
        </p>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-aop">
        <h2 id="aop-aop">What are areas of purpose?</h2>
        <p>
          <strong>Areas of purpose are the avenues where money actually enters the business.</strong> The stated purpose
          of a business in this lesson is to make money selling your value (product or service), so areas of purpose are
          the marketing and delivery channels that accomplish that. Today that might include digital and social channels;
          the historical example below is pre-internet on purpose.
        </p>
        <p>
          In the publishing company story, dozens of basic responsibilities collapsed, in analysis, to{" "}
          <strong>four main money-making avenues</strong>:
        </p>
        <div className="aop-example-grid">
          {AREAS_OF_PROFIT_PUBLISHING_EXAMPLE.map((ex, i) => (
            <div key={ex.title} className="aop-example-card">
              <span className="aop-example-index" aria-hidden>
                {i + 1}
              </span>
              <h3>{ex.title}</h3>
              <p>{ex.body}</p>
            </div>
          ))}
        </div>
        <p>
          <em>
            The example is older technology by design, before the internet and social media. The principle is to identify
            where money enters, then let responsibilities integrate under those headings instead of staying dead-end
            silos.
          </em>
        </p>
      </section>

      <aside className="aop-def aop-reveal" aria-labelledby="aop-def-aop">
        <p className="aop-def-label">Core concept</p>
        <h3 id="aop-def-aop">Areas of purpose</h3>
        <p>
          Channels that directly generate income. Grouping basic responsibilities under them turns disconnected tasks into
          unified forces tied to how the firm actually gets paid, preparing the mini-company reading of each slice.
        </p>
      </aside>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-mini">
        <h2 id="aop-mini">Mini-companies and division of essence</h2>
        <p>
          <strong>
            Instead of scattered specialized departments, responsibilities integrate under each area of purpose. Each
            money-making area becomes something like a small business inside the larger one: a mini-company (spoken as
            M-I-N-I): marketing, taking and fulfilling orders, customer service, data, accounting, run as one scope for
            that channel.
          </strong>{" "}
          The lesson contrasts <strong>bored</strong> specialization with <strong>exhilarated</strong> in-house
          entrepreneurs, and describes productivity rising past prior benchmarks when the creative mind owns the whole
          slice. Hamilton references a separate masterclass for deeper implementation; this page stays with the lesson’s
          ideas; see the video description for how he points viewers to that material.
        </p>
      </section>

      <div className="aop-section aop-reveal">
        <div className="aop-callout-dark">
          <p className="aop-callout-kicker">Guarantee (in the video)</p>
          <h3>Control where money is made</h3>
          <p>
            The transcript states plainly that gaining control of an area where money is made lifts you toward the
            integrating mind and the upper echelons, offered there as a direct promise to people who follow the steps with
            persistence. Treat it as the speaker’s strong claim in the recording, not as an independent guarantee from
            the Institute.
          </p>
        </div>
      </div>

      <section className="aop-section aop-reveal" aria-labelledby="aop-vs">
        <h2 id="aop-vs">Division of labor vs. division of essence</h2>
        <div className="aop-compare">
          <div className="aop-compare-col aop-compare-col--negative">
            <h3>Inferior division of labor</h3>
            <ul>
              {AREAS_OF_PROFIT_DIVISION_LABOR.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="aop-compare-col aop-compare-col--positive">
            <h3>Integrated division of essence</h3>
            <ul>
              {AREAS_OF_PROFIT_DIVISION_ESSENCE.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-control">
        <h2 id="aop-control">Taking control at work</h2>
        <p>
          <strong>
            Map potential areas of purpose in your company, choose one to target, and steadily take over responsibilities
            tied to it, including tedious details others prefer to drop.
          </strong>{" "}
          The video stresses assertive energy and persistence: people often gladly release nitty-gritty work that still
          sits inside your chosen area. Over time, that accumulation is how employees in the story move into charge of a
          profit channel.
        </p>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-analogy">
        <h2 id="aop-analogy">Factory vs. speedboat</h2>
        <p>
          The WordPress essay uses a factory (each worker bolted to one machine) versus speedboat captains who navigate,
          maintain the engine, and know the destination: many small craft outmaneuvering a single rigid line. That matches
          the transcript’s emphasis on full-scope ownership per area of purpose.
        </p>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-wealth">
        <h2 id="aop-wealth">Why creating values matters</h2>
        <p>
          Creating values, not merely executing isolated tasks, is framed as the human route to wealth and fulfillment and
          as incompatible with staying only in following-mode specialization. The mini-company / division-of-essence
          structure is how ordinary employees are said to discover creative essence and the integrating self-leader
          mentality: the Neothink mentality in this arc.
        </p>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-steps-h">
        <h2 id="aop-steps-h">From routine rut to area of purpose</h2>
        <ol className="aop-steps">
          {AREAS_OF_PROFIT_PROCESS_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="aop-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="aop-section aop-prose aop-reveal" aria-labelledby="aop-after">
        <h2 id="aop-after">What comes next in the series</h2>
        <p>
          After identifying and steering an area of purpose where you are, the path in the materials leads toward
          starting your own business with the same integrated habits. The video’s closing also names rising out of the
          “limited following mentality” associated with a <strong>privileged power class</strong> above, into an{" "}
          <strong>unlimited integrating mentality</strong> that does not depend on a higher authority to dictate every
          move, language drawn directly from the transcript.
        </p>
        <p>
          The next lesson is <Link href={WP.unlockYourGenius}>Unlock Your Genius</Link>, the explicit move from value{" "}
          <em>producer</em> to value <em>creator</em> and into the Neothink mentality as creation of values.
        </p>
      </section>

      <section className="aop-faq aop-reveal" aria-labelledby="aop-faq-h">
        <h2 id="aop-faq-h">Frequently asked questions</h2>
        <div className="aop-faq-grid">
          {AREAS_OF_PROFIT_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="aop-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.higherLevelThinking}>Higher Level Thinking</Link>
        </p>
        <p>
          Next: <Link href={WP.unlockYourGenius}>Unlock Your Genius</Link>
        </p>
      </nav>

      <section className="aop-cta aop-reveal" aria-label="Continue the series">
        <h2>Continue the series</h2>
        <p>Open the full lesson list or follow new video on YouTube.</p>
        <div className="aop-cta-row">
          <Link href={WP.neothinkMentality} className="aop-btn">
            All lessons
          </Link>
          <a href={WP.podcastChannel} className="aop-btn aop-btn--ghost" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>
        </div>
      </section>
    </main>
  );
}
