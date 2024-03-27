import React, { forwardRef, ForwardedRef, ReactNode } from "react";
import { LabelHTMLAttributes } from "react";
import { LabelStyles } from "./styles";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  content?: string;
  htmlFor?: string;
  className?: string;
  label?: ReactNode;
}

const Label = forwardRef(
  ({ content, className, label, htmlFor, ...props }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    return (
      <LabelStyles ref={ref} htmlFor={htmlFor} className={className} {...props}>
        {label || content }
      </LabelStyles>
    );
  }
);

export default Label;
