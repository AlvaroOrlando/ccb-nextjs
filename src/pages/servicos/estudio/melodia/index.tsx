/* eslint-disable @next/next/no-img-element */
import Crumb from "@/components/Crumb";
import MainContainer from "@/components/MainContainer";
import Link from "next/link";

import styles from "../estudio.module.scss"

export default function EstudioMelodia(){
    return (
        <>
        <Crumb />
        <MainContainer>
          <h3 className="subtitulosGlobal mt-3">Fazemos uma Melodia para o seu Poema ou Letra</h3>
          <div className="studioImageContainer mt-3">
            <img alt="" />
          </div>

          <p className={`${styles.studio_p} px-3 mt-3 mb-0`}>
            Se voce faz letras de música ou poesia mas não faz a melodia (a música), agora você pode contratar
            um compositor profissional para fazer a melodia para sua letra por um preço acessivel.
          </p>

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

          {/* Tabela  de Preços */}
          <div className={`${styles.tabelaStudio} mt-3`}>
            <div className="precoStudio text-center">
              <Link href=''>Tabela de preços</Link>
            </div>
            <strong className="text-center mt-3">
              Pagamentos por cartão de crédito parcelado até 6 vezes ou à vista no boleto.
            </strong>
            <p className="mt-3 text-center">O que esperar do Estúdio CCB? Clique nos links abaixo para ouvir uma amostra:</p>
          </div>

          {/* Tabela  de Preços  */}
          <div className={`${styles.tabelaStudio} mt-3`}>
            <div className="precoStudio text-center">
              <a>Tabela de preços</a>
            </div>
            <strong className="text-center mt-3">
              Pagamentos por cartão de crédito parcelado até 6 vezes ou à vista no boleto.
            </strong>
            <p className="mt-3 text-center">O que esperar do Estúdio CCB? Clique nos links abaixo para ouvir uma amostra:</p>
          </div>

           {/* Tabela */}
          <table className={`${styles.studioTable} table table-hover table-bordered`} style={{cursor: 'pointer'}}>
            <thead className="table-primary table-bordered">
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
                - 
                <Link href="">
                  mbp 2
                </Link>
              </td>
            </tr>

            {/* ROCK */}
            <tr>
              <th scope="row">2</th>
              <td>POP/ROCK</td>
              <td>
                <Link href="">
                  pop 1
                </Link> 
                - 
                <Link href="">
                  pop 2
                </Link>  
                - 
                <Link href="">
                  pop 3
                </Link> 
                - 
                <Link href="">
                  pop 4
                </Link> 
              </td>
            </tr>

             {/* Sertanejo  */}
            <tr>
              <th scope="row">3</th>
              <td>SERTANEJO</td>
              <td>
                <Link href="">
                  sertanejo 1
                </Link> 
                - 
                <Link href="">
                  sertanejo 2
                </Link> 
                - 
                <Link href="">
                  sertanejo 3
                </Link>  
                - 
                <Link href="">
                  sertanejo 4
                </Link> 
              </td>
            </tr>

            {/* Samba */}
            <tr>
              <th scope="row">4</th>
              <td>SAMBA</td>
              <td>
                <Link href="">
                  samba 1
                </Link> 
                - 
                <Link href="">
                  samba 2
                </Link> 
              </td>
            </tr>

            {/* Gospel  */}
            <tr>
              <th scope="row">5</th>
              <td>GOSPEL</td>
              <td>
                <Link href="">
                  gospel 1
                </Link>  
                - 
                <Link href="">
                  gospel 2
                </Link>  
              </td>
            </tr>

            {/* Romântico  */}
            <tr>
              <th scope="row">6</th>
              <td>ROMÂNTICO</td>
              <td>
                <Link href="">
                  romântico 1
                </Link>  
              </td>
            </tr>

             {/* Marchinha  */}
            <tr>
              <th scope="row">7</th>
              <td>MARCHINHA</td>
              <td>
                <Link href="">
                  marchinha 1
                </Link>  
              </td>
            </tr>
           </tbody>
          </table>
        </MainContainer>
      </>
    )
}