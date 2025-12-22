import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function Section({
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section className={className ?? "py-16"}>
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-4 tracking-(--heading-tracking)">
          {title}
        </h2>
      )}
      {description && (
        <p className="text-lg text-[--color-muted] mb-8 max-w-2xl">
          {description}
        </p>
      )}
      {children}
    </section>
  );
}
