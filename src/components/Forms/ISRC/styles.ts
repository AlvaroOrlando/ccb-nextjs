import { flexCenterColumn, flexCenterRow } from "@/styles/mixins";
import { styled } from "styled-components";

export const IsrcFormContainer = styled.form`
    width: 100%;
    padding-bottom:1rem;

    ${flexCenterColumn}

    section {
        ${flexCenterColumn}

        width: 100%;
        max-width: 600px;

        section {
            display: flex;
            flex-direction: row;
            width:100%;
            gap: 10px;

            button {
                width: 50%;
            }
        }
    }
`
export const Taxas = styled.div`
    ${flexCenterRow}

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