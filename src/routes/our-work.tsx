import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { OUR_WORK_PROGRAMS } from "@/lib/site-data";
import { pageMeta, pageLinks, breadcrumbSchema } from "@/lib/seo";

const PATH = "/our-work";
const TITLE = "Our Work & Programmes | Dignified Diamonds";
const DESCRIPTION =
  "From hygiene care packs to school support and community initiatives, Dignified Diamonds makes menstrual hygiene products more accessible to girls who need them.";

export const Route = createFileRoute("/our-work")({
  component: OurWorkPage,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: pageLinks(PATH),
    scripts: [breadcrumbSchema("Our Work", PATH)],
  }),
});

function OurWorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main id="main-content">
        <PageHero eyebrow="What We Do" title="Turning Support Into Action">
          From hygiene care packs to school support and community initiatives, Dignified Diamonds
          works to make menstrual hygiene products more accessible to girls who need them.
        </PageHero>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <ul className="grid gap-6 lg:grid-cols-2">
              {OUR_WORK_PROGRAMS.map((program, i) => (
                <Reveal
                  as="li"
                  key={program.title}
                  delay={i * 100}
                  className="flex flex-col rounded-3xl border border-border bg-card p-8"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <program.icon className="h-5 w-5" weight="duotone" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl text-primary sm:text-2xl">{program.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">
                    {program.body}
                  </p>
                  {"cta" in program && program.cta && (
                    <Link
                      to={program.ctaHref}
                      className="mt-6 inline-flex items-center justify-center self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft"
                    >
                      {program.cta}
                    </Link>
                  )}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <FAQSection />

        <section className="relative overflow-hidden bg-gradient-plum py-20 sm:py-28">
          <Reveal className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="text-3xl text-primary-foreground sm:text-4xl">
              See the Difference This Work Makes
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-primary-foreground/80">
              Explore how our programmes translate into real impact for girls, schools and
              communities.
            </p>
            <Link
              to="/impact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-champagne px-8 py-4 text-base font-semibold text-champagne-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              View Our Impact
            </Link>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
