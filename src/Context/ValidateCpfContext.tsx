import React, { ReactNode, createContext, useState } from 'react';
import { TestaCPF } from "../utilities/validaCpf";

interface ValidateCpfProviderProps {
  children: ReactNode;
}

interface ValidateCpfContextType {
  validateCpf: (cpf: string) => void;
  isValidated: boolean | undefined;
  validationMessage: string;
}

export const ValidateCpfContext = createContext({} as ValidateCpfContextType);


export function ValidateCpfProvider({ children }: ValidateCpfProviderProps) {
  const [validationMessage, setValidationMessage] = useState("");
  const [isValidated, setIsValidated] = useState<boolean | undefined>(false);

  const teste = "hello"

  function validateCpf(cpf: string) {
    if (cpf.length < 11 && cpf.length !== 0) {
      setValidationMessage('O CPF deve ter 11 números');
      setIsValidated(false);
    } else if (TestaCPF(cpf) === false) {
      setValidationMessage("CPF inválido. Digite um CPF válido");
      setIsValidated(false);
    } else {
      setValidationMessage("");
      setIsValidated(true);
    }
  }

  return (
    <ValidateCpfContext.Provider
      value={{
        validateCpf,
        isValidated,
        validationMessage,
      }}
    >
      {children}
    </ValidateCpfContext.Provider>
  );
}
