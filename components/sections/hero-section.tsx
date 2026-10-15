import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/fade-in";
import { Link } from "@/i18n/navigation";

type HeroCardAsset = {
  src: string;
  alt: string;
};

const summaryCard: HeroCardAsset = {
  src: "/images/Card Bounce 1.png",
  alt: "AI Summary: ringkasan liputan media",
};
const reporterCard: HeroCardAsset = {
  src: "/images/Card Bounce 2.png",
  alt: "Top Reporter: reporter dengan liputan terbanyak",
};
const alertCard: HeroCardAsset = {
  src: "/images/Card Bounce 4.png",
  alt: "Spike Alert: peringatan lonjakan sentimen negatif",
};
const mentionsCard: HeroCardAsset = {
  src: "/images/Frame 427319157.png",
  alt: "Mention by Day: perbandingan jumlah penyebutan",
};

function HeroCard({ asset }: { asset: HeroCardAsset }) {
  return (
    <Image
      src={asset.src}
      alt={asset.alt}
      width={663}
      height={375}
      className="h-auto w-full drop-shadow-xl"
    />
  );
}

export async function HeroSection() {
  const t = await getTranslations("Landing.Hero");

  return (
    <section className="relative isolate overflow-hidden bg-transparent pb-14 pt-6 sm:pb-20 sm:pt-10 lg:pt-24">
      <div className="page-container text-center">
        <FadeIn className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex min-h-10 items-center justify-center rounded-full border border-blue-normal bg-blue-light-hover px-7 text-sm font-semibold uppercase text-blue-normal sm:min-h-[50px] sm:px-9 sm:text-base">
            {t("eyebrow")}
          </div>
          <h1 className="text-[2rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
            {t("title")}{" "}
            <span className="text-blue-normal">{t("titleAccent")}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-6 text-muted sm:text-base sm:leading-7 lg:text-lg">
            {t("description")}
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="#product"
              className="inline-flex min-h-[43px] w-full items-center justify-center gap-2 rounded-full bg-blue-normal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-hover active:bg-blue-active sm:w-auto sm:text-base"
            >
              {t("primaryAction")}
            </Link>
            <Link
              href="#contact"
              className="inline-flex min-h-[43px] w-full items-center justify-center gap-2 rounded-full border border-blue-normal bg-transparent px-6 py-3 text-sm font-semibold text-blue-normal transition-colors hover:bg-blue-light dark:hover:bg-blue-dark/30 sm:w-auto sm:text-base"
            >
              {t("secondaryAction")}
            </Link>
          </div>
        </FadeIn>
        <FadeIn className="relative mx-auto mt-8 w-full sm:mt-10 lg:mt-16">
          <div className="mb-3 grid grid-cols-2 gap-3 lg:hidden">
            <div className="hero-float-card">
              <HeroCard asset={summaryCard} />
            </div>
            <div
              className="hero-float-card"
              style={{ animationDelay: "-1.5s" }}
            >
              <HeroCard asset={reporterCard} />
            </div>
          </div>
          <div className="hero-float-card pointer-events-none absolute left-0 top-[-12%] z-10 hidden w-[15%] lg:block">
            <HeroCard asset={summaryCard} />
          </div>
          <div
            className="hero-float-card pointer-events-none absolute right-0 top-[-12%] z-10 hidden w-[15%] lg:block"
            style={{ animationDelay: "-1.5s" }}
          >
            <HeroCard asset={mentionsCard} />
          </div>
          <div
            className="hero-float-card pointer-events-none absolute bottom-[18%] left-0 z-10 hidden w-[15%] lg:block"
            style={{ animationDelay: "-3s" }}
          >
            <HeroCard asset={reporterCard} />
          </div>
          <div
            className="hero-float-card pointer-events-none absolute bottom-[18%] right-0 z-10 hidden w-[15%] lg:block"
            style={{ animationDelay: "-4.5s" }}
          >
            <HeroCard asset={alertCard} />
          </div>
          <div className="relative z-0 mx-auto w-full overflow-hidden rounded-2xl border border-blue-light-active/70 shadow-[0_24px_80px_rgba(13,41,65,0.18)] dark:border-blue-dark lg:w-[65%]">
            <Image
              src="/gifs/newstensity-dashboard-light-gift.gif"
              alt="Preview dashboard analisis media Newstensity"
              width={958}
              height={450}
              unoptimized
              priority
              className="h-auto w-full dark:hidden"
            />
            <Image
              src="/gifs/newstensity-dashboard-dark-gift.gif"
              alt="Preview dashboard analisis media Newstensity dalam mode gelap"
              width={958}
              height={450}
              unoptimized
              priority
              className="hidden h-auto w-full dark:block"
            />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 lg:hidden">
            <div className="hero-float-card" style={{ animationDelay: "-3s" }}>
              <HeroCard asset={mentionsCard} />
            </div>
            <div
              className="hero-float-card"
              style={{ animationDelay: "-4.5s" }}
            >
              <HeroCard asset={alertCard} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
