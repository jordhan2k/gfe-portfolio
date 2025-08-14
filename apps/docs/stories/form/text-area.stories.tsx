import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextArea } from '@repo/ui/src/components/form/text-area';
import { useState } from 'react';

const meta = {
  title: 'Components/Text area',
  component: TextArea,
  tags: ['autodocs'],
} satisfies Meta<typeof TextArea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Description",
    name: "description",
    error: null,
    maxLength: 500,
    placeholder: 'Write your description...',
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  }
};
export const Error: Story = {
  args: {
    label: "Description",
    name: "description",
    error: "This is an error message.",
    maxLength: 500,
    placeholder: 'Write your description...'
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  }
};
export const Disabled: Story = {
  args: {
    label: "Description",
    name: "description",
    maxLength: 500,
    placeholder: 'Write your description...',
    disabled: true
  },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  }
};
export const LengthExceeded: Story = {
  args: {
    label: "Description",
    name: "description",
    maxLength: 20,
    placeholder: 'Write your description...',
  },
  render: (args) => {
    const [value, setValue] = useState('A very long content that could event exceed the max length of the text area');
    return <TextArea
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  }
};