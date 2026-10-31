import type { Product } from "./types";

const productImage = (number: number, name: string, width: number, height: number) => ({ src: `/images/menu/menu-${String(number).padStart(2, "0")}.avif`, alt: `${name} product image`, width, height });
export const products: Product[] = [
  { id: "creamy-latte-delight", name: "Creamy Latte Delight", number: 1, price: 4.5, rating: 4.8, image: productImage(1, "Creamy Latte Delight", 318, 370) },
  { id: "velvet-cappuccino", name: "Velvet Cappuccino", number: 2, price: 5.95, rating: 4.9, image: productImage(2, "Velvet Cappuccino", 319, 371) },
  { id: "classic-espresso-shot", name: "Classic Espresso Shot", number: 3, price: 5.75, rating: 4.8, image: productImage(3, "Classic Espresso Shot", 319, 371) },
  { id: "vanilla-bean-latte", name: "Vanilla Bean Latte", number: 4, price: 6.5, rating: 4.9, image: productImage(4, "Vanilla Bean Latte", 319, 371) },
  { id: "caramel-macchiato", name: "Caramel Macchiato", number: 5, price: 6.75, rating: 4.9, image: productImage(5, "Caramel Macchiato", 319, 371) },
  { id: "mocha-dream-fusion", name: "Mocha Dream Fusion", number: 6, price: 6.25, rating: 4.8, image: productImage(6, "Mocha Dream Fusion", 319, 371) },
];
