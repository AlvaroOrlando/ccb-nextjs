import { PropsWithChildren, forwardRef, ForwardedRef } from "react";
import { MainContainerStyles } from "./styles";

interface MainContainerProps extends PropsWithChildren {
  className?: string;
}

const MainContainer = forwardRef(
  ({ children, className }: MainContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <MainContainerStyles className={className} ref={ref}>
        {children}
      </MainContainerStyles>
    );
  }
);

export default MainContainer;
