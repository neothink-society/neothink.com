"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { MARK_HAMILTON_PORTRAIT_URL } from "@/lib/wordpress-images";
import { WP } from "@/lib/wordpress-routes";

const BODY_OF_WORK = [
  {
    href: WP.unifiedField,
    label: "The Discovery",
    title: "The Unified Field of Conscious Civilization",
    description:
      "The first complete synthesis linking individual cognition, social order, economic productivity, and political legitimacy to a single underlying structure. The foundational contribution that makes everything else possible.",
    linkText: "Read the Framework →",
  },
  {
    href: WP.unleashed,
    label: "The Magnum Opus",
    title: "Unleashed: The Promethean Promise",
    description:
      "The complete delivery of the Unified Field — tracing the arc of consciousness from the bicameral collapse through the Prime Law to Neovia. The definitive work. Available in its entirety on this site.",
    linkText: "Read Unleashed →",
  },
  {
    href: WP.neovia,
    label: "The Civilizational Design",
    title: "Neovia",
    description:
      "The first civilization designed to remove initiated force at the structural root. Not a utopia — an anti-extinction architecture. The physical expression of the Prime Law and the proof that the correction works.",
    linkText: "Explore Neovia →",
  },
  {
    href: WP.neothink,
    label: "The Operating System",
    title: "Neothink",
    description:
      "The cognitive technology for the uncovered mind. Integrated thinking, cause-and-effect reasoning, concept building, future prediction — what consciousness does when it is no longer caged by hierarchy and force.",
    linkText: "What Is Neothink →",
  },
  {
    href: WP.primeLaw,
    label: "The Constitutional Foundation",
    title: "The Prime Law",
    description:
      "The prohibition of initiated force — codified not as moral aspiration but as civilizational architecture. The structural correction for the 2,400-year detour. Three articles. No exceptions.",
    linkText: "Read the Prime Law →",
  },
  {
    href: WP.publishedWork,
    label: "The Corpus",
    title: "The Neothink Corpus",
    description:
      "Millions of words across manuscripts, books, and strategic briefings spanning five decades — the complete body of work on consciousness, economics, political theory, and civilizational design.",
    linkText: "View Published Work →",
  },
];

const ARTICLES = [
  {
    href: "/articles/bicameral-mind",
    tag: "Consciousness",
    title: "When the Gods Fell Silent: The Bicameral Mind and Its Collapse",
    description:
      "The moment humanity lost its internal guidance system — and the emergency philosophy that arose to replace it.",
  },
  {
    href: "/articles/aristotle",
    tag: "The Lineage",
    title: "Aristotle: The Only Full Breakthrough",
    description:
      "The one mind that crossed the threshold into fully integrated consciousness. Why his works were lost — and why that loss was the greatest tragedy in human history.",
  },
  {
    href: "/articles/prime-law",
    tag: "Political Theory",
    title: "The Prime Law: A Natural Law, Not an Ideology",
    description:
      "Every civilization that violated the Law of Humanity paid the same price. The Prime Law codifies what history has already proven across millennia.",
  },
  {
    href: "/articles/nuclear-threshold",
    tag: "Existential Risk",
    title: "The Nuclear Decision Threshold",
    description:
      "Multiple hierarchies, each maximizing force, each armed to annihilate, with AI accelerating every decision. Why annihilation is certain on the current trajectory.",
  },
  {
    href: "/articles/neovia-case",
    tag: "Neovia",
    title: "The Case for Neovia: Why It Must Be Built Now",
    description:
      "The anti-extinction architecture. The first non-coercive civilizational alternative in history. Why it is the most important project on earth.",
  },
  {
    href: "/articles/hierarchy",
    tag: "Civilizational Theory",
    title: "Hierarchy: The 2,400-Year Structure That Was Never Meant to Last",
    description:
      "Plato built it as an emergency measure. Augustine baptized it. Every institution you were raised inside still runs on it.",
  },
] as const;

export function MarkHamiltonPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".mh-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("visible");
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
    <main id="main-content" ref={mainRef} className="mh-page">
      <section className="mh-hero" aria-labelledby="mh-hero-heading">
        <div className="mh-hero-inner">
          <div>
            <div className="mh-hero-label">The Architect</div>
            <h1 id="mh-hero-heading">Mark Hamilton</h1>
            <div className="mh-hero-title">
              Civilizational Theorist &middot; Systems Philosopher &middot; Founder, Neothink Institute
            </div>
            <p className="mh-hero-intro">
              The architect of the Unified Field of Conscious Civilization and the originator of Neovia
              — the first civilization designed to remove initiated force and allow consciousness to operate
              at full, unhindered power. Five decades of independent research culminating in the most
              comprehensive framework for understanding consciousness and civilization ever assembled.
            </p>
          </div>
          <div className="mh-portrait">
            <div className="mh-portrait-fill">
              <div className="mh-portrait-media">
                <Image
                  src={MARK_HAMILTON_PORTRAIT_URL}
                  alt="Mark Hamilton"
                  fill
                  className="mh-portrait-image"
                  sizes="(max-width: 900px) 100vw, 380px"
                  priority
                />
              </div>
            </div>
            <div className="mh-portrait-caption">
              <strong>Mark Hamilton</strong>
              <p>Founder, Neothink Institute</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mh-question" aria-label="The radical question">
        <div className="mh-question-inner mh-reveal">
          <blockquote>
            Where others sought better rulers, better laws, or better ideologies — Hamilton asked a more
            fundamental question: <em>what if hierarchy itself is the problem?</em> And more importantly:{" "}
            <em>what replaces it?</em>
          </blockquote>
        </div>
      </section>

      <section className="mh-story" aria-labelledby="mh-story-heading">
        <div className="mh-story-inner">
          <span className="mh-section-label mh-reveal">The Story</span>
          <h2 id="mh-story-heading" className="mh-reveal">
            A man who loved humanity too much to accept that{" "}
            <em>self-destruction was its destiny.</em>
          </h2>

          <div className="mh-reveal">
            <p>Some people accept the world as it is. Mark Hamilton couldn&apos;t.</p>
            <p>
              He saw what everyone sees — the wars, the corruption, the cycles of hope and collapse that
              have defined human history. But where others saw inevitability, Hamilton saw a question:{" "}
              <strong>why?</strong>
            </p>
            <p>
              Why does every civilization eventually decay? Why does every revolution become what it
              fought against? Why does power always corrupt, collapse always come? Why has the human species
              — with the most powerful brain in the known universe — never built a civilization that lasts?
            </p>
            <p>
              It wasn&apos;t enough to say &quot;human nature.&quot; For Hamilton, that wasn&apos;t an
              answer. It was a surrender. And he refused to surrender — because he loved life too much.
              Loved humanity too much. Loved what we <strong>could be</strong> too much to accept that
              self-destruction was our destiny.
            </p>
            <p>So he went looking for the real answer.</p>
          </div>

          <h3 className="mh-reveal">Fifty Years</h3>
          <div className="mh-reveal">
            <p>
              Hamilton wasn&apos;t interested in surface explanations — another political theory, another
              reform that would buy a few decades before the next collapse. He was looking for the root.
              The reason <strong>every</strong> system eventually fails.
            </p>
            <p>
              He studied history, psychology, economics, consciousness. He traced the problem back through
              millennia — through Julian Jaynes&apos; research on the bicameral mind, through
              Aristotle&apos;s lost framework for integrated consciousness, through every empire that rose
              and fell on the same invisible fault line.
            </p>
            <p>And he found it.</p>
            <p>
              Every civilization in history has been built on the same foundation:{" "}
              <strong>external authority.</strong> Someone above you tells you what is true, what is
              allowed, how to live. This structure doesn&apos;t just allow corruption — it guarantees it.
              Concentrated power always decays. Not because people are evil, but because the system is
              designed to fail.
            </p>
          </div>

          <div className="mh-pullquote mh-reveal">
            Hamilton called it the 2,400-year civilizational detour — a wrong turn humanity took when
            external authority replaced internal self-leadership as the organizing principle of civilization.
            Every empire, every nation, every revolution since then has operated within the same paradigm.
          </div>

          <div className="mh-reveal">
            <p>
              His diagnosis was stark: humanity had developed the technology of gods while still running on
              the operating system of slaves. And now, with nuclear weapons and AI, the next collapse might
              be the last.
            </p>
          </div>

          <h3 className="mh-reveal">The Discovery</h3>
          <div className="mh-reveal">
            <p>But diagnosis wasn&apos;t enough. So Hamilton built the alternative.</p>
            <p>
              Over decades, he authored millions of words — books, manuscripts, frameworks — synthesizing his
              discovery into what he called the{" "}
              <strong>Unified Field of Conscious Civilization</strong>: a complete architecture showing how
              cognition, economics, governance, and human potential all arise from the same underlying
              structure.
            </p>
            <p>
              The Unified Field revealed something that had been hiding in plain sight across all of recorded
              history: <strong>as force rises, civilization collapses. As force recedes, civilization soars.</strong>{" "}
              Not as a political preference — as a natural law with the reliability of gravity. Every
              civilization that violated it paid the same price. Every period of flourishing occurred when
              force was constrained.
            </p>
            <p>
              From this discovery emerged the <strong>Prime Law</strong> — the prohibition of initiated force
              — not as a moral ideal, but as the necessary structural condition for advanced consciousness to
              function at scale.
            </p>
          </div>

          <h3 className="mh-reveal">The Build</h3>
          <div className="mh-reveal">
            <p>And then came the hardest part: making it real.</p>
            <p>
              Because understanding why civilization fails isn&apos;t the same as building one that works.
              Hamilton didn&apos;t want to write another book that people admired and filed away. He wanted
              to build the proof. A real civilization. A real city. A real demonstration that the Prime Law
              works — that when force is removed, human consciousness doesn&apos;t collapse into chaos. It
              explodes into creation.
            </p>
            <p>
              That city is <strong>Neovia</strong>. And it is under development now.
            </p>
            <p>
              The result of fifty years wasn&apos;t just a theory. It was <strong>Neothink</strong> — an
              operating system for the uncovered mind. A framework that restores what hierarchy suppresses:
              the creative mind, internal authority, self-generated values. Not a philosophy to believe in —
              a technology for human consciousness.
            </p>
          </div>

          <div className="mh-pullquote mh-reveal">
            Hamilton&apos;s work is distinctive for treating civilization as an engineering problem rather than
            a political debate — and for insisting that consciousness is not merely personal, but
            civilizational.
          </div>

          <div className="mh-reveal">
            <p>
              For fifty years, this work developed largely outside the public eye. Hamilton built quietly,
              rigorously, comprehensively — producing the most complete framework for understanding
              consciousness and civilization that has ever been assembled. Multiple generations contributed to
              its development. Now it enters its public phase.
            </p>
            <p>Not because the world is ready. Because it can&apos;t wait any longer.</p>
            <p>
              The Unified Field reveals that the current trajectory — nuclear-armed hierarchies competing for
              maximum force, with AI compressing every decision — has only one endpoint. The correction that
              was interrupted 2,400 years ago when Aristotle&apos;s works were lost must be completed now.
              Not eventually. Now.
            </p>
            <p>
              That is what Hamilton has spent his life building. And that is what the Neothink Institute
              exists to deliver.
            </p>
          </div>
        </div>
      </section>

      <section className="mh-work" aria-labelledby="mh-work-heading">
        <div className="mh-work-header mh-reveal">
          <span className="mh-section-label">The Body of Work</span>
          <h2 id="mh-work-heading">
            Five decades. <em>One integrated vision.</em>
          </h2>
          <p>
            The scope of Hamilton&apos;s output is unlike anything in modern intellectual history — millions
            of words across manuscripts, books, and strategic frameworks, all building toward a single
            integrated picture of consciousness and civilization.
          </p>
        </div>

        <div className="mh-work-grid">
          {BODY_OF_WORK.map((item) => (
            <Link key={item.href} href={item.href} className="mh-work-item mh-reveal">
              <span className="mh-work-item-label">{item.label}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="mh-work-item-link">{item.linkText}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mh-words" aria-labelledby="mh-words-heading">
        <div className="mh-words-inner">
          <div className="mh-words-col-text mh-reveal">
            <span className="mh-section-label">In His Own Words</span>
            <h2 id="mh-words-heading">
              Read <em>Unleashed</em>
            </h2>
            <p>
              Hamilton&apos;s magnum opus delivers the complete Unified Field of Conscious Civilization —
              from the collapse of the bicameral mind through Socrates, Plato, Aristotle, Jesus, Augustine,
              the Dark Ages, the Enlightenment, the century of blood, the Prime Law, and Neovia.
            </p>
            <p>
              The work that changes how you see civilization, consciousness, and what humanity is capable of
              when the cage finally comes off.
            </p>
            <div className="mh-words-actions">
              <Link href={WP.unleashed} className="mh-btn-primary">
                Read Online
              </Link>
              <Link href={WP.unleashedDownload} className="mh-btn-secondary">
                Download PDF
              </Link>
            </div>
          </div>
          <div className="mh-words-book mh-reveal">
            <h3>Unleashed</h3>
            <span className="mh-book-sub">The Promethean Promise</span>
            <div className="mh-book-author">by Mark Hamilton</div>
            <p className="mh-book-desc">
              The power of gods, wielded by humans. The definitive work on the Unified Field of Conscious
              Civilization. Available in its entirety.
            </p>
          </div>
        </div>
      </section>

      <section className="mh-podcast" aria-labelledby="mh-podcast-heading">
        <div className="mh-podcast-inner mh-reveal">
          <div className="mh-podcast-icon">
            <span>U</span>
          </div>
          <div className="mh-podcast-text">
            <h3 id="mh-podcast-heading">
              <em>Unleashed</em> — The Podcast
            </h3>
            <p>
              Mark Hamilton and Wallace Hamilton in conversation — delivering the Unified Field to the world
              for the first time. The discovery, the proof, and the vision, in twelve founding episodes.
            </p>
            <Link href={WP.podcast}>Coming Soon — Subscribe →</Link>
          </div>
        </div>
      </section>

      <section className="mh-articles" aria-labelledby="mh-articles-heading">
        <div className="mh-articles-header mh-reveal">
          <span className="mh-section-label">Selected Work</span>
          <h2 id="mh-articles-heading">From Mark Hamilton</h2>
        </div>

        <div className="mh-articles-grid">
          {ARTICLES.map((article) => (
            <Link key={article.href} href={article.href} className="mh-article-card mh-reveal">
              <span className="mh-article-tag">{article.tag}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </Link>
          ))}
        </div>

        <div className="mh-articles-cta mh-reveal">
          <Link href={WP.publishedWork} className="mh-btn-secondary">
            View All Published Work
          </Link>
        </div>
      </section>
    </main>
  );
}
