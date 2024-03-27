import React, { forwardRef, PropsWithChildren } from 'react';

interface ValidationMessageProps extends PropsWithChildren<{
  isValid: boolean;
  value?: string;
}> {}

const ValidationMessage = forwardRef<HTMLDivElement, ValidationMessageProps>(
  ({ isValid, value = isValid ? "Parece Ok!" : "", }, ref) => {
    const className = isValid
      ? "text-left w-100 text-success"
      : "text-left w-100 text-danger";

    return (
      <small ref={ref} className={className}>
        {value}
      </small>
    );
  }
);

export default ValidationMessage;
