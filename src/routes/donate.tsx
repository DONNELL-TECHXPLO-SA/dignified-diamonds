import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { DONATE_OPTIONS } from "@/lib/site-data";
import { pageMeta, pageLinks, breadcrumbSchema } from "@/lib/seo";

const PATH = "/donate";
const TITLE = "Donate | Support Dignified Diamonds";
const DESCRIPTION =
  "Support Dignified Diamonds by donating products, making a financial contribution, or partnering through corporate sponsorship.";

export const Route = createFileRoute("/donate")({
  component: DonatePage,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: pageLinks(PATH),
    scripts: [breadcrumbSchema("Donate", PATH)],
  }),
});

function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main id="main-content">
        <PageHero eyebrow="Donate" title="Your Support Restores Dignity">
          Choose the way you'd like to help — every option makes a real difference to a girl who
          needs support.
        </PageHero>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <ul className="grid gap-6 lg:grid-cols-3">
              {DONATE_OPTIONS.map((option, i) => (
                <Reveal
                  as="li"
                  key={option.title}
                  delay={i * 100}
                  className="flex flex-col rounded-3xl border border-border bg-card p-8 text-center"
                >
                  <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary">
                    <option.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h2 className="mt-5 text-xl text-primary sm:text-2xl">{option.title}</h2>
                  <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{option.body}</p>
                  <Link
                    to="/contact"
                    className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    {option.cta}
                  </Link>
                </Reveal>
              ))}
            </ul>
            <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
              Online payment processing is coming soon. For now, every option above routes through
              our contact form so our team can coordinate with you directly.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
