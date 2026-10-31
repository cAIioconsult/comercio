import { STAR_VIEWBOX, StarPath } from "../icons";
import { Icon } from "./Icon";

type RatingProps = {
  /** Nota numerica, ex.: 4.5. Exibida com uma casa decimal no locale informado. */
  rating: number;
  locale: string;
  /** Quantidade de estrelas exibidas ao lado da nota. */
  stars: number;
};

export function Rating({ rating, locale, stars }: RatingProps) {
  const label = rating.toLocaleString(locale, {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });

  return (
    <div className="inline-flex items-center gap-[var(--space-2)]">
      <span className="type-label text-strong">{label}</span>
      <div className="inline-flex items-center gap-[var(--space-1)]" role="img" aria-label={label}>
        {Array.from({ length: stars }, (_, index) => (
          <Icon key={index} viewBox={STAR_VIEWBOX} size="sm" tone="accent">
            <StarPath />
          </Icon>
        ))}
      </div>
    </div>
  );
}
