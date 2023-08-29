
import { useState, ChangeEvent, useEffect } from "react";

export function useValidateBandOwner() {

  const [isBandOwnerValidated, setIsBandOwnerValidated] = useState(false);
  const [bandOwner, setBandOwner] = useState("")
  const [bandOwnerValidationMessage, setBandOwnerValidationMessage] = useState("")


        
  useEffect(() => {
    const validatebandOwner = (bandOwner:string) => {
      const nameWords = bandOwner.split(" ");
      if (nameWords.length >= 2 && nameWords[1].match(/[a-zA-Z]/)) {
        setIsBandOwnerValidated(true);
        setBandOwnerValidationMessage("");
      } else {
        setIsBandOwnerValidated(false);
        setBandOwnerValidationMessage("Digite nome e sobrenome.");
      }
    };
  
    if (bandOwner !== "") {
      validatebandOwner(bandOwner);
    }
  }, [bandOwner]);

  function handleBandOwnerChange(e: ChangeEvent<HTMLInputElement>){
    const newBandOwner = e.target.value
    setBandOwner(state => newBandOwner)
  }

  return {
    bandOwner,
    isBandOwnerValidated,
    bandOwnerValidationMessage,
    handleBandOwnerChange,
  };
}
