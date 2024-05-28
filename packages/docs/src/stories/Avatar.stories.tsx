import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarProps } from "@ignite-ui/react/src";

export default {
  title: "Typography/Avatar",
  component: Avatar,
  args: {
    src: "https://github.com/Esmaily87.png",
    alt: "Esmaily Peixoto",
  
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
        
      },
    },
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
