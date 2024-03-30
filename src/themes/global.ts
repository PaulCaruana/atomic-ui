import { createGlobalStyle } from 'styled-components';
import { Theme } from '@material-ui/core';
import { TypographyOptions } from '@material-ui/core/styles/createTypography';

export type themeProps = {
  theme: Theme;
};
export default createGlobalStyle`
${({ theme }: themeProps) => `
  ${buildViewPortFontSize(12, 320, 18, 1920)}
  ${buildViewPortFontSize(12, 320, 18, 1920, '.viewport-unit')}
  * {
    box-sizing: border-box;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    margin-bottom: 0.35em;
  }
  sub, sup {
    font-size: 0.6em;
  }
  nav {
    text-transform: uppercase;
  }
  body {
    background: ${theme.palette.background.default};
    color: ${theme.palette.text.primary};
   }

  a {
    color: ${theme.palette.text.primary};
  }
  ${buildTypographyElements(theme)}
  `}
`;
function buildViewPortFontSize(minSize, minVP, maxSize, maxVP, selector = 'html') {
  const css = `${selector} {
    font-size: calc(${minSize}px + (100vw - ${minVP}px) / ${(maxVP - minVP) / (maxSize - minSize)});
  }
  @media (max-width: ${minVP}px) {
    ${selector} {
        font-size: ${minSize}px;
    }
  }
  @media (min-width: ${maxVP}px) {
    ${selector} {
        font-size: ${maxSize}px;
    }
  }
  `;
  return css;
}

function buildTypographyElements(theme: Theme) {
  const selectors = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    body: 'body1',
    '.compact': 'body2',
    caption: 'caption',
    '.subtitle': 'subtitle1',
    small: 'subtitle2',
    button: 'button',
    nav: 'overline',
  };
  const styles = {
    fontSize: 'font-size',
    fontFamily: 'font-family',
    fontWeight: 'font-weight',
    lineHeight: 'line-height',
    letterSpacing: 'letter-spacing',
  };
  let css = '';
  for (const selectorName of Object.keys(selectors)) {
    let selectorProps = '';
    const variant = selectors[selectorName];
    for (const style of Object.keys(styles)) {
      const attr = `${styles[style]}`;
      const value = `${theme.typography[variant][style]}`;
      const cssProp = `\t${attr}: ${value};\n\r`;
      selectorProps += cssProp;
    }
    const cssSelector = `${selectorName} {\n\r${selectorProps}}\n\r`;
    css += cssSelector;
  }
  console.log(css);
  return css;
}
