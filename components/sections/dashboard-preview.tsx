import { ArrowUpRight, BarChart3, Globe2, Newspaper } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Badge } from "@/components/ui/badge";

const barHeights = [34, 48, 40, 62, 53, 76, 57, 88, 66, 96, 72, 84];

export async function DashboardPreview() {
  const t = await getTranslations("Landing.Dashboard");
  const topics = t.raw("topics") as Array<{
    name: string;
    mentions: string;
    tone: "blue" | "green" | "red";
  }>;

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div className="absolute -inset-6 rounded-[2.5rem] bg-blue-light blur-2xl dark:bg-blue-dark/30" />
      <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-[0_24px_80px_rgba(13,41,65,0.16)]">
        <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
          <div>
            <p className="text-xs font-medium text-muted">{t("sample")}</p>
            <h2 className="mt-1 text-sm font-semibold text-foreground">
              {t("title")}
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-green-badge-bg px-3 py-1 text-xs font-medium text-green-badge-text">
            <span className="size-1.5 rounded-full bg-green-500" /> {t("live")}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 p-4 sm:gap-4 sm:p-6">
          <div className="rounded-2xl bg-surface p-4">
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs">{t("mentions")}</span>
              <Newspaper size={15} />
            </div>
            <p className="mt-3 text-2xl font-semibold text-foreground">12.8k</p>
            <p className="mt-1 flex items-center gap-1 text-xs font-medium text-green-badge-text">
              <ArrowUpRight size={13} /> {t("sampleGrowth")}
            </p>
          </div>
          <div className="rounded-2xl bg-surface p-4">
            <div className="flex items-center justify-between text-muted">
              <span className="text-xs">{t("sources")}</span>
              <Globe2 size={15} />
            </div>
            <p className="mt-3 text-2xl font-semibold text-foreground">248</p>
            <p className="mt-1 text-xs text-muted">{t("sourcesMonitored")}</p>
          </div>
          <div className="col-span-2 rounded-2xl border border-border p-4 sm:p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs text-muted">{t("coverage")}</p>
                <p className="mt-1 text-sm font-semibold text-foreground">
                  {t("lastSevenDays")}
                </p>
              </div>
              <BarChart3 size={17} className="text-blue-normal" />
            </div>
            <div className="flex h-24 items-end gap-1.5 sm:gap-2">
              {barHeights.map((height, index) => (
                <span
                  key={index}
                  className="flex-1 rounded-t-sm bg-blue-normal/80 last:bg-blue-normal"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>
            <div className="mt-2 flex justify-between text-[10px] text-muted">
              <span>{t("weekStart")}</span>
              <span>{t("today")}</span>
            </div>
          </div>
          <div className="col-span-2 rounded-2xl bg-surface p-4 sm:p-5">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-xs font-medium text-muted">{t("topTopics")}</p>
              <span className="text-[10px] text-muted">{t("sampleData")}</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {topics.map((topic) => (
                <Badge
                  key={topic.name}
                  variant={topic.tone}
                  className="px-3 py-1 text-xs"
                >
                  {topic.name}
                  <span className="ml-1 opacity-70">{topic.mentions}</span>
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
