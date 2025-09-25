import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html, body {
    width: 100%;
    height: 100vh;
    background-color: #1d4e89;;
    overflow: hidden;
    font-size: clamp(14px, calc(14px + (6 * (100vw - 1470px) / 1000)), 18px);
}

* {
    box-sizing: border-box;
}


`;

