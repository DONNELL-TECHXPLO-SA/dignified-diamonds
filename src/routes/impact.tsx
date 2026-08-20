import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, UsersThree } from "@phosphor-icons/react";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { ImpactStats } from "@/components/ImpactStats";
import { ImpactStories } from "@/components/ImpactStories";
import { pageMeta, pageLinks, breadcrumbSchema } from "@/lib/seo";

const PATH = "/impact";
const TITLE = "Our Impact & Reach | Dignified Diamonds";
const DESCRIPTION =
  "See how Dignified Diamonds' hygiene care packs help girls continue learning, participating and living everyday life with confidence and dignity.";

export const Route = createFileRoute("/impact")({
  component: ImpactPage,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: pageLinks(PATH),
    scripts: [breadcrumbSchema("Impact", PATH)],
  }),
});

function ImpactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main id="main-content">
        <PageHero eyebrow="Our Impact" title="Every Pack Represents More Than Products">
          It represents a girl who can continue learning, participating and living her life with
          greater confidence and dignity.
        </PageHero>

        {/* STATS */}
        <section aria-labelledby="stats-heading" className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <h2 id="stats-heading" className="text-3xl text-primary sm:text-4xl">
                Our Reach So Far
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Verified figures will appear here as Dignified Diamonds formalises its impact
                reporting.
              </p>
            </Reveal>
            <ImpactStats />
          </div>
        </section>

        {/* STORIES */}
        <section aria-labelledby="stories-heading" className="bg-cream py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <h2 id="stories-heading" className="text-3xl text-primary sm:text-4xl">
                Impact Stories
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Real stories from the girls, schools and communities we support.
              </p>
            </Reveal>
            <ImpactStories />
          </div>
        </section>

        {/* SCHOOL & COMMUNITY IMPACT */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal className="rounded-3xl border border-border bg-card p-8 sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <GraduationCap className="h-5 w-5" weight="duotone" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl text-primary sm:text-3xl">
                  Supporting School Attendance
                </h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Access to menstrual hygiene products can help remove one of the barriers girls
                  face in getting to school and staying engaged once they're there. Our work focuses
                  on making that access more reliable for the girls we support.
                </p>
              </Reveal>
              <Reveal delay={100} className="rounded-3xl border border-border bg-card p-8 sm:p-10">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <UsersThree className="h-5 w-5" weight="duotone" aria-hidden="true" />
                </span>
                <h2 className="mt-5 text-2xl text-primary sm:text-3xl">Community Involvement</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Schools, businesses and individuals play a role in this work by donating products,
                  hosting collection drives and partnering with us — strengthening the support
                  network around every girl we reach.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden bg-gradient-plum py-20 sm:py-28">
          <Reveal className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="text-3xl text-primary-foreground sm:text-4xl">
              Help Us Grow This Impact
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-relaxed text-primary-foreground/80">
              Every contribution — big or small — helps more girls access the support they need.
            </p>
            <Link
              to="/get-involved"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-champagne px-8 py-4 text-base font-semibold text-champagne-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              Get Involved
            </Link>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
