import type { Hobby } from "@/types";

interface HobbyCardProps {
  hobby: Hobby;
}

export default function HobbyCard({ hobby }: HobbyCardProps) {
  return (
    <div className="border border-[--color-border] rounded-[--radius-sm] p-6 hover:border-[--color-accent] hover:shadow-lg hover:scale-105 card-transition group bg-[--surface-1] h-full flex flex-col">
      <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
        {hobby.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-[--color-accent] tracking-(--heading-tracking)">
        {hobby.title}
      </h3>
      <p className="text-[--color-muted] text-sm grow">{hobby.description}</p>
    </div>
  );
}
