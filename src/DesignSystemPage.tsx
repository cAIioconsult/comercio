import type { ReactNode } from "react";
import { Accordion } from "./components/Accordion";
import { Avatar } from "./components/Avatar";
import { Badge } from "./components/Badge";
import { Button, type ButtonState } from "./components/Button";
import { Icon, type IconSize, type IconTone } from "./components/Icon";
import { ImageFrame, type ImageFrameRadius } from "./components/ImageFrame";
import { Link } from "./components/Link";
import { ProductCard, type Product } from "./components/ProductCard";
import { Rating } from "./components/Rating";
import { STAR_VIEWBOX, StarPath } from "./icons";

const exampleImage = "/images/menu/menu-01.avif";
const exampleProducts: Product[] = [
  { id: "example-1", name: "Chocolate Lava Cake (example)", price: 7.95, rating: 4.5, image: { src: exampleImage, alt: "Example product 1", height: 371 } },
  { id: "example-2", name: "Cheese Plater (example)", price: 12.95, rating: 4.9, image: { src: exampleImage, alt: "Example product 2", height: 371 } },
  { id: "example-3", name: "Mango Citrus Cooler (example)", price: 5.5, rating: 4.8, image: { src: exampleImage, alt: "Example product 3", height: 371 } },
];
const exampleFaq = [
  { id: "faq-1", question: "Example question 1", answer: "Example answer 1." },
  { id: "faq-2", question: "Example question 2", answer: "Example answer 2." },
  { id: "faq-3", question: "Example question 3", answer: "Example answer 3." },
];
const buttonStates: { label: string; state?: ButtonState; disabled?: boolean }[] = [
  { label: "Default" }, { label: "Hover", state: "hover" }, { label: "Focus-visible", state: "focus" }, { label: "Disabled", disabled: true },
];
const iconSizes: IconSize[] = ["sm", "md", "social", "feature"];
const iconTones: IconTone[] = ["body", "accent", "strong"];
const imageRadii: ImageFrameRadius[] = ["none", "card-sm", "card", "pill"];

function Section({ title, children }: { title: string; children: ReactNode }) {
  return <section className="flex flex-col gap-[var(--space-30)]"><h2 className="type-h2 text-heading">{title}</h2>{children}</section>;
}
function Label({ children }: { children: ReactNode }) { return <span className="type-caption text-lead">{children}</span>; }

export default function DesignSystemPage() {
  return <main className="mx-auto flex max-w-[var(--layout-container-max)] flex-col gap-[var(--layout-container-gap)] px-[var(--layout-page-gutter)] py-[var(--layout-section-padding-top)]">
    <header className="flex flex-col gap-[var(--layout-title-text-gap)]"><Badge variant="eyebrow">Phase 3: base components</Badge><h1 className="type-h1 text-heading">Caffino design system</h1><p className="type-body-lg text-lead">Catalog of the reusable atoms used by the landing page.</p></header>
    <Section title="Button"><div className="flex flex-col gap-[var(--space-24)]">{(["primary", "secondary"] as const).map((variant) => <div key={variant} className="flex flex-wrap items-start gap-[var(--space-30)]"><Label>{variant}</Label>{buttonStates.map((state) => <div key={state.label} className="flex flex-col items-start gap-[var(--space-8)]"><Button variant={variant} state={state.state} disabled={state.disabled}>Reserve A Table</Button><Label>{state.label}</Label></div>)}</div>)}<div className="flex flex-wrap items-center gap-[var(--space-30)]"><Label>As a link</Label><Button href="#button-example">Explore Menu</Button></div></div></Section>
    <Section title="Link"><div className="flex flex-wrap items-center gap-[var(--space-30)]"><Link href="#link-example">Default link</Link><Link href="#link-example" state="hover">Hover link</Link></div></Section>
    <Section title="Badge / tag"><div className="flex flex-wrap items-center gap-[var(--space-30)]"><Badge variant="eyebrow">Eyebrow example</Badge><Badge variant="tag">Tag example</Badge></div></Section>
    <Section title="Rating"><div className="flex flex-wrap items-center gap-[var(--space-30)]"><Rating rating={4.5} locale="en-US" stars={3} /><Rating rating={4.9} locale="en-US" stars={3} /><Rating rating={4.8} locale="pt-BR" stars={3} /></div></Section>
    <Section title="Accordion (exclusive)"><Accordion items={exampleFaq} defaultOpenId="faq-1" /></Section>
    <Section title="Avatar"><div className="flex flex-wrap items-center gap-[var(--space-30)]"><Avatar src={exampleImage} alt="Example avatar" /></div></Section>
    <Section title="Image frame"><div className="flex flex-wrap items-start gap-[var(--space-30)]">{imageRadii.map((radius) => <div key={radius} className="flex flex-col items-start gap-[var(--space-8)]"><ImageFrame src={exampleImage} alt={`Example image, ${radius} radius`} width={319} height={371} radius={radius} /><Label>{radius}</Label></div>)}</div></Section>
    <Section title="Icon"><div className="flex flex-col gap-[var(--space-24)]">{iconTones.map((tone) => <div key={tone} className="flex flex-wrap items-center gap-[var(--space-30)]"><Label>{tone}</Label>{iconSizes.map((size) => <Icon key={size} viewBox={STAR_VIEWBOX} size={size} tone={tone}><StarPath /></Icon>)}</div>)}</div></Section>
    <Section title="Product card"><div className="grid grid-cols-1 gap-[var(--layout-card-gap)] md:grid-cols-3">{exampleProducts.map((product) => <ProductCard key={product.id} product={product} currency="USD" locale="en-US" stars={3} />)}</div></Section>
  </main>;
}
