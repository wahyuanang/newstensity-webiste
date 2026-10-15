"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type SolutionsCarouselProps = {
  label: string;
  imageAlt: string;
};

export function SolutionsCarousel({ label, imageAlt }: SolutionsCarouselProps) {
  return (
    <motion.div
      role="region"
      aria-label={label}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="relative mx-auto aspect-[520/470] w-full max-w-[520px]"
    >
      <Image
        src="/gifs/newstensity-problem-solutions-carousel-gift.gif"
        alt={imageAlt}
        fill
        unoptimized
        sizes="(min-width: 1024px) 520px, 100vw"
        className="object-contain dark:hidden"
      />
      <Image
        src="/gifs/newstensity-problem-solutions-carousel-dark-1x-clean.gif"
        alt=""
        aria-hidden="true"
        fill
        unoptimized
        sizes="(min-width: 1024px) 520px, 100vw"
        className="hidden object-contain dark:block"
      />
    </motion.div>
  );
}
