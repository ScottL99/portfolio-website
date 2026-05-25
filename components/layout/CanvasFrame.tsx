"use client";

import { type CSSProperties, useCallback, useEffect, useRef, useState } from "react";
import type { Experience } from "@/content/experience";
import type { Profile } from "@/content/profile";
import type { Project } from "@/content/projects";
import {
  MOBILE_CANVAS_QUERY,
  PROJECT_EDGE_THRESHOLD,
  SLIDES,
  type SlideId,
} from "@/lib/constants";
import ContactLinks from "./ContactLinks";
import LeftRail from "./LeftRail";
import ThemeToggle from "./ThemeToggle";
import ProjectScrollHint from "@/components/projects/ProjectScrollHint";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

// ------------COMPONENT INPUTS-------------
// Defines the data CanvasFrame needs to render the portfolio.
// Referenced by: CanvasFrame function props.
type CanvasFrameProps = {
  profile: Profile;
  projects: Project[];
  experience: Experience;
};

// ------------LOCAL UI TYPES-------------
// Represents the desktop Projects edge hint direction.
// Referenced by: projectHint state and handleProjectEdgeIntent.
type EdgeHint = "up" | "down" | null;

// Extends React CSSProperties so the custom CSS variable is type-safe.
// Referenced by: slide-track inline style.
type SlideTrackStyle = CSSProperties & {
  "--slide-index": number;
};

// ------------SLIDE SETTINGS-------------
// Time window for the desktop Projects edge confirmation.
// Referenced by: handleProjectEdgeIntent.
const hintResetMs = 900;

// Minimum delay before a second desktop Projects edge intent can change slides.
// Referenced by: handleProjectEdgeIntent to avoid trackpad momentum immediately switching sections.
const edgeMinimumDelayMs = 280;

// Wheel delta required at the Projects edge before changing desktop slides.
// Referenced by: handleProjectEdgeIntent to make leaving Projects more deliberate.
const edgeScrollThreshold = 180;

// Lock duration after a desktop slide change to prevent wheel/trackpad over-triggering.
// Referenced by: stepSlide.
const wheelLockMs = 620;

export default function CanvasFrame({
  profile,
  projects,
  experience,
}: CanvasFrameProps) {
  // ------------ACTIVE UI STATE-------------
  // Tracks the currently active section/slide.
  // Referenced by: LeftRail active highlight, desktop slide transform, mobile active section detection.
  const [activeSlide, setActiveSlide] = useState<SlideId>("home");

  // Stores the desktop Projects edge hint direction.
  // Referenced by: ProjectScrollHint top/bottom UI.
  const [projectHint, setProjectHint] = useState<EdgeHint>(null);

  // ------------DESKTOP SCROLL REFS-------------
  // Points to the Projects list scroller on desktop.
  // Referenced by: desktop wheel handler to decide whether Projects can scroll internally.
  const projectScrollerRef = useRef<HTMLDivElement | null>(null);

  // ------------MOBILE SCROLL REFS-------------
  // Points to the mobile middle content scroller.
  // Referenced by: mobile active section detection.
  const mobileScrollRef = useRef<HTMLDivElement | null>(null);

  // Stores each section DOM node for mobile anchor-like navigation.
  // Referenced by: goToSlide scrollIntoView and mobile center-point active detection.
  const sectionRefs = useRef<Record<SlideId, HTMLDivElement | null>>({
    home: null,
    projects: null,
    experience: null,
  });

  // ------------INTERACTION MEMORY-------------
  // Remembers the last desktop Projects edge intent.
  // Referenced by: handleProjectEdgeIntent to require a second same-direction wheel action.
  const lastEdgeIntentRef = useRef<{
    direction: EdgeHint;
    time: number;
    delta: number;
  }>({
    direction: null,
    time: 0,
    delta: 0,
  });

  // Remembers the last desktop slide change time.
  // Referenced by: stepSlide to prevent wheel/trackpad events from skipping multiple slides.
  const lastSlideChangeRef = useRef(0);

  // ------------NAVIGATION ENTRY POINT-------------
  // Moves to a requested section/slide.
  // Referenced by: LeftRail nav clicks and stepSlide.
  const goToSlide = useCallback((slide: SlideId) => {
    setProjectHint(null);
    lastEdgeIntentRef.current = { direction: null, time: 0, delta: 0 };
    if (window.matchMedia(MOBILE_CANVAS_QUERY).matches) {
      const titleAnchor = sectionRefs.current[slide]?.querySelector<HTMLElement>(
        "[data-section-anchor]",
      );

      titleAnchor?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActiveSlide(slide);
  }, []);

  // ------------DESKTOP SLIDE STEPPER-------------
  // Moves one slide forward or backward with boundary and timing protection.
  // Referenced by: desktop wheel handler and handleProjectEdgeIntent.
  const stepSlide = useCallback(
    (direction: 1 | -1) => {
      const now = Date.now();
      if (now - lastSlideChangeRef.current < wheelLockMs) return;

      const currentIndex = SLIDES.indexOf(activeSlide);
      const nextIndex = Math.min(
        SLIDES.length - 1,
        Math.max(0, currentIndex + direction),
      );

      if (nextIndex !== currentIndex) {
        lastSlideChangeRef.current = now;
        goToSlide(SLIDES[nextIndex]);
      }
    },
    [activeSlide, goToSlide],
  );

  // ------------PROJECTS EDGE CONFIRMATION-------------
  // Handles the desktop Projects edge UX: first wheel shows hint, then enough same-direction scroll changes slide.
  // Referenced by: desktop wheel handler after Projects reaches its top or bottom.
  const handleProjectEdgeIntent = useCallback(
    (direction: Exclude<EdgeHint, null>, deltaY: number) => {
      const now = Date.now();
      const last = lastEdgeIntentRef.current;
      const edgeDelta = Math.abs(deltaY);
      const sameRecentIntent =
        last.direction === direction && now - last.time < hintResetMs;

      if (!sameRecentIntent) {
        setProjectHint(direction);
        lastEdgeIntentRef.current = { direction, time: now, delta: 0 };
        return;
      }

      const elapsed = now - last.time;
      const accumulatedDelta = last.delta + edgeDelta;
      lastEdgeIntentRef.current = {
        direction,
        time: last.time,
        delta: accumulatedDelta,
      };

      if (
        elapsed < edgeMinimumDelayMs ||
        accumulatedDelta < edgeScrollThreshold
      ) {
        return;
      }

      setProjectHint(null);
      lastEdgeIntentRef.current = { direction: null, time: 0, delta: 0 };
      stepSlide(direction === "down" ? 1 : -1);
    },
    [stepSlide],
  );

  // ------------DESKTOP WHEEL CONTROL-------------
  // Controls desktop wheel navigation.
  // Referenced by: window wheel event listener; ignores mobile widths.
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (window.matchMedia(MOBILE_CANVAS_QUERY).matches) return;
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
        lastEdgeIntentRef.current = { direction: null, time: 0, delta: 0 };
        scroller.scrollBy({ top: event.deltaY, behavior: "auto" });
        return;
      }

      handleProjectEdgeIntent(direction, event.deltaY);
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSlide, handleProjectEdgeIntent, stepSlide]);

  // ------------MOBILE ACTIVE SECTION TRACKING-------------
  // Updates activeSlide based on which mobile section is closest to the middle of the scroll viewport.
  // Referenced by: mobile scroll/resize event listeners and LeftRail active highlight.
  useEffect(() => {
    const scroller = mobileScrollRef.current;
    if (!scroller) return;

    const updateMobileActiveSlide = () => {
      if (!window.matchMedia(MOBILE_CANVAS_QUERY).matches) return;

      const scrollerRect = scroller.getBoundingClientRect();
      const centerY = scrollerRect.top + scrollerRect.height / 2;
      const closest = SLIDES.reduce(
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

  // ------------DESKTOP TRANSFORM INDEX-------------
  // Converts the active slide id into a numeric index for the desktop slide-track CSS transform.
  // Referenced by: --slide-index inline style below.
  const activeIndex = SLIDES.indexOf(activeSlide);


  // front-end layout
  return (
    <div className="flex h-screen w-screen justify-center overflow-hidden bg-navy bg-[image:var(--canvas-pattern)] bg-[length:var(--canvas-pattern-size)] px-5 py-10 text-light-slate sm:px-10 sm:py-[60px] md:px-[60px] md:py-20 lg:px-20 lg:py-[100px]">
      <div className="grid h-full w-full max-w-[1440px] grid-rows-[auto_minmax(0,1fr)_auto] gap-y-6 border-y border-line md:flex md:justify-between md:gap-y-0">
        <LeftRail
          activeSlide={activeSlide}
          profile={profile}
          onSelect={goToSlide}
        />

        <div className="grid min-h-0 grid-rows-[0_minmax(0,1fr)_0] md:w-full md:max-w-[800px] md:grid-rows-[28px_minmax(0,1fr)_28px]">
          <div className="flex items-center justify-end">
            <ProjectScrollHint direction={projectHint} placement="top" />
          </div>

          <div
            ref={mobileScrollRef}
            className="min-h-0 overflow-y-auto overflow-x-hidden [scrollbar-width:none] md:overflow-hidden [&::-webkit-scrollbar]:hidden"
          >
            <div
              className="slide-track h-full transition-transform ease-[cubic-bezier(0.77,0,0.175,1)]"
              style={{ "--slide-index": activeIndex } as SlideTrackStyle}
            >
              <div
                ref={(node) => {
                  sectionRefs.current.home = node;
                }}
                className="slide-panel md:h-full"
              >
                <HomeSection profile={profile} />
              </div>
              <div
                ref={(node) => {
                  sectionRefs.current.projects = node;
                }}
                className="slide-panel md:h-full"
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
                className="slide-panel md:h-full"
              >
                <ExperienceSection experience={experience} />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <ProjectScrollHint direction={projectHint} placement="bottom" />
          </div>
        </div>

        <div className="flex items-center gap-5 pb-5 md:hidden">
          <ThemeToggle />
          <ContactLinks profile={profile} />
        </div>
      </div>
    </div>
  );
}
