"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import { useLocale, useTranslations } from "next-intl";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("common");
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/hobbies`, label: t("hobbies") },
    { href: `/${locale}/blog`, label: t("blog") },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsNavigating(true);
    setIsMobileMenuOpen(false);
    const timer = setTimeout(() => setIsNavigating(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[--color-background]/90 backdrop-blur border-b border-[--color-border]">
      {isNavigating && (
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[--color-accent] animate-[slideIn_0.3s_ease-in-out]" />
      )}
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link
          href={`/${locale}`}
          className="text-xl font-bold tracking-tight hover:text-[--color-accent] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] rounded-[--radius-sm] px-[--space-2]"
        >
          KD
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex gap-6 text-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={
                  pathname === link.href
                    ? "text-[--color-accent]"
                    : "hover:text-[--color-accent] transition-colors"
                }
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <LanguageToggle />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-[--radius-sm] hover:bg-[--surface-2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent]"
            aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-[65px] bg-black/50 md:hidden z-40"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        className={`
          fixed top-[65px] left-0 right-0 bg-[--color-background] border-b border-[--color-border]
          md:hidden z-50 transform transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0 pointer-events-none"
          }
        `}
      >
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? "page" : undefined}
                className={`
                  px-4 py-3 rounded-[--radius-sm] text-base font-medium transition-colors
                  ${
                    pathname === link.href
                      ? "bg-[--surface-2] text-[--color-accent]"
                      : "hover:bg-[--surface-2] hover:text-[--color-accent]"
                  }
                `}
                prefetch={false}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
