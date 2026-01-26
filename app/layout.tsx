import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaVyro – Fractional CHRO & People Advisory",
  description: "Echte Entwicklung beginnt innen. TaVyro begleitet Geschäftsleitungen und Verwaltungsräte als Fractional CHRO / Strategic People Partner – unabhängig, umsetzungsnah und mit messbarer Wirkung.",
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">{children}</body>
    </html>
  );
}
