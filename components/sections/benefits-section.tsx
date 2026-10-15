import { ArrowRight } from "lucide-react";
import { getLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { benefitsContent } from "@/data/benefits";
import type { LandingLocale } from "@/data/landing";
import { Link } from "@/i18n/navigation";

export async function BenefitsSection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = benefitsContent[locale];

  return (
    <section
      id="benefits"
      aria-labelledby="benefits-title"
      className="scroll-mt-28 bg-background py-20"
    >
      <div className="page-container grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:grid-cols-[minmax(0,1fr)_712px]">
        <div className="max-w-lg">
          <Badge variant="blue" className="mb-8 uppercase tracking-wide">
            {content.eyebrow}
          </Badge>
          <h2
            id="benefits-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-blue-dark dark:text-white sm:text-[48px]"
          >
            {content.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-7 text-blue-dark dark:text-blue-light">
            {content.description}
          </p>
          <Link
            href="#contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-blue-normal transition-colors hover:text-blue-hover dark:text-blue-light dark:hover:text-white"
          >
            {content.link}
            <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {content.items.map((item, index) => (
            <article
              key={item.title}
              className={`benefit-card benefit-card-${index + 1} min-h-57.5 rounded-3xl p-6 xl:aspect-344/230 xl:min-h-0`}
            >
              <div className="flex items-center gap-6">
                <span
                  className={`benefit-number benefit-number-${index + 1} flex size-14 shrink-0 items-center justify-center rounded-full text-base font-medium`}
                >
                  {index + 1}
                </span>
                <h3 className="min-w-0 text-lg font-medium leading-6 sm:text-xl">
                  {item.title}
                </h3>
              </div>
              <p
                className={`benefit-description benefit-description-${index + 1} mt-5 text-sm leading-6 sm:text-base`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
