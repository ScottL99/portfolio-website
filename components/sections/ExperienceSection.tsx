import type { Experience } from "@/content/experience";

type ExperienceSectionProps = {
  experience: Experience;
};

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <section className="flex min-h-[60svh] items-center justify-end md:h-full md:min-h-0">
      <div className="flex w-full flex-col gap-8 md:pt-[10vh]">
        <div>
          <h2
            className="text-[40px] font-bold leading-[1] tracking-[-0.022em] text-portfolio-white sm:text-[48px]"
            data-section-anchor
          >
            Experience
          </h2>
          <p className="pt-2 text-[16px] leading-[1.4] tracking-[-0.005em] text-light-slate sm:text-[18px]">
            Current production work across websites, CMS platforms, and client support.
          </p>
        </div>

        <article className="flex w-full flex-col gap-3 rounded-md border border-line bg-light-navy/60 p-6">
          <p className="text-[14px] font-medium uppercase leading-[1.1] tracking-[-0.012em] text-green">
            {experience.period}
          </p>
          <h3 className="pt-2 text-[24px] font-bold leading-[1.1] tracking-[-0.022em] text-portfolio-white">
            {experience.role}
          </h3>
          <p className="text-[14px] font-medium leading-[1.1] tracking-[-0.012em] text-light-slate">
            {experience.company}
          </p>
          <div className="flex flex-col gap-3 text-[16px] leading-[1.4] tracking-[-0.005em] text-slate sm:text-[18px]">
            {experience.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <p className="text-[14px] font-medium leading-[1.1] tracking-[-0.012em] text-green">
            {experience.tech.join(" / ")}
          </p>
        </article>
      </div>
    </section>
  );
}
