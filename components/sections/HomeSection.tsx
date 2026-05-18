import type { Profile } from "@/content/profile";

type HomeSectionProps = {
  profile: Profile;
};

export default function HomeSection({ profile }: HomeSectionProps) {
  return (
    <section className="flex min-h-[60svh] items-center justify-end sm:h-full sm:min-h-0">
      <div className="w-full max-w-[792px]">
        <h1 className="text-[58px] font-bold leading-[1.12] tracking-[-0.022em] text-portfolio-white">
          {profile.name}
        </h1>
        <p className="pt-2 text-[32px] font-bold leading-[1.3] tracking-[-0.022em] text-light-slate">
          {profile.role}
        </p>
        <p className="max-w-[690px] pt-6 text-[15px] leading-7 tracking-[-0.005em] text-slate">
          {profile.intro}
        </p>
      </div>
    </section>
  );
}
