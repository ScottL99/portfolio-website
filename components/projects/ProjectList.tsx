"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";
import ProjectRow from "./ProjectRow";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  const [openProjectTitle, setOpenProjectTitle] = useState<string | null>(null);

  return (
    <div className="pb-12">
      {projects.map((project) => (
        <ProjectRow
          key={project.title}
          project={project}
          isOpen={openProjectTitle === project.title}
          onToggle={() =>
            setOpenProjectTitle((current) =>
              current === project.title ? null : project.title,
            )
          }
        />
      ))}
    </div>
  );
}
