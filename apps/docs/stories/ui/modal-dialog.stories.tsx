import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { ModalDialog } from '@repo/ui/components/ui/modal-dialog';

const meta = {
  title: 'components/Modal dialog',
  component: ModalDialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ModalDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    visible: true,
    onOpenChange: () => { },
    title: "Are you sure you want to leave the process?",
    description: "Your upgrade plan process will be cancelled. You need to start again if you leave the process.",
    cancelText: "No",
    confirmText: "Yes",
    onConfirm: () => { },
    variant: 'primary'
  }
};
export const SingleButton: Story = {
  args: {
    visible: true,
    onOpenChange: () => { },
    title: "Are you sure you want to leave the process?",
    description: "Your upgrade plan process will be cancelled. You need to start again if you leave the process.",
    confirmText: "Yes",
    onConfirm: () => { },
    variant: 'primary'
  }
};
