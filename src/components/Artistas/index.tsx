/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import styles from "../Aside/aside.module.scss"
import {sliderData} from "../../utilities/sliderData"
import { useEffect, useState } from "react";


export default function Artistas(){

    const [index, setIndex] = useState<number>(0);
    
    useEffect(() => {
        const intervalId = setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % sliderData.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
            <div id="artistas-container" className={` ${styles.order4}`}>       
            <Link href="salaArtistas">
              <img src={sliderData[index]} alt="" className={styles.artistas2} />
            </Link>
            <Link href="/salaArtistas" className="text-primary">
                <h1>Sala dos Artistas</h1>
            </Link>
            <p>A Sala dos Artistas é onde artistas do CCB e do mundo se encontram!</p>
            </div>
        </>
    )
}

