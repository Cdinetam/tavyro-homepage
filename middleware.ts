import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const handleI18nRouting = createMiddleware(routing);

function hasLocalePrefix(pathname: string): boolean {
  return routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Unprefixed paths always permanently redirect to German, independent of
  // Accept-Language, cookies, or previous locale preference.
  if (!hasLocalePrefix(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname === "/" ? "/de" : `/de${pathname}`;
    return NextResponse.redirect(url, 308);
  }

  return handleI18nRouting(request);
}

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
