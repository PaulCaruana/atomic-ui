import React from "react";
import { ColoredHeadingOne } from "./Headings";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Atoms / Headings",
  decorators: [
    (Story) => {
      return (
        <div>
          <Story />
        </div>
      );
    },
  ],
} as Meta;

const Template: Story = (args) => {
  return <ColoredHeadingOne color={args.color} text={args.text} />;
};

export const ColourPickerDefault = Template.bind({});
ColourPickerDefault.args = {
  color: "#3333EE",
  text: "Colored heading one is working 😄",
};
ColourPickerDefault.storyName = "Default";
