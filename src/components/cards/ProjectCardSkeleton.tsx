export default function ProjectCardSkeleton() {
  return (
    <div className="border border-[--color-border] rounded-[--radius-sm] p-6 bg-[--surface-1] animate-pulse">
      {/* Title */}
      <div className="h-6 bg-[--surface-2] rounded w-3/4 mb-2"></div>

      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-[--surface-2] rounded w-full"></div>
        <div className="h-4 bg-[--surface-2] rounded w-5/6"></div>
      </div>

      {/* Tags */}
      <div className="flex gap-2">
        <div className="h-6 bg-[--surface-2] rounded-full w-16"></div>
        <div className="h-6 bg-[--surface-2] rounded-full w-20"></div>
        <div className="h-6 bg-[--surface-2] rounded-full w-14"></div>
      </div>
    </div>
  );
}
