import heroImage from "@/assets/hero.jpg";

// Confirmed production domain — do not change without sign-off from the
// site owner. All canonical / Open Graph / structured-data URLs are derived
// from this single constant so the domain only ever needs to be updated in
// one place.
export const SITE_URL = "https://www.dignifieddiamonds.com";

/**
 * Resolves a site-relative path (e.g. "/about") to an absolute URL on the
 * confirmed production domain. Always use this for canonical, og:url and
 * structured-data URLs instead of hand-typing the domain.
 */
export function absoluteUrl(path: string): string {
  if (path === "/") return `${SITE_URL}/`;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// No dedicated Open Graph/Twitter share graphic exists yet. Until Dignified
// Diamonds supplies one, the site hero photo is reused as a sensible,
// real-photo fallback for every page rather than leaving og:image unset.
export const OG_IMAGE = {
  url: absoluteUrl(heroImage),
  width: 1600,
  height: 1200,
  alt: "Confident young South African schoolgirls smiling together on their school grounds",
} as const;

/**
 * Builds the shared <meta> tag set (title, description, Open Graph and
 * Twitter tags) for a route's `head()`. Every route should call this so
 * canonical/OG URLs stay absolute and Twitter tags stay in sync with title
 * and description automatically.
 */
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Array<{ title?: string; name?: string; property?: string; content?: string }> {
  const url = absoluteUrl(path);
  return [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE.url },
    { property: "og:image:width", content: String(OG_IMAGE.width) },
    { property: "og:image:height", content: String(OG_IMAGE.height) },
    { property: "og:image:alt", content: OG_IMAGE.alt },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE.url },
    { name: "twitter:image:alt", content: OG_IMAGE.alt },
  ];
}

/** Builds the self-referencing canonical `<link>` for a route's `head()`. */
export function pageLinks(path: string) {
  return [{ rel: "canonical", href: absoluteUrl(path) }];
}

/**
 * Builds a two-level BreadcrumbList JSON-LD script (Home > Page) for a
 * route's `head()` scripts array. Not used on the homepage itself since a
 * single-item trail adds no value there.
 */
export function breadcrumbSchema(name: string, path: string) {
  return {
    type: "application/ld+json" as const,
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name, item: absoluteUrl(path) },
      ],
    }),
  };
}

/**
 * Generates FAQPage structured data from the same FAQS array rendered by
 * FAQSection, so the schema can never drift out of sync with the visible
 * questions/answers.
 */
export function faqSchema(faqs: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
