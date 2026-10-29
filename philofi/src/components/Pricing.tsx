import Link from "next/link";
import { FREE_PLAN, PERSONAL_PLAN } from "@/lib/pricing";

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-ink/10 py-16 sm:py-20"
      aria-labelledby="pricing-heading"
    >
      <div className="container-narrow">
        <p className="section-eyebrow">Pricing</p>
        <h2
          id="pricing-heading"
          className="mt-3 text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
        >
          Start free. Continue when you&apos;re ready.
        </h2>
        <p className="mt-3 max-w-lg text-base text-[#072820]">
          Transparent plans. No countdowns, no pressure.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <article className="glass-panel rounded-soft p-6">
            <h3 className="text-lg font-semibold text-ink">{FREE_PLAN.name}</h3>
            <p className="mt-2 text-2xl font-semibold text-ink">
              {FREE_PLAN.priceLabel}
            </p>
            <ul className="mt-5 space-y-2.5">
              {FREE_PLAN.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm leading-relaxed text-[#072820]"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/chat" className="btn-primary mt-7 w-full sm:w-auto">
              Try free
            </Link>
          </article>

          <article className="glass-panel rounded-soft p-6 ring-1 ring-ink/15">
            <h3 className="text-lg font-semibold text-ink">
              {PERSONAL_PLAN.name}
            </h3>
            <p className="mt-2 text-2xl font-semibold text-ink">
              {PERSONAL_PLAN.priceLabel}
            </p>
            <ul className="mt-5 space-y-2.5">
              {PERSONAL_PLAN.features.map((feature) => (
                <li
                  key={feature}
                  className="text-sm leading-relaxed text-[#072820]"
                >
                  {feature}
                </li>
              ))}
            </ul>
            <button
              type="button"
              className="btn-primary mt-7 w-full opacity-80 sm:w-auto"
              disabled
              title="Subscriptions arrive in a later phase"
            >
              Coming soon
            </button>
            <p className="mt-3 text-xs text-[#072820]">
              Subscription checkout will be available in a later release.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
