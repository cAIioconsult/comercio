import type { ContentSection, ImageAsset } from "./types";

export const hero: ContentSection & { rating: string; action: string; image: ImageAsset } = {
  eyebrow: "★★★ 4.9 Rating",
  title: "Your Perfect Coffee Moment Starts Here",
  description: "Discover exceptional coffee, warm hospitality, and a space designed for your everyday ritual.",
  rating: "4.9",
  action: "Reserve A Table",
  image: { src: "/images/hero/hero-01.avif", alt: "Coffee served in a warm cafe setting", width: 1440, height: 810 },
};
