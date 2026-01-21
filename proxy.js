import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

let locales = ["en", "bn"];
let defaultLocale = "en";

function getLocalte(request) {
  const acceptedLanguage = request.headers.get("accept-language") ?? undefined;
//   console.log("Accepted Laguages", acceptedLanguage);

  const headers = { "accept-language": acceptedLanguage };

//   console.log("Headers", headers);
  const languages = new Negotiator({ headers }).languages();

//   console.log("Languages", languages);

  return match(languages, locales, defaultLocale);
}

export function proxy(request) {
  const pathname = request.nextUrl.pathname;
//   console.log("Pathname", pathname);

  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`,
  );

  if (pathnameIsMissingLocale) {
    const locale = getLocalte(request);

    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url),
    );
  }
}

// ✅ Middleware matcher (runs only on app routes)
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
