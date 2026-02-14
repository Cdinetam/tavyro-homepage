"use client";

import { useState, useEffect } from "react";

const testimonials = [
  {
    quote:
      "Das 1:1-Sparring auf GL-Ebene war diskret, professionell und sehr hilfreich. Ich konnte die Situation neu einordnen und zentrale Entscheidungen mit deutlich mehr Klarheit treffen.",
    author: "Geschäftsführer, Schweizer Ingenieurunternehmen (China)",
  },
  {
    quote:
      "In einer anspruchsvollen Situation erhielt ich rasch eine klare Einordnung und ein strukturiertes Vorgehen. Diskret, kompetent und lösungsorientiert – so konnte ich eine faire und tragfähige Lösung erreichen.",
    author: "Private Klientin, Zürich",
  },
  {
    quote:
      "Als CHRO war er ein sehr geschätztes Mitglied der Geschäftsleitung. Mit Fingerspitzengefühl, Empathie und klarem Urteilsvermögen hat er das Unternehmen spürbar vorangebracht. Die Kombination aus strategischem Denken und pragmatischer Umsetzung hat messbar zur Stabilität und zum Wachstum beigetragen.",
    author: "CEO, internationales Schweizer KMU",
  },
  {
    quote:
      "In der Neuaufstellung unserer Organisation war seine Unterstützung ein echter Gewinn. Er hat Organisationsentwicklung sowie Rollen- und Strukturfragen mit uns geschärft, arbeitsrechtliche Themen sauber eingeordnet und die Umsetzung pragmatisch begleitet. Als diskreter Sparringspartner der Geschäftsleitung brachte er Klarheit in komplexe Situationen – und half, Entscheidungen konsequent und fair umzusetzen.",
    author: "Geschäftsleitung und Aufsichtsrat",
  },
  {
    quote:
      "TaVyro brachte in kurzer Zeit Struktur in Führungs- und Rollenfragen und erhöhte die Entscheidungsqualität spürbar. Besonders wertvoll war die Kombination aus strategischem Blick (People & Organisation) und konsequenter Umsetzung – klar priorisiert, ohne Overhead, mit hoher Verlässlichkeit.",
    author: "CEO, Schweizer IT-/Softwareunternehmen",
  },
];

export default function QuoteBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    // Auto-rotate only if motion is not reduced
    if (!mediaQuery.matches) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 10000);

      return () => {
        clearInterval(interval);
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <div
      className="mx-auto max-w-2xl overflow-hidden"
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative min-h-[240px] pb-6">
        {testimonials.map((testimonial, index) => {
          const isActive = index === currentIndex;
          const offset = index - currentIndex;
          
          return (
            <div
              key={index}
              className="absolute inset-0 flex flex-col transition-transform duration-500 ease-in-out pb-6"
              style={{
                transform: isReducedMotion
                  ? "translateX(0)"
                  : `translateX(${offset * 100}%)`,
                opacity: isActive ? 1 : 0,
                pointerEvents: isActive ? "auto" : "none",
                transitionDuration: isReducedMotion ? "0ms" : "500ms",
              }}
            >
              <blockquote className="flex flex-col flex-1 text-tavyro-text2 text-base md:text-lg leading-relaxed bg-transparent border-0 p-0 m-0 shadow-none rounded-none">
                <p className="mb-4 italic flex-shrink-0 bg-transparent">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="text-sm md:text-base text-tavyro-text font-medium not-italic mt-auto pt-4 bg-transparent">
                  {testimonial.author}
                </footer>
              </blockquote>
            </div>
          );
        })}
      </div>
    </div>
  );
}
