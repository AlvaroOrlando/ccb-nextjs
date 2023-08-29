interface Pagamentos2FormProps {
    cpf:string | undefined | string[]
}

export default function Pagamentos2Form({cpf}:Pagamentos2FormProps){
    
    return (
        <form className="pagamentosContainer">
            <div className="formPagamentos2">
                <label htmlFor="nome_input">Nome:</label>
                <input id="nome_input" className="form-control" name="nome" type="text" value="" maxLength={150} />

                {/* <!-- CPF --> */}
                <label htmlFor="cpf_input">CPF:</label>    
                <input className="form-control" id="cpf_input" type="text" value={cpf} />

                <input name="cpfcgc" type="hidden" value = "" />
                <input name="pedido" type="hidden" value = "" />
                <input name="pedidof" type="hidden" value = "" />
                <input name="quem" type="hidden" value = "" />
                <input name="codigo_pedido" type="hidden" value = "" />
                <input name="registro" type="hidden" value = "" />
                <input name="central" type="hidden" value = "" />
                <input name="senha" type="hidden" value = "" />
                
                {/* <!-- Endereço --> */}
                <label htmlFor="endereco_input">Endereço:</label>
                <input className="form-control" id="endereco_input" name="endereco" type="text" value=""  maxLength={255}  />

                {/* <!-- Cidade --> */}
                <label htmlFor="cidade_input">Cidade:</label>
                <input  id="cidade_input" name="cidade" className="form-control" type="text" value="" maxLength={15} />

                {/* <!-- Estado --> */}
                <label htmlFor="estado_input">Estado:</label>
                <input id="estado_input" className="form-control" name="estado" type="text"  value=""  maxLength={2} />
                
                {/* <!-- Cep --> */}
                <label htmlFor="cep_input">CEP:</label>
                <input id="cep_input" className="form-control" name="cep" type="text" value="" maxLength={8}  />
            
                <label htmlFor="email_input">E-mail</label>
                <input id="email_input" type="text" className="form-control" name="Email_cliente" maxLength={50} value="" />
                
                {/* <!-- Prazo --> */}
                <label htmlFor="diasvencimento"> Prazo p/ pgto.:
                  <p className="mb-0">(se for boleto)</p>
                </label>
                <input id="diasvencimento" className="form-control" name="diasvencimento" type="text" value="05"  maxLength={3} />
                
                {/* <!-- Valor --> */}
                <label htmlFor="valor_input">Valor do pgto.:</label>
                <input className="form-control" id="valor_input" type="text" value="" />
                <input name="valor" type="hidden" value = "<%= valor %>" />
                
                {/* <!-- Submit --> */}
                <input className="btn  btn-primary mt-3 text-white" type="submit" value="Clique aqui para Pagar!" />
            </div>
        </form>
    )
}