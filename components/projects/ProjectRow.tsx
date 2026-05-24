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
        className="grid w-full grid-cols-[minmax(0,1fr)_32px] gap-5 py-4 text-left"
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        aria-expanded={isOpen}
      >
        <div className="grid min-w-0 gap-2">
          <div className="grid gap-2 md:grid-cols-[minmax(0,1fr)_auto] md:items-baseline">
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="text-[24px] font-bold leading-[1.1] tracking-[-0.022em] text-portfolio-white">
                {project.title}
              </h3>
            </div>
            <p className="text-[14px] font-medium leading-[1.1] tracking-[-0.012em] text-green md:text-right">
              {project.tech.join(" / ")}
            </p>
          </div>

          <div className="grid gap-2">
            <p className="text-[16px] leading-[1.4] tracking-[-0.005em] text-slate sm:text-[18px]">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex items-start justify-end">
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
          <p className="pb-6 pr-12 text-[16px] leading-[1.4] tracking-[-0.005em] text-slate sm:text-[18px] md:pr-16">
            {project.body}
          </p>
        </div>
      </div>
    </article>
  );
}
