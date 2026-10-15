import { getLocale } from "next-intl/server";
import { ChevronDown, Globe2, Newspaper, Radio } from "lucide-react";
import type { InputHTMLAttributes, ReactNode } from "react";
import { ContactSourceSelect } from "@/components/sections/contact-source-select";
import { contactContent } from "@/data/contact";
import type { LandingLocale } from "@/data/landing";

function DashboardPreview({
  content,
}: {
  content: (typeof contactContent)[LandingLocale]["dashboard"];
}) {
  return (
    <div
      aria-label={content.title}
      className="contact-dashboard mt-12 rounded-2xl p-4 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-sm font-semibold text-blue-darker sm:text-base">
            {content.title}
          </h3>
          <p className="mt-1 text-[10px] text-blue-dark sm:text-xs">
            {content.subtitle}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <span className="rounded-full border border-emerald-400 px-3 py-1 text-[9px] text-emerald-700 sm:text-[10px]">
            {content.live}
          </span>
          <span className="rounded-full border border-blue-light-active bg-white px-2.5 py-1 text-[9px] text-blue-dark sm:text-[10px]">
            {content.period} <ChevronDown className="ml-1 inline size-3" />
          </span>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
        <DashboardMetric label={content.mentions} value="12,482" note="+18%" foot={content.yesterday} />
        <DashboardMetric label={content.sources} value="542" note="4 new" foot={content.online} />
        <DashboardMetric label={content.sentiment} value={`68% ${content.positive}`} note="+4 pts" foot={content.netScore} />
        <DashboardMetric label={content.alerts} value={`3 ${content.high}`} note="1 new" foot={content.needsReview} />
      </div>

      <div className="mt-2 grid grid-cols-[1.2fr_1fr] gap-2">
        <div className="rounded-xl border border-blue-light-active bg-white p-2.5">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[9px] font-medium text-blue-dark sm:text-[10px]">
              {content.trend}
            </p>
            <span className="rounded-full bg-blue-light-active px-2 py-0.5 text-[8px] text-blue-dark">
              7-day view
            </span>
          </div>
          <svg
            aria-hidden="true"
            viewBox="0 0 300 92"
            className="mt-2 h-16 w-full sm:h-19"
            fill="none"
          >
            <path d="M4 20H296M4 48H296M4 76H296" stroke="#e2e8f0" />
            <path
              d="M8 76C32 76 35 61 58 62S92 39 115 42s30 15 53 6 26-22 51-18 38-18 69-16"
              stroke="#35a6e5"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {[8, 58, 115, 168, 219, 270].map((x, index) => (
              <circle
                key={x}
                cx={x}
                cy={[76, 62, 42, 48, 30, 18][index]}
                r="3"
                fill="#35a6e5"
              />
            ))}
          </svg>
          <div className="flex justify-between text-[8px] text-blue-dark">
            {"Mon Tue Wed Thu Fri Sat Sun".split(" ").map((day) => (
              <span key={day}>{day}</span>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-blue-light-active bg-white p-2.5">
          <div className="flex items-center justify-between">
            <p className="text-[9px] font-medium text-blue-dark sm:text-[10px]">
              {content.topSources}
            </p>
            <span className="rounded-full bg-blue-light-active px-2 py-0.5 text-[8px] text-blue-dark">
              24h
            </span>
          </div>
          <div className="mt-2.5 grid gap-2 text-[9px] text-blue-darker sm:text-[10px]">
            <DashboardSource icon={<Newspaper />} name="Republika" value="1,240" />
            <DashboardSource icon={<Radio />} name="Detik.com" value="1,080" />
            <DashboardSource icon={<Globe2 />} name="Social media" value="840" />
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMetric({
  label,
  value,
  note,
  foot,
}: {
  label: string;
  value: string;
  note: string;
  foot: string;
}) {
  return (
    <div className="rounded-xl border border-blue-light-active bg-white p-2 sm:p-2.5">
      <p className="text-[8px] text-blue-dark sm:text-[9px]">{label}</p>
      <p className="mt-1 truncate text-xs font-semibold text-blue-darker sm:text-sm">
        {value}
      </p>
      <p className="mt-1 flex items-center gap-1 truncate text-[7px] text-blue-dark sm:text-[8px]">
        <span className="rounded-full bg-blue-light-active px-1.5 py-0.5">
          {note}
        </span>
        {foot}
      </p>
    </div>
  );
}

function DashboardSource({
  icon,
  name,
  value,
}: {
  icon: ReactNode;
  name: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="inline-flex size-5 items-center justify-center rounded-md bg-blue-light-active text-blue-dark [&>svg]:size-3">
        {icon}
      </span>
      <span className="min-w-0 flex-1 truncate">{name}</span>
      <span className="text-blue-dark">{value}</span>
    </div>
  );
}

export async function ContactFormSection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = contactContent[locale];

  return (
    <section
      id="contact"
      aria-labelledby="contact-form-title"
      className="bg-background py-20 sm:py-40"
    >
      <div className="page-container">
        <div className="contact-panel grid gap-12 rounded-3xl p-6 sm:p-10 lg:grid-cols-2 lg:items-center lg:gap-14 lg:p-12">
          <div>
            <h2
              id="contact-form-title"
              className="text-3xl font-medium leading-tight text-white sm:text-[48px]"
            >
              {content.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-7 text-white/90">
              {content.description}
            </p>
            <DashboardPreview content={content.dashboard} />
          </div>

          <form className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
            <ContactInput
              id="contact-name"
              name="name"
              label={content.fields.name}
              placeholder={content.placeholders.name}
              autoComplete="name"
              required
            />
            <ContactInput
              id="contact-email"
              name="email"
              label={content.fields.email}
              placeholder={content.placeholders.email}
              type="email"
              autoComplete="email"
              required
            />
            <ContactInput
              id="contact-phone"
              name="phone"
              label={content.fields.phone}
              placeholder={content.placeholders.phone}
              type="tel"
              autoComplete="tel"
              required
            />
            <ContactInput
              id="contact-company"
              name="company"
              label={content.fields.company}
              placeholder={content.placeholders.company}
              autoComplete="organization"
              required
            />

            <div className="grid gap-2 text-sm font-medium text-white sm:col-span-2">
              <span id="contact-source-label">{content.fields.source}</span>
              <ContactSourceSelect
                name="source"
                placeholder={content.placeholders.source}
                options={content.sources}
              />
            </div>

            <label className="grid gap-2 text-sm font-medium text-white sm:col-span-2">
              <span>{content.fields.message}</span>
              <textarea
                name="message"
                rows={5}
                className="contact-form-control min-h-44 w-full resize-y rounded-3xl border px-4 py-3 text-sm font-normal outline-none transition focus:border-white focus:ring-2 focus:ring-white/25"
              />
            </label>

            <button
              type="button"
              className="mt-1 h-11 rounded-full bg-white px-6 text-sm font-semibold text-blue-normal transition-colors hover:bg-blue-light sm:col-span-2"
            >
              {content.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function ContactInput({
  id,
  label,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <label
      htmlFor={id}
      className="grid gap-2 text-sm font-medium text-white"
    >
      <span>{label}</span>
      <input
        id={id}
        className="contact-form-control h-11 w-full rounded-full border px-4 text-sm font-normal outline-none transition placeholder:text-white/75 focus:border-white focus:ring-2 focus:ring-white/25"
        {...props}
      />
    </label>
  );
}
