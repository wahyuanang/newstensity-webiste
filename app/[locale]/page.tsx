import { ArrowUpRight, Newspaper, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { FadeIn } from "@/components/fade-in";
import { Link } from "@/i18n/navigation";

export default async function Home() {
  const t = await getTranslations("Home");

  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-background px-6 py-20 text-foreground">
      <FadeIn className="mx-auto w-full max-w-3xl text-center">
        <div className="mx-auto mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-normal text-white">
          <Newspaper aria-hidden="true" size={26} />
        </div>
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-muted">
          <Sparkles aria-hidden="true" size={15} /> {t("eyebrow")}
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
          {t("title")}{" "}
          <span className="text-blue-normal">{t("titleAccent")}</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted">
          {t("description")}
        </p>
        <Link
          href="#product"
          className="mt-9 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-normal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-hover active:bg-blue-active"
        >
          {t("cta")} <ArrowUpRight aria-hidden="true" size={17} />
        </Link>
      </FadeIn>
    </main>
  );
}
