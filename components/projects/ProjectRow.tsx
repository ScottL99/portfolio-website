"use client";

import { useState } from "react";
import type { Project } from "@/content/projects";

type ProjectRowProps = {
  project: Project;
};

export default function ProjectRow({ project }: ProjectRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="border-b border-line/60 text-sm transition hover:bg-light-navy/45">
      <button
        className="grid min-h-16 w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-5 py-3 text-left md:grid-cols-[230px_minmax(0,1fr)_170px]"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <h3 className="text-[16px] font-bold leading-6 tracking-[-0.022em] text-portfolio-white">
          {project.title}
        </h3>
        <p className="hidden text-[13px] leading-5 tracking-[-0.005em] text-slate md:block">
          {project.description}
        </p>
        <div className="flex items-center justify-end gap-4">
          <p className="hidden text-right text-[12px] font-medium leading-5 tracking-[-0.012em] text-green md:block">
            {project.tech.join(" / ")}
          </p>
          <span
            className={[
              "flex size-8 items-center justify-center rounded-full border border-line text-green transition",
              isOpen ? "rotate-45 border-green" : "",
            ].join(" ")}
            aria-hidden="true"
          >
            +
          </span>
        </div>
      </button>

      <div
        className={[
          "grid overflow-hidden transition-[grid-template-rows,opacity] duration-300",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="min-h-0">
          <div className="flex flex-col gap-4 pb-6 pr-12 md:pr-[202px]">
            <p className="text-[14px] leading-6 tracking-[-0.005em] text-light-slate">
              Placeholder project detail text. This area can later hold the
              problem, process, role, links, screenshots, or short case-study
              notes for this project.
            </p>
            <p className="text-[12px] font-medium leading-5 tracking-[-0.012em] text-green">
              {project.tech.join(" / ")}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
