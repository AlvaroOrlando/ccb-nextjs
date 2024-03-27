/* eslint-disable @next/next/no-img-element */
import capaEstudio from '../../../assets/images/capa_estudio.jpg';
import styles from "@/styles/estudio.module.scss"

interface StudioImgContainerProps {
    title: string | null,
    figcaption: string | null,
}

export default function StudioImgContainer({title, figcaption}:StudioImgContainerProps){
    return (
        <div className={styles.StudioImgContainer}>
            <h1>{title}</h1>
            <figure>
            <img src={capaEstudio.src} alt="" />
            <figcaption className="mt-3 px-3">
                {figcaption}
            </figcaption>
            </figure>
        </div>
    )
}
