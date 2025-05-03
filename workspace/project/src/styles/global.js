import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`

  ${reset}

  /* font */
  @font-face {
    font-family:'SUIT' ;
    font-weight: 900;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Heavy.woff2)format('woff2');
  }

  @font-face {
    font-family:'SUIT' ;
    font-weight: 800;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-ExtraBold.woff2)format('woff2');
  }

  @font-face {
    font-family:'SUIT' ;
    font-weight: 700;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Bold.woff2)format('woff2');  }

  @font-face {
    font-family:'SUIT' ;
    font-weight: 600;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-SemiBold.woff2)format('woff2');
  }

  @font-face {
    font-family:'SUIT' ;
    font-weight: 500;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Medium.woff2)format('woff2');
  }

  @font-face {
    font-family:'SUIT' ;
    font-weight: 400;
    font-style: normal;
    src: url(${process.env.PUBLIC_URL}/assets/fonts/SUIT-Regular.woff2)format('woff2');
  }

  /* global style */
  body{
    font-family: 'SUIT';
    box-sizing: border-box;
    text-shadow: 0 0 2px rgba(0 , 0 , 0 , 0.05);
    text-decoration: none;
    color: #333;
  }


  button {
    cursor: pointer;
    border: none;
  }
`

export default GlobalStyle