"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  RISE_FROM_RUT_FAQ,
  RISE_FROM_RUT_FOLLOWING_MODE,
  RISE_FROM_RUT_INTEGRATED,
  RISE_FROM_RUT_LESSON,
  RISE_FROM_RUT_STEPS,
  RISE_FROM_RUT_TAKEAWAYS,
} from "@/lib/rise-from-rut-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${RISE_FROM_RUT_LESSON.youtubeId}`;

export function RiseFromRutPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".rr-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("rr-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("rr-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="rr-page">
      <header className="rr-hero">
        <p className="rr-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="rr-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {RISE_FROM_RUT_LESSON.number}</span>
        </p>
        <h1 id="rr-heading">{RISE_FROM_RUT_LESSON.title}</h1>
        <p className="rr-dek">
          This lesson centers on the person stuck in a job with no clear path up. Later lessons take up the entrepreneur and the writer or artist. Hamilton names the following-mode mentality and the integrating, self-leading alternative: integrated thinking, which he calls the Neothink mentality.
        </p>
        <p className="rr-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{RISE_FROM_RUT_LESSON.videoRuntimeMinutes} min video · ~{RISE_FROM_RUT_LESSON.readTimeMinutes} min read
          </span>
        </p>
      </header>

      <section className="rr-section rr-prose" aria-labelledby="rr-intro">
        <h2 id="rr-intro" className="rr-visually-hidden">
          Introduction
        </h2>
        <p>
          This is foundational material in the public series. The question on the table matches what millions feel: <em>I am stuck at my job and cannot move up. What do I do?</em> The answer begins with what makes up the rut: specialized tasks, usually from a boss or upper management. You are told what to do, and you follow. That is the <em>following mode mentality</em>. Hamilton shows why it keeps people stuck, and what replaces it. Whether your work is{" "}
          <Link href={WP.soaringProductivity}>entrepreneurial</Link>, corporate, or creative, the same structural distinction applies in later lessons.
        </p>
        <p>
          The move out is not effort for effort’s sake. It is integrated thinking: seeing how parts of a system connect so you can act on essence, not only on assigned fragments.
        </p>
      </section>

      <section className="rr-section rr-prose rr-reveal" aria-labelledby="rr-quick">
        <p className="rr-kicker">Quick answer</p>
        <h2 id="rr-quick">What is integrated thinking?</h2>
        <p>
          <Link href={WP.integratedThinking}>Integrated thinking</Link> is the capacity to see how parts of a system connect, so you can locate opportunities and failures that specialized attention misses. In following mode, you optimize only what you were assigned. In integrated thinking, you see the <em>essence</em> of what creates value and can act on that picture. That is the difference between staying stuck and moving.
        </p>
      </section>

      <section className="rr-video rr-reveal" aria-label="Lesson video">
        <div className="rr-video-frame">
          <iframe
            title="Neothink Mentality lesson 1: Rise from the Routine Rut"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="rr-section rr-prose rr-reveal" aria-labelledby="rr-takeaways">
        <h2 id="rr-takeaways">Key takeaways</h2>
        <div className="rr-takeaways">
          <ul>
            {RISE_FROM_RUT_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rr-section rr-prose rr-reveal" aria-labelledby="rr-root">
        <h2 id="rr-root">The root cause: following mode</h2>
        <p>
          For millions of people, “stuck” tracks to a routine rut: specialized tasks that usually originate from a boss or upper management. The employee is told what to do and follows. That is the <em>following mode mentality</em>.
        </p>
        <p>
          If you operate only in that mode, you stay stuck indefinitely. The mind stays on tasks instead of outcomes, on motion instead of value creation.
        </p>
      </section>

      <aside className="rr-def rr-reveal" aria-labelledby="rr-def-following">
        <p className="rr-def-label">Definition</p>
        <h3 id="rr-def-following">Following mode mentality</h3>
        <p>
          A state in which the mind stays inside assigned tasks and reacts to instructions instead of proactively{" "}
          <Link href={WP.valueCreator}>creating value</Link>. Specialized thinking limits the field of view to what you were told to do.
        </p>
      </aside>

      <section className="rr-section rr-prose rr-reveal" aria-labelledby="rr-winners">
        <h2 id="rr-winners">Integrated thinking: the mentality of those who build</h2>
        <p>
          To counter following mode, Hamilton names a different motion shared by people who actually build: the integrating,{" "}
          <Link href={WP.selfLeaderSecret}>self-leading</Link> mentality. Specialized thinking is bounded; integrated thinking is not. You can move your own path and purpose as a single system.
        </p>
        <p>
          Most people have never practiced that motion. That is why he calls it the <em>Neothink mentality</em>.
        </p>
      </section>

      <aside className="rr-def rr-reveal" aria-labelledby="rr-def-int">
        <p className="rr-def-label">Definition</p>
        <h3 id="rr-def-int">Integrated thinking</h3>
        <p>
          The ability to connect observations across domains so you see how a system fits together and where new value can be created. Unlike single-domain specialization, integration shows how the whole behaves.
        </p>
      </aside>

      <section className="rr-section rr-prose rr-reveal" aria-labelledby="rr-insight">
        <p className="rr-kicker">Key insight</p>
        <h2 id="rr-insight">Major success stories integrate</h2>
        <p>
          Builders, inventors, and leaders who leave a mark do not merely follow instructions. They connect knowledge across domains and create something that did not exist. That is integrated thinking in one sentence.
        </p>
      </section>

      <section className="rr-section rr-reveal" aria-labelledby="rr-vs">
        <h2 id="rr-vs">Following mode vs. integrated thinking</h2>
        <div className="rr-compare">
          <div className="rr-compare-col">
            <h3>Following mode</h3>
            <ul>
              {RISE_FROM_RUT_FOLLOWING_MODE.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="rr-compare-col">
            <h3>Integrated thinking</h3>
            <ul>
              {RISE_FROM_RUT_INTEGRATED.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="rr-section rr-prose rr-reveal" aria-labelledby="rr-story">
        <h2 id="rr-story">The Neothink mentality in action</h2>
        <p className="rr-video-note">
          The video is Hamilton’s spoken lesson. The prose below follows the same account he gives on camera, including that the dishwasher was <strong>him</strong> at fifteen, on his first job, one summer fifty years ago.
        </p>
        <h3 className="rr-h3">Night shift: tasks versus numbers</h3>
        <p>
          He worked nights washing dishes and cleaning after close. Out front, the owner sat in a booth with the manager, night after night: not enough customers, payroll tight. Hearing that repetition, Hamilton started looking at the restaurant through customers and income, not only through the stagnant loop of his tasks.
        </p>
        <p>
          He watched how many people ate during the day. He thought about the menu, preparation, and the floor. The customers, he realized, were not locals. They were passing through a small town toward larger destinations on a major federal highway. He studied the sign and curb appeal. He was fifteen, in his first real job, quietly tracking a business in terms of traffic and income while he still did the chores.
        </p>
        <h3 className="rr-h3">Gathering puzzle pieces</h3>
        <p>
          He was not performing a consulting role. His mind began to move differently. Then, after weeks of seeing the place through where the money could be instead of through the dead end of his routine rut, he carried garbage bags across a dark patch of desert dirt to the bin behind the building.
        </p>
        <h3 className="rr-h3">The 10-second miracle</h3>
        <p>
          On the walk back up the stairs, he turned and looked at that dark dirt. In about ten seconds, the answer unfolded. Everything he had noticed snapped together into one puzzle picture. Passers-by on the highway did not want to cross traffic to reach the front. The front was only as wide as the building, with a hotel on one side and a side street on the other; a gas station sat beyond. Two or three cars filled the tiny frontage; once drivers passed that window, easier parking elsewhere captured them.
        </p>
        <p>
          The missing piece was the dirt where the trash sat. Pave it. Put a sign out front: <em>free parking around back</em> (the front stalls had meters; the offer had to be clear). Drivers would turn onto the quiet side street to park. Once committed to parking, they were committed to eating. The vision was so complete he drew it on a napkin with a pen: curb appeal, the parking problem, the sign, the paved lot, fifteen or twenty cars around a small building.
        </p>
        <h3 className="rr-h3">What the owner said</h3>
        <p>
          He had never spoken to the owner before that night. The owner listened, then said Hamilton ought to own the restaurant, not him.
        </p>
        <aside className="rr-result rr-reveal" aria-label="Lesson result">
          <p className="rr-def-label">Result</p>
          <h3 className="rr-h3">Still there decades later</h3>
          <p>
            That summer the place was failing. In Hamilton’s account, the same free-parking sign is still there decades later: the business kept operating, in his telling, across another two generations and counting. Other dishwashers did their specialized tasks as told. He integrated. The Neothink mentality, he stresses, often works in pictures before it works in words, which is why the napkin mattered.
          </p>
        </aside>
      </section>

      <aside className="rr-def rr-reveal" aria-labelledby="rr-def-nt">
        <p className="rr-def-label">Definition</p>
        <h3 id="rr-def-nt">Neothink mentality</h3>
        <p>
          The trained capacity for integrated thinking that lets you see past specialized tasks to the value-creating structure of a situation. It is developed over time; it is not a personality label.
        </p>
      </aside>

      <section className="rr-section rr-prose rr-reveal" aria-labelledby="rr-how">
        <h2 id="rr-how">How integrated thinking works</h2>
        <p className="rr-subhead">The step-by-step shape of breakthrough insight</p>
        <ol className="rr-steps">
          {RISE_FROM_RUT_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="rr-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="rr-section rr-prose rr-reveal" aria-labelledby="rr-leap">
        <h2 id="rr-leap">Making the leap</h2>
        <p>
          The story is rare because the average mind is not trained to integrate. Most people see only chores, not the money-making structure of the business. The mind does not integrate on its own; it rehearses the rut.
        </p>
        <p>
          Seeing essence, starting where you work, requires tools, not willpower alone. The next lesson,{" "}
          <Link href={WP.freedomFromRights}>Freedom from Rights</Link>, applies integrated thinking to law and the Prime Law horizon. After that,{" "}
          <Link href={WP.beyondTunnelVision}>Beyond Tunnel Vision</Link> introduces <em>Project Curiosity</em>, the first practical step.
        </p>
        <p>
          For decades this material moved through member channels first. It is public now because the Institute treats the method as something serious people can test. The move is from following mode into the Neothink mentality, where builders already live.
        </p>
      </section>

      <section className="rr-faq rr-reveal" aria-labelledby="rr-faq-h">
        <h2 id="rr-faq-h">Frequently asked questions</h2>
        <div className="rr-faq-grid">
          {RISE_FROM_RUT_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="rr-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.neothinkMentality}>Neothink Mentality hub</Link>
        </p>
        <p>
          Next: <Link href={WP.freedomFromRights}>Freedom from Rights</Link>
        </p>
      </nav>

      <section className="rr-cta rr-reveal" aria-label="Continue the series">
        <h2>Continue the series</h2>
        <p>Watch the full lesson list or subscribe on YouTube for new video.</p>
        <div className="rr-cta-row">
          <Link href={WP.neothinkMentality} className="rr-btn">
            All lessons
          </Link>
          <a href={WP.podcastChannel} className="rr-btn rr-btn--ghost" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>
        </div>
      </section>
    </main>
  );
}
