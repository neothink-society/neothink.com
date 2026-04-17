import Link from "next/link";
import type { ReactNode } from "react";

export type NeothinkSeriesCategoryPost = {
  readonly slug: string;
  readonly title: string;
  readonly date: string;
};

export type NeothinkSeriesCategoryPageContentProps = {
  readonly title: string;
  readonly intro: string;
  readonly headingId: string;
  readonly introId: string;
  readonly posts: readonly NeothinkSeriesCategoryPost[];
  readonly postHref: (slug: string) => string;
  readonly postIsMigrated: (slug: string) => boolean;
  /** Optional block directly under the intro (e.g. link to a related cornerstone page). */
  readonly introFooter?: ReactNode;
};

export function NeothinkSeriesCategoryPageContent({
  title,
  intro,
  headingId,
  introId,
  posts,
  postHref,
  postIsMigrated,
  introFooter,
}: NeothinkSeriesCategoryPageContentProps) {
  return (
    <main id="main-content" className="nu-page shb-page">
      <header className="nu-hero" aria-labelledby={headingId}>
        <p className="nu-hero-label">Series</p>
        <h1 id={headingId}>{title}</h1>
        <p
          id={introId}
          className="nu-hero-sub"
          style={{ maxWidth: 640, marginLeft: "auto", marginRight: "auto" }}
        >
          {intro}
        </p>
        {introFooter}
      </header>

      <section
        aria-label="Articles in this series"
        className="mx-auto w-full max-w-[720px] px-6 pb-24 pt-4 sm:px-8"
        style={{ background: "var(--nu-cream, #fdfcfa)" }}
      >
        <p className="mb-6 text-center text-sm" style={{ color: "var(--nu-muted, #7a7570)" }}>
          Newest first · {posts.length} articles
        </p>
        <ol className="list-none space-y-0 p-0">
          {posts.map((post, index) => {
            const migrated = postIsMigrated(post.slug);
            const href = postHref(post.slug);
            return (
              <li
                key={post.slug}
                className="border-b py-5 first:pt-0"
                style={{ borderColor: "var(--nu-border, #e8e3d8)" }}
              >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                  <div className="min-w-0 flex-1">
                    <span className="sr-only">{`Article ${index + 1}: `}</span>
                    {migrated ? (
                      <Link
                        href={href}
                        className="font-medium text-[#0e0e0e] underline decoration-[#b8973a]/40 underline-offset-4 transition-colors hover:decoration-[#b8973a]"
                        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
                      >
                        {post.title}
                      </Link>
                    ) : (
                      <a
                        href={href}
                        className="font-medium text-[#0e0e0e] underline decoration-[#b8973a]/40 underline-offset-4 transition-colors hover:decoration-[#b8973a]"
                        style={{ fontFamily: "var(--font-jost), system-ui, sans-serif" }}
                        rel="noopener noreferrer"
                      >
                        {post.title}
                      </a>
                    )}
                    <p className="mt-1.5 text-sm" style={{ color: "var(--nu-muted, #7a7570)" }}>
                      <time dateTime={post.date}>{post.date}</time>
                    </p>
                  </div>
                  <span
                    className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: migrated ? "#7A6528" : "var(--nu-muted, #7a7570)" }}
                  >
                    {migrated ? "On-site article" : "Permalink"}
                  </span>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </main>
  );
}
