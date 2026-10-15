import { ArrowRight, Sparkles } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export async function CtaSection() {
  const t = await getTranslations("Landing.CTA");

  return (
    <section id="contact" className="scroll-mt-28 bg-background pb-20 sm:pb-28">
      <div className="page-container">
        <div className="relative isolate overflow-hidden rounded-[2rem] border border-border bg-background px-6 py-14 text-center text-foreground sm:px-12 sm:py-20">
          <div className="pointer-events-none absolute -right-20 -top-36 -z-10 size-96 rounded-full border-[50px] border-blue-normal/10" />
          <div className="pointer-events-none absolute -bottom-56 -left-20 -z-10 size-96 rounded-full border-[50px] border-blue-normal/10" />
          <span className="mx-auto mb-5 flex size-12 items-center justify-center rounded-2xl bg-blue-light text-blue-normal dark:bg-blue-dark dark:text-blue-light">
            <Sparkles aria-hidden="true" size={22} />
          </span>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            {t("description")}
          </p>
          <Link
            href="#faq"
            className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-blue-normal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-hover"
          >
            {t("button")} <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
