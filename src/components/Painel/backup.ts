import styled from "styled-components"
export type PainelVariant = 'secondaryBlue' | 'yellow';

interface PainelContainerProps {
    variant:PainelVariant;
}

const painelVariants = {
    secondaryBlue: '#02599a',
    yellow: '#f5f563;'
}
export const PainelContainerBackup = styled.div<PainelContainerProps>`

${props => {
        return `background-color:${painelVariants[props.variant]}`
}}

`

