import { readFile } from "fs/promises";
import path from "path";
import { notFound } from "next/navigation";
import { isSiteLocale, type SiteLocale } from "@/config/site";

type Props = {
  params: Promise<{ locale: string }>;
};

function htmlFileForLocale(locale: SiteLocale): string {
  return locale === "en"
    ? "en/tavyro-trust-room.html"
    : "tavyro-trust-room.html";
}

export async function GET(
  _request: Request,
  { params }: Props
): Promise<Response> {
  const { locale } = await params;

  if (!isSiteLocale(locale)) {
    notFound();
  }

  const html = await readFile(
    path.join(process.cwd(), "public", htmlFileForLocale(locale)),
    "utf-8"
  );

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
