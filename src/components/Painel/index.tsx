
import { Bebas_Neue } from 'next/font/google'

import styles from "./painel.module.scss"

interface PainelProps  {
    content:string
    variant?:string
}


const bebas = Bebas_Neue({ 
    subsets: ['latin'],
    weight:'400' 
  })

export default function Painel({ content, variant }:PainelProps){
    return (
            <section 
              className={
                `${bebas.className} 
                 ${styles.PainelContainer} 
                 ${variant === 'blue' ? styles.blue : styles.yellow}`
              }
            >
                <h1 className="text-center">{content}</h1>
            </section>
    )
}

