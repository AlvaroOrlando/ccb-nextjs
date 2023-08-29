import { ChangeEvent, useEffect, useState } from "react";

export function useValidateCep() {
    const [cep, setCep] = useState("");
    const [isCepValidated, setIsCepValidated] = useState(false);
    const [cepValidationMessage, setCepValidationMessage] = useState("");
  
    useEffect(() => {
      const validateCep = (cep:string) => {
        if (/^\d{8}$/.test(cep) || /[[xX]$/.test(cep)) {
          setIsCepValidated(true);
          setCepValidationMessage("");
        } else {
          setIsCepValidated(false);
          setCepValidationMessage("Digite um CEP válido (8 números).");
        }
      };
  
      if (cep !== "") {
        validateCep(cep);
      }
    }, [cep]);
  
    function handleCepChange(e: ChangeEvent<HTMLInputElement>) {
      const newCep = e.target.value;
      setCep(newCep);
    }
  
    return {
      cep,
      isCepValidated,
      cepValidationMessage,
      handleCepChange,
    };
  }
  