import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { PageHero } from "@/components/PageHero";
import { DiamondMark } from "@/components/DiamondMark";
import { FounderPortrait } from "@/components/FounderPortrait";
import { TrustSection } from "@/components/TrustSection";
import { pageMeta, pageLinks, breadcrumbSchema } from "@/lib/seo";

const PATH = "/about";
const TITLE = "About Dignified Diamonds | Our Story & Mission";
const DESCRIPTION =
  "Dignified Diamonds began as one young person's desire to help and has grown into a community initiative supporting girls' access to menstrual hygiene products.";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: pageLinks(PATH),
    scripts: [breadcrumbSchema("About", PATH)],
  }),
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main id="main-content">
        <PageHero eyebrow="Our Story" title="A Movement Built Around Dignity">
          Dignified Diamonds began with one young person&apos;s desire to make a difference and has
          grown into a community-focused initiative supporting girls with access to essential
          menstrual hygiene products.
        </PageHero>

        {/* OUR STORY */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <h2 className="text-3xl text-primary sm:text-4xl">Our Story</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
                Dignified Diamonds was founded in 2020 by Ayesha Cassim while she was a Grade 11
                learner at Hoërskool Lydenburg. What began as an effort to support girls who
                struggled to access female hygiene products grew into a wider initiative focused on
                menstrual hygiene, dignity and access.
              </p>
            </Reveal>
          </div>
        </section>

        {/* FOUNDER */}
        <section id="founder" className="bg-cream py-16 sm:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <Reveal>
              <FounderPortrait />
            </Reveal>
            <Reveal delay={100}>
              <span className="text-xs font-semibold tracking-widest text-champagne-foreground uppercase">
                Founder
              </span>
              <h2 className="mt-3 text-3xl text-primary sm:text-4xl">Ayesha Cassim</h2>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                Founder, Dignified Diamonds
              </p>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Ayesha founded Dignified Diamonds in 2020 while she was still a Grade 11 learner —
                turning a personal desire to help girls in her community into an initiative that has
                grown to focus on menstrual hygiene, dignity and access for girls across South
                Africa.
              </p>
            </Reveal>
          </div>
        </section>

        {/* MISSION */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <Reveal className="rounded-3xl bg-gradient-warm p-8 ring-1 ring-champagne/60 sm:p-10">
                <DiamondMark className="h-8 w-8 text-champagne-foreground" />
                <h2 className="mt-5 text-2xl text-primary sm:text-3xl">Our Mission</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  To ease the hardship and stress experienced by young girls who lack access to
                  menstrual hygiene products by providing essential hygiene care and support that
                  enables them to continue their education and participate fully in everyday life.
                </p>
              </Reveal>
              <Reveal delay={100} className="rounded-3xl bg-gradient-plum p-8 sm:p-10">
                <DiamondMark className="h-8 w-8 text-primary-foreground opacity-80" />
                <h2 className="mt-5 text-2xl text-primary-foreground sm:text-3xl">Our Vision</h2>
                <p className="mt-4 leading-relaxed text-primary-foreground/80">
                  A South Africa where no girl is held back from education, opportunity or everyday
                  life because she cannot access menstrual hygiene products.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <TrustSection />

        {/* CTA */}
        <section className="py-16 sm:py-24">
          <Reveal className="mx-auto max-w-2xl px-5 text-center sm:px-8">
            <h2 className="text-3xl text-primary sm:text-4xl">Be Part of the Movement</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Discover how Dignified Diamonds turns support into action, or find the way you'd like
              to get involved.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                to="/our-work"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift"
              >
                See Our Work
              </Link>
              <Link
                to="/get-involved"
                className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-card px-7 py-3.5 text-base font-semibold text-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-secondary"
              >
                Get Involved
              </Link>
            </div>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
