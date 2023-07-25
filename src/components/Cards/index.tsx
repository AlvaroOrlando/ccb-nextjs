/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../../scss/pages/home.module.scss"
import { info } from "@/utilities/servicesInfo";

interface cardProps {
    page:string
}

export default function Card({page}:cardProps){
    if(page === 'home'){
        return (
            info.map((card) => {
                if(card.home === true){
                    return (
                        <div key={card.id} className={`col-12 col-sm-6 col-md-4 ${styles.cards}`}>
                            <section className={`${styles.card} card`} id={card.card?.idCard}>
                                <Link href={card.href}>
                                    <div style={{backgroundImage:`url(${card.card?.imgUrl})`}} className={styles.imgBox} id={card.card?.idImg}></div>
                                </Link>
                                
                                <Link href={card.href} className={`${styles.cardTitle} card-title text-primary`}>{card.card?.title}</Link>
                                <div className={`${styles.cardBody} card-body`}>
                                    <p className={`${styles.cardText} card-text`}>{card.card?.content}</p>
                                </div>
                            </section>
                        </div>
                    )
                }
            })
        )
    }

    if(page === 'servicos'){
        return (
            info.map(card => {
                if(card.category === 'servicos') {
                return (
                    <div key={card.card?.id} className={`col-12 col-sm-6 col-md-4 ${styles.cards}`}>
                    <section className={`${styles.card} card`} id={card.card?.idCard}>
                        <Link href={card.href}>
                            <div style={{backgroundImage:`url(${card.card?.imgUrl})`}} className={styles.imgBox} id={card.card?.idImg}></div>
                        </Link>
                        
                        <Link href={card.href} className={`${styles.cardTitle} card-title text-primary`}>{card.card?.title}</Link>
                        <div className={`${styles.cardBody} card-body`}>
                            <p className={`${styles.cardText} card-text`}>{card.card?.content}</p>
                        </div>
                    </section>
                    </div>
                )
                }
            })
        )
    }

    if(page === 'beneficios'){
        return (
            info.map(card => {
                if(card.category === 'beneficios'){
                return (
                    <div key={card.id} className={`col-12 col-sm-6 col-md-4 ${styles.cards}`}>
                    <section className={`${styles.card} card`} id={card.card?.idCard}>
                        <Link href={card.href}>
                            <div style={{backgroundImage:`url(${card.card?.imgUrl})`}} className={styles.imgBox} id={card.card?.idImg}></div>
                        </Link>
                        
                        <Link href={card.href} className={`${styles.cardTitle} card-title text-primary`}>{card.card?.title}</Link>
                        <div className={`${styles.cardBody} card-body`}>
                            <p className={`${styles.cardText} card-text`}>{card.card?.title}</p>
                        </div>
                    </section>
                    </div>
                )
                }
            })
        )
    }
    
    if(page === 'ajuda'){
        return (
            <>
                <h1 className="subtitulosGlobal">Central de Ajuda</h1>
                {info.map(card => {
                    if(card.category === 'ajuda' && card.currentPage !== undefined){
                    return (
                        <div key={card.id} className={`col-12 col-sm-6 col-md-4 ${styles.cards}`}>
                        <section className={`${styles.card} card`} id={card.card?.idCard}>
                            <Link href={card.href}>
                                <div style={{backgroundImage:`url(${card.card?.imgUrl})`}} className={styles.imgBox} id={card.card?.idImg}></div>
                            </Link>
                            
                            <Link href={card.href} className={`${styles.cardTitle} card-title text-primary`}>{card.card?.title}</Link>
                            <div className={`${styles.cardBody} card-body`}>
                                <p className={`${styles.cardText} card-text`}>{card.card?.content}</p>
                            </div>
                        </section>
                        </div>
                    )
                    }
                })}
            </>
        )
    }

    if(page === 'festival'){
        return (
            <>
                <h1 className="subtitulosGlobal">Festival</h1>
                {info.map(card => {
                    if(card.category === 'festival'){
                    return (
                        <div key={card.id} className={`col-12 col-sm-6 col-md-4 ${styles.cards}`}>
                        <section className={`${styles.card} card`} id={card.card?.idCard}>
                            <Link href={card.href}>
                                <div style={{backgroundImage:`url(${card.card?.imgUrl})`}} className={styles.imgBox} id={card.card?.idImg}></div>
                            </Link>
                            
                            <Link href={card.href} className={`${styles.cardTitle} card-title text-primary`}>{card.card?.title}</Link>
                            <div className={`${styles.cardBody} card-body`}>
                                <p className={`${styles.cardText} card-text`}>{card.card?.content}</p>
                            </div>
                        </section>
                        </div>
                    )
                    }
                })}
            </>
        )
    }

    if(page === 'salaVip'){
        return (
            <>
                <h1 className="subtitulosGlobal">Sala VIP</h1>
                {info.map(card => {
                    if(card.category === 'salaVip'){
                    return (
                        <div key={card.id} className={`col-12 col-sm-6 col-md-4 ${styles.cards}`}>
                        <section className={`${styles.card} card`} id={card.card?.idCard}>
                            <Link href={card.href}>
                                <div style={{backgroundImage:`url(${card.card?.imgUrl})`}} className={styles.imgBox} id={card.card?.idImg}></div>
                            </Link>
                            
                            <Link href={card.href} className={`${styles.cardTitle} card-title text-primary`}>{card.card?.title}</Link>
                            <div className={`${styles.cardBody} card-body`}>
                                <p className={`${styles.cardText} card-text`}>{card.card?.content}</p>
                            </div>
                        </section>
                        </div>
                    )
                    }
                })}
            </>
        )
    }
}