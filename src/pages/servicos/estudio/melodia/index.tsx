/* eslint-disable @next/next/no-img-element */
import Crumb from "@/components/Crumb";
import MainContainer from "@/components/MainContainer";
import styles from "../estudio.module.scss"
import StudioTableContainer from "../StudioTableContainer";
import StudioImgContainer from "../studioImgContainer";
import PainelSectionContainer from "../painelSectionContainer";

export default function EstudioMelodia(){
    return (
        <>
        <Crumb />
        <MainContainer>
          <div className={styles.EstudioContainer}>
          <StudioImgContainer 
            title="Fazemos uma Melodia para o seu Poema ou Letra"
            figcaption="Se voce faz letras de música ou poesia mas não faz a melodia (a música), agora você pode contratar um compositor 
            profissional para fazer a melodia para sua letra por um preço acessivel."
           />

            <ul className="mt-3 mt-0 mb-0" style={{listStyleType: 'decimal'}}>
              <li>
                Receber sua nova música com sua letra gravada apenas com voz e violão, sem arranjo.
              </li>
              <li className="mt-2">
                Receber sua nova música com gravação em estúdio profissional, com arranjo, mixagem, e instrumentos 
                ao vivo.
              </li>
            </ul>

            <p className={`${styles.studio_p} px-3 mt-3`}>
              Você pode encontrar preços mais baixos no mercado, mas normalmente são gravações não profissionais, 
              feitas com teclados imitando instrumentos, o famoso MIDI.
            </p>

            <StudioTableContainer />

            <PainelSectionContainer />

            <div className={styles.Container800}>
                <div className={styles.StudioService}>
                  <h1 className="subtitulosGlobal">O serviço inclui</h1>

                  <section>
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
                    <p>Importante: a música e a letra, bem como os eventuais direitos autorais, ficarão apenas em seu nome.</p>
                    <p>Nossas gravações tem qualidade de CD (24 bits, 44mhz - 160kbps), podendo ser executadas em Rádios, TVs, aparelhos de CD, mp3 e rádios da internet.</p>
                  </section>
                </div> 
              </div>
          </div>
        </MainContainer>
      </>
    )
}