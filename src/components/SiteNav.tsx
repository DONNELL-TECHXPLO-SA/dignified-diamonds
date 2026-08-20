import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { DiamondMark } from "./DiamondMark";
import { NAV_LINKS } from "@/lib/site-data";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border/70 bg-background/90 py-2 backdrop-blur-xl"
          : "border-transparent bg-background/40 py-4 backdrop-blur-sm"
      }`}
    >
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
      >
        Skip to content
      </a>

      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
      >
        <Link to="/" className="flex items-center gap-2.5 text-primary">
          <DiamondMark className="h-7 w-7 text-champagne-foreground" />
          <span className="font-display text-lg font-semibold tracking-tight sm:text-xl">
            Dignified Diamonds
          </span>
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                activeOptions={{ exact: true }}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary data-[status=active]:text-primary"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link
            to="/donate"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform duration-300 ease-out hover:-translate-y-0.5 md:inline-flex"
          >
            Donate
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-primary transition-transform duration-200 active:scale-90 md:hidden"
          >
            <span className="relative block h-5 w-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ease-out ${open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ease-out ${open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`grid overflow-hidden px-4 transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "mt-3 grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div
            id="mobile-menu"
            inert={!open}
            className={`rounded-2xl border border-border bg-card p-4 shadow-soft transition-all duration-300 ease-out ${
              open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
            }`}
          >
            <ul className="flex flex-col">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    activeOptions={{ exact: true }}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted data-[status=active]:bg-muted data-[status=active]:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/donate"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-primary px-5 py-3 text-center text-base font-semibold text-primary-foreground transition-transform duration-300 ease-out active:scale-95"
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
