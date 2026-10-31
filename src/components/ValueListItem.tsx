import type { Value } from "../content";
import { Icon } from "./Icon";
import { StarPath } from "../icons";

type ValueListItemProps = { value: Value };

export function ValueListItem({ value }: ValueListItemProps) {
  return <li className="reveal flex gap-[var(--space-16)]"><Icon viewBox="0 0 20 20" size="md" tone="accent"><StarPath /></Icon><div><h3 className="type-h5 text-heading">{value.title}</h3><p className="type-body text-body mt-[var(--space-8)]">{value.description}</p></div></li>;
}
