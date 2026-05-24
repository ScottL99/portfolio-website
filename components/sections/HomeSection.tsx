import type { Profile } from "@/content/profile";

type HomeSectionProps = {
  profile: Profile;
};

export default function HomeSection({ profile }: HomeSectionProps) {
  return (
    <section className="flex min-h-[60svh] items-center justify-end md:h-full md:min-h-0">
      <div className="w-full md:pt-[10vh]">
        <h1 className="text-[48px] font-bold leading-[1] tracking-[-0.022em] text-portfolio-white sm:text-[64px]">
          {profile.name}
        </h1>
        <p className="pt-2 text-[28px] font-bold leading-[1.1] tracking-[-0.022em] text-light-slate sm:text-[32px]">
          {profile.role}
        </p>
        <div className="flex max-w-[44rem] flex-col gap-5 pt-6 text-[16px] leading-[1.4] tracking-[-0.005em] text-slate sm:text-[18px]">
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
