import Button from "@/components/Global/Button";
import Input from "@/components/Global/Input/input"
import InputGroup from "@/components/Global/InputGroup/inputGroup";
import { useValidateCpf } from "@/hooks/useValidateCpf"
import Router from "next/router";
import { ChangeEvent, useState } from "react";



export default function PagamentosForm(){

    const { cpf, handleChange, isValidated, validationMessage } = useValidateCpf()
    const [selectedOption, setSelectedOption] = useState("");
    
    function handleOptionChange(e: ChangeEvent<HTMLInputElement>) {
        setSelectedOption(e.target.value);
    }

    function handlePagamentos(){
        
        if (isValidated && selectedOption) {
            Router.push({
              pathname: "pagamentos/confirmacao",
              query: { 
                cpf: cpf,
                option: selectedOption
              },
            });
        }
    }

    return (
        <form className="formPagamentos">
            
            <Input 
                id="inputcpf" 
                type="text"  
                maxLength={14} 
                value={cpf}
                className="form-control"
                onChange={handleChange}
                required
                placeholder="Digite seu CPF" 
            />
            {validationMessage &&
            <small style={{fontSize:"1rem"}} className="text-left w-100 text-danger">
                {validationMessage}
            </small>
            }
           
            <div className="formCheck">
                <div className="formPagamentos">

                    <h2 className="mt-3">Escolha o serviço desejado:</h2>

                    <InputGroup 
                        type="radio" 
                        label="1 - Pagar Registro de Música (calcula valor de todos pendentes)"
                        value={1}
                        id="registrodemusica"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label=" 2 - Pagamento de ISRC / ECAD"
                        value={2}
                        id="pagamentomatricula"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label="3 - Pagamento de Matrícula CCB"
                        value={3}
                        id="pagamentomatriculaCCB"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label="4 - Pagamento de Mensalidade CCB"
                        value={4}
                        id="pagamentomensalidadeCCB"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label="5 - Reativar Conta CCB"
                        value={5}
                        id="reativarcontaccb"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label="6 - Estúdio CCB - Arranjo e gravação de música"
                        value={6}
                        id="estudioccb"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label="7 - Festival CCB de Musica e Poesia - Pagar inscrição"
                        value={7}
                        id="festivalCCB"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label="8 - Coletânea CCB - Pagar parcela ou total"
                        value={8}
                        id="coletaneaccb"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label="9 - Cadastrar em Débito Automático (Mastercard, VISA ou Bradesco)"
                        value={9}
                        id="debitoautomatico"
                        onChange={handleOptionChange}
                    />

                    <InputGroup 
                        type="radio" 
                        label="10 - Outros Pagamentos"
                        value={10}
                        id="pagAvulso"
                        onChange={handleOptionChange}
                    />
                </div>  
            </div>

            <Button 
                type="button"
                value="Acessar Serviço"
                onClick={handlePagamentos}
                disabled={!isValidated || !selectedOption}
                // customClasses={!isValidated || !selectedOption ? `forbidden btn btn-primary text-white buttonPagamentos mt-3` : `btn btn-primary text-white buttonPagamentos mt-3`}
                // title={!isValidated && !selectedOption ? 'Preencha um CPF válido e escolha uma opção' :
                //     !isValidated ? 'Preencha um CPF válido' :
                //     !selectedOption ? 'Escolha uma opção de serviço' :
                //     ''}
            >
            </Button>
        </form>   
    )
}