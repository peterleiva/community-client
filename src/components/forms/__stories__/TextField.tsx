import { type ComponentStory, type ComponentMeta } from "@storybook/react";
import { screen, userEvent } from "@storybook/testing-library";
import TextField from "../TextField";
import Form from "../Form";

export default {
  title: "components/forms/TextField",
  component: TextField,
  decorators: [story => <Form>{story()}</Form>],
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = args => (
  <TextField {...args} />
);

export const Field = Template.bind({});
Field.args = {
  label: "Text",
  name: "text",
  required: false,
};

export const LengthField = Template.bind({});
LengthField.args = {
  ...Field.args,
  showLength: true,
  maxLength: 14,
};

export const WithError = Template.bind({});
WithError.args = {
  label: "With Error",
  name: "error",
  registerOptions: {
    pattern: {
      message: "custom validation message",
      value: /crazy-validation/,
    },
    minLength: { message: "min length is 13", value: 13 },
  },
};

WithError.play = async () => {
  const field = screen.getByLabelText(/error/i);

  await userEvent.type(field, "H{enter}");
};
