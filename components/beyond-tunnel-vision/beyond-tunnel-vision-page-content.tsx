"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import {
  BEYOND_TUNNEL_VISION_CURIOUS,
  BEYOND_TUNNEL_VISION_FAQ,
  BEYOND_TUNNEL_VISION_LESSON,
  BEYOND_TUNNEL_VISION_PROJECT_STEPS,
  BEYOND_TUNNEL_VISION_TAKEAWAYS,
  BEYOND_TUNNEL_VISION_TUNNEL_VISION,
} from "@/lib/beyond-tunnel-vision-data";
import { WP } from "@/lib/wordpress-routes";

const embedUrl = `https://www.youtube.com/embed/${BEYOND_TUNNEL_VISION_LESSON.youtubeId}`;

export function BeyondTunnelVisionPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    const els = root.querySelectorAll<HTMLElement>(".btv-reveal");
    if (els.length === 0) return;
    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("btv-visible"));
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("btv-visible"), 50);
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
    <main id="main-content" ref={mainRef} className="btv-page">
      <header className="btv-hero">
        <p className="btv-pill">
          <Link href={WP.neothinkMentality}>Neothink Mentality</Link>
          <span className="btv-pill-sep" aria-hidden>
            ·
          </span>
          <span>Lesson {BEYOND_TUNNEL_VISION_LESSON.number}</span>
        </p>
        <h1 id="btv-heading">{BEYOND_TUNNEL_VISION_LESSON.title}</h1>
        <p className="btv-dek">
          After <Link href={WP.riseFromRut}>integrated thinking in lesson one</Link>, this lesson introduces the practical first step out of specialized tasks and following mode:{" "}
          <strong>curiosity</strong>, and the two-week <strong>Project Curiosity</strong> exercise at work.
        </p>
        <p className="btv-byline">
          <span>
            Published by <Link href="/">Neothink Institute</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            Video: <Link href={WP.markHamilton}>Mark Hamilton</Link>
          </span>
          <span aria-hidden> · </span>
          <span>
            ~{BEYOND_TUNNEL_VISION_LESSON.videoRuntimeMinutes} min video · ~{BEYOND_TUNNEL_VISION_LESSON.readTimeMinutes}{" "}
            min read
          </span>
        </p>
      </header>

      <section className="btv-section btv-prose" aria-labelledby="btv-intro">
        <h2 id="btv-intro" className="btv-visually-hidden">
          Introduction
        </h2>
        <p>
          This lesson addresses people who feel stuck in a routine rut at work: executing specialized tasks day after day and wondering whether there is more to life. If you have not watched the first talk, begin with{" "}
          <Link href={WP.riseFromRut}>Rise from the Routine Rut</Link>: it frames integrated thinking and the self-leader posture. Here the focus is how to <em>start</em> integrating: leave tunnel vision behind by widening your attention across the business.
        </p>
      </section>

      <section className="btv-section btv-reveal" aria-label="Note on the video">
        <p className="btv-video-note">
          The video is Hamilton’s spoken lesson (first person on camera). The prose below is in third person and matches the published Neothink Institute article. Branding is <strong>Neothink</strong> (one word), never “Neo Think” or “Neo-Think.” If the page and the video diverge, treat the video as the spoken source.
        </p>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-quick">
        <p className="btv-kicker">Quick answer</p>
        <h2 id="btv-quick">How do I break free from tunnel vision at work?</h2>
        <p>
          <strong>Curiosity</strong> is the lever. Instead of only executing your specialized tasks, take a genuine interest in the whole business: customers, flow, how roles connect. That expansion of attention is the first step from following mode toward the integrating mind. The video assigns a minimum two-week commitment: <strong>Project Curiosity</strong> at work before the next lesson.
        </p>
      </section>

      <section className="btv-video btv-reveal" aria-label="Lesson video">
        <div className="btv-video-frame">
          <iframe
            title="Neothink Mentality lesson 3: Beyond Tunnel Vision"
            src={embedUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-takeaways">
        <h2 id="btv-takeaways">Key takeaways</h2>
        <div className="btv-takeaways">
          <ul>
            {BEYOND_TUNNEL_VISION_TAKEAWAYS.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-tunnel">
        <h2 id="btv-tunnel">Why tunnel vision keeps people stuck</h2>
        <p>
          Hamilton uses <strong>tunnel vision</strong> (narrow attention on your own tasks and responsibilities) to explain the routine rut. The worker completes assignments and leaves. The mind stays in specialized thinking and following mode, so integration never starts.
        </p>
      </section>

      <aside className="btv-def btv-reveal" aria-labelledby="btv-def-tv">
        <p className="btv-def-label">Definition</p>
        <h3 id="btv-def-tv">Tunnel vision (specialized thinking)</h3>
        <p>
          Attention stays on your slice of work without seeing how it connects to the larger system. That narrow field is what keeps following mode stable month after month.
        </p>
      </aside>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-dish">
        <h2 id="btv-dish">The dishwasher contrast (lesson one, revisited)</h2>
        <p>
          In the first talk, Hamilton describes his own experience at fifteen: other dishwashers stayed inside specialized tasks; he got curious about customers, curb appeal, staff, food, location, access, and after weeks of observation the puzzle snapped together in a short breakthrough. In his account, that integrating path changed the business; coworkers who stayed in tunnel vision were still in the same role when he left.
        </p>
        <p>
          The lesson is not moral judgment; it is structural. Same starting point, different mental motion: curiosity versus task-only repetition.
        </p>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-curious">
        <p className="btv-kicker">First step into integration</p>
        <h2 id="btv-curious">Curiosity as the gateway</h2>
        <p>
          The video names curiosity as the entry into the Neothink mentality: shift from “get through the day” to real interest in your workplace. Broaden past your job’s tasks; ask coworkers about their work with sincerity. When they ask why, frame it as respect for their contribution. As attention widens, the mind can leave tunnel vision and begin to integrate: baby steps toward the mentality Hamilton associates with super achievers.
        </p>
      </section>

      <section className="btv-section btv-reveal" aria-labelledby="btv-vs">
        <h2 id="btv-vs">Tunnel vision versus a curious mind</h2>
        <div className="btv-compare">
          <div className="btv-compare-col btv-compare-col--negative">
            <h3>Tunnel vision</h3>
            <ul>
              {BEYOND_TUNNEL_VISION_TUNNEL_VISION.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
          <div className="btv-compare-col btv-compare-col--positive">
            <h3>Curious mind</h3>
            <ul>
              {BEYOND_TUNNEL_VISION_CURIOUS.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-pc">
        <h2 id="btv-pc">Project Curiosity at work</h2>
        <p>
          Hamilton asks viewers to run <strong>Project Curiosity</strong> for at least <strong>two weeks</strong> before the next talk. Observe the business as a whole; talk with colleagues; notice where money could be made or tasks done more efficiently. Those are the “baby steps” into integrated thinking. The next lesson, he says, goes further, but this step comes first.
        </p>
        <div className="btv-callout-dark">
          <p className="btv-callout-kicker">What changes</p>
          <h3>Your mind begins to behave differently</h3>
          <p>
            Opening attention to the entire business (he uses his dishwasher example) reduces the feeling of being trapped in a rut. The mind expands toward integration: the mentality the lesson ties to serious builders.
          </p>
        </div>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-after">
        <h2 id="btv-after">After two weeks</h2>
        <p>
          The aim is to notice the <em>essence</em> of the business: where value is created, where waste sits, how parts connect. Small observations count. This is not the final stage of the Neothink mentality; it is the prerequisite the series builds on.
        </p>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-plan">
        <h2 id="btv-plan">Project Curiosity: a practical sequence</h2>
        <ol className="btv-steps">
          {BEYOND_TUNNEL_VISION_PROJECT_STEPS.map((s, i) => (
            <li key={s.title}>
              <span className="btv-step-num">{i + 1}</span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-why">
        <h2 id="btv-why">Why this shift matters</h2>
        <p>
          Without curiosity, integrated thinking has no raw material. With it, two people at the same starting point can diverge: one stays in tunnel vision; the other begins to integrate and see opportunity. The Neothink mentality, in this sequence, is trained, not wished for.
        </p>
      </section>

      <section className="btv-section btv-prose btv-reveal" aria-labelledby="btv-next">
        <h2 id="btv-next">What’s next in the series</h2>
        <p>
          After Project Curiosity, the following lesson turns toward impact and profit with an expanding mind. See{" "}
          <Link href={WP.impactProfits}>Impact Profits</Link>. Complete at least two weeks of Project Curiosity first, as the video instructs.
        </p>
      </section>

      <section className="btv-faq btv-reveal" aria-labelledby="btv-faq-h">
        <h2 id="btv-faq-h">Frequently asked questions</h2>
        <div className="btv-faq-grid">
          {BEYOND_TUNNEL_VISION_FAQ.map((item) => (
            <article key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <nav className="btv-pager" aria-label="Lesson navigation">
        <p>
          Previous: <Link href={WP.freedomFromRights}>Freedom from Rights</Link>
        </p>
        <p>
          Next: <Link href={WP.impactProfits}>Impact Profits</Link>
        </p>
      </nav>

      <section className="btv-cta btv-reveal" aria-label="Continue the series">
        <h2>Continue the series</h2>
        <p>Return to the full lesson list or subscribe on YouTube for new video.</p>
        <div className="btv-cta-row">
          <Link href={WP.neothinkMentality} className="btv-btn">
            All lessons
          </Link>
          <a href={WP.podcastChannel} className="btv-btn btv-btn--ghost" target="_blank" rel="noopener noreferrer">
            YouTube channel
          </a>
        </div>
      </section>
    </main>
  );
}
