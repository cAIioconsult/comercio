import type { Product } from "../content";
import { ProductCard } from "./ProductCard";

type MenuCardProps = { product: Product; currency: string; locale: string; stars: number };

export function MenuCard(props: MenuCardProps) {
  return <div className="menu-card"><ProductCard product={props.product} currency={props.currency} locale={props.locale} stars={props.stars} /></div>;
}
