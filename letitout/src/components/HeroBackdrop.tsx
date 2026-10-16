"use client";

/**
 * Hero visual plane: uses turquoise-glass.jpg when present; otherwise
 * palette gradients and soft glass orbs matching the brief.
 */
export default function HeroBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Fallback gradient atmosphere (always present under image) */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 90% 70% at 70% 20%, rgba(8, 127, 145, 0.45) 0%, transparent 55%),
            radial-gradient(ellipse 70% 60% at 15% 80%, rgba(167, 218, 212, 0.18) 0%, transparent 50%),
            linear-gradient(165deg, #092d38 0%, #164754 42%, #087f91 78%, #092d38 100%)
          `,
        }}
      />

      {/* Optional reference image — fails silently if asset is missing */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/turquoise-glass.jpg"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55 mix-blend-soft-light"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      {/* Soft light orbs suggesting refraction through glass/water */}
      <div className="absolute -left-16 top-10 h-64 w-64 rounded-full bg-ocean/25 blur-3xl animate-light-drift" />
      <div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-glass/20 blur-3xl animate-light-drift"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-56 w-56 rounded-full bg-aqua/15 blur-3xl animate-light-drift"
        style={{ animationDelay: "9s" }}
      />

      {/* Soft vignette for readable text */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9,45,56,0.35) 0%, rgba(9,45,56,0.15) 40%, rgba(9,45,56,0.75) 100%)",
        }}
      />
    </div>
  );
}
