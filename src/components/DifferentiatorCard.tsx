import type { Feature } from "../content";
import { ImageFrame } from "./ImageFrame";

type DifferentiatorCardProps = { feature: Feature };

export function DifferentiatorCard({ feature }: DifferentiatorCardProps) {
  return <article className="reveal flex flex-col items-center gap-[var(--space-20)] text-center"><ImageFrame {...feature.icon} width={60} height={60} radius="none" /><h3 className="type-h4 text-heading">{feature.title}</h3><p className="type-body text-strong">{feature.description}</p></article>;
}
