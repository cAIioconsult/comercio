import DesignSystemPage from "./DesignSystemPage";
import { Accordion } from "./components/Accordion";
import { Button } from "./components/Button";
import { DifferentiatorCard } from "./components/DifferentiatorCard";
import { Footer } from "./components/Footer";
import { ImageFrame } from "./components/ImageFrame";
import { MenuCard } from "./components/MenuCard";
import { Navbar } from "./components/Navbar";
import { TestimonialCard } from "./components/TestimonialCard";
import { ValueListItem } from "./components/ValueListItem";
import { faqItems, faqSection, features, featuresSection, footer, gallery, gallerySection, hero, localeConfig, menuSection, navigation, products, storyImage, storySection, storyValues, testimonials, testimonialsSection, reservationSection, whyChooseImage, whyChooseSection, whyChooseValues } from "./content";

function SectionIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return <div className="section-intro"><p className="type-eyebrow text-accent">{eyebrow}</p><h2 className="type-h2 text-heading">{title}</h2><p className="type-body-lg text-lead">{description}</p></div>;
}

function ValuesSection({ id, section, image, values }: { id: string; section: typeof storySection; image: typeof storyImage; values: typeof storyValues }) {
  return <section id={id} className="content-section split-section"><div className="container split-grid"><ImageFrame {...image} radius="card" /><div className="split-copy"><SectionIntro {...section} /><ul className="values-grid">{values.map((value) => <ValueListItem key={value.title} value={value} />)}</ul></div></div></section>;
}

export default function App() {
  if (window.location.pathname === "/design-system") {
    return <DesignSystemPage />;
  }

  return <div className="site-shell"><Navbar {...navigation} /><main>
    <section id="home" className="hero"><img {...hero.image} className="hero-image" /><div className="hero-overlay" /><div className="container hero-content"><p className="type-eyebrow text-accent">{hero.eyebrow}</p><h1 className="type-h1 text-heading">{hero.title}</h1><p className="type-body-lg text-lead hero-description">{hero.description}</p><Button href="#reservation">{hero.action}</Button></div></section>
    <section id="about" className="content-section feature-section"><div className="container"><SectionIntro {...featuresSection} /><div className="feature-grid">{features.map((feature) => <DifferentiatorCard key={feature.title} feature={feature} />)}</div></div></section>
    <ValuesSection id="our-story" section={storySection} image={storyImage} values={storyValues} />
    <ValuesSection id="why-choose" section={whyChooseSection} image={whyChooseImage} values={whyChooseValues} />
    <section id="menu" className="content-section menu-section"><div className="container"><SectionIntro {...menuSection} /><div className="menu-grid">{products.map((product) => <MenuCard key={product.id} product={product} currency={localeConfig.currency} locale={localeConfig.locale} stars={3} />)}</div></div></section>
    <section id="testimonials" className="content-section testimonials-section"><div className="container"><SectionIntro {...testimonialsSection} /><div className="testimonials-grid">{testimonials.map((testimonial) => <TestimonialCard key={testimonial.name} testimonial={testimonial} />)}</div></div></section>
    <section id="gallery" className="content-section gallery-section"><div className="container"><SectionIntro {...gallerySection} /><div className="gallery-grid">{gallery.map((image) => <ImageFrame key={image.src} {...image} radius="card-sm" />)}</div></div></section>
    <section id="faq" className="content-section faq-section"><div className="container"><SectionIntro {...faqSection} /><Accordion items={faqItems.map((item, index) => ({ ...item, id: `faq-${index + 1}` }))} /></div></section>
    <section id="reservation" className="reservation-section"><div className="container"><SectionIntro {...reservationSection} /><Button href="#home">{reservationSection.action}</Button></div></section>
  </main><Footer {...footer} /></div>;
}
