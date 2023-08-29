import BaseModal from "../../BaseModal"
import styles from "../../../pages/servicos/isrc/isrc.module.scss"
interface BaseModalType {
    content: string
}
export default function TaxasModal({content}:BaseModalType){

    const valoresISRC = {
        associados: {
          primeiraMusica: '70',
          segundaMusica: '60',
          terceiraMusica: '50',
          quartaMusica: '36'
        },
        naoAssociados: {
          primeiraMusica: '80',
          segundaMusica: '70',
          terceiraMusica: '60',
          quartaMusica: '48'
        }
    } 

    return (
        <BaseModal titulo="CERTIFICADO ISRC/ECAD - TAXAS" content={content}>
            
            <h4 className="subtitulosGlobal">Serviços inclusos</h4>
            <ul className="mt-3">
                <li>Geração de Código Exclusivo ISRC</li>
                <li>Remessa ao ECAD</li>
                <li>Emissão de Certificado</li>
                <li>Guarda vitalícia do Certificado</li>
            </ul>
            <hr />
            <h4 className="subtitulosGlobal">Valores com desconto progressivo</h4>
            <p className="text-center">(Quanto mais ISRCs gerar, maior o desconto)</p>

            {/* Associados */}
            <div className={styles.associate}>
                <h5 className="mt-3">Associado CCB</h5>
                <div>
                <label>Primeira música</label>
                <p>
                    {`R$ ${valoresISRC.associados.primeiraMusica},00 `}
                    - total {`R$ ${valoresISRC.associados.primeiraMusica},00 `} 
                    ou 06 parcelas de {`R$ ${(parseFloat(valoresISRC.associados.primeiraMusica) / 6).toFixed(1)}0`}
                </p>
                </div>
                <div className="mt-3">
                <label>Segunda música</label>
                <p>
                    {`R$ ${valoresISRC.associados.segundaMusica},00 `}
                    - total {`R$ ${valoresISRC.associados.segundaMusica},00 `} 
                    ou 06 parcelas de {`R$ ${(parseFloat(valoresISRC.associados.segundaMusica) * 2 / 6).toFixed(1)}0`}
                </p>
                </div>
                <div className="mt-3">
                <label>Terceira música</label>
                <p>
                    {`R$ ${valoresISRC.associados.terceiraMusica},00 `}
                    - total {`R$ ${valoresISRC.associados.terceiraMusica},00 `} 
                    ou 06 parcelas de {`R$ ${(parseFloat(valoresISRC.associados.terceiraMusica) * 3 / 6).toFixed(1)}0`}
                </p>
                </div>
                <div className="mt-3">
                <label>Quarta música</label>
                <p>
                    {`R$ ${valoresISRC.associados.quartaMusica},00 `}
                    - total {`R$ ${valoresISRC.associados.quartaMusica},00 `} 
                    ou 06 parcelas de {`R$ ${(parseFloat(valoresISRC.associados.quartaMusica) * 4 / 6).toFixed(1)}0`}
                </p>
                </div>
            </div>

            <hr />

            {/* Não Associados */}
            <div className={styles.associate}>
                <h5 className="mt-3">Não associados</h5>
                <div>
                <label>Primeira música</label>
                <p>R$ 80,00 - total R$ 80,00 ou 06 parcelas de R$ 13,30</p>
                </div>
                <div className="mt-3">
                <label>Segunda música</label>
                <p>R$ 70,00 - total R$ 150,00 ou 06 parcelas de R$ 25,00</p>
                </div>
                <div className="mt-3">
                <label>Terceira música</label>
                <p>R$ 60,00 - total R$ 210,00 ou 06 parcelas de R$ 35,00</p>
                </div>
                <div className="mt-3">
                <label>Quarta música</label>
                <p>R$ 48,00 - total R$ 258,00 ou 06 parcelas de R$ 43,00</p>
                </div>
            </div>
        </BaseModal>
    )
}