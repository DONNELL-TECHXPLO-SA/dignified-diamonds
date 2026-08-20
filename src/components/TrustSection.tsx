import { Reveal } from "./Reveal";
import { TRUST_ITEMS } from "@/lib/site-data";

export function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <h2 id="trust-heading" className="text-3xl text-primary sm:text-4xl">
            Building Trust Through Transparency
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            As Dignified Diamonds grows, we're committed to sharing verified information about how
            we operate. This space will be updated as official documentation becomes available.
          </p>
        </Reveal>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_ITEMS.map((item, i) => (
            <Reveal
              as="li"
              key={item.label}
              delay={i * 80}
              className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
            >
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary">
                <item.icon className="h-5 w-5" weight="duotone" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">{item.label}</p>
                <p className="text-xs text-muted-foreground">Coming soon</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
