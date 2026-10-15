import {
  Activity,
  BellRing,
  FileBarChart2,
  MessagesSquare,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/sections/section-heading";

const featureCards = [
  { key: "monitoring", Icon: Activity },
  { key: "sentiment", Icon: MessagesSquare },
  { key: "alerts", Icon: BellRing },
  { key: "reports", Icon: FileBarChart2 },
] as const;

export async function FeaturesSection() {
  const t = await getTranslations("Landing.Features");

  return (
    <section
      id="features"
      className="scroll-mt-28 bg-background py-20 text-foreground sm:py-28"
    >
      <div className="page-container">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map(({ key, Icon }) => (
            <article
              key={key}
              className="rounded-3xl border border-border bg-surface p-6 transition-colors hover:border-blue-light-active sm:p-7"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-blue-normal text-white">
                <Icon aria-hidden="true" size={21} />
              </div>
              <h3 className="mt-6 text-lg font-semibold">
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
