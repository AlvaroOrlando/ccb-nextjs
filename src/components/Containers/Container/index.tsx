import { forwardRef, ForwardedRef, PropsWithChildren } from "react";
import { ContainerStyles } from "./styles";

interface ContainerProps extends PropsWithChildren<{}> {
  ref?: ForwardedRef<HTMLDivElement>;
  className?:string
  id?:string
}

const Container = forwardRef(
  ({ children, className, id, ...props }: ContainerProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <ContainerStyles className={className} id={id} ref={ref} {...props}>
        {children}
      </ContainerStyles>
    );
  }
);

export default Container;
