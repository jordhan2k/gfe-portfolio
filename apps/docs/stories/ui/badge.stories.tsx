import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from '@repo/ui/components/ui/badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['neutral', 'danger', 'warning', 'success', 'brand']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl']
    }
  },
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'brand',
    size: 'md',
    children: 'Badge'
  }
};

const variants = ['neutral', 'danger', 'warning', 'success', 'brand'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

export const Demo: Story = {
  args: {
  },
  render: (args) => (
    <div className='flex flex-col gap-4'>{
      variants.map((variant) => (
        <div key={`${variant}`} className="flex flex-row gap-6 items-center">
          {sizes.map((size) => (
            <Badge
              key={`${variant}-${size}`}
              variant={variant}
              size={size}
            >
              {args.children ?? "Badge"}
            </Badge>

          ))
          }
        </div>
      ))
    }</div>
  )

};

