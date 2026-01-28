"use client";

export default function Contact() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="kontakt" className="section-padding bg-tavyro-surface">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-tavyro-text mb-6">
            Kontakt
          </h2>

          <p className="text-xl text-tavyro-text2 mb-12">
            Lassen Sie uns in einem kurzen Erstgespräch klären, wo der grösste Hebel liegt.
          </p>

          <div className="space-y-6">
            <a
              href="/erstgespraech-buchen"
              className="btn-primary text-lg px-8 py-4 inline-block"
            >
              Erstgespräch buchen
            </a>

            <div className="pt-6 border-t border-tavyro-border">
              <p className="text-tavyro-secondary-500 mb-4">
                Alternativ:{" "}
                <a href="mailto:hello@tavyro.ch" className="hover:text-tavyro-text transition-colors">
                  E-Mail
                </a>
                {" | "}
                <a href="tel:+41786868089" className="hover:text-tavyro-text transition-colors">
                  Telefon
                </a>
                {" | "}
                <a
                  href="https://www.linkedin.com/company/tavyro/about/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tavyro-text transition-colors"
                >
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
