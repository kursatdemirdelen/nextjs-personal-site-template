export default function HobbyCardSkeleton() {
  return (
    <div className="border border-[--color-border] rounded-[--radius-sm] p-6 bg-[--surface-1] animate-pulse h-full flex flex-col">
      {/* Icon */}
      <div className="h-10 w-10 bg-[--surface-2] rounded mb-4"></div>

      {/* Title */}
      <div className="h-6 bg-[--surface-2] rounded w-2/3 mb-2"></div>

      {/* Description */}
      <div className="space-y-2 grow">
        <div className="h-4 bg-[--surface-2] rounded w-full"></div>
        <div className="h-4 bg-[--surface-2] rounded w-4/5"></div>
      </div>
    </div>
  );
}
