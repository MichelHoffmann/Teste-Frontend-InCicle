import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #F2F3F5;
    color: #707070;
    font-family: 'Open Sans', sans-serif;
}

html {
    font-size: 62.5%;
}
`