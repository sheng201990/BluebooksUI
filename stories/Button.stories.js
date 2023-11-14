import { Button } from "../components/Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    style: { control: "object" },
  },
};

const Template = (args) => <Button {...args} />;

export const Btn = Template.bind({});

Btn.args = {
  label: "Button",
  type: "primary",
  style: undefined,
  disable: false,
  size: "regular",
  prefix: false,
  suffix: false,
  onClick: () => console.log("Hi"),
};
