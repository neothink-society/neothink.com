import type { Metadata } from "next";
import Link from "next/link";
import { WP } from "@/lib/wordpress-routes";

/** 404 inherits root layout; title/description help crawlers and tabs. Next also emits noindex for not-found responses. */
export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist or has been moved.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center bg-[#FDFCFA] px-6 text-center"
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#B8973A]">
        404
      </p>
      <h1 className="mt-4 font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-[#0E0E0E]">
        Page not found.
      </h1>
      <p className="mt-6 max-w-[420px] text-[16px] font-light leading-[1.85] text-[#4A4540]">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Link
        href={WP.home}
        className="mt-10 inline-flex min-h-[44px] items-center border border-[#C8C0B0] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#B8973A] hover:text-[#B8973A]"
      >
        Return Home
      </Link>
    </main>
  );
}
