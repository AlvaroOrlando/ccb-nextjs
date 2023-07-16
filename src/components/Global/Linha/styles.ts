import { styled } from "styled-components";

export const HrContainer = styled.div`
    margin: 0 auto;
    color:${props => props.theme['darkgray']};

    hr {
        margin:0.2rem 0px;
    }
`