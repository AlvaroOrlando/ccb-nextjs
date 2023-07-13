/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import logoBranco from '../../assets/images/logonew_branco.png'
import styles from '../Footer/footer.module.scss'

export default function Footer(){

    const year = new Date().getFullYear()

    return (
            <footer className={`${styles.footer} mt-2`}>
              <Link href="/" className={styles.footerLeft}>
                <img src={logoBranco.src} alt="logo" />
              </Link>
        
              <div className={styles.footerCenter}>
                <h4>Atendimento</h4>

                <Link href="https://contate.me/clubedoscompositores">
                    <p>(013) 99748-7065</p>
                </Link>

               <section>
                 <p>contato@clubedoscompositores.com</p>
               </section>
              </div>

              <div className={styles.footerRight}>
                <section>
                  <Link href="https://www.clubedoscompositores.com.br/supergeral.asp">Home</Link>
                  <Link href="https://www.clubedoscompositores.com.br/supergeral_comofunciona.asp" target="_blank">Sobre Nós</Link>
                  <Link href="https://www.clubedoscompositores.com.br/ajuda/ajuda.asp?categ=3" target="_blank">Ajuda</Link>
                </section>

                <p>
                  CLUBE DOS COMPOSITORES &copy; 1998/{year}
                </p>
            
              </div>
            </footer>
    )
}