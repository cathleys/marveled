import { createGlobalStyle, css } from "styled-components";
import { normalize } from "styled-normalize";

const FontStyles = css`
  @font-face {
    font-family: CCBiffBamBoom;
    src: local("CCBiffBamBoom"),
      url("../public/fonts/CCBiffBamBoom.ttf") format("ttf");
  }
`;
export const GlobalStyle = createGlobalStyle`
  ${normalize}
  ${FontStyles}

  body {
    font-family: "Comic Neue", Sans-Serif;
  }

  h1 {
    font-family: CCBiffBamBoom;
  }
`;
