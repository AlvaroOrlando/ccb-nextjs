import { flexCenterColumn } from "@/styles/mixins";
import { styled } from "styled-components";

export const EstudioFormContainer = styled.form`
    width: 100%;
    padding-bottom:0px;

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