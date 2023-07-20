/* eslint-disable @next/next/no-img-element */
import styles from "../Aside/aside.module.scss"
import radioGospelImg from "../../../public/images/radionline_res_gospel.png"
import radioImg from "../../../public/images/radionline_res.png"
import Link from "next/link"
import Artistas from "../Artistas"



export default function Aside(){

    return (
        <div className={`col-0 col-sm-0 col-md-4 ${styles.aside}`}>

             {/* Radio Online  */}
            <div id="radio-online_container">    
                <section>
                    <Link href="/radio/radioOnline" target="_blank">
                       <img src={radioImg.src} alt="" />
                    </Link>
                </section>
                <div className={styles.radioContent}>
                    <Link href="/radio/radioOnline" className="text-primary" target="_blank">RADIO ONLINE</Link>
                    <p>A sua música na Rádio! Escute aqui os maiores sucessos da Rádio CCB!</p>
                </div>
            </div>

           {/* Dez Mais */}
            <div className={styles.dez_mais}> 
              <div id="muda_radio_10_mais">
                <div style={{marginTop:'4px', fontSize: '0.8rem'}}>
                    <a>
                    Clique aqui
                    </a>
                    <span id="span_frame"> 
                    para ver as 10 Mais Gospel
                    </span>
                </div>
              </div>
            </div>

            {/* Radio Gospel */}
            <div id="radio-gospel_container" className={`${styles.order3}}`}>
                <section>
                    <Link href="/radio/radioGospel" target="_blank">
                       <img src={radioGospelImg.src} alt="" />
                    </Link>
                </section>
                <div className={styles.radioContent}>
                    <Link href="/radio/radioGospel" target="_blank" className="text-primary">RADIO GOSPEL</Link>
                    <p>A sua música na Rádio! Escute aqui os maiores sucessos da Rádio CCB!</p>
                </div>
            </div>
            
            <Artistas />
            
        </div>
    )
}