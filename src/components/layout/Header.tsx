"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import ThemeToggle from "../ui/ThemeToggle";
import LanguageToggle from "../ui/LanguageToggle";

export default function Header() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("common");
  const [isNavigating, setIsNavigating] = useState(false);

  const navLinks = [
    { href: `/${locale}`, label: t("home") },
    { href: `/${locale}/projects`, label: t("projects") },
    { href: `/${locale}/hobbies`, label: t("hobbies") },
    { href: `/${locale}/blog`, label: t("blog") },
  ];

  useEffect(() => {
    setIsNavigating(true);
    const timer = setTimeout(() => setIsNavigating(false), 300);
    return () => clearTimeout(timer);
  }, [pathname]);

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
        <div className="flex items-center gap-4">
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
      </div>
    </nav>
  );
}
