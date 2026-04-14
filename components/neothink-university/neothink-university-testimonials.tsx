"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

import type { NuTestimonial } from "@/lib/neothink-university-testimonials.generated";
import { NEOTHINK_UNIVERSITY_TESTIMONIALS } from "@/lib/neothink-university-testimonials.generated";

const AUTOPLAY_MS = 9000;

function initialsFromName(name: string): string {
  const clean = name.replace(/^[-–]\s*/, "").trim();
  const parts = clean.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function TestimonialSlide({ t }: { readonly t: NuTestimonial }) {
  const hasExpandable =
    t.fullParagraphs.length > 1 ||
    (t.fullParagraphs[0]?.length ?? 0) > t.excerpt.length + 25;

  return (
    <article className="nu-testimonial-card nu-testimonial-card--slide">
      <div className="nu-testimonial-card-head">
        {t.image ? (
          <Image
            src={t.image.src}
            alt={t.image.alt}
            width={t.image.width}
            height={t.image.height}
            className="nu-testimonial-avatar"
            sizes="(max-width: 900px) 96px, 120px"
          />
        ) : (
          <span className="nu-testimonial-avatar nu-testimonial-avatar--placeholder" aria-hidden>
            {initialsFromName(t.name)}
          </span>
        )}
        <div className="nu-testimonial-name-block">
          <h3 className="nu-testimonial-name">{t.name}</h3>
          {t.subtitle ? <p className="nu-testimonial-subtitle">{t.subtitle}</p> : null}
        </div>
      </div>
      <p className="nu-testimonial-excerpt">{t.excerpt}</p>
      {hasExpandable ? (
        <details className="nu-testimonial-details">
          <summary className="nu-testimonial-summary">
            Read full story
            <span className="sr-only"> — {t.name}</span>
          </summary>
          <div className="nu-testimonial-full">
            {t.fullParagraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </details>
      ) : (
        <div className="nu-testimonial-full nu-testimonial-full--static">
          {t.fullParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}
    </article>
  );
}

export function NeothinkUniversityTestimonials() {
  const carouselId = useId();
  const regionId = `${carouselId}-region`;
  const scrollerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [hoverPaused, setHoverPaused] = useState(false);
  const [autoplayOff, setAutoplayOff] = useState(false);
  const [announce, setAnnounce] = useState("");

  const total = NEOTHINK_UNIVERSITY_TESTIMONIALS.length;
  const current = NEOTHINK_UNIVERSITY_TESTIMONIALS[index];
  const atStart = index <= 0;
  const atEnd = index >= total - 1;

  const scrollToIndex = useCallback(
    (i: number, behavior: ScrollBehavior) => {
      const el = scrollerRef.current;
      if (!el) return;
      const w = el.clientWidth;
      const clamped = Math.min(Math.max(0, i), total - 1);
      el.scrollTo({ left: clamped * w, behavior });
      indexRef.current = clamped;
      setIndex(clamped);
    },
    [total]
  );

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const fn = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", fn);
    return () => mq.removeEventListener("change", fn);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const syncFromScroll = () => {
      const w = el.clientWidth;
      if (w <= 0) return;
      const i = Math.round(el.scrollLeft / w);
      const clamped = Math.min(Math.max(0, i), total - 1);
      if (clamped !== indexRef.current) {
        indexRef.current = clamped;
        setIndex(clamped);
      }
    };

    let debounceId: number | undefined;
    const debounced = () => {
      if (debounceId !== undefined) window.clearTimeout(debounceId);
      debounceId = window.setTimeout(syncFromScroll, 80) as unknown as number;
    };

    el.addEventListener("scroll", debounced, { passive: true });
    const ro = new ResizeObserver(() => syncFromScroll());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", debounced);
      ro.disconnect();
      if (debounceId !== undefined) window.clearTimeout(debounceId);
    };
  }, [total]);

  useEffect(() => {
    if (!current) return;
    setAnnounce(`Story ${index + 1} of ${total}. ${current.name}.`);
  }, [index, current, total]);

  const autoplayActive = !reduceMotion && !hoverPaused && !autoplayOff;

  useEffect(() => {
    if (!autoplayActive) return;
    const id = window.setInterval(() => {
      const next = (indexRef.current + 1) % total;
      scrollToIndex(next, reduceMotion ? "auto" : "smooth");
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [autoplayActive, total, scrollToIndex, reduceMotion]);

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      scrollToIndex(index - 1, reduceMotion ? "auto" : "smooth");
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      scrollToIndex(index + 1, reduceMotion ? "auto" : "smooth");
    } else if (e.key === "Home") {
      e.preventDefault();
      scrollToIndex(0, reduceMotion ? "auto" : "smooth");
    } else if (e.key === "End") {
      e.preventDefault();
      scrollToIndex(total - 1, reduceMotion ? "auto" : "smooth");
    }
  };

  const behavior = reduceMotion ? "auto" : "smooth";

  return (
    <div
      className="nu-carousel"
      onPointerEnter={() => setHoverPaused(true)}
      onPointerLeave={() => setHoverPaused(false)}
    >
      <div
        id={regionId}
        className="nu-carousel-region"
        role="region"
        aria-roledescription="carousel"
        aria-label="Member testimonials from the Neothink Society"
        tabIndex={0}
        onKeyDown={onKeyDown}
      >
        <span className="sr-only" aria-live="polite" aria-atomic="true">
          {announce}
        </span>
        <div
          ref={scrollerRef}
          className={`nu-carousel-viewport${reduceMotion ? " nu-carousel-viewport--reduced" : ""}`}
          id={`${carouselId}-viewport`}
        >
          <div className="nu-carousel-track">
            {NEOTHINK_UNIVERSITY_TESTIMONIALS.map((t, i) => (
              <div
                key={t.id}
                className="nu-carousel-slide"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}`}
                {...(i !== index ? { inert: true } : {})}
              >
                <TestimonialSlide t={t} />
              </div>
            ))}
          </div>
        </div>

        <div className="nu-carousel-controls">
          <button
            type="button"
            className="nu-carousel-btn"
            aria-controls={`${carouselId}-viewport`}
            aria-label="Previous testimonial"
            disabled={atStart}
            onClick={() => scrollToIndex(index - 1, behavior)}
          >
            <ChevronLeft size={22} strokeWidth={1.75} aria-hidden />
          </button>

          <span className="nu-carousel-counter" aria-hidden>
            {index + 1} / {total}
          </span>

          <button
            type="button"
            className="nu-carousel-btn"
            aria-controls={`${carouselId}-viewport`}
            aria-label="Next testimonial"
            disabled={atEnd}
            onClick={() => scrollToIndex(index + 1, behavior)}
          >
            <ChevronRight size={22} strokeWidth={1.75} aria-hidden />
          </button>

          {!reduceMotion ? (
            <button
              type="button"
              className="nu-carousel-autoplay"
              aria-pressed={autoplayOff}
              aria-label={autoplayOff ? "Resume automatic slide show" : "Pause automatic slide show"}
              onClick={() => setAutoplayOff((v) => !v)}
            >
              {autoplayOff ? <Play size={18} strokeWidth={1.75} aria-hidden /> : <Pause size={18} strokeWidth={1.75} aria-hidden />}
            </button>
          ) : null}
        </div>

        <div className="nu-carousel-dots-wrap" role="group" aria-label="Jump to testimonial">
          <div className="nu-carousel-dots">
            {NEOTHINK_UNIVERSITY_TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                type="button"
                aria-label={`Story ${i + 1}, ${t.name}`}
                aria-current={i === index ? "true" : undefined}
                className={i === index ? "nu-carousel-dot nu-carousel-dot--active" : "nu-carousel-dot"}
                onClick={() => scrollToIndex(i, behavior)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
