import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tavyro.ch"),
  title: "TaVyro – Fractional CHRO & People Advisory",
  description: "Echte Entwicklung beginnt innen. TaVyro begleitet Geschäftsleitungen und Verwaltungsräte als Fractional CHRO / Strategic People Partner – unabhängig, umsetzungsnah und mit messbarer Wirkung.",
  openGraph: {
    type: "website",
    url: "https://www.tavyro.ch",
    title: "TaVyro – Fractional CHRO & People Advisory",
    description: "Boutique Advisory für CEOs, Geschäftsleitungen und Verwaltungsräte – unabhängig, umsetzungsnah und mit messbarer Wirkung.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "TaVyro – Fractional CHRO & People Advisory",
      },
    ],
    siteName: "TaVyro",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaVyro – Fractional CHRO & People Advisory",
    description: "Boutique Advisory für CEOs, Geschäftsleitungen und Verwaltungsräte – unabhängig, umsetzungsnah und mit messbarer Wirkung.",
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
      },
    ],
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
