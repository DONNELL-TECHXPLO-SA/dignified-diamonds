import { createFileRoute } from "@tanstack/react-router";

import { SiteNav } from "@/components/SiteNav";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";
import { pageMeta, pageLinks, breadcrumbSchema } from "@/lib/seo";

const PATH = "/contact";
const TITLE = "Contact Dignified Diamonds | Donate, Partner or Volunteer";
const DESCRIPTION =
  "Have a question, want to donate, or interested in partnering with Dignified Diamonds? We'd love to hear from you.";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: pageMeta({ title: TITLE, description: DESCRIPTION, path: PATH }),
    links: pageLinks(PATH),
    scripts: [breadcrumbSchema("Contact", PATH)],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />

      <main id="main-content" className="py-32 sm:py-40">
        <div className="mx-auto max-w-2xl px-5 sm:px-8">
          <Reveal className="text-center">
            <h1 className="text-4xl leading-[1.05] text-primary sm:text-5xl">
              Let&apos;s Make a Difference Together
            </h1>
            <p className="mt-5 leading-relaxed text-muted-foreground sm:text-lg">
              Have a question, want to donate, or interested in partnering with Dignified Diamonds?
              We&apos;d love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10">
            <ContactForm />
          </Reveal>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
