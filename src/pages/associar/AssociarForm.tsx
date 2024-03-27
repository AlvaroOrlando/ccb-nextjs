import { useValidateCpf } from "@/hooks/useValidateCpf";
import { useValidateBandName } from "@/hooks/useValidateBandName";
import styles from "@/styles/associar.module.scss"
import { useValidateNome } from "@/hooks/useValidateNome";
import { useValidateCep } from "@/hooks/useValidateCep";
import Painel from "@/components/Containers/Painel";
import Input from "@/components/Global/Input/input";
import { useValidateBandOwner } from "@/hooks/useValidateBandOwner";
import { useRouter } from "next/router";
import Button from "@/components/Global/Button";


export default function AssociarForm(){
    const router = useRouter();
    const { category } = router.query;
    console.log(category);

    

  const { cpf, validationMessage, handleChange, isValidated } = useValidateCpf();
  const { name, nameValidationMessage, handleNameChange, isNameValidated, } = useValidateNome()
  const { cep, cepValidationMessage, handleCepChange, isCepValidated } = useValidateCep()
  const { bandName, bandNameValidationMessage, handleBandNameChange, isBandNameValidated } = useValidateBandName()
  const { bandOwner, bandOwnerValidationMessage, handleBandOwnerChange, isBandOwnerValidated } = useValidateBandOwner()

  function handleProposta(){
    
  }

    return (
        <form
            className={`${styles.compForm}`}
            name="form1"
            method="post"
            style={{ maxWidth: '802px', margin: '0 auto' }}
        >
            <div className="PainelSectionContainer">
                
                <Painel content="Associe-se já!"/>
                <p className={`subtitulosGlobal p-2 pb-0 mb-0`} style={{textAlign:"justify"}}>
                  Para se associar, digite seu nome, CPF e o CEP válido do seu endereço para receber a sua Carteira de Compositor.
                </p>

                <div className={`${styles.compInputs}`}>
                    {
                    category === "compositores" || category === "cantores" ? 

                    // Nome
                    <div className={`form-group`}>
                        <Input
                            maxLength={40}
                            placeholder="Nome completo"
                            required
                            onChange={handleNameChange}
                            value={name}
                        />
                        {nameValidationMessage &&
                            <small className="text-left w-100 text-danger">
                                {nameValidationMessage}
                            </small>
                        }
                    </div>
                    : 
                    <>
                      {/* Nome da banda */}
                      <div className={`form-group mt-3`}>
                        <Input
                            maxLength={40}
                            placeholder="Nome da Banda"
                            required
                            onChange={handleBandNameChange}
                            value={bandName}
                        />
                        {bandNameValidationMessage &&
                            <small className="text-left w-100 text-danger">
                                {bandNameValidationMessage}
                            </small>
                        }
                      </div>

                      {/* Responsável */}
                      <div className={`form-group mt-3`}>
                        <Input
                            maxLength={40}
                            placeholder="Responsável"
                            required
                            onChange={handleBandOwnerChange}
                            value={bandOwner}
                        />
                        {bandOwnerValidationMessage &&
                            <small className="text-left w-100 text-danger">
                                {bandOwnerValidationMessage}
                            </small>
                        }
                      </div>
                    </>
                    }

                    {/* CPF */}
                    <div className={`form-group mt-3`}>
                        <Input
                            maxLength={11}
                            placeholder="CPF (11 números)"
                            onChange={handleChange}
                            value={cpf}
                            required
                        />
                         {validationMessage &&
                            <small className="text-left w-100 text-danger">
                                {validationMessage}
                            </small>
                         }
                    </div>

                    {/* CEP */}
                    <div className={`form-group mt-3`}>
                        <Input
                            maxLength={8}
                            placeholder="CEP (8 números)"
                            onChange={handleCepChange}
                            value={cep}
                            required
                        />
                        {cepValidationMessage &&
                            <small className="text-left w-100 text-danger">
                                {cepValidationMessage}
                            </small>
                        }
                    </div>

                    <small style={{ color: 'gray' }}>
                        (se mora no exterior, <a href="#exterior">clique aqui</a>)
                    </small>

                    <Button
                        value="PREENCHER PROPOSTA"
                        onClick={handleProposta}
                        disabled=
                        {
                        (category === "bandas" && !isBandNameValidated || category === "bandas" && !isBandOwnerValidated) ||
                        (category === "compositores" && !isNameValidated) ||
                        (category === "cantores" && !isNameValidated) ||
                        !isCepValidated || !isValidated 
                        }

                        className={
                            (category === "bandas" && !isBandNameValidated || category === "bandas" && !isBandOwnerValidated) || 
                            (category === "compositores" && !isNameValidated) || (category === "compositores" && !name )||
                            (category === "cantores" && !isNameValidated) || (category === "cantores" && !name ) ||
                            !isCepValidated || !isValidated 
                            ? 
                            `forbidden btn btn-primary text-white mt-3` 
                            : `btn btn-primary text-white mt-3`}
                        type="button"
                    >
                        
                    </Button>

                </div>
            </div>
         </form>
    )
}