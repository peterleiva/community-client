import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import PasswordInput from "../PasswordInput";

type PasswordComponent = typeof PasswordInput;

export default {
  title: "components/forms/Input",
  component: PasswordInput,
} as ComponentMeta<PasswordComponent>;

const Template: ComponentStory<PasswordComponent> = args => (
  <PasswordInput {...args} />
);

export const Password = Template.bind({});
Password.args = {
  placeholder: "password",
};

Password.play = async () => {
  const input = screen.getByPlaceholderText("password");

  await userEvent.type(input, "secret", { delay: 100 });
  userEvent.click(screen.getByRole("button"));

  await userEvent.type(input, "_pass", { delay: 300 });
  userEvent.click(screen.getByRole("button"));
};
