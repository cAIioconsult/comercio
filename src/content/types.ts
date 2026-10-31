export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Product = {
  id: string;
  name: string;
  number: number;
  price: number;
  rating: number;
  image: ImageAsset;
};

export type ContentSection = {
  eyebrow: string;
  title: string;
  description: string;
};

export type Feature = { title: string; description: string; icon: ImageAsset };
export type Value = { title: string; description: string };
export type Testimonial = { quote: string; name: string; role: string; avatar: ImageAsset; image?: ImageAsset };
export type FaqItem = { question: string; answer: string };
export type FooterLink = { label: string; href?: string };
export type FooterLinkGroup = { title: string; links: FooterLink[] };
