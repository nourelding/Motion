import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img {
    max-width: 100%;
    display: block;
}

body {
  font-family: 'Roboto', sans-serif;
}

a {
   text-decoration: none;
   color: black;
  }

`;

export const defaultTheme = {
  color: "#c468ff",
  linearGradient: "linear-gradient(102deg, #c468ff, #6e91f6)",

  fontSizeS: "8px",
};

export default GlobalStyle;
