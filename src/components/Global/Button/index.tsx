import {  Button, ButtonProps } from "react-bootstrap";


interface GlobalButtonProps extends ButtonProps {
    variant?:string
    value:string
}

export default function Btn({variant, value}:GlobalButtonProps){
    return (
        <Button variant={variant}>{value}</Button>
    )
}