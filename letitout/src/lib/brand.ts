/**
 * Central brand configuration — swap name/display without hunting through UI copy.
 * Internal project codename remains Unsaid; folder may stay `letitout/`.
 */
export const BRAND = {
  /** Product name shown in UI / legal short form */
  name: "Philofi",
  /** Lowercase display mark used in UI */
  display: "philofi.",
  tagline: "The things you don't say out loud.",
  supportingLine: "Your thoughts. Your space. Your pace.",
  description:
    "A private AI conversation space for your thoughts, feelings, desires and everything in between.",
} as const;

export type BrandConfig = typeof BRAND;
