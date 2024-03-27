import React, { ChangeEvent, InputHTMLAttributes, ReactNode } from 'react';
import InputGroup from '../InputGroup/inputGroup';

interface TermsAgreementProps extends InputHTMLAttributes<HTMLInputElement> {
  ref?: React.Ref<HTMLInputElement>;
  children?: ReactNode;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  hasError?: boolean;
  errorMessage?: string;
  id: string;
  content?:string;
  label?:ReactNode
}

const TermsAgreement: React.FC<TermsAgreementProps> = ({ ref, children, id, content, errorMessage, onChange, hasError }) => {
  return (
    <div className="mt-3 w-100">
      <InputGroup label={ children } content={content} id={id} type="checkbox" ref={ref} onChange={onChange} />
      {hasError && (
        <small className="text-danger w-100 mt-2">
          {errorMessage}
        </small>
      )}
    </div>
  );
};

export default TermsAgreement;
