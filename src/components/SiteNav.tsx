import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { DiamondMark } from "./DiamondMark";

const links = [
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Get Involved", href: "#get-involved" },
  { label: "Contact", href: "#contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-background/90 py-2 backdrop-blur-xl"
          : "border-transparent bg-background/40 py-4 backdrop-blur-sm"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5 text-primary">
          <DiamondMark className="h-7 w-7 text-champagne-foreground" />
          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            Dignified Diamonds
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#get-involved"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Donate
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="mx-4 mt-3 rounded-2xl border border-border bg-card p-4 shadow-soft md:hidden">
          <ul className="flex flex-col">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#get-involved"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground"
          >
            Donate
          </a>
        </div>
      )}
    </header>
  );
}
