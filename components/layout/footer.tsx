import { getLocale } from "next-intl/server";
import {
  ArrowRight,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { buttonStyles } from "@/components/ui/button";
import { landingContent, type LandingLocale } from "@/data/landing";
import { Link } from "@/i18n/navigation";

const navLinks = [
  { key: "product", href: "#product" },
  { key: "solutions", href: "#problem-solutions" },
  { key: "features", href: "#features" },
  { key: "faq", href: "#faq" },
] as const;

const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Instagram", Icon: Instagram },
  { label: "YouTube", Icon: Youtube },
  { label: "Twitter", Icon: Twitter },
];

export async function Footer() {
  const locale = (await getLocale()) as LandingLocale;
  const content = landingContent[locale];
  const footer = content.footer;

  return (
    <footer className="rounded-t-3xl bg-blue-dark-active text-white">
      <div className="page-container pb-6 pt-20 sm:pt-24">
        <section className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {footer.title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-blue-light sm:text-base">
            {footer.description}
          </p>
          <Link
            href="#contact"
            className={buttonStyles(
              "secondary",
              "mt-6 bg-white text-blue-normal hover:bg-blue-light dark:bg-white dark:text-blue-normal dark:hover:bg-blue-light",
            )}
          >
            {footer.requestDemo} <ArrowRight aria-hidden="true" size={17} />
          </Link>
        </section>

        <div className="mt-20 flex flex-col items-center justify-between gap-8 border-b border-border pb-12 lg:flex-row">
          <Link
            href="/"
            aria-label="Newstensity"
            className="rounded-2xl bg-white px-5 py-3 text-2xl font-semibold tracking-tight text-blue-normal"
          >
            newstensity
          </Link>
          <nav
            aria-label={footer.navigation}
            className="flex flex-wrap justify-center gap-x-8 gap-y-3"
          >
            {navLinks.map(({ key, href }) => (
              <Link
                key={key}
                href={href}
                className="text-sm text-blue-light transition-colors hover:text-white"
              >
                {content.navigation[key]}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {socials.map(({ label, Icon }) => (
              <a
                key={label}
                href="#social"
                aria-label={label}
                className="inline-flex size-10 items-center justify-center rounded-full border border-blue-light/40 text-blue-light transition-colors hover:bg-white hover:text-blue-dark-active"
              >
                <Icon aria-hidden="true" size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col-reverse items-center justify-between gap-4 pt-5 text-xs text-blue-light sm:flex-row sm:text-sm">
          <p>
            {footer.copyrightLabel} {new Date().getFullYear()} Newstensity.{" "}
            {footer.copyright}
          </p>
          <div className="flex gap-6">
            <Link href="#terms" className="transition-colors hover:text-white">
              {footer.terms}
            </Link>
            <Link href="#privacy" className="transition-colors hover:text-white">
              {footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
