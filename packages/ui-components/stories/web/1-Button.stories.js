import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../../lib/button";

export default {
  title: "Button",
  component: Button
};

export const Text = () => (
  <Button onClick={action("clicked")}>Hello Button</Button>
);

export const Button1 = () => (
  <Button onClick={action("clicked")}>
    Happy - button!
  </Button>
);
