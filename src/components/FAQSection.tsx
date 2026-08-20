import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Reveal } from "./Reveal";
import { FAQS } from "@/lib/site-data";

export function FAQSection() {
  return (
    <section aria-labelledby="faq-heading" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <Reveal className="text-center">
          <h2 id="faq-heading" className="text-3xl text-primary sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Answers to the questions we hear most often.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10 rounded-3xl border border-border bg-card px-6 sm:px-8">
          <Accordion type="single" collapsible>
            {FAQS.map((faq, i) => (
              <AccordionItem key={faq.question} value={`faq-${i}`}>
                <AccordionTrigger className="py-5 text-base font-semibold text-primary hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
