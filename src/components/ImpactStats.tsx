import { Reveal } from "./Reveal";
import { IMPACT_STATS } from "@/lib/site-data";

export function ImpactStats() {
  return (
    <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {IMPACT_STATS.map((stat, i) => (
        <Reveal
          as="li"
          key={stat.label}
          delay={i * 100}
          className="rounded-3xl border border-border bg-card p-7 text-center"
        >
          <p className="font-display text-4xl font-semibold text-primary sm:text-5xl">
            {stat.value}
          </p>
          <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
        </Reveal>
      ))}
    </ul>
  );
}
