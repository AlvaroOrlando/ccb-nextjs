/* eslint-disable @next/next/no-img-element */
import styles from '../Header/header.module.scss'

import logo from '../../assets/images/logo_res_mod.png'
import salaVipBarra from '../../assets/images/salavipnabarra.png'

import Sidebar from '../Sidebar'
import BuscaArtista from '../BuscaArtista'
import LoginModal from '../LoginModal'

import Link from 'next/link' 
import { usePathname } from 'next/navigation';

import { Dropdown, Nav, NavItem } from 'react-bootstrap'
import { useGlobalContext } from '@/Context/GlobalContextProvider'

import { getURL, info } from '@/utilities/servicesInfo'


export default function Header(){

  const usuario = `Alvaro Orlando`

  const path = usePathname()
  

   const {handleLogin, handleLogoff, log} = useGlobalContext()
  

    return (
        <header className={styles.header}>

            {/* Top Navbar  */}
            <Nav as='nav' className={styles.topNav}>

              {/* Logo */}
              <Nav.Item as='section' data-title='logo'>
                <Link href="/">
                  <img src={logo.src} alt="logo" />
                </Link>
              </Nav.Item>
              
              {/* Busca Artista */}
              <Nav.Item as='section'> 
                <BuscaArtista 
                  searchBox={styles.searchBox}
                />
              </Nav.Item>

              {/* Whatsapp/Vip-Desktop */}
              <Nav.Item data-title='whatsappContainer' as='section'>
                {
                  log === false ?
                  <Link data-title='whatsapp' href={`${getURL('whatsapp')}`}>
                    <section>
                      <p><span>(013) 99748-7065</span></p>
                      <p>WhatsApp do CCB</p>
                    </section>
                  </Link> :

                  // Logado 
                  <div data-title='vip-desktop'>
                    <section>
                      <p>Olá, <span>{`${usuario}`},</span></p>
                      <p>você está logado(a) no CCB!</p>
                    </section>
                  </div>
              }
              </Nav.Item>

              {/* Login / MENU */}
              <Nav.Item data-title='loginMenu' as='section'>
                
                <LoginModal
                  handleLogin={handleLogin}
                  handleLogoff={handleLogoff}
                  log={log}
                />

                {/* Menu  */}
                <div className={styles.menu}>
                  <Sidebar log={log}/>
                </div>
              </Nav.Item>
            </Nav>

            {/* Bottom Navbar  */}
            <Nav as='nav' className={styles.bottomNav}>

              {
                log === false ?

                // Associar
                <Nav.Item as='section'>
                  <Dropdown>
                    <Dropdown.Toggle
                      as="a"
                      title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                    >
                    Associar
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={styles.dropdownMenu}>
                     {info.map(el =>{
                      if(el.category === 'associar'){ 
                        return (
                          <Dropdown.Item  key={el.id} as={Link} href={el.href}>{el.card?.title}</Dropdown.Item>
                        )
                      }
                     })}
                    </Dropdown.Menu>
                  </Dropdown>
                </Nav.Item>

                // Home
              : path === '/salaVip' ?
              
                <NavItem as='section'>
                  <Link href="/">Home</Link>
                </NavItem>

              :
              // Sala Vip
              <Nav.Item as='section'>
                <Link className={styles.gifSalaVip} href={`${getURL('salaVip')}`}>
                  <img src={salaVipBarra.src} alt="sala vip" />
                </Link>
              </Nav.Item>
              }

                {/* REGISTRAR  */}
              <Nav.Item as='section' id={styles.registrar}>
                <Dropdown>
                  <Dropdown.Toggle as="a"
                    title="Clique aqui para Registrar e Editar músicas, Letras e Poesias. CCB - Mais de 280 mil músicas registradas em 22 anos! Proteja seus Direitos Autorais"
                  >
                    Registrar Música
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} href={`${getURL('registrar')}`}>Registrar Música</Dropdown.Item>
                    <Dropdown.Item as={Link} href={`${getURL('registrar')}`}>Registrar Poesia</Dropdown.Item>
                    <Dropdown.Item as={Link} href={`${getURL('registrar')}`}>Registrar Livro</Dropdown.Item>
                    <Dropdown.Item as={Link} href={`${getURL('registrar')}`}>Registrar Roteiro</Dropdown.Item>
                    <Dropdown.Item as={Link} href={`${getURL('registrar')}`}>Registrar Trabalho</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>   

                {/* ISRC/ECAD  */}
              <Nav.Item as='section' id={styles.ecad}>
                <Link 
                  href={`${getURL('isrc')}`}
                  title="Clique aqui para Gerar o Código ISRC junto ao ECAD. O ECAD irá controlar a execução e o pagamento dos Direitos Autorais de suas músicas"
                  >ISRC/ECAD
                </Link>
              </Nav.Item>

                {/* Estúdio  */}
              <Nav.Item as='section'  id={styles.studio}>
                <Dropdown>
                  <Dropdown.Toggle 
                    as="a"
                    title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  >
                    Estúdio
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                     {info.map(el =>{
                      if(el.subategory === 'estudio' ){ 
                        return (
                          <Dropdown.Item  key={el.id} as={Link} href={el.href}>{el.card?.title}</Dropdown.Item>
                        )
                      }
                     })}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>

                {/* SERVIÇOS  */}
              <Nav.Item as='section' id={styles.services}>
                <Dropdown>
                  <Dropdown.Toggle
                    as="a"
                    title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  >
                    Serviços
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>

                    {
                      log &&
                      <Dropdown.Item as={Link} href={`${getURL('salaVip')}`}>Acessar Área VIP</Dropdown.Item>
                    }

                      {info.map(el =>{
                      if(el.category === 'servicos' && el.name !== 'reativar'){ 
                        return (
                          <Dropdown.Item  key={el.id} as={Link} href={el.href}>{el.card?.title}</Dropdown.Item>
                        )
                      }
                     })}

                    {
                      log ?
                      <Dropdown.Item as={Link} href={`${getURL('fotoPerfil')}`} >Enviar Foto de Perfil</Dropdown.Item>
                      :
                      <Dropdown.Item as={Link} href={`${getURL('reativar')}`}>Reativar Conta</Dropdown.Item>
                    }

                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>

                {/* BENEFÍCIOS  */}
              <Nav.Item as='section' id={styles.beneficios} >
                <Dropdown>
                  <Dropdown.Toggle 
                    as="a"
                    title='Conheça os benefícios de ser um associado CCB'
                  >
                    Benefícios
                  </Dropdown.Toggle>
                  <Dropdown.Menu className={styles.dropdownMenu}>
                     {info.map(el =>{
                      if(el.category === 'beneficios' ){ 
                        return (
                          <Dropdown.Item  key={el.id} as={Link} href={el.href}>{el.card?.title}</Dropdown.Item>
                        )
                      }
                     })}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>

                {/* COLETÂNEA  */}
              <Nav.Item as='section' id={styles.colet}>
                <Dropdown>
                  <Dropdown.Toggle as="a">
                    Coletânea
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                    <Dropdown.Item as={Link} href={`${getURL('coletanea')}`}>Como Participar</Dropdown.Item>
                  </Dropdown.Menu> 
                </Dropdown>
              </Nav.Item>
            
                {/* PAGAMENTOS  */}
              <Nav.Item as='section' id={styles.pay}>
                <Link href={`${getURL('pagamentos')}`}>
                  Pagamentos
                </Link>
              </Nav.Item>
                
                {/* Festivais  */}
              <Nav.Item as='section' id={styles.festivals}>
                <Dropdown>
                  <Dropdown.Toggle
                    as="a" 
                    title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  >
                    Festivais
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                     {info.map(el =>{
                      if(el.category === 'festival' ){ 
                        return (
                          <Dropdown.Item  key={el.id} as={Link} href={el.href}>{el.card?.title}</Dropdown.Item>
                        )
                      }
                     })}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>
              
                {/* ATENDIMENTO  */}
              <Nav.Item as='section' id={styles.whatsapp}>
                <Link 
                  href={`${getURL('whatsapp')}`} 
                  title="Contate-nos pelo WhatsApp!"
                >
                  Atendimento
                </Link>
              </Nav.Item>

                {/* AJUDA  */}
              <Nav.Item as='section' id={styles.help}>
                <Dropdown>
                  <Dropdown.Toggle 
                    as="a"
                    title="Clique aqui para se Associar ao CCB e começar um trabalho de divulgação na mídia"
                  >
                    Ajuda
                  </Dropdown.Toggle>

                  <Dropdown.Menu className={styles.dropdownMenu}>
                     {info.map(el =>{
                      if(el.category === 'ajuda' && el.name !== 'ajuda' ){ 
                        return (
                          <Dropdown.Item  key={el.id} as={Link} href={el.href}>{el.card?.title}</Dropdown.Item>
                        )
                      }
                     })}
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Item>  
                      
            </Nav>

        </header>
    )
}

 