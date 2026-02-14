import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#265464',
};

export const metadata: Metadata = {
  metadataBase: new URL("https://tavyro.ch"),
  title: {
    default: "TaVyro | HR Unterstützung Geschäftsleitung | Fractional CHRO Schweiz",
    template: "%s | TaVyro",
  },
  description:
    "HR Unterstützung für Geschäftsleitung und CEO: Fractional CHRO (CHROaaS), HR Beratung für KMU in der Schweiz, HR Strategie, HR Governance, Executive Sparring, HR Digitalisierung (HRIS/People Analytics).",
  alternates: { canonical: "https://tavyro.ch" },
  openGraph: {
    title: "TaVyro | Fractional CHRO Schweiz",
    description:
      "CHRO-as-a-Service für Schweizer KMU: HR Unterstützung Geschäftsleitung, Executive Sparring, HR Strategie & Umsetzung.",
    url: "https://tavyro.ch",
    siteName: "TaVyro",
    locale: "de_CH",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "TaVyro | Fractional CHRO Schweiz", type: "image/jpeg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TaVyro | Fractional CHRO Schweiz",
    description:
      "CHRO-as-a-Service für Schweizer KMU: HR Unterstützung Geschäftsleitung, Executive Sparring, HR Strategie & Umsetzung.",
    images: ["/og.jpg"],
  },
  manifest: "/site.webmanifest?v=20260201",
  icons: {
    icon: [
      { url: "/favicon.ico?v=20260201", sizes: "any" },
      { url: "/favicon-16x16.png?v=20260201", type: "image/png", sizes: "16x16" },
      { url: "/favicon-32x32.png?v=20260201", type: "image/png", sizes: "32x32" },
    ],
    apple: [{ url: "/apple-touch-icon.png?v=20260201", sizes: "180x180", type: "image/png" }],
    other: [{ rel: "manifest", url: "/site.webmanifest?v=20260201" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="light" style={{ colorScheme: 'light' }}>
      <body className="antialiased bg-white">{children}</body>
    </html>
  );
}
