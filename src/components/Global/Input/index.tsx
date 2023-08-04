import {  Form, FormControlProps } from "react-bootstrap";

interface InputProps extends FormControlProps {
    rows?:number
    cols?:number
    maxLength?:string
}

export default function Input({rows, cols, maxLength,onChange, ...props}:InputProps){
    return (
        <Form.Control 
           onChange={onChange}
           {...props} 
           rows={rows} 
           cols={cols} 
           maxLength={maxLength}
        />
    )
}