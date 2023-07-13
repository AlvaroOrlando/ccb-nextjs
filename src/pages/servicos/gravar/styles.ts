import { flexCenterColumn } from "@/styles/mixins";
import { styled } from "styled-components";

export const EstudioContainer = styled.div`
    width:100%;
    ${flexCenterColumn}

     figure {
        margin-top: 1rem;

        img {
           width:100%;
        }

        figcaption {
            font-family:'Roboto', sans-serif;
            font-weight:300;
        }
    
    }


`

export const TabelaContainer = styled.div`
    width:100%;
    ${flexCenterColumn}

    a {
        text-decoration: underline;
    }

    table {
        max-width: 800px;
        margin-top: 1rem;

        tr, td, th {
            vertical-align: middle;
        }
    }
`

export const Container800 = styled.div`
    width:100%;
    max-width:800px;
    margin-top:1rem;
`

export const StudioService = styled.div`


    h1 {
        font-weight: bold;
        font-size: 1.3rem;
        border: 1px solid ${props => props.theme['primarGray']};
        padding:1rem;
    }

    section {
        border: 1px solid ${props => props.theme['primarGray']};
        border-top: none;
        padding: 1rem;


        ul {
            margin-left: 0px;
            padding-left: 0px;

            li {
                list-style-type: none;
            }
        }
    }
`

export const StudioImgContainer = styled.div`
    h1 {
        text-align:center;
        color: ${props => props.theme['secondaryBlue']};
        font-size:1.6rem;
    }
`