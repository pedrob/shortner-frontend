import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --blue: #1b9ca8;
  }

  * {
      margin: 0;
      padding: 0;
      outline: 0;
      box-sizing: border-box;
  }
  body {
      font-family: sans-serif;
      font-size: 14px;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased !important;
  }
`;
