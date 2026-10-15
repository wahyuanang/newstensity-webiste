import { Activity, ArrowRight, CheckCircle2, RadioTower } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/sections/section-heading";

const steps = [
  { key: "collect", Icon: RadioTower },
  { key: "understand", Icon: Activity },
  { key: "act", Icon: CheckCircle2 },
] as const;

export async function ProductSection() {
  const t = await getTranslations("Landing.Product");

  return (
    <section id="product" className="scroll-mt-28 bg-surface py-20 sm:py-28">
      <div className="page-container">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {steps.map(({ key, Icon }, index) => (
            <article
              key={key}
              className="relative rounded-3xl border border-border bg-background p-6 sm:p-8"
            >
              <div className="mb-7 flex size-12 items-center justify-center rounded-2xl bg-blue-light text-blue-normal dark:bg-blue-dark/40">
                <Icon aria-hidden="true" size={22} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.14em] text-blue-normal">
                {t(`steps.${key}.eyebrow`)}
              </p>
              <h3 className="text-xl font-semibold text-foreground">
                {t(`steps.${key}.title`)}
              </h3>
              <p className="mt-3 text-sm leading-6 text-muted">
                {t(`steps.${key}.description`)}
              </p>
              {index < steps.length - 1 && (
                <ArrowRight
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 rounded-full bg-background p-1 text-blue-normal md:block"
                />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
