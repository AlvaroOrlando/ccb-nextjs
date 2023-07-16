import styled from "styled-components";
export type PainelVariant = 'secondaryBlue' | 'yellow';

interface PainelContainerProps {
    variant:PainelVariant;
}

const painelVariants = {
    secondaryBlue: '#02599a',
    yellow: '#f5f563;'
}

export const PainelContainer = styled.div<PainelContainerProps>`
    width: 100%;
    padding: 0px;
    
    font-size: 1.6rem;

    h1 {
        margin-top:5px;
    }

    ${props => {
        return `background-color:${painelVariants[props.variant]}`
}}
`