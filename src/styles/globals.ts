import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  
  :root {
    --light: #fff;
    --background: #2F2E41;
    --text: #2F2E41;
    --text-title: #333;
    --text-light: #999;
    --primary: #009EDD;
    --success: #039B00;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--background);
  }

  body, input, textarea, button {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`