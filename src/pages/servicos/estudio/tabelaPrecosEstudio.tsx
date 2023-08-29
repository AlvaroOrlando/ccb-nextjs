import BaseModal from "@/components/BaseModal";

export default function TabelaPrecosEstudio(){

    const valoresGLobais = {
        socioCCB:490,
        socioPrata:465,
        socioOuro:450,
        socioPlatina:430,
        socioDiamante:416,
        socioSenior:392
    }

    return (
        <div className="text-center">
        <BaseModal
            content="Tabela de Preços"
            titulo="Estúdio CCB - Tabela de Preços"
        >
            <p className="subtitulosGlobal text-dark">
                Gravação e arranjo de uma música em mp3 ou CD em Estúdio Profissional, incluindo taxas de estúdio, 
                músicos ao vivo inclusive bateria, cantores, vocais, arranjos, mixagem, playback e masterização.
            </p>
            <h5 className="subtitulosGlobal"> 
              Preços para Sócios:
            </h5>
            <ul>
                <li>
                    <h5 className="globalHeading">
                      Sócio CCB
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresGLobais.socioCCB/6)},00 - total: R$ {valoresGLobais.socioCCB},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Prata
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresGLobais.socioPrata/6)},00 - total: R$ {valoresGLobais.socioPrata},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Ouro
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresGLobais.socioOuro/6)},00 - total: R$ {valoresGLobais.socioOuro},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                     Sócio Platina
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresGLobais.socioPlatina/6)},00 - total: R$ {valoresGLobais.socioPlatina},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                       Sócio Diamante
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresGLobais.socioDiamante/6)},00 - total: R$ {valoresGLobais.socioDiamante},00</p>
                </li>
                <li>
                    <h5 className="globalHeading">
                      Sócio Senior
                    </h5>
                    <p>06 parcelas de R$ {Math.floor(valoresGLobais.socioSenior/6)},00 - total: R$ {valoresGLobais.socioSenior},00</p>
                </li>
            </ul>
            <p className="subtitulosGlobal" style={{color:"green"}}>
                Pagamento em 6 parcelas somente por cartão de crédito, ou à vista por boleto, doc, cartão de crédito, etc.
            </p>
            <hr />
            <h5 className="subtitulosGlobal">
                Preços para não Sócios:
            </h5>
            <p className="subtitulosGlobal" style={{color:"green"}}>6 parcelas de 98,00 - total = 590,00</p>
            <p className="subtitulosGlobal text-dark" style={{fontStyle:"italic"}}>À vista por boleto ou em parcelas no cartão de crédito</p>
            <p className="subtitulosGlobal">
                * Ritmo de samba, pagode, partido alto e congêneres terão um acréscimo de 80,00 devido à quantidade de trilhas e 
                instrumentos (percussão ao vivo).
            </p>
        </BaseModal>
        </div>
    )
}