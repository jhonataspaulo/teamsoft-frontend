import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: ${props => props.theme.colors.GRAY_DARK};
        font: 400 1.6rem Roboto, sans-serif;
        overflow: hidden;
    }
`
