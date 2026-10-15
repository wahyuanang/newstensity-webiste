import {
  ArrowRight,
  ChartNoAxesColumnIncreasing,
  Database,
  FileText,
  Filter,
} from "lucide-react";
import { getLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { howItWorksContent } from "@/data/how-it-works";
import type { LandingLocale } from "@/data/landing";
import { Link } from "@/i18n/navigation";

const stepIcons = [
  Database,
  Filter,
  ChartNoAxesColumnIncreasing,
  FileText,
] as const;

export async function HowItWorksSection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = howItWorksContent[locale];

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="scroll-mt-28 bg-background py-20"
    >
      <div className="page-container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-2xl">
          <Badge variant="blue" className="mb-8 uppercase tracking-wide">
            {content.eyebrow}
          </Badge>
          <h2
            id="how-it-works-title"
            className="text-3xl font-semibold leading-[1.12] tracking-tight text-blue-dark dark:text-white sm:text-[48px]"
          >
            {content.title}
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-7 text-blue-normal dark:text-blue-light">
            {content.description}
          </p>
          <Link href="#contact" className={buttonStyles("default", "mt-8")}>
            {content.action}
            <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>

        <ol className="border-t border-blue-light-active dark:border-blue-light/50">
          {content.steps.map((step, index) => {
            const Icon = stepIcons[index];

            return (
              <li
                key={step.title}
                className="grid min-h-30 grid-cols-[64px_minmax(0,1fr)_32px] items-center gap-4 border-b border-blue-light-active py-5 dark:border-blue-light/50 sm:min-h-34 sm:grid-cols-[84px_minmax(0,1fr)_40px] sm:gap-5"
              >
                <span className="text-4xl font-normal leading-none text-blue-normal sm:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="text-lg font-semibold leading-6 text-blue-dark dark:text-white sm:text-xl">
                      {step.title}
                    </h3>
                    <span className="rounded-full border border-blue-normal px-3 py-0.5 text-xs leading-4 text-blue-normal dark:border-blue-light dark:text-blue-light">
                      {step.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-5 text-blue-normal dark:text-blue-light sm:text-base sm:leading-6">
                    {step.description}
                  </p>
                </div>
                <Icon
                  aria-hidden="true"
                  className="justify-self-end text-blue-normal dark:text-white"
                  size={32}
                  strokeWidth={1.7}
                />
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
