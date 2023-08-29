
import { TestaCPF } from "@/utilities/validaCpf";
import { useState, useEffect, ChangeEvent } from "react";

export function useValidateCpf() {
  const [cpf, setCpf] = useState("");
  const [isValidated, setIsValidated] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  useEffect(() => {

    const validateCpf = (cpf:string) => {
       if(/^00000000000/.test(cpf)) {
        setValidationMessage("CPF inválido!")
        setIsValidated(false)
      } else if (cpf.length === 11 && TestaCPF(cpf) === false) {
        if (/^000000\d{5}$/.test(cpf)) {
          setValidationMessage("");
          setIsValidated(true);
        } else {
          setValidationMessage("CPF inválido!")
          setIsValidated(false)
        }
      } else if(cpf.length !== 11){
        setValidationMessage("O CPF precisa ter 11 números");
        setIsValidated(false);
      } else  {
        setValidationMessage("");
        setIsValidated(true);
      }
    }

    if (cpf !== "") {
      validateCpf(cpf);
    }
  }, [cpf]);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const newCpf = e.target.value;
    setCpf(state => newCpf);
  }

  return {
    cpf,
    isValidated,
    validationMessage,
    handleChange,
    setCpf,
  };
}
