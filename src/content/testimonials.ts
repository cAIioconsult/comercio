import type { ContentSection, Testimonial } from "./types";

export const testimonialsSection: ContentSection = { eyebrow: "Testimonial", title: "Loved By Coffee Enthusiasts", description: "The best part of Caffino is the feeling people take with them after every visit." };
const avatar = (number: number, name: string) => ({ src: `/images/testimonials/testimonials-${String(number).padStart(2, "0")}.avif`, alt: `${name} portrait`, width: 45, height: 45 });
export const testimonials: Testimonial[] = [
  { quote: "The coffee is exceptional and the atmosphere makes every visit feel special.", name: "Sophia Reynolds", role: "Coffee Enthusiast", avatar: avatar(1, "Sophia Reynolds"), image: { src: "/images/testimonials/testimonials-01.avif", alt: "Coffee and pastry at Caffino", width: 367, height: 551 } },
  { quote: "A warm, thoughtful place to meet, work, or simply enjoy a great cup.", name: "Liam Bennett", role: "Regular Guest", avatar: avatar(2, "Liam Bennett") },
  { quote: "Their attention to craft shows in every drink. I always leave inspired.", name: "Ethan Carter", role: "Coffee Enthusiast", avatar: avatar(3, "Ethan Carter"), image: { src: "/images/testimonials/testimonials-03.avif", alt: "Coffee service at Caffino", width: 366, height: 490 } },
  { quote: "Caffino has become part of my favorite daily routine.", name: "Olivia Parker", role: "Regular Guest", avatar: avatar(4, "Olivia Parker") },
];
