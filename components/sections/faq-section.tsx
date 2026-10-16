import { getLocale } from "next-intl/server";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqContent } from "@/data/faq";
import type { LandingLocale } from "@/data/landing";

export async function FaqSection() {
  const locale = (await getLocale()) as LandingLocale;
  const content = faqContent[locale];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.questions.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative isolate overflow-hidden bg-background py-40"
    >
      <div
        aria-hidden="true"
        className="faq-section-glow pointer-events-none absolute inset-0 z-0"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="page-container relative z-10">
        <header className="mx-auto max-w-3xl text-center">
          <Badge variant="blue" className="mb-7 uppercase tracking-wide">
            {content.eyebrow}
          </Badge>
          <h2
            id="faq-title"
            className="text-3xl font-semibold leading-tight tracking-tight text-foreground sm:text-[48px]"
          >
            {content.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {content.helpText}{" "}
            <a
              href="#contact"
              className="font-medium text-blue-dark hover:text-blue-normal dark:text-blue-light-active dark:hover:text-white"
            >
              {content.contactLabel} <span aria-hidden="true">{"\u2192"}</span>
            </a>
          </p>
        </header>

        <Accordion
          type="single"
          collapsible
          className="mx-auto mt-8 w-full max-w-3xl space-y-3 pb-1"
        >
          {content.questions.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index + 1}`}
              className="overflow-hidden rounded-2xl border border-blue-darker/60 bg-background/70 px-5 last:border-b dark:border-blue-light-active/45 dark:bg-blue-darker/35 sm:px-6"
            >
              <AccordionTrigger className="py-4 text-left text-sm font-medium text-blue-dark hover:no-underline sm:text-base dark:text-blue-light-active [&>svg]:text-blue-dark dark:[&>svg]:text-blue-light-active">
                {question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-6 text-blue-dark dark:text-blue-light-active sm:text-base sm:leading-[1.55]">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
