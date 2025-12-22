"use client";

import Link from "next/link";
import { siteConfig } from "@/data";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[--color-border] py-8 bg-[--surface-1]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[--color-muted] text-sm">
            &copy; {new Date().getFullYear()} {siteConfig.name}. {t("rights")}
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link
              href={siteConfig.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              GitHub
            </Link>
            <Link
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href={`mailto:${siteConfig.socialLinks.email}`}
              className="text-[--color-muted] hover:text-[--color-accent] transition-colors"
            >
              Email
            </Link>
            <button
              onClick={scrollToTop}
              className="ml-2 p-2 rounded-[--radius-sm] text-[--color-muted] hover:text-[--color-accent] hover:bg-[--surface-2]"
              aria-label="Yukarı çık"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
