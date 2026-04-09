"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

const STAGES = [
  {
    num: "I",
    title: "The Waking",
    body:
      "The recognition that your mind was put to sleep, and that the world you have been living in is not the only one. Learning to see through the illusions, past the false world, down to what is real. Receiving the gift of sight so that no one can ever cage your mind again.",
    tag: "See through the illusions",
  },
  {
    num: "II",
    title: "The Clearing",
    body:
      "The systematic removal of everything false. Every absorbed belief. Every borrowed identity. Every contradiction. Everything that was installed on top of you, piece by piece, stripped away until only what is real remains. The longest stage. The deepest work. The real transformation.",
    tag: "Remove what is not",
  },
  {
    num: "III",
    title: "The Living",
    body:
      "Operating fully from the awake self in the golden world. Creating, loving, growing, building with the full power of a mind that is finally free. The question is no longer who you should become. It is what you will create now that the cage is open. The path for the rest of a life.",
    tag: "Live in the golden world",
  },
] as const;

const CONNECTION_LINKS = [
  {
    href: WP.unifiedField,
    title: "The Unified Field",
    description: "The discovery that explains why the covering exists and why it has persisted for 2,400 years.",
    arrow: "Read the Framework →",
  },
  {
    href: WP.neovia,
    title: "Neovia",
    description: "The civilizational expression of the same correction The Way practices individually.",
    arrow: "Explore the Vision →",
  },
  {
    href: WP.neothink,
    title: "Neothink",
    description: "The operating system of the uncovered mind. What consciousness does when the cage opens.",
    arrow: "What Is Neothink →",
  },
  {
    href: WP.podcast,
    title: "The Podcast",
    description: "The Unified Field delivered in conversation. The civilizational proof behind The Way.",
    arrow: "Listen →",
  },
] as const;

export function TheWayPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".tw-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("tw-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("tw-visible");
            }, 80);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <main id="main-content" ref={mainRef} className="tw-page">
      <section className="tw-hero" aria-labelledby="tw-hero-heading">
        <div className="tw-hero-label">The Personal Path</div>
        <h1 id="tw-hero-heading">
          The Unified Field, lived <em>from the inside.</em>
        </h1>
        <p className="tw-hero-sub">
          The same structural error that has caged civilization for 2,400 years operates inside every individual mind. The Way is the practice of correcting it, personally, permanently, from the inside out.
        </p>
        <div className="tw-hero-meta">
          A practice of the <span>Neothink Institute</span>
        </div>
      </section>

      <section className="tw-opening" aria-label="Opening statement">
        <div className="tw-opening-inner tw-reveal">
          <blockquote>
            When you were a child, your mind was on fire. Then the world <em>put it to sleep.</em> You are not broken. You
            were never broken. You were <em>covered.</em>
          </blockquote>
        </div>
      </section>

      <section className="tw-diagnosis" aria-labelledby="tw-diagnosis-heading">
        <div className="tw-diagnosis-inner">
          <span className="tw-section-label tw-reveal">The Individual Diagnosis</span>
          <h2 id="tw-diagnosis-heading" className="tw-reveal">
            What the Unified Field reveals about <em>your mind</em>
          </h2>

          <div className="tw-reveal">
            <p>
              The Unified Field of Conscious Civilization identifies a single structural pattern governing every empire and
              every collapse across all of recorded history: when force rises, civilization collapses. When force recedes,
              civilization soars.
            </p>

            <p>
              That same pattern operates inside every individual. The same hierarchical architecture that Plato designed
              2,400 years ago as an emergency stabilization system does not only govern nations. It governs minds. From
              childhood onward, the same logic of external authority, obedience, and force operates in every institution a
              person is raised inside.
            </p>

            <p>
              <strong>The result is a caged mind.</strong> A mind that was once on fire with relentless curiosity,
              creativity, and integration is systematically quieted, dampened, and put to sleep. Not because something is
              wrong with the individual. Because the structure requires sleeping minds. Sleeping minds are easier to control.
              They are easier to manage, easier to predict, easier to keep dependent on external authority.
            </p>
          </div>

          <div className="tw-pullquote tw-reveal">
            The covering on your mind is not personal failure. It is the residue of a 2,400-year-old emergency system that
            was never meant to last, still operating inside every school, every workplace, every institution, and every
            relationship you were raised inside.
          </div>

          <div className="tw-reveal">
            <p>
              The result is a life spent searching externally for something that can only be found internally. Worth, meaning,
              identity, purpose, belonging. Each external pursuit fails because none of them can address what was actually
              taken: the mind&apos;s natural power to see clearly, think independently, and create without permission.
            </p>

            <p>
              The Way is the correction of this at the individual level. Not through adding new beliefs, new rules, or new
              dependencies. Through removing what was installed on top of you. Everything false gets stripped away. What
              remains is what you actually are.
            </p>
          </div>

          <h3 className="tw-reveal">A Subtractive Practice</h3>
          <div className="tw-reveal">
            <p>
              This is what makes The Way fundamentally different from every other path in this space.{" "}
              <strong>It is entirely subtractive.</strong> It does not tell you what to think. It does not impose morality,
              rules, or beliefs. It does not tell you who to become. It removes what is not you. What is left is what is. And
              what is, is unique to every individual.
            </p>

            <p>
              Two people can walk The Way to the same depth and arrive at completely different lives, different values,
              different expressions. Because The Way does not define the destination. It clears the path. What you find at
              the end of that path is yours alone.
            </p>
          </div>
        </div>
      </section>

      <section className="tw-worlds" aria-label="The false world and the golden world">
        <div className="tw-worlds-inner tw-reveal">
          <div className="tw-world">
            <span className="tw-world-label false">What Most People Experience</span>
            <h3>The False World</h3>
            <p>
              The dull routines. The quiet exhaustion. The relationships that don&apos;t quite reach you. The work that
              doesn&apos;t quite mean anything. The persistent sense that no matter what you achieve, something is still
              missing.
            </p>
            <p>
              Most people accept this as normal. They believe the struggle is the point. That the emptiness is what being an
              adult means.
            </p>
            <p>
              <strong>It is not normal. It was designed.</strong> The false world is what reality looks like through covered
              eyes. It is the product of a hierarchical structure that benefits from confusion, dependence, and minds that do
              not see clearly. The world is made foggy on purpose. Because a person who can see clearly cannot be controlled.
            </p>
          </div>
          <div className="tw-world">
            <span className="tw-world-label golden">What Becomes Visible</span>
            <h3>
              The <em>Golden</em> World
            </h3>
            <p>
              There is another world. Not far away. Not earned through years of struggle. Right here. Hidden beneath the
              false one.
            </p>
            <p>
              The golden world is what reality looks like when the covering comes off. When the mind can see clearly again.
              When illusions dissolve and what is actually there becomes visible for the first time.
            </p>
            <p>
              In the golden world, life becomes creation instead of survival. Relationships reach you because you are no
              longer performing. Work means something because it comes from genuine expression, not obligation.{" "}
              <strong>The golden world was supposed to be yours.</strong> It is your birthright. It was taken from you the
              day they put your mind to sleep. The Way is how you take it back.
            </p>
          </div>
        </div>
      </section>

      <section className="tw-stages" aria-labelledby="tw-stages-heading">
        <div className="tw-stages-header tw-reveal">
          <div>
            <span className="tw-section-label">The Path</span>
            <h2 id="tw-stages-heading">
              Three stages. One <em>direction.</em>
            </h2>
          </div>
          <p>
            The Way does not add to what you carry. It removes it. Each stage takes you closer to the ground of who you
            actually are, before the covering, before the cage, before the false world.
          </p>
        </div>

        <div className="tw-stages-grid">
          {STAGES.map((stage) => (
            <div key={stage.title} className="tw-stage tw-reveal">
              <span className="tw-stage-num" aria-hidden="true">
                {stage.num}
              </span>
              <h3>{stage.title}</h3>
              <p>{stage.body}</p>
              <span className="tw-stage-tag">{stage.tag}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="tw-practice" aria-labelledby="tw-practice-heading">
        <div className="tw-practice-inner">
          <span className="tw-section-label tw-reveal">How It Works</span>
          <h2 id="tw-practice-heading" className="tw-reveal">
            Not a set of beliefs. <em>A practice of removal.</em>
          </h2>

          <div className="tw-reveal">
            <p>
              The Way is not something you study. It is something you do. Each stage involves specific practices designed to
              identify, confront, and remove the layers of conditioning that were installed without your knowledge or
              consent.
            </p>
          </div>

          <h3 className="tw-reveal">Seeing</h3>
          <div className="tw-reveal">
            <p>
              The foundational practice. Learning to observe the conditioned self without identifying with it. Watching the
              performance without being the performance. Asking: where did this come from? Is this mine? How does reality
              actually respond to what I am doing? Developing the ability to see through illusion, past appearance, down to
              what is. This is the gift of sight. Once given, it cannot be taken back.
            </p>
          </div>

          <h3 className="tw-reveal">Clearing</h3>
          <div className="tw-reveal">
            <p>
              The systematic work of removal. Identifying false worth structures, absorbed beliefs, unresolved past, and
              environmental patterns that keep reinstalling the conditioned self. Not through force or self-punishment.
              Through honest seeing. What is seen clearly and named precisely loses its power. The clearing is done privately,
              at your own pace, with tools rather than commands. The Way provides the path. You choose how fast to walk it.
            </p>
          </div>

          <h3 className="tw-reveal">Living</h3>
          <div className="tw-reveal">
            <p>
              The stage that never ends. Operating from the ground of who you actually are, in ordinary life. Your work,
              your relationships, your daily decisions. The awake self does not retreat from the world. It engages it with full
              power. Creating value, building what matters, loving without performance, growing without ceiling. Life becomes
              the teaching. When people notice the change and ask what happened, you tell them.
            </p>
          </div>

          <div className="tw-pullquote tw-reveal">
            We do not tell you what you are, or who you are. We remove all that is not you. What is left is you.
          </div>
        </div>
      </section>

      <section className="tw-diff" aria-labelledby="tw-diff-heading">
        <div className="tw-diff-inner tw-reveal">
          <span className="tw-diff-label">What Makes This Different</span>
          <h2 id="tw-diff-heading">
            Compatible with <em>everything</em> you already believe.
          </h2>
          <p>
            The Way teaches the relationship to the power within. It does not teach what to believe about anything external.
            It does not conflict with existing faith, existing philosophy, or existing worldview. You can hold any belief
            system and walk The Way, because The Way does not replace beliefs. It removes what is false and lets you decide
            what is true.
          </p>
          <p>
            Two people can walk the same path to the same depth and arrive at completely different conclusions about life,
            purpose, and meaning. That is by design. The Way does not define the destination. It clears the path to it.
          </p>
        </div>
      </section>

      <section className="tw-connection" aria-labelledby="tw-connection-heading">
        <div className="tw-connection-inner">
          <div className="tw-reveal">
            <span className="tw-section-label">The Bigger Picture</span>
            <h2 id="tw-connection-heading">
              The individual correction and the <em>civilizational one</em> are the same.
            </h2>
            <p>
              The Way is not separate from the Unified Field. It is the individual expression of the same discovery. The
              covering on your mind and the hierarchy governing civilization are the same structure operating at different
              scales. When the covering comes off an individual, the fire returns. When it comes off civilization, that fire
              becomes unstoppable.
            </p>
            <p>
              The Way changes one life at a time. When enough lives change, the hierarchy that depends on sleeping minds
              loses its power through irrelevance. Not through revolution. Through awakening. The personal path and the
              civilizational correction are the same project.
            </p>
            <p>
              <strong>
                Neovia is where awakened minds build the world they were always meant to live in. The Way is how they get
                there.
              </strong>
            </p>
          </div>
          <div className="tw-reveal">
            <div className="tw-connection-links">
              {CONNECTION_LINKS.map((item) => (
                <Link key={item.href} href={item.href} className="tw-connection-link">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <span className="tw-link-arrow">{item.arrow}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tw-cta" aria-labelledby="tw-cta-heading">
        <div className="tw-cta-inner tw-reveal">
          <h2 id="tw-cta-heading">&ldquo;Return to the ground.&rdquo;</h2>
          <p>
            The Way is the practice of waking up, seeing through the illusions, removing the covering, and living as the
            person you were before the world put you to sleep. It begins with one recognition: you are not broken. You were
            covered. And the covering comes off now.
          </p>
          <Link href={WP.getInvolved} className="tw-btn-primary">
            Begin The Way
          </Link>
          <Link href={WP.podcast} className="tw-btn-secondary">
            Listen to the Podcast
          </Link>
        </div>
      </section>
    </main>
  );
}
