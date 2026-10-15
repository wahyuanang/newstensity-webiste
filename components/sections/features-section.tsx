import {
  Activity,
  Globe,
  Lightbulb,
  ListFilter,
  Network,
  Newspaper,
  Radio,
} from "lucide-react";
import { getLocale } from "next-intl/server";
import type { LandingLocale } from "@/data/landing";
import { Badge } from "@/components/ui/badge";
import { featuresContent } from "@/data/features";

function FeatureCard({
  children,
  className = "",
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <article
      className={`rounded-[20px] border p-4 sm:p-5 ${dark ? "border-blue-light/70 bg-blue-darker text-blue-light" : "border-blue-light-active bg-white text-blue-darker dark:bg-white dark:text-blue-darker"} ${className}`}
    >
      {children}
    </article>
  );
}

function CardHeading({ title, tag }: { title: string; tag: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-base font-semibold leading-6 sm:text-lg">{title}</h3>
      <span className="shrink-0 rounded-full bg-blue-light-active px-2.5 py-1 text-[10px] leading-4 text-blue-dark dark:bg-blue-light-active dark:text-blue-dark">
        {tag}
      </span>
    </div>
  );
}

function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-blue-light-hover text-blue-dark">
      {children}
    </span>
  );
}

export async function FeaturesSection() {
  const locale = (await getLocale()) as LandingLocale;
  const t = featuresContent[locale];

  return (
    <section
      id="features"
      aria-labelledby="features-title"
      className="scroll-mt-28 bg-background py-14 sm:py-20 lg:py-24"
    >
      <div className="page-container">
        <header className="mx-auto mb-9 max-w-3xl text-center sm:mb-10">
          <Badge variant="blue" className="mb-5 uppercase tracking-wide">
            {t.eyebrow}
          </Badge>
          <h2
            id="features-title"
            className="text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]"
          >
            {t.title} <span className="text-blue-normal">{t.accent}</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-foreground sm:text-base sm:leading-7">
            {t.intro}
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard className="md:col-span-2 lg:col-span-2">
            <CardHeading title={t.monitor} tag={t.unified} />
            <p className="mt-4 text-sm leading-6 text-blue-dark">
              {t.monitorDescription}
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="group/item flex items-center gap-2.5 rounded-xl p-2 transition-colors hover:bg-blue-dark-hover">
                <IconTile>
                  <Newspaper size={17} />
                </IconTile>
                <div>
                  <p className="text-[14px] font-medium text-blue-darker group-hover/item:text-white">
                    {t.print}
                  </p>
                  <p className="mt-0.5 text-[12px] text-blue-dark group-hover/item:text-blue-light">
                    {t.printSub}
                  </p>
                </div>
              </div>
              <div className="group/item flex items-center gap-2.5 rounded-xl p-2 transition-colors hover:bg-blue-dark-hover">
                <IconTile>
                  <Radio size={17} />
                </IconTile>
                <div>
                  <p className="text-[14px] font-medium text-blue-darker group-hover/item:text-white">
                    {t.broadcast}
                  </p>
                  <p className="mt-0.5 text-[12px] text-blue-dark group-hover/item:text-blue-light">
                    {t.broadcastSub}
                  </p>
                </div>
              </div>
              <div className="group/item flex items-center gap-2.5 rounded-xl p-2 transition-colors hover:bg-blue-dark-hover">
                <IconTile>
                  <Network size={17} />
                </IconTile>
                <div>
                  <p className="text-[14px] font-medium text-blue-darker group-hover/item:text-white">
                    {t.compare}
                  </p>
                  <p className="mt-0.5 text-[12px] text-blue-dark group-hover/item:text-blue-light">
                    {t.compareSub}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-5 grid gap-2.5 sm:grid-cols-3">
              {[t.news1, t.news2, t.news3].map((news, i) => (
                <div
                  key={news}
                  className="min-w-0 rounded-xl bg-blue-light-active p-3 text-blue-darker"
                >
                  <IconTile>
                    {i === 1 ? (
                      <Globe size={17} />
                    ) : i === 2 ? (
                      <Activity size={17} />
                    ) : (
                      <Newspaper size={17} />
                    )}
                  </IconTile>
                  <p className="mt-1.5 truncate text-xs font-medium">{news}</p>
                  <p className="mt-0.5 text-[11px] text-blue-dark">
                    {["2 min ago", "14 min ago", "28 min ago"][i]} •{" "}
                    {[t.mentions4, t.mentions2, t.mention1][i]}
                  </p>
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard>
            <CardHeading title={t.trend} tag={t.dynamic} />
            <p className="mt-3 text-sm leading-5 text-blue-dark">
              {t.trendDescription}
            </p>
            <div className="mt-3 overflow-hidden rounded-xl bg-[#f7faff]">
              <svg
                viewBox="0 0 320 132"
                className="h-33 w-full"
                role="img"
                aria-label={t.trend}
              >
                <path
                  d="M0 32H320M0 66H320M0 100H320M0 130H320"
                  stroke="#dce4eb"
                  strokeWidth="1"
                />
                <path
                  d="M10 120 C35 120 42 101 67 101 S96 77 122 77 S153 56 178 56 S207 35 235 35 S276 10 310 10"
                  fill="none"
                  stroke="#36a9e8"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                {[10, 70, 130, 190, 250, 310].map((x, i) => (
                  <circle
                    key={x}
                    cx={x}
                    cy={[106, 97, 79, 69, 56, 43][i]}
                    r="3.2"
                    fill="#36a9e8"
                  />
                ))}
              </svg>
            </div>
          </FeatureCard>

          <FeatureCard>
            <CardHeading title={t.sentiment} tag={t.breakdown} />
            <p className="mt-3 text-sm leading-5 text-blue-dark">
              {t.sentimentDescription}
            </p>
            <div className="mx-auto mt-3 flex size-32 items-center justify-center rounded-full bg-[conic-gradient(#3079bd_0_68%,#39a9e1_68%_93%,#102e49_93%_100%)] sm:size-34.5">
              <div className="flex size-22 flex-col items-center justify-center rounded-full bg-white text-center text-blue-darker">
                <strong className="text-base">12.4k</strong>
                <span className="text-[9px] text-blue-dark">{t.mentions}</span>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 text-[9px] text-blue-dark">
              {[
                [t.positive, "68%", "#3079bd"],
                [t.neutral, "25%", "#3182aa"],
                [t.negative, "7%", "#102e49"],
              ].map(([label, value, color]) => (
                <div key={label} className="flex items-start gap-1.5">
                  <i
                    className="mt-1 size-2 shrink-0 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span>
                    {label}
                    <br />
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </FeatureCard>

          <FeatureCard className="border-blue-light-active bg-blue-light dark:bg-blue-light">
            <CardHeading title={t.insight} tag={t.live} />
            <p className="mt-3 text-sm leading-5 text-blue-dark">
              {t.insightDescription}
            </p>
            <div className="mt-3 space-y-2">
              <ReportRow
                hoverable
                icon={<Newspaper size={16} />}
                title={t.summary}
                detail="12.4k mentions • Positive 68% • Neutral 25% • Negative 7%"
              />
              <ReportRow
                hoverable
                icon={<ListFilter size={16} />}
                title={t.sources}
                detail="4,800 • 3,200 • 2,100 mentions"
              />
              <ReportRow
                highlight
                icon={<Lightbulb size={16} />}
                title={t.recommendation}
                detail="1,200 new mentions in the last 10 minutes"
              />
            </div>
          </FeatureCard>

          <FeatureCard dark>
            <CardHeading title={t.mapping} tag={t.relationships} />
            <p className="mt-3 text-sm leading-5 text-blue-light">
              {t.mappingDescription}
            </p>
            <div className="relative mx-auto mt-5 grid min-h-34 w-full max-w-87.5 grid-cols-2 grid-rows-[40px_40px] content-between gap-x-6 px-1 text-center text-xs sm:min-h-37.5 sm:grid-rows-[44px_44px] sm:gap-x-8">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 350 136"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M84 30L145 57M266 30L205 57M145 79L84 106M205 79L266 106"
                  fill="none"
                  stroke="#2674ba"
                  strokeWidth="1.5"
                />
              </svg>
              {[t.people, t.organizations, t.locations, t.topics].map(
                (label) => (
                  <span
                    key={label}
                    className="relative z-10 flex items-center justify-center rounded-lg bg-blue-light-active px-2 py-2 text-xs font-medium text-blue-darker sm:text-sm"
                  >
                    {label}
                  </span>
                ),
              )}
              <span className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg bg-[#36a9e8] px-3 py-2 text-xs font-medium text-blue-darker sm:px-4 sm:text-sm">
                {t.connections}
              </span>
            </div>
          </FeatureCard>
        </div>
      </div>
    </section>
  );
}

function ReportRow({
  icon,
  title,
  detail,
  highlight = false,
  hoverable = false,
}: {
  icon: React.ReactNode;
  title: string;
  detail: string;
  highlight?: boolean;
  hoverable?: boolean;
}) {
  return (
    <div
      className={`group/report-row flex min-h-13.5 items-center gap-2.5 rounded-xl px-2.5 py-2 text-blue-darker transition duration-200 ease-out ${highlight ? "bg-blue-normal text-white hover:-translate-y-0.5 hover:bg-blue-hover hover:shadow-[0_8px_18px_rgba(38,116,186,0.28)]" : `bg-white dark:bg-white ${hoverable ? "hover:-translate-y-0.5 hover:bg-blue-normal hover:text-white hover:shadow-[0_8px_18px_rgba(38,116,186,0.22)] dark:hover:bg-blue-normal" : ""}`}`}
    >
      <IconTile>{icon}</IconTile>
      <div className="min-w-0">
        <p className="text-[11px] font-medium leading-4">{title}</p>
        <p
          className={`text-[10px] leading-4 ${highlight ? "text-white/85" : `text-blue-dark ${hoverable ? "group-hover/report-row:text-white" : ""}`}`}
        >
          {detail}
        </p>
      </div>
    </div>
  );
}
