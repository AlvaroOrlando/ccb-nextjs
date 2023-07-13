import {  Form, FormControlProps } from "react-bootstrap";

interface InputProps extends FormControlProps {
    rows?:number
    cols?:number
    maxLength?:string
}

export default function Input({rows, cols, maxLength, ...props}:InputProps){
    return (
        <Form.Control 
           {...props} 
           rows={rows} 
           cols={cols} 
           maxlength={maxLength}
        />
    )
}