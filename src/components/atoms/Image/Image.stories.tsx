import React from "react";
import Image from "./Image";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Atoms / Image",
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
  return <Image {...args} />;
};

export const ImageDefault = Template.bind({});
ImageDefault.args = {
  src: "/images/tesla.jpg",
  width: "100px",
};
ImageDefault.storyName = "Default";
