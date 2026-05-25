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
    <section className="flex justify-end md:h-full md:items-center">
      <div
        ref={scrollerRef}
        className="w-full pr-1 md:max-h-full md:overflow-y-auto md:overscroll-contain md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden"
      >
        <div className="bg-navy pb-5 md:pt-[10vh]">
          <h2
            className="text-[40px] font-bold leading-[1] tracking-[-0.022em] text-portfolio-white sm:text-[48px]"
            data-section-anchor
          >
            Projects
          </h2>
          <p className="pt-2 text-[16px] leading-[1.4] tracking-[-0.005em] text-slate sm:text-[18px]">
            A compact index of front-end work, designed to stay readable when
            the project count grows.
          </p>
        </div>
        <ProjectList projects={projects} />
      </div>
    </section>
  );
}
