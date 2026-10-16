/** Configurable subscription pricing (Phase 1 display only). */
export const PRICING = {
  currency: "CHF",
  personalMonthly: 7.9,
  personalLabel: "CHF 7.90/month",
} as const;

export const FREE_PLAN = {
  name: "Free",
  priceLabel: "Free",
  features: [
    "Limited initial conversation",
    "No account required",
    "No permanent saved history",
  ],
} as const;

export const PERSONAL_PLAN = {
  name: "Personal",
  priceLabel: PRICING.personalLabel,
  features: [
    "Multiple conversations",
    "Saved chat history",
    "Continue conversations later",
    "Fair usage limits",
    "Cancel anytime",
  ],
} as const;
