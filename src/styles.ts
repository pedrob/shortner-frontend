import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --blue: #1b9ca8;
    --l-blue: #16b1bf;
    --h-blue: #20c7d6;
    --b-blue: #d0dfe0;
    --d-blue: #1c67a5;
    --dh-blue: #3583cc;
    --l-gray: #d3d3d3;
    --d-gray: #505050;
    --error: #F64B4B;
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
      .error {
        box-shadow: 0 -1px 4px var(--error), 0 2px 4px var(--error);
      }
      .errorText {
        color: var(--error);
        margin-top: 4px;
      }
  }
`;
