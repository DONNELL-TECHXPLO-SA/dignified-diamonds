import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { IMPACT_STORIES } from "@/lib/site-data";

export function ImpactStories() {
  const placeholderCount = 3;

  return (
    <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {IMPACT_STORIES.length > 0
        ? IMPACT_STORIES.map((story, i) => (
            <Reveal
              as="li"
              key={story.name}
              delay={i * 110}
              className="flex flex-col rounded-3xl border border-border bg-card p-7"
            >
              <Quote className="h-6 w-6 text-champagne-foreground" aria-hidden="true" />
              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">{story.quote}</p>
              <p className="mt-5 text-sm font-semibold text-primary">{story.name}</p>
              <p className="text-xs text-muted-foreground">{story.role}</p>
            </Reveal>
          ))
        : Array.from({ length: placeholderCount }).map((_, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 110}
              className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-border bg-cream p-7 text-center"
            >
              <Quote className="h-6 w-6 text-champagne-foreground" aria-hidden="true" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Real stories from the girls, schools and communities we support will be shared here.
              </p>
            </Reveal>
          ))}
    </ul>
  );
}
