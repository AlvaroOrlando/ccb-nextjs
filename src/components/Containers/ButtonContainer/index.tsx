import { HTMLAttributes, ReactNode } from "react";
import { ButtonContainerStyles } from "./styles";

interface ButtonContainerProps extends HTMLAttributes<HTMLDivElement>{
    align?: "left" | "center" | "right"
    children:ReactNode
    className?:string
}

export default function ButtonContainer({ children, align, className }:ButtonContainerProps){
    return (
        <ButtonContainerStyles className={className} align={align}>
           { children }
        </ButtonContainerStyles>
    )
}