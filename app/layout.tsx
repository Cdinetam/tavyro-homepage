import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TaVyro – Fractional CHRO & People Advisory",
  description: "Echte Entwicklung beginnt innen. TaVyro begleitet Geschäftsleitungen und Verwaltungsräte als Fractional CHRO / Strategic People Partner – unabhängig, umsetzungsnah und mit messbarer Wirkung.",
  icons: {
    icon: '/icon.svg',
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
