import { Link } from "@tanstack/react-router";
import { DiamondMark } from "./DiamondMark";
import { SocialLinks } from "./SocialLinks";
import { NAV_LINKS, CONTACT_INFO } from "@/lib/site-data";

export function SiteFooter() {
  const hasContactDetails = CONTACT_INFO.email || CONTACT_INFO.phone || CONTACT_INFO.location;

  return (
    <footer className="bg-cream py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-2.5 text-primary">
              <DiamondMark className="h-7 w-7 text-champagne-foreground" />
              <span className="font-display text-lg font-semibold">Dignified Diamonds</span>
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Restoring Dignity. Empowering Girls.
            </p>
            <SocialLinks className="mt-5" />
          </div>

          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/donate"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Donate
                </Link>
              </li>
            </ul>

            {hasContactDetails && (
              <ul className="mt-6 space-y-1.5 text-sm text-muted-foreground">
                {CONTACT_INFO.email && <li>{CONTACT_INFO.email}</li>}
                {CONTACT_INFO.phone && <li>{CONTACT_INFO.phone}</li>}
                {CONTACT_INFO.location && <li>{CONTACT_INFO.location}</li>}
              </ul>
            )}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Dignified Diamonds. All rights reserved.</p>
          <p>
            Developed by{" "}
            <a
              href="https://techxplo.co.za"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-foreground transition-colors hover:text-primary"
            >
              TechXplo
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
