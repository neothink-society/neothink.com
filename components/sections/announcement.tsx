import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";

export function Announcement() {
  return (
    <section
      id="flagship"
      className="ann-b"
      aria-labelledby="announcement-heading"
    >
      <div className="ann-b-inner">
        <div className="ann-b-left">
          <div className="ann-b-badge">
            <span className="ann-pulse" aria-hidden />
            <span className="ann-label">New Release</span>
          </div>
          <span className="ann-b-eyebrow">The Flagship</span>
          <h2 id="announcement-heading">
            <em>Unleashed</em>
          </h2>
          <div className="ann-b-subtitle">The Promethean Promise</div>
          <p className="ann-b-lead">
            After fifty years of research, the complete framework is now
            available.
          </p>
          <p>
            The Unified Field of Conscious Civilization traces civilization&rsquo;s
            entire arc: from the primordial origins of human consciousness,
            through what went wrong 2,400 years ago, through Socrates, Plato,
            Aristotle and those who shaped our world today, through the rise
            and fall of civilizations, to what comes next.
          </p>
          <p className="ann-b-emphasis">
            One framework unifying all of conscious civilization. And the
            instrument of its correction.
          </p>
          <p className="ann-b-tagline">
            The Power of Gods, Wielded by Humans.
          </p>
          <div className="ann-b-actions">
            <Link href={WP.unleashed} className="ann-btn-dark">
              Read Unleashed
            </Link>
          </div>
        </div>

        <div
          className="ann-b-book"
          role="img"
          aria-label="Book cover for Unleashed: The Promethean Promise by Mark Hamilton"
        >
          <div className="ann-b-book-ribbon">New Release</div>
          <div className="ann-b-book-inner">
            <span className="ann-b-book-tag">Flagship</span>
            <div className="ann-b-book-title">Unleashed</div>
            <div className="ann-b-book-bottom">
              <div className="ann-b-book-sub">The Promethean Promise</div>
              <div className="ann-b-book-author">Mark Hamilton</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
