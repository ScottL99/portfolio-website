"use client";

import type { Project } from "@/content/projects";

type ProjectRowProps = {
  project: Project;
  isOpen: boolean;
  onToggle: () => void;
};

function formatProjectUrl(url: string) {
  return url.replace(/^https?:\/\//, "").replace(/^www\./, "").replace(/\/$/, "");
}

export default function ProjectRow({
  project,
  isOpen,
  onToggle,
}: ProjectRowProps) {
  return (
    <article className="border-b border-line/60 text-sm transition hover:bg-light-navy/45">
      <button
        className="grid w-full grid-cols-[minmax(0,1fr)_32px] gap-5 py-4 text-left"
        type="button"
        onClick={onToggle}
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
          <div className="flex flex-col gap-4 pb-6 pr-12 md:pr-16">
            <p className="text-[16px] leading-[1.4] tracking-[-0.005em] text-slate sm:text-[18px]">
              {project.body}
            </p>
            {project.url && (
              <a
                className="w-fit text-[14px] font-medium leading-[1.1] tracking-[-0.012em] text-slate underline-offset-4 transition-all duration-200 hover:text-green hover:underline"
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                {formatProjectUrl(project.url)}
                {project.urlNote ? ` (${project.urlNote})` : ""}
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
