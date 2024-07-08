import styles from "./painelContainer.module.scss"
import { PropsWithChildren } from "react";
import { BaseContainerStyles } from "./styles";

interface BaseContainerProps extends PropsWithChildren {
    className?: string
}

export default function BaseContainer({ children, className }:BaseContainerProps){
    return (
        <BaseContainerStyles className={className}>
            {children}
        </BaseContainerStyles>
    )
}