import { getTranslations } from "next-intl/server";
import { SectionHeading } from "@/components/sections/section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function FaqSection() {
  const t = await getTranslations("Landing.Faq");
  const items = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <section
      id="faq"
      className="scroll-mt-28 bg-background px-6 py-20 sm:px-10 sm:py-28 lg:px-20"
    >
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <Accordion
          type="single"
          collapsible
          className="mt-10 rounded-3xl border border-border bg-background px-6 sm:px-8"
        >
          {items.map((item, index) => (
            <AccordionItem key={item.question} value={`faq-${index}`}>
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                {item.question}
              </AccordionTrigger>
              <AccordionContent
                forceMount
                className="max-w-3xl pb-5 text-sm leading-7 text-muted"
              >
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
