import { TagBadge } from "../components/Badge";

export default {
  title: "Badge",
  component: TagBadge,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    style: { control: "object" },
  },
};

const Template = (args) => <TagBadge {...args} />;

export const tag = Template.bind({});

tag.args = {
  label: "Success",
  type: "primary",
  style: undefined,
  prefix: false,
};
