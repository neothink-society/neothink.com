"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  FREEDOM_FROM_RIGHTS_ADDING_RIGHTS,
  FREEDOM_FROM_RIGHTS_FAQ,
  FREEDOM_FROM_RIGHTS_LESSON,
  FREEDOM_FROM_RIGHTS_PRIME_LAW,
  FREEDOM_FROM_RIGHTS_REMOVING_FORCE,
  FREEDOM_FROM_RIGHTS_SEE_THROUGH_STEPS,
  FREEDOM_FROM_RIGHTS_TAKEAWAYS,
} from "@/lib/freedom-from-rights-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${FREEDOM_FROM_RIGHTS_LESSON.youtubeId}`;

export function FreedomFromRightsPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".ffr-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("ffr-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("ffr-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="ffr-page">
      <header className="ffr-hero">
        <p className="ffr-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="ffr-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {FREEDOM_FROM_RIGHTS_LESSON.number}</span>
        </p>
        <h1 id="ffr-heading">{FREEDOM_FROM_RIGHTS_LESSON.title}</h1>
        <p className="ffr-dek">
          Building on{" "}
          <Link href={WP.riseFromRut}>lesson one</Link>, Mark Hamilton extends the Neothink mentality from work into politics: how integrated thinking breaks the illusion that new “rights” always enlarge freedom, and why removing initiatory force through the Prime Law is the integration the Founders almost reached.
        </p>
        <p className="ffr-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{FREEDOM_FROM_RIGHTS_LESSON.videoRuntimeMinutes} min video · ~{FREEDOM_FROM_RIGHTS_LESSON.readTimeMinutes}{" "}
            min read
          </span>
        </p>
      </header>

      <section className="ffr-section ffr-prose" aria-labelledby="ffr-intro">
        <h2 id="ffr-intro" className="ffr-visually-hidden">
          Introduction
        </h2>
        <p>
          If you have not watched the first talk, start with{" "}
          <Link href={WP.riseFromRut}>Rise from the Routine Rut</Link>: it opens the move from specialized, following-mode thinking to integrated thinking: the Neothink mentality shared by serious builders. This second talk adds something Hamilton treats as equally valuable: seeing through illusions crafted in business, politics, media, and law. Not everything labeled “freedom” behaves like freedom when you trace what enforces it.
        </p>
      </section>

      <section className="ffr-section ffr-reveal" aria-label="Note on the video">
        <p className="ffr-video-note">
          This essay follows the on-camera lesson. Branding is <strong>Neothink</strong> (one word), never “Neo Think” or “Neo-Think.” If the page and the video ever diverge, treat the video as the spoken source.
        </p>
      </section>

      <section className="ffr-video ffr-reveal" aria-label="Lesson video">
        <div className="ffr-video-frame">
          <iframe
            title="Neothink Mentality lesson 2: Freedom from Rights"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-takeaways">
        <h2 id="ffr-takeaways">Key takeaways</h2>
        <div className="ffr-takeaways">
          <ul>
            {FREEDOM_FROM_RIGHTS_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-bor">
        <p className="ffr-kicker">The quick example in the video</p>
        <h2 id="ffr-bor">The Bill of Rights: beacon, habit, and one missing integration</h2>
        <p>
          Hamilton uses the Bill of Rights as the example that lands fast: it is treated as the beacon of American freedom, yet he argues it began something that now feeds a damaging pattern: adding “rights” and regulations that sound positive while resting on initiatory force. Each addition can be sold with good-looking language; the integration that is missing is not a longer list of positives but the removal of the negative: government’s resort to initiatory force against citizens.
        </p>
        <p>
          Adding rights to law looks like stacking positives. In practice, those “positives” can be steered through appealing narratives. He points to the spread of DEI- and ESG-style mandates into law and regulation as illustrations: framed as rights or protections, they can still damage practical freedom when people are forced to comply even when the underlying rule is wrong.
        </p>
      </section>

      <aside className="ffr-illusion ffr-reveal" aria-labelledby="ffr-illusion-h">
        <p className="ffr-illusion-label">The illusion</p>
        <h3 id="ffr-illusion-h">Rights equal freedom</h3>
        <p>
          The surface story is that new rights enlarge liberty. The reality he names is simpler: those laws and “rights” are backed by initiatory force, so compliance is compulsory. When the policy is mistaken, you are still forced along. The illusion of freedom can track a real loss of discretion.
        </p>
      </aside>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-remove-neg">
        <h2 id="ffr-remove-neg">Remove the negative instead of piling on positives</h2>
        <p>
          The alternative Hamilton offers is not another rights campaign. It is to remove initiatory force: the government’s authority to use force or the threat of force first against citizens. That capacity is what lets a force-backed power class sit above the public, pull people into agendas, and fund itself through taxation extracted by compulsion. Strip that mechanism, and the class above loses the lever that lets it dictate terms.
        </p>
      </section>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-init">
        <h2 id="ffr-init">Initiatory force versus protective force</h2>
        <p>
          <strong>Initiatory force</strong> is force, threat, or fraud used first to compel, not in response to an attack. <strong>Protective force</strong> answers aggression. The Neothink analysis treats initiatory force as the root that makes discretionary rule durable.
        </p>
      </section>

      <aside className="ffr-def ffr-reveal" aria-labelledby="ffr-def-init">
        <p className="ffr-def-label">Definition</p>
        <h3 id="ffr-def-init">Initiatory force</h3>
        <p>
          The use of force, threat of force, or fraud by a person, group, or government <em>first</em>: to compel compliance rather than to stop an aggressor. Integrated thinking treats this as what a ruling class requires to persist.
        </p>
      </aside>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-founders">
        <h2 id="ffr-founders">What the Founders saw, and what they missed</h2>
        <p>
          Hamilton notes the Founders were skeptical about enumerating a bill of rights for several reasons. The specific amendments do not, in themselves, introduce initiatory force; what they did introduce, in his reading, is the <em>practice</em> of adding rights to law, a practice that has not stopped. Had they made the Neothink identification (remove the negative instead of endlessly adding positives), the Bill of Rights as a fix would have been unnecessary: one Prime Law removing initiatory force would have secured the same protective end without licensing an ever-growing rights industry.
        </p>
        <p>
          He ties this to a roughly 650-page integrated work on how close the Constitution came to lasting freedom, and where the missing ingredient was: removing initiatory force through a single prime law that ends the ruling class structurally.
        </p>
      </section>

      <aside className="ffr-def ffr-reveal" aria-labelledby="ffr-neothink-id">
        <p className="ffr-def-label">Neothink identification</p>
        <h3 id="ffr-neothink-id">Remove the negative, not an endless list of positives</h3>
        <p>
          This is the same integrative move as in business: do not optimize the wrong structure; replace the lever that creates the bad pattern. Positive law can be reinterpreted; a boundary that removes initiatory force is a different category of solution.
        </p>
      </aside>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-what-pl">
        <h2 id="ffr-what-pl">The Prime Law (as recited in the video)</h2>
        <p>
          Hamilton recites the full text on camera: preamble plus three articles, no exceptions. It is the fundamental law of protection: everything needed, in his account, to secure genuine freedom and prevent the rule of man and a power class from reconstituting legally.
        </p>
        <div className="ffr-prime-law">
          <h3 className="ffr-prime-law-title">The Prime Law</h3>
          <p className="ffr-prime-law-sub">The fundamental law of protection</p>
          <p className="ffr-prime-law-preamble">
            <strong>Preamble:</strong> {FREEDOM_FROM_RIGHTS_PRIME_LAW.preamble}
          </p>
          {FREEDOM_FROM_RIGHTS_PRIME_LAW.articles.map((art) => (
            <div key={art.label} className="ffr-prime-law-art">
              <span className="ffr-prime-law-label">{art.label}</span>
              <p>{art.text}</p>
            </div>
          ))}
        </div>
        <p>
          For broader context and Institute exposition, see{" "}
          <Link href={WP.primeLaw}>the Prime Law</Link> on this site.
        </p>
      </section>

      <section className="ffr-section ffr-reveal" aria-labelledby="ffr-vs">
        <h2 id="ffr-vs">Adding rights versus removing initiatory force</h2>
        <div className="ffr-compare">
          <div className="ffr-compare-col ffr-compare-col--negative">
            <h3>Adding rights (current pattern)</h3>
            <ul>
              {FREEDOM_FROM_RIGHTS_ADDING_RIGHTS.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="ffr-compare-col ffr-compare-col--positive">
            <h3>Removing initiatory force (Prime Law)</h3>
            <ul>
              {FREEDOM_FROM_RIGHTS_REMOVING_FORCE.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-demo">
        <h2 id="ffr-demo">Integrated thinking on one political illusion</h2>
        <p>
          In a few minutes of video, Hamilton walks through how the Neothink mentality applies integrated thinking to a consensus symbol, “rights” in the political system and the growing ruling class. That is the second public face of the series: the same mentality that helps you rise in business is the one that disintegrates destructive illusions when you trace force and incentives instead of stopping at slogans.
        </p>
        <div className="ffr-callout-dark">
          <p className="ffr-callout-kicker">Two strands on this channel</p>
          <h3>Rise up and see through</h3>
          <p>
            <strong>First:</strong> the Neothink mentality of major winners: integrated thinking that forges your path in business and wealth, as in the debut talk.{" "}
            <strong>Second:</strong> the mentality that sees through debilitating illusions: integrated thinking that pulls reality apart so manipulative narratives lose their cover, as in this second talk.
          </p>
        </div>
      </section>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-28">
        <h2 id="ffr-28">The 28th Amendment and the larger book</h2>
        <p>
          Hamilton describes a long, integrated book that lays out a political design to supersede the old system with the Prime Law as the 28th Amendment: the structural finish the Founders approached but did not lock in. The point for search and study is not a quick policy patch; it is replacing the machinery that lets tyranny accrete.
        </p>
      </section>

      <section className="ffr-section ffr-prose ffr-reveal" aria-labelledby="ffr-see-pol">
        <h2 id="ffr-see-pol">How to test a proposed “right” or regulation</h2>
        <p className="ffr-subhead">Use the same integrated moves the video implies: name the claim, then find the force.</p>
        <ol className="ffr-steps">
          {FREEDOM_FROM_RIGHTS_SEE_THROUGH_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="ffr-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ffr-faq ffr-reveal" aria-labelledby="ffr-faq-h">
        <h2 id="ffr-faq-h">Frequently asked questions</h2>
        <div className="ffr-faq-grid">
          {FREEDOM_FROM_RIGHTS_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="ffr-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.riseFromRut}>Rise from the Routine Rut</Link>
        </p>
        <p>
          Next: <Link href={WP.beyondTunnelVision}>Beyond Tunnel Vision</Link>
        </p>
      </nav>

      <section className="ffr-cta ffr-reveal" aria-label="Continue the series">
        <h2>Continue the series</h2>
        <p>Return to the full lesson list or subscribe on YouTube for new video.</p>
        <div className="ffr-cta-row">
          <Link href={WP.neothinkMentality} className="ffr-btn">
            All lessons
          </Link>
          <a href={WP.podcastChannel} className="ffr-btn ffr-btn--ghost" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>
        </div>
      </section>
    </main>
  );
}
