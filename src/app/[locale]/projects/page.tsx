"use client";

import { useState } from "react";
import { PageLayout, ProjectCard, Section } from "@/components";
import { projects } from "@/data";
import { useTranslations } from "next-intl";

export default function Projects() {
  const t = useTranslations();
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Get all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap((project) => project.tags))
  ).sort();

  // Filter projects by selected tag
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.tags.includes(selectedTag))
    : projects;

  return (
    <PageLayout>
      <Section
        className="py-16"
        title={t("projects.title")}
        description={t("projects.description")}
      >
        {/* Tag Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-4 py-2 rounded-[--radius-sm] text-sm transition-colors ${
              selectedTag === null
                ? "bg-[--color-accent] text-[--color-background] font-semibold"
                : "bg-[--surface-2] text-[--color-foreground] border border-[--color-border] hover:border-[--color-accent]"
            }`}
          >
            {t("common.allProjects")} ({projects.length})
          </button>
          {allTags.map((tag) => {
            const count = projects.filter((project) =>
              project.tags.includes(tag)
            ).length;
            return (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-2 rounded-[--radius-sm] text-sm transition-colors ${
                  selectedTag === tag
                    ? "bg-[--color-accent] text-[--color-background] font-semibold"
                    : "bg-[--surface-2] text-[--color-foreground] border border-[--color-border] hover:border-[--color-accent]"
                }`}
              >
                {tag} ({count})
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))
          ) : (
            <p className="text-[--color-muted] text-center py-12 col-span-full">
              &quot;{selectedTag}&quot; {t("common.noProjectsFound")}
            </p>
          )}
        </div>
      </Section>
    </PageLayout>
  );
}
