export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="nti-hero">
      <span className="nti-eyebrow">Neothink Institute</span>
      <h1 id="hero-heading">
        The intellectual foundation for the <em>next stage</em> of human
        civilization.
      </h1>
      <p className="nti-sub">
        For fifty years, the Neothink Institute has been developing the unified
        framework for understanding and correcting the structural error at the
        root of civilization&rsquo;s recurring cycles of collapse. As artificial
        intelligence accelerates human capability and existential risk
        simultaneously, that framework is no longer theoretical. The window to
        act is open and closing.
      </p>
      <div className="nti-actions">
        <a href="#framework" className="nti-btn-primary">
          Explore the Framework
        </a>
        <a href="#neovia" className="nti-btn-secondary">
          See What We&rsquo;re Building
        </a>
      </div>
      <div className="nti-rule" aria-hidden />
      <span className="nti-scroll">Scroll to begin</span>
    </section>
  );
}
