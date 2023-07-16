import styled from "styled-components";

export const MainContainer = styled.div`
    width:100%;
    max-width: 1200px;

    padding: 15px;
    margin: 0 auto;
    margin-bottom: 10px;

    background-color: ${props => props.theme['secondaryGray']};
    border: 8px solid ${props => props.theme['white']};
    border-top:none;
`

export const PainelSectionContainer = styled.section`
    width: 100%;
    max-width:800px;
    margin: 0 auto;
    // margin-top: 1rem!important;

    background-color: ${props => props.theme['white']}
`

export const PainelSection = styled.div`
    width: 100%;
    padding:1rem;
    background-color: ${props => props.theme['white']};
`

export const VideoContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    max-width:800px;

    section {
        width: 100%;
        position: relative;
        padding-bottom: 56.25%;

       iframe {
            position:absolute;
            height: 100%;
            width:100%;
        }
    }

`
