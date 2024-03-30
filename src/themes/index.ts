import { Theme } from "@material-ui/core";
import { lightTheme } from "./light";
import { darkTheme } from "./dark";

export const defaultTheme = "lightTheme";

const THEME_KEY = "_theme-key";
export const getSavedThemeName = (dft = defaultTheme) => {
  if (typeof window !== "undefined" && window.localStorage) {
    const saved = window.localStorage.getItem(THEME_KEY);
    if (saved) {
      return saved;
    }
  }
  return dft;
};

export const saveThemeName = (themeName: string) => {
  if (window.localStorage) {
    window.localStorage.setItem(THEME_KEY, themeName);
  }
};

export type ThemeProps = {
  label: string;
  theme: Theme;
  default: () => boolean;
};

export function muiThemes(themeName: string): ThemeProps {
  return themeMap[themeName];
}
export const themeMap: { [key: string]: ThemeProps } = {
  lightTheme: {
    label: "Light",
    theme: lightTheme,
    default: () => getSavedThemeName(defaultTheme) === "lightTheme",
  },
  darkTheme: {
    label: "Dark",
    theme: darkTheme,
    default: () => getSavedThemeName(defaultTheme) === "darkTheme",
  },
};

export const RGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)].join(", ") : null;
};
export const RGBA = (hex: string, opacity: number) => {
  const rgb = RGB(hex);
  if (!rgb) {
    return null;
  }
  return `${rgb}, ${opacity}`;
};
