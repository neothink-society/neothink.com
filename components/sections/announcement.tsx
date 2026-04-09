import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";

export function Announcement() {
  return (
    <section className="ann-b" aria-labelledby="announcement-heading">
      <div className="ann-b-inner">
        <div className="ann-b-left">
          <div className="ann-b-badge">
            <span className="ann-pulse" aria-hidden />
            <span className="ann-label">New Release</span>
          </div>
          <h2 id="announcement-heading">
            <em>Unleashed</em>
          </h2>
          <div className="ann-b-subtitle">The Promethean Promise</div>
          <p>
            After fifty years of research, the complete Unified Field of
            Conscious Civilization is now available. The first synthesis
            identifying the single structural pattern governing every empire,
            every collapse, and every human destiny in recorded history.
          </p>
          <div className="ann-b-actions">
            <Link href={WP.unleashed} className="ann-btn-dark">
              Read the Full Work
            </Link>
            <Link href={WP.unleashedDownload} className="ann-btn-outline">
              Download PDF
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
            <span className="ann-b-book-tag">New Release</span>
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
