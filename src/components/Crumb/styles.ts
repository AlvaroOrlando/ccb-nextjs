import { styled } from "styled-components";

export const CrumbContainer = styled.form`
    width:100%;
    max-width:1200px;
    margin: 0 auto;
    padding: 1rem;
    paddin-bottom:0px;
    background-color: ${props => props.theme['secondaryGray']};
    font-size:1.6rem;
    border: 8px solid ${props => props.theme['white']};
    border-top:none;
    border-bottom:none;


    a {
        color: ${props => props.theme['primaryRed']};
        text-decoration: underline; 
    }

    ol {
        margin:0px;
    }

`