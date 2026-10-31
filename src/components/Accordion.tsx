import { useState } from "react";

export type AccordionItem = {
  id: string;
  question: string;
  answer: string;
};

type AccordionProps = {
  items: AccordionItem[];
  /** Id do item aberto ao montar. Null mantem todos fechados. */
  defaultOpenId?: string | null;
};

/* Comportamento exclusivo: abrir um item fecha o anterior. */
export function Accordion({ items, defaultOpenId = null }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  return (
    <ul className="flex flex-col gap-[var(--layout-faq-gap)]">
      {items.map((item) => {
        const isOpen = item.id === openId;
        const panelId = `accordion-panel-${item.id}`;

        return (
          <li
            key={item.id}
            className="rounded-[var(--radius-card)] border-[length:var(--border-width)] border-border bg-surface p-[var(--layout-card-padding)]"
          >
            <h3>
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-[var(--space-16)] text-left"
              >
                <span className="type-h5 text-heading">{item.question}</span>
                <span
                  aria-hidden="true"
                  className="relative grid size-[var(--component-faq-icon-size)] shrink-0 place-items-center rounded-[var(--radius-pill)] bg-accent [box-shadow:var(--shadow-faq-icon)]"
                >
                  <span className="absolute left-1/2 top-1/2 h-[var(--component-faq-bar-thickness)] w-[var(--component-faq-bar-length)] -translate-1/2 bg-strong" />
                  <span
                    className={`absolute left-1/2 top-1/2 h-[var(--component-faq-bar-thickness)] w-[var(--component-faq-bar-length)] -translate-1/2 bg-strong transition-transform duration-[var(--motion-duration-faq)] ${isOpen ? "rotate-90" : ""}`}
                  />
                </span>
              </button>
            </h3>
            <p
              id={panelId}
              hidden={!isOpen}
              className="type-body text-body pt-[var(--space-16)]"
            >
              {item.answer}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
