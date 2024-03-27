
import { useState } from 'react';
import {  Accordion, Button, Form, Offcanvas } from "react-bootstrap";

import styles from '../Header/header.module.scss'

import BuscaArtista from '../BuscaArtista';
import Link from 'next/link';

import { getURL, info } from '@/utilities/servicesInfo';

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
                      {
                        info.map(el => {
                          if(el.category === 'festival'){
                            return (
                              <li key={el.id}>
                                <Link onClick={handleClose} className={styles.dropItem} href={el.href}>
                                  <div>
                                    {el.card?.title}
                                  </div>
                                </Link>
                              </li>
                            )
                          }
                        })
                      }
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
                      {
                        info.map(el => {
                          if(el.category === 'associar'){
                            return (
                              <li key={el.id}>
                                <Link onClick={handleClose} className={styles.dropItem} href={el.href}>
                                  <div>
                                    {el.card?.title}
                                  </div>
                                </Link>
                              </li>
                            )
                          }
                        })
                      }
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
                  <Link onClick={handleClose} href={`${getURL('isrc')}`}>
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
                      {
                        info.map(el => {
                          if(el.subcategory === 'estudio'){
                            return (
                              <li key={el.id}>
                                <Link onClick={handleClose} className={styles.dropItem} href={el.href}>
                                  <div>
                                    {el.card?.title}
                                  </div>
                                </Link>
                              </li>
                            )
                          }
                        })
                      }
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
                    {
                      log &&
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href={`${getURL('salaVip')}`}>
                            <div>
                              Acessar Sala VIP
                            </div>
                        </Link>
                      </li>
                    } 
                      {
                        info.map(el => {
                          if(el.category === 'servicos' && el.name !== 'reativar'){
                            return (
                              <li key={el.id}>
                                <Link onClick={handleClose} className={styles.dropItem} href={el.href}>
                                  <div>
                                    {el.card?.title}
                                  </div>
                                </Link>
                              </li>
                            )
                          }
                        })
                      }
                      {
                      info.map(el =>{
                        if(el.name === 'reativar' && log === false){ 
                          return (
                            <li key={el.id}>
                              <Link onClick={handleClose} className={styles.dropItem} href={el.href}>
                                  <div>
                                    {el.card?.title}
                                  </div>
                              </Link>
                            </li>
                          )
                        }
                      })
                    }
                    {
                      log &&
                      <li>
                        <Link onClick={handleClose} className={styles.dropItem} href={`${getURL('fotoPerfil')}`}>
                            <div>
                              Enviar Foto de Perfil
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