import type { ContentSection, ImageAsset, Value } from "./types";

export const storySection: ContentSection = { eyebrow: "Our Story", title: "More Than Coffee. A Daily Ritual.", description: "Caffino was created for people who believe a great cup of coffee can shape the rhythm of a day." };
export const storyImage: ImageAsset = { src: "/images/our-story/our-story-01.avif", alt: "Caffino coffee shop interior", width: 492, height: 770 };
export const storyValues: Value[] = [
  { title: "Ethically Sourced Beans", description: "Thoughtfully selected from growers who care for their craft." },
  { title: "Freshly Roasted", description: "Roasted in small batches to preserve character and aroma." },
  { title: "Made With Care", description: "Every drink is prepared with attention to the details." },
];
