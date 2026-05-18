import type { Project } from "@/content/projects";
import ProjectRow from "./ProjectRow";

type ProjectListProps = {
  projects: Project[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className="pb-12">
      {projects.map((project) => (
        <ProjectRow key={project.title} project={project} />
      ))}
    </div>
  );
}
