import { Clock3, Search, Waypoints } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/sections/section-heading";

const solutionCards = [
  { key: "noise", Icon: Search },
  { key: "context", Icon: Waypoints },
  { key: "time", Icon: Clock3 },
] as const;

export async function SolutionsSection() {
  const t = await getTranslations("Landing.Solutions");

  return (
    <section
      id="solutions"
      className="scroll-mt-28 bg-background py-20 sm:py-28"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {solutionCards.map(({ key, Icon }) => (
            <article
              key={key}
              className="group rounded-3xl border border-border bg-background p-6 transition duration-200 hover:-translate-y-1 hover:border-blue-light-active hover:shadow-[0_18px_50px_rgba(13,41,65,0.08)] sm:p-8"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-blue-light text-blue-normal transition-colors group-hover:bg-blue-normal group-hover:text-white dark:bg-blue-dark/40">
                <Icon aria-hidden="true" size={22} />
              </div>
              <p className="mt-7 text-sm font-medium text-red-500">
                {t(`cards.${key}.problem`)}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">
                {t(`cards.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {t(`cards.${key}.description`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
