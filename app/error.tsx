"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main
      id="main-content"
      className="flex min-h-screen flex-col items-center justify-center bg-[#FDFCFA] px-6 text-center"
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-[#7A6528]">
        Error
      </p>
      <h1 className="mt-4 font-serif text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-[#0E0E0E]">
        Something went wrong.
      </h1>
      <p className="mt-6 max-w-[420px] text-[16px] font-light leading-[1.85] text-[#4A4540]">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="mt-10 inline-flex min-h-[44px] items-center border border-[#C8C0B0] px-9 py-4 text-[12px] font-medium uppercase tracking-[0.14em] text-[#4A4540] transition-colors duration-200 hover:border-[#7A6528] hover:text-[#7A6528]"
      >
        Try Again
      </button>
    </main>
  );
}
