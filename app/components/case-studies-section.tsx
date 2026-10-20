"use client";

/* eslint-disable @next/next/no-img-element */
import { useCallback, useEffect, useRef, useState } from "react";
import { caseStudies } from "../site";
import { CheckBadge, Icon } from "./svg-icon";

const container = "mx-auto w-full max-w-[1320px] px-5";

const AUTO_SCROLL_INTERVAL = 2200;

export function CaseStudiesSection({
  heading,
}: {
  heading: React.ReactNode;
}) {
  const listRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const updateScrollState = useCallback(() => {
    const el = listRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 20);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 20);

    const children = Array.from(el.children) as HTMLElement[];
    if (children.length > 0) {
      const center = scrollLeft + clientWidth / 2;
      let closest = 0;
      let minDiff = Infinity;
      children.forEach((child, i) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const diff = Math.abs(center - childCenter);
        if (diff < minDiff) {
          minDiff = diff;
          closest = i;
        }
      });
      setCurrentIndex(closest);
    }
  }, []);

  useEffect(() => {
    const el = listRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, [updateScrollState]);

  // Pause when browser tab is hidden
  useEffect(() => {
    const handleVisibility = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  // Auto-scroll every 4 seconds
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const el = listRef.current;
      if (!el) return;
      const children = Array.from(el.children) as HTMLElement[];
      if (!children.length) return;

      const nextIndex = (currentIndex + 1) % children.length;
      const targetChild = children[nextIndex];
      if (targetChild) {
        const targetLeft =
          targetChild.offsetLeft - (el.clientWidth - targetChild.offsetWidth) / 2;
        el.scrollTo({ left: targetLeft, behavior: "smooth" });
      }
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const scrollTo = (direction: "prev" | "next") => {
    const el = listRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (children.length === 0) return;

    let targetIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;
    targetIndex = Math.max(0, Math.min(targetIndex, children.length - 1));

    const targetChild = children[targetIndex];
    if (targetChild) {
      const targetLeft =
        targetChild.offsetLeft - (el.clientWidth - targetChild.offsetWidth) / 2;
      el.scrollTo({ left: targetLeft, behavior: "smooth" });
    }
  };

  return (
    <section
      id="case-studies"
      className="grid gap-4 md:gap-6 pt-8 pb-4 md:pt-20 md:pb-16 lg:py-24"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => {
        if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
        touchTimeoutRef.current = setTimeout(() => setIsPaused(false), 2500);
      }}
    >
      <div className={`${container} relative flex flex-col items-center`}>
        {heading}

        {/* Scroller buttons matching website theme on the right side */}
        <div className="mt-3 flex w-full items-center justify-end gap-3 md:absolute md:right-5 md:bottom-0 md:mt-0 md:w-auto">
          <button
            type="button"
            onClick={() => scrollTo("prev")}
            disabled={!canScrollLeft}
            aria-label="Previous case study"
            className="flex size-11 md:size-12 items-center justify-center rounded-full border-2 border-white bg-[linear-gradient(180deg,#fff_0%,#e7f2ff_100%)] text-navy shadow-[0_8px_16px_0_rgb(0_79_186/0.12)] transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100 cursor-pointer"
          >
            <Icon name="chevronLeft" className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => scrollTo("next")}
            disabled={!canScrollRight}
            aria-label="Next case study"
            className="flex size-11 md:size-12 items-center justify-center rounded-full border-2 border-white bg-[linear-gradient(180deg,#fff_0%,#e7f2ff_100%)] text-navy shadow-[0_8px_16px_0_rgb(0_79_186/0.12)] transition-all duration-200 hover:scale-105 active:scale-95 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:scale-100 cursor-pointer"
          >
            <Icon name="chevronRight" className="size-5" />
          </button>
        </div>
      </div>

      <ul
        ref={listRef}
        className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.25rem,calc((100vw-1280px)/2))] pt-1 pb-2 md:pb-6"
      >
        {caseStudies.map((study) => (
          <li
            key={study.name}
            className="card grid w-[min(1280px,calc(100vw-2.5rem))] shrink-0 snap-center gap-6 md:gap-8 p-5 sm:p-6 md:p-8 lg:grid-cols-[592px_1fr] lg:gap-10"
          >
            <img
              src={study.image}
              alt=""
              className="aspect-[592/524] w-full rounded-2xl object-cover"
            />
            <div className="flex flex-col gap-6 lg:py-6 lg:pr-2">
              <span className="self-start rounded-full bg-brand/10 px-3.5 py-2 font-display text-sm font-medium text-brand uppercase">
                {study.location}
              </span>
              <div className="grid gap-4">
                <h3 className="text-[32px] tracking-[-0.04em]">{study.name}</h3>
                <p className="max-w-xl text-lg text-ink/60">
                  {study.description}
                </p>
              </div>
              <ul className="mt-auto grid gap-3 sm:grid-cols-2">
                {study.challenges.map((challenge) => (
                  <li
                    key={challenge}
                    className="tile flex items-center gap-2.5 px-4 py-3.5 font-display font-medium tracking-[-0.02em]"
                  >
                    <CheckBadge className="size-4 shrink-0 text-brand" />
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

