"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  SOARING_PRODUCTIVITY_ASSEMBLY_LINE,
  SOARING_PRODUCTIVITY_CORE_BULLETS,
  SOARING_PRODUCTIVITY_FAQ,
  SOARING_PRODUCTIVITY_LESSON,
  SOARING_PRODUCTIVITY_MOVEMENTS,
  SOARING_PRODUCTIVITY_STEPS,
  SOARING_PRODUCTIVITY_TAKEAWAYS,
  SOARING_PRODUCTIVITY_TODO_LIST,
} from "@/lib/soaring-productivity-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${SOARING_PRODUCTIVITY_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${SOARING_PRODUCTIVITY_LESSON.youtubeId}`;
const markHamiltonYoutubeSubscribe = "https://www.youtube.com/@realmarkhamilton?sub_confirmation=1";

export function SoaringProductivityPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".sp-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("sp-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("sp-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="sp-page">
      <header className="sp-hero">
        <p className="sp-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="sp-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {SOARING_PRODUCTIVITY_LESSON.number}</span>
        </p>
        <h1 id="sp-heading">{SOARING_PRODUCTIVITY_LESSON.title}</h1>
        <p className="sp-dek">
          If you get little done in a day despite effort, the talk reframes the problem: not “more discipline on the same
          to-do list,” but a shift from <strong>following mode</strong>—task-hopping like pre-assembly-line
          manufacturing—to an <strong>assembly line</strong> built on <strong>physical movements</strong> (calls,
          writing, meetings) in balanced time slots. Hamilton claims an <strong>8×</strong> jump—framed in the video as
          output on the order of <strong>64 hours</strong> in a day once the system clicks.
        </p>
        <p className="sp-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{SOARING_PRODUCTIVITY_LESSON.videoRuntimeMinutes} min video · ~{SOARING_PRODUCTIVITY_LESSON.readTimeMinutes}{" "}
            min read
          </span>
        </p>
      </header>

      <section className="sp-section sp-prose" aria-labelledby="sp-intro">
        <h2 id="sp-intro" className="sp-visually-hidden">
          Introduction
        </h2>
        <p>
          This page follows the WordPress migration and the embedded lesson (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ; embed id {SOARING_PRODUCTIVITY_LESSON.youtubeId}). If a transcript from another upload differs, treat the
          video and this essay as the site copy. Branding:{" "}
          <strong>Neothink</strong> (one word). For the value-creation frame that this productivity method serves, see{" "}
          <Link href={WP.areasOfProfit}>areas of profit</Link> and <Link href={WP.higherLevelThinking}>higher-level thinking</Link>.
        </p>
      </section>

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-quick">
        <p className="sp-kicker">Quick answer</p>
        <h2 id="sp-quick">How can I 8× my productivity instead of just gaining an extra hour?</h2>
        <p>
          <strong>Stop treating your day as a to-do list and start treating it as an assembly line.</strong> Instead of
          approaching tasks one-by-one by subject, categorize everything by physical movement type (calls, writing,
          meetings) and batch them into dedicated time slots. The shift from “following mode” to the Neothink Mentality
          is described as an 8-fold boost—Hamilton names output on the order of <strong>64 hours</strong> of productivity
          in a single day once you run the line.
        </p>
      </section>

      <section className="sp-video sp-reveal" aria-label="Lesson video">
        <div className="sp-video-frame">
          <iframe
            title="Neothink Mentality lesson 9: Soaring Productivity"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-takeaways">
        <h2 id="sp-takeaways">Key takeaways</h2>
        <div className="sp-takeaways">
          <ul>
            {SOARING_PRODUCTIVITY_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-eight">
        <h2 id="sp-eight">How can I increase my daily productivity eight-fold?</h2>
        <p>
          <strong>
            To increase productivity eight-fold, you shift from a “following mode” mentality to the Neothink Mentality.
          </strong>{" "}
          That replaces disjointed to-do lists with a mental assembly line: break every task into simple physical
          movements and schedule them into dedicated slots—like breaking car production into repeatable motions on a line.
          Hamilton describes the old way as a “nightmare”: you write things down, jump topic to topic, interruptions pile
          up, and you fall further behind. Sound familiar?
        </p>
      </section>

      <div className="sp-section sp-reveal">
        <aside className="sp-story-card" aria-labelledby="sp-story-h">
          <p className="sp-kicker" id="sp-story-h">
            Mark Hamilton’s story
          </p>
          <h3>The marketing director’s crunch</h3>
          <p>
            When Hamilton was <strong>marketing director of a publishing company</strong>, he could not keep up. His desk
            was <span className="sp-highlight">piling up with paperwork faster than he could clear it</span>.
          </p>
          <p>
            He studied time-management books and seminars. The result?{" "}
            <span className="sp-highlight">An extra hour a day</span>—under strict disciplines that made that hour not
            worth it. He was falling hopelessly behind, with no bandwidth for new projects—too busy maintaining a set
            routine while the backlog grew.
          </p>
        </aside>
      </div>

      <div className="sp-section sp-reveal">
        <div className="sp-ford-block">
          <h3>The Ford assembly line breakthrough</h3>
          <div className="sp-ford-row">
            <div>
              <div className="sp-ford-stat-label sp-ford-stat-label--before">Before</div>
              <div className="sp-ford-stat-num sp-ford-stat-num--before">12</div>
              <div className="sp-ford-stat-unit">hours per car</div>
            </div>
            <div className="sp-ford-arrow" aria-hidden>
              →
            </div>
            <div>
              <div className="sp-ford-stat-label sp-ford-stat-label--after">After</div>
              <div className="sp-ford-stat-num sp-ford-stat-num--after">1.5</div>
              <div className="sp-ford-stat-unit">hours per car</div>
            </div>
          </div>
          <div className="sp-ford-divider">
            <div className="sp-ford-8x">8×</div>
            <div className="sp-ford-8x-label">Immediate productivity increase</div>
          </div>
        </div>
      </div>

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-ford-copy">
        <h2 id="sp-ford-copy" className="sp-visually-hidden">
          Ford, December 1913
        </h2>
        <p>
          On <strong>December 1, 1913</strong>, Ford Motor Company started its first moving assembly line and cut the
          time to build a car from <strong>12 hours to 1.5 hours</strong>—an immediate 8-fold productivity increase, as
          Hamilton tells it.
        </p>
      </section>

      <aside className="sp-insight sp-section sp-reveal" aria-labelledby="sp-insight-h">
        <p className="sp-kicker" id="sp-insight-h">
          The insight
        </p>
        <h3>Your day is manufacturing</h3>
        <p>
          Your day is your manufacturing of success—or lack thereof. In specialized “following mode,” you approach that
          manufacturing task by task, like building cars before the assembly line. Even strong time-management systems
          often buy only an extra hour a day.
        </p>
      </aside>

      <hr className="sp-rule sp-reveal" />

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-movements-h">
        <h2 id="sp-movements-h">What is the “physical movement” strategy?</h2>
        <p>
          <strong>
            Categorize every task by the physical action it requires, not by its subject matter.
          </strong>{" "}
          Assign time slots for movements such as phone calls, letter writing, copywriting, accounting, meetings, and
          operations—each balanced like stations on a line. In the talk, it does not matter{" "}
          <em>who</em> you call or <em>what</em> the meeting is about; the movement type is what you batch.
        </p>
        <div className="sp-movement-grid">
          {SOARING_PRODUCTIVITY_MOVEMENTS.map((m) => (
            <div key={m.title} className="sp-movement-card">
              <h3>{m.title}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
        <p>
          You give each movement time slots with <strong>proper balance</strong>—as on any assembly line. Hamilton says
          the speed and energy through tasks can feel surreal; you become the person the line is manufacturing.
        </p>
      </section>

      <div className="sp-section sp-reveal">
        <aside className="sp-def" aria-labelledby="sp-robot-h">
          <p className="sp-def-label" id="sp-robot-h">
            Analogy
          </p>
          <h3>The robotic arm</h3>
          <p>
            A scattered to-do list is like a mechanic walking to the toolbox for every bolt. The Neothink Mentality turns
            your office into a factory: you stay in one movement—like{" "}
            <strong>a robotic arm driving rivet after rivet</strong>—until that segment is done. The “car” of your
            success is built faster because you are not constantly switching contexts.
          </p>
        </aside>
      </div>

      <div className="sp-section sp-reveal">
        <div className="sp-callout-dark">
          <p className="sp-callout-kicker">The result</p>
          <h3>Surreal intensity</h3>
          <p>
            Hamilton says his day “lit up like an assembly line manufacturing success.” Instead of an extra hour, he
            describes <strong>64 hours</strong> of productivity in a day—a rhetorical equivalent for 8× leverage on the
            clock you actually have, not literal clock time.
          </p>
        </div>
      </div>

      <hr className="sp-rule sp-reveal" />

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-compare-h">
        <h2 id="sp-compare-h">To-do list vs. assembly line schedule</h2>
        <div className="sp-compare">
          <div className="sp-compare-col sp-compare-col--negative">
            <h3>Traditional to-do list</h3>
            <ul>
              {SOARING_PRODUCTIVITY_TODO_LIST.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="sp-compare-col sp-compare-col--positive">
            <h3>Assembly line schedule</h3>
            <ul>
              {SOARING_PRODUCTIVITY_ASSEMBLY_LINE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-neothink-diff">
        <h2 id="sp-neothink-diff">How does the Neothink Mentality differ from traditional to-do lists?</h2>
        <p>
          <strong>
            Traditional lists keep you in “following mode”—reacting to tasks and falling behind when interruptions hit.
          </strong>{" "}
          The Neothink Mentality pairs a movement-based schedule with{" "}
          <Link href={WP.higherLevelThinking}>integrated thinking</Link>: you can rise in your current role or launch an
          entrepreneurial company from the start, as the series describes it. Hamilton’s{" "}
          <strong>first masterclass</strong> is where he walks through the full setup in detail.
        </p>
      </section>

      <aside className="sp-synergy sp-section sp-reveal" aria-labelledby="sp-syn-h">
        <p className="sp-kicker" id="sp-syn-h">
          Key concept
        </p>
        <h3>Synergistic integration</h3>
        <p>
          The movement schedule handles volume; integrated thinking lets you see connections across projects. Together
          they support moving through <strong>23 projects or more—all at one time</strong>—the “beginning of the Neothink
          mentality” and of “every great superachiever,” as the closing of the video puts it. See also{" "}
          <Link href={WP.riseFromRut}>Rise from the routine rut</Link> for the wider arc.
        </p>
      </aside>

      <div className="sp-section sp-reveal">
        <div className="sp-stat-64">
          <div className="sp-stat-64-num">64</div>
          <div className="sp-stat-64-title">Hours of productivity (equivalent framing)</div>
          <div className="sp-stat-64-note">
            Hamilton’s 8× claim stated in the talk as the difference between scraping an extra hour and running an
            assembly line.
          </div>
        </div>
      </div>

      <hr className="sp-rule sp-reveal" />

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-steps-h">
        <h2 id="sp-steps-h">Building your assembly line schedule</h2>
        <ol className="sp-steps">
          {SOARING_PRODUCTIVITY_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="sp-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-super">
        <h2 id="sp-super">Why does this approach work for superachievers?</h2>
        <p>
          <strong>
            This schedule plus the Neothink Mentality maps onto how Hamilton describes superachievers across history.
          </strong>{" "}
          It cuts the cognitive overhead of context switching and lets you enter flow within each movement. You stop
          fighting the schedule—you manufacture success. Imagine moving through 23+ projects at once; in the material,
          that is the opening move into integrated productivity, not a fantasy headcount.
        </p>
      </section>

      <aside className="sp-trap sp-section sp-reveal" aria-labelledby="sp-trap-h">
        <p className="sp-kicker" id="sp-trap-h">
          The trap
        </p>
        <h3>Following-mode scheduling</h3>
        <p>
          Most people stay reactive: a task appears, it goes on the list, disjointed work plus interruptions means you
          rarely finish—and you drift further behind.
        </p>
      </aside>

      <section className="sp-section sp-prose sp-reveal" aria-labelledby="sp-core-h">
        <h2 id="sp-core-h">What’s the core message?</h2>
        <p>
          <strong>Your day is manufacturing—success or frustration.</strong> To-do lists keep you in following mode,
          fighting for an extra hour. The assembly line shifts you into the Neothink Mentality: batch physical movements,
          aim for 8× leverage, and open room for many parallel projects. This is not about working harder—it is about
          working differently:
        </p>
        <ul className="sp-core-list">
          {SOARING_PRODUCTIVITY_CORE_BULLETS.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <p>
          You will not feel the full power of this integrated approach until you run it. Once your day lights up like an
          assembly line, the talk says, you will not want to go back.
        </p>
      </section>

      <section className="sp-faq sp-reveal" aria-labelledby="sp-faq-h">
        <h2 id="sp-faq-h">Frequently asked questions</h2>
        <div className="sp-faq-grid">
          {SOARING_PRODUCTIVITY_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="sp-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.thePrimeLawMentality}>The Prime Law mentality</Link>
        </p>
        <p>
          Next: <Link href={WP.cureToAging}>Cure to aging</Link>
        </p>
      </nav>

      <section className="sp-cta sp-reveal" aria-label="Continue the series">
        <h2>Continue the journey</h2>
        <p>
          Subscribe on YouTube for the next talks—Hamilton teases the following installment on the Neothink mentality as a
          superpower of the mind—and keep the lesson list open as you implement the line.
        </p>
        <div className="sp-cta-row">
          <Link href={WP.neothinkMentality} className="sp-btn">
            All lessons
          </Link>
          <a href={markHamiltonYoutubeSubscribe} className="sp-btn sp-btn--ghost" target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </main>
  );
}
