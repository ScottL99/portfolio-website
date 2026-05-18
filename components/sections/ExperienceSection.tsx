import type { Experience } from "@/content/experience";

type ExperienceSectionProps = {
  experience: Experience;
};

export default function ExperienceSection({
  experience,
}: ExperienceSectionProps) {
  return (
    <section className="flex min-h-[60svh] items-center justify-end sm:h-full sm:min-h-0">
      <div className="flex w-full max-w-[792px] flex-col gap-8">
        <div>
          <h2 className="text-[44px] font-bold leading-[1.22] tracking-[-0.022em] text-portfolio-white">
            Experience
          </h2>
          <p className="pt-2 text-[15px] leading-6 tracking-[-0.005em] text-light-slate">
            One professional role, kept concise.
          </p>
        </div>

        <article className="flex w-full max-w-[700px] flex-col gap-3 border border-line bg-light-navy/60 p-6">
          <p className="text-[12px] font-medium uppercase leading-5 tracking-[-0.012em] text-green">
            {experience.period}
          </p>
          <h3 className="pt-2 text-[22px] font-bold leading-8 tracking-[-0.022em] text-portfolio-white">
            {experience.role}
          </h3>
          <p className="text-[14px] leading-6 tracking-[-0.005em] text-slate">
            {experience.description}
          </p>
          <p className="text-[13px] font-medium leading-5 tracking-[-0.012em] text-green">
            {experience.tech.join(" / ")}
          </p>
        </article>
      </div>
    </section>
  );
}
