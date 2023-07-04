import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

    * {
        font-family: Poppins, sans-serif;
    }
    body {
        background: ${(props) => props.theme.body.background};
        color: ${(props) => props.theme.body.color};
    }
    ul {
        margin-top: 0px !important;
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.body.color}
    }

`