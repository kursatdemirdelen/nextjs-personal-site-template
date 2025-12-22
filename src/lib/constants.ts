/**
 * Navigation links for the site header
 */
export const NAV_LINKS = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/projects", label: "Projeler" },
  { href: "/hobbies", label: "Hobiler" },
  { href: "/blog", label: "Blog" },
] as const;

/**
 * Pagination and content display limits
 */
export const CONTENT_LIMITS = {
  POSTS_PER_PAGE: 10,
  RELATED_POSTS_COUNT: 3,
  PROJECTS_PER_PAGE: 12,
  EXCERPT_LENGTH: 150,
} as const;

/**
 * Reading time calculation constants
 */
export const READING_TIME = {
  WORDS_PER_MINUTE: 200,
  IMAGE_READ_TIME_SECONDS: 12,
} as const;

/**
 * Animation and transition durations (in ms)
 */
export const TRANSITIONS = {
  COLOR: 300,
  INTERACTIVE: 200,
  PAGE_NAVIGATION: 300,
} as const;

/**
 * Breakpoints for responsive design (matching Tailwind)
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  "2XL": 1536,
} as const;

/**
 * Social media platforms
 */
export const SOCIAL_PLATFORMS = {
  GITHUB: "github",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  EMAIL: "email",
} as const;

/**
 * Date format patterns
 */
export const DATE_FORMATS = {
  FULL: "d MMMM yyyy",
  SHORT: "d MMM yyyy",
  ISO: "yyyy-MM-dd",
} as const;
