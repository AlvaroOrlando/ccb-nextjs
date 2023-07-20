/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../scss/pages/home.module.scss"
import { homeCards } from "@/utilities/homeCards";

export default function Card(){

    return (
        homeCards.map(card => {
            return (
              <div key={card.id} className={`col-12 col-sm-6 col-md-4 ${styles.cards}`}>
                <section className={`${styles.card} card`} id={card.idCard}>
                    <Link href={card.href}>
                        <div style={{backgroundImage:`url(${card.imgUrl})`}} className={styles.imgBox} id={card.idImg}></div>
                    </Link>
                    
                    <Link href={card.href} id={card.titleId} className={`${styles.cardTitle} card-title text-primary`}>{card.title}</Link>
                    <div className={`${styles.cardBody} card-body`}>
                        <p className={`${styles.cardText} card-text`}>{card.content}</p>
                    </div>
                </section>
             </div>
            )
        })
    )
}