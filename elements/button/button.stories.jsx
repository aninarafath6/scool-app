import React from "react";

import Button from "./index";

export default {
  title: "Example/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

const Template = (args) => <Button {...args}>Click</Button>;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
};
