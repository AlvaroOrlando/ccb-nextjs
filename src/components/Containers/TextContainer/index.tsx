import { PropsWithChildren } from "react";
import styles from "./textContainer.module.scss"
import { TextContainerStyles } from "./styles";


export default function TextContainer({ children }:PropsWithChildren){
    return (
        <TextContainerStyles>
            { children }
        </TextContainerStyles>
    )
}