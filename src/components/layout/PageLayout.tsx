import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[--color-background] text-[--color-foreground]">
      <Header />
      <main className="mx-auto max-w-5xl px-6 pt-24 pb-16">{children}</main>
      <Footer />
    </div>
  );
}
