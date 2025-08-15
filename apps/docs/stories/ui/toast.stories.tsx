import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import ToastWrapper from './toast-wrapper';
import Toast from '@repo/ui/components/ui/toast';
import { Toaster } from '@repo/ui/components/ui/toaster';

const meta = {
  title: 'components/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    presentation: { table: { disable: true }, control: false },
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info']
    }
  },
  parameters: {
    layout: 'centered'
  }
} satisfies Meta<typeof Toast>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    message: "Your content is publicly visible.",
    presentation: true
  }
};
export const Demo: Story = {
  args: {
    message: "Your content is publicly visible."
  },

  render: () => {
    return <>
      <ToastWrapper />
      <Toaster />
    </>
  }
};