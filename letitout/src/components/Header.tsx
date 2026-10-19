"use client";

import Link from "next/link";
import { useState } from "react";
import { BRAND } from "@/lib/brand";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative z-30">
      <div className="container-wide flex min-h-[64px] items-center justify-between py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-pearl transition hover:text-glass"
        >
          {BRAND.display}
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          <button
            type="button"
            className="btn-ghost hidden sm:inline-flex"
            aria-label="Sign in (coming soon)"
            disabled
            title="Coming in a later phase"
          >
            Sign in
          </button>
          <button
            type="button"
            className="btn-ghost"
            aria-expanded={menuOpen}
            aria-controls="site-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Menu
          </button>
        </nav>
      </div>

      {menuOpen && (
        <div
          id="site-menu"
          className="absolute inset-x-0 top-full z-40 border-b border-glass/20 bg-surface backdrop-blur-md"
        >
          <div className="container-wide flex flex-col gap-1 py-4">
            <Link
              href="/#pricing"
              className="rounded-soft px-3 py-3 text-sm text-aqua transition hover:bg-dark/60 hover:text-pearl"
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/#how-it-works"
              className="rounded-soft px-3 py-3 text-sm text-aqua transition hover:bg-dark/60 hover:text-pearl"
              onClick={() => setMenuOpen(false)}
            >
              How it works
            </Link>
            <Link
              href="/#privacy"
              className="rounded-soft px-3 py-3 text-sm text-aqua transition hover:bg-dark/60 hover:text-pearl"
              onClick={() => setMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/chat"
              className="rounded-soft px-3 py-3 text-sm font-medium text-pearl transition hover:bg-dark/60"
              onClick={() => setMenuOpen(false)}
            >
              Start talking
            </Link>
            <p className="px-3 pt-2 text-xs text-aqua/70">
              Sign in will be available in a later release.
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
