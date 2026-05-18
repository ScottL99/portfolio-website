import type { Profile } from "@/content/profile";
import type { SlideId } from "@/lib/constants";
import ContactLinks from "./ContactLinks";

type LeftRailProps = {
  activeSlide: SlideId;
  profile: Profile;
  onSelect: (slide: SlideId) => void;
};

const navItems: Array<{ id: SlideId; label: string }> = [
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
];

export default function LeftRail({
  activeSlide,
  profile,
  onSelect,
}: LeftRailProps) {
  return (
    <aside className="flex min-h-0 flex-col justify-between py-5 sm:py-9 md:py-10">
      <div>
        <button
          className="block text-left"
          type="button"
          onClick={() => onSelect("home")}
          aria-label="Go to home"
        >
          <div className="text-[24px] font-bold leading-7 tracking-[-0.022em] text-portfolio-white">
            {profile.name}
          </div>
          <div className="pt-1 text-[14px] font-medium leading-5 tracking-[-0.012em] text-green">
            {profile.role}
          </div>
        </button>

        <nav className="flex gap-5 pt-8 sm:flex-col sm:pt-14">
          {navItems.map((item) => {
            const isActive = activeSlide === item.id;
            return (
              <button
                key={item.id}
                className="group flex items-center gap-4 text-left"
                type="button"
                onClick={() => onSelect(item.id)}
              >
                <span
                  className={[
                    "rounded-full border transition",
                    isActive
                      ? "size-2.5 border-green bg-green"
                      : "size-2 border-slate/40 bg-line",
                  ].join(" ")}
                />
                <span
                  className={[
                    "text-[14px] tracking-[-0.012em] transition group-hover:text-green",
                    isActive ? "font-medium text-green" : "text-slate",
                  ].join(" ")}
                >
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      <div className="hidden sm:block">
        <ContactLinks profile={profile} />
      </div>
    </aside>
  );
}
