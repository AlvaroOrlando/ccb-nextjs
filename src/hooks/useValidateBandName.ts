
import { useState, useEffect, ChangeEvent } from "react";

export function useValidateBandName() {

  const [isBandNameValidated, setIsBandNameValidated] = useState(false);
  const [bandName, setBandName] = useState("")
  const [bandNameValidationMessage, setBandNameValidationMessage] = useState("")


  useEffect(()=>{
    const validateBandName = (bandName: string) => {
      if(bandName.length <= 1) {
          setIsBandNameValidated(false);
          setBandNameValidationMessage("Informe o nome da banda (mais de um caractere)");
      } else {
          setIsBandNameValidated(true);
          setBandNameValidationMessage("");
      }
  };
  if (bandName !== "") {
    validateBandName(bandName);
  }
  },[bandName])
  

  function handleBandNameChange(e: ChangeEvent<HTMLInputElement>){
    const newBandName = e.target.value
    setBandName(state => newBandName)
  }

  return {
    bandName,
    isBandNameValidated,
    bandNameValidationMessage,
    handleBandNameChange,
    
  };
}
