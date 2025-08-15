import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Toggle } from '@repo/ui/components/form/toggle';
import { useState } from 'react';

const meta = {
  title: 'components/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md']
    }
  }
} satisfies Meta<typeof Toggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    disabled: false,
    name: "toggle"
    // checked: true
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  }
};
export const Checked: Story = {
  args: {
    disabled: false,
    name: "toggle"
    // checked: true
  },
  render: (args) => {
    const [checked, setChecked] = useState(true);
    return <Toggle {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  }
};
export const Disabled: Story = {
  args: {
    disabled: true,
    name: "toggle"
    // checked: true
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return <Toggle {...args} checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  }
};