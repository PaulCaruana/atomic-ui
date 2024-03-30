import React from "react";
import { Button, ButtonGroup, ButtonProps } from "./Button";
import { Story, Meta } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <>
    <ButtonGroup
      style={{ marginRight: "4px" }}
      variant={"contained"}
      color={args.color}
      rounded={true}
      aria-label="contained primary button group"
    >
      <Button rounded={true}>One</Button>
      <Button rounded={true}>Two</Button>
      <Button rounded={true}>Three</Button>
    </ButtonGroup>

    <Button variant={"contained"} size={"large"} {...args}>
      Button
    </Button>
    <Button variant={"contained"} size={"small"} {...args}>
      Button
    </Button>
    <Button variant={"contained"} {...args}>
      Button
    </Button>
    <Button variant={"contained"} rounded={true} {...args}>
      Button
    </Button>
    <Button variant={"outlined"} {...args}>
      Button
    </Button>
    <Button variant={"text"} {...args}>
      Button
    </Button>
    <Button disabled variant={"contained"} {...args}>
      Button
    </Button>
  </>
);

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
};

export const Error = Template.bind({});
Error.args = {
  color: "error",
};

export const Warning = Template.bind({});
Warning.args = {
  color: "warning",
};

export const Info = Template.bind({});
Info.args = {
  color: "info",
};

export const Success = Template.bind({});
Success.args = {
  color: "success",
};
