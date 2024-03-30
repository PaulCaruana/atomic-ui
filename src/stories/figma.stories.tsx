import React from "react";
import { withDesign } from "storybook-addon-designs";
import { Button } from "./Button";

export default {
  title: "My stories",
  component: Button,
  decorators: [withDesign],
};

export const myStory = () => (
  <Button primary={true} label={"Button"}>
    Hello, World!
  </Button>
);

myStory.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File",
  },
};
