import type { ContentSection, FaqItem } from "./types";

export const faqSection: ContentSection = { eyebrow: "FAQ", title: "Frequently Asked Questions", description: "Find quick answers about visiting Caffino and making the most of your coffee break." };
export const faqItems: FaqItem[] = [
  { question: "What are your opening hours?", answer: "We’re open daily from early morning to evening, providing the perfect place for your coffee break, work session, or casual meetup." },
  { question: "Do you offer takeaway or online ordering?", answer: "Yes, takeaway is available at the cafe. Ask our team about current ordering options." },
  { question: "Do you have vegan or dairy-free options?", answer: "We offer a selection of plant-based and dairy-free choices. Our team can help you choose." },
  { question: "Do you roast your own coffee?", answer: "We work with carefully selected specialty-grade beans and roast in small batches." },
  { question: "Can I reserve a table?", answer: "Yes. Use the reservation action to request a table for your visit." },
  { question: "Do you offer free Wi-Fi?", answer: "Yes, complimentary Wi-Fi is available for guests." },
];
