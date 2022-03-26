import { type ComponentMeta, type ComponentStory } from "@storybook/react";
import { PasswordField } from "../TextField";

export default {
  title: "components/forms/PasswordField",
  component: PasswordField,
} as ComponentMeta<typeof PasswordField>;

const Template: ComponentStory<typeof PasswordField> = args => (
  <PasswordField {...args} />
);

export const Base = Template.bind({});
Base.name = "PasswordField";
