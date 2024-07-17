

/* eslint-disable @next/next/no-img-element */
import Address from '@/components/Forms/Address'
import Button from '../../../components/Global/Button'
import SvContentContainer from './Containers/SvContentContainer'
import SvDescriptionContainer  from './Containers/SvDescriptionContainer'
import SvRightContainer  from './Containers/SvRightContainer'
import SvSessionContainer  from './Containers/SvSessionContainer'
import DadosPessoais from '@/components/Forms/DadosPessoais'

function handleAddresSubmit(){
  console.log("hello");
}

export default function Conta(){

  const forma_de_pgto = null
  const frequencia_pgto = null
  const totfatura = ""
  const digito = ""
  const tot_semestral = ""
  const semestre_brutal = ""
  const ano_brutal = ""
  const tot_anual = ""
  const agencia = ""
  const conta = ""
  const musicas_pagas = 0
  const Total_da_fatura_mensal = 0
  const fatura_semestral = 0
  const fatura_anual = 0
   

  // Fazer busca no banco de dados:
  // const avatarSrc = "https://avatars.githubusercontent.com/u/92760374?v=4"
  const avatarSrc = ""

  function handlePersonalDataSubmit(){
    console.log("Dados enviados");
  }
    return (
      <SvSessionContainer>
        <SvContentContainer>
          
            <SvDescriptionContainer 
              title='Informações pessoais'
              description='Nesta seção, você tem o controle total sobre suas informações pessoais. Pode visualizar, editar e salvar dados, incluindo a opção de atualizar sua foto de perfil. Mantenha suas informações sempre atualizadas, garantindo precisão em seu perfil.'
            />

            <SvRightContainer>
              <DadosPessoais size='sm' align='left' avatar onSubmit={handlePersonalDataSubmit}/>
            </SvRightContainer>
            
        </SvContentContainer>

        <hr />

        <SvContentContainer>
          
            <SvDescriptionContainer 
              title='Endereço'
              description='Visualize, edite e salve suas informações de localização conforme necessário. Mantenha seu endereço sempre atualizado para garantir uma experiência contínua e precisa em nossos serviços.'
            />

            <SvRightContainer>
              <Address onSubmit={handleAddresSubmit} />
            </SvRightContainer>
            
        </SvContentContainer>

        <hr />

        <SvContentContainer>
          
            <SvDescriptionContainer 
              title='Pagamentos'
              description='Visualize, atualize e escolha seus métodos de pagamento favoritos. Defina o melhor dia para transações suaves. Oferecemos flexibilidade para atender às suas preferências, seja cartão de crédito, débito automático ou outra opção.'
            >
              {/* Informações */}
              <div>
                <h4 style={{color: "#02599a", fontFamily: 'Oswald'}}>Mensalidade</h4>
                <p>
                  Sua mensalidade total é:
                  <span style={{color: "green"}}> {`R$ ${totfatura}`}</span> 
                  <small>
                    (ref. a R$ 49,00 de mensalidade padrão com duas músicas online +
                    <input type="hidden" name="totfatura" value="<% = totfatura %>" />
                    <input type="hidden" name="alterou" value="nao" />
                    {`R$ ${3*musicas_pagas}`},00 referentes a {musicas_pagas} músicas adicionais.
                  </small>
                </p>
                
                
                <h4 style={{color: "#02599a", fontFamily: 'Oswald'}} className="mt-3">Opções de pagamento:</h4>
                <p>Sua opção atual é por pagamento</p>
                  

                {frequencia_pgto !== "8" && frequencia_pgto !== "9" && forma_de_pgto !== "4" && forma_de_pgto !== "7" && (
                  <>
                    <p>
                      MENSAL e o valor de sua fatura é de:{" "}
                      <span style={{ color: "green" }}>{`R$ ${Total_da_fatura_mensal}`}</span>
                    </p>
                  </>
                )}

                {forma_de_pgto === "7" && (
                  <>
                    <p>
                      MENSAL com Débito Automático Bradesco e o valor de sua fatura é de:{" "}
                      <span style={{ color: "green" }}>{`R$ ${Total_da_fatura_mensal}`}</span>
                    </p>
                  </>
                )}

                {frequencia_pgto === "8" && (
                  <>
                    <p>
                      SEMESTRAL e o valor de sua fatura é de:{" "}
                      <span style={{ color: "green" }}>{`R$ ${fatura_semestral}`}</span>
                    </p>
                  </>
                )}

                {frequencia_pgto === "9" && (
                  <>
                    <p>
                      ANUAL e o valor de sua fatura é de:{" "}
                      <span style={{ color: "green" }}>{`R$ ${fatura_anual}`}</span>
                    </p>
                  </>
                )}

                {forma_de_pgto === "4" && (
                  <>
                    <p>
                      CARTÃO DE CRÉDITO por débito automático e o valor de sua fatura é de: R${" "}
                      <span style={{ color: "green" }}>{`R$ ${Total_da_fatura_mensal}`}</span>
                    </p>
                  </>
                )}

                
                
                <h4 style={{color: "#02599a", fontFamily: 'Oswald'}} className="mt-3">Escolher  Forma de Pagamento:</h4>
                <p style={{marginBottom: "0px"}}>Clique na bolinha ao lado da opção 1, 2, 3, 4 ou 5.</p>
                <p>Você também pode mudar apenas o dia de pagamento, deixando a forma atual.</p>
              </div>
            </SvDescriptionContainer>

            <SvRightContainer>
                
              {/* Inputs */}
              <form action="">
                <div style={{display:'flex', flexDirection:'column', gap:'1rem'}}>
                  <ol className="pagamentoList">
                  
                    {/* Débito Automático Bradesco */}
                    <li>
                      <div className="form-check">
                        <input id="debAut" type="radio" className="form-check-input" name="radiobutton" value={totfatura}  onClick={() => { /* Lógica do clique aqui */ }} />
                        <label className="form-check-label" htmlFor="debAut">Débito Automático Bradesco</label>
                        <small>(somente cliente Bradesco)</small>
                      </div>


                      <small style={{fontStyle: "italic", color: "#595757"}}>Autorizo o débito em minha conta corrente Bradesco no valormensal de 
                        <span style={{color: "green"}}>
                          {`R$ ${totfatura}`}
                        </span>
                      </small>
                      
                      {/* Tipo de Conta  */}
                      <div className="mt-3">
                        <p>Tipo da conta BRADESCO:</p>

                        {/* C.C.  */}
                        <div className="form-check">
                          <input id="cc" className="form-check-input" type="radio"  name="tipo_conta" onClick={() => { /* Lógica do clique aqui */ }} value="1"   />
                          <label className="form-check-label" htmlFor="cc">conta corrente</label>
                        </div>

                        {/* Poupança  */}
                        <div className="form-check">
                          <input id="poup" className="form-check-input" type="radio" name="tipo_conta" onClick={() => { /* Lógica do clique aqui */ }} value="2"  />
                          <label htmlFor="poup" className="form-check-label">poupança</label>
                        </div>
                        
                        <label className="mt-3" htmlFor="diaDeb">Melhor dia para débito:</label>
                        <select id="diaDeb" className="form-select mt-1" name="melhor_dia">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20" selected>20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                        </select>
                        
                        {/* Agência  */}
                        <div className="form-group mt-3">
                          <label htmlFor="ag">Agência (sem o dígito):</label>
                          <input className="form-control" id="ag" type="text" name="agencia" maxLength={5} size={3} value={agencia} />
                        </div>

                        {/* Conta  */}
                        <div className="form-group mt-3">
                          <label htmlFor="conta">Conta:</label>
                          <input className="form-control" id="conta" type="text" name="conta" maxLength={8} size={4} value={conta}/>
                        </div>

                        {/* Dígito:  */}
                        <div className="form-group mt-3">
                          <label htmlFor="dig">Dígito:</label>
                          <input className="form-control" id="dig" type="text" name="digito" maxLength={2} size={1} value={digito} />
                        </div>
                      </div>
                    </li> 
                
                    
                    {/* Débito Automático VISA, MASTERCARD, DINERS, ELO,DISCOVER  */}
                    <li className='mt-3'>
                      <div className="form-check">
                        <input id="debAut2" type="radio" className="form-check-input" name="radiobutton" value={totfatura}  onClick={() => { /* Lógica do clique aqui */ }} />
                        <label className="form-check-label" htmlFor="debAut2">Débito Automático VISA, MASTERCARD, DINERS, ELO,DISCOVER</label>
                      </div>
                      
                      <small style={{fontStyle: "italic", color: "#595757"}}>
                        Apenas para cartões de crédito. Não válido para cartões de débito. Autorizo o débito mensal em meu
                        Cartão de Crédito abaixo, no valor mensal de
                        <span style={{color: "green"}}>
                        {`R$ ${totfatura}`}
                        </span> . 
                      </small>
                              
                      {/* Melhor dia  */}
                      <div className="mt-3">
                          <label htmlFor="melhorDiaMes">Melhor dia do mês para débito: </label>
                          <select id="melhorDiaMes" className="form-select" name="dia_cartao">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                            <option value="11">11</option>
                            <option value="12">12</option>
                            <option value="13">13</option>
                            <option value="14">14</option>
                            <option value="15">15</option>
                            <option value="16">16</option>
                            <option value="17">17</option>
                            <option value="18">18</option>
                            <option value="19">19</option>
                            <option value="20" selected>20</option>
                            <option value="21">21</option>
                            <option value="22">22</option>
                            <option value="23">23</option>
                            <option value="24">24</option>
                            <option value="25">25</option>
                            <option value="26">26</option>
                            <option value="27">27</option>
                            <option value="28">28</option>
                            <option value="29">29</option>
                            <option value="30">30</option>
                          </select>
                      </div>
                          
                      {/* Nome cartão  */}
                      <div className="form-group mt-3">
                        <label htmlFor="nomeCartao">Digite seu nome como está no cartão:</label>
                        <input className="form-control" id="nomeCartao" type="text" name="nome_no_cartao" maxLength={60} size={30} value="" />
                      </div>
                            
                      {/* Cartão emitido  */}
                      <div className="mt-3">
                        <label htmlFor="cartaoEmitido">Cartão emitido por:</label>
                        <select id="cartaoEmitido" className="form-select" name="b&&eira" onChange={() => { /* Lógica do clique aqui */ }}>
                          <option value="1">Visa</option>
                          <option value="2">Mastercard</option>
                          <option value="3">Diners</option>
                          <option value="4">Elo</option>
                          <option value="5">Discover</option>
                        </select>
                      </div>
                            
                      {/* Número cartão     */}
                      <div className="form-group mt-3">
                        <label htmlFor="numCartao">Número do cartão: </label>
                        <input className="form-control" id="numCartao" type="text" name="numcard" maxLength={16} size={15} value=""  />
                      </div>
                      
                      {/* Validade  */}
                      <div className="form-group mt-3">
                        <p style={{color: "#02599a", fontFamily: 'Oswald'}}>VALIDADE:</p>
                        <label htmlFor="validade">Mês (02 dígitos)</label>
                        <input className="form-control" id="validade" type="text" name="mes_validade" size={4} maxLength={2} value=""/>
                      </div>

                      {/* Ano  */}
                      <div className="form-group mt-3">
                        <label htmlFor="anoCartao">Ano (02 dígitos):</label>
                        <input className="form-control" id="anoCartao" type="text" name="ano_validade" size={4} maxLength={2} value=""/>
                      </div>
                              
                      {/* Código Segurança        */}
                      <div className="form-group mt-3">
                        <label htmlFor="codSegu">Código de Segurança:</label>
                        <input className="form-control" id="codSegu" type="text" name="verificacao" maxLength={3} size={3} value=""  />
                      </div>
                    </li>
                    
                    {/* Boleto Mensal  */}
                    <li className='mt-3'>
                      <div className="form-check">

                        <label htmlFor="boletoMensal">
                          {/* Boleto Mensal:  */}
                          <small>
                            Valor 
                            <span style={{color: "green"}}>
                            {` R$ ${totfatura}`}
                            </span>.
                          </small>
                        </label>

                        {
                          (forma_de_pgto !== "4" && forma_de_pgto !== "7" && frequencia_pgto !== "8" && frequencia_pgto !== "9") ? (
                            <input id="boletoMensal" type="radio" className="form-check-input" name="radiobutton" value={totfatura} onClick={() => { /* Lógica do clique aqui */ }} />
                          ) : (
                            <input id="boletoMensal" type="radio" className="form-check-input" name="radiobutton" value={totfatura} onClick={() => { /* Lógica do clique aqui */ }} />
                          )
                        }
                      </div>	  

                    {/* Melhor dia Vencimento  */}
                    <div className="mt-3">
                      <label htmlFor="melhorDiaVencimento">Melhor dia vencimento:</label>
                      <select id="melhorDiaVencimento" className="form-select" name="melhor_dia2">
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20" selected>20</option>
                        <option value="25">25</option>
                        <option value="30">30</option>
                      </select>
                    </div>
                    </li>            
                      
                    {/* Semestral Antecipado  */}
                    <li className='mt-3'>
                    {
                      frequencia_pgto === "8" ? (
                        <input
                          id="pagSemAntec"
                          type="radio"
                          className="form-check-input"
                          name="radiobutton_freq"
                          checked
                          onClick={() => { /* Lógica do clique aqui */ }}
                        />
                      ) : (
                        <input
                          id="pagSemAntec"
                          type="radio"
                          className="form-check-input"
                          name="radiobutton_freq"
                          onClick={() => { /* Lógica do clique aqui */ }}
                        />
                      )
                    }

                      <label className='mx-2' htmlFor="pagSemAntec">
                        Pagamento Semestral antecipado:&nbsp;
                        <span style={{color:"green"}}>
                          10% desconto
                        </span>:
                        De 
                        &nbsp;
                        <span style={{textDecoration: "lineThrough"}}>
                          {`R$ ${semestre_brutal},00 `}
                        </span>
                        &nbsp;
                        por <span style={{color: "green"}}>{`R$ ${tot_semestral}`}</span>
                      </label>
                    </li>

                    {/* Anual Antecipado  */}
                    <li className='mt-2'>
                      {
                        frequencia_pgto === "9" ? (
                          <input
                            id="pagAnualAnt"
                            type="radio"
                            className="form-check-input"
                            name="radiobutton_freq"
                            checked
                            onClick={() => { /* Lógica do clique aqui */ }}
                          />
                        ) : (
                          <input
                            id="pagAnualAnt"
                            type="radio"
                            className="form-check-input"
                            name="radiobutton_freq"
                            onClick={() => { /* Lógica do clique aqui */ }}
                          />
                        )
                      }

                      <label className='mx-2' htmlFor="pagAnualAnt">
                        Pagamento Anual antecipado:&nbsp;
                        <span style={{color:"green"}}>
                          15% de desconto:&nbsp;
                        </span>
                        De
                        &nbsp;
                        <span style={{textDecoration: "lineThrough"}}>
                          {`R$ ${ano_brutal},00`}
                        </span>
                        &nbsp;
                        
                        por
                        <span style={{color: "green"}}>
                          {` R$ ${tot_anual}`}
                        </span>
                      </label>
                    </li>
                  </ol>
                  <div className='mx-3' style={{maxWidth:'200px'}}>
                    <Button value="Salvar"/>
                </div>
                </div>
                
              </form>

            </SvRightContainer>
        </SvContentContainer>
      </SvSessionContainer>
    )
}