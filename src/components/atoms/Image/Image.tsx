import React from "react";
import styled, { css } from "styled-components/macro";

type Props = {
  src: string;
  width?: string;
  height?: string;
  objectFit?: string;
  borderWidth?: string;
  borderStyle?: string;
  borderColor?: string;
  borderRadius?: string;
};

export const DialogContent: React.FC<Props> = ({ src }) => {
  return <StyledImg src={src} />;
};

const StyledImg = styled.img<Omit<Props, "src">>(
  ({ width, height = "auto" }) => css`
    width: ${width};
    height: ${height};
  `
);

export default StyledImg;
