import styled from "styled-components";

import { flexCenterColumn } from "@/styles/mixins";

export const FooterContainer = styled(flexCenterColumn)`

    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    margin-top:1rem;
   
    padding: 1rem;

    color:${props => props.theme['white']};
    background-color: ${props => props.theme['primaryBlue']};

    font: bold 1rem sans-serif;
    font-weight: 300;

    a:hover {
        opacity: .7;
    }


    @media(min-width:790px){
        
        flex-direction: row;
        justify-content: space-between; 

        padding: .5rem 1rem;
        
        border: ${props => props.theme['white']} 8px solid;
    }


`

export const LeftContainer = styled(flexCenterColumn)`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center; 

		gap:.5rem;
		padding: 5px;


        img{
            width: 220px;
        }
`

export const CenterContainer = styled(flexCenterColumn)`

    gap:.5rem;
    padding: 5px;


    a {
        color:white;
        font-size: 1.3rem;
    }

    h4 {
        margin: 0px;
    }
`

export const RightContainer = styled(flexCenterColumn)`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        gap: 1rem;

        section {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            
            a {
                
                color: ${props => props.theme['white']};
                font-size: 1rem;
            }

            a::before {
                content: "|";
                font-weight:300;
                font-size: 20px;
                left: 0;

                padding-right: 5px;
                padding-left: 5px;
            }

            & :first-child::before{
                content: " ";
            }

            
        }
        p {
            text-align:center;
        }

`

