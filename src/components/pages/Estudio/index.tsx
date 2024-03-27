/* eslint-disable @next/next/no-img-element */

export interface EstudioProps {
    servico: string
}

import Crumb from "@/components/Crumb";

import styles from "@/styles/estudio.module.scss"

import StudioTableContainer from "./StudioTableContainer";
import StudioImgContainer from "./studioImgContainer";
import PainelContainer from "@/components/Containers/PainelContainer";
import Text from "@/components/Global/Text";
import EstudioForm from "./estudioForm";


export default function Estudio({ servico }:EstudioProps){

    const gravacaoTitle = "Arranjos e Gravações - Grave a sua música com profissionais!"
    const melodiaTitle = "Fazemos uma Melodia para o seu Poema ou Letra"

    const gravacaoFigcaption = `Agora você pode gravar sua música nos Estúdios do CCB com músicos e cantores profissionais por um preço acessível. 
    Gravamos usando instrumentos reais, violão, baixo, guitarra, percussão. Você pode até encontrarpreços mais baixos, 
    mas com instrumentos MIDI, simulados por teclado, e com qualidade muito inferior.`

    const melodiaFigcaption = `Se voce faz letras de música ou poesia mas não faz a melodia (a música), agora você pode contratar um compositor 
    profissional para fazer a melodia para sua letra por um preço acessivel`

    return (
        <>
          <Crumb  />
          <section className="MainContainer">
            <div className={styles.EstudioContainer}>
              
              <StudioImgContainer  
                title={servico === "gravacao" ? gravacaoTitle : servico === "melodia" ? melodiaTitle : null}
                figcaption={servico === "gravacao" ? gravacaoFigcaption : servico === "melodia" ? melodiaFigcaption : null}
              />

              <StudioTableContainer servico={servico} />

              <PainelContainer content="Contrate ou acompanhe agora mesmo!">
                <Text>
                  Para contratar gravações, entre com CPF e clique em GRAVAR. Se já contratou e quer enviar a amostra da sua música ou acompanhar o andamento dos serviços, entre com CPF e clique em ACOMPANHAR.
                </Text>
                <EstudioForm servico={servico} />
              </PainelContainer>

              <div className={styles.Container800}>
                <div className={styles.StudioService}>
                  <h1 className="subtitulosGlobal">O serviço inclui</h1>

                  <section>
                    { servico === "gravacao" ? (
                    <>
                      <ul>
                        <li className="mt-3"><strong>- Arranjo</strong> (um maestro define quais os instrumentos que a música deve ter - baixo, guitarra, teclados, bateria, cordas, etc.)</li>
                        <li className="mt-3"><strong>- Ensaios</strong> (cada músico ensaia a parte que vai executar)</li>
                        <li className="mt-3"><strong>- Gravação do playback</strong> (Playback é o acompanhamento da música, sem a voz. Cada músico grava seu instrumento separadamente, em canais independentes)</li>
                        <li className="mt-3"><strong>- Colocação de Voz</strong> (Um cantor profissional coloca a voz em cima do playback, bem como outros cantores fazem o backing vocals, que são os coros e vocais, se necessário. OBS: opcionalmente você pode colocar a voz. Será enviado com a gravação o PLAYBACK da música, que é o instrumental sem a voz)</li>
                        <li className="mt-3"><strong>- Mixagem</strong> (Um técnico de estúdio regula todos os volumes, graves e agudos, efeitos em instrumentos, voz, etc.)</li>
                        <li className="mt-3"><strong>- Masterização</strong> (Todos os canais de som, após mixados, são gravados em apenas dois canais, ou STEREO, que é como se ouve em um CD, MP3, etc.)</li>
                        <li className="mt-3"><strong>- Gravação do MP3</strong> (A música é convertida e disponibilizada para o cliente)</li>
                      </ul>
                      <p className="mt-4">OBS.: Você deve enviar uma gravação, mesmo caseira, para mostrar como é a música. Pode ser o arquivo de audio gravado de um celular, por exemplo.</p>
                      <p className="mt-3">Para enviar a música ou verificar o andamento do serviço, após o pagamento clique em Acompanhar.
                      </p>
                      <p className="mt-3">
                        Obs: Somente aceitaremos mídias em arquivos mp3, via online. Não envie por correio.
                      </p>
                      <p className="mt-3">
                        Nossas gravações tem qualidade de CD (24 bits, 44mhz - 160kbps), podendo ser executadas em Rádios, TVs, aparelhos de CD, mp3 e rádios da 
                        internet.
                      </p>
                    </>
                    ) : servico === "melodia" ?(
                    <>
                      <ul>
                        <li className="mt-3">- <b>Confecção de melodia</b> inédita por músico, maestro e compositor profissional, com gravação de voz e violão.Se contratar gravação, inclui ainda:</li>
                        <li className="mt-3">- <b>Arranjo</b> (um maestro define quais os instrumentos que a música deve ter - baixo, guitarra, teclados, bateria, cordas, etc.)</li>
                        <li className="mt-3">- <b>Ensaios</b> (cada músico ensaia a parte que vai executar)</li>
                        <li className="mt-3">- <b>Gravação do playback</b> (Playback é o acompanhamento da música, sem a voz. Cada músico grava seu instrumento separadamente, em canais independentes).</li>
                        <li className="mt-3">- <b>Colocação de Voz</b> (Um cantor ou cantora profissional coloca a voz em cima do playback, bem como outros cantores fazem o backing vocal, que são os coros e vocais, se necessário. OBS: opcionalmente você pode colocar a voz. Basta você pedir e remeteremos a gravação e o playback prontos para você colocar a voz).</li>
                        <li className="mt-3">- <b>Mixagem</b> (um técnico de estúdio regula todos os volumes, graves e agudos, efeitos em instrumentos, voz, etc.</li>
                        <li className="mt-3">- <b>Masterização</b> (Todos os canais de som, após mixados, são gravados em apenas dois canais, ou STEREO, que é como se ouve em um CD, MP3, etc.)</li>
                        <li className="mt-3">- <b>Gravação do MP3</b> (A música é convertida e disponibilizada para o cliente)</li>
                      </ul>
                      <p>
                        Importante: a música e a letra, bem como os eventuais direitos autorais, ficarão apenas em seu nome.
                      </p>
                      <p>
                        Nossas gravações tem qualidade de CD (24 bits, 44mhz - 160kbps), podendo ser executadas em Rádios, TVs, aparelhos de CD, mp3 e rádios da 
                        internet.
                      </p>
                    </>
                    ) : null
                  }
                 
                  </section>
                </div> 
              </div>
            </div>
          </section>
        </>
    )
}