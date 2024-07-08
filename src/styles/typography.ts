import { PropsWithChildren, CSSProperties } from "react";

export interface Typography extends PropsWithChildren {
  variant?: "primary" | "secondary" | "success" | "info";
  align?: "center" | "justify" | "left" | "right";
  fw?: "bold" | "bolder" | "normal" | "light" | "lighter";
  fs?: 1 | 2 | 3 | 4 | 5 | 6;
  italic?: boolean;
  lh?: 1 | "sm" | "base" | "lg";
  m?: 0 | 1 | 2 | 3 | 4 | 5;
  mt?: 0 | 1 | 2 | 3 | 4 | 5; // Propriedade opcional
  mb?: 0 | 1 | 2 | 3 | 4 | 5; // Propriedade opcional
}

interface BootstrapClasses {
  variantClass?: string;
  sizeClass?: string;
  italicClass?: string;
  lineHeightClass?: string;
  marginClass?: string;
  marginTopClass?: string;
  marginBottomClass?: string;
}

export function generateBootstrapClasses({ variant, fs, italic, lh, m, mt, mb }: Typography): BootstrapClasses {
  const variantClass = variant ? `text-${variant}` : "";
  const sizeClass = fs ? `fs-${fs}` : "";
  const italicClass = italic ? "fst-italic" : "";
  const lineHeightClass = lh ? `lh-${lh === 1 ? 1 : lh}` : "";
  const marginClass = m !== undefined ? `m-${m}` : "";
  const marginTopClass = mt !== undefined ? `mt-${mt}` : "";
  const marginBottomClass = mb !== undefined ? `mb-${mb}` : "";

  return {
    variantClass,
    sizeClass,
    italicClass,
    lineHeightClass,
    marginClass,
    marginTopClass,
    marginBottomClass
  };
}

export function generateCustomStyle({ align }: Typography): CSSProperties {
  return {
    textAlign: align || "left",
  };
}
