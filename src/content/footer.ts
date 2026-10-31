import type { FooterLinkGroup, ImageAsset } from "./types";

export const footer = {
  image: { src: "/images/misc/misc-02.avif", alt: "Caffino coffee detail", width: 247, height: 247 } satisfies ImageAsset,
  wordmark: { src: "/images/misc/misc-03.avif", alt: "Caffino wordmark", width: 1140, height: 286 } satisfies ImageAsset,
  tagline: "Built to last. Delivered with precision.",
  linkGroups: [
    { title: "Quick Link", links: ["Home", "About", "Menu", "Menu Details", "Faq"] },
    { title: "Quick Link", links: ["Blog", "Blog Details", "Reservation", "Gallery", "404"] },
    { title: "Contact Info", links: ["Hello@caffino.com", "+1 (415) 555-0148", "875 Broadway, New York."] },
  ] satisfies FooterLinkGroup[],
  copyright: "© 2026 Caffino. Premium coffee shop template. All rights reserved.",
  credit: "Brewed with creativity. Powered by Framer.",
  socials: ["Instagram", "Facebook", "X", "Pinterest"],
} as const;
