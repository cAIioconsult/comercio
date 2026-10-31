export type ImageFrameRadius = "none" | "card-sm" | "card" | "pill";

type ImageFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  radius?: ImageFrameRadius;
};

const radiusClass: Record<ImageFrameRadius, string> = {
  none: "rounded-[var(--radius-none)]",
  "card-sm": "rounded-[var(--radius-card-sm)]",
  card: "rounded-[var(--radius-card)]",
  pill: "rounded-[var(--radius-pill)]",
};

export function ImageFrame({ src, alt, width, height, radius = "card-sm" }: ImageFrameProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`block h-auto max-w-full object-cover ${radiusClass[radius]}`}
    />
  );
}
