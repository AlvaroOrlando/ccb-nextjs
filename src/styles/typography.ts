import { PropsWithChildren, CSSProperties } from "react";

export interface Typography extends PropsWithChildren {
    variant?: "primary" | "secondary" | "success" | "info";
    align?: "center" | "justify" | "left" | "right";
    fw?: "bold" | "bolder" | "normal" | "light" | "lighter";
    fs?: 1 | 2 | 3 | 4 | 5 | 6;
    italic?: boolean;
    lh?: 1 | "sm" | "base" | "lg";
  }

  interface BootstrapClasses {
    variantClass?: string;
    sizeClass?: string;
    italicClass?: string;
    lineHeightClass?: string;
  }
  
  export function generateBootstrapClasses({ variant, fs, italic, lh }: Typography): BootstrapClasses {
    const variantClass = variant ? `text-${variant}` : "";
    const sizeClass = fs ? `fs-${fs}` : "";
    const italicClass = italic ? "fst-italic" : "";
    const lineHeightClass = lh ? `lh-${lh === 1 ? 1 : lh}` : "";
  
    return {
      variantClass,
      sizeClass,
      italicClass,
      lineHeightClass,
    };
  }

  export function generateCustomStyle({ align }: Typography): CSSProperties {
    return {
      textAlign: align || "left",
    };
  }
  
  