"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-tavyro-border z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a
            href="/"
            className="flex items-center"
          >
            <Image
              src="/logo-tavyro.svg"
              alt="TaVyro Logo"
              width={240}
              height={64}
              className="h-16 md:h-20 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              Home
            </a>
            <a
              href="#leistungen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("leistungen");
              }}
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              Leistungen
            </a>
            <a
              href="#angebote"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("angebote");
              }}
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              Angebote
            </a>
            <a
              href="#ueber"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("ueber");
              }}
              className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors"
            >
              Über TaVyro
            </a>
            <a
              href="/erstgespraech-buchen"
              className="btn-primary text-sm px-5 py-2.5"
            >
              Erstgespräch buchen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-tavyro-text2 hover:text-tavyro-text"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-tavyro-border">
            <div className="flex flex-col space-y-4">
              <a
                href="/"
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
              >
                Home
              </a>
              <a
                href="#leistungen"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("leistungen");
                }}
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
              >
                Leistungen
              </a>
              <a
                href="#angebote"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("angebote");
                }}
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
              >
                Angebote
              </a>
              <a
                href="#ueber"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("ueber");
                }}
                className="text-sm font-medium text-tavyro-text2 hover:text-tavyro-text transition-colors py-2"
              >
                Über TaVyro
              </a>
              <a
                href="/erstgespraech-buchen"
                className="btn-primary text-sm px-5 py-2.5 text-center"
              >
                Erstgespräch buchen
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
