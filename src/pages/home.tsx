/* eslint-disable @next/next/no-img-element */
import styles from '../scss/pages/home.module.scss'
import associeBanner from '@/assets/images/ban_res_associe-se1.png'
import registroBanner from '@/assets/images/ban_res_registro1.png'
import Link from 'next/link'
import Aside from '@/components/Aside'
import { CarouselHome } from '@/components/Carousel'
import Card from '@/components/Cards'

export default function Home() {
  
  return (
    <>
      {/* Top Container */}
      <section style={{maxWidth: '1200px', margin: '0 auto', padding: '0px 0.8rem'}}>
        <div className="row">

          {/* Carousel */}
          <div className={`col-md-6 col-lg-6 col-xl-6 ${styles.carContainer}`}>
            <CarouselHome />
          </div>

          {/* Banners */}
          <div className={`col-md-6 col-lg-6 col-xl-6 ${styles.topBanners}`}>
            <Link href="/associar/compositores">
              <div className={`row ${styles.topCol}`}>
                <img src={associeBanner.src} alt="" />
              </div>
            </Link>
            <Link href="servicos/registrar">
              <div className={`row ${styles.bottomCol}`}>
                <img src={registroBanner.src} alt="" />
              </div>
            </Link>  
          </div>
        </div>
      </section>

       {/* Letreiro */}
       <section className={`${styles.marquee}`}>
        <div className={`${styles.marquee__content}`}>
          <ul className={`${styles.listInline}`}>
            <li>
              Em 25 anos o CCB já registrou <span>292.474</span> músicas, além de poemas e livros.&nbsp;
              <Link href="/servicos/registrar">Clique aqui</Link>&nbsp;
              para registrar sua Música, Livro ou Poesia.
            </li>
          </ul>
        </div>
       </section>

       {/* Bottom Container */}
       <section className={`row ${styles.bottomContainer}`}>

         {/* CARDS  */}
         <div className="col-12 col-sm-12 col-md-8">
          <div className="row">
            <Card page='home' />
          </div>
         </div>

         <Aside />
       </section>
     </>
  )
}
