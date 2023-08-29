import {  Form, FormControlProps } from "react-bootstrap";

interface InputProps extends FormControlProps {
    rows?:number
    cols?:number
    maxLength?:string
    required:boolean
}

export default function Input({rows, cols, maxLength, required, onChange, ...props}:InputProps){
    return (
        <Form.Control 
           onChange={onChange}
           {...props} 
           rows={rows} 
           cols={cols} 
           maxLength={maxLength}
           required={required}
        />
    )
}