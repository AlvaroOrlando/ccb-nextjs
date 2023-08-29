import Input from "@/components/Global/Input"
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
                maxLength="14" 
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

                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="1"  id="registrodemusica"/>
                        <label className="form-check-label" htmlFor="registrodemusica"> 1 - Pagar Registro de Música (calcula valor de todos pendentes) </label>
                    </div>
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="2" id="pagamentomatricula"/>
                        <label className="form-check-label" htmlFor="pagamentomatricula"> 2 - Pagamento de ISRC / ECAD </label>
                    </div>
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="3" id="pagamentomatriculaCCB"/>
                        <label className="form-check-label" htmlFor="pagamentomatriculaCCB"> 3 - Pagamento de Matrícula CCB </label>
                    </div>
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="4" id="pagamentomensalidadeCCB"/>
                        <label className="form-check-label" htmlFor="pagamentomensalidadeCCB"> 4 - Pagamento de Mensalidade CCB </label>
                    </div>
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="5" id="reativarcontaccb"/>
                        <label className="form-check-label" htmlFor="reativarcontaccb"> 5 - Reativar Conta CCB</label>
                    </div>
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="6" id="estudioccb"/>
                        <label className="form-check-label" htmlFor="estudioccb">6 - Estúdio CCB - Arranjo e gravação de música</label>
                    </div>
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="6" id="festivalccb" />
                        <label className="form-check-label" htmlFor="festivalccb">7 - Festival CCB de Musica e Poesia - Pagar inscrição</label>
                    </div>
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="7" id="coletaneaccb" />
                        <label className="form-check-label" htmlFor="coletaneaccb"> 8 - Coletânea CCB - Pagar parcela ou total</label>
                    </div> 
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="8" id="debitoautomatico"/>
                        <label className="form-check-label" htmlFor="debitoautomatico"> 8 - Cadastrar em Débito Automático (Mastercard, VISA ou Bradesco)

                        </label>
                    </div>
                    <div className="pagamentoItems">
                        <input onChange={handleOptionChange} className="form-check-input" name="radiobutton" type="radio" value="9" id="pagAvulso" />
                        <label className="form-check-label" htmlFor="pagAvulso"> 9 - Outros Pagamentos</label>
                    </div>
                </div>  
            </div>
            <button 
                type="button"
                onClick={handlePagamentos}
                disabled={!isValidated || !selectedOption}
                className={!isValidated || !selectedOption ? `forbidden btn btn-primary text-white buttonPagamentos mt-3` : `btn btn-primary text-white buttonPagamentos mt-3`}
                title={!isValidated && !selectedOption ? 'Preencha um CPF válido e escolha uma opção' :
                    !isValidated ? 'Preencha um CPF válido' :
                    !selectedOption ? 'Escolha uma opção de serviço' :
                    ''}
            >Acessar Serviço
            </button>
        </form>   
    )
}