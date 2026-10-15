"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { ChevronDown, Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { buttonStyles } from "@/components/ui/button";
import { landingContent, type LandingLocale } from "@/data/landing";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";

const navLinks = [
  { key: "product", href: "#product" },
  { key: "solutions", href: "#problem-solutions" },
  { key: "features", href: "#features" },
] as const;

function LanguageFlag({
  locale,
  size = 18,
}: {
  locale: Locale;
  size?: number;
}) {
  return (
    <Image
      src={locale === "id" ? "/images/id-logo.png" : "/images/en-logo.png"}
      alt=""
      aria-hidden="true"
      width={size}
      height={size}
      className="shrink-0 object-contain"
    />
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopLanguageOpen, setDesktopLanguageOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const desktopLanguageRef = useRef<HTMLDivElement>(null);
  const mobileLanguageRef = useRef<HTMLDivElement>(null);
  const locale = useLocale() as LandingLocale & Locale;
  const content = landingContent[locale].navigation;
  const pathname = usePathname();

  useEffect(() => {
    function closeOnOutsideClick(event: PointerEvent) {
      const target = event.target as Node;
      if (
        !desktopLanguageRef.current?.contains(target) &&
        !mobileLanguageRef.current?.contains(target)
      ) {
        setDesktopLanguageOpen(false);
        setMobileLanguageOpen(false);
      }
    }

    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setDesktopLanguageOpen(false);
        setMobileLanguageOpen(false);
      }
    }

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-3 sm:top-5 sm:px-6 lg:px-6">
      <nav
        aria-label={content.label}
        className="mx-auto flex min-h-15 max-w-360 items-center justify-between gap-2 rounded-full border border-blue-light-active bg-blue-light px-4 py-3 text-blue-normal shadow-[0_12px_40px_rgba(13,41,65,0.12)] backdrop-blur-xl dark:border-white/15 dark:bg-blue-dark-active dark:text-white sm:min-h-18 sm:gap-4 sm:px-8 sm:py-4"
      >
        <button
          type="button"
          aria-label={menuOpen ? content.closeMenu : content.openMenu}
          aria-expanded={menuOpen}
          onClick={() => {
            setMenuOpen(!menuOpen);
            setMobileLanguageOpen(false);
          }}
          className="order-1 inline-flex size-9 shrink-0 items-center justify-center rounded-full text-blue-normal transition-colors hover:bg-blue-light-hover dark:text-white dark:hover:bg-white/10 lg:hidden"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <Link
          href="/"
          aria-label="Newstensity"
          className="relative order-2 h-8 w-28 shrink-0 sm:h-10 sm:w-36 lg:order-0 lg:h-12 lg:w-36 xl:w-44"
        >
          <Image
            src="/images/logo-blue.png"
            alt="Newstensity"
            fill
            priority
            sizes="(min-width: 1024px) 176px, (min-width: 640px) 144px, 112px"
            className="object-contain dark:hidden"
          />
          <Image
            src="/images/logo-white.png"
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 176px, (min-width: 640px) 144px, 112px"
            className="hidden object-contain dark:block"
          />
        </Link>

        <div className="hidden items-center gap-5 lg:flex xl:gap-8">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="relative py-2 text-sm font-semibold text-blue-normal after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-blue-normal after:transition-transform after:duration-300 hover:after:scale-x-100 focus-visible:after:scale-x-100 dark:text-white"
            >
              {content[key]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <div ref={desktopLanguageRef} className="relative">
            <button
              type="button"
              aria-label={content.switchLanguage}
              aria-expanded={desktopLanguageOpen}
              aria-controls="desktop-language-options"
              onClick={() => setDesktopLanguageOpen((open) => !open)}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-blue-normal px-3 text-sm font-medium text-blue-normal hover:bg-blue-light-hover dark:border-white/70 dark:text-white dark:hover:bg-white/10 xl:px-4"
            >
              <LanguageFlag locale={locale} size={20} />
              {locale.toUpperCase()}
              <ChevronDown
                aria-hidden="true"
                size={14}
                className={
                  desktopLanguageOpen
                    ? "rotate-180 transition-transform"
                    : "transition-transform"
                }
              />
            </button>
            {desktopLanguageOpen && (
              <div
                id="desktop-language-options"
                className="absolute right-0 top-full z-50 mt-2 w-52 rounded-2xl border border-border bg-background p-2 shadow-xl dark:border-white/15 dark:bg-blue-dark-active"
              >
                <Link
                  href={pathname}
                  locale="id"
                  aria-current={locale === "id" ? "page" : undefined}
                  onClick={() => setDesktopLanguageOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-surface dark:text-white dark:hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <LanguageFlag locale="id" size={16} />
                    {content.languageNames.id}
                  </span>
                  <span className="text-xs text-muted">ID</span>
                </Link>
                <Link
                  href={pathname}
                  locale="en"
                  aria-current={locale === "en" ? "page" : undefined}
                  onClick={() => setDesktopLanguageOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-surface dark:text-white dark:hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <LanguageFlag locale="en" size={16} />
                    {content.languageNames.en}
                  </span>
                  <span className="text-xs text-muted">EN</span>
                </Link>
              </div>
            )}
          </div>
          <Link href="#login" className={buttonStyles("default", "min-w-28")}>
            {content.login}
          </Link>
        </div>

        <div className="order-3 ml-auto flex shrink-0 items-center gap-2 lg:hidden">
          <ThemeToggle />
          <div ref={mobileLanguageRef} className="relative">
            <button
              type="button"
              aria-label={content.switchLanguage}
              aria-expanded={mobileLanguageOpen}
              aria-controls="mobile-language-options"
              onClick={() => setMobileLanguageOpen((open) => !open)}
              className="inline-flex h-10 items-center gap-1.5 rounded-full border border-blue-normal px-2.5 text-sm font-medium text-blue-normal transition-colors hover:bg-blue-light-hover dark:border-white/70 dark:text-white dark:hover:bg-white/10"
            >
              <LanguageFlag locale={locale} size={18} />
              {locale.toUpperCase()}
              <ChevronDown
                aria-hidden="true"
                size={13}
                className={
                  mobileLanguageOpen
                    ? "rotate-180 transition-transform"
                    : "transition-transform"
                }
              />
            </button>
            {mobileLanguageOpen && (
              <div
                id="mobile-language-options"
                className="absolute right-0 top-full z-50 mt-2 w-48 rounded-2xl border border-border bg-background p-2 shadow-xl dark:border-white/15 dark:bg-blue-dark-active"
              >
                <Link
                  href={pathname}
                  locale="id"
                  aria-current={locale === "id" ? "page" : undefined}
                  onClick={() => setMobileLanguageOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-surface dark:text-white dark:hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <LanguageFlag locale="id" size={16} />
                    {content.languageNames.id}
                  </span>
                </Link>
                <Link
                  href={pathname}
                  locale="en"
                  aria-current={locale === "en" ? "page" : undefined}
                  onClick={() => setMobileLanguageOpen(false)}
                  className="block rounded-xl px-3 py-2.5 text-sm text-foreground hover:bg-surface dark:text-white dark:hover:bg-white/10"
                >
                  <span className="flex items-center gap-2">
                    <LanguageFlag locale="en" size={16} />
                    {content.languageNames.en}
                  </span>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mx-3 mt-3 grid gap-1 rounded-3xl border border-border bg-background p-3 shadow-lg lg:hidden dark:border-white/15 dark:bg-blue-dark-active">
          {navLinks.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              onClick={() => {
                setMenuOpen(false);
                setMobileLanguageOpen(false);
              }}
              className="relative rounded-xl px-4 py-3 text-sm font-medium text-blue-normal transition-colors after:absolute after:inset-x-4 after:bottom-2 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-blue-normal after:transition-transform after:duration-300 hover:after:scale-x-100 dark:text-white"
            >
              {content[key]}
            </Link>
          ))}
          <div className="border-t border-border px-4 pt-3 dark:border-white/20">
            <Link
              href="#login"
              onClick={() => setMenuOpen(false)}
              className={buttonStyles("default", "w-full")}
            >
              {content.login}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
