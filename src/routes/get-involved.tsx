import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { FAQSection } from "@/components/FAQSection";
import { GET_INVOLVED_WAYS } from "@/lib/site-data";
import { pageMeta, pageLinks, breadcrumbSchema } from "@/lib/seo";

const PATH = "/get-involved";
const TITLE = "Get Involved | Support Dignified Diamonds";
const DESCRIPTION =
  "Whether you donate products, volunteer your time or partner with us, your support can help restore dignity to girls who need it.";

export const Route = createFileRoute("/get-involved")({
  component: GetInvolvedPage,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: pageLinks(PATH),
    scripts: [breadcrumbSchema("Get Involved", PATH)],
  }),
});

function GetInvolvedPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main id="main-content">
        <PageHero eyebrow="Get Involved" title="There Are Many Ways to Make a Difference">
          Whether you donate products, volunteer your time or partner with us, your support can help
          restore dignity to girls who need it.
        </PageHero>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {GET_INVOLVED_WAYS.map((way, i) => (
                <Reveal
                  as="li"
                  key={way.title}
                  delay={i * 90}
                  className="flex flex-col rounded-3xl bg-gradient-warm p-7 ring-1 ring-champagne/60"
                >
                  <way.icon className="h-6 w-6 text-champagne-foreground" aria-hidden="true" />
                  <h2 className="mt-4 text-xl text-primary">{way.title}</h2>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {way.body}
                  </p>
                  <Link
                    to={way.ctaHref}
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    {way.cta}
                  </Link>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>

        <FAQSection />
      </main>

      <SiteFooter />
    </div>
  );
}
