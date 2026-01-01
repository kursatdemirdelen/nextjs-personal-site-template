# Setup Guide

## Quick Start

```bash
# Clone
git clone https://github.com/kursatdemirdelen/nextjs-personal-site-template.git my-site
cd my-site
npm install

# Configure
cp .env.example .env.local
# Edit .env.local: NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Run
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Configuration

### 1. Site Info (`src/data/site.ts`)

```typescript
export const siteConfig = {
  name: "Your Name",
  title: "Your Title",
  tagline: "Your tagline",
  socialLinks: {
    github: "https://github.com/username",
    linkedin: "https://linkedin.com/in/username",
    email: "you@email.com",
  },
  skills: ["React", "Next.js", "TypeScript"],
};
```

### 2. Projects (`src/data/projects.ts`)

```typescript
{
  title: "Project Name",
  slug: "project-name",
  description: "What it does",
  tags: ["React", "TypeScript"],
  url: "https://github.com/...",
}
```

### 3. Hobbies (`src/data/hobbies.ts`)

```typescript
{
  icon: "📷",
  title: "Photography",
  description: "Landscape photography",
}
```

---

## Blog Posts

Create `content/blog/my-post.mdx`:

```mdx
---
title: "Post Title"
description: "Description"
date: "January 1, 2026"
tags: ["Next.js"]
---

Your content here...
```

---

## Translations

Edit `messages/tr.json` and `messages/en.json` for UI text.

---

## Deploy to Vercel

1. Push to GitHub
2. Import on [vercel.com](https://vercel.com)
3. Add env: `NEXT_PUBLIC_SITE_URL` = your domain
4. Deploy

---

## Commands

```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Start production
npm run lint     # Lint check
```
