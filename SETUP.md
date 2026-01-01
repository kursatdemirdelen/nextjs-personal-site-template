# Setup & Usage Guide

Quick setup to get your site running, plus detailed usage instructions.

---

## Quick Start

### 1. Install

```bash
git clone https://github.com/kursatdemirdelen/nextjs-personal-site-template.git my-site
cd my-site
npm install
```

**Requirements:**
- Node.js 18+
- npm or yarn

### 2. Set Environment Variables

Copy the example file and update:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

> **Important**: This URL is used for SEO (sitemap, canonical URLs, RSS feed)

### 3. Customize Site Info

Edit `src/data/site.ts`:

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Frontend Developer",
  tagline: "Your short tagline",
  description: "Longer description...",
  // URL comes from NEXT_PUBLIC_SITE_URL env variable
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    email: "your@email.com",
  },
  skills: ["React", "Next.js", "TypeScript"],
};
```

### 4. Add Your Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    title: "Project Name",
    slug: "project-name", // URL: /projects/project-name
    description: "Short description",
    tags: ["React", "TypeScript"],
    url: "https://github.com/...", // Optional
  },
];
```

### 5. Run Dev Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 6. Deploy to Vercel

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Add environment variable:
   - Name: `NEXT_PUBLIC_SITE_URL`
   - Value: `https://your-project.vercel.app`
4. Click Deploy

> **Tip**: You can update the URL later if you add a custom domain.

---

## Adding Content

### Blog Posts (MDX)

Create a new file in `content/blog/`:

```bash
content/blog/my-post.mdx
```

Add frontmatter and content:

```mdx
---
title: "My Blog Post"
description: "Post description"
date: "December 22, 2025"
readTime: "5 min read"
tags: ["Next.js", "React"]
---

## Heading

Your content here...

### Subheading

\```tsx
// Code example
export default function Example() {
  return <div>Hello!</div>;
}
\```

- List item 1
- List item 2

**Bold text** and *italic text*
```

The post will be available at `/blog/my-post` (slug is auto-generated from filename).

**Tips:**
- Don't use special characters in filenames
- Date format: "Month Day, Year"
- `readTime` is optional (auto-calculated if omitted)
- Supports all MDX features: headings, lists, code blocks, tables, etc.

**Table of Contents:**
- Automatically generated from h1-h3 headings
- Click TOC links to jump to sections

### Supported MDX Features

**Code blocks** with syntax highlighting:
````md
```typescript
const greeting: string = "Hello";
```
````

**Tables:**
```md
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
```

**Blockquotes:**
```md
> This is a quote
```

**Links, lists, bold, italic** - standard Markdown syntax works.

### Projects

Edit `src/data/projects.ts`:

```typescript
{
  title: "New Project",
  slug: "new-project", // Must be unique and URL-friendly
  description: "Project description",
  tags: ["React", "TypeScript"],
  url: "https://github.com/username/repo", // Optional
}
```

### Hobbies

Edit `src/data/hobbies.ts`:

```typescript
{
  icon: "📷",
  title: "Photography",
  description: "Landscape and street photography",
}
```

---

## Internationalization (i18n)

The site supports **Turkish (tr)** and **English (en)**.

### URL Structure
- Turkish: `https://yoursite.com/tr/...`
- English: `https://yoursite.com/en/...`

### Translation Files

UI text is stored in `messages/`:

**messages/tr.json** (Turkish):
```json
{
  "common": {
    "home": "Ana Sayfa",
    "blog": "Blog"
  }
}
```

**messages/en.json** (English):
```json
{
  "common": {
    "home": "Home",
    "blog": "Blog"
  }
}
```

**Adding Translations:**

1. Add the same key in both files
2. Use in components:

```typescript
// Client Component
'use client';
import { useTranslations } from 'next-intl';

export default function Page() {
  const t = useTranslations('common');
  return <h1>{t('home')}</h1>;
}

// Server Component
import { getTranslations } from 'next-intl/server';

export default async function Page() {
  const t = await getTranslations('common');
  return <h1>{t('home')}</h1>;
}
```

Users can switch languages via the language toggle in the header.

---

## Customization

### Colors

Edit `src/app/globals.css`:

```css
:root {
  --accent: #ff3333;        /* Primary color */
  --background: #0a0a0a;    /* Background */
  --foreground: #ededed;    /* Text */
  --border: #333333;        /* Borders */
}

.light {
  --background: #ffffff;
  --foreground: #0a0a0a;
  --border: #e0e0e0;
}
```

### Typography

Adjust spacing and font sizes in `globals.css`:

```css
:root {
  --space-4: 16px;
  --space-8: 32px;
  --radius-sm: 8px;
}
```

### Metadata (SEO)

Each page defines metadata via `generateMetadata`:

```typescript
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Page Title",
    description: "Page description",
    openGraph: {
      title: "OG Title",
      description: "OG Description",
      images: ["/og-image.png"],
    },
  };
}
```

### RSS Feed & Sitemap

- RSS: `/feed.xml` (auto-generated)
- Sitemap: `/sitemap.xml` (auto-generated)

To customize, edit:
- `src/app/feed.xml/route.ts`
- `src/app/sitemap.ts`

---

## Development

### Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Project Structure

```
src/
├── app/[locale]/     # Pages (language-based routing)
├── components/       # React components
│   ├── layout/       # Layout components
│   ├── ui/           # UI elements (LanguageToggle, ThemeToggle, etc.)
│   ├── cards/        # Card components + skeletons
│   └── blog/         # Blog-specific components
├── hooks/            # Custom React hooks
├── i18n/             # Internationalization config
├── lib/              # Constants and utilities
├── types/            # TypeScript types
├── utils/            # Utility functions
├── config/           # MDX components config
└── data/             # Site data (projects, hobbies, site info)

content/blog/         # MDX blog posts
messages/             # Translation files (tr.json, en.json)
```

---

## Troubleshooting

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**MDX content not showing:**
- Check file is in `content/blog/`
- Verify frontmatter format
- Restart dev server

**TypeScript errors:**
```bash
npm run build  # Check for type errors
```

---

## Best Practices

**Commit messages:**
```bash
git commit -m "feat: add new blog post"
git commit -m "fix: correct header alignment"
git commit -m "docs: update README"
```

**Code organization:**
- Components: `src/components/`
- Utils: `src/utils/`
- Types: `src/types/`
- Content: `content/` (MDX) or `src/data/` (TS)

**TypeScript:**
- Use type definitions for all components
- Avoid `any`
- Define interfaces in `src/types/index.ts`

---

## Performance Tips

**Image optimization:**
```tsx
import Image from "next/image";

<Image
  src="/path/to/image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

**Lazy loading:**
```tsx
import dynamic from "next/dynamic";

const HeavyComponent = dynamic(() => import("./HeavyComponent"));
```

---

## Need Help?

- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- Run `npm run build` to see build errors
- Check terminal for error messages

Happy coding!
