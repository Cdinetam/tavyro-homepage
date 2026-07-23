"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

function ChevronLeftIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

export default function QuoteBanner() {
  const t = useTranslations("QuoteBanner");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const testimonialKeys = useMemo(() => ["0", "1", "2", "3", "4"] as const, []);
  const total = testimonialKeys.length;
  const activeKey = testimonialKeys[currentIndex];

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    if (!mediaQuery.matches) {
      const interval = setInterval(() => {
        goNext();
      }, 10000);

      return () => {
        clearInterval(interval);
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [goNext]);

  return (
    <div
      className="mx-auto max-w-2xl"
      aria-live="polite"
      aria-atomic="true"
    >
      <blockquote
        key={activeKey}
        className="text-tavyro-text2 text-base md:text-lg leading-relaxed bg-transparent border-0 p-0 m-0 shadow-none rounded-none"
      >
        <p className="mb-4 italic bg-transparent">
          &ldquo;{t(`testimonials.${activeKey}.quote`)}&rdquo;
        </p>
        <footer className="text-sm md:text-base text-tavyro-text font-medium not-italic bg-transparent">
          {t(`testimonials.${activeKey}.author`)}
        </footer>
      </blockquote>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={goPrev}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-tavyro-border bg-white text-tavyro-text2 hover:text-tavyro-text hover:border-tavyro-brand-400 transition-colors touch-manipulation"
          aria-label={t("prevAriaLabel")}
        >
          <ChevronLeftIcon />
        </button>
        <button
          type="button"
          onClick={goNext}
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md border border-tavyro-border bg-white text-tavyro-text2 hover:text-tavyro-text hover:border-tavyro-brand-400 transition-colors touch-manipulation"
          aria-label={t("nextAriaLabel")}
        >
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}
