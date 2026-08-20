import { UserRound } from "lucide-react";
import { DiamondMark } from "./DiamondMark";

export function FounderPortrait() {
  return (
    <div className="relative">
      <div className="absolute -top-6 -right-6 hidden h-28 w-28 rotate-12 rounded-3xl bg-rose/60 sm:block" />
      <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 rounded-[2rem] bg-gradient-warm text-center shadow-soft ring-1 ring-champagne/60">
        <span className="inline-flex h-24 w-24 items-center justify-center rounded-full bg-card text-champagne-foreground shadow-soft">
          <UserRound className="h-11 w-11" aria-hidden="true" />
        </span>
        <p className="px-8 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Official photograph coming soon
        </p>
        <DiamondMark className="absolute bottom-6 h-6 w-6 text-champagne-foreground/60" />
      </div>
    </div>
  );
}
