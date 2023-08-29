import Input from "@/components/Global/Input";

import styles from "./estudio.module.scss"
import { useValidateCpf } from "@/hooks/useValidateCpf";


export default function EstudioForm(){

    const { cpf, handleChange, isValidated, validationMessage } = useValidateCpf()

    function handleGravar(){
        console.log("Hello");
    }
    function handleAcompanhar(){
        console.log("Hello");
    }

    return (
        <form className={styles.EstudioFormContainer}>
            <section className="w-100 mt-4">
                <Input 
                    required
                    maxLength="11" 
                    placeholder="Digite seu CPF" 
                    value={cpf}
                    onChange={handleChange}
                    className={validationMessage && `border-danger formControlDanger`}
                />
                {validationMessage &&
                    <small className="text-left w-100 text-danger">
                        {validationMessage}
                    </small>
                }

                <section className="mt-3">
                    <button 
                        type="button" 
                        onClick={handleGravar}
                        disabled={!isValidated}
                        className={!isValidated ? `forbidden btn btn-primary text-white` : `btn btn-primary text-white`} 
                    >Gravar</button>
                    <button 
                        type="button" 
                        onClick={handleAcompanhar}
                        disabled={!isValidated}
                        className={!isValidated ? `forbidden btn btn-primary text-white` : `btn btn-primary text-white`}
                    >Acompanhar</button>
                </section>
            </section>
        </form>
    )
  }       
         
         