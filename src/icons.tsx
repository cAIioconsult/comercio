/*
 * Geometria dos icones SVG usados pelos componentes. Cada glifo e um caminho SVG,
 * sem cor nem tamanho: a cor vem de currentColor e o tamanho, de tokens no componente Icon.
 */

export const STAR_VIEWBOX = "0 0 20 20";

export function StarPath() {
  return (
    <path d="M10.00 0.50 L12.41 6.68 L19.04 7.06 L13.90 11.27 L15.58 17.69 L10.00 14.10 L4.42 17.69 L6.10 11.27 L0.96 7.06 L7.59 6.68 Z" />
  );
}
