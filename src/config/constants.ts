import type { Links } from "./types";

// !Site metadata
export const siteName = "Blue store";
export const siteDescription = `${siteName} is a simple and modern e-commerce app built with Next.js`;

// !Links
export const navbarLinks: Links = [
  { href: "/categories", name: "Shop" },
  { href: "/about", name: "About" },
  { href: "/contact", name: "Contact Us " },
];
export const footerLinks: Links = [
  { href: "/about", name: "About us" },
  { href: "/contact", name: "Contact us" },
  { href: "/terms", name: "Terms of service" },
  { href: "/faq", name: "FAQ" },
];
