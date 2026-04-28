"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { WP } from "@/lib/wordpress-routes";

const FRAMEWORKS: { title: string; body: React.ReactNode }[] = [
  {
    title: "The Unified Field of Conscious Civilization",
    body: (
      <>
        <p className="ab-para">
          The Unified Field of Conscious Civilization is the
          Institute&rsquo;s central explanatory framework. It identifies
          hierarchy and initiated force as the structural variable behind the
          rise and collapse of civilizations.
        </p>
        <p className="ab-para">
          The framework connects individual consciousness, social order,
          economic productivity, political legitimacy, and civilizational
          survival to one underlying structure.
        </p>
        <p className="ab-para ab-framework-verdict">
          <em>
            As force rises, civilization collapses. As force recedes,
            civilization soars.
          </em>
        </p>
      </>
    ),
  },
  {
    title: "Neothink",
    body: (
      <>
        <p className="ab-para">
          Neothink names the cognitive mode at the center of the work: the
          mind restored to its nature.
        </p>
        <p className="ab-para">
          It is integrated thinking applied to reality: cause and effect,
          concept formation, future prediction, value creation, and direct
          sight. Where the Unified Field identifies the civilizational
          structure, Neothink identifies the mind capable of living beyond
          that structure.
        </p>
      </>
    ),
  },
  {
    title: "Unleashed",
    body: (
      <>
        <p className="ab-para">
          <em>Unleashed</em>
          {" "}
          is the flagship synthesis of the Institute&rsquo;s work.
        </p>
        <p className="ab-para">
          Through the book and podcast, Mark Hamilton and Wallace Hamilton
          deliver the arc of the Unified Field: where man came from, what
          went wrong 2,400 years ago, why the modern world is approaching
          collapse, and what comes next.
        </p>
      </>
    ),
  },
  {
    title: "Neovia",
    body: (
      <>
        <p className="ab-para">
          Neovia is the civilizational project developed through the
          Institute&rsquo;s work.
        </p>
        <p className="ab-para">
          It is the application of the Prime Law as architecture: a
          civilization designed to remove hierarchy and initiated force as
          governing principles. Neovia is the structural exit from the cycle
          that has governed every civilization in recorded history.
        </p>
      </>
    ),
  },
];

export function AboutPageContent() {
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = mainRef.current;
    if (!root) return;

    const els = root.querySelectorAll<HTMLElement>(".ab-reveal");
    if (els.length === 0) return;

    const prefersReduced =
      typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      els.forEach((el) => el.classList.add("ab-visible"));
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              entry.target.classList.add("ab-visible");
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
    <main id="main-content" ref={mainRef} className="ab-page">
      <section className="ab-hero" aria-labelledby="ab-hero-heading">
        <div className="ab-hero-inner">
          <p className="ab-hero-label">An Independent Research Institution</p>
          <h1 id="ab-hero-heading">The Neothink Institute</h1>
          <p className="ab-hero-tagline">
            The Neothink Institute exists to restore man to his nature and
            build the civilization that comes after.
          </p>
          <p className="ab-hero-supporting">
            The Institute is the public institutional home of fifty years of
            research spanning consciousness, economics, philosophy, business,
            governance, and the architecture of civilization itself. It
            advances the Unified Field of Conscious Civilization, develops the
            Neothink body of work, and carries its discoveries into
            civilization through manuscripts, published research, Unleashed,
            and Neovia.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--cream" aria-labelledby="ab-what-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-what-heading" className="ab-section-title ab-reveal">
            What the Institute Is
          </h2>
          <p className="ab-para ab-reveal">
            The Neothink Institute is an independent research institution
            organized around discovery.
          </p>
          <p className="ab-para ab-reveal">
            Its work identifies the structural error beneath the rise and
            collapse of civilizations, then develops the frameworks required
            to correct that error at every scale of human life: the
            individual, the organization, the economy, the political order,
            and civilization itself.
          </p>
          <p className="ab-para ab-reveal">
            The Institute&rsquo;s work runs along two dimensions.
          </p>
          <p className="ab-para ab-reveal">
            The first is the core mission: the Unified Field of Conscious
            Civilization, the 2,400-year detour, hierarchy and initiated force
            as the structural error, the Prime Law as the correction, and
            Neovia as the civilization that comes after.
          </p>
          <p className="ab-para ab-reveal">
            The second is the breadth of the body of work: research across
            consciousness, human nature, value creation, business, economics,
            philosophy, governance, relationships, self-leadership, and
            civilization design.
          </p>
          <p className="ab-para ab-reveal">
            The mission states what the Institute found. The body of work
            shows the scale of what the discovery touches.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--stone" aria-labelledby="ab-mission-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-mission-heading" className="ab-section-title ab-reveal">
            The Mission
          </h2>
          <p className="ab-para ab-reveal">
            When a living being is separated from its nature, it suffers. When
            it is in harmony, it thrives. 2,400 years ago, man was separated
            from his nature.
          </p>
          <p className="ab-para ab-reveal">
            Intermediaries placed themselves above man. Kings. Governments.
            Religions. Institutions. They claimed authority, control, rule
            that never belonged to them. The result has been recurring
            collapse, human suffering, and the suppression of the
            mind&rsquo;s natural power.
          </p>
          <p className="ab-para ab-reveal ab-para--emphasis">
            The Neothink Institute exists to end that separation: to identify
            the structural error, publish the correction, and build the
            civilization that comes after.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--cream" aria-labelledby="ab-independent-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-independent-heading" className="ab-section-title ab-reveal">
            Independent by Design
          </h2>
          <p className="ab-para ab-reveal">
            The Neothink Institute operates outside academia, politics, and
            established institutional consensus. Its independence is
            structural.
          </p>
          <p className="ab-para ab-reveal">
            The work is not conditioned by credential systems, disciplinary
            boundaries, funding incentives, or the accepted conclusions of
            existing institutions. That independence allows the Institute to
            treat human life as one integrated subject: consciousness,
            economics, philosophy, business, governance, value creation,
            human nature, and civilization design.
          </p>
          <p className="ab-para ab-reveal">
            The Institute does not ask what existing institutions will permit.
            It asks what reality requires.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--stone" aria-labelledby="ab-principles-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-principles-heading" className="ab-section-title ab-reveal">
            Principles, Not Beliefs
          </h2>
          <p className="ab-para ab-reveal">
            The Neothink Institute publishes principles, frameworks, and
            discoveries.
          </p>
          <p className="ab-para ab-reveal">
            A belief system asks the individual to accept conclusions.
            Neothink trains the mind to see structure, cause, consequence, and
            reality directly. The purpose is self-leadership: the individual
            mind restored to its own power of judgment.
          </p>
          <p className="ab-para ab-reveal">
            No institution belongs between the individual and truth. No
            authority stands above the individual mind. The
            Institute&rsquo;s work exists to remove the structures that made
            man dependent on intermediaries and to restore his direct
            relationship with reality.
          </p>
          <p className="ab-para ab-reveal">
            Neothink does not ask the individual to submit. It removes the
            need to submit.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--cream" aria-labelledby="ab-individual-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-individual-heading" className="ab-section-title ab-reveal">
            The Individual Above All Institutions
          </h2>
          <p className="ab-para ab-reveal">
            The central moral fact of the Institute&rsquo;s work is the
            individual.
          </p>
          <p className="ab-para ab-reveal">
            Every hierarchy that places itself above the individual separates
            man from his nature. Every system that demands surrender of
            judgment weakens the mind it claims to guide. Every institution
            that makes man dependent on authority stands against the
            structure of life itself.
          </p>
          <p className="ab-para ab-reveal">
            Neothink moves in the opposite direction. It restores the
            individual to direct sight, self-leadership, value creation, and
            independent judgment.
          </p>
          <p className="ab-para ab-reveal ab-para--emphasis">
            The goal is not followers. The goal is men and women who need no
            intermediary between themselves and reality.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--stone" aria-labelledby="ab-detour-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-detour-heading" className="ab-section-title ab-reveal">
            The 2,400-Year Detour
          </h2>
          <p className="ab-para ab-reveal">
            The Institute traces the present condition of civilization to a
            wrong turn in ancient Greece.
          </p>
          <p className="ab-para ab-reveal">
            Socrates began the turn inward. Plato preserved civilization
            through hierarchy. Aristotle completed the breakthrough into
            integrated consciousness. Then Aristotle&rsquo;s works were lost,
            and the path closed.
          </p>
          <p className="ab-para ab-reveal">
            What followed was the 2,400-year detour: civilization organized
            around external authority rather than the fully integrated
            individual mind.
          </p>
          <p className="ab-para ab-reveal ab-para--emphasis">
            The Neothink Institute exists to end that detour.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--cream" aria-labelledby="ab-fifty-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-fifty-heading" className="ab-section-title ab-reveal">
            The Fifty-Year Body of Work
          </h2>
          <p className="ab-para ab-reveal">
            The Institute&rsquo;s body of work spans fifty years of
            manuscripts, published research, and primary frameworks.
          </p>
          <p className="ab-para ab-reveal">
            Its research extends across the major domains of human life:
            consciousness, economics, philosophy, business, governance,
            personal development, human nature, value creation,
            self-leadership, relationships, and civilization design.
          </p>
          <p className="ab-para ab-reveal">
            The breadth matters because the discovery is not confined to one
            field. The same structural error appears in the individual, the
            organization, the economy, the political order, and civilization
            itself.
          </p>
          <p className="ab-para ab-reveal">
            The Neothink Institute studies that structure as one subject.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--stone" aria-labelledby="ab-body-heading">
        <div className="ab-section-inner">
          <h2 id="ab-body-heading" className="ab-section-title ab-reveal">
            The Body of Work
          </h2>
          <p className="ab-para ab-reveal">
            The Institute&rsquo;s work coheres into four major frameworks and
            projects.
          </p>
          <div className="ab-frameworks ab-reveal">
            {FRAMEWORKS.map((fw) => (
              <article key={fw.title} className="ab-framework">
                <h3 className="ab-framework-title">{fw.title}</h3>
                <div className="ab-framework-body">{fw.body}</div>
              </article>
            ))}
          </div>
          <p className="ab-para ab-reveal ab-frameworks-coda">
            These are four scales of one integrated body of research:
            explanation, mode, synthesis, and architecture.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--cream" aria-labelledby="ab-archive-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-archive-heading" className="ab-section-title ab-reveal">
            The Public Archive Initiative
          </h2>
          <p className="ab-para ab-reveal">
            The Neothink Institute is publishing its body of work online for
            free public access.
          </p>
          <p className="ab-para ab-reveal">
            Through the Public Archive Initiative, foundational manuscripts,
            current research, and primary frameworks are made available for
            study, citation, and reference. The archive is organized around
            the work itself: the Unified Field, Neothink, Unleashed, Neovia,
            and the major domains the corpus reaches.
          </p>
          <p className="ab-para ab-reveal">
            The archive is the working corpus of an active research
            institution. It is published in primary form so anyone serious
            about the work can engage it directly.
          </p>
          <p className="ab-para ab-reveal ab-para--emphasis">
            Free public access is the institutional position.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--stone" aria-labelledby="ab-why-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-why-heading" className="ab-section-title ab-reveal">
            Why an Institute
          </h2>
          <p className="ab-para ab-reveal">
            The word <em>institute</em> means to establish, found, or set in
            place.
          </p>
          <p className="ab-para ab-reveal">
            The Neothink Institute uses the word in that original sense: an
            independent body established to house, advance, and publish a
            body of research that did not fit inside existing institutional
            categories.
          </p>
          <p className="ab-para ab-reveal">
            Its authority does not come from credentials or gatekeeping. It
            comes from the work itself: the frameworks, manuscripts, research,
            discoveries, and civilizational architecture developed across
            fifty years.
          </p>
          <p className="ab-para ab-reveal">
            The Institute exists to develop, organize, and publish the
            frameworks that restore man to his nature and build the
            civilization that comes after.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--cream" aria-labelledby="ab-society-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-society-heading" className="ab-section-title ab-reveal">
            A Note on Neothink Society
          </h2>
          <p className="ab-para ab-reveal">
            The Neothink Institute and Neothink Society are separate
            organizations.
          </p>
          <p className="ab-para ab-reveal">
            The Institute is an independent research institution. It advances
            the Unified Field of Conscious Civilization, develops the Neothink
            body of work, and publishes manuscripts, research, frameworks,
            Unleashed, and Neovia.
          </p>
          <p className="ab-para ab-reveal">
            Neothink Society is a separate private membership community where
            members study and apply selected Neothink principles in daily
            life.
          </p>
        </div>
      </section>

      <section className="ab-section ab-section--stone" aria-labelledby="ab-mark-heading">
        <div className="ab-section-inner ab-section-inner--narrow">
          <h2 id="ab-mark-heading" className="ab-section-title ab-reveal">
            Mark Hamilton
          </h2>
          <p className="ab-para ab-reveal">
            Mark Hamilton is the architect of the Neothink body of work, the
            originator of Neovia, and the principal author associated with
            the Unified Field of Conscious Civilization.
          </p>
          <p className="ab-para ab-reveal">
            He looked across every domain of human life as an integrated
            whole, tracing it back to its essence: how man creates, thinks,
            connects, loves, heals, governs, and builds civilization.
          </p>
          <p className="ab-para ab-reveal">
            His work anchors the Institute&rsquo;s mission: to identify the
            error beneath civilization&rsquo;s repeated collapses and build
            the framework that ends the detour.
          </p>
          <div className="ab-cta-row ab-reveal">
            <Link href={WP.markHamilton} className="ab-btn-primary">
              Full Biography
            </Link>
            <Link href={WP.publishedWork} className="ab-btn-secondary">
              Published Work
            </Link>
          </div>
        </div>
      </section>

      <section className="ab-closing" aria-labelledby="ab-closing-heading">
        <div className="ab-closing-inner ab-reveal">
          <p className="ab-closing-setup">
            For 2,400 years, man has been separated from his nature.
          </p>
          <p className="ab-closing-setup">
            For fifty years, the Neothink Institute has been developing the
            framework, designing the correction, and building what comes
            after.
          </p>
          <h2 id="ab-closing-heading" className="ab-closing-verdict">
            <em>The detour ends here.</em>
          </h2>
        </div>
      </section>
    </main>
  );
}
