/* eslint-disable @next/next/no-img-element */

import Painel from "@/components/Painel";
import Crumb from "@/components/Crumb";

import styles from "../estudio.module.scss"

import EstudioForm from "../estudioForm";
import StudioTableContainer from "../StudioTableContainer";
import StudioImgContainer from "../studioImgContainer";
import PainelSectionContainer from "../painelSectionContainer";

export default function EstudioGravar(){


    return (
        <>
          <Crumb  />
          <section className="MainContainer">
            <div className={styles.EstudioContainer}>

              <StudioImgContainer  
                title="Arranjos e Gravações - Grave a sua música com profissionais!"
                figcaption="
                  Agora você pode gravar sua música nos Estúdios do CCB com músicos e cantores profissionais por um preço acessível. 
                  Gravamos usando instrumentos reais, violão, baixo, guitarra, percussão. Você pode até encontrarpreços mais baixos, 
                  mas com instrumentos MIDI, simulados por teclado, e com qualidade muito inferior."
              />

              <StudioTableContainer />

              <PainelSectionContainer />

              <div className={styles.Container800}>
                <div className={styles.StudioService}>
                  <h1 className="subtitulosGlobal">O serviço inclui</h1>

                  <section>
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
                    <p className="mt-3">Obs: Somente aceitaremos mídias em arquivos mp3, via online. Não envie por correio.</p>
                    <p className="mt-3">Nossas gravações tem qualidade de CD (24 bits, 44mhz - 160kbps), podendo ser executadas em Rádios, TVs, aparelhos de CD, mp3 e rádios da internet.</p>
                  </section>
                </div> 
              </div>
            </div>
          </section>
        </>
    )
}