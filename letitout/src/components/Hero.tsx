import Link from "next/link";
import { BRAND } from "@/lib/brand";
import TurquoiseWaterBackground from "./TurquoiseWaterBackground";

/**
 * Landing hero: wide rounded water on a single continuous page surface.
 * Headline and CTAs sit below — same background as header/margins (no color bands).
 */
export default function Hero() {
  return (
    <section className="pb-4 pt-2" aria-labelledby="hero-heading">
      <div className="container-wide">
        <div
          className="relative h-[min(56vw,640px)] min-h-[280px] overflow-hidden rounded-2xl border-2 border-[#7BB5A6] bg-[#2C6A5E] sm:min-h-[360px]"
          aria-label="Soft underwater turquoise light"
        >
          <div className="absolute inset-0" aria-hidden="true">
            <TurquoiseWaterBackground />
          </div>
        </div>

        <div className="mx-auto max-w-3xl pt-10 sm:pt-12">
          <h1
            id="hero-heading"
            className="text-balance text-3xl font-semibold leading-[1.15] tracking-tight text-pearl sm:text-4xl lg:text-5xl"
          >
            {BRAND.tagline}
          </h1>
            <p className="mt-4 max-w-xl text-lg italic text-[#D8E8E6] sm:text-xl">
              {BRAND.supportingLine}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#D8E8E6]">
              {BRAND.description}
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <Link href="/chat" className="btn-primary">
                Start talking
              </Link>
              <p className="text-sm text-[#D8E8E6]">
                Free to try. No account required to begin.
              </p>
            </div>
        </div>
      </div>
    </section>
  );
}
