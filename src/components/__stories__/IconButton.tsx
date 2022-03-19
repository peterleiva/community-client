import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { IconButton } from "../Button";
import { BsPlus } from "react-icons/bs";

export default {
  title: "components/Button",
  component: IconButton,
  args: {
    children: <BsPlus />,
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => (
  <IconButton {...args} />
);

export const Icon = Template.bind({});
