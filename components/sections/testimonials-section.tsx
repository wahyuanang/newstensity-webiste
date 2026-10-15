import { getLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { TestimonialsCarousel } from "@/components/sections/testimonials-carousel";
import { testimonialsContent } from "@/data/testimonials";
import type { LandingLocale } from "@/data/landing";

export async function TestimonialsSection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = testimonialsContent[locale];

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="bg-background py-20"
    >
      <div className="page-container grid items-center gap-10 xl:grid-cols-[1.2fr_1fr] xl:gap-10">
        <div className="max-w-xl">
          <Badge variant="blue" className="mb-7 uppercase tracking-wide">
            {content.eyebrow}
          </Badge>
          <h2
            id="testimonials-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-blue-dark dark:text-white sm:text-[48px]"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-foreground">
            {content.description}
          </p>
        </div>
        <TestimonialsCarousel
          testimonials={content.stories}
          label={content.carouselLabel}
          goToSlideLabel={content.goToSlide}
        />
      </div>
    </section>
  );
}
