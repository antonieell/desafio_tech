import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root{
    height: 100%;
    width: 100%;
  }

  body {
    background: #dadada;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
  }
  #root{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
  }

  li {
    list-style: none;
  }

  img {
  	display: block;
	  max-width: 100%;
  }
`;
