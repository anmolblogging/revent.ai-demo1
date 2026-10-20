"use client";

import { useEffect, useRef } from "react";

type Solution = {
  title: string;
  description: string;
  image: string;
  icon: string;
};

/**
 * Mobile-only sticky card stack.
 * Each card is position:sticky with the same top value but increasing z-index.
 * As the user scrolls, card N+1 slides up and layers over card N, exactly like
 * the KOLA Communications reference design.
 * Hidden on md+ (desktop uses the regular grid in page.tsx).
 */
export function SolutionsMobileStack({ solutions }: { solutions: Solution[] }) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Scale down cards that are getting covered (optional depth effect)
  useEffect(() => {
    const cards = wrapperRef.current?.querySelectorAll<HTMLElement>(
      "[data-stack-card]"
    );
    if (!cards || cards.length === 0) return;

    const NAV_H = 76; // matches sticky top below

    function onScroll() {
      cards!.forEach((card) => {
        const rect = card.getBoundingClientRect();
        // How far the card top is above its natural sticky point
        const overflow = NAV_H - rect.top;
        if (overflow <= 0) {
          card.style.transform = "";
        } else {
          // Scale down a little (max 4% shrink) as it gets covered
          const progress = Math.min(overflow / rect.height, 1);
          const scale = 1 - progress * 0.04;
          card.style.transform = `scale(${scale})`;
          card.style.transformOrigin = "top center";
        }
      });
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solutions.length]);

  return (
    <div ref={wrapperRef} className="md:hidden mt-5">
      {solutions.map((solution, i) => (
        <div
          key={solution.title}
          className="sticky px-5"
          style={{ top: "76px", zIndex: 10 + i }}
        >
          {/* Card */}
          <div
            data-stack-card
            className="card overflow-hidden mb-5 transition-transform duration-100"
            style={{
              background:
                "linear-gradient(180deg, #e7f2ff 0%, #e7f2ff 100%)",
            }}
          >
            {/* Text content */}
            <div className="p-5">
              {/* Icon + Title */}
              <div className="mb-3 flex items-start gap-3">
                <span
                  className="icon-box shrink-0"
                  style={{ width: 40, height: 40, borderRadius: 10 }}
                >
                  <img src={solution.icon} alt="" className="size-5" />
                </span>
                <h3 className="pt-0.5 text-[22px] leading-tight tracking-[-0.04em]">
                  {solution.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm leading-relaxed text-ink/60">
                {solution.description}
              </p>
            </div>

            {/* Image – flush at the bottom of the card */}
            <img
              src={solution.image}
              alt=""
              className="aspect-[640/360] w-full object-cover"
            />
          </div>
        </div>
      ))}

      {/* Extra scroll space so the last card can breathe before next section */}
      <div className="h-6" />
    </div>
  );
}

