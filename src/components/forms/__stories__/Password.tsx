import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Password from "../Password";

type PasswordComponent = typeof Password;

export default {
  title: "components/forms/Input/Password",
  component: Password,
} as ComponentMeta<PasswordComponent>;

const Template: ComponentStory<PasswordComponent> = args => (
  <Password {...args} />
);

export const Decorated = Template.bind({});
Decorated.args = {
  placeholder: "password",
};

export const Input = Template.bind({});
Input.args = {
  placeholder: "password",
  hideAdornment: true,
};
