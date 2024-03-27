import styles from "@/styles/associar.module.scss"
import Painel from "@/components/Containers/Painel";

export default function AssociarText(){

    //  Variáveis globais a serem substituídas pelas informaçōes do banco de dados
    const valor_matricula_g = 84
    const valor_mensalidade_g = 49
    
    return (
        <main>
            {/* Promoção */}
            <div className={`mt-3 subtitulosGlobal ${styles.shadowBox}`}>
                <h4>PROMOÇÃO</h4>
                <p style={{color:"rgb(106, 106, 6)", textAlign: "justify"}} >
                Associe-se agora e ganhe 3 registros de música completos por Equivalência Sonora.
                Basta uma gravação mp3 ou letra (não precisa de partitura).
                </p>
                <p>
                Preço da Matrícula: R$ {valor_matricula_g},00
                </p>
                <p style={{color:"rgb(106, 106, 6)", textAlign: "justify"}}>
                Já incluso: Matrícula + Carteira de Compositor com foto (receberá em casa)
                + Primeira mensalidade + Despesas de correio.
                </p>
            </div>

            {/* Demais Mensalidades */}
            <h4 className={`mt-3 subtitulosGlobal`}>
                Demais Mensalidades: R$ {valor_mensalidade_g},00 que dão direito a todos os serviços, incluindo:
            </h4>

            {/* Serviços */}
            <ul className={`mt-3 ${styles.servicosLista}`}>
                <li>
                Dois registros de música completos grátis por mês - só isso Já paga a mensalidade.
                </li>
                <li>
                Rodízio ilimitado de músicas no site, respeitado o limite de duas músicas de trabalho online por vez,
                tocando ilimitadamente na Radionline, Radionline Gospel, na sua página e nos outros veículos de divulgação CCB.
                </li>
                <li>
                Disponibilização de suas letras e músicas no site para produtores, artistas e gravadoras.
                </li>
                <li>
                Carteira de Compositor associado, ferramentas de divulgação, CCB Player, suporte especial para associados por Whatsapp.
                </li>
                <li>
                Descontos exclusivos para associados em Registro de Música, ISRC, Estúdio, Coletânea, etc.
                </li>
            </ul>

            {/* Como atuamos */}
            <div className={`mt-3 PainelSectionContainer ${styles.comoAtuamos}`} style={{maxWidth:"none"}}>
                <Painel variant="blue" content="COMO ATUAMOS"/>
                <p className={`subtitulosGlobal`} style={{fontWeight: "bold", paddingLeft: "1rem", paddingRight: "1rem"}}>
                O CCB tem muitos associados com músicas gravadas por artistas e gravadoras de sucesso.
                <button
                    className={`${styles.customButton}`}
                    data-bs-toggle="modal" 
                    data-bs-target="#sucesso">
                    Clique para ver!
                </button>
                </p>
                <ul className={`mt-3 ${styles.servicosLista}`}>
                <li>
                    Colocamos suas músicas para tocar na grade de programação da
                    <b> Radionline</b>
                    &nbsp;e da <b>Rádio CCB</b>,
                    as rádios Internet mais ouvidas do Brasil e com grande audiência na Europa, EUA, América Latina
                    e Japão. A Radionline é ouvida diariamente por produtores, diretores de gravadora e artistas em busca de novos
                    trabalhos.
                </li>
                <li>
                    Selecionamos uma ou duas músicas de trabalho, por vez, que podem ser vistas e escolhidas por
                    produtores, cantores e diretores artísticos de grandes gravadoras, conforme o estilo procurado.
                </li>
                <li>
                    Criamos e colocamos no ar uma página exclusiva para você no renomado portal do Clube dos Compositores do Brasil. 
                    Você vai ficar ao lado de grandes artistas do Brasil que também estão no site do Clube. O Portal do CCB é visitado 
                    diariamente por milhares de ouvintes e pelas pessoas que decidem no meio artístico: produtores, empresários, artistas 
                    e responsáveis por gravadoras, editoras, jornais, TV e mídia em geral. O CCB já foi elogiado por diversas empresas, 
                    canais de mídia e órgãos, como Warner, Sony, Globo, Secretaria da Cultura, etc.
                </li>
                <li>
                    Disponibilizamos todo seu material (release, agenda, fotos, letras e músicas), tornando-o 
                    acessível a partir de qualquer dispositivo.
                </li>
                </ul>
            </div>

            {/* PAINEL */}
            <div className='PainelSectionContainer' style={{maxWidth:"none"}}>
                <div className={`mt-3`}>
                    <Painel variant="blue" content="Se você reside no exterior:" />
                </div>

                {/* Lista */}
                <ul className={`${styles.servicosLista}`} style={{backgroundColor: "#fff"}}>
                    <li>
                    Se não possui CPF (documento emitido pela Receita Federal), entre com 000000 (6 zeros), seguidos dos 5 dígitos
                    finais de seu documento de identidade. EX: 00000054340. (total = 11 dígitos). Se não tem CEP, digite &rdquo;X&rdquo; no campo.
                    </li>
                    <li>
                    Devido ao grande número de sócios no Exterior,
                    temos um atendimento especial para os artistas &nbsp;
                    <b>
                        residentes fora do País. &nbsp;
                    </b>
                    Basta preencher o cadastro normalmente você pode utilizar todos os nossos serviços,
                    inclusive efetuar pagamentos, de onde estiver.
                    </li>
                </ul>
            </div>

            {/* Texto abaixo */}
            <p className={`${styles.attentionText}`}>
                <b>Atenção!</b> Só preencha se for se associar. Procuramos manter nossos serviços em padrão elevado e com os 
                menores Preços possíveis, subsidiados como estímulo à produção cultural.
            </p>
        </main>
    )
}