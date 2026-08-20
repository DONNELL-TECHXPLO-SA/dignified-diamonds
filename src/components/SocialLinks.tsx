import {
  InstagramLogo,
  FacebookLogo,
  LinkedinLogo,
  WhatsappLogo,
  TiktokLogo,
} from "@phosphor-icons/react";
import { SOCIAL_LINKS } from "@/lib/site-data";

const ICONS: Record<string, typeof InstagramLogo> = {
  Instagram: InstagramLogo,
  Facebook: FacebookLogo,
  TikTok: TiktokLogo,
  LinkedIn: LinkedinLogo,
  WhatsApp: WhatsappLogo,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  const active = SOCIAL_LINKS.filter((s) => s.href);
  if (active.length === 0) return null;

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {active.map((s) => {
        const Icon = ICONS[s.platform] ?? InstagramLogo;
        return (
          <li key={s.platform}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.platform}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
            >
              <Icon className="h-4.5 w-4.5" aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
