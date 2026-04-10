"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  POWER_OF_CALM_CALM_MODE,
  POWER_OF_CALM_FAQ,
  POWER_OF_CALM_LESSON,
  POWER_OF_CALM_PANIC_MODE,
  POWER_OF_CALM_STEPS,
  POWER_OF_CALM_TAKEAWAYS,
} from "@/lib/power-of-calm-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${POWER_OF_CALM_LESSON.youtubeId}`;
const youtubeWatchUrl = `https://www.youtube.com/watch?v=${POWER_OF_CALM_LESSON.youtubeId}`;
const markHamiltonYoutubeSubscribe = "https://www.youtube.com/@realmarkhamilton?sub_confirmation=1";

export function PowerOfCalmPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".poc-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("poc-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("poc-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="poc-page">
      <header className="poc-hero">
        <p className="poc-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="poc-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {POWER_OF_CALM_LESSON.number}</span>
        </p>
        <h1 id="poc-heading">{POWER_OF_CALM_LESSON.title}</h1>
        <p className="poc-dek">
          Hamilton shares a practice he calls the <strong>power of calm</strong>: staying{" "}
          <strong>calm, collected, and sincere</strong> when volume and pressure spike—so you do not cap out in a “little
          print shop” trap of panic.
          The talk moves from a stressed shop owner to a young Hamilton borrowing <em>Dynasty</em>’s composed Blake
          Carrington as a posture, then to parenting scenes at McDonald’s and to high-stakes investing on the Grand
          Canyon Skywalk.
        </p>
        <p className="poc-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{POWER_OF_CALM_LESSON.videoRuntimeMinutes} min video · ~{POWER_OF_CALM_LESSON.readTimeMinutes} min read
          </span>
        </p>
      </header>

      <section className="poc-section poc-prose" aria-labelledby="poc-intro">
        <h2 id="poc-intro" className="poc-visually-hidden">
          Introduction
        </h2>
        <p>
          This page follows the WordPress migration and the embedded lesson (
          <a href={youtubeWatchUrl} target="_blank" rel="noopener noreferrer">
            watch on YouTube
          </a>
          ; id {POWER_OF_CALM_LESSON.youtubeId}). If wording differs from a transcript, treat the video as the spoken
          source. Prior lesson: <Link href={WP.keepTheBalance}>Keep the balance</Link>. Branding: <strong>Neothink</strong>{" "}
          (one word).
        </p>
      </section>

      <section className="poc-section poc-prose poc-reveal" aria-labelledby="poc-quick">
        <p className="poc-kicker">Quick answer</p>
        <h2 id="poc-quick">Why is calm described as power?</h2>
        <p>
          <strong>
            Because anxiety and overwhelm narrow your ceiling and repel people; calm carries sincerity, listening, and
            rational judgment.
          </strong>{" "}
          Hamilton frames the opposite of calm—panicked, bothered, overwhelmed—as a self-imposed limit and a relationship
          tax. When you are calm, others are more open to the value you can bring; when you are not, they recoil, as he
          illustrates with children reacting to stressed parents.
        </p>
      </section>

      <section className="poc-video poc-reveal" aria-label="Lesson video">
        <div className="poc-video-frame">
          <iframe
            title="Neothink Mentality lesson 14: Power of Calm"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="poc-section poc-prose poc-reveal" aria-labelledby="poc-takeaways">
        <h2 id="poc-takeaways">Key takeaways</h2>
        <div className="poc-takeaways">
          <ul>
            {POWER_OF_CALM_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="poc-section poc-prose poc-reveal" aria-labelledby="poc-dennis">
        <h2 id="poc-dennis">Dennis and the print shop</h2>
        <p>
          As a young man, Hamilton spent time in a small print shop where manuscripts were laid out on{" "}
          <strong>light tables</strong>—old production workflow, long hours. The owner, <strong>Dennis</strong>, was
          productive but <strong>always panicked</strong>: stressed, overwhelmed, losing the thread as work piled up.
          Watching him late one night, Hamilton concludes Dennis would{" "}
          <strong>never be more than his little print shop</strong>—admirable service, but a ceiling reached because he
          did not know the power of calm.
        </p>
      </section>

      <aside className="poc-insight poc-section poc-reveal" aria-labelledby="poc-blake">
        <p className="poc-kicker" id="poc-blake">
          Fiction as a mirror
        </p>
        <h3>Blake Carrington on TV</h3>
        <p>
          Hamilton liked <em>Dynasty</em>; <strong>Blake Carrington</strong>, an oil tycoon, stayed{" "}
          <strong>calm in the most stressful situations</strong>. He knows it is fiction—still, the contrast landed:{" "}
          <strong>Blake, Dennis, Blake, Dennis</strong>. He decided he needed to be Blake at work. His own desk was piling
          up faster than he could clear it (before later systems such as the mini-day approach). The flip was “just a
          decision” in his head; he changed demeanor and says personnel and business results shifted.
        </p>
      </aside>

      <hr className="poc-rule poc-reveal" />

      <section className="poc-section poc-prose poc-reveal" aria-labelledby="poc-parent">
        <h2 id="poc-parent">Parenting and McDonald’s</h2>
        <p>
          Calm also showed up in raising <strong>four children</strong>. Writing in coffee shops—and long ago in fast-food
          booths (<strong>Carl’s Jr.</strong>, <strong>McDonald’s</strong>)—he repeatedly saw{" "}
          <strong>stressed parents</strong> lose control: yelling, tantrums, sometimes spanking. Children responded with{" "}
          <strong>fear</strong>, recoiling from irrationality. Hamilton argues kids recognize irrationality—and are drawn
          to rational calm when they see it. He raised his children with a <strong>calm voice</strong> so lessons could
          land without matching chaos to chaos.
        </p>
      </section>

      <section className="poc-section poc-prose poc-reveal" aria-labelledby="poc-invest">
        <h2 id="poc-invest">Investing: Grand Canyon Skywalk</h2>
        <p>
          Hamilton describes being a <strong>major investor</strong> in the <strong>Grand Canyon Skywalk</strong> with
          partner <strong>David Jin</strong>. Jin had not planned on a major partner—yet wanted Hamilton in deeply, in
          part because he was <strong>calm</strong> through personnel issues, stakeholders, and build stress. That
          composure helped open a major-investor role Hamilton says would not have appeared otherwise:{" "}
          <strong>power of calm</strong> as deal chemistry, not only inner peace.
        </p>
      </section>

      <div className="poc-section poc-reveal">
        <div className="poc-callout-dark" aria-labelledby="poc-power-line">
          <p className="poc-callout-kicker" id="poc-power-line">
            Core line in the talk
          </p>
          <h3>Calm carries clout</h3>
          <p>
            “You know what comes with calm—comes <strong>power</strong>. When you’re calm, you carry power… people
            listen.” The inverse: anxious and panicky, people <strong>withdraw</strong>—less open to what you offer—investing
            included, where irrationality is costly and visible.
          </p>
        </div>
      </div>

      <section className="poc-section poc-prose poc-reveal" aria-labelledby="poc-compare">
        <h2 id="poc-compare">Panic mode vs calm mode</h2>
        <div className="poc-compare">
          <div className="poc-compare-col poc-compare-col--negative">
            <h3>Overwhelm default</h3>
            <ul>
              {POWER_OF_CALM_PANIC_MODE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="poc-compare-col poc-compare-col--positive">
            <h3>Power of calm</h3>
            <ul>
              {POWER_OF_CALM_CALM_MODE.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="poc-section poc-prose poc-reveal" aria-labelledby="poc-steps">
        <h2 id="poc-steps">Practice the shift</h2>
        <p className="poc-subhead-center">From Hamilton’s story to your context</p>
        <ol className="poc-steps">
          {POWER_OF_CALM_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="poc-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="poc-section poc-prose poc-reveal" aria-labelledby="poc-close">
        <h2 id="poc-close">Ripples</h2>
        <p>
          Hamilton closes by generalizing: business, parenting, investing, <strong>relationships</strong>—“everything in
          life” can benefit. Calm is framed as <strong>attractive</strong>: friendship, romance, respect from children
          and peers. The contrary is the Dennis pattern—<strong>capped</strong>, stuck, conflicts that do not teach the
          lessons you intend.
        </p>
      </section>

      <section className="poc-faq poc-reveal" aria-labelledby="poc-faq-h">
        <h2 id="poc-faq-h">Frequently asked questions</h2>
        <div className="poc-faq-grid">
          {POWER_OF_CALM_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="poc-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.keepTheBalance}>Keep the balance</Link>
        </p>
        <p>
          <Link href={WP.neothinkMentality}>All lessons</Link> — this is the final lesson in the public Neothink Mentality
          series on this site.
        </p>
      </nav>

      <section className="poc-cta poc-reveal" aria-label="Continue the series">
        <h2>Stay on the journey</h2>
        <p>Subscribe on YouTube and explore the Society through the links in the video when you want to go deeper.</p>
        <div className="poc-cta-row">
          <Link href={WP.neothinkMentality} className="poc-btn">
            Neothink Mentality hub
          </Link>
          <a href={markHamiltonYoutubeSubscribe} className="poc-btn poc-btn--ghost" target="_blank" rel="noopener noreferrer">
            Subscribe on YouTube
          </a>
        </div>
      </section>
    </main>
  );
}
