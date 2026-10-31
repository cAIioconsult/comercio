import { Rating } from "./Rating";
export type Product = {
  id: string;
  name: string;
  /** Preco numerico. A moeda e o locale vem das props do card. */
  price: number;
  /** Nota numerica, ex.: 4.5. */
  rating: number;
  image: {
    src: string;
    alt: string;
    /** Altura da area da imagem, em px. Dado do produto, como width e height do ImageFrame. */
    height: number;
  };
};
type ProductCardProps = {
  product: Product;
  /** Codigo ISO da moeda, ex.: "USD". */
  currency: string;
  /** Locale BCP 47 usado na formatacao de preco e nota, ex.: "en-US". */
  locale: string;
  /** Quantidade de estrelas exibidas ao lado da nota. */
  stars: number;
};
export function ProductCard({ product, currency, locale, stars }: ProductCardProps) {
  const price = new Intl.NumberFormat(locale, { style: "currency", currency }).format(product.price);
  return (
    <article className="flex flex-col gap-[var(--layout-card-gap)] rounded-[var(--radius-card-sm)] border-[length:var(--border-width)] border-border bg-surface p-[var(--layout-card-padding)]">
      <Rating rating={product.rating} locale={locale} stars={stars} />
      <img
        src={product.image.src}
        alt={product.image.alt}
        style={{ height: product.image.height }}
        className="w-full object-cover object-bottom"
      />
      <div className="flex flex-col gap-[var(--space-10)]">
        <h3 className="type-h4 text-heading">{product.name}</h3>
        <p className="type-h5 text-heading">{price}</p>
      </div>
    </article>
  );
}
