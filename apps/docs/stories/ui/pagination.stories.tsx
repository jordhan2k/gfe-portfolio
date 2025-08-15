import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Pagination } from '@repo/ui/components/ui/pagination';

const meta = {
  title: 'components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    initialPage: {
      control: 'number'
    },
    totalPages: {
      control: 'number'
    },
    iconOnly: {
      control: 'boolean'
    }
  },

  parameters: {
    layout: 'centered',
    controls: {
      exclude: ['className', 'onPageChange'],
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    initialPage: 1,
    totalPages: 10
  }
};
export const IconOnly: Story = {
  args: {
    initialPage: 1,
    totalPages: 10,
    iconOnly: true
  }
};
export const ShortRange: Story = {
  args: {
    initialPage: 1,
    totalPages: 5,
  }
};