import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - Static files (images, etc.)
  // - opengraph-image, twitter-image (OG image generation)
  // - sitemap.xml, robots.txt, feed.xml (SEO files)
  matcher: ["/((?!api|_next|opengraph-image|twitter-image|sitemap\\.xml|robots\\.txt|feed\\.xml|.*\\..*).*)"],
};
