
import { Bebas_Neue } from 'next/font/google'

import { PainelStyles } from './styles'

interface PainelProps  {
    content?: string | null;
    variant?: 'yellow'| 'blue'
}


const bebas = Bebas_Neue({ 
    subsets: ['latin'],
    weight:'400' 
  })
  

export default function Painel({ content, variant }:PainelProps){
    return (
            <PainelStyles 
            variant={variant}
              className={
                `${bebas.className}`
              }
            >
                <h1>{content}</h1>
            </PainelStyles>
    )
}

