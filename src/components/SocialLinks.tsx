import { Instagram, Facebook, Linkedin, MessageCircle } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site-data";

function TikTokIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.6 5.82c-.85-.93-1.32-2.15-1.32-3.42h-3.1v13.44a3.13 3.13 0 1 1-2.19-2.98V9.7a6.2 6.2 0 1 0 5.3 6.14V9.4a8.16 8.16 0 0 0 4.76 1.52V7.8a5.53 5.53 0 0 1-3.45-1.98z" />
    </svg>
  );
}

const ICONS: Record<string, typeof Instagram> = {
  Instagram,
  Facebook,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
};

export function SocialLinks({ className = "" }: { className?: string }) {
  const active = SOCIAL_LINKS.filter((s) => s.href);
  if (active.length === 0) return null;

  return (
    <ul className={`flex items-center gap-3 ${className}`}>
      {active.map((s) => {
        const Icon = s.platform === "TikTok" ? TikTokIcon : (ICONS[s.platform] ?? Instagram);
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
