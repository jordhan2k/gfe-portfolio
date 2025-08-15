import { RiStarLine } from '@remixicon/react';
import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '@repo/ui/components/ui/button';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Content inside the button, icons can be included'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link-color', 'link-gray', 'destructive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    disabled: {
      control: 'boolean'
    },
  },
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
    disabled: false,
  }
};
export const LeadingIcon: Story = {
  args: {
    children: <>
      <RiStarLine />
      Click me
    </>
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
};
export const TrailingIcon: Story = {
  args: {
    children: <>
      Click me
      <RiStarLine />
    </>
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
};
export const IconOnly: Story = {
  args: {
    children: <>
      <RiStarLine />
    </>
  },
  parameters: {
    controls: {
      exclude: ['children'],
    },
  },
};
export const Disabled: Story = {
  args: {
    children: 'Click me',
    disabled: true
  }
};