import type { ContentSection, Feature } from "./types";

export const featuresSection: ContentSection = { eyebrow: "Feature", title: "Why Coffee Lovers Choose Us", description: "Every cup is made with care, from the beans we select to the space we share." };
export const features: Feature[] = [
  { title: "Premium Beans", description: "We source exceptional beans for a rich, balanced cup every time.", icon: { src: "/images/features/features-01.svg", alt: "Premium beans icon", width: 100, height: 100 } },
  { title: "Expert Brewing", description: "Our baristas bring precision and craft to every brewing method.", icon: { src: "/images/features/features-02.svg", alt: "Expert brewing icon", width: 100, height: 100 } },
  { title: "Cozy Space", description: "Settle in, slow down, and make the cafe part of your daily ritual.", icon: { src: "/images/features/features-03.svg", alt: "Cozy space icon", width: 100, height: 100 } },
];
