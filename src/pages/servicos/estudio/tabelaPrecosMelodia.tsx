import BaseModal from "@/components/BaseModal";

export default function TabelaPrecosMelodia(){

    // Valores Estudio e confecao de melodia voz/vioao
    const valoresEstudio = {
        socioCCB:490,
        socioPrata:465,
        socioOuro:450,
        socioPlatina:430,
        socioDiamante:416,
        socioSenior:392
    }

    // Valores Confeccao melodia com gravacao e arranjo em estudio
    const valoresMelodia = {
        socioCCB:790,
        socioPrata:750,
        socioOuro:726,
        socioPlatina:695,
        socioDiamante:671,
        socioSenior:632
    }

    const naoSocios = {
        estudioVozViolao:590,
        melodiaCompleto: 890
    }

    return (
        <div className="text-center">
        <BaseModal
            content="Tabela de Preços"
            titulo="Estúdio CCB - Tabela de Preços"
        >
            <p className="subtitulosGlobal text-dark">
             Se você tem uma Letra ou poesia sem música, nós fazemos a melodia.
            </p>
            <h3>1) Confecção de MELODIA</h3>
            <p>com gravação de voz e violão</p>
            <h5 className="subtitulosGlobal"> 
              Preços para Sócios:
            </h5>
            <ul>
                <li>
                    <h5 className="globalHeading">
                      Sócio CCB
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresEstudio.socioCCB/6)},00 - total: R$ {valoresEstudio.socioCCB},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Prata
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresEstudio.socioPrata/6)},00 - total: R$ {valoresEstudio.socioPrata},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Ouro
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresEstudio.socioOuro/6)},00 - total: R$ {valoresEstudio.socioOuro},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                     Sócio Platina
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresEstudio.socioPlatina/6)},00 - total: R$ {valoresEstudio.socioPlatina},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                       Sócio Diamante
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresEstudio.socioDiamante/6)},00 - total: R$ {valoresEstudio.socioDiamante},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Senior
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresEstudio.socioSenior/6)},00 - total: R$ {valoresEstudio.socioSenior},00</p>
                </li>
            </ul>
            <h3>2) Confecção de MELODIA</h3>
            <p>com gravação em estúdio com músicos profissionais, arranjo masterização, etc.</p>
            <ul>
                <li>
                    <h5 className="globalHeading">
                      Sócio CCB
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresMelodia.socioCCB/6)},00 - total: R$ {valoresMelodia.socioCCB},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Prata
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresMelodia.socioPrata/6)},00 - total: R$ {valoresMelodia.socioPrata},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Ouro
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresMelodia.socioOuro/6)},00 - total: R$ {valoresMelodia.socioOuro},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                     Sócio Platina
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresMelodia.socioPlatina/6)},00 - total: R$ {valoresMelodia.socioPlatina},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                       Sócio Diamante
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresMelodia.socioDiamante/6)},00 - total: R$ {valoresMelodia.socioDiamante},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Senior
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresMelodia.socioSenior/6)},00 - total: R$ {valoresMelodia.socioSenior},00</p>
                </li>
            </ul>
            <hr />
            <p className="subtitulosGlobal" style={{color:"green"}}>
                Pagamento em 6 parcelas somente por cartão de crédito, ou à vista por boleto, doc, cartão de crédito, etc.
            </p>
           
            <h5 className="subtitulosGlobal">
                Preços para não Sócios:
            </h5>
            <p>1) Confecção de melodia gravada com voz e violão:</p>
            <p className="subtitulosGlobal" style={{color:"green"}}>6 parcelas de R$ {Math.floor(naoSocios.estudioVozViolao/6)},00 - total = R$ {naoSocios.estudioVozViolao},00</p>
            <p>2) Melodia, arranjo e gravação profissional:</p>
            <p className="subtitulosGlobal" style={{color:"green"}}>6 parcelas de R$ {Math.floor(naoSocios.melodiaCompleto/6)},00 - total = R$ {naoSocios.melodiaCompleto},00</p>

            <p className="subtitulosGlobal text-dark" style={{fontStyle:"italic"}}>À vista por boleto ou em parcelas no cartão de crédito</p>
            <small>Importante: a música e a letra, bem como os eventuais direitos autorais, ficarão apenas em seu nome.</small>
        </BaseModal>
        </div>
    )
}