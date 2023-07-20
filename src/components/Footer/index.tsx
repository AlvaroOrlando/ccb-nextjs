/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import logoBranco from '../../assets/images/logonew_branco.png'
import styles from "./footer.module.scss"

export default function Footer(){

    const year = new Date().getFullYear()

    return (
            <section className={styles.FooterContainer}>
              <div className={styles.LeftContainer}>
                <Link href="/">
                  <img src={logoBranco.src} alt="logo" />
                </Link>
              </div>
              
              <div className={styles.CenterContainer}>
                <h4>Atendimento</h4>

                <Link href="https://contate.me/clubedoscompositores">
                  <p>(013) 99748-7065</p>
                </Link>

               <section>
                 <p>contato@clubedoscompositores.com</p>
               </section>
              </div>

              <div className={styles.RightContainer}>
                <section>
                  <Link href="/">Home</Link>
                  <Link href="beneficios/quemSomos">Sobre Nós</Link>
                  <Link href="/ajuda/ajudaGeral">Ajuda</Link>
                </section>

                <p>
                  CLUBE DOS COMPOSITORES &copy; 1998/{year}
                </p>
              </div>
            </section>
    )
}