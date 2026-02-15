// Root layout – only exists for Next.js structural requirements.
// The actual layout with metadata, providers and <html> lives in [locale]/layout.tsx.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
