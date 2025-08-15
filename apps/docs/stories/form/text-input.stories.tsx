import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { TextInput } from '@repo/ui/components/form/text-input';
import { RiLockLine, RiMailLine } from '@remixicon/react';

const meta = {
  title: "components/Text input",
  component: TextInput,
  tags: ['autodocs'],

  argTypes: {
    leadingIcon: {
      control: false,
      options: ['null', 'example-icon'],
      mapping: {
        null: null,
        'example-icon': <RiMailLine />
      }
    },
    error: {
      control: 'text'
    }
  },
  parameters: {
    layout: 'centered',
  }
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Email",
    name: 'email',
    placeholder: "abcxyz@gmail.com",
    hintText: "This is a hint text.",
    helpIcon: true,
    type: "text",
    leadingIcon: <RiMailLine />
  },
  render: (args) => {
    return <div className='w-[340px]'>
      <TextInput
        {...args}
      />
    </div>
  }
};
export const Error: Story = {
  args: {
    label: "Email",
    name: 'email',
    placeholder: "abcxyz@gmail.com",
    error: "This is an error message",
    helpIcon: true,
    type: "text",
    leadingIcon: <RiMailLine />
  },
  render: (args) => {
    return <div className='w-[340px]'>
      <TextInput
        {...args}
      />
    </div>
  }
};
export const Disabled: Story = {
  args: {
    label: "Email",
    name: 'email',
    placeholder: "abcxyz@gmail.com",
    hintText: "This is a hint text.",
    helpIcon: true,
    type: "text",
    disabled: true,
    leadingIcon: <RiMailLine />
  },
  render: (args) => {
    return <div className='w-[340px]'>
      <TextInput {...args} />
    </div>
  }
};
export const Password: Story = {
  args: {
    label: "Password",
    name: 'password',
    type: 'password',
    placeholder: "abcxyz@gmail.com",
    hintText: "This is a hint text.",
    leadingIcon: <RiLockLine />
  },
  render: (args) => {
    return <div className='w-[340px]'>
      <TextInput {...args} />
    </div>
  }
};