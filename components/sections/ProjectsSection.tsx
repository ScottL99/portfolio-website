"use client";

import type { Project } from "@/content/projects";
import ProjectList from "@/components/projects/ProjectList";

type ProjectsSectionProps = {
  projects: Project[];
  scrollerRef: React.RefObject<HTMLDivElement | null>;
};

export default function ProjectsSection({
  projects,
  scrollerRef,
}: ProjectsSectionProps) {
  return (
    <section className="flex justify-end sm:h-full sm:items-center">
      <div
        ref={scrollerRef}
        className="w-full max-w-[792px] pr-1 sm:max-h-full sm:overflow-y-auto sm:overscroll-contain sm:[scrollbar-width:none] sm:[&::-webkit-scrollbar]:hidden"
      >
        <div className="bg-navy pb-5">
          <h2 className="text-[44px] font-bold leading-[1.22] tracking-[-0.022em] text-portfolio-white">
            Projects
          </h2>
          <p className="max-w-[760px] pt-2 text-[15px] leading-6 tracking-[-0.005em] text-slate">
            A compact index of front-end work, designed to stay readable when
            the project count grows.
          </p>
        </div>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
