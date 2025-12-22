"use client";

import { useState } from "react";
import { siteConfig } from "@/data";

interface ShareButtonsProps {
  slug: string;
  title: string;
}

export default function ShareButtons({ slug, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);
  const base = siteConfig.url?.replace(/\/$/, "") || "https://example.com";
  const url = `${base}/blog/${slug}`;

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    title
  )}&url=${encodeURIComponent(url)}`;

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex items-center gap-3 text-sm">
      <a
        href={twitterUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-3 py-2 rounded-[--radius-sm] border border-[--color-border] hover:border-[--color-accent]"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M22 5.92a7.49 7.49 0 0 1-2.14.59 3.72 3.72 0 0 0 1.64-2.05 7.44 7.44 0 0 1-2.36.9 3.7 3.7 0 0 0-6.3 3.37A10.5 10.5 0 0 1 3.16 4.6a3.7 3.7 0 0 0 1.14 4.94 3.67 3.67 0 0 1-1.67-.46v.05a3.7 3.7 0 0 0 2.97 3.62 3.7 3.7 0 0 1-1.66.06 3.7 3.7 0 0 0 3.45 2.56 7.43 7.43 0 0 1-5.5 1.54A10.48 10.48 0 0 0 8.29 19c6.8 0 10.52-5.63 10.52-10.52 0-.16 0-.33-.01-.49A7.5 7.5 0 0 0 22 5.92Z" />
        </svg>
        Tweet
      </a>
      <button
        onClick={copyLink}
        className="inline-flex items-center gap-2 px-3 py-2 rounded-[--radius-sm] border border-[--color-border] hover:border-[--color-accent]"
      >
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
        {copied ? "Copied" : "Copy link"}
      </button>
    </div>
  );
}
