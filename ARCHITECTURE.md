# Architecture

Technical overview of the project structure and design decisions.

---

## Project Structure

### Component Organization

Components are grouped by function:

```
src/components/
├── layout/          # Header, Footer, PageLayout, Section
├── ui/              # Tag, ThemeToggle, ThemeProvider, LanguageToggle
├── cards/           # Card components + Skeletons
└── blog/            # Blog-specific components (TOC, Progress, etc.)
```

All components are exported from `src/components/index.ts` for clean imports:

```typescript
import { Header, BlogPostCard, Tag } from "@/components";
```

### Custom Hooks

Reusable logic extracted to hooks:

```
src/hooks/
├── useBlogPosts.ts      # Fetch and manage blog posts
├── useTagFilter.ts      # Filter items by tag
└── index.ts             # Barrel exports
```

Usage:
```typescript
import { useBlogPosts, useTagFilter } from "@/hooks";

const { posts, isLoading } = useBlogPosts();
const filteredPosts = useTagFilter(posts, selectedTag);
```

### Constants & Utilities

Global constants centralized in `src/lib/constants.ts`:

- `NAV_LINKS` - Navigation menu items
- `CONTENT_LIMITS` - Pagination limits
- `TRANSITIONS` - Animation durations
- `BREAKPOINTS` - Responsive breakpoints

Utility functions in `src/utils/`:
- `dateFormat.ts` - Date formatting
- `readingTime.ts` - Calculate reading time
- `mdx.ts` - MDX processing
- `slugify.ts` - Generate URL-safe slugs

### Internationalization (i18n)

**Structure:**
```
src/i18n/
├── routing.ts       # Locale config (tr, en, default: tr)
└── request.ts       # Server-side i18n setup

src/middleware.ts    # Locale routing

messages/
├── tr.json          # Turkish translations
└── en.json          # English translations
```

**How it Works:**
- Middleware intercepts requests and redirects to `/[locale]/path`
- All pages under `app/[locale]/` get locale from params
- Components use `useTranslations()` (client) or `getTranslations()` (server)
- Language toggle in header switches between TR/EN

**Example:**
```typescript
// Server Component
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('common');
  return <h1>{t('home')}</h1>;
}
```

---

## App Router Structure

All pages use the `[locale]` dynamic segment:

```
src/app/
├── [locale]/             # Language-based routing
│   ├── layout.tsx        # Locale-specific layout
│   ├── page.tsx          # Home page
│   ├── blog/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   └── hobbies/page.tsx
├── api/                  # API routes
├── layout.tsx            # Root layout
└── globals.css           # Global styles
```

**URLs:**
- Home: `/tr` or `/en`
- Blog: `/tr/blog`, `/en/blog`
- Blog Post: `/tr/blog/my-post`, `/en/blog/my-post`

---

## Data Layer

Content is managed in two ways:

**1. MDX Files** (`content/blog/`)
- Blog posts written in MDX
- Frontmatter for metadata
- Processed with `next-mdx-remote`

**2. TypeScript Data** (`src/data/`)
- `site.ts` - Site config
- `projects.ts` - Project list
- `hobbies.ts` - Hobby list

Keeps data type-safe and easy to edit.

---

## Styling System

**CSS Variables** for theming (`globals.css`):

```css
:root {
  --accent: #ff3333;
  --background: #0a0a0a;
  --foreground: #ededed;
  --border: #333333;
}

.light {
  --background: #ffffff;
  --foreground: #0a0a0a;
}
```

**Tailwind Classes** use these variables:
- `bg-[var(--background)]`
- `text-[var(--foreground)]`

**Transitions:**
- Color changes: 300ms
- Interactive (hover): 200ms
- Utility class: `.card-transition`

---

## Type System

All types defined in `src/types/index.ts`:

```typescript
export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
}

export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  url?: string;
}
```

Ensures type safety across the app.

---

## Build Output

**Static Generation:**
- 29 routes pre-rendered at build time
- 15 routes in Turkish
- 14 routes in English

**Performance:**
- Build time: ~2s with Turbopack
- All pages statically generated
- Server Components reduce client JS

---

## Key Design Decisions

**Why Next.js 16?**
- Server Components reduce bundle size
- App Router for better organization
- Built-in i18n with middleware

**Why next-intl?**
- Type-safe translations
- Server and client support
- Automatic locale routing

**Why MDX?**
- Write blog posts in Markdown
- Embed React components if needed
- Syntax highlighting built-in

**Why TypeScript Data Files?**
- Type safety for content
- Easy to edit
- No need for CMS

**Why CSS Variables?**
- Theme switching without JS
- Works with Tailwind
- Easy to customize

---

## Future Improvements

Potential enhancements:

- **More Hooks** - `useDebounce`, `useMediaQuery`
- **API Layer** - Separate API functions in `src/lib/api/`
- **Validation** - Zod schemas for forms
- **Testing** - Component and hook tests

---

## Migration Guide

If you need to modify the structure:

**Adding a Component:**
1. Create in appropriate folder (`components/ui/`, etc.)
2. Export from `components/index.ts`
3. Import using barrel export

**Adding a Hook:**
1. Create in `hooks/`
2. Export from `hooks/index.ts`
3. Use in components

**Adding a Translation:**
1. Add key to both `messages/tr.json` and `messages/en.json`
2. Use with `useTranslations()` or `getTranslations()`

**Adding a Page:**
1. Create under `app/[locale]/your-page/`
2. Add metadata with `generateMetadata`
3. Update sitemap if needed

---

This architecture keeps code organized, maintainable, and scalable.
