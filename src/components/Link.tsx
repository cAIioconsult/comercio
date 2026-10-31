import type { ReactNode } from "react";

type LinkProps = {
  href: string;
  children: ReactNode;
  /** Forca o visual de hover para o catalogo. */
  state?: "hover";
};

export function Link({ href, children, state }: LinkProps) {
  return (
    <a href={href} data-state={state} className="type-body-lg text-strong hover-state:text-link-hover">
      {children}
    </a>
  );
}
