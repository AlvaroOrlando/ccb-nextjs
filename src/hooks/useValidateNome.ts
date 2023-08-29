import { useState, useEffect, ChangeEvent } from "react";

export function useValidateNome() {
    const [name, setName] = useState("")
    const [isNameValidated, setIsNameValidated] = useState(false);
    const [nameValidationMessage, setNameValidationMessage] = useState("");
    
    useEffect(() => {
        const validateName = (name:string) => {
          const nameWords = name.split(" ");
          if (nameWords.length >= 2 && nameWords[1].match(/[a-zA-Z]/)) {
            setIsNameValidated(true);
            setNameValidationMessage("");
          } else {
            setIsNameValidated(false);
            setNameValidationMessage("Digite nome e sobrenome.");
          }
        };
      
        if (name !== "") {
          validateName(name);
        }
      }, [name]);

      function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
          const name = e.target.value;
          setName(state => name);
      }

    return {
        name,
        isNameValidated,
        nameValidationMessage,
        handleNameChange
      };
}

