import {
  Clock3,
  Infinity,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react";
import { getLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { whyNewstensityContent } from "@/data/why-newstensity";
import type { LandingLocale } from "@/data/landing";

const cardIcons = [Layers3, Infinity, Clock3, ShieldCheck, Network] as const;

export async function WhyNewstensitySection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = whyNewstensityContent[locale];

  return (
    <section
      aria-labelledby="why-newstensity-title"
      className="bg-background py-20"
    >
      <div className="page-container">
        <header className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <Badge variant="blue" className="mb-7 uppercase tracking-wide">
            {content.eyebrow}
          </Badge>
          <h2
            id="why-newstensity-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-[48px]"
          >
            {content.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 text-muted">
            {content.description}
          </p>
        </header>

        <div className="why-newstensity-panel grid w-full gap-5 rounded-3xl px-5 py-15.5 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-6">
          {content.items.map((item, index) => {
            const Icon = cardIcons[index];
            const featured = index === 1;
            const placement =
              index < 3
                ? "lg:col-span-2"
                : index === 3
                  ? "lg:col-span-2 lg:col-start-2"
                  : "lg:col-span-2 lg:col-start-4";

            return (
              <article
                key={item.title}
                className={`why-newstensity-card ${featured ? "why-newstensity-card-featured" : ""} ${placement} min-h-60 rounded-3xl p-5 sm:p-6`}
              >
                <span className="why-newstensity-icon flex size-9 items-center justify-center rounded-full">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
                </span>
                <h3 className="mt-3 text-lg font-semibold leading-6 sm:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-5 sm:leading-6">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
