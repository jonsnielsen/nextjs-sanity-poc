import React from 'react';

/* 
  Defining font face in createGlobalStyle causes font flicker. 
  see: https://github.com/styled-components/styled-components/issues/2205 
*/
const fontStyles = `
@font-face {
  font-family: 'Canela-Regular';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('static/fonts/Canela-Regular.woff') format('woff');
}

@font-face {
  font-family: 'Canela-Regular';
  font-style: italic;
  font-display: swap;
  font-weight: 400;
  src: url('static/fonts/Canela-RegularItalic.woff') format('woff');
}

@font-face {
  font-family: 'Founders-Grotesk-Regular';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('static/fonts/FoundersGroteskRegular.woff') format('woff');
}

@font-face {
  font-family: 'Termina-Regular';
  font-style: normal;
  font-display: swap;
  font-weight: 400;
  src: url('static/fonts/Termina-Regular.woff') format('woff');
}
`;

const WebFonts = () => (
  <style dangerouslySetInnerHTML={{ __html: fontStyles }} />
);

export default WebFonts;
