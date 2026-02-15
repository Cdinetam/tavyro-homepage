"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";

export default function QuoteBanner() {
  const t = useTranslations("QuoteBanner");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const testimonialKeys = ["0", "1", "2", "3", "4"] as const;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    if (!mediaQuery.matches) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonialKeys.length);
      }, 10000);

      return () => {
        clearInterval(interval);
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      className="mx-auto max-w-2xl overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative min-h-[240px] pb-6">
        {testimonialKeys.map((key, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          
          return (
            <div
              key={key}
              className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out pb-6"
              style={{
                transform: isReducedMotion
                  ? "translateX(0)"
                  : `translateX(${offset * 100}%)`,
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
                transitionDuration: isReducedMotion ? "0ms" : "500ms",
              }}
            >
              <blockquote className="flex flex-col flex-1 text-tavyro-text2 text-base md:text-lg leading-relaxed bg-transparent border-0 p-0 m-0 shadow-none rounded-none">
                <p className="mb-4 italic flex-shrink-0 bg-transparent">
                  &ldquo;{t(`testimonials.${key}.quote`)}&rdquo;
                </p>
                <footer className="text-sm md:text-base text-tavyro-text font-medium not-italic mt-auto pt-4 bg-transparent">
                  {t(`testimonials.${key}.author`)}
                </footer>
              </blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
}
