import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/data";

const baseUrl = new URL(siteConfig.url);

export const metadata: Metadata = {
  metadataBase: baseUrl,
  title: `${siteConfig.name} — ${siteConfig.title}`,
  description: siteConfig.description,
  keywords: siteConfig.skills,
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: siteConfig.url,
    types: {
      "application/rss+xml": [
        { url: "/feed.xml", title: `${siteConfig.name} Blog RSS` },
      ],
    },
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.title}`,
    description: siteConfig.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
