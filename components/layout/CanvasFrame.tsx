"use client";

import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import type { Experience } from "@/content/experience";
import type { Profile } from "@/content/profile";
import type { Project } from "@/content/projects";
import { PROJECT_EDGE_THRESHOLD, type SlideId } from "@/lib/constants";
import ContactLinks from "./ContactLinks";
import LeftRail from "./LeftRail";
import ProjectScrollHint from "@/components/projects/ProjectScrollHint";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

type CanvasFrameProps = {
  profile: Profile;
  projects: Project[];
  experience: Experience;
};

type EdgeHint = "up" | "down" | null;
type SlideTrackStyle = CSSProperties & {
  "--slide-index": number;
};

const slideOrder: SlideId[] = ["home", "projects", "experience"];
const hintResetMs = 900;
const wheelLockMs = 620;

export default function CanvasFrame({
  profile,
  projects,
  experience,
}: CanvasFrameProps) {
  const [activeSlide, setActiveSlide] = useState<SlideId>("home");
  const [projectHint, setProjectHint] = useState<EdgeHint>(null);
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);
  const projectScrollerRef = useRef<HTMLDivElement | null>(null);
  const sectionRefs = useRef<Record<SlideId, HTMLDivElement | null>>({
    home: null,
    projects: null,
    experience: null,
  });
  const lastEdgeIntentRef = useRef<{ direction: EdgeHint; time: number }>({
    direction: null,
    time: 0,
  });
  const lastSlideChangeRef = useRef(0);

  const goToSlide = useCallback((slide: SlideId) => {
    setProjectHint(null);
    lastEdgeIntentRef.current = { direction: null, time: 0 };
    if (window.matchMedia("(max-width: 719px)").matches) {
      sectionRefs.current[slide]?.scrollIntoView({
        behavior: "smooth",
        block: slide === "projects" ? "start" : "center",
      });
    }
    setActiveSlide(slide);
  }, []);

  const stepSlide = useCallback(
    (direction: 1 | -1) => {
      const now = Date.now();
      if (now - lastSlideChangeRef.current < wheelLockMs) return;

      const currentIndex = slideOrder.indexOf(activeSlide);
      const nextIndex = Math.min(
        slideOrder.length - 1,
        Math.max(0, currentIndex + direction),
      );

      if (nextIndex !== currentIndex) {
        lastSlideChangeRef.current = now;
        goToSlide(slideOrder[nextIndex]);
      }
    },
    [activeSlide, goToSlide],
  );

  const handleProjectEdgeIntent = useCallback(
    (direction: Exclude<EdgeHint, null>) => {
      const now = Date.now();
      const last = lastEdgeIntentRef.current;
      const sameRecentIntent =
        last.direction === direction && now - last.time < hintResetMs;

      if (!sameRecentIntent) {
        setProjectHint(direction);
        lastEdgeIntentRef.current = { direction, time: now };
        return;
      }

      setProjectHint(null);
      lastEdgeIntentRef.current = { direction: null, time: 0 };
      stepSlide(direction === "down" ? 1 : -1);
    },
    [stepSlide],
  );

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (window.matchMedia("(max-width: 719px)").matches) return;
      if (Math.abs(event.deltaY) < 4) return;
      event.preventDefault();

      const direction = event.deltaY > 0 ? "down" : "up";

      if (activeSlide !== "projects") {
        stepSlide(direction === "down" ? 1 : -1);
        return;
      }

      const scroller = projectScrollerRef.current;
      if (!scroller) return;

      const maxScroll = scroller.scrollHeight - scroller.clientHeight;
      const atTop = scroller.scrollTop <= PROJECT_EDGE_THRESHOLD;
      const atBottom =
        scroller.scrollTop >= maxScroll - PROJECT_EDGE_THRESHOLD;
      const canScrollInside =
        (direction === "down" && !atBottom) || (direction === "up" && !atTop);

      if (canScrollInside) {
        setProjectHint(null);
        lastEdgeIntentRef.current = { direction: null, time: 0 };
        scroller.scrollBy({ top: event.deltaY, behavior: "auto" });
        return;
      }

      handleProjectEdgeIntent(direction);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSlide, handleProjectEdgeIntent, stepSlide]);

  useEffect(() => {
    const scroller = mobileScrollRef.current;
    if (!scroller) return;

    const updateMobileActiveSlide = () => {
      if (!window.matchMedia("(max-width: 719px)").matches) return;

      const scrollerRect = scroller.getBoundingClientRect();
      const centerY = scrollerRect.top + scrollerRect.height / 2;
      const closest = slideOrder.reduce(
        (currentClosest, slide) => {
          const node = sectionRefs.current[slide];
          if (!node) return currentClosest;

          const rect = node.getBoundingClientRect();
          const sectionCenter = rect.top + rect.height / 2;
          const distance = Math.abs(sectionCenter - centerY);

          return distance < currentClosest.distance
            ? { slide, distance }
            : currentClosest;
        },
        { slide: activeSlide, distance: Number.POSITIVE_INFINITY },
      );

      setActiveSlide((current) =>
        current === closest.slide ? current : closest.slide,
      );
    };

    scroller.addEventListener("scroll", updateMobileActiveSlide, {
      passive: true,
    });
    window.addEventListener("resize", updateMobileActiveSlide);
    updateMobileActiveSlide();

    return () => {
      scroller.removeEventListener("scroll", updateMobileActiveSlide);
      window.removeEventListener("resize", updateMobileActiveSlide);
    };
  }, [activeSlide]);

  const activeIndex = slideOrder.indexOf(activeSlide);

  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden bg-navy px-5 py-10 text-light-slate sm:px-10 sm:py-[60px] md:px-[60px] md:py-20 lg:px-20 lg:py-[100px]">
      <div className="grid h-full w-full max-w-[1440px] grid-rows-[auto_minmax(0,1fr)_auto] gap-y-6 border-y border-line sm:grid-cols-[40%_55%] sm:grid-rows-1 sm:gap-x-[5%] sm:gap-y-0">
        <LeftRail
          activeSlide={activeSlide}
          profile={profile}
          onSelect={goToSlide}
        />

        <div className="grid min-h-0 grid-rows-[0_minmax(0,1fr)_0] sm:grid-rows-[28px_minmax(0,1fr)_28px]">
          <div className="flex items-center justify-end">
            <ProjectScrollHint direction={projectHint} placement="top" />
          </div>

          <div
            ref={mobileScrollRef}
            className="min-h-0 overflow-y-auto overflow-x-hidden bg-[radial-gradient(circle_at_center,rgba(35,53,84,0.75)_1.5px,transparent_1.5px)] [background-size:122px_148px] [scrollbar-width:none] sm:overflow-hidden [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="slide-track h-full transition-transform ease-[cubic-bezier(0.77,0,0.175,1)]"
              style={{ "--slide-index": activeIndex } as SlideTrackStyle}
            >
              <div
                ref={(node) => {
                  sectionRefs.current.home = node;
                }}
                className="slide-panel sm:h-full"
              >
                <HomeSection profile={profile} />
              </div>
              <div
                ref={(node) => {
                  sectionRefs.current.projects = node;
                }}
                className="slide-panel sm:h-full"
              >
                <ProjectsSection
                  projects={projects}
                  scrollerRef={projectScrollerRef}
                />
              </div>
              <div
                ref={(node) => {
                  sectionRefs.current.experience = node;
                }}
                className="slide-panel sm:h-full"
              >
                <ExperienceSection experience={experience} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <ProjectScrollHint direction={projectHint} placement="bottom" />
          </div>
        </div>

        <div className="pb-5 sm:hidden">
          <ContactLinks profile={profile} />
        </div>
      </div>
    </div>
  );
}
