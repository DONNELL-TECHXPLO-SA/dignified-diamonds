import { createFileRoute, Link } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { DiamondMark } from "@/components/DiamondMark";
import { HOME_WORK_PREVIEW } from "@/lib/site-data";
import { SITE_URL, OG_IMAGE, pageMeta, pageLinks } from "@/lib/seo";
import heroImage from "@/assets/hero.jpg";
import storyImage from "@/assets/story.jpg";

const PATH = "/";
const TITLE = "Dignified Diamonds | Restoring Dignity. Empowering Girls.";
const DESCRIPTION =
  "Dignified Diamonds helps young girls access essential menstrual hygiene products so they can learn, participate and live with confidence and dignity.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: pageLinks(PATH),
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NGO",
          name: "Dignified Diamonds",
          url: SITE_URL,
          image: OG_IMAGE.url,
          slogan: "Restoring Dignity. Empowering Girls.",
          foundingDate: "2020",
          founder: { "@type": "Person", name: "Ayesha Cassim" },
          description: DESCRIPTION,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteNav />

      <main id="main-content">
        {/* HERO */}
        <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-warm pt-28 pb-16 sm:pt-36 sm:pb-24">
          <DiamondMark className="pointer-events-none absolute -top-10 -right-12 h-64 w-64 text-champagne opacity-40 sm:h-80 sm:w-80" />
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <Reveal>
              <h1 className="text-4xl leading-[1.05] text-primary sm:text-5xl lg:text-6xl">
                Restoring Dignity.
                <br />
                Empowering Girls.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Dignified Diamonds helps young girls access essential menstrual hygiene products so
                they can continue learning, participating and living their lives with confidence.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  to="/donate"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-primary-foreground shadow-soft transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift"
                >
                  Donate
                </Link>
                <Link
                  to="/get-involved"
                  className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-card px-7 py-3.5 text-base font-semibold text-primary transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-secondary"
                >
                  Get Involved
                </Link>
              </div>
            </Reveal>

            <Reveal delay={140} className="relative">
              <div className="absolute -bottom-6 -left-6 hidden h-32 w-32 rotate-12 rounded-3xl bg-rose/60 sm:block" />
              <img
                src={heroImage}
                width={1600}
                height={1200}
                fetchPriority="high"
                alt="Confident young South African schoolgirls smiling together on their school grounds"
                className="relative w-full rounded-[2rem] object-cover shadow-lift"
              />
            </Reveal>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <Reveal className="order-2 lg:order-1">
              <img
                src={storyImage}
                width={1200}
                height={1200}
                loading="lazy"
                alt="A young volunteer packing hygiene care packs for girls"
                className="w-full rounded-[2rem] object-cover shadow-soft"
              />
            </Reveal>
            <Reveal delay={100} className="order-1 lg:order-2">
              <h2 className="text-3xl text-primary sm:text-4xl">Our Story</h2>
              <p className="mt-5 leading-relaxed text-muted-foreground">
                Dignified Diamonds was founded in 2020 by Ayesha Cassim while she was a Grade 11
                learner at Hoërskool Lydenburg. What began as a desire to support girls who
                struggled to access female hygiene products grew into a wider community initiative
                supporting girls with essential menstrual hygiene products and care packs.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Our work is built around a simple belief: no girl should have to compromise her
                education, confidence or everyday life because she cannot access essential menstrual
                hygiene products.
              </p>
              <blockquote className="mt-8 flex items-center gap-4 rounded-2xl border border-champagne/70 bg-cream px-6 py-5">
                <DiamondMark className="h-8 w-8 shrink-0 text-champagne-foreground" />
                <p className="font-display text-xl text-primary">Every girl deserves dignity.</p>
              </blockquote>
              <Link
                to="/about"
                className="mt-6 inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
              >
                Read our full story →
              </Link>
            </Reveal>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="what-we-do" className="bg-cream py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl text-primary sm:text-4xl">What We Do</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We work with communities, schools, businesses and individuals to help girls access
                the menstrual hygiene products they need.
              </p>
            </Reveal>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {HOME_WORK_PREVIEW.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.title}
                  delay={i * 110}
                  className="group rounded-3xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-rose">
                    <item.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-xl text-primary">{item.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Reveal>
              ))}
            </ul>
            <Link
              to="/our-work"
              className="mt-10 inline-flex items-center text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              See all of our work →
            </Link>
          </div>
        </section>

        {/* GET INVOLVED */}
        <section id="get-involved" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl text-primary sm:text-4xl">You Can Make a Difference</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                Your support can help a girl stay in school, participate in everyday life and face
                every month with confidence and dignity.
              </p>
            </Reveal>
            <ul className="mt-12 grid gap-6 lg:grid-cols-3">
              <Reveal
                as="li"
                className="flex flex-col rounded-3xl bg-gradient-warm p-7 ring-1 ring-champagne/60"
              >
                <h3 className="text-xl text-primary">Donate</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Help provide essential menstrual hygiene products.
                </p>
                <Link
                  to="/donate"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Donate
                </Link>
              </Reveal>
              <Reveal
                as="li"
                delay={110}
                className="flex flex-col rounded-3xl bg-gradient-warm p-7 ring-1 ring-champagne/60"
              >
                <h3 className="text-xl text-primary">Partner With Us</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Businesses and organisations can help us reach more girls and communities.
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Become a Partner
                </Link>
              </Reveal>
              <Reveal
                as="li"
                delay={220}
                className="flex flex-col rounded-3xl bg-gradient-warm p-7 ring-1 ring-champagne/60"
              >
                <h3 className="text-xl text-primary">Get Involved</h3>
                <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  Donate products, organise a collection drive or volunteer your time and skills.
                </p>
                <Link
                  to="/get-involved"
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-soft"
                >
                  Get Involved
                </Link>
              </Reveal>
            </ul>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-plum py-20 sm:py-28">
          <DiamondMark className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 text-primary-foreground opacity-10" />
          <DiamondMark className="pointer-events-none absolute -top-14 right-6 h-52 w-52 text-primary-foreground opacity-10" />
          <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
            <h2 className="text-3xl text-primary-foreground sm:text-4xl lg:text-5xl">
              Together, We Can Restore Dignity.
            </h2>
            <p className="mx-auto mt-5 max-w-xl leading-relaxed text-primary-foreground/80">
              A small contribution can help remove a major barrier from a young girl&apos;s
              education and everyday life.
            </p>
            <Link
              to="/donate"
              className="mt-9 inline-flex items-center justify-center rounded-full bg-champagne px-8 py-4 text-base font-semibold text-champagne-foreground transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-lift"
            >
              Support Dignified Diamonds
            </Link>
          </Reveal>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
