import * as React from "react";

interface Props {
  text: string;
  color: string;
}

export const ColoredHeadingOne = ({ text, color }: Props) => {
  return <h2 style={{ color }}>{text}</h2>;
};

export const ColoredHeadingTwo = ({ text, color }: Props) => {
  return <h3 style={{ color }}>{text}</h3>;
};
