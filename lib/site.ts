/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Sazzad Hossain",
  jobTitle: "Software Engineer | Full-Stack, ML & Agentic AI",
  email: "sazzad.hossain.dev@gmail.com",
  location: "Dhaka, Bangladesh",
  /* exact profile URLs as supplied — also consumed by JSON-LD */
  sameAs: [
    "https://www.sazzads.work",
    "https://github.com/sharifh530",
  ],
};
