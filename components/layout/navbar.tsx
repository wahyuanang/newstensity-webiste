"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, Globe2, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonStyles } from "@/components/ui/button";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const navLinks = [
  { key: "product", href: "#product" },
  { key: "solutions", href: "#solutions" },
  { key: "features", href: "#features" },
  { key: "explore", href: "#explore" },
  { key: "faq", href: "#faq" },
] as const;

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navigation");
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const nextLocale: Locale = locale === "id" ? "en" : "id";

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4 sm:top-5 sm:px-6">
      <nav
        aria-label={t("label")}
        className="mx-auto flex min-h-[72px] max-w-[1440px] items-center justify-between gap-4 rounded-full border border-white/50 bg-blue-light px-5 shadow-[0_12px_40px_rgba(13,41,65,0.12)] backdrop-blur-xl dark:bg-blue-darker sm:px-8"
      >
        <Link
          href="/"
          aria-label="Newstensity"
          className="shrink-0 text-2xl font-semibold tracking-tight text-blue-normal sm:text-[28px]"
        >
          newstensity
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="text-sm font-semibold text-foreground transition-colors hover:text-blue-normal"
            >
              {t(key)}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <ThemeToggle />
          <Link
            href={pathname}
            locale={nextLocale}
            aria-label={t("switchLanguage")}
            className="inline-flex h-11 items-center gap-2 rounded-full border border-blue-normal px-4 text-sm font-medium text-foreground hover:bg-blue-light dark:hover:bg-blue-dark/30"
          >
            <Globe2 aria-hidden="true" size={16} />
            {nextLocale.toUpperCase()}
            <ChevronDown aria-hidden="true" size={14} />
          </Link>
          <Link href="#login" className={buttonStyles("default", "min-w-28")}>
            {t("login")}
          </Link>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? t("closeMenu") : t("openMenu")}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex size-10 items-center justify-center rounded-full text-foreground hover:bg-surface sm:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-4 mt-3 grid gap-1 rounded-3xl border border-border bg-background p-3 shadow-lg sm:hidden">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-surface"
            >
              {t(key)}
            </Link>
          ))}
          <div className="flex items-center justify-between border-t border-border px-4 pt-3">
            <ThemeToggle />
            <div className="flex items-center gap-3">
              <Link
                href={pathname}
                locale={nextLocale}
                aria-label={t("switchLanguage")}
                className="text-sm font-semibold text-blue-normal"
              >
                {nextLocale.toUpperCase()}
              </Link>
              <Link
                href="#login"
                onClick={() => setMenuOpen(false)}
                className={buttonStyles("default", "min-w-28")}
              >
                {t("login")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
