import Link from "next/link";
import { BRAND } from "@/lib/brand";
import TurquoiseWaterBackground from "./TurquoiseWaterBackground";

/**
 * Landing hero: wide rounded underwater visual at the top;
 * headline, subtitle, and CTAs sit below — never overlaid on the water.
 */
export default function Hero() {
  return (
    <section className="bg-deep pb-2 pt-2" aria-labelledby="hero-heading">
      <div className="container-wide">
        <div
          className="relative h-[min(56vw,640px)] min-h-[280px] overflow-hidden rounded-2xl border-2 border-[#7BB5A6] bg-[#092D38] sm:min-h-[360px]"
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
          <p className="mt-4 max-w-xl text-lg italic text-aqua sm:text-xl">
            {BRAND.supportingLine}
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-aqua/80">
            {BRAND.description}
          </p>
          <div className="mt-8 flex flex-col items-start gap-3">
            <Link href="/chat" className="btn-primary">
              Start talking
            </Link>
            <p className="text-sm text-aqua/70">
              Free to try. No account required to begin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
