"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  SOAR_BEYOND_PEERS_FAQ,
  SOAR_BEYOND_PEERS_FOLLOWING,
  SOAR_BEYOND_PEERS_LESSON,
  SOAR_BEYOND_PEERS_SOARING,
  SOAR_BEYOND_PEERS_STEPS,
  SOAR_BEYOND_PEERS_SUMMARY_BULLETS,
  SOAR_BEYOND_PEERS_TAKEAWAYS,
} from "@/lib/soar-beyond-peers-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${SOAR_BEYOND_PEERS_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${SOAR_BEYOND_PEERS_LESSON.youtubeId}`;
const markHamiltonYoutubeSubscribe = "https://www.youtube.com/@realmarkhamilton?sub_confirmation=1";

export function SoarBeyondPeersPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".sbp-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("sbp-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("sbp-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="sbp-page">
      <header className="sbp-hero">
        <p className="sbp-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="sbp-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {SOAR_BEYOND_PEERS_LESSON.number}</span>
        </p>
        <h1 id="sbp-heading">{SOAR_BEYOND_PEERS_LESSON.title}</h1>
        <p className="sbp-dek">
          This lesson is the “first big step” into the Neothink Mentality: combine{" "}
          <Link href={WP.soaringProductivity}>assembly-line physical movements</Link> with{" "}
          <strong>grand visions</strong> broken down into projects and tasks—so you can pull far-off work into a week or
          two. Hamilton describes <strong>23 projects in one week</strong> on that line, essence focus,{" "}
          <strong>10-second miracles</strong> (restaurant; Charles Nash at Durant Dort), and his own path from
          specialized work to a global publishing arc.
        </p>
        <p className="sbp-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{SOAR_BEYOND_PEERS_LESSON.videoRuntimeMinutes} min video · ~{SOAR_BEYOND_PEERS_LESSON.readTimeMinutes} min
            read
          </span>
        </p>
      </header>

      <section className="sbp-section sbp-prose" aria-labelledby="sbp-intro">
        <h2 id="sbp-intro" className="sbp-visually-hidden">
          Introduction
        </h2>
        <p>
          The page follows the WordPress migration and the embedded lesson (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ; id {SOAR_BEYOND_PEERS_LESSON.youtubeId}). If wording differs from the transcript, treat the video as the
          spoken source. The prior talk on productivity frames roughly <strong>8×</strong> capacity and equivalent
          “extra hours” (the video mentions ~56 extra hours per day in one line and{" "}
          <strong>280 extra hours per five-day week</strong> in another—same family of claims as the earlier lesson’s
          math). Branding: <strong>Neothink</strong> (one word).
        </p>
      </section>

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-quick">
        <p className="sbp-kicker">Quick answer</p>
        <h2 id="sbp-quick">How can I soar beyond my peers and achieve dramatic success?</h2>
        <p>
          <strong>
            Reverse-engineer grand visions into projects, then into physical tasks you can drop into the assembly line
            schedule.
          </strong>{" "}
          Vision first, then work backward to the physical movements that make it real—calls, writing, meetings—batched
          across many projects at once. With the Neothink Mentality plus that line, Hamilton describes moving through{" "}
          <strong>23 projects in one week</strong> and gaining the equivalent of <strong>280 extra hours</strong> in a
          five-day work week under the series’ 8× framing.
        </p>
      </section>

      <section className="sbp-video sbp-reveal" aria-label="Lesson video">
        <div className="sbp-video-frame">
          <iframe
            title="Neothink Mentality lesson 11: Soar Beyond Peers"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-takeaways">
        <h2 id="sbp-takeaways">Key takeaways</h2>
        <div className="sbp-takeaways">
          <ul>
            {SOAR_BEYOND_PEERS_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-reverse">
        <h2 id="sbp-reverse">How do you reverse-engineer grand visions into daily success?</h2>
        <p>
          <strong>
            Start with the most exciting vision, break it into projects, then reduce each project to physical tasks.
          </strong>{" "}
          Following mode starts with tasks and hopes they add up; the Neothink Mentality flips the direction—destination
          first, then build the path backward to today. That is how achievers in the story are described: see the end
          state, then construct the ladder downward.
        </p>
      </section>

      <div className="sbp-section sbp-reveal">
        <div className="sbp-vision-cascade" aria-labelledby="sbp-cascade">
          <span className="sbp-kicker" id="sbp-cascade">
            The vision cascade
          </span>
          <div className="sbp-vision-stack">
            <div className="sbp-vision-level">
              <div className="sbp-v-label">Level 1</div>
              <h3>Grand visions</h3>
              <p>Your most exciting, inspiring future—made vivid, not vague.</p>
            </div>
            <span className="sbp-vision-down" aria-hidden>
              ↓
            </span>
            <div className="sbp-vision-level">
              <div className="sbp-v-label">Level 2</div>
              <h3>Projects</h3>
              <p>Specific undertakings that serve the vision.</p>
            </div>
            <span className="sbp-vision-down" aria-hidden>
              ↓
            </span>
            <div className="sbp-vision-level">
              <div className="sbp-v-label">Level 3</div>
              <h3>Physical tasks</h3>
              <p>Movements you can schedule on the assembly line today.</p>
            </div>
          </div>
        </div>
      </div>

      <aside className="sbp-synergy sbp-section sbp-reveal" aria-labelledby="sbp-gv">
        <p className="sbp-kicker" id="sbp-gv">
          Key concept
        </p>
        <h3>Grand visions</h3>
        <p>
          Grand visions are clear pictures of what excites you most. The clearer and more thrilling the vision, the more
          naturally it decomposes into projects. Hamilton says he would make himself see the <strong>end results</strong>{" "}
          of a project—then break visions into projects, then projects into physical tasks, working{" "}
          <strong>in reverse</strong> from the largest picture to the smallest motions.
        </p>
      </aside>

      <hr className="sbp-rule sbp-reveal" />

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-23">
        <h2 id="sbp-23">How can someone handle 23 projects at once?</h2>
        <p>
          <strong>
            Grand visions plus the <Link href={WP.soaringProductivity}>assembly line schedule</Link> make many projects
            tractable at once.
          </strong>{" "}
          You are not context-switching 23 unrelated topics—you are flowing through batched physical movements that
          advance every project that needs those moves. Hamilton says that after the physical-movement schedule, he moved{" "}
          <strong>23 projects through the line in one week</strong>—projects that had sat for months or years or had never
          been conceived before the line “opened” integrated thinking.
        </p>
      </section>

      <div className="sbp-section sbp-reveal">
        <div className="sbp-hours-band">
          <div className="sbp-hours-top">
            <div>
              <div className="sbp-hours-col-label sbp-hours-col-label--muted">Standard work week</div>
              <div className="sbp-hours-big sbp-hours-big--muted">40</div>
              <div className="sbp-hours-unit">hours of output</div>
            </div>
            <div className="sbp-hours-plus" aria-hidden>
              +
            </div>
            <div>
              <div className="sbp-hours-col-label sbp-hours-col-label--green">Neothink advantage</div>
              <div className="sbp-hours-big sbp-hours-big--green">280</div>
              <div className="sbp-hours-unit">extra equivalent hours (5-day week)</div>
            </div>
          </div>
          <div className="sbp-hours-divider">
            <div className="sbp-ford-8x">8×</div>
            <div className="sbp-ford-8x-label">Capacity multiplier (series framing)</div>
            <p className="sbp-stat-64-note">
              The essay ties an 8-fold increase to roughly 56 extra hours per day in one line and 280 extra hours across
              a five-day week—equivalent-time language, not literal clock duplication.
            </p>
          </div>
        </div>
      </div>

      <hr className="sbp-rule sbp-reveal" />

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-essence">
        <h2 id="sbp-essence">What is the “essence” of a business or career?</h2>
        <p>
          <strong>The essence is where the money and power truly lie—not in busywork or routine admin.</strong> As you
          move past specialized tasks, “project curiosity” widens your view; you start to see the numbers and where
          potential profit and creative leverage live. That is the dimension beyond the “stagnation trap” of routine
          specialization—where your mind can <strong>see and create</strong> projects that benefit the business.
        </p>
      </section>

      <aside className="sbp-insight sbp-section sbp-reveal" aria-labelledby="sbp-ess-def">
        <p className="sbp-kicker" id="sbp-ess-def">
          Definition
        </p>
        <h3>The essence</h3>
        <p>
          The fundamental value-creation activity that generates money and power in your work. Directing expanded capacity
          toward essence is how the same hours produce disproportionate results.
        </p>
      </aside>

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-find">
        <h3 className="sbp-h3" id="sbp-find">
          Finding your essence
        </h3>
        <p>
          Ask: “If I could only do one thing, what single activity would generate the most value?” Then imagine directing
          the week’s equivalent hours toward that core.
        </p>
      </section>

      <hr className="sbp-rule sbp-reveal" />

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-10s">
        <h2 id="sbp-10s">What are “10-second miracles,” and how do they work?</h2>
        <p>
          <strong>
            Brief moments when integrated thinking clicks—sometimes in seconds—and a trajectory changes.
          </strong>{" "}
          Hamilton gives two historical examples in the talk: his <strong>first</strong> 10-second miracle turning a
          failing restaurant into a success, and <strong>Charles Nash’s</strong> multiple miracles at{" "}
          <strong>Durant Dort Carriage Company</strong> on the way to <strong>President of General Motors</strong>—both
          tied to seeing essence and opportunity through project curiosity.
        </p>
      </section>

      <div className="sbp-section sbp-reveal">
        <div className="sbp-quote-card">
          <span className="sbp-quote-mark" aria-hidden>
            “
          </span>
          <p className="sbp-kicker">Story from the talk</p>
          <h3>The restaurant miracle</h3>
          <p>
            Hamilton describes his first 10-second miracle: a turnaround from a <span className="sbp-highlight">failing</span>{" "}
            restaurant to a <span className="sbp-highlight">successful</span> one—a sudden integrated insight that
            shifted outcomes.
          </p>
        </div>
      </div>

      <div className="sbp-section sbp-reveal">
        <div className="sbp-nash-card">
          <p className="sbp-kicker">Historical example</p>
          <h3>Charles Nash</h3>
          <div className="sbp-nash-ten" aria-hidden>
            ~10 sec
          </div>
          <p>
            Nash’s path through <strong>Project Curiosity</strong> at <strong>Durant Dort Carriage Company</strong>—and
            multiple “10-second” integrative leaps—illustrates how seeing the essence of the business pairs with rapid
            creative moves on the way to becoming <strong>President of GM</strong>.
          </p>
        </div>
      </div>

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-mark">
        <h2 id="sbp-mark" className="sbp-visually-hidden">
          Hamilton’s story
        </h2>
        <p>
          In his <strong>mid-twenties</strong>, working in <strong>direct mail publishing</strong>, Hamilton searched with
          an integrating mind for ways to grow the business—comparing <strong>international postage rates</strong> and
          exploring expansion into <strong>other countries</strong>, a bold move for a young man in an established firm. He
          practiced seeing end results, dreaming big, then breaking visions into projects and projects into{" "}
          <strong>physical movements</strong>—like the <strong>robotic arm driving a lug nut</strong> on an assembly line—so
          tasks plug into the daily line. The talk’s punchline: without integrated thinking, he says he would still be a{" "}
          <strong>dishwasher</strong> instead of a <strong>world thought leader</strong>—his own contrast, not Nash’s
          biography.
        </p>
      </section>

      <div className="sbp-section sbp-reveal">
        <div className="sbp-arc-grid" aria-label="Contrast in the talk">
          <div>
            <h4>Without integrated thinking</h4>
            <p className="sbp-arc-role">Stuck in specialized tasks (Hamilton’s “dishwasher” line)</p>
          </div>
          <div className="sbp-arc-arrow" aria-hidden>
            →
          </div>
          <div>
            <h4>Neothink arc</h4>
            <p className="sbp-arc-role">Author, integrator, global publishing reach</p>
          </div>
        </div>
      </div>

      <hr className="sbp-rule sbp-reveal" />

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-global">
        <h2 id="sbp-global">How does the mentality scale impact?</h2>
        <p>
          Value creation that people want to share scales naturally. Hamilton ties his later publishing company to{" "}
          <strong>Neothink books in 140 countries and 12 languages</strong>—the kind of reach that comes up when the
          essence is right and the line can deliver volume.
        </p>
      </section>

      <aside className="sbp-trap sbp-section sbp-reveal" aria-labelledby="sbp-pattern">
        <p className="sbp-kicker" id="sbp-pattern">
          The pattern
        </p>
        <h3>Compounding clarity</h3>
        <p>
          Each person who experiences a sudden clarity can become a catalyst for others. The video invites viewers to
          subscribe and follow the new channel—masterclasses deepen what the short talks introduce.
        </p>
      </aside>

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-compare">
        <h2 id="sbp-compare">Following mode vs. soaring beyond</h2>
        <div className="sbp-compare">
          <div className="sbp-compare-col sbp-compare-col--negative">
            <h3>Following mode</h3>
            <ul>
              {SOAR_BEYOND_PEERS_FOLLOWING.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sbp-compare-col sbp-compare-col--positive">
            <h3>Soaring beyond</h3>
            <ul>
              {SOAR_BEYOND_PEERS_SOARING.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-impl">
        <h2 id="sbp-impl">Start soaring: the implementation path</h2>
        <p className="sbp-subhead-center">From where you are to beyond your peers</p>
        <ol className="sbp-steps">
          {SOAR_BEYOND_PEERS_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="sbp-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sbp-section sbp-prose sbp-reveal" aria-labelledby="sbp-key">
        <h2 id="sbp-key">What’s the key to soaring beyond your peers?</h2>
        <p>
          <strong>
            Combine grand visions with the assembly line: vision → projects → physical tasks → batched movements.
          </strong>{" "}
          Peers stay in following mode; you integrate forward with{" "}
          <Link href={WP.higherLevelThinking}>higher-level thinking</Link> and the schedule from{" "}
          <Link href={WP.soaringProductivity}>soaring productivity</Link>.
        </p>
        <ul className="sbp-core-list">
          {SOAR_BEYOND_PEERS_SUMMARY_BULLETS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p>
          The closing question in the material is not whether you <em>can</em> soar beyond peers—it is whether you will use
          the path you have been given.
        </p>
      </section>

      <section className="sbp-faq sbp-reveal" aria-labelledby="sbp-faq-h">
        <h2 id="sbp-faq-h">Frequently asked questions</h2>
        <div className="sbp-faq-grid">
          {SOAR_BEYOND_PEERS_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="sbp-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.cureToAging}>Cure to aging</Link>
        </p>
        <p>
          Next: <Link href={WP.moneyLoveAffair}>Money love affair</Link>
        </p>
      </nav>

      <section className="sbp-cta sbp-reveal" aria-label="Continue the series">
        <h2>Continue the journey</h2>
        <p>
          Subscribe on YouTube for the next talks—Hamilton points to a masterclass that goes deeper into the same
          mentality.
        </p>
        <div className="sbp-cta-row">
          <Link href={WP.neothinkMentality} className="sbp-btn">
            All lessons
          </Link>
          <a href={markHamiltonYoutubeSubscribe} className="sbp-btn sbp-btn--ghost" target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </main>
  );
}
