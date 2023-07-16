
import { styled } from "styled-components";
import { FlexCenterRow, flexCenterColumn } from "@/styles/mixins";


export const IsrcButtonContainer = styled(FlexCenterRow)`
    width:100%;
    gap: 10px;

    button {
        width: 50%;
    }
`

export const IsrcFormContainer = styled(flexCenterColumn)`
    width: 100%;
    padding-bottom:1rem;

    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        max-width: 600px;
    }
`

export const Taxas = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width:100%;
    font-size: clamp(.8rem, 3.5vw, 1.4rem);
    
    section {
        margin-left: 0px;

        & :first-child::after {
            content: "|";
            margin-left: 10px;
            margin-right: 10px;
            color: ${props => props.theme['darkgray']};
        }

        a {
            text-decoration: none;
            color: ${props => props.theme['secondaryBlue']};

            &:hover {
            color: ${props => props.theme['hoverBlue']};
            cursor: pointer;
            }

        }
    }
`