import type { ReactNode } from "react";

export type IconSize = "sm" | "md" | "social" | "feature";
export type IconTone = "body" | "accent" | "strong";

type IconProps = {
  /** Caminhos SVG do glifo (ex.: StarPath de icons.tsx). */
  children: ReactNode;
  /** viewBox do glifo, para escalar o SVG. */
  viewBox: string;
  size?: IconSize;
  tone?: IconTone;
};

const sizeClass: Record<IconSize, string> = {
  sm: "size-[var(--component-icon-sm)]",
  md: "size-[var(--component-icon-md)]",
  social: "size-[var(--component-social-icon-size)]",
  feature: "size-[var(--component-feature-icon-size)]",
};

const toneClass: Record<IconTone, string> = {
  body: "text-body",
  accent: "text-accent",
  strong: "text-strong",
};

export function Icon({ children, viewBox, size = "md", tone = "body" }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={viewBox}
      fill="currentColor"
      className={`shrink-0 ${sizeClass[size]} ${toneClass[tone]}`}
    >
      {children}
    </svg>
  );
}
