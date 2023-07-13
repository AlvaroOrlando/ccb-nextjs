import styled from "styled-components";

export const TextoIsrc = styled.div`
    padding: 15px;
    width: 100%;

    & p {
        width: 100%;
        text-align:justify;
    }

    & h2 {
         color: ${props => props.theme['secondaryBlue']};
        // text-align: center;  
    }
`