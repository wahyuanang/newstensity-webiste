import Image from "next/image";
import { Globe2, Radio, Share2, Newspaper } from "lucide-react";
import { getLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import { dataCoverageContent } from "@/data/data-coverage";
import type { LandingLocale } from "@/data/landing";
import { CountUpNumber } from "@/components/ui/count-up-number";

const icons = [Globe2, Newspaper, Radio, Share2] as const;
const logoPaths: Record<string, string> = {
  "Detik.com": "/images/Detik.com — source logo.png",
  "Kompas.com": "/images/Kompas.com — source logo.png",
  "CNN Indonesia": "/images/CNN Indonesia — source logo.png",
  "Tempo.co": "/images/Tempo.co — source logo.png",
  Republika: "/images/Republika — source logo.png",
  Kompas: "/images/Kompas — source logo.png",
  Tempo: "/images/Tempo — source logo.png",
  "Media Indonesia": "/images/Media Indonesia — source logo.png",
  TVRI: "/images/TVRI — source logo.png",
  "Metro TV": "/images/Metro TV — source logo.png",
  RRI: "/images/RRI — source logo.png",
  "Suara Surabaya": "/images/Suara Surabaya — source logo.png",
  Facebook: "/images/Facebook — source logo.png",
  Instagram: "/images/Instagram — source logo.png",
  TikTok: "/images/TikTok — source logo.png",
};

export async function DataCoverageSection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = dataCoverageContent[locale];

  return (
    <section
      aria-labelledby="data-coverage-title"
      className="bg-background py-12 sm:py-16"
    >
      <div className="page-container">
        <div className="data-coverage-panel rounded-3xl border px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
          <header className="mx-auto max-w-2xl text-center">
            <Badge variant="blue" className="mb-7 uppercase tracking-wide">
              {content.eyebrow}
            </Badge>
            <h2
              id="data-coverage-title"
              className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-[46px]"
            >
              {content.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
              {content.description}
            </p>
          </header>

          <div className="mt-10 grid items-center gap-8 lg:mt-10 lg:grid-cols-[0.82fr_1.5fr] lg:gap-10">
            <div
              className="data-orbit-wrap mx-auto flex aspect-square w-full max-w-97.5 items-center justify-center"
              aria-label={content.centerDescription}
            >
              <div className="data-orbit data-orbit-outer" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="data-orbit data-orbit-inner" aria-hidden="true">
                <i />
                <i />
                <i />
                <i />
              </div>
              <div className="data-coverage-orb relative z-10 flex aspect-square w-[76%] flex-col items-center justify-center rounded-full px-5 text-center text-white">
                <strong className="text-2xl font-semibold sm:text-3xl">
                  {content.centerTitle}
                </strong>
                <span className="mt-2 text-xs text-white/80 sm:text-sm">
                  {content.centerDescription}
                </span>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {content.centerTags.map((tag) => (
                    <span
                      key={tag}
                      className="data-orb-tag rounded-full px-2.5 py-1 text-[10px] sm:text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              {content.categories.map((item, index) => {
                const Icon = icons[index];
                return (
                  <article
                    key={item.title}
                    className="data-coverage-card rounded-3xl p-4 sm:p-5"
                  >
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="data-coverage-icon flex size-6 shrink-0 items-center justify-center rounded-full">
                        <Icon aria-hidden="true" size={13} />
                      </span>
                      <h3 className="min-w-0 flex-1 truncate text-sm font-medium sm:text-base xl:text-lg">
                        {item.title}
                      </h3>
                      <span className="data-coverage-type max-w-[56%] truncate rounded-full border px-2.5 py-1 text-[10px] sm:text-xs">
                        {item.type}
                      </span>
                    </div>
                    <div className="mt-4 flex items-baseline gap-2.5">
                      <span className="data-coverage-value text-4xl font-normal tracking-tight sm:text-5xl">
                        <CountUpNumber value={item.value} />
                      </span>
                      <span className="text-xs sm:text-sm text-blue-dark font-medium">{item.unit}</span>
                    </div>
                    <div className="data-coverage-divider my-3 border-t" />
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex min-w-0 items-center pl-1">
                        {item.logos.map((name) => (
                          <span
                            key={name}
                            className="data-coverage-logo relative -ml-1 flex size-7 shrink-0 items-center justify-center overflow-hidden rounded-full border-2"
                          >
                            <Image
                              src={logoPaths[name]}
                              alt={name}
                              title={name}
                              fill
                              sizes="28px"
                              className="object-contain"
                            />
                          </span>
                        ))}
                      </div>
                      <span className="data-coverage-more shrink-0 rounded-full px-2.5 py-1 text-[10px] sm:text-xs">
                        {item.more}
                      </span>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
