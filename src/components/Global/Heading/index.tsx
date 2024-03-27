// Heading.tsx
import { CSSProperties } from "react";
import { Typography, generateBootstrapClasses, generateCustomStyle } from "@/styles/typography";

interface HeadingProps extends Typography {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Heading({ children, as = "h1", ...props }: HeadingProps) {
  const customStyle: CSSProperties = generateCustomStyle(props);

  const HeadingComponent = as;

  const { variantClass, sizeClass, italicClass, lineHeightClass } = generateBootstrapClasses(props);

  return (
    <HeadingComponent
      className={`${variantClass} ${props.fw ? `fw-${props.fw}` : ""} ${sizeClass} ${italicClass} ${lineHeightClass}`}
      style={customStyle}
    >
      {children}
    </HeadingComponent>
  );
}
