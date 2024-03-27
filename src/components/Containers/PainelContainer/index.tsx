import React, { forwardRef, ForwardedRef, PropsWithChildren } from "react";
import Painel from "../Painel";
import { PainelSection, PainelSectionContainer } from "./styles";

interface PainelContainerProps extends PropsWithChildren<{}> {
  content: string;
  variant?: 'yellow' | 'blue';
  className?: string;
}

const PainelContainer = forwardRef(
  ({ children, className, content, variant, ...props }: PainelContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <PainelSectionContainer ref={ref} className={className} {...props}>
        <Painel content={content} variant={variant} />
        <PainelSection>
          {children}
        </PainelSection>
      </PainelSectionContainer>
    );
  }
);

export default PainelContainer;
