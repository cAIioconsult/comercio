type AvatarProps = {
  src: string;
  alt: string;
};

export function Avatar({ src, alt }: AvatarProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="size-[var(--component-avatar-size)] shrink-0 rounded-[var(--radius-pill)] object-cover"
    />
  );
}
