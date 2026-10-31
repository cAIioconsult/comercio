import type { ContentSection, ImageAsset } from "./types";

export const gallerySection: ContentSection = { eyebrow: "Gallery", title: "A Glimpse Into The Caffino Experience", description: "A closer look at the coffee, people, and details that make our space feel like yours." };
export const gallery: ImageAsset[] = [1, 2, 3, 4, 5, 6].map((number) => ({ src: `/images/gallery/gallery-${String(number).padStart(2, "0")}.avif`, alt: `Caffino cafe gallery image ${number}`, width: 580, height: 395 }));
