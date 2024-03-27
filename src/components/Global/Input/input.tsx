import React, { forwardRef, InputHTMLAttributes, Ref } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = forwardRef(
  ({ type = 'text', className: propClassName = '', ...props }: InputProps, ref: Ref<HTMLInputElement>) => {
    let defaultClassName = 'form-control';

    if (type === 'checkbox' || type === 'radio') {
      defaultClassName = 'form-check-input';
    }

    const finalClassName = `${defaultClassName} ${propClassName}`.trim();

    return <input ref={ref} className={finalClassName} type={type} {...props} />;
  }
);

export default Input;
