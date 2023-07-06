/* eslint-disable @next/next/no-img-element */
import styles from '../Header/header.module.css'

import logo from '../../assets/images/logo_res_mod.png'
import salaVipBarra from '../../assets/images/salavipnabarra.png'

import Sidebar from '../Sidebar'
import BuscaArtista from '../BuscaArtista'
import LoginModal from '../LoginModal'

import Link from 'next/link' 
import { useRouter } from 'next/router'

import { useState } from 'react'

import { Nav } from 'react-bootstrap'


export default function Header(){
  const usuario = `Percy`

  const { push, pathname } = useRouter();

  const [log, setLog] = useState(false)

   const handleLogin = function(){
    setLog(true)
   }

   const handleLogoff = function(){
    setLog(false)
    push('/')
   }
  

    return (
        <header className={styles.navbarContainer}>

            {/* Top Navbar  */}
            <Nav className={styles.topNav}>

              {/* Logo */}
              <Nav.Item className={styles.logo}>
                <Link href="/">
                  <img src={logo.src} alt="logo" />
                </Link>
              </Nav.Item>
              
              {/* Busca Artista */}
              <Nav.Item>
                <BuscaArtista 
                  inputSearch={styles.inputSearch}
                  searchBox={styles.searchBox}
                />
              </Nav.Item>

              {/* Whatsapp/ */}
              <Nav.Item>
                {
                  log === false ?
                  <Link className={styles.whatsappLink} href="https://contate.me/clubedoscompositores">
                    <div className={styles.whatsappHeader}>
                      <p><span>(013) 99748-7065</span></p>
                      <p>WhatsApp do CCB</p>
                    </div>
                  </Link> :

                  // Logado Outras Páginas 
                  <div className={styles.vipDesktop}>
                    <div className={styles.vipText}>
                      <p>Olá, <span>{`${usuario}`},</span><br /> você está logado(a) no CCB!</p>
                    </div>
                  </div>
              }
              </Nav.Item>

              {/* Login / MENU */}
              <Nav.Item className={styles.rightTopNavItemContainer}>
                
                <LoginModal
                  handleLogin={handleLogin}
                  handleLogoff={handleLogoff}
                  log={log}
                  />

                {/* Menu  */}
                <div className={`${styles.menu} ${styles.flexCenter} ${styles.addBorder}`}>
                  <Sidebar log={log}/>
                </div>
              </Nav.Item>
            </Nav>

            {/* Bottom Navbar  */}
            <Nav className={styles.bottomNav}>

                {/* ASSOCIAR  */}
              <Nav.Item>
              {
                log === false ?
                <div className={styles.ddItems}>
                  <a 
                    className={`dropdown-toggle ${styles.ddLinks}`}
                    title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Associar
                  </a>

                  <div className={`${styles.dropdownMenu} dropdown-menu`}  aria-labelledby="registrar">
                    <Link href="/associar/compositores" className="dropdown-item" type="button">Compositores</Link>
                    <Link href="/associar/bandas" className="dropdown-item" type="button">Bandas</Link>
                    <Link href="/associar/cantores" className="dropdown-item" type="button">Cantores e Duplas</Link>
                  </div>
                </div>

                // Home
              : pathname === '/salaVip' ?
              
                <div className={styles.ddItems}>
                  <Link href="/">Home</Link>
                </div>

              :

                // Gif SalaVip
                <Link className={styles.gifSalaVip} href="/salaVip">
                  <img src={salaVipBarra.src} alt="sala vip" />
                </Link>
              }
              </Nav.Item>

                {/* REGISTRAR  */}
              <Nav.Item  id={styles.registrar} className={styles.ddItems}>
                <a className={`dropdown-toggle ${styles.ddLinks}`}
                  title="Clique aqui para Registrar e Editar músicas, Letras e Poesias. CCB - Mais de 280 mil músicas registradas em 22 anos! Proteja seus Direitos Autorais"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Registrar Música
                </a>
                <div className={`${styles.dropdownMenu} dropdown-menu`}  aria-labelledby="registrar">
                  <Link href="/registrar" className="dropdown-item" type="button">Registrar Música</Link>
                  <Link href="/registrar" className="dropdown-item" type="button">Registrar Poesia</Link>
                  <Link href="/registrar" className="dropdown-item" type="button">Registrar Livro</Link>
                  <Link href="/registrar" className="dropdown-item" type="button">Registrar Roteiro</Link>
                  <Link href="/registrar" className="dropdown-item" type="button">Registrar Trabalho</Link>
                </div>
              </Nav.Item>   

                {/* ISRC/ECAD  */}
              <Nav.Item id={styles.ecad} className={styles.ddItems}>
                <Link 
                
                  href="/isrc" 
                  title="Clique aqui para Gerar o Código ISRC junto ao ECAD. O ECAD irá controlar a execução e o pagamento dos Direitos Autorais de suas músicas"
                  >ISRC/ECAD
                </Link>
              </Nav.Item>

                {/* Estúdio  */}
              <Nav.Item  id={styles.studio} className={styles.ddItems}>
                <a 
                  className={`dropdown-toggle ${styles.ddLinks}`}
                  title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Estúdio
                </a>
                <div className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="studio">
                  <Link href="/estudio/gravar" className="dropdown-item" type="button">Gravar no Estúdio CCB</Link>
                  <Link href="/estudio/melodia" className="dropdown-item" type="button">Confecção de Melodia</Link>
                </div>
              </Nav.Item>

                {/* SERVIÇOS  */}
              <Nav.Item id={styles.services} className={styles.ddItems}>
                <a 
                  className={`dropdown-toggle ${styles.ddLinks}`}
                  title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Serviços
                </a>

                <div className={`${styles.dropdownMenu} dropdown-menu`}  aria-labelledby="services">

                  {
                    log &&
                    <Link href="/salaVip" className="dropdown-item" type="button">Acessar Área VIP</Link>
                  }

                  
                  <Link href="/isrc" className="dropdown-item" type="button">ISRC/ECAD</Link>
                  <Link href="/estudio/gravar" className="dropdown-item" type="button">Gravar Estúdio CCB</Link>
                  <Link href="/estudio/melodia" className="dropdown-item" type="button">Confecção de Melodia</Link>
                  <Link href="/pagamentos" className="dropdown-item" type="button">Pagamentos</Link>

                  {
                    log &&
                    <Link  href="/fotoPerfil" className="dropdown-item" type="button">Enviar Foto Perfil</Link>
                  }

                </div>
              </Nav.Item>

                {/* BENEFÍCIOS  */}
              <Nav.Item id={styles.beneficios} className={styles.ddItems} >
                <a 
                  className={`dropdown-toggle ${styles.ddLinks}`} 
                  data-bs-toggle="dropdown" 
                  aria-haspopup="true" 
                  aria-expanded="false">
                  Benefícios
                </a>
                <div className={`${styles.dropdownMenu} dropdown-menu`}  aria-labelledby="beneficios">
                  <Link href="/beneficios/quemSomos" className="dropdown-item" type="button">Quem Somos</Link>
                  <Link href="/beneficios/carteiraCompositor" className="dropdown-item" type="button">Carteira de Compositor</Link>
                  <Link href="/beneficios/divulgacao" className="dropdown-item" type="button">Divulgação</Link>
                  <Link href="/beneficios/ccbMusicPlataforma" className="dropdown-item" type="button">CCB Music Plataforma</Link>
                  <Link href="/radioOnline" className="dropdown-item" type="button">Rádio Online</Link>
                  <Link href="/radioGospel" className="dropdown-item" type="button">Rádio Gospel</Link>
                  <Link href="/programaRecompensas" className="dropdown-item" type="button">Programa de Recompensas</Link>
                </div>
              </Nav.Item>

                {/* COLETÂNEA  */}
              <div id={styles.colet} className={styles.ddItems}>
                <Link
                  href="/coletanea"
                
                >
                Coletânea
                </Link>
                  <div className={`${styles.dropdownMenu} dropdown-menu`}  aria-labelledby="services">
                  <Link href="#" className="dropdown-item" type="button">Como Participar</Link>
                </div> 
              </div>
            
                {/* PAGAMENTOS  */}
              <Nav.Item id={styles.pay} className={styles.ddItems}>
                <Link href="/pagamentos"
                 
                >Pagamentos
                </Link>
              </Nav.Item>
                
                {/* Festivais  */}
              <Nav.Item id={styles.festivals} className={styles.ddItems}>
                <a 
                  className={`dropdown-toggle ${styles.ddLinks}`}
                  title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Festivais
                </a>
                <div className={`${styles.dropdownMenu} dropdown-menu`}  aria-labelledby="festivals">
                  <Link href="" className="dropdown-item" type="button">Inscrições encerradas!</Link>
                  <Link href="/festival/resultadoMusica" className="dropdown-item" type="button">Resultado Música 2023</Link>
                  <Link href="/festival/resultadoPoesia" className="dropdown-item" type="button">Resultado Poesia 2023</Link>
                  <Link href="/festival/resultadosAnteriores" className="dropdown-item" type="button">Resultados Anteriores</Link>
                </div>
              </Nav.Item>

              
                {/* ATENDIMENTO  */}
              <Nav.Item id={styles.whatsapp} className={styles.ddItems}>
                <Link 
                href="https://contate.me/clubedoscompositores" 
              
                title="Contate-nos pelo WhatsApp!"
                >Atendimento
                </Link>
              </Nav.Item>

                {/* AJUDA  */}
              <Nav.Item  id={styles.help} className={styles.ddItems}>
                <a 
                  className={`dropdown-toggle ${styles.ddLinks}`}
                  title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Ajuda
                </a>
                <div className={`${styles.dropdownMenu} dropdown-menu`}  aria-labelledby="help">
                  <Link href="/ajuda/ajudaGeral" className="dropdown-item" type="button">Ajuda Geral</Link>
                  <Link href="/ajuda/tocarNaRadio" className="dropdown-item" type="button">Tocar na Rádio</Link>
                  <Link href="/ajuda/comporUmaMusica" className="dropdown-item" type="button">Compor Uma Música</Link>
                  <Link href="/ajuda/gravadoras" className="dropdown-item" type="button">Gravadoras</Link>
                  <Link href="/ajuda/direitosAutorais" className="dropdown-item" type="button">Direitos Autorais</Link>
                </div>
              </Nav.Item>  
                      
            </Nav>

        </header>
    )
}

 