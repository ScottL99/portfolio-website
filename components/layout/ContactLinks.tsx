"use client";

import { useState } from "react";
import type { Profile } from "@/content/profile";

type ContactLinksProps = {
  profile: Profile;
};

function GithubIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24">
      <path
        d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.08.64-.2.64-.45v-1.62c-2.6.56-3.15-1.1-3.15-1.1-.43-1.1-1.05-1.4-1.05-1.4-.86-.58.07-.57.07-.57.95.07 1.45.98 1.45.98.85 1.45 2.23 1.03 2.77.79.09-.62.33-1.03.6-1.27-2.08-.24-4.27-1.04-4.27-4.62 0-1.02.36-1.85.97-2.5-.1-.24-.42-1.2.09-2.48 0 0 .8-.25 2.6.96A8.85 8.85 0 0 1 12 6.42c.8 0 1.6.1 2.35.31 1.8-1.21 2.59-.96 2.59-.96.51 1.28.19 2.24.1 2.48.6.65.96 1.48.96 2.5 0 3.59-2.2 4.38-4.28 4.61.34.3.64.87.64 1.76v2.61c0 .25.17.54.65.45A9.5 9.5 0 0 0 12 2.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24">
      <path
        d="M6.95 8.74H3.8V20h3.15V8.74ZM5.37 4a1.84 1.84 0 1 0 0 3.68 1.84 1.84 0 0 0 0-3.68Zm14.82 9.73c0-3.03-1.62-4.44-3.79-4.44a3.25 3.25 0 0 0-2.94 1.62h-.04V8.74h-3.02V20h3.15v-5.57c0-1.47.28-2.89 2.1-2.89 1.78 0 1.8 1.67 1.8 2.98V20h3.14l-.4-6.27Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" className="size-4" viewBox="0 0 24 24">
      <path
        d="M4.75 6.5h14.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-8.5c0-.69.56-1.25 1.25-1.25Zm.45 1.5 6.8 5.1L18.8 8H5.2Zm13.8 1.27-6.55 4.91a.75.75 0 0 1-.9 0L5 9.27V16h14V9.27Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactLinks({ profile }: ContactLinksProps) {
  const [isEmailVisible, setIsEmailVisible] = useState(false);

  const handleEmailButtonClick = () => {
    setIsEmailVisible(true);
  };

  return (
    <div className="flex items-center gap-5 text-[14px] font-bold leading-[1.1] tracking-[-0.012em] text-green">
      <a
        className="flex size-10 shrink-0 items-center justify-center rounded-md border border-navy bg-light-navy/75 transition hover:border-green hover:text-portfolio-white"
        href={profile.githubUrl}
        aria-label="GitHub"
      >
        <GithubIcon />
      </a>
      <a
        className="flex size-10 shrink-0 items-center justify-center rounded-md border border-navy bg-light-navy/75 transition hover:border-green hover:text-portfolio-white"
        href={profile.linkedInUrl}
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
      <button
        className="flex size-10 shrink-0 items-center justify-center rounded-md border border-navy bg-light-navy/75 transition hover:border-green hover:text-portfolio-white"
        type="button"
        onClick={handleEmailButtonClick}
        aria-label="Email"
      >
        <MailIcon />
      </button>
      <div
        className={[
          "grid transition-[grid-template-columns,opacity,transform] duration-300",
          isEmailVisible
            ? "grid-cols-[1fr] translate-x-0 opacity-100"
            : "grid-cols-[0fr] -translate-x-3 opacity-0",
        ].join(" ")}
      >
        <a
          className={[
            "flex min-h-11 min-w-0 items-center overflow-hidden whitespace-nowrap text-left text-[14px] font-medium leading-[1.1] tracking-[-0.005em] text-light-slate transition hover:text-green",
            isEmailVisible ? "" : "pointer-events-none",
          ].join(" ")}
          href={`mailto:${profile.email}`}
          aria-hidden={!isEmailVisible}
          tabIndex={isEmailVisible ? 0 : -1}
        >
          {profile.email}
        </a>
      </div>
    </div>
  );
}
