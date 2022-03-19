import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../Input";
import LengthAdornment from "../LengthAdornment";

type InputComponent = typeof Input;

export default {
  title: "components/forms/Input",
  component: Input,
} as ComponentMeta<InputComponent>;

const Template: ComponentStory<InputComponent> = args => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  type: "text",
  placeholder: "text",
};

export const HelperText = Template.bind({});
HelperText.args = {
  ...Text.args,
  helperText: "example with helper text",
};

export const Button = Template.bind({});
Button.args = {
  type: "button",
  value: "Button",
};

export const Checkbox = Template.bind({});
Checkbox.args = {
  type: "checkbox",
  placeholder: "checkbox",
};

export const Radio = Template.bind({});
Radio.args = {
  type: "radio",
  placeholder: "radio",
};

export const Range = Template.bind({});
Range.args = {
  type: "range",
  placeholder: "range",
};

export const Reset = Template.bind({});
Reset.args = {
  type: "reset",
};

export const Date = Template.bind({});
Date.args = {
  type: "date",
  placeholder: "date",
};

export const Email = Template.bind({});
Email.args = {
  type: "email",
  placeholder: "number",
};

export const Number = Template.bind({});
Number.args = {
  type: "number",
  placeholder: "number",
};

export const Password = Template.bind({});
Password.args = {
  type: "password",
  placeholder: "password",
};

export const Search = Template.bind({});
Search.args = {
  type: "search",
  placeholder: "search",
};

export const File = Template.bind({});
File.args = {
  type: "file",
  placeholder: "file",
};

export const Month = Template.bind({});
Month.args = {
  type: "month",
  placeholder: "month",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Text.args,
  placeholder: "Disabled",
  disabled: true,
};

export const InputLength = Template.bind({});
InputLength.args = {
  ...Text.args,
  maxLength: 154,
  endDecoration: <LengthAdornment maxLength={150} />,
};
