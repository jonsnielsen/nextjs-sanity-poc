import { createGlobalStyle } from 'styled-components';
import theme from './theme';
import reset from './styledReset';

const GlobalStyles = createGlobalStyle`

/* css reset */
${reset}

/* 
  Keep focus outline when navigating with keyboard, but removing when clicking.
  Used by focus-visible package 
*/
.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}


*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html {
  font-family: ${theme.font.text.fontFamily};
  font-weight: ${theme.font.text.fontWeight.regular};
  font-size: ${theme.font.text.fontSize.body1};
  color: ${theme.colors.onBackground};
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html, body, #__next {
  height: 100%;
}

body {
  overflow-x: hidden;
}

h1 {
  font-family: ${theme.font.text.fontFamily};
  font-weight: ${theme.font.text.fontWeight.bold};
  font-size: ${theme.font.text.fontSize.h1};
}

a {
  text-decoration: none;
  display: inline-block;
  color: ${theme.colors.onBackground};
}

button {
  display: inline-block;
  border: none;
  text-decoration: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}
`;

export default GlobalStyles;
