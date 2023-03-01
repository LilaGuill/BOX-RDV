import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html, #root{
    height: 100%;
  }
  
  body {
    color: #34423e;
    font-size: 13px;
    font-family: "Open Sans", sans-serif;
    background:#CDCDCD;
    box-sizing: border-box;
    height: 100%;
    padding: 0;
    margin: 0;
  }

.react-datepicker-popper {
  z-index: 9999 !important;
}

`
