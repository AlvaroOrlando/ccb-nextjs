import { PainelContainer } from './styles'
import { PainelVariant } from './styles'

import { Bebas_Neue } from 'next/font/google'

interface PainelProps  {
    content:string
    variant:PainelVariant
}


const bebas = Bebas_Neue({ 
    subsets: ['latin'],
    weight:'400' 
  })

export default function Painel({content, variant}:PainelProps){
    return (
            <PainelContainer variant={variant} className={`${bebas.className} painelContainer`}>
                <h1 className="text-center">{content}</h1>
            </PainelContainer>
    )
}

