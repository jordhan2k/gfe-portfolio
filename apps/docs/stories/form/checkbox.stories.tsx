import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Checkbox } from '@repo/ui/components/form/checkbox';
import { useState } from 'react';

const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    label: 'You agree to share your information with us',
    name: 'checkbox',
    // indeterminate: false,
    // checked: true
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  }
};
export const Indeterminate: Story = {
  args: {
    disabled: false,
    label: 'You agree to share your information with us',
    name: 'checkbox',
    // checked: true
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Checkbox {...args} indeterminate checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  }
};