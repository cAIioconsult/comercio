import type { FaqItem as FaqItemData } from "../content";
import { Accordion } from "./Accordion";

type FaqItemProps = { item: FaqItemData; id: string };

export function FaqItem({ item, id }: FaqItemProps) {
  return <Accordion items={[{ ...item, id }]} />;
}
