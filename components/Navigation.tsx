"use client";

import { useState } from "react";

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
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="text-xl md:text-2xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            TaVyro
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#leistungen"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("leistungen");
              }}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Leistungen
            </a>
            <a
              href="#angebote"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("angebote");
              }}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Angebote
            </a>
            <a
              href="#ueber"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("ueber");
              }}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Über TaVyro
            </a>
            <a
              href="#kontakt"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("kontakt");
              }}
              className="btn-primary text-sm px-5 py-2.5"
            >
              Erstgespräch buchen
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-gray-900"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <a
                href="#leistungen"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("leistungen");
                }}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Leistungen
              </a>
              <a
                href="#angebote"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("angebote");
                }}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Angebote
              </a>
              <a
                href="#ueber"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("ueber");
                }}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors py-2"
              >
                Über TaVyro
              </a>
              <a
                href="#kontakt"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("kontakt");
                }}
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
