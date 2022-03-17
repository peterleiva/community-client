import { ComponentMeta, ComponentStory } from "@storybook/react";
import { BsPlus as ButtonIcon } from "react-icons/bs";
import Button from "../Button";

type ButtonComponent = typeof Button;

export default {
  title: "components/Button",
  component: Button,
  argTypes: {
    onClick: { action: true },
  },
} as ComponentMeta<ButtonComponent>;

const Template: ComponentStory<ButtonComponent> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Outlined",
  variant: "outlined",
};

export const FullyIconified = Template.bind({});
FullyIconified.args = {
  startIcon: <ButtonIcon />,
  children: "Iconified",
  endIcon: <ButtonIcon />,
};

export const StartIcon = Template.bind({});
StartIcon.args = {
  startIcon: <ButtonIcon />,
  children: "Start Icon",
};

export const EndIcon = Template.bind({});
EndIcon.args = {
  children: "End Icon",
  endIcon: <ButtonIcon />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: "End Icon",
  endIcon: <ButtonIcon />,
};

export const Link = Template.bind({});
Link.args = {
  href: "javascript:void(0)",
  children: "Link",
  startIcon: <ButtonIcon />,
};

export const Block = Template.bind({});
Block.args = {
  href: "javascript:void(0)",
  children: "Link",
  block: true,
  startIcon: <ButtonIcon />,
};
