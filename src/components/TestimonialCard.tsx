import type { Testimonial } from "../content";
import { Avatar } from "./Avatar";
import { ImageFrame } from "./ImageFrame";

type TestimonialCardProps = { testimonial: Testimonial };

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return <article className="reveal testimonial-card flex flex-col gap-[var(--space-24)] rounded-[var(--radius-card)] border-[length:var(--border-width)] border-border bg-surface p-[var(--layout-card-padding)]">{testimonial.image && <ImageFrame {...testimonial.image} radius="card-sm" />}<blockquote className="type-body-lg text-body">“{testimonial.quote}”</blockquote><div className="mt-auto flex items-center gap-[var(--space-12)]"><Avatar {...testimonial.avatar} /><div><h3 className="type-label text-strong">{testimonial.name}</h3><p className="type-caption text-body">{testimonial.role}</p></div></div></article>;
}
