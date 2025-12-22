import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { BlogPost, BlogPostDetail, Heading } from "@/types";
import { slugifyHeading } from "@/utils/slugify";

const contentDirectory = path.join(process.cwd(), "content/blog");

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Check if content directory exists
  if (!fs.existsSync(contentDirectory)) {
    return [];
  }

  const files = fs.readdirSync(contentDirectory);
  const mdxFiles = files.filter((file) => file.endsWith(".mdx"));

  const posts = mdxFiles.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(contentDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    return {
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      slug,
    } as BlogPost;
  });

  // Sort by date (newest first)
  return posts.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  const filePath = path.join(contentDirectory, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const headings = getHeadingsFromContent(content);

  return {
    frontmatter: {
      title: data.title,
      description: data.description,
      date: data.date,
      readTime: data.readTime,
      tags: data.tags || [],
      slug,
    } as BlogPost,
    content,
    headings,
  };
}

/**
 * Extracts headings from raw MDX content (ignores code blocks).
 * Returns only h1-h3 for concise TOC.
 */
export function getHeadingsFromContent(content: string): Heading[] {
  const lines = content.split(/\r?\n/);
  const result: Heading[] = [];
  let inCodeBlock = false;

  for (const line of lines) {
    const fenceMatch = line.match(/^```/);
    if (fenceMatch) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) continue;

    const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      if (level >= 1 && level <= 3) {
        const text = headingMatch[2].trim();
        const id = slugifyHeading(text);
        result.push({ id, text, level });
      }
    }
  }

  return result;
}
