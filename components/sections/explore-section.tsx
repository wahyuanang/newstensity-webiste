import {
  ArrowUpRight,
  ChevronRight,
  CircleHelp,
  Globe2,
  MessageSquareText,
} from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/sections/section-heading";

export async function ExploreSection() {
  const t = await getTranslations("Landing.Explore");
  const topics = t.raw("topics") as Array<{
    name: string;
    category: string;
    tone: "blue" | "green" | "red";
    mentions: string;
  }>;

  return (
    <section id="explore" className="scroll-mt-28 bg-surface py-20 sm:py-28">
      <div className="page-container mx-auto grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <SectionHeading
            align="left"
            eyebrow={t("eyebrow")}
            title={t("title")}
            description={t("description")}
          />
          <ul className="mt-8 grid gap-4">
            {(["first", "second", "third"] as const).map((key) => (
              <li key={key} className="flex gap-3 text-sm leading-6 text-muted">
                <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-blue-normal text-white">
                  <ChevronRight aria-hidden="true" size={14} />
                </span>
                {t(`benefits.${key}`)}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.75rem] border border-border bg-background p-5 shadow-[0_24px_70px_rgba(13,41,65,0.1)] sm:p-7">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-5">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-blue-light text-blue-normal dark:bg-blue-dark/40">
                <Globe2 size={19} />
              </div>
              <div>
                <p className="text-xs text-muted">{t("previewLabel")}</p>
                <p className="text-sm font-semibold text-foreground">
                  {t("previewTitle")}
                </p>
              </div>
            </div>
            <span className="rounded-full bg-surface px-3 py-1 text-xs text-muted">
              {t("sampleData")}
            </span>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {topics.map((topic) => (
              <article
                key={topic.name}
                className="rounded-2xl border border-border p-4"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs text-muted">{topic.category}</p>
                    <h3 className="mt-1 font-semibold text-foreground">
                      {topic.name}
                    </h3>
                  </div>
                  <Badge
                    variant={topic.tone}
                    className="px-2.5 py-0.5 text-[11px]"
                  >
                    {topic.mentions}
                  </Badge>
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div className="flex h-9 items-end gap-1">
                    {[35, 50, 41, 68, 55, 78, 62, 92].map((height, index) => (
                      <span
                        key={index}
                        className="w-2 rounded-t-sm bg-blue-normal/70"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                  <ArrowUpRight
                    aria-hidden="true"
                    size={15}
                    className="text-blue-normal"
                  />
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-surface p-4">
            <MessageSquareText
              aria-hidden="true"
              size={18}
              className="shrink-0 text-blue-normal"
            />
            <p className="text-xs leading-5 text-muted">{t("insight")}</p>
            <CircleHelp
              aria-hidden="true"
              size={16}
              className="ml-auto shrink-0 text-muted"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
