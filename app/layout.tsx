import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#265464',
};

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
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "TaVyro – Fractional CHRO & People Advisory",
        type: "image/jpeg",
      },
    ],
    siteName: "TaVyro",
    locale: "de_CH",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaVyro – Fractional CHRO & People Advisory",
    description: "Boutique Advisory für CEOs, Geschäftsleitungen und Verwaltungsräte – unabhängig, umsetzungsnah und mit messbarer Wirkung.",
    images: ["/og.jpg"],
  },
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.svg',
        color: '#265464',
      },
      {
        rel: 'manifest',
        url: '/site.webmanifest',
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
