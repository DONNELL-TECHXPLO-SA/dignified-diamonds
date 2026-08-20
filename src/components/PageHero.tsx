import type { ReactNode } from "react";
import { Reveal } from "./Reveal";
import { DiamondMark } from "./DiamondMark";

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-warm pt-32 pb-16 sm:pt-40 sm:pb-20">
      <DiamondMark className="pointer-events-none absolute -top-10 -right-12 h-64 w-64 text-champagne opacity-40 sm:h-80 sm:w-80" />
      <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-champagne bg-card/70 px-4 py-1.5 text-xs font-semibold tracking-widest text-champagne-foreground uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-6 text-4xl leading-[1.05] text-primary sm:text-5xl">{title}</h1>
        {children && (
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-muted-foreground sm:text-lg">
            {children}
          </p>
        )}
      </Reveal>
    </section>
  );
}
