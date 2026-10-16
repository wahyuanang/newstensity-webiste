"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type Profile = { name: string; role: string; bio: string; image: string };
const ringColors = ["#2674ba", "#38a3a5", "#8b6fd1"];

export function OurBoardCarousel({
  profiles,
  profileLabel,
  profileImageLabel,
}: {
  profiles: readonly Profile[];
  profileLabel: string;
  profileImageLabel: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const activeRingColor = ringColors[activeIndex % ringColors.length];

  useEffect(() => {
    if (paused || profiles.length < 2) return;
    const timer = window.setTimeout(
      () => setActiveIndex((current) => (current + 1) % profiles.length),
      7000,
    );
    return () => window.clearTimeout(timer);
  }, [activeIndex, paused, profiles.length]);

  const activeProfile = profiles[activeIndex];

  return (
    <div
      className="our-board-card min-h-[497px] w-full max-w-[712px] rounded-3xl border p-5 sm:p-7 lg:h-[497px] lg:min-h-0 lg:overflow-hidden lg:p-8"
      style={{ "--board-ring-color": activeRingColor } as CSSProperties}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
      aria-roledescription="carousel"
      aria-label="Newstensity board profiles"
    >
      <div className="mb-6 flex gap-3" role="tablist" aria-label="Board profiles">
        {profiles.map((profile, index) => (
          <button
            key={`${profile.name}-${index}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            aria-label={`${profileLabel}: ${profile.name} ${index + 1}`}
            onClick={() => setActiveIndex(index)}
            className={`our-board-thumb flex size-14 shrink-0 items-center justify-center rounded-full border-2 transition-all sm:size-16 ${activeIndex === index ? "our-board-thumb-active" : ""}`}
          >
            <Image
              src={profile.image}
              alt={`${profile.name} — ${profileImageLabel}`}
              fill
              sizes="64px"
              className="rounded-full object-cover"
            />
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={activeIndex}
          role="tabpanel"
          className="our-board-profile"
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.38, ease: "easeInOut" }}
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="our-board-avatar relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-full sm:size-22">
              <Image
                src={activeProfile.image}
                alt={`${activeProfile.name} — ${profileImageLabel}`}
                fill
                sizes="88px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-xl font-medium sm:text-2xl">{activeProfile.name}</h3>
              <p className="our-board-role mt-1 text-sm sm:text-base">{activeProfile.role}</p>
            </div>
          </div>
          <p className="our-board-bio mt-6 text-base leading-7 sm:mt-8 sm:text-lg sm:leading-[1.9]">
            {activeProfile.bio}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
