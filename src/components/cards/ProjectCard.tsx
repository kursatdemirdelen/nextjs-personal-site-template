import Tag from "../ui/Tag";
import Link from "next/link";
import type { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const CardContent = (
    <>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-[--color-accent] tracking-(--heading-tracking)">
        {project.title}
      </h3>
      <p className="text-[--color-muted] text-sm mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </>
  );

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="border border-[--color-border] rounded-[--radius-sm] p-6 hover:border-[--color-accent] card-transition group block bg-[--surface-1]"
    >
      {CardContent}
    </Link>
  );
}
