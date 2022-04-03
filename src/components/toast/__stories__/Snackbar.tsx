import type { ComponentStory, ComponentMeta } from "@storybook/react";
import { ToastProvider } from "../context";
import Snackbar from "../Snackbar";

export default {
  title: "pages/Snackbar",
  component: Snackbar,
  decorators: [story => <ToastProvider>{story()}</ToastProvider>],
} as ComponentMeta<typeof Snackbar>;

const Template: ComponentStory<typeof Snackbar> = () => <Snackbar />;

export const Toasts = Template.bind({});
