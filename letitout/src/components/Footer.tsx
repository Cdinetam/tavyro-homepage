import { BRAND } from "@/lib/brand";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="container-wide flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-ink">{BRAND.display}</p>
        <p className="text-xs text-[#072820]">
          © {year} {BRAND.name}. Phase 1 preview — not a medical or therapy
          service.
        </p>
      </div>
    </footer>
  );
}
