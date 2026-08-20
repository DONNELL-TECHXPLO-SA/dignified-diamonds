# Dignified Diamonds

The official website for **Dignified Diamonds**, a South African youth-led initiative founded in 2020 by Ayesha Cassim, focused on helping girls access essential menstrual hygiene products.

Live tagline: *Restoring Dignity. Empowering Girls.*

## Tech Stack

- [TanStack Start](https://tanstack.com/start) (React 19, file-based routing via TanStack Router)
- [Tailwind CSS v4](https://tailwindcss.com) with a custom design system (see `src/styles.css`)
- [Radix UI](https://www.radix-ui.com) primitives via shadcn-style components in `src/components/ui`
- [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev) for form validation
- [Bun](https://bun.sh) as the package manager and dev runtime
- Deployed via [Nitro](https://nitro.build) (Cloudflare Workers preset)

## Getting Started

You need [Bun](https://bun.sh) installed.

```sh
git clone https://github.com/DONNELL-TECHXPLO-SA/dignified-diamonds.git
cd dignified-diamonds
bun install
bun run dev
```

The site runs at `http://localhost:8080`.

### Scripts

| Command           | Description                              |
| ------------------ | ----------------------------------------- |
| `bun run dev`      | Start the dev server with hot reload      |
| `bun run build`    | Production build (client, SSR, Nitro)     |
| `bun run preview`  | Preview a production build locally        |
| `bun run lint`     | Run ESLint                                |
| `bun run format`   | Format the codebase with Prettier         |

## Site Structure

Pages live in `src/routes/` (one file per route, powered by TanStack Router's file-based routing):

| Route            | File                        | Purpose                                   |
| ----------------- | --------------------------- | ------------------------------------------ |
| `/`               | `routes/index.tsx`          | Home — introduction and highlights         |
| `/about`          | `routes/about.tsx`          | Origin story, founder, mission & vision    |
| `/our-work`       | `routes/our-work.tsx`       | Programmes: care packs, schools, drives    |
| `/impact`         | `routes/impact.tsx`         | Impact statistics and stories              |
| `/get-involved`   | `routes/get-involved.tsx`   | Ways to donate, volunteer or partner       |
| `/donate`         | `routes/donate.tsx`         | Donation options overview                  |
| `/contact`        | `routes/contact.tsx`        | Contact form                               |

Shared layout pieces (`SiteNav`, `SiteFooter`, `PageHero`, `FAQSection`, etc.) live in `src/components/`.

### Updating content

Most editable copy — navigation links, FAQs, impact stats, programmes, ways to get involved, social links and contact details — is centralised in **`src/lib/site-data.ts`**. Update values there rather than hunting through individual pages.

Impact statistics and impact stories are intentionally left as `[NUMBER]` placeholders / empty arrays until Dignified Diamonds supplies verified figures and approved testimonials — do not fill these with invented numbers.

The contact form (`src/components/ContactForm.tsx`) validates and submits via `submitContactForm` in `src/lib/contact-form.ts`, which is the single seam to wire up to a real email/CRM backend when one is ready.

## Design System

The visual language (colours, typography, spacing, motion) is defined in `src/styles.css` using Tailwind v4's `@theme` and CSS custom properties — a warm plum/rose/champagne palette with Fraunces (display) and Manrope (body) typefaces. New pages and components should reuse these tokens rather than introducing new colours or fonts.
