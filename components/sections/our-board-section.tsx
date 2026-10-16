import { getLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { OurBoardCarousel } from "@/components/sections/our-board-carousel";
import { ourBoardContent } from "@/data/our-board";
import type { LandingLocale } from "@/data/landing";

export async function OurBoardSection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = ourBoardContent[locale];

  return (
    <section aria-labelledby="our-board-title" className="bg-background py-16 sm:py-20">
      <div className="page-container flex flex-col items-center justify-between gap-10 lg:flex-row lg:gap-8">
        <div className="w-full max-w-xl lg:w-[42%]">
          <Badge variant="blue" className="mb-8 uppercase tracking-wide">
            {content.eyebrow}
          </Badge>
          <h2 id="our-board-title" className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-[48px]">
            {content.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg sm:leading-8">
            {content.description}
          </p>
        </div>
        <OurBoardCarousel
          profiles={content.profiles}
          profileLabel={content.profileLabel}
          profileImageLabel={content.profileImageLabel}
        />
      </div>
    </section>
  );
}
