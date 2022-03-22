import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Toast from "../Toast";
import Details from "./Toast.md";

export default {
  title: "components/Toast",
  component: Toast,
  argTypes: {
    onClose: { action: true },
  },
  parameters: {
    backgrounds: {
      values: [
        { name: "rose", value: "#fff1f2" },
        { name: "dark", value: "#1e293b" },
      ],
    },
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = args => <Toast {...args} />;

export const Success = Template.bind({});
Success.args = {
  theme: "success",
  title: "Successfull Operation !",
  linkTo: "#",
  description: "Here we have a detailed description of the operation",
  linkLabel: "Go to resource",
};

export const Info = Template.bind({});
Info.args = {
  theme: "info",
  title: "Informational title",
  linkTo: "#",
  description: "Here we have a detailed description of the operation",
  linkLabel: "Full story",
};

export const Error = Template.bind({});
Error.args = {
  theme: "error",
  title: "Unexpected Error",
  linkTo: "#",
  description: "Here we have a detailed description of the operation",
  linkLabel: "Details about the error",
};

export const Warning = Template.bind({});
Warning.args = {
  theme: "warning",
  title: "Be careful",
  linkTo: "#",
  description: "Here we have a detailed description of the operation",
  linkLabel: "Please, contact our staff",
};

export const Detailed = Template.bind({});
Detailed.args = {
  theme: "warning",
  title: "Be careful",
  linkTo: "#",
  description: Details,
  linkLabel: "Please, contact our staff",
};
