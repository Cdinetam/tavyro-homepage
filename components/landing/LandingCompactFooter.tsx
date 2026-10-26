import { Link } from "@/i18n/navigation";

type RelatedLink = {
  href: string;
  label: string;
  external?: boolean;
};

type Props = {
  homeLabel: string;
  impressumLabel: string;
  privacyLabel: string;
  copyright: string;
  relatedLinks?: RelatedLink[];
};

export default function LandingCompactFooter({
  homeLabel,
  impressumLabel,
  privacyLabel,
  copyright,
  relatedLinks = [],
}: Props) {
  return (
    <footer className="bg-tavyro-brand-900 text-tavyro-secondary-200 py-10 md:py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-10 mb-8">
          <div className="space-y-2 text-sm">
            <p className="text-white font-medium">TaVyro GmbH</p>
            <p>Albisriederstrasse 248</p>
            <p>CH-8047 Zürich</p>
            <p className="pt-3">
              <a
                href="mailto:hello@tavyro.ch"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
              >
                hello@tavyro.ch
              </a>
            </p>
            <p>
              <a
                href="tel:+41786868089"
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
              >
                +41 78 686 80 89
              </a>
            </p>
          </div>

          <div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
                >
                  {homeLabel}
                </Link>
              </li>
              <li>
                <Link
                  href="/impressum"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
                >
                  {impressumLabel}
                </Link>
              </li>
              <li>
                <Link
                  href="/datenschutz"
                  className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
                >
                  {privacyLabel}
                </Link>
              </li>
              {relatedLinks.map((item) => (
                <li key={item.href}>
                  {item.external ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors text-tavyro-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="hover:text-white transition-colors text-tavyro-secondary-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5C518] focus-visible:ring-offset-2 focus-visible:ring-offset-tavyro-brand-900 rounded-sm"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="text-sm md:text-right">
            <p className="text-tavyro-secondary-300 text-xs tracking-wide uppercase mb-2">
              People | Organisation | Impact
            </p>
            <p className="text-white/80">{copyright}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
