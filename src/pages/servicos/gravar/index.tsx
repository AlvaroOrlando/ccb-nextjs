/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

import EstudioForm from "@/components/Forms/Estudio";
import Painel from "@/components/Painel";


import { Container800, EstudioContainer, StudioImgContainer, StudioService, TabelaContainer } from "./styles";

import capaEstudio from '../../../assets/images/capa_estudio.jpg';
import { Table } from "react-bootstrap";
import ReactAudioPlayer from 'react-audio-player';
import { MainContainer, PainelSection, PainelSectionContainer } from "@/styles/styles";
import Crumb from "@/components/Crumb";

export default function EstudioGravar(){


    return (
        <>
          <Crumb  />
          <MainContainer>
            <EstudioContainer>
              <StudioImgContainer>
                <h1>Arranjos e Gravações - Grave a sua música com profissionais!</h1>
                <figure>
                  <img src={capaEstudio.src} alt="" />
                  <figcaption className="mt-3 px-3">
                    Agora você pode gravar sua música nos Estúdios do CCB com músicos e cantores profissionais por um preço acessível. Gravamos usando instrumentos reais, violão, baixo, guitarra, percussão. Você pode até encontrar
                    preços mais baixos, mas com instrumentos MIDI, simulados por teclado, e com qualidade muito inferior.
                  </figcaption>
                </figure>
              </StudioImgContainer>

              <TabelaContainer className="tabela-studio mt-3">
                <Link href="https://www.clubedoscompositores.com.br/estudio/estudioprecos.htm">
                  Tabela de preços
                </Link>
                <p className="mt-3">
                  <b>
                    Pagamentos por cartão de crédito parcelado até 6 vezes ou à vista no boleto.
                  </b>
                </p>
                <p className="mt-3">
                  O que esperar do Estúdio CCB? Clique nos links abaixo para ouvir uma amostra:
                </p>

                <Table bordered hover>
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col"><b>ESTILO MUSICAL</b></th>
                      <th scope="col"><b>EXEMPLOS</b></th>
                    </tr>
                  </thead>
                  <tbody>
                   {/* MPB */}
                    <tr>
                      <th scope="row">1</th>
                      <td>MPB</td>
                      <td>
                        <Link href="">
                          mbp 1
                        </Link>
                          &nbsp;-&nbsp; 
                        <Link href="" >
                          mbp 2
                        </Link>
                      </td>
                    </tr>

                    {/* Rock */}
                    <tr>
                      <th scope="row">2</th>
                      <td>POP/ROCK</td>
                      <td>
                        <Link href="">pop 1</Link> 
                          &nbsp;-&nbsp; 
                        <Link href=""> pop 2</Link> 
                          &nbsp;-&nbsp; 
                        <Link href=""> pop 3</Link> 
                          &nbsp;-&nbsp; 
                        <Link href=""> pop 4</Link>
                      </td>
                    </tr>

                    {/* Sertanejo */}
                    <tr>
                      <th scope="row">3</th>
                      <td>SERTANEJO</td>
                      <td>
                        <Link href="">sertanejo 1</Link> 
                          &nbsp;-&nbsp; 
                        <Link href="">sertanejo 2</Link> 
                          &nbsp;-&nbsp; 
                        <Link href="">sertanejo 3</Link> 
                          &nbsp;-&nbsp; 
                        <Link href="">sertanejo 4</Link>
                      </td>
                    </tr>

                    {/* Samba */}
                    <tr>
                      <th scope="row">4</th>
                      <td>SAMBA</td>
                      <td>
                        <Link href="">samba 1</Link> 
                          &nbsp;-&nbsp; 
                        <Link href=""> samba 2</Link>
                      </td>
                    </tr>
                    {/* Gospel */}
                    <tr>
                      <th scope="row">5</th>
                      <td>GOSPEL</td>
                      <td>
                        <Link href="">gospel 1</Link> 
                          &nbsp;-&nbsp; 
                        <Link href=""> gospel 2</Link>
                      </td>
                    </tr>

                   {/* Romantico */}
                    <tr>
                      <th scope="row">6</th>
                      <td>ROMÂNTICO</td>
                      <td>
                        <Link href="">Romântico 1</Link>
                      </td>
                    </tr>

                    {/* Marchinha */}
                    <tr>
                      <th scope="row">7</th>
                      <td>MARCHINHA</td>
                      <td>
                        <Link href="">Marchinha 1</Link>
                      </td>
                    </tr>
                  </tbody>
                </Table>

                <ReactAudioPlayer
                  src=""
                  autoPlay
                  controls
                />
              </TabelaContainer>

              <PainelSectionContainer>
                <Painel variant="yellow" content="Contrate ou acompanhe agora mesmo!"/>

                <PainelSection>
                  <p>
                    Para contratar gravações, entre com CPF e clique em GRAVAR. Se já contratou e quer enviar a amostra da sua música ou acompanhar o andamento dos serviços, entre com CPF e clique em ACOMPANHAR.
                  </p>
                  
                  <EstudioForm />

                </PainelSection>

              </PainelSectionContainer>

              <Container800>
                <StudioService>
                  <h1>O serviço inclui</h1>

                  <section>
                    <ul>
                      <li className="mt-3"><strong>- Arranjo</strong> (um maestro define quais os instrumentos que a música deve ter - baixo, guitarra, teclados, bateria, cordas, etc.)</li>
                      <li className="mt-3"><strong>- Ensaios</strong> (cada músico ensaia a parte que vai executar)</li>
                      <li className="mt-3"><strong>- Gravação do playback</strong> (Playback é o acompanhamento da música, sem a voz. Cada músico grava seu instrumento separadamente, em canais independentes)
                      </li>
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
               </StudioService> 
             </Container800>
            </EstudioContainer>
          </MainContainer>
        </>
    )
}