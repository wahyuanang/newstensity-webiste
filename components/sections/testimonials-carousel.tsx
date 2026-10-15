"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  organization: string;
};

type TestimonialsCarouselProps = {
  testimonials: readonly Testimonial[];
  label: string;
  goToSlideLabel: string;
};

export function TestimonialsCarousel({
  testimonials,
  label,
  goToSlideLabel,
}: TestimonialsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (testimonials.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % testimonials.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [testimonials.length]);

  const visibleTestimonials = Array.from(
    { length: Math.min(2, testimonials.length) },
    (_, offset) => testimonials[(activeIndex + offset) % testimonials.length],
  );

  return (
    <div className="min-w-0">
      <div
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        className="relative flex w-full justify-end gap-4 overflow-hidden"
      >
        <AnimatePresence initial={false} mode="popLayout">
          {visibleTestimonials.map((testimonial, position) => {
            const featured = position === 1;
            const responsiveVisibility = position === 1 ? "hidden md:flex" : "flex";

            return (
              <motion.article
                key={testimonial.id}
                layout
                initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
                transition={{
                  layout: { type: "spring", stiffness: 180, damping: 24 },
                  opacity: { duration: 0.35, ease: "easeInOut" },
                  x: { duration: 0.45, ease: "easeInOut" },
                }}
                aria-roledescription="slide"
                aria-label={`${position + 1} of ${testimonials.length}`}
                className={`testimonial-card ${featured ? "testimonial-card-featured" : ""} ${responsiveVisibility} h-96.5 w-full md:w-65.5 flex-col rounded-2xl border p-5 sm:p-6`}
              >
                <Quote
                  aria-hidden="true"
                  className="testimonial-quote-mark"
                  size={17}
                  strokeWidth={2}
                />
                <blockquote className="mt-7 min-h-35 text-sm leading-[1.55] sm:text-base">
                  {testimonial.quote}
                </blockquote>
                <div className="testimonial-divider mt-auto mb-6 border-t" />
                <footer className="h-21 shrink-0">
                  <p className="text-sm font-semibold">{testimonial.name}</p>
                  <p className="testimonial-organization mt-1 text-sm leading-5">
                    {testimonial.organization}
                  </p>
                </footer>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="mt-6 flex justify-center gap-2" aria-label={label}>
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            type="button"
            aria-label={`${goToSlideLabel} ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
            onClick={() => setActiveIndex(index)}
            className={`size-2 rounded-full transition-colors ${index === activeIndex ? "bg-blue-normal" : "bg-grey-light-active dark:bg-white/35"}`}
          />
        ))}
      </div>
    </div>
  );
}
