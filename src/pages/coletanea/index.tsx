/* eslint-disable @next/next/no-img-element */
import Crumb from '@/components/Crumb'
import logoColet from '../../assets/images/logo_ccbmusic800px.png'
import styles from '@/styles/coletanea.module.scss'

export default function Coletanea(){
    return (
      <> 
        <Crumb />
        <section className="MainContainer">
          <div className={`${styles.coletTemp} minHeight`}>
            <img src={logoColet.src} alt="" />
            <h1 className="mt-3">
              A Coletânea CCB está sendo reformulada. Aguarde!
            </h1>
          </div>
        </section>
      </>
    )
}