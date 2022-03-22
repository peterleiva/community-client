import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ToastProvider } from "components/toast";
import SignUp from "../signup";

export default {
  title: "pages",
  component: SignUp,
  parameters: {
    layout: "fullscreen",

    backgrounds: {
      default: "#fff1f2",
    },
  },

  decorators: [story => <ToastProvider>{story()}</ToastProvider>],
} as ComponentMeta<typeof SignUp>;

const Template: ComponentStory<typeof SignUp> = args => <SignUp {...args} />;

export const signup = Template.bind({});
