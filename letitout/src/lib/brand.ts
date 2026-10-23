/**
 * Central brand configuration — swap name/display without hunting through UI copy.
 */
export const BRAND = {
  /** Internal / legal product name */
  name: "LetItOut",
  /** Lowercase display mark used in UI */
  display: "letitout.",
  tagline: "The things you don't say out loud.",
  supportingLine: "Some thoughts need somewhere to go.",
  description:
    "A private AI conversation space for your thoughts, feelings, desires and everything in between.",
} as const;

export type BrandConfig = typeof BRAND;
