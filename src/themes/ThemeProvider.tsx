import React, { HTMLAttributes, useState } from 'react';
import { MuiThemeProvider, StylesProvider, NoSsr } from '@material-ui/core';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { defaultTheme, getSavedThemeName, muiThemes, saveThemeName } from '.';
import GlobalStyle from './global';

export const ThemeContext = React.createContext((themeName: string): void => null);

export interface ThemeProviderProps extends HTMLAttributes<HTMLDivElement> {
  themeName?: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ themeName, children }) => {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // Read saved theme name
  const savedThemeName = getSavedThemeName(defaultTheme);

  // State to hold the current theme name
  const [currThemeName, setCurrThemeName] = useState<string>(savedThemeName);

  // Change current theme name and save to storage
  const setThemeName = (name: string): void => {
    saveThemeName(name);
    setCurrThemeName(name);
  };

  // themeName can be passed in, for example Storybook
  // (This will override current state and saved state themes)
  if (themeName && currThemeName !== themeName) {
    setThemeName(themeName);
  }

  // Get the theme object by theme name
  const theme = muiThemes(currThemeName).theme;

  return (
    <NoSsr>
      <ThemeContext.Provider value={setThemeName}>
        <StylesProvider injectFirst>
          <CssBaseline />
          <SCThemeProvider theme={theme}>
            <GlobalStyle />
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
          </SCThemeProvider>
        </StylesProvider>
      </ThemeContext.Provider>
    </NoSsr>
  );
};

export default ThemeProvider;
