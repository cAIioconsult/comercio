import type { ReactNode } from "react";

export type BadgeVariant = "eyebrow" | "tag";

type BadgeProps = {
  children: ReactNode;
  variant?: BadgeVariant;
};

const variantClass: Record<BadgeVariant, string> = {
  eyebrow: "type-eyebrow text-accent",
  tag: [
    "type-caption inline-flex items-center text-body",
    "rounded-[var(--radius-pill)] border-[length:var(--border-width)] border-border",
    "px-[var(--space-16)] py-[var(--space-8)]",
  ].join(" "),
};

export function Badge({ children, variant = "eyebrow" }: BadgeProps) {
  return <span className={variantClass[variant]}>{children}</span>;
}
