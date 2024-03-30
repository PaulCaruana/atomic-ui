import React from "react";
import styled from "styled-components";
import MuiButton, { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";
import MuiButtonGroup, { ButtonGroupProps as MuiButtonGroupProps } from "@material-ui/core/ButtonGroup";
import { Theme } from "@material-ui/core";
import { RGBA } from "~/themes/";

export type ButtonGroupProps = MuiButtonGroupProps & {
  theme?: Theme;
  rounded?: boolean;
};
export const ButtonGroup = styled(MuiButtonGroup)`
  ${({ rounded }: ButtonGroupProps) => `
  border-radius: ${rounded ? "30px" : "3px"};
  `}
` as React.ComponentType<MuiButtonGroupProps & { rounded?: boolean }>;

export type ButtonProps = MuiButtonProps & {
  theme: Theme;
  rounded?: boolean;
};
const backgroundColor = (theme: Theme, color: string, variant: string) => {
  if (color && color !== "default") {
    return variant === "contained" ? theme.palette[color].main : theme.palette.background.default;
  }
  return variant === "contained" ? theme.palette.grey["500"] : "none";
};
const backgroundColorHover = (theme: Theme, color: string, variant: string) => {
  if (color && color !== "default") {
    return variant === "contained" ? theme.palette[color].dark : theme.palette.background.default;
  }
  return variant === "contained" ? theme.palette.grey["600"] : theme.palette.background.default;
};
const text = (theme: Theme, color: string, variant: string) => {
  if (color && color !== "default") {
    return variant === "contained" ? theme.palette.common.white : theme.palette[color].main;
  }
  return variant === "contained" ? theme.palette.common.white : "inherited";
};

const boxShadow = (theme: Theme, color: string, variant: string) => {
  if (color === "default") {
    return "inherit";
  }
  if (color && variant === "contained") {
    return theme.palette[color].main;
  }
  return "inherit";
};
const boxShadowHover = (theme: Theme, color: string, variant: string) => {
  if (color && variant !== "text" && color !== "default") {
    return `0 14px 26px -12px rgba(${RGBA(theme.palette[color].dark, 0.42)}),
      0 4px 23px 0px rgba(${RGBA(theme.palette[color].dark, 0.12)}),
      0 8px 10px -5px rgba(${RGBA(theme.palette[color].dark, 0.2)});
    `;
  }
  return "inherit";
};

const padding = (size: string) => {
  if (!size || size === "" || size === "medium") {
    return "0.75em 2em";
  }
  if (size === "small") {
    return "0.5em 1.33em";
  }
  if (size === "large") {
    return "1em 2.66em";
  }
  return "";
};

export const Button = styled(MuiButton)`
  ${({ theme, color, variant, size, rounded }: ButtonProps) => `
  cursor: pointer;
  border-radius: ${rounded ? "30px" : "3px"};
  font-size: 0.87em;
  min-height: auto;
  min-width: auto;
  position: relative;
  padding: ${padding(size || "")};
  background-color: ${backgroundColor(theme, color || "", variant || "")};
  color: ${text(theme, color || "", variant || "")};
  box-shadow: ${boxShadow(theme, color || "", variant || "")};
  transition: box-shadow .2s cubic-bezier(.4,0,1,1),background-color .2s cubic-bezier(.4,0,.2,1);
  vertical-align: middle;
  white-space: nowrap;
  &:hover {
    background-color: ${backgroundColorHover(theme, color || "", variant || "")};
    box-shadow: ${boxShadowHover(theme, color || "", variant || "")};
   }
  `}
` as React.ComponentType<MuiButtonProps & { rounded?: boolean }>;
