"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

const PILLARS = [
  {
    num: "I.",
    title: "The Bicameral Origin",
    body:
      "2,400 years ago, the internal voice structure that governed human cognition collapsed. Philosophy arose not as wisdom — but as emergency stabilization for a species that had lost its psychological foundation. The bicameral mind was not merely a psychological state. It was a civilizational operating system. It governed hierarchy, authority, obedience, warfare, religion, and governance. Its collapse did not immediately produce modern consciousness. It produced a prolonged transitional era that has never fully resolved.",
  },
  {
    num: "II.",
    title: "The Aristotelian Interruption",
    body:
      "For one brief moment, Aristotle completed the transition to fully integrated consciousness — a mind capable of observing reality directly, reasoning causally, and governing itself internally. His works were lost before the correction could propagate. Humanity took a 2,400-year detour into hierarchy, force, and external authority. Everything since — the Dark Ages, the Renaissance, the Enlightenment, the century of blood — is the turbulence of a species trying to complete a transition that was interrupted.",
  },
  {
    num: "III.",
    title: "The Civilizational Law",
    body:
      "As force rises, civilization collapses. As force recedes, civilization soars. This is not a political position. It is a natural law with the reliability of gravity. America soared when force was constrained more than anywhere in history. The Soviet Union, Maoist China, and Nazi Germany collapsed when force was maximized. The Enlightenment flourished when reason was liberated. The Dark Ages stagnated when inquiry was suppressed. The pattern holds across every civilization, every epoch, without exception.",
  },
  {
    num: "IV.",
    title: "The Correction",
    body:
      "The Prime Law — the prohibition of initiated force — is the structural codification of the Civilizational Law. Not a moral ideal but an engineering specification for civilization. Neovia is its physical expression: the first society in human history designed to remove initiated force at the root and create the conditions in which fully conscious human beings can operate without constraint. The correction that was interrupted 2,400 years ago is now operational.",
  },
] as const;

const ARC_ITEMS = [
  {
    era: "~1200 BC",
    title: "When the Gods Fell Silent",
    body: "The collapse of the bicameral mind and the rise of philosophy as emergency stabilization.",
  },
  {
    era: "469–399 BC",
    title: "Socrates: The First Turn Inward",
    body: "The man who taught people to think about thinking — and was killed for it.",
  },
  {
    era: "428–348 BC",
    title: "Plato: The Great Preservation Error",
    body: "The emergency system that saved civilization — and froze it.",
  },
  {
    era: "384–322 BC",
    title: "Aristotle: The Only Full Breakthrough",
    body: "The one mind that crossed the threshold. The works that were lost.",
  },
  {
    era: "356–323 BC",
    title: "Alexander: The First Conscious Leader",
    body: "Proof of what full consciousness produces when placed in command.",
  },
  {
    era: "~4 BC–32 AD",
    title: "Jesus: The Inner Voice Awakened",
    body: "Not founding a religion — initiating an evolutionary upgrade of the human mind.",
  },
  {
    era: "354–430 AD",
    title: "Augustine: The Closing of the Path",
    body: "How Plato's scaffolding was baptized into Christianity — sealing consciousness for a millennium.",
  },
  {
    era: "~500–1200 AD",
    title: "The Long Night",
    body: "A thousand years where progress became suspect and force ruled through ideas.",
  },
  {
    era: "1225–1600s",
    title: "The Return of the Light",
    body: "Aquinas reintroduced Aristotle. The Renaissance followed. Reason was rehabilitated.",
  },
  {
    era: "1600s–1800s",
    title: "The Mind Unleashed",
    body: "The Enlightenment, the American experiment, and what happened when consciousness was set free.",
  },
  {
    era: "1900s",
    title: "The Century of Blood",
    body: "The twentieth century as indictment. What happens when force is maximized with industrial power.",
  },
  {
    era: "Now",
    title: "Neovia: The Correction",
    body: "The first Prime Law civilization. The 2,400-year detour ends here.",
  },
] as const;

export function UnifiedFieldPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".uf-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("uf-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("uf-visible");
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
    <main id="main-content" ref={mainRef} className="uf-page">
      <section className="uf-hero" aria-labelledby="uf-hero-heading">
        <div className="uf-hero-label">The Foundational Discovery</div>
        <h1 id="uf-hero-heading">
          The Unified Field of <em>Conscious Civilization</em>
        </h1>
        <p className="uf-hero-sub">
          The first complete synthesis identifying the single structural pattern governing every empire, every
          economy, and every human destiny across all of recorded history.
        </p>
        <div className="uf-hero-meta">
          By <span>Mark Hamilton</span> · Neothink Institute · 50 Years of Research
        </div>
      </section>

      <section className="uf-opening" aria-label="Opening statement">
        <blockquote className="uf-reveal">
          Most of human history has been governed by systems that assumed people must be commanded, coerced, saved,
          managed, or controlled in order to function. Those systems were designed for an <em>earlier form of mind.</em>{" "}
          They are <em>obsolete.</em>
        </blockquote>
      </section>

      <section className="uf-argument" aria-labelledby="uf-argument-heading">
        <div className="uf-argument-inner">
          <span className="uf-section-label uf-reveal">The Argument</span>
          <h2 id="uf-argument-heading" className="uf-reveal">
            What the Unified Field <em>reveals</em>
          </h2>

          <div className="uf-reveal">
            <p>
              There are moments in history when something that was always latent inside the human mind suddenly becomes
              visible. Controlling fire was one of those moments. Language was another. Writing. Law. Science.
              Computing. Each was not merely a tool but a liberation — a release of power that had always been waiting for
              the right structure to carry it.
            </p>
            <p>
              The Unified Field of Conscious Civilization reveals the next release. For the first time, we can see the
              hidden structure that has governed every civilization, every religion, every economy, and every revolution
              across all of recorded history. What once looked like chaos locks into place. Ancient Egypt, Greece, Rome,
              the Church, the Enlightenment, modern science, totalitarianism, capitalism, the digital age — they are
              not disconnected events.{" "}
              <strong>They are phases of consciousness unfolding under the same invisible laws.</strong>
            </p>
          </div>

          <h3 className="uf-reveal">The Rupture</h3>
          <div className="uf-reveal">
            <p>
              Approximately 2,400 years ago, the internal voice structure that had governed human cognition for
              millennia — what Julian Jaynes identified as the bicameral mind — collapsed. For untold millennia, human
              beings had not experienced themselves as autonomous decision-makers. Command came from elsewhere,
              experienced as voices and imperatives that were obeyed without question. Entire civilizations were
              constructed around them.
            </p>
            <p>
              Then the voices began to fail. This did not arrive as philosophical enlightenment. It arrived as deadly
              disorientation. Across the ancient world, records fill with accounts of relentless war, civil collapse, and
              desperate attempts to restore order. The old system of command no longer worked, but nothing had yet
              replaced it.
            </p>
            <p>
              Into this vacuum stepped something entirely new. For the first time in human history, philosophy appeared —
              not in one place, not in one culture, but across the world within a remarkably compressed window of time.
              Confucius, the Upanishadic thinkers, Zoroaster, Plato — all responding to the same global rupture.
            </p>
          </div>

          <div className="uf-pullquote uf-reveal">
            Philosophy did not arise because humans suddenly became curious about truth. It arose because civilizations
            were unraveling and needed a replacement for the lost gods.
          </div>

          <h3 className="uf-reveal">The Emergency System</h3>
          <div className="uf-reveal">
            <p>
              Plato designed the most successful emergency stabilization system in human history. Born into the chaos of
              the Peloponnesian Wars, watching his teacher Socrates executed for the crime of teaching people to think,
              Plato sought permanence above all else. His answer: truth exists in a higher realm, accessible only to the
              few. The many must be guided. Authority comes from above. Obedience maintains order. Force is the guarantor.
            </p>
            <p>
              This was not the act of a tyrant. It was the act of a caretaker. Plato was staring at a terrifying
              asymmetry: a small number of conscious individuals surrounded by masses whose inner command structures had
              collapsed but whose minds had not yet reorganized. He designed a bridge.
            </p>
            <p>
              <strong>The tragedy is that the bridge was never taken down.</strong> It hardened into the permanent
              operating system of civilization. It was baptized into Christianity by Augustine. It became government,
              education, religion, media. Every institution humanity has built since operates on the same Platonic
              architecture: external authority above, obedience below, force holding it all together.
            </p>
          </div>

          <h3 className="uf-reveal">The Lost Breakthrough</h3>
          <div className="uf-reveal">
            <p>
              At the exact moment Plato built his cage, one mind completed the full breakthrough into integrated
              consciousness. <strong>Aristotle</strong> — raised in relative stability, trained in empirical observation,
              educated in Plato&apos;s Academy — did something no one else in antiquity achieved. He grounded thought in
              reality as it is. He integrated logic, observation, causality, ethics, and purpose into a unified
              framework that treated the human mind not as a vessel for commands but as an active integrator of reality.
            </p>
            <p>
              Aristotle did not ask how people ought to behave in order to keep civilization intact. He asked:{" "}
              <strong>what is.</strong> He trusted the human mind to discover the answer.
            </p>
            <p>
              Had this framework been allowed to propagate uninterrupted, civilization would have taken a radically
              different path. Force would have become increasingly unnecessary. Creativity, science, and value creation
              would have accelerated centuries ahead of schedule.
            </p>
            <p>
              But Aristotle&apos;s works were scattered. Many were lost. Some burned. Others were buried, deteriorating
              underground, later misinterpreted or filtered through theological lenses that stripped them of their
              integrative power. What survived was partial — perhaps one-third. What mattered most — the operating system
              itself — was gone.
            </p>
          </div>

          <div className="uf-pullquote uf-reveal">
            Humanity did not reject Aristotle&apos;s full consciousness. It never truly received it.
          </div>

          <h3 className="uf-reveal">The 2,400-Year Detour</h3>
          <div className="uf-reveal">
            <p>
              What followed was two thousand years of civilization built on hybrids: conscious individuals living under
              bicameral-era structures, guided by philosophies meant for stabilization rather than liberation, enforced by
              institutions that relied on force as inner authority remained incomplete.
            </p>
            <p>
              The pattern repeated with devastating consistency. When Aristotle&apos;s works partially resurfaced through
              Aquinas in the thirteenth century, the Renaissance exploded. When Enlightenment thinkers built on that
              recovery, civilization soared — especially in America, where force was constrained more than anywhere in
              history. When force returned under new language — bureaucracy, central planning, ideological salvation —
              civilization collapsed again. The twentieth century became the bloodiest era in history because it
              institutionalized coercion at scale.
            </p>
            <p>The pattern is exact. It is not a moral preference. It is a natural law.</p>
          </div>

          <h3 className="uf-reveal">The Correction</h3>
          <div className="uf-reveal">
            <p>
              The Unified Field resolves the 2,400-year detour by naming what history has already proven:{" "}
              <strong>as force rises, civilization collapses; as force recedes, civilization soars.</strong> This is the
              Law of Humanity. Every civilization that violated it paid the same price. Every period of flourishing
              occurred when force was constrained.
            </p>
            <p>
              The correction is the Prime Law: the prohibition of initiated force as a structural foundation, not as a
              moral aspiration but as civilizational architecture. And the physical expression of that correction is
              Neovia — the first society ever designed to remove force at the root and allow consciousness to operate at
              the power it was always designed for.
            </p>
            <p>
              For the first time since Aristotle&apos;s brief breakthrough, the conditions exist to complete what he
              started. The Unified Field is the proof. The Prime Law is the codification. Neovia is the build.
            </p>
            <p>The detour ends here.</p>
          </div>
        </div>
      </section>

      <section className="uf-pillars" aria-labelledby="uf-pillars-label">
        <h2 id="uf-pillars-label" className="uf-pillars-label uf-reveal">
          The Four Pillars of the Unified Field
        </h2>
        <div className="uf-pillars-grid">
          {PILLARS.map((p) => (
            <div key={p.title} className="uf-pillar uf-reveal">
              <span className="uf-pillar-num">{p.num}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="uf-arc" aria-labelledby="uf-arc-heading">
        <div className="uf-arc-header uf-reveal">
          <h2 id="uf-arc-heading">
            The Complete Arc of <em>Conscious Civilization</em>
          </h2>
          <p>
            The Unified Field traces the full trajectory of human consciousness from its bicameral origins to the Prime
            Law civilization. Each chapter below represents a major phase in that arc.
          </p>
        </div>

        <div className="uf-arc-timeline">
          {ARC_ITEMS.map((item) => (
            <div key={item.title} className="uf-arc-item uf-reveal">
              <span className="uf-arc-era">{item.era}</span>
              <h4>{item.title}</h4>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="uf-law" aria-labelledby="uf-law-heading">
        <div className="uf-law-inner uf-reveal">
          <span className="uf-law-label">The Natural Law of Humanity</span>
          <h2 id="uf-law-heading">
            As force rises, civilization <em>collapses.</em>
            <br />
            As force recedes, civilization <em>soars.</em>
          </h2>
          <p>
            This law does not care about intentions. It does not reward good motives or punish bad ones. It operates with
            the indifference of gravity. Wherever human action is constrained by coercion, prosperity withers. Wherever
            voluntary action is permitted to expand, prosperity multiplies.
          </p>

          <div className="uf-law-examples">
            <div className="uf-law-example">
              <span className="uf-law-direction uf-law-down">Force Recedes ↑</span>
              <h4>Early America</h4>
              <p>
                Unprecedented limits on force. Power divided. Markets free. Result: the greatest explosion of innovation
                and prosperity in human history.
              </p>
            </div>
            <div className="uf-law-example">
              <span className="uf-law-direction uf-law-up">Force Rises ↓</span>
              <h4>Soviet Union</h4>
              <p>
                Total state authority over production, speech, and thought. Result: famine, purges, gulags. Tens of
                millions dead from enforced compliance.
              </p>
            </div>
            <div className="uf-law-example">
              <span className="uf-law-direction uf-law-down">Force Recedes ↑</span>
              <h4>The Renaissance</h4>
              <p>
                Aristotle recovered. Reason rehabilitated. Inquiry permitted. Result: science, art, and human capability
                accelerated beyond all precedent.
              </p>
            </div>
            <div className="uf-law-example">
              <span className="uf-law-direction uf-law-up">Force Rises ↓</span>
              <h4>The Dark Ages</h4>
              <p>
                Plato&apos;s hierarchy baptized into doctrine. Inquiry criminalized. Knowledge suppressed. Result: a
                thousand years of stagnation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="uf-read" aria-labelledby="uf-read-heading">
        <div className="uf-read-inner">
          <div className="uf-reveal">
            <h2 id="uf-read-heading">
              Read <em>Unleashed</em>
            </h2>
            <p>
              <strong>Unleashed: The Promethean Promise</strong> is Mark Hamilton&apos;s complete delivery of the
              Unified Field of Conscious Civilization. The full arc — from the collapse of the bicameral mind through
              Socrates, Plato, Aristotle, Jesus, Augustine, the Dark Ages, the Enlightenment, the century of blood, the
              Prime Law, and Neovia.
            </p>
            <p>
              This is the definitive work. The proof that the 2,400-year detour can finally end. Available in its entirety
              — because this knowledge belongs to everyone.
            </p>
            <Link href={WP.unleashed} className="uf-btn-primary" style={{ marginTop: 32 }}>
              Read Unleashed
            </Link>
          </div>
          <div className="uf-read-book uf-reveal">
            <h3>Unleashed</h3>
            <span className="uf-book-subtitle">The Promethean Promise</span>
            <div className="uf-book-author">by Mark Hamilton</div>
            <div className="uf-book-scope">
              <div className="uf-book-scope-item">
                <strong>24</strong>
                Chapters
              </div>
              <div className="uf-book-scope-item">
                <strong>2,400</strong>
                Years Covered
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="uf-author" aria-labelledby="uf-author-heading">
        <div className="uf-author-inner uf-reveal">
          <div className="uf-author-avatar" aria-hidden="true">
            <span>MH</span>
          </div>
          <div className="uf-author-text">
            <h3 id="uf-author-heading">Mark Hamilton</h3>
            <span className="uf-author-title">Civilizational Theorist · Founder, Neothink Institute</span>
            <p>
              Mark Hamilton has spent fifty years assembling the most comprehensive map of consciousness and civilization
              ever constructed. The Unified Field is the result — and Neovia is its physical expression. Three
              generations of development. Now entering its public phase.
            </p>
            <Link href={WP.markHamilton}>Full Biography →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
