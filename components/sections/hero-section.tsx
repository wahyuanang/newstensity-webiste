import Image from "next/image";
import { getLocale } from "next-intl/server";
import { FadeIn } from "@/components/ui/fade-in";
import { Badge } from "@/components/ui/badge";
import { buttonStyles } from "@/components/ui/button";
import { landingContent, type LandingLocale } from "@/data/landing";
import { Link } from "@/i18n/navigation";

type HeroCardAsset = {
  src: string;
  alt: string;
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
  const locale = (await getLocale()) as LandingLocale;
  const content = landingContent[locale].hero;

  return (
    <section
      id="product"
      className="relative isolate overflow-hidden bg-transparent pb-20 pt-6 sm:pt-10 lg:pt-24"
    >
      <div className="page-container text-center">
        <FadeIn className="mx-auto max-w-3xl">
          <Badge variant="blue" className="mb-6 uppercase">
            {content.eyebrow}
          </Badge>
          <h1 className="text-3xl font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[48px]">
            {content.title}{" "}
            <span className="text-blue-normal">{content.titleAccent}</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-7 text-muted">
            {content.description}
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="#product"
              className={buttonStyles("default", "w-full sm:w-auto")}
            >
              {content.primaryAction}
            </Link>
            <Link
              href="#contact"
              className={buttonStyles("outline", "w-full sm:w-auto")}
            >
              {content.secondaryAction}
            </Link>
          </div>
        </FadeIn>

        <FadeIn className="relative mx-auto mt-8 w-full sm:mt-10 lg:mt-16">
          <div className="mb-3 grid grid-cols-2 gap-3 lg:hidden">
            <div className="hero-float-card">
              <HeroCard asset={content.cards.summary} />
            </div>
            <div
              className="hero-float-card"
              style={{ animationDelay: "-1.5s" }}
            >
              <HeroCard asset={content.cards.reporter} />
            </div>
          </div>

          <div className="hero-float-card pointer-events-none absolute left-0 top-[-12%] z-10 hidden w-[15%] lg:block">
            <HeroCard asset={content.cards.summary} />
          </div>
          <div
            className="hero-float-card pointer-events-none absolute right-0 top-[-12%] z-10 hidden w-[15%] lg:block"
            style={{ animationDelay: "-1.5s" }}
          >
            <HeroCard asset={content.cards.mentions} />
          </div>
          <div
            className="hero-float-card pointer-events-none absolute bottom-[18%] left-0 z-10 hidden w-[15%] lg:block"
            style={{ animationDelay: "-3s" }}
          >
            <HeroCard asset={content.cards.reporter} />
          </div>
          <div
            className="hero-float-card pointer-events-none absolute bottom-[18%] right-0 z-10 hidden w-[15%] lg:block"
            style={{ animationDelay: "-4.5s" }}
          >
            <HeroCard asset={content.cards.alert} />
          </div>

          <div className="relative z-0 mx-auto w-full overflow-hidden rounded-2xl border border-blue-light-active/70 shadow-[0_24px_80px_rgba(13,41,65,0.18)] dark:border-blue-dark lg:w-[65%]">
            <Image
              src="/gifs/newstensity-dashboard-light-gift.gif"
              alt={content.dashboardAlt}
              width={958}
              height={450}
              unoptimized
              priority
              className="h-auto w-full dark:hidden"
            />
            <Image
              src="/gifs/newstensity-dashboard-dark-gift.gif"
              alt={content.dashboardDarkAlt}
              width={958}
              height={450}
              unoptimized
              priority
              className="hidden h-auto w-full dark:block"
            />
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3 lg:hidden">
            <div className="hero-float-card" style={{ animationDelay: "-3s" }}>
              <HeroCard asset={content.cards.mentions} />
            </div>
            <div
              className="hero-float-card"
              style={{ animationDelay: "-4.5s" }}
            >
              <HeroCard asset={content.cards.alert} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
