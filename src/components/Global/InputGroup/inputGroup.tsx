import React, { forwardRef, InputHTMLAttributes, PropsWithChildren, ReactNode, Ref } from "react";
import Label from "../Label";

interface InputGroupProps extends InputHTMLAttributes<HTMLInputElement>, PropsWithChildren {
  content?: string;
  customClasses?: string;
  children?: ReactNode;
  htmlFor?: string;
  label?: ReactNode;
}

const InputGroup = forwardRef(
  ({ type = 'text', content, label, customClasses, children, htmlFor, ...props }: InputGroupProps, ref: Ref<HTMLInputElement>) => {
    const isCheckboxOrRadio = type === 'checkbox' || type === 'radio';
    const containerClass = isCheckboxOrRadio ? 'form-check' : `form-group ${customClasses || ''}`;
    const inputClass = isCheckboxOrRadio ? 'form-check-input' : `form-control ${customClasses}`;

    const additionalStyles = isCheckboxOrRadio ? {
      // margin: '5px',
      // alignSelf: 'flex-start',
      // marginLeft: '15px',
      // display: 'flex',
      // gap: '0.6rem',
    } : {};

    const inputProps = isCheckboxOrRadio ? { ...props, name: 'checkboxOrRadioGroup' } : props;

    return (
      <div className={containerClass} style={additionalStyles}>
        {isCheckboxOrRadio && (
          <>
            <input ref={ref} id={props.id} type={type} className={inputClass} {...inputProps} />
            {label ?
             (<Label label={label} className="text-secondary fw-bold" htmlFor={htmlFor || props.id || ''}>{content}</Label>)
             : 
             (
              <Label content={content} className="text-secondary fw-bold" htmlFor={htmlFor || props.id || ''}>{content}</Label>
            )}
            { children }
          </>
        )}

        {!isCheckboxOrRadio && (
          <>
            <Label content={content} className="text-secondary fw-bold" htmlFor={htmlFor || props.id || ''}>{content}</Label>
            <input ref={ref} type={type} className={inputClass} {...inputProps} />
            { children }
          </>
        )}
      </div>
    );
  }
);

export default InputGroup;
