import { getLocale } from "next-intl/server";
import { SolutionsCarousel } from "@/components/sections/solutions-carousel";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { landingContent, type LandingLocale } from "@/data/landing";
import { Link } from "@/i18n/navigation";

export async function SolutionsSection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = landingContent[locale].solutions;

  return (
    <section
      id="problem-solutions"
      aria-labelledby="solutions-title"
      className="scroll-mt-28 bg-background py-20"
    >
      <div className="page-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <SolutionsCarousel
          label={content.carouselLabel}
          imageAlt={content.imageAlt}
        />
        <div className="max-w-2xl">
          <Badge variant="blue" className="mb-5 uppercase tracking-wide">
            {content.eyebrow}
          </Badge>
          <h2
            id="solutions-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-blue-dark dark:text-blue-light sm:text-[48px]"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-lg leading-7 text-foreground">
            {content.description}
          </p>
          <dl className="mt-6 grid grid-cols-3 divide-x divide-border">
            {content.stats.map((stat) => (
              <div
                key={stat.label}
                className="px-3 first:pl-0 last:pr-0 sm:px-6"
              >
                <dt className="text-2xl font-medium leading-none text-foreground sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-3 text-xs text-blue-normal sm:text-sm font-medium">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <Link href="#contact" className={buttonStyles("default", "mt-7")}>
            {content.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
