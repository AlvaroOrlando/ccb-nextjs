import IsrcForm  from '../../../components/Forms/ISRC'
import Painel from "@/components/Painel";
import { MainContainer, PainelSection, PainelSectionContainer, VideoContainer } from "@/styles/styles";
import { TextoIsrc } from './styles'
import Crumb from '@/components/Crumb';
import { useRouter } from 'next/router';

export default function Isrc(){
    return (
        <>
            <Crumb  />

            <MainContainer>
                <PainelSectionContainer>
                  <Painel variant="yellow" content="PAINEL DO ISRC"/>
                  <PainelSection>

                    <IsrcForm />
                    
                  </PainelSection>
                </PainelSectionContainer>

                <VideoContainer>
                  <section className="mt-3" >
                    <iframe
                      src="https://www.youtube.com/embed/kUuz90_SG0g" 
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen>
                    </iframe>
                  </section>
                </VideoContainer>

                <TextoIsrc>
                  <h2 className="mb-3 mt-3">O que é ISRC?</h2>
                  <p>
                      Imagine a placa do seu carro. É uma numeração única que permite ao Detran localizar seu carro onde estiver.
                      O ISRC também é uma numeração única, usada para identificar sua música. Através do ISRC o ECAD consegue descobrir onde e quantas vezes sua música tocou para pagar seus Direitos Autorais.
                  </p>
                  <p>Mas, cuidado! Somente produtores fonográficos autorizados podem gerar ISRC. Fique tranquilo, pois o CCB está autorizado pelo ECAD a gerar ISRC há muitos anos.</p>
                  <p>Após ser gerado, seu ISRC é enviado pelo CCB para os computadores do ECAD. Pronto! A partir daí os aplicativos do ECAD localizam sua música onde quer que esteja tocando (Plataformas Digitais, rádios, shows, bares,etc.) e vai somando as audições. A cada três meses o dinheiro arrecadado pelo ECAD é rateado entre os autores.</p>
                  <h2 className="mb-3 mt-5">Por que eu preciso do ISRC?</h2>
                  <p>
                    Além do Registro da sua música - que protege contra roubo ou plágio -, ter o ISRC é essencial para que sua música seja localizada cada vez que toca e garanta a você o recebimento dos seus DIREITOS AUTORAIS por execução pública. Por exemplo: se uma composição sua for gravada por qualquer artista e tocada numa rádio, na internet, na TV, ou em qualquer outro meio, o ISRC + REGISTRO vão garantir que você receba os seus direitos autorais ($) devidos. Registro de música + ISRC garantem Proteção Total para sua obra!
                  </p>
                  <h2 className="mb-3 mt-5">Dúvida: qualquer site por ai pode gerar o ISRC junto ao ECAD?</h2>
                  <p>
                    * Não! Cuidado com imitações, nomes parecidos com o CCB ou outros tipos de golpe. O Clube dos Compositores do Brasil está na Internet há 24 anos e goza de extrema credibilidade. O CCB é filiado ao ECAD - Escritório Central de Arrecadação e Distribuição, que é o órgão brasileiro responsável pela arrecadação e distribuição dos direitos autorais das músicas aos seus autores. O ECAD foi criado pela Lei nº5.988/73 e mantido pela Lei Federal nº 9.610/98. Apenas produtores fonográficos afiliados podem gerar o ISRC. O CCB no seu compromisso em ajudar os compositores brasileiros presta esse serviço a preços subsidiados. Não caia em golpes. Confira aqui nossos serviços e Taxas.
                  </p>
                  <h2 className="mb-3 mt-5">ISRC - Tradução</h2>
                  <p>ISRC nada mais é do que uma sigla em inglês para &quot;International Standard Recording Code&quot;, ou Código de Gravação Padrão Internacional. Definido pela ISO 3901, é um padrão internacional de código para identificar de forma única as gravações. Seria como um código de barras ou QRCode de um produto e somente produtores afiliados ao ECAD podem gerar ISRC. O CCB é um produtor fonográfico autorizado pelo ECAD. As audições e o rateio são feitos por amostragem. Músicas com poucas audições não entram no rateio.</p>
                </TextoIsrc>
            </MainContainer>
        </>
    )
}