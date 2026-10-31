import type { ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary";
export type ButtonState = "hover" | "focus";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  /** Se informado, o componente renderiza um link (a) em vez de button. */
  href?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  /** Forca o visual de um estado para o catalogo. Sem valor, o estado vem do navegador. */
  state?: ButtonState;
  onClick?: () => void;
};

const variantClass: Record<ButtonVariant, string> = {
  primary: "bg-accent text-on-accent",
  secondary: "bg-transparent text-strong [box-shadow:inset_0_0_0_var(--border-width)_var(--color-semantic-border-default)]",
};

const baseClass = [
  "type-button inline-flex items-center justify-center",
  "gap-[var(--component-button-gap)]",
  "px-[var(--component-button-padding-x)] py-[var(--component-button-padding-y)]",
  "rounded-[var(--radius-none)]",
  "not-aria-disabled:hover-state:opacity-[var(--opacity-hover-action)]",
  "focus-state:outline-[length:var(--border-width)] focus-state:outline-solid",
  "focus-state:outline-offset-[var(--space-2)] focus-state:outline-accent",
  "aria-disabled:opacity-[var(--component-disabled-opacity)] aria-disabled:pointer-events-none",
].join(" ");

export function Button({
  children,
  variant = "primary",
  href,
  type = "button",
  disabled = false,
  state,
  onClick,
}: ButtonProps) {
  const className = `${baseClass} ${variantClass[variant]}`;
  const ariaDisabled = disabled || undefined;

  if (href !== undefined) {
    return (
      <a
        href={disabled ? undefined : href}
        aria-disabled={ariaDisabled}
        data-state={state}
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      aria-disabled={ariaDisabled}
      data-state={state}
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
