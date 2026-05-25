"use client";

import { useState } from "react";
import type { Profile } from "@/content/profile";

type HomeSectionProps = {
  profile: Profile;
};

export default function HomeSection({ profile }: HomeSectionProps) {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  const handleContactClick = () => {
    if (isEmailVisible) {
      window.location.href = `mailto:${profile.email}`;
      return;
    }

    setIsEmailVisible(true);
  };

  return (
    <section className="flex min-h-[60svh] items-center justify-end md:h-full md:min-h-0">
      <div className="w-full md:pt-[10vh]">
        <h1
          className="text-[48px] font-bold leading-[1] tracking-[-0.022em] text-portfolio-white sm:text-[64px]"
          data-section-anchor
        >
          {profile.name}
        </h1>
        <p className="pt-2 text-[28px] font-bold leading-[1.1] tracking-[-0.022em] text-light-slate sm:text-[32px]">
          {profile.role}
        </p>
        <div className="flex flex-col gap-5 pt-6 text-[16px] leading-[1.4] tracking-[-0.005em] text-slate sm:text-[18px]">
          {profile.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4 pt-8">
          <p className="text-[16px] leading-[1.4] tracking-[-0.005em] text-light-slate sm:text-[18px]">
            {profile.cta}
          </p>
          <button
            className="grid w-fit overflow-hidden rounded-md border border-green px-5 py-3 text-[14px] font-medium leading-[1.1] tracking-[-0.012em] text-green transition-all duration-200 hover:bg-green hover:!text-navy"
            type="button"
            onClick={handleContactClick}
          >
            <span
              className={[
                "col-start-1 row-start-1 transition-all duration-200",
                isEmailVisible
                  ? "-translate-y-2 opacity-0"
                  : "translate-y-0 opacity-100",
              ].join(" ")}
            >
              Contact me
            </span>
            <span
              className={[
                "col-start-1 row-start-1 transition-all duration-200",
                isEmailVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-2 opacity-0",
              ].join(" ")}
            >
              {profile.email}
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
