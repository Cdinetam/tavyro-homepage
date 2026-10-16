"use client";

import Link from "next/link";
import { BRAND } from "@/lib/brand";
import HeroBackdrop from "./HeroBackdrop";

export default function Hero() {
  return (
    <section className="relative isolate min-h-[85dvh] overflow-hidden">
      <HeroBackdrop />

      <div className="container-wide relative z-10 flex min-h-[85dvh] flex-col justify-end pb-16 pt-28 sm:pb-20 sm:pt-32">
        <p className="mb-4 text-sm font-medium tracking-wide text-glass animate-fade-up">
          {BRAND.display}
        </p>
        <h1 className="max-w-2xl text-balance text-4xl font-semibold leading-[1.15] tracking-tight text-pearl sm:text-5xl lg:text-6xl animate-fade-up [animation-delay:80ms]">
          {BRAND.tagline}
        </h1>
        <p className="mt-5 max-w-md text-lg italic text-aqua/95 sm:text-xl animate-fade-up [animation-delay:160ms]">
          {BRAND.supportingLine}
        </p>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-aqua/80 animate-fade-up [animation-delay:220ms]">
          {BRAND.description}
        </p>
        <div className="mt-10 flex flex-col items-start gap-3 animate-fade-up [animation-delay:300ms]">
          <Link href="/chat" className="btn-primary">
            Start talking
          </Link>
          <p className="text-sm text-aqua/70">
            Free to try. No account required to begin.
          </p>
        </div>
      </div>
    </section>
  );
}
