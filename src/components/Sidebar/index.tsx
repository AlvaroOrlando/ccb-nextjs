
import { useState } from 'react';
import {  Accordion, Button, Form, Offcanvas } from "react-bootstrap";

import styles from '../Header/header.module.scss'

import BuscaArtista from '../BuscaArtista';
import Link from 'next/link';

interface SidebarProps {
  log:boolean
}

export default function Sidebar({log}:SidebarProps){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
      <>
        <a title="MENU" onClick={handleShow} >
          MENU
        </a>
        
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
              <h5 className={`offcanvas-title subtitulosGlobal`}>Menu CCB</h5>
            </Offcanvas.Header>

            <Offcanvas.Body>

              <BuscaArtista />

              <Accordion id="accordionExample1">

                {/* Atendimento */}
                <Accordion.Item eventKey='0' className="mt-3">
                  <Link onClick={handleClose} href="https://contate.me/clubedoscompositores">
                    <Accordion.Header>
                      <div className='text-primary'>
                        Atendimento
                      </div>
                    </Accordion.Header>
                  </Link>
                </Accordion.Item>

                {/* Festival */}
                <Accordion.Item eventKey='1' className="mt-3">
                  <Accordion.Header>
                    <div className='text-primary'>
                      Festival
                    </div>
                  </Accordion.Header>

                  <Accordion.Body>
                    <ul className={styles.sidebarItem}>
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/festival">
                          <div>
                            Inscrições encerradas
                          </div>
                        </Link>
                      </li>
                      
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/festival/resultadoMusica">
                          <div>
                              Resultado Música 2023
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/festival/resultadoPoesia">
                          <div>
                              Resultado Poesia 2023
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/festival/resultadosAnteriores">
                          <div>
                              Resultados Anteriores
                          </div>
                        </Link>
                      </li>
                    </ul>
                 </Accordion.Body>
                </Accordion.Item>

                {/* Associar */}
                <Accordion.Item eventKey='2' className="mt-3">
                  <Accordion.Header>
                    <div className='text-primary'>
                      Associar
                    </div>
                  </Accordion.Header>

                  <Accordion.Body>
                    <ul className={styles.sidebarItem}>
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/associar/compositores">
                          <div>
                            Compositores
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/associar/bandas">
                          <div>
                              Banda
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/associar/cantores">
                          <div>
                              Cantores e Duplas
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Registro */}
                <Accordion.Item eventKey='3' className="mt-3">
                  <Accordion.Header>
                    <div className='text-primary'>
                      Registrar Música
                    </div>
                  </Accordion.Header>

                  <Accordion.Body>
                    <ul className={styles.sidebarItem}>
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/registrar">
                          <div>
                            Registrar Música
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/registrar">
                          <div>
                            Registrar Poesia
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/registrar">
                          <div>
                            Registrar Livro
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/registrar">
                          <div>
                            Registrar Roteiro
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/registrar">
                          <div>
                            Registrar Trabalho
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* ISRC */}
                <Accordion.Item eventKey='4' className="mt-3">
                  <Link onClick={handleClose} href="/servicos/isrc">
                    <Accordion.Header>
                      <div className='text-primary'>ISRC</div>
                    </Accordion.Header>
                    </Link>
                </Accordion.Item>

                {/* Estudio */}
                <Accordion.Item eventKey='5' className="mt-3">
                  <Accordion.Header>
                    <div className='text-primary'>
                       Estúdio
                    </div>
                  </Accordion.Header>

                  <Accordion.Body>
                    <ul className={styles.sidebarItem}>
                      <li>
                        <Link onClick={handleClose}className={styles.dropItem} href="/servicos/gravar">
                          <div>
                            Gravar no CCB
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/melodia">
                          <div>
                            Confecção de melodia
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Serviços  */}
                <Accordion.Item eventKey='6' className="mt-3">
                  <Accordion.Header>
                    <div className='text-primary'>
                      Serviços
                    </div>
                  </Accordion.Header>

                  <Accordion.Body>
                    <ul className={styles.sidebarItem}>
                      {/* Sala Vip */}
                      {
                        log &&
                        <li>
                          <Link onClick={handleClose} className={styles.dropItem} href="/salaVip">
                            <i className="fa-regular fa-address-card"></i>
                            <div>
                              Área VIP
                            </div>
                          </Link>
                        </li>
                      } 

                      {/* Pagamentos  */}
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/pagamentos">
                          <i className="fa-brands fa-amazon-pay"></i>
                          <div>
                            Pagamentos
                          </div>
                        </Link>
                      </li>

                      {/* ISRC  */}
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/isrc">
                            <i className="fa-regular fa-copyright"></i>
                            <div>
                              Obter ISRC/ECAD
                            </div>
                        </Link>
                      </li>

                      {/* Registro Obras  */}
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/registrar">
                          <i className="fa-solid fa-compact-disc"></i>
                          <div>
                              Registro de obras
                          </div>
                        </Link>
                      </li>

                      {/* Estúdio  */}
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/gravar">
                          <i className="fa-solid fa-microphone-lines"></i>
                          <div className='text-primary'>
                            Gravar no Estúdio CCB
                          </div>
                        </Link>
                      </li>

                      {/* Melodia  */}
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/servicos/melodia">
                          <i className="fa-solid fa-music"></i>
                          <div className='text-primary'>
                            Confecção de melodia
                          </div>
                        </Link>
                      </li>
                      
                      {/* Foto Perfil  */}
                      {
                        log &&
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href="/salaVip/fotoPerfil">
                          <i className="fa-regular fa-images"></i>
                          <div>
                            Enviar Foto Perfil
                          </div>
                        </Link>
                      </li>
                      }
                      
                      {/* Reativar Conta  */}
                      {
                        log === false &&
                        <li>
                          <Link onClick={handleClose} className={styles.dropItem} href="/servicos/reativar">
                            <i className="fa-solid fa-toggle-on"></i>
                            <div>
                              Reativar Conta
                            </div>
                          </Link>
                        </li>
                      }
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Benefícios  */}
                <Accordion.Item eventKey='7' className="mt-3">
                  <Accordion.Header>
                    <div className='text-primary'>
                      Benefícios
                    </div>
                  </Accordion.Header>

                  <Accordion.Body>
                    <ul className={styles.sidebarItem}>
                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/beneficios/quemSomos">
                          <i className="fa-solid fa-trademark"></i>
                          <div>
                              Quem Somos
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/beneficios/carteiraCompositor">
                          <i className="fa-regular fa-address-card"></i>
                          <div>
                              Carteira de Compositor
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/beneficios/divulgacao">
                          <i className="fa-solid fa-bullhorn"></i>
                          <div>
                              Divulgação
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/beneficios/ccbMusicPlataforma">
                          <i className="fa-solid fa-play"></i>
                          <div>
                              CCB MUSIC - Plataforma
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/radio/radioOnline">
                          <i className="fa-solid fa-radio"></i>
                          <div>
                              Rádio Online
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/radio/radioGospel">
                          <i className="fa-solid fa-radio"></i>
                          <div>
                              Rádio Gospel
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/beneficios/programaRecompensas">
                          <i className="fa-solid fa-arrows-rotate"></i>
                          <div>
                              Programa de Recompensas
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Ajuda  */}
                <Accordion.Item eventKey='8' className="mt-3">
                  <Accordion.Header>
                    <div className='text-primary'>
                      Ajuda
                    </div>
                  </Accordion.Header>

                  <Accordion.Body>
                    <ul className={styles.sidebarItem}>
                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/ajuda/ajudaGeral">
                            <div>
                                Ajuda Geral
                            </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/ajuda/tocarNaRadio">
                          <div>
                              Tocar Na Rádio
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/ajuda/comporUmaMusica">
                          <div>
                              Compor Uma Música
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} className="drop-item" href="/ajuda/gravadoras">
                          <div>
                              Gravadoras
                          </div>
                        </Link>
                      </li>

                      <li>
                        <Link onClick={handleClose} href="/ajuda/direitosAutorais">
                          <div>
                              Direitos Autorais
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>

                {/* Coletanea */}
                <Accordion.Item eventKey='9' className="mt-3">
                  <Link onClick={handleClose} href="/coletanea">
                    <Accordion.Header>
                      <div className='text-primary'>Coletânea</div>
                    </Accordion.Header>
                    </Link>
                </Accordion.Item>

                {/* Pagamentos */}
                <Accordion.Item eventKey='10' className="mt-3">
                  <Link onClick={handleClose} href="/servicos/pagamentos">
                    <Accordion.Header>
                      <div className='text-primary'>
                        Pagamentos
                      </div>
                    </Accordion.Header>
                    </Link>
                </Accordion.Item>
              </Accordion>
            </Offcanvas.Body>
        </Offcanvas>
      </>
    )
}