import { type } from "os";
import {  Button, ButtonProps } from "react-bootstrap";


interface GlobalButtonProps extends ButtonProps {
    variant?:string
    value:string
}

export default function Btn({variant, value, type}:GlobalButtonProps  ){
    return (
        <div className="mt-3" style={{width:"100%", maxWidth: "400px", margin: "0 auto"}}>
          <Button className="w-100" type={type} variant={variant}>{value}</Button>
        </div>
    )
}