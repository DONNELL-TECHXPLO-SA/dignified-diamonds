import {
  Package,
  Student,
  UsersThree,
  Handshake,
  Gift,
  HandHeart,
  Archive,
  Buildings,
  Recycle,
  CurrencyCircleDollar,
  ShieldCheck,
  FileText,
  Bank,
  Scroll,
  HandCoins,
} from "@phosphor-icons/react";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

// Leave hrefs empty until Dignified Diamonds supplies official accounts —
// SocialLinks only renders entries with a non-empty href.
export const SOCIAL_LINKS = [
  { platform: "Instagram", href: "" },
  { platform: "Facebook", href: "" },
  { platform: "TikTok", href: "" },
  { platform: "LinkedIn", href: "" },
  { platform: "WhatsApp", href: "" },
] as const;

// No official contact details have been supplied yet — the contact page
// relies on the form until Dignified Diamonds provides these.
export const CONTACT_INFO = {
  email: "",
  phone: "",
  location: "",
};

export const OUR_WORK_PROGRAMS = [
  {
    icon: Package,
    title: "Hygiene Care Packs",
    body: "At the heart of our work are hygiene care packs — practical, dignified support that gives girls the products they need to get through school and everyday life without stress or shame.",
  },
  {
    icon: Student,
    title: "School Support",
    body: "We work with schools to make menstrual hygiene products more accessible to learners, so a lack of supplies never has to stand between a girl and her classroom.",
    cta: "Partner With a School",
    ctaHref: "/get-involved",
  },
  {
    icon: Recycle,
    title: "Community Collection Drives",
    body: "Schools, businesses, community groups and individuals can collect menstrual hygiene products and contribute them to Dignified Diamonds, turning everyday generosity into real support.",
    cta: "Start a Collection Drive",
    ctaHref: "/get-involved",
  },
  {
    icon: Buildings,
    title: "Corporate & Community Partnerships",
    body: "Companies and community organisations support our work through product donations, sponsorship, collection drives, financial contributions and employee volunteering.",
    cta: "Become a Partner",
    ctaHref: "/get-involved",
  },
] as const;

export const HOME_WORK_PREVIEW = [
  {
    icon: Package,
    title: "Hygiene Care Packs",
    body: "Providing essential menstrual hygiene products and care packs to girls who need support.",
  },
  {
    icon: Student,
    title: "School Support",
    body: "Helping schools support learners experiencing difficulty accessing menstrual hygiene products.",
  },
  {
    icon: UsersThree,
    title: "Community Action",
    body: "Bringing people, businesses and communities together through donations, collection drives and partnerships.",
  },
] as const;

export const IMPACT_STATS = [
  { value: "[NUMBER]", label: "Girls Supported" },
  { value: "[NUMBER]", label: "Hygiene Packs Distributed" },
  { value: "[NUMBER]", label: "Schools Reached" },
  { value: "[NUMBER]", label: "Communities Supported" },
] as const;

// No approved stories yet — keep this array empty until Dignified Diamonds
// supplies verified accounts; ImpactStories renders placeholder cards when empty.
export const IMPACT_STORIES: Array<{ quote: string; name: string; role: string }> = [];

export const GET_INVOLVED_WAYS = [
  {
    icon: HandHeart,
    title: "Donate Products",
    body: "Contribute sanitary products and hygiene items directly to our care packs.",
    cta: "Donate Products",
    ctaHref: "/donate",
  },
  {
    icon: HandCoins,
    title: "Donate Financially",
    body: "Financial contributions help us purchase and distribute essential hygiene products at scale.",
    cta: "Donate Now",
    ctaHref: "/donate",
  },
  {
    icon: Handshake,
    title: "Become a Partner",
    body: "Businesses, schools, NGOs and community organisations can partner with us to reach more girls.",
    cta: "Partner With Us",
    ctaHref: "/contact",
  },
  {
    icon: UsersThree,
    title: "Volunteer",
    body: "Give your time and skills to help pack, distribute and support our community initiatives.",
    cta: "Volunteer With Us",
    ctaHref: "/contact",
  },
  {
    icon: Archive,
    title: "Start a Collection Drive",
    body: "Organise a collection drive at your school, office, business, community centre or event.",
    cta: "Start a Drive",
    ctaHref: "/contact",
  },
] as const;

export const DONATE_OPTIONS = [
  {
    icon: Gift,
    title: "Donate Products",
    body: "Help provide menstrual hygiene products directly to girls who need them. Get in touch and we'll coordinate collection or drop-off.",
    cta: "Donate Products",
  },
  {
    icon: CurrencyCircleDollar,
    title: "Make a Financial Contribution",
    body: "Financial contributions help us purchase and distribute essential hygiene products where they're needed most. Online payment is coming soon — for now, reach out via our enquiry form.",
    cta: "Donate Now",
  },
  {
    icon: Buildings,
    title: "Corporate Sponsorship",
    body: "Support Dignified Diamonds through a larger sponsorship or ongoing partnership as a business or organisation.",
    cta: "Enquire About Sponsorship",
  },
] as const;

export const TRUST_ITEMS = [
  { icon: Bank, label: "Registration Information" },
  { icon: FileText, label: "Annual Reports" },
  { icon: Scroll, label: "Impact Reports" },
  { icon: CurrencyCircleDollar, label: "Financial Information" },
  { icon: Handshake, label: "Partner Information" },
  { icon: ShieldCheck, label: "Policies" },
] as const;

export const FAQS = [
  {
    question: "What is Dignified Diamonds?",
    answer:
      "A South African youth-led initiative focused on helping girls access essential menstrual hygiene products.",
  },
  {
    question: "How can I support Dignified Diamonds?",
    answer:
      "You can donate hygiene products, make a financial contribution, volunteer, organise a collection drive or become a partner.",
  },
  {
    question: "Can my school work with Dignified Diamonds?",
    answer:
      "Yes. Schools can get involved through support initiatives, collection drives and partnerships.",
  },
  {
    question: "Can my business become a partner?",
    answer:
      "Yes. Businesses and organisations can support Dignified Diamonds through sponsorships, product donations, collection drives and other forms of partnership.",
  },
  {
    question: "How can I volunteer?",
    answer: 'Use the contact form and select "Volunteer" as the reason for contacting us.',
  },
] as const;

export const CONTACT_REASONS = [
  "General Enquiry",
  "Donate",
  "Become a Partner",
  "Volunteer",
  "Start a Collection Drive",
  "School Support",
  "Other",
] as const;
