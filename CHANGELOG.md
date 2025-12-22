# Changelog

All notable changes to this project.

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

---

## [1.1.0] - 2025-12-18

**Internationalization & Enhancements**

### Added
- **i18n Support** - Turkish and English with next-intl
  - Language routing (`/tr`, `/en`)
  - Translation files (`messages/tr.json`, `messages/en.json`)
  - Language toggle in header
  - 29 routes total (was 18)

- **Blog Features**
  - Table of Contents - Auto-generated from headings
  - Heading slugs for deep linking
  - BlogPostCardSkeleton for loading states

- **Project Features**
  - Prev/Next navigation between projects
  - ProjectCardSkeleton for loading states

- **Other**
  - HobbyCardSkeleton component
  - Type safety improvements (removed `as any`)
  - Heading and BlogPostDetail interfaces
  - slugify utility function

### Changed
- App structure: all routes moved to `app/[locale]/`
- Added `src/i18n/` folder for i18n config
- Added `src/middleware.ts` for locale routing
- Header and Footer components support i18n

### Fixed
- Duplicate "back to projects" link removed
- Build errors in not-found.tsx

---

## [1.0.0] - 2025-12-17

**Initial Release**

### Added
- **Blog System**
  - MDX support with next-mdx-remote
  - Syntax highlighting (shiki + rehype-pretty-code)
  - Auto reading time calculation
  - Reading progress bar
  - Social sharing buttons
  - Related posts by tags
  - Tag filtering

- **Projects & Hobbies**
  - Dynamic project detail pages
  - Tag-based filtering
  - Clickable cards with hover effects
  - 4 example projects, 6 example hobbies

- **Design & UX**
  - Dark/Light theme (next-themes)
  - Consistent transitions (300ms colors, 200ms interactive)
  - CSS variables for theme
  - Responsive design (mobile-first)
  - Accessibility (ARIA, keyboard nav, focus states)

- **SEO & Performance**
  - Auto-generated XML sitemap
  - RSS feed for blog
  - Optimized meta tags
  - Open Graph support
  - Static generation (18 routes)
  - Server Components

- **Developer Experience**
  - TypeScript 5 strict mode
  - Modular component structure
  - Custom hooks (useBlogPosts, useTagFilter)
  - Constants in lib/constants.ts
  - Comprehensive documentation

### Tech Stack
- Next.js 16 (App Router)
- React 19 (Server Components)
- TypeScript 5
- Tailwind CSS 4
- MDX
- next-themes

---

## Future Plans

See [TODO.md](./TODO.md) for upcoming features.
