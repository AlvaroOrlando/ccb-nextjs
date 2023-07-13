// import styles from './painel.module.scss'
import { PainelContainer, PainelVariant } from './styles'

interface PainelProps {
    content:string
    variant:PainelVariant
}

export default function Painel({content,variant}:PainelProps){
    return (
        <>
            <PainelContainer variant={variant}>
                <h1 className="text-center">{content}</h1>
            </PainelContainer>
        </>
    )
}

