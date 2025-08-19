import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { StatisticsCard } from '@repo/ui/components/marketing/statistics-card';

const meta = {
  title: 'Marketing/Statistics card',
  component: StatisticsCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },

} satisfies Meta<typeof StatisticsCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Downloads',
    value: 100000000,
    duration: 2000,
    animate: false
  },
  render: (args) => {
    return (
      <div className='w-[340px]'>
        <StatisticsCard {...args} value={args.value} />
      </div>
    )
  }
};
export const Animated: Story = {
  args: {
    title: 'Downloads',
    value: 100000000,
    duration: 2000,
    animate: true
  },
  render: (args) => {
    return (
      <div className='w-[340px]'>
        <StatisticsCard {...args} value={args.value} />
      </div>
    )
  }
};




