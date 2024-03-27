import { CSSProperties } from "react";
import { Typography, generateBootstrapClasses, generateCustomStyle } from "@/styles/typography";

interface TextProps extends Typography {
  as?: "p" | "small" | "span";
}

export default function Text({ children, as = "p", ...props }: TextProps) {
  const customStyle: CSSProperties = generateCustomStyle(props);

  const TextComponent = as;

  const { variantClass, sizeClass, italicClass, lineHeightClass } = generateBootstrapClasses(props);

  return (
    <TextComponent
      className={`${variantClass} ${props.fw ? `fw-${props.fw}` : ""} ${sizeClass} ${italicClass} ${lineHeightClass}`}
      style={customStyle}
    >
      {children}
    </TextComponent>
  );
}
