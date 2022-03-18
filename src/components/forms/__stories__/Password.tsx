import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
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

Decorated.play = async () => {
  const input = screen.getByPlaceholderText("password");

  await userEvent.type(input, "secret", { delay: 100 });
  userEvent.click(screen.getByRole("button"));

  await userEvent.type(input, "_pass", { delay: 300 });
  userEvent.click(screen.getByRole("button"));
};

export const Input = Template.bind({});
Input.args = {
  placeholder: "password",
  hideAdornment: true,
};
