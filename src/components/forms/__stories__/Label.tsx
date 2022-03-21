import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "../Label";

export default {
  title: "components/forms/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = args => <Label {...args} />;

export const Regular = Template.bind({});
Regular.args = {
  children: "Regular",
};

export const Required = Template.bind({});
Required.args = {
  ...Regular,
  children: "Required",
  required: true,
};
